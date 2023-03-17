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
    setLatLng: (state, action: PayloadAction<missonType>) => {
      const { id, lat, lng } = action.payload;
      state.id = id;
      state.lat = lat;
      state.lng = lng;
    },
  },
});

export const { setLatLng } = globalLatLng.actions;
export default globalLatLng;
