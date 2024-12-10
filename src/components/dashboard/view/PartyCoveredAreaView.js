import useGetData from '@/utils/useGetData';

const PartyCoveredAreaView = ({ id }) => {
  const { status, data } = useGetData(
    `https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_partydetailsAreas&PartyID=${id}`
  );
  if (status === 'pending') {
    return (
      <div className="my-3 text-center text-xl font-semibold">Loading...</div>
    );
  }
  return (
    <>
      {data.PartyAreas.length ? (
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
                        Id
                      </th>

                      <th scope="col" className="px-6 py-4">
                        Location
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.PartyAreas.map(item => (
                      <tr
                        className="border-b border-neutral-200 dark:border-white/10"
                        key={item.RegionID}
                      >
                        <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                          {item.RegionID}
                        </td>

                        <td className="whitespace-nowrap px-6 py-4 flex justify-center items-center gap-3">
                          {item.RegionName}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="my-3 text-center text-xl font-semibold">
          User not assigned yet
        </div>
      )}
    </>
  );
};

export default PartyCoveredAreaView;
