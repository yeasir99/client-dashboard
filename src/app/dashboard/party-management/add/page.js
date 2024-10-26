const page = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl capitalize mb-3">Party Management</h1>
        <form>
          <input
            name="search"
            type="text"
            placeholder="Search"
            className="text-md outline-1 border-1 focus:ring-0 rounded-md w-[300px] text-sm"
          />
        </form>
      </div>
      <form>
        <div className="grid grid-cols-2 gap-6">
          {/* section one start */}
          <div className="bg-gray-200 rounded-md px-4 py-4 w-full">
            <div>
              <label className="block text-sm font-bold mb-1">
                Party Name:
              </label>
              <input
                type="text"
                className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">
                Contact Person:
              </label>
              <input
                type="text"
                className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">
                Contact Phone:
              </label>
              <input
                type="text"
                className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Address:</label>
              <input
                type="text"
                className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">
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
              <label className="block text-sm font-bold mb-1">
                Total Covered Area:
              </label>
              <div className="flex gap-5">
                <select name="zone" className="w-full rounded-md">
                  <option value="" disabled={true} selected>
                    Area-1
                  </option>
                  <option value="">Area-1</option>
                  <option value="">Area-1</option>
                  <option value="">Area-1</option>
                </select>
                <select name="zone" className="w-full rounded-md">
                  <option value="" disabled={true} selected></option>
                  <option value="">Area-1</option>
                  <option value="">Area-1</option>
                  <option value="">Area-1</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">
                Party's Email Address:
              </label>
              <input
                type="text"
                className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">
                Party's Website:
              </label>
              <input
                type="text"
                className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">
                Credit Limit:
              </label>
              <input
                type="text"
                className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">
                Deposit Amount:
              </label>
              <input
                type="text"
                className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">
                Opening Amount:
              </label>
              <input
                type="text"
                className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">
                Owner Name:
              </label>
              <input
                type="text"
                className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">
                Owner Contact Number:
              </label>
              <input
                type="text"
                className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">
                Owner Current Address:
              </label>
              <input
                type="text"
                className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
              />
            </div>
          </div>
          {/* section one End */}
          {/* section two start */}
          <div className="bg-gray-200 rounded-md px-4 py-4">
            <div>
              <label className="block text-sm font-bold mb-1">
                Owner Permanent Address:
              </label>
              <input
                type="text"
                className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">
                Owner Date Of Birth:
              </label>
              <input
                type="text"
                className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">
                Business Start Year:
              </label>
              <input
                type="text"
                className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">
                No Of Thana Under The Party:
              </label>
              <input
                type="text"
                className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">
                Is The Party Member Of Books Publication Samity:
              </label>
              <input
                type="text"
                className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">
                Way Of Send Letter:
              </label>
              <input
                type="text"
                className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
              />
            </div>
            <div>
              <label className="capitalize flex font-semibold text-md py-1">
                Upload Picture (Image):
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
                National NID (PDF/Image):
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
                Trade License Update (PDF/Image):
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
                Book Publication Samity Membership Card Updated (PDF/Image):
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
                TIN Certificate (PDF/Image):
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
                Deposit Cheque (PDF/Image):
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
                Non-Huditial Agreement Paper (PDF/Image):
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
                Agreement Paper (PDF/Image):
              </label>
              <div className="border-[1px] border-[#6b7280] p-1 rounded-md bg-white">
                <input
                  type="file"
                  className="file-input file-input-bordered w-full max-w-xs"
                />
              </div>
            </div>
            <div className="mt-5">
              <button className="capitalize bg-primary px-5 py-1 text-white rounded-md">
                Save Book
              </button>
            </div>
          </div>
          {/* section two end */}
        </div>
      </form>
    </>
  );
};

export default page;
