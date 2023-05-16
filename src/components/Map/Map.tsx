import { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { MissonSuccess } from '../Mission/Success';
import { setMissonClear } from '../Store/module/misson/clearMisson';
import { useDispatch, useSelector } from 'react-redux';
import mapstyle from '../../styles/mapStyle.json';
import { RootState } from '../Store/module';

const MapComponent = () => {
  //미션 성공 여부 전역적으로 관리해야 함

  const missonClearState = useSelector(
    (state: RootState) => state.global.missonClear.clear
  );

  const activeLatitude = useSelector((state: RootState) => state.latlng.lat);
  const activeLongitude = useSelector((state: RootState) => state.latlng.lng);
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();
  const [drag, setIsDragging] = useState<boolean>(false);
  const [successModal, setSuccessModal] = useState<boolean>(false);

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
      lat: activeLatitude,
      lng: activeLongitude,
    };

    if (map) {
      const newPos = marker?.getPosition();
      if (typeof newPos !== 'undefined' && newPos !== null) {
        map.panTo(newPos);
      }

      if (typeof newPos !== 'undefined' && newPos !== null) {
        const distance =
          google?.maps?.geometry?.spherical?.computeDistanceBetween(
            newPos,
            activepos
          );

        const Bounds = 100000;
        if (distance <= Bounds) {
          marker?.setPosition(activepos);
          setSuccessModal(true);
          dispatch(
            setMissonClear({
              clear: true,
            })
          );
        }
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
          zoom: 8,
          scaleControl: false,
          streetViewControl: false,
          zoomControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
          styles: mapstyle,
        })
      );
    }

    if (map) {
      google.maps.event.addListener(
        map,
        'dragstart',
        (e: google.maps.MapMouseEvent) => {
          setIsDragging(true);
        }
      );

      google.maps.event.addListener(
        map,
        'dragend',
        (e: google.maps.MapMouseEvent) => {
          setIsDragging(false);
        }
      );

      google.maps.event.addListener(
        map,
        'click',
        (e: google.maps.MapMouseEvent) => {
          const pos = e.latLng?.toJSON();
          if (pos && true && drag === false) {
            setMark({ pos, map });
          }
          setnewMap({ map });
        }
      );
    }
  }, [ref, map, marker]);

  return (
    <>
      <MapArea ref={ref}></MapArea>
      {missonClearState && true ? (
        <MissonSuccess setMissonOpen={setSuccessModal} />
      ) : null}
    </>
  );
};

const MapArea = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

export default MapComponent;
