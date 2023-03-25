import type { Props } from '../Mission';
import { Modal, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { Donate } from '../../../api/getDonationPoints';
import { PieChart, Pie, Cell, ResponsiveContainer, LabelList } from 'recharts';
import { DonatePointType } from '../../../api/donatePoint';
const DonateList = ({ state, setState }: Props) => {
  const [categoriesPoint, setCategoriesPoint] = useState<DonatePointType[]>();

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  useEffect(() => {
    if (state === false) {
      return;
    }
    Donate().then((res) => {
      setCategoriesPoint(res);
    });
  }, [state]);

  return (
    <>
      <Modal
        open={state}
        onClose={() => setState(!state)}
        onClick={() => setState(!state)}
        style={{
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '275px',
          width: '275px',
        }}
      >
        <Box>
          <PieChart
            width={350}
            height={400}
            style={{
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Pie
              data={categoriesPoint}
              dataKey="donationPoint"
              nameKey="category"
              outerRadius={100}
              cx={'50%'}
              cy={'50%'}
              fill="#8884d8"
              fontSize={13}
              label={({ percent }) => `  (${(percent * 100).toFixed(0)}%)`}
            >
              <LabelList
                dataKey="category"
                position="right"
                fontWeight="light"
              />
              {typeof categoriesPoint !== 'undefined' &&
                categoriesPoint.map((entry, index) => (
                  <Cell
                    key={entry.category}
                    fill={COLORS[index]}
                    style={{
                      border: 'none',
                      fontSize: '13px',
                    }}
                  />
                ))}
            </Pie>
          </PieChart>
        </Box>
      </Modal>
    </>
  );
};

export default DonateList;
