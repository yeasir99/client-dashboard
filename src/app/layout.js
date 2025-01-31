import { Poppins } from 'next/font/google';
import './globals.css';
import AuthProvider from '@/components/AuthProvider';

const poppins = Poppins({
  weight: ['300', '500', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'kazal Brothers Limited',
  description: 'kazal Brothers Limited',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
