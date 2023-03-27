import type { Props } from '../Mission';
import { Modal, Box } from '@mui/material';
import { useEffect, useState, memo } from 'react';
import { Donate } from '../../../api/getDonationPoints';
import { PieChart, Pie, Cell, LabelList } from 'recharts';
import { DonatePointType } from '../../../api/donatePoint';
import { useTheme } from '@mui/material/styles';
import { CategoricalPoints } from './CategoryPoints';
import useMediaQuery from '@mui/material/useMediaQuery';

const DonateList = ({ state, setState }: Props) => {
  type DonationPointExtendPercent = DonatePointType;
  const [categoriesPoint, setCategoriesPoint] = useState<
    DonationPointExtendPercent[]
  >([]);
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    if (categoriesPoint.length > 0) {
      let initsum = 0;
      categoriesPoint?.forEach((eachDonateElement) => {
        initsum += eachDonateElement.donationPoint;
      });
      const result: DonatePointType[] = [];
      categoriesPoint.map((eachDonateElement) => {
        const percent = (eachDonateElement.donationPoint / initsum) * 100;
        const florrPercent = Math.floor(percent);
        eachDonateElement.percent = String(florrPercent) + '%';
        result.push(eachDonateElement);
      });
      setCategoriesPoint(result);
    }
  }, [categoriesPoint && categoriesPoint.length > 0 && state === true]);

  useEffect(() => {
    if (state === false) {
      return;
    }
    Donate().then((res) => {
      const setPoint = () => {
        if (categoriesPoint.length > 0) {
          return;
        }
        setCategoriesPoint(res);
      };

      setPoint();
    });
  }, [state]);

  return (
    <>
      <Modal
        open={state}
        onClose={() => setState(!state)}
        onClick={() => setState(!state)}
        style={{
          backgroundColor: 'white',
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
              nameKey="donationPoint"
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
