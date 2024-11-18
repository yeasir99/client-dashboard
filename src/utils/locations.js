import axios from 'axios';

export const getAllDivision = async () => {
  const res = await axios.get(
    `https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_regionDivision`
  );
  return res.data;
};

export const getDistrict = async id => {
  const res = await axios.get(
    `https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_regionDistrict&ParentRegionID=${id}`
  );
  return res.data;
};

export const getThana = async id => {
  const res = await axios.get(
    `https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_regionThana&ParentRegionID=${id}`
  );
  return res.data;
};
