import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},

      async authorize(credentials) {
        const { Username, Password } = credentials;
        try {
          const res = await axios.post(
            'https://kblsf.site/DLogicKBL/salesforce_api.php?action=login',
            { Username, Password }
          );
          console.log(res);
          if (!res.data.success) {
            return null;
          }
          const user = {
            id: res.data.user.UserID,
            EmployeeID: res.data.user.EmployeeID,
            Username: res.data.user.Username,
            email: res.data.user.Email,
            Phone: res.data.user.Phone,
            avatar: res.data.user.Userpicture,
          };
          return user;
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token }) {
      return token;
    },
    async session({ session, token }) {
      const res = await axios.get(
        `https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_sndUser&UserID=${token.sub}`
      );
      let userData = res.data;
      session.user.id = userData.UserID;
      session.user.employeeId = userData.EmployeeID;
      session.user.email = userData.Email;
      session.user.name = userData.EmpName;
      session.user.avatar = userData.Userpicture;
      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
