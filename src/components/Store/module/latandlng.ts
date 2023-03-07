import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initalState: missonType = {
  lat: 0,
  lng: 0,
  id: 0,
};

type missonId = {
  id: number;
};

export type missonType = google.maps.LatLngLiteral & missonId;

const globalLatLng = createSlice({
  name: 'LatLng',
  initialState: initalState,
  reducers: {
    setLatLng(state, action: PayloadAction<missonType>) {
      return {
        lat: action.payload.lat,
        lng: action.payload.lng,
        id: action.payload.id,
      };
    },
  },
});

export const { setLatLng } = globalLatLng.actions;
export default globalLatLng;
