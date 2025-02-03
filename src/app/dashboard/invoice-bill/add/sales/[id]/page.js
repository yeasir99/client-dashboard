const page = () => {
    return (
      <>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl capitalize mb-3">Add Invoice</h1>
          <form>
            <input
              name="search"
              type="text"
              placeholder="Search"
              className="text-md outline-1 border-1 focus:ring-0 rounded-md w-[300px] text-sm"
            />
          </form>
        </div>
        <div className="w-full bg-gray-200 rounded-md px-4 py-4">
          <h1 className="text-2xl capitalize mb-3">pending sales order</h1>
          <table className="max-w-full w-full border border-neutral-200 text-center text-sm font-light text-surface dark:border-white/10 dark:text-white">
            <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
              <tr>
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
                  Challan Number
                </th>
                <th
                  scope="col"
                  className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                >
                  Challan Date
                </th>
                <th
                  scope="col"
                  className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                >
                  Sale Order No
                </th>
                <th
                  scope="col"
                  className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                >
                  Party Name
                </th>
                <th
                  scope="col"
                  className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                >
                  Total Amount
                </th>
  
                <th scope="col" className="px-6 py-4">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-neutral-200 dark:border-white/10">
                <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                  1
                </td>
                <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                  CHL-2024-15
                </td>
                <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                  2024-09-15
                </td>
                <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                  CHL-2024-15
                </td>
                <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                  1-Library
                </td>
                <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                  1500
                </td>
  
                <td className="whitespace-nowrap px-6 py-4 flex justify-center gap-3">
                  <input type="checkbox" />
                </td>
              </tr>
              <tr className="border-b border-neutral-200 dark:border-white/10">
                <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                  1
                </td>
                <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                  CHL-2024-15
                </td>
                <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                  2024-09-15
                </td>
                <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                  CHL-2024-15
                </td>
                <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                  1-Library
                </td>
                <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                  1500
                </td>
  
                <td className="whitespace-nowrap px-6 py-4 flex justify-center gap-3">
                  <input type="checkbox" />
                </td>
              </tr>
            </tbody>
          </table>
          <form>
            <h1 className="text-2xl capitalize mb-3">add delivery challan</h1>
            <div>
              <label
                htmlFor="designation"
                className="block text-sm font-bold mb-1"
              >
                Invoice No:
              </label>
              <input
                type="text"
                id="designation"
                className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
              />
              <div>
                <label className="capitalize flex font-semibold text-md py-1">
                  Invoice Date:
                </label>
  
                <select name="zone" className="w-full rounded-md">
                  <option value="" disabled={true} selected>
                    dd-mm-YYYY
                  </option>
                </select>
              </div>
              <label className="block text-sm font-bold mb-1">Challan ID:</label>
              <input
                type="text"
                className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
              />
              <label className="block text-sm font-bold mb-1">Party Name:</label>
              <input
                type="text"
                className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
              />
              <div>
                <label className="capitalize flex font-semibold text-md py-1">
                  Payment Status:
                </label>
  
                <select name="zone" className="w-full rounded-md">
                  <option value="" disabled={true} selected>
                    Unpaid
                  </option>
                  <option value="Zone one">Paid</option>
                </select>
              </div>
            </div>
            {/* table Start */}
            <div className="flex flex-col">
              <h1 className="text-2xl capitalize mb-3">Product Details</h1>
              <div className="overflow-x-auto">
                <div className="inline-block max-w-full w-full pt-5">
                  <div className="overflow-hidden">
                    <table className="max-w-full w-full border border-neutral-200 text-center text-sm font-light text-surface dark:border-white/10 dark:text-white">
                      <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                        <tr className="bg-text1 text-white">
                          <th
                            scope="col"
                            className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                          >
                            Financial Year
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
                            Qty
                          </th>
                          <th
                            scope="col"
                            className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                          >
                            Price
                          </th>
  
                          <th scope="col" className="px-6 py-4">
                            T.Amount
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-neutral-200 dark:border-white/10">
                          <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                            FY-2023
                          </td>
                          <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                            Group A
                          </td>
                          <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                            mathematics-class 10
                          </td>
                          <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                            300
                          </td>
                          <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                            2000
                          </td>
  
                          <td className="whitespace-nowrap px-6 py-4 flex justify-center gap-3">
                            60000
                          </td>
                        </tr>
                        <tr className="border-b border-neutral-200 dark:border-white/10">
                          <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                            FY-2023
                          </td>
                          <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                            Group A
                          </td>
                          <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                            mathematics-class 10
                          </td>
                          <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                            300
                          </td>
                          <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                            2000
                          </td>
  
                          <td className="whitespace-nowrap px-6 py-4 flex justify-center gap-3">
                            60000
                          </td>
                        </tr>
                        <tr className="border-b border-neutral-200 dark:border-white/10">
                          <td
                            className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10"
                            colSpan="4"
                          ></td>
                          <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                            Total
                          </td>
  
                          <td className="whitespace-nowrap px-6 py-4 flex justify-center gap-3">
                            120000
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
  
            {/* table Start */}
            <div className="flex flex-col">
              <h1 className="text-2xl capitalize mb-3">Product Details</h1>
              <div className="overflow-x-auto">
                <div className="inline-block max-w-full w-full pt-5">
                  <div className="overflow-hidden">
                    <table className="max-w-full w-full border border-neutral-200 text-center text-sm font-light text-surface dark:border-white/10 dark:text-white">
                      <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                        <tr className="bg-text1 text-white">
                          <th
                            scope="col"
                            className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                          >
                            Cost Type
                          </th>
                          <th
                            scope="col"
                            className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                          >
                            Cost Center
                          </th>
                          <th
                            scope="col"
                            className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                          >
                            QTY
                          </th>
  
                          <th
                            scope="col"
                            className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                          >
                            Price
                          </th>
  
                          <th scope="col" className="px-6 py-4">
                            T.Amount
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-neutral-200 dark:border-white/10">
                          <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                            Parking
                          </td>
                          <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                            New Parking
                          </td>
                          <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                            100
                          </td>
  
                          <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                            2000
                          </td>
  
                          <td className="whitespace-nowrap px-6 py-4 flex justify-center gap-3">
                            200000
                          </td>
                        </tr>
                        <tr className="border-b border-neutral-200 dark:border-white/10">
                          <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                            Transport Cost
                          </td>
                          <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                            Sundarban Corier
                          </td>
  
                          <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10"></td>
                          <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10"></td>
  
                          <td className="whitespace-nowrap px-6 py-4 flex justify-center gap-3">
                            60000
                          </td>
                        </tr>
                        <tr className="border-b border-neutral-200 dark:border-white/10">
                          <td
                            className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10"
                            colSpan="3"
                          ></td>
                          <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                            Total
                          </td>
  
                          <td className="whitespace-nowrap px-6 py-4 flex justify-center gap-3">
                            260000
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="mt-5">
              <button className="capitalize bg-primary px-5 py-1 text-white rounded-md w-full">
                Save invoice
              </button>
            </div>
          </form>
        </div>
      </>
    );
  };
  
  export default page;
  