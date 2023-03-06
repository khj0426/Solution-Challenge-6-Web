import { useRef, useState, useEffect } from 'react';
import swal from 'sweetalert';
import styled from 'styled-components';
import { msg } from '../../constants/mapConstants';
import lightStyle from '../../styles/mapStyle.json';
import darkStyle from '../../styles/darkmapStyle.json';
import { Theme } from '@mui/material/styles';
import { lightTheme } from '../../styles/globalmode-style';
import newStore from '../Store/module';

const MapComponent = ({ mode }: { mode: Theme }) => {
  //미션 성공 여부 전역적으로 관리해야 함

  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();
  const [position, setPosition] = useState<google.maps.LatLngLiteral | null>(
    null
  );

  //set new Marker in new Position
  const setMark = ({
    pos,
    map,
  }: {
    pos: google.maps.LatLngLiteral;
    map: google.maps.Map;
  }) => {
    if (marker) {
      marker.setPosition(pos);
    } else {
      setMarker(
        new google.maps.Marker({
          position: pos,
          map,
        })
      );
    }
  };

  const setnewMap = ({ map }: { map: google.maps.Map }) => {
    const activepos: google.maps.LatLngLiteral = {
      lat: newStore.getState().persist.globalLatLng.lat,
      lng: newStore.getState().persist.globalLatLng.lng,
    };

    if (map) {
      map.setZoom(7);
      const newPos = marker?.getPosition();
      if (typeof newPos !== 'undefined' && newPos !== null) {
        map.panTo(newPos);
      }
      const boundry = map.getBounds();
      if (boundry?.contains(activepos)) {
        swal(msg.sucessMain, msg.successBody, 'success');
      }
    }
  };

  const center: google.maps.LatLngLiteral = {
    lat: 37,
    lng: 127,
  };

  const [marker, setMarker] = useState<google.maps.Marker | null>(null);

  useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, {
          center,
          zoom: 5,
          minZoom: 4,
          styles: mode === lightTheme ? lightStyle : darkStyle,
        })
      );
    }

    if (map) {
      map.setOptions({ styles: mode === lightTheme ? lightStyle : darkStyle });
      google.maps.event.addListener(
        map,
        'click',
        (e: google.maps.MapMouseEvent) => {
          const pos = e.latLng?.toJSON();
          if (pos && true) {
            setPosition(pos);
            setMark({ pos, map });
          }

          setnewMap({ map });
        }
      );
    }
  }, [ref, map, marker, mode]);

  return (
    <>
      <MapArea ref={ref}></MapArea>
    </>
  );
};

const MapArea = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 500px;
  }
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 95vh;
  }
`;

export default MapComponent;
