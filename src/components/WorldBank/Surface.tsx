import { useState } from 'react';
import { Card, CardMedia, Skeleton, Slider } from '@mui/material';

export const SurfaceComponent = () => {
  const [isload, setIsLoad] = useState<boolean>(false);
  const [year, setYear] = useState<number>(1961);
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
            src={`https://data.worldbank.org/share/widget?end=2020&indicators=AG.SRF.TOTL.K2&name_desc=false&start=1961&view=map&year=${year}`}
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
            min={1961}
            max={2020}
            sx={{
              width: 150,
              color: '#0088ff',
            }}
            defaultValue={1961}
          />

          {year}
        </div>
      </Card>
    </>
  );
};
