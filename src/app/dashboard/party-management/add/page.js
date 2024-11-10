'use client';
import { useState } from 'react';
const page = () => {
  const [formData, setFormData] = useState({
    partyName: '',
    contactPerson: '',
    contactPhone: '',
    address: '',
    regionArea: '',
    thana: '',
    district: '',
    coveredAreaOne: '',
    coveredAreaTwo: '',
    partyEmail: '',
    partyWebsite: '',
    creditLimit: '',
    depositAmount: '',
    openingAmount: '',
    ownerName: '',
    ownerContact: '',
    ownerAddress: '',
    ownerPermanentAddress: '',
    ownerDOB: '',
    businessStartYear: '',
    thanaUnderParty: '',
    isMemberOfBPS: '',
    waySendLetter: '',
    picture: '',
    nid: '',
    tradeLicense: '',
    membershipCard: '',
    tin: '',
    depositCheck: '',
    nonHuditialAP: '',
    aggrementPaper: '',
  });

  console.log(formData);

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = e => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      [e.target.name]: file,
    });
  };

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
              <label
                className="block text-sm font-bold mb-1"
                htmlFor="PartyName"
              >
                Party Name:
              </label>
              <input
                id="PartyName"
                type="text"
                className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
                name="partyName"
                value={formData.partyName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                className="block text-sm font-bold mb-1"
                htmlFor="ContactPerson"
              >
                Contact Person:
              </label>
              <input
                id="ContactPerson"
                type="text"
                className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                className="block text-sm font-bold mb-1"
                htmlFor="ContactPhone"
              >
                Contact Phone:
              </label>
              <input
                id="ContactPhone"
                type="text"
                className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
                name="contactPhone"
                value={formData.contactPhone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1" htmlFor="Address">
                Address:
              </label>
              <input
                id="Address"
                type="text"
                className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div>
                <label
                  className="block text-sm font-bold mb-1"
                  htmlFor="RegionArea"
                >
                  Region/Area:
                </label>
                <select
                  className="w-full rounded-md"
                  id="RegionArea"
                  name="regionArea"
                  value={formData.regionArea}
                  onChange={handleChange}
                >
                  <option value="" disabled={true} selected>
                    Dhaka Division
                  </option>
                  <option value="">Dhaka Division</option>
                  <option value="">Dhaka Division</option>
                  <option value="">Dhaka Division</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold mb-1" htmlFor="Thana">
                  Thana:
                </label>
                <select
                  id="Thana"
                  name="thana"
                  className="w-full rounded-md"
                  value={formData.thana}
                  onChange={handleChange}
                >
                  <option value="" disabled={true} selected>
                    Dhaka Division
                  </option>
                  <option value="">Dhaka Division</option>
                  <option value="">Dhaka Division</option>
                  <option value="">Dhaka Division</option>
                </select>
              </div>
              <div>
                <label
                  className="block text-sm font-bold mb-1"
                  htmlFor="District"
                >
                  District:
                </label>
                <select
                  id="District"
                  name="district"
                  className="w-full rounded-md"
                  value={formData.district}
                  onChange={handleChange}
                >
                  <option value="" disabled={true} selected>
                    Dhaka Division
                  </option>
                  <option value="">Dhaka Division</option>
                  <option value="">Dhaka Division</option>
                  <option value="">Dhaka Division</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">
                Total Covered Area:
              </label>
              <div className="flex gap-5">
                <select
                  name="coveredAreaOne"
                  className="w-full rounded-md"
                  value={formData.coveredAreaOne}
                  onChange={handleChange}
                >
                  <option value="" disabled={true} selected>
                    Area-1
                  </option>
                  <option value="">Area-1</option>
                  <option value="">Area-1</option>
                  <option value="">Area-1</option>
                </select>
                <select
                  name="coveredAreaTwo"
                  className="w-full rounded-md"
                  value={formData.coveredAreaTwo}
                  onChange={handleChange}
                >
                  <option value="" disabled={true} selected></option>
                  <option value="">Area-1</option>
                  <option value="">Area-1</option>
                  <option value="">Area-1</option>
                </select>
              </div>
            </div>
            <div>
              <label
                className="block text-sm font-bold mb-1"
                htmlFor="PartyEmail"
              >
                Party's Email Address:
              </label>
              <input
                id="PartyEmail"
                type="text"
                className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
                name="partyEmail"
                value={formData.partyEmail}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                className="block text-sm font-bold mb-1"
                htmlFor="PartyWebsite"
              >
                Party's Website:
              </label>
              <input
                id="PartyWebsite"
                type="text"
                className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
                name="partyWebsite"
                value={formData.partyWebsite}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                className="block text-sm font-bold mb-1"
                htmlFor="CreditLimit"
              >
                Credit Limit:
              </label>
              <input
                id="CreditLimit"
                type="text"
                className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
                name="creditLimit"
                value={formData.creditLimit}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                className="block text-sm font-bold mb-1"
                htmlFor="DepositAmount"
              >
                Deposit Amount:
              </label>
              <input
                id="DepositAmount"
                type="text"
                className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
                name="depositAmount"
                value={formData.depositAmount}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                className="block text-sm font-bold mb-1"
                htmlFor="OpeningAmount"
              >
                Opening Amount:
              </label>
              <input
                id="OpeningAmount"
                type="text"
                className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
                name="openingAmount"
                value={formData.openingAmount}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                className="block text-sm font-bold mb-1"
                htmlFor="OwnerName"
              >
                Owner Name:
              </label>
              <input
                id="OwnerName"
                type="text"
                className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                className="block text-sm font-bold mb-1"
                htmlFor="OwnerContact"
              >
                Owner Contact Number:
              </label>
              <input
                id="OwnerContact"
                type="text"
                className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
                name="ownerContact"
                value={formData.ownerContact}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                className="block text-sm font-bold mb-1"
                htmlFor="OwnerAddress"
              >
                Owner Current Address:
              </label>
              <input
                id="OwnerAddress"
                type="text"
                className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
                name="ownerAddress"
                value={formData.ownerAddress}
                onChange={handleChange}
              />
            </div>
          </div>
          {/* section one End */}
          {/* section two start */}
          <div className="bg-gray-200 rounded-md px-4 py-4">
            <div>
              <label
                className="block text-sm font-bold mb-1"
                htmlFor="OwnerPermanentAddress"
              >
                Owner Permanent Address:
              </label>
              <input
                id="OwnerPermanentAddress"
                type="text"
                className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
                name="ownerPermanentAddress"
                value={formData.ownerPermanentAddress}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                className="block text-sm font-bold mb-1"
                htmlFor="OwnerDOB"
              >
                Owner Date Of Birth:
              </label>
              <input
                id="OwnerDOB"
                type="text"
                className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
                name="ownerDOB"
                value={formData.ownerDOB}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                className="block text-sm font-bold mb-1"
                htmlFor="BusinessStartYear"
              >
                Business Start Year:
              </label>
              <input
                id="BusinessStartYear"
                type="text"
                className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
                name="businessStartYear"
                value={formData.businessStartYear}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                className="block text-sm font-bold mb-1"
                htmlFor="ThanaUnderParty"
              >
                No Of Thana Under The Party:
              </label>
              <input
                id="ThanaUnderParty"
                type="text"
                className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
                name="thanaUnderParty"
                value={formData.thanaUnderParty}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                className="block text-sm font-bold mb-1"
                htmlFor="IsMemberOfBPS"
              >
                Is The Party Member Of Books Publication Samity:
              </label>
              <input
                id="IsMemberOfBPS"
                type="text"
                className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
                name="isMemberOfBPS"
                value={formData.isMemberOfBPS}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                className="block text-sm font-bold mb-1"
                htmlFor="WaySendLetter"
              >
                Way Of Send Letter:
              </label>
              <input
                id="WaySendLetter"
                type="text"
                className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
                name="waySendLetter"
                value={formData.waySendLetter}
                onChange={handleChange}
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
                  name="picture"
                  onChange={handleFileChange}
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
                  name="nid"
                  onChange={handleFileChange}
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
                  name="tradeLicense"
                  onChange={handleFileChange}
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
                  name="membershipCard"
                  onChange={handleFileChange}
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
                  name="tin"
                  onChange={handleFileChange}
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
                  name="depositCheck"
                  onChange={handleFileChange}
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
                  name="nonHuditialAP"
                  onChange={handleFileChange}
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
                  name="aggrementPaper"
                  onChange={handleFileChange}
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
