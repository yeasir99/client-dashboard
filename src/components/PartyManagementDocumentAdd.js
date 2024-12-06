'use client';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const PartyManagementDocumentAdd = ({ id }) => {
  let data = [
    {
      id: 1,
      name: 'PartyOwnerPicture',
      displayName: 'Party Owner Picture',
    },
    {
      id: 2,
      name: 'PartyOwnerNidDocument',
      displayName: 'Party Owner Nid',
    },
    {
      id: 3,
      name: 'TradeLicense',
      displayName: 'Trade License',
    },
    {
      id: 4,
      name: 'SamityMemberCard',
      displayName: 'Samity Member Card',
    },
    {
      id: 5,
      name: 'TinCertificate',
      displayName: 'TIN Certificate',
    },
    {
      id: 6,
      name: 'DepositCheque',
      displayName: 'Deposit Cheque',
    },
    {
      id: 7,
      name: 'NonJudicialAgreementDocument',
      displayName: 'Non Judicial Agreement Document',
    },
    {
      id: 8,
      name: 'AgreementDocument',
      displayName: 'Agreement Document',
    },
    {
      id: 9,
      name: 'Document1',
      displayName: 'Document1',
    },
    {
      id: 10,
      name: 'Document2',
      displayName: 'Document2',
    },
    {
      id: 11,
      name: 'Document3',
      displayName: 'Document3',
    },
  ];

  const [formData, setFormData] = useState([
    {
      id: uuidv4(),
      docName: '',
      file: '',
    },
  ]);

  console.log(formData);

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl capitalize mb-3">Add Party Documents</h1>
      </div>
      <div className="max-w-full bg-gray-200 rounded-md px-4 py-4">
        <form onSubmit={handleSubmit}>
          <table className="max-w-full w-full border border-neutral-200 text-center text-sm font-light text-surface dark:border-white/10 dark:text-white">
            <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
              <tr className="bg-text1 text-white">
                <th
                  scope="col"
                  className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                >
                  Documents Name
                </th>
                <th
                  scope="col"
                  className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                >
                  Attachment
                </th>
                <th scope="col" className="px-6 py-4">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {formData.length &&
                formData.map(item => (
                  <tr
                    className="border-b border-neutral-200 dark:border-white/10"
                    key={item.id}
                  >
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-1 font-medium dark:border-white/10">
                      <select
                        name="institutionType"
                        className="w-full rounded-md"
                        onChange={e => {
                          setFormData(
                            formData.map(currentData =>
                              currentData.id === item.id
                                ? { ...currentData, docName: e.target.value }
                                : currentData
                            )
                          );
                        }}
                      >
                        <option value="" disabled={true} selected>
                          Select Document Name
                        </option>
                        {data.map(docType => (
                          <option value={docType.name} key={docType.id}>
                            {docType.displayName}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-1 font-medium dark:border-white/10">
                      {item.docName && (
                        <div className="border-[1px] border-[#6b7280] p-1 rounded-md bg-white">
                          <input
                            type="file"
                            name="file"
                            className="w-full rounded-md mb-1"
                            onChange={e => {
                              const file = e.target.files[0];
                              setFormData(
                                formData.map(currentData =>
                                  currentData.id === item.id
                                    ? { ...currentData, file }
                                    : currentData
                                )
                              );
                            }}
                          />
                        </div>
                      )}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-1 font-medium dark:border-white/10">
                      <td className="whitespace-nowrap px-6 py-4 flex justify-center items-end h-full gap-3">
                        <AiOutlineCloseCircle
                          className="text-4xl text-red-500 cursor-pointer"
                          onClick={() => {
                            setFormData(
                              formData.filter(
                                currentData => currentData.id !== item.id
                              )
                            );
                          }}
                        />
                      </td>
                    </td>
                  </tr>
                ))}
              <tr>
                <td
                  className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium "
                  colSpan="3"
                >
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="bg-green-300 text-md rounded-md px-4 py-2"
                      onClick={() => {
                        setFormData([
                          ...formData,
                          {
                            id: uuidv4(),
                            docName: '',
                            file: '',
                          },
                        ]);
                      }}
                    >
                      Add More Document
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="capitalize bg-primary px-5 py-1 text-white rounded-md mt-9"
            >
              Save Document
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PartyManagementDocumentAdd;
