import {useState} from 'react'
const Authorized = ({viewableData}) => {
    const [formData, setFormData] = useState({
        AuthComments: ''
    })

    const handleReject = async () =>{
        // handle cancel
    }
    const handleChecked = async () =>{
        // handle reject
    }
    if(viewableData.status === 'pending'){
        return <div className="text-xl font-semibold text-center py-5">Loading...</div>
    }
  return (
    <>
        <div>
        <div className="flex justify-center">
      <div className="min-w-[600px] rounded-md bg-gray-300 p-5">
        <h1 className="text-center text-xl font-semibold mb-3">
          Expense Information
        </h1>
        {viewableData.data === null ? <div className="text-center text-xl font-semibold py-5">No Data to Display</div> : <>
            <div className="flex items-center gap-2">
          <h1 className="text-lg">ID:</h1>
          <h1>{viewableData.data.BDExpReq.BDExpReqID}</h1>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-lg">Exp No:</h1>
          <h1>{viewableData.data.BDExpReq.BDExpReqNo}</h1>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-lg">Date:</h1>
          <h1>{viewableData.data.BDExpReq.BDExpReqDate}</h1>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-lg">Party Name:</h1>
          <h1>{viewableData.data.BDExpReq.InstitutionName}</h1>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-lg">Total Amount:</h1>
          <h1>{viewableData.data.BDExpReq.TotalAmount}</h1>
        </div>
        </>}
      </div>
    </div>
    </div>
    {/* table start */}
    <div className="flex flex-col">
      <div>
        <div className="inline-block max-w-full w-full pt-5">
          <div className="overflow-x-scroll">
            <table className="max-w-full w-full overflow-x-scroll border border-neutral-200 text-center text-sm font-light text-surface dark:border-white/10 dark:text-white">
              <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                <tr className="bg-text1 text-white">
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    SL
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Teacher Name
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Designation
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Number
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Books Group
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Books Name
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Students Count
                  </th>
                 
                  <th scope="col" className="px-6 py-4">
                  Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {viewableData.data.BDExpReqDetails.length ? (
                    viewableData.data.BDExpReqDetails.map(item => (
                    <tr
                      className="border-b border-neutral-200 dark:border-white/10"
                      key={item.SL}
                    >
                      <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                        {item.SL}
                      </td>
                      <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                        {item.TeacherName}
                      </td>
                      <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                        {item.Designation}
                      </td>
                      <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                        {item.ContactPhone}
                      </td>
                      <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                        {item.BooksGroup}
                      </td>
                      <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                        {item.ProductName}
                      </td>
                      <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                        {item.StudentsCount}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 flex justify-center gap-3">
                        {item.DonationAmount}
                      </td>
                    </tr>
                  ))
                ) : (
                  <div className="text-center text-xl font-semibold">
                    No Data to Display
                  </div>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div className="py-6">

        <label
            htmlFor="AuthComments"
            className="block text-sm font-bold mb-1"
          >
            Authorization Comment:
          </label>
            <textarea id="AuthComments" className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm" name="AuthComments" type="text" value={formData.AuthComments} onChange={e => {
                setFormData({
                    ...formData,
                    AuthComments: e.target.value
                })
            }}  />
<div className="flex justify-between py-3 px-1">
          <button className="bg-red-400 px-6 py-2 rounded-md text-white" onClick={handleReject}>
            Reject
          </button>
          <button className="bg-primary px-6 py-2 rounded-md text-white" onClick={handleChecked}>
            Checked
          </button>
        </div>
    </div>
    </>
  )
}

export default Authorized