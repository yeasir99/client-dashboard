const page = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl capitalize mb-3">add money receipts</h1>
        <form>
          <input
            name="search"
            type="text"
            placeholder="Search"
            className="text-md outline-1 border-1 focus:ring-0 rounded-md w-[300px] text-sm"
          />
        </form>
      </div>
      <div className="max-w-2xl bg-gray-200 rounded-md px-4 py-4">
        <form>
          <label htmlFor="designation" className="block text-sm font-bold mb-1">
            Receipt Number:
          </label>
          <input
            type="text"
            id="designation"
            className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
          />
          <div>
            <label className="capitalize flex font-semibold text-md py-1">
              Party Name:
            </label>

            <select name="zone" className="w-full rounded-md">
              <option value="" disabled={true} selected>
                Library 1
              </option>
              <option value="Zone one">Library 1</option>
              <option value="Zone two">Library 1</option>
              <option value="Zone three">Library 1</option>
            </select>
          </div>
          <div>
            <label className="capitalize flex font-semibold text-md py-1">
              Receipt Date:
            </label>

            <select name="zone" className="w-full rounded-md">
              <option value="" disabled={true} selected>
                18/02/2024
              </option>
              <option value="Zone one">18/02/2024</option>
              <option value="Zone two">18/02/2024</option>
              <option value="Zone three">18/02/2024</option>
            </select>
          </div>
          <label htmlFor="designation" className="block text-sm font-bold mb-1">
            Amount Received:
          </label>
          <input
            type="text"
            id="designation"
            className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
          />
          <div>
            <label className="capitalize flex font-semibold text-md py-1">
              Payment Method:
            </label>

            <select name="zone" className="w-full rounded-md">
              <option value="" disabled={true} selected>
                Cash
              </option>
              <option value="Zone one">Cash</option>
              <option value="Zone two">Cash</option>
              <option value="Zone three">Cash</option>
            </select>
          </div>
          <div>
            <label className="capitalize flex font-semibold text-md py-1">
              Received By:
            </label>

            <select name="zone" className="w-full rounded-md">
              <option value="" disabled={true} selected>
                User 3
              </option>
              <option value="Zone one">User 3</option>
              <option value="Zone two">User 3</option>
              <option value="Zone three">User 3</option>
            </select>
          </div>
          <div className="mt-5">
            <button className="capitalize bg-primary px-5 py-1 text-white rounded-md">
              Save Money Receipt
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default page;
