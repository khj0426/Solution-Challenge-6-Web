import type { Props } from '../Mission';
import { Modal, Box } from '@mui/material';
import { useEffect, useState, memo } from 'react';
import { Donate } from '../../../api/getDonationPoints';
import { PieChart, Pie, Cell, LabelList } from 'recharts';
import { useTheme } from '@mui/material/styles';
import { CategoricalPoints } from './CategoryPoints';
import useMediaQuery from '@mui/material/useMediaQuery';
import { uuidv4 } from '@firebase/util';
import { TypeofDonateFetchAPI } from '../../../api/getDonationPoints';

const DonateList = ({ state, setState }: Props) => {
  const [categoriesPoint, setCategoriesPoint] = useState<
    TypeofDonateFetchAPI[]
  >([]);
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    if (state === true && sessionStorage.getItem('accessToken')) {
      Donate().then((res) => {
        if (typeof res !== 'undefined') {
          setCategoriesPoint(() => [...res]);
        }
      });
    }
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
        }}
      >
        <Box style={{ background: '#fff', borderRadius: '10px' }}>
          <PieChart
            width={isMobile ? 300 : 400}
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
              nameKey={uuidv4()}
              outerRadius={isMobile ? 100 : 150}
              cx={'50%'}
              cy={'50%'}
              fill="#8884d8"
              fontSize={25}
            >
              <LabelList
                dataKey="percent" // specify which data key to use for label text
                position="inside"
                fontSize={25}
                // specify the position of the label - "inside", "outside", or "center"
              />
              {typeof categoriesPoint !== 'undefined' &&
                categoriesPoint.map((entry, index) => (
                  <Cell
                    key={entry.category}
                    fill={COLORS[index]}
                    style={{
                      border: 'none',
                      fontSize: '20px',
                    }}
                  />
                ))}
            </Pie>
          </PieChart>

          <CategoricalPoints points={categoriesPoint} colors={COLORS} />
        </Box>
      </Modal>
    </>
  );
};

export default memo(DonateList);
