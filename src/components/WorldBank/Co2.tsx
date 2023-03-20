import { useState } from 'react';
import { Card, CardMedia, Skeleton, Slider } from '@mui/material';

export const Co2EmissionComponent = () => {
  const [isload, setIsLoad] = useState<boolean>(false);
  const [year, setYear] = useState<number>(1990);
  const onchange = (event: Event, newValue: number | number[]) => {
    setYear(newValue as number);
    setIsLoad(false);
  };

  const handleLoad = () => {
    setIsLoad(true);
  };

  return (
    <>
      <Card
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          height: '530px',
        }}
      >
        <CardMedia>
          <iframe
            src={`https://data.worldbank.org/share/widget?indicators=EN.ATM.CO2E.KT&view=map&year=${year}`}
            width="370"
            height="450"
            onLoad={handleLoad}
            style={{ display: 'inline' }}
          />
          {isload === false ? (
            <Skeleton
              sx={{
                position: 'fixed',
                top: '0',
                left: '0',
                height: '500px',
                background: 'gray',
              }}
              variant="rectangular"
              width={370}
              height={450}
              animation="wave"
            />
          ) : null}
        </CardMedia>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Slider
            onChange={onchange}
            min={1990}
            max={2019}
            sx={{
              width: 150,
              color: '#0088ff',
            }}
            defaultValue={1990}
          />

          {year}
        </div>
      </Card>
    </>
  );
};
