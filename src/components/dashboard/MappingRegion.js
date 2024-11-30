import { useState } from 'react';
import useGetData from '@/utils/useGetData';

const MappingRegion = () => {
  const [allArea, setAllArea] = useState([]);
  const getDivision = useGetData(
    'https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_regionDivision'
  );

  return <div>MappingRegion</div>;
};

export default MappingRegion;

const dataModel = [
  {
    id: 1,
    division: 'Dhaka Division',
    districts: [
      {
        id: 1.1,
        district: 'Tangail District',
        thanas: [
          {
            thana: {
              name: 'Ghatail',
              id: 87676,
              parentId: 1.1,
            },
            areas: [
              {
                id: 8978,
                name: 'Ghatail Sadar',
              },
              {
                id: 343,
                name: 'Pakutia',
              },
            ],
          },
          {
            thana: {
              name: 'Kalihati',
              id: 87677,
              parentId: 1.1,
            },
            areas: [
              {
                id: 456,
                name: 'Kalihati Sadar',
              },
              {
                id: 789,
                name: 'Elenga',
              },
            ],
          },
        ],
      },
      {
        id: 1.2,
        district: 'Gazipur District',
        thanas: [
          {
            thana: {
              name: 'Sreepur',
              id: 87678,
              parentId: 1.2,
            },
            areas: [
              {
                id: 123,
                name: 'Sreepur Sadar',
              },
              {
                id: 124,
                name: 'Bormi',
              },
            ],
          },
          {
            thana: {
              name: 'Tongi',
              id: 87679,
              parentId: 1.2,
            },
            areas: [
              {
                id: 125,
                name: 'Tongi Bazar',
              },
              {
                id: 126,
                name: 'Cherag Ali',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    division: 'Chattogram Division',
    districts: [
      {
        id: 2.1,
        district: "Cox's Bazar District",
        thanas: [
          {
            thana: {
              name: 'Teknaf',
              id: 87680,
              parentId: 2.1,
            },
            areas: [
              {
                id: 901,
                name: 'Teknaf Sadar',
              },
              {
                id: 902,
                name: 'Whykong',
              },
            ],
          },
          {
            thana: {
              name: 'Chakaria',
              id: 87681,
              parentId: 2.1,
            },
            areas: [
              {
                id: 903,
                name: 'Chakaria Sadar',
              },
              {
                id: 904,
                name: 'Baraitali',
              },
            ],
          },
        ],
      },
    ],
  },
];
