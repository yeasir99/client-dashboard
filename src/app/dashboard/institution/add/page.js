const page = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl capitalize mb-3">Institution Management</h1>
        <form>
          <input
            name="search"
            type="text"
            placeholder="Search"
            className="text-md outline-1 border-1 focus:ring-0 rounded-md w-[300px] text-sm"
          />
        </form>
      </div>
      <div className="bg-gray-200 rounded-md px-4 py-4">
        <h2 className="text-lg font-semibold mb-2 capitalize">
          add new Institution
        </h2>
        <form>
          <div>
            <label className="capitalize flex font-semibold text-md py-1">
              Institution Type:
            </label>

            <select name="zone" className="w-full rounded-md">
              <option value="" disabled={true} selected>
                School
              </option>
              <option value="">School</option>
              <option value="">School</option>
              <option value="">School</option>
            </select>
          </div>
          <label htmlFor="designation" className="block text-sm font-bold mb-1">
            Institution Name :
          </label>
          <input
            type="text"
            id="designation"
            className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
          />
          <label className="block text-sm font-bold mb-1">
            Total Students:
          </label>
          <input
            type="text"
            className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
          />
          <label className="block text-sm font-bold mb-1">
            Contact Person Name:
          </label>
          <input
            type="text"
            className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
          />
          <label className="block text-sm font-bold mb-1">Designation:</label>
          <input
            type="text"
            className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
          />
          <label className="block text-sm font-bold mb-1">Phone:</label>
          <input
            type="text"
            className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
          />
          <label className="block text-sm font-bold mb-1">Address:</label>
          <input
            type="text"
            className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
          />
          <div>
            <label className="capitalize flex font-semibold text-md py-1">
              Region/Area:
            </label>

            <select name="zone" className="w-full rounded-md">
              <option value="" disabled={true} selected>
                Dhaka Division
              </option>
              <option value="">Dhaka Division</option>
              <option value="">Dhaka Division</option>
              <option value="">Dhaka Division</option>
            </select>
          </div>

          <div>
            <label className="capitalize flex font-semibold text-md py-1">
              Institution Image:
            </label>
            <div className="border-[1px] border-[#6b7280] p-1 rounded-md bg-white">
              <input
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div>
            <label className="capitalize flex font-semibold text-md py-1">
              Status:
            </label>

            <select name="zone" className="w-full rounded-md">
              <option value="" disabled={true} selected>
                Active
              </option>
              <option value="">Disable</option>
            </select>
          </div>
          {/* start */}

          <div className="flex flex-col">
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
                          Mobile Number
                        </th>
                        <th
                          scope="col"
                          className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                        >
                          Class Name
                        </th>
                        <th
                          scope="col"
                          className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                        >
                          Subject Name
                        </th>

                        <th scope="col" className="px-6 py-4">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-neutral-200 dark:border-white/10">
                        <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10"></td>
                        <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10"></td>

                        <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10"></td>
                        <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                          <select name="zone" className="w-full rounded-md">
                            <option value="" disabled={true} selected>
                              Class 1
                            </option>
                            <option value="">Class 1</option>
                            <option value="">Class 1</option>
                            <option value="">Class 1</option>
                          </select>
                        </td>
                        <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                          <select name="zone" className="w-full rounded-md">
                            <option value="" disabled={true} selected>
                              Science
                            </option>
                            <option value="">Science</option>
                            <option value="">Science</option>
                            <option value="">Science</option>
                          </select>
                        </td>

                        <td className="whitespace-nowrap px-6 py-4 flex justify-center gap-3">
                          <button className="bg-gray-300 px-1 py-[2px]">
                            Add Row
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <button className="capitalize bg-primary px-5 py-1 text-white rounded-md">
              Save Institution
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default page;
