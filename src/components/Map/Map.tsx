import { useRef, useState, useEffect } from 'react';
import swal from 'sweetalert';
import styled from 'styled-components';
import { msg } from '../../constants/mapConstants';
import newStore from '../Store/module';
import { MissonSuccess } from '../Mission/Success';
import { setMissonClear } from '../Store/module/misson/clearMisson';
import { useDispatch } from 'react-redux';

const MapComponent = () => {
  //미션 성공 여부 전역적으로 관리해야 함

  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();
  const [, setPosition] = useState<google.maps.LatLngLiteral | null>(null);
  const [drag, setIsDragging] = useState<boolean>(false);
  const [clear, setClear] = useState<boolean>(false);

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
      map.setZoom(15);
      const newPos = marker?.getPosition();
      if (typeof newPos !== 'undefined' && newPos !== null) {
        map.panTo(newPos);
      }

      if (typeof newPos !== 'undefined' && newPos !== null) {
        const boundry = map.getBounds();
        if (boundry?.contains(activepos)) {
          setClear(true);
          swal(msg.sucessMain, msg.successBody, 'success');
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
          zoom: 5,
          minZoom: 4,
          scaleControl: false,
          streetViewControl: false,
          zoomControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
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
            setPosition(pos);
            setMark({ pos, map });
            setClear(false);
          }

          setnewMap({ map });
        }
      );
    }
  }, [ref, map, marker]);

  return (
    <>
      <MapArea ref={ref}></MapArea>
      {clear && true ? <MissonSuccess /> : null}
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
