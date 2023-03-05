import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initalState: google.maps.LatLngLiteral = {
  lat: 0,
  lng: 0,
};

const globalLatLng = createSlice({
  name: 'LatLng',
  initialState: initalState,
  reducers: {
    setLatLng(state, action: PayloadAction<google.maps.LatLngLiteral>) {
      return {
        lat: action.payload.lat,
        lng: action.payload.lng,
      };
    },
  },
});

export const { setLatLng } = globalLatLng.actions;
export default globalLatLng;
