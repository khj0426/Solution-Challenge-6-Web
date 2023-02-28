import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CountryType = {
  admin_name: string;
  capital: string;
  city: string;
  id: number;
  iso2: string;
  iso3: string;
  lat: number;
  lng: number;
  population: number;
};
const initalState: CountryType = {
  admin_name: '',
  capital: '',
  city: '',
  id: 0,
  iso2: '',
  iso3: '',
  lat: 0,
  lng: 0,
  population: 0,
};

const globalLatLng = createSlice({
  name: 'LatLng',
  initialState: initalState,
  reducers: {
    setLatLng(state, action: PayloadAction<CountryType>) {
      return {
        ...state,
        admin_name: action.payload.admin_name,
        capital: action.payload.capital,
        city: action.payload.city,
        id: action.payload.id,
        iso2: action.payload.iso2,
        iso3: action.payload.iso3,
        lat: action.payload.lat,
        lng: action.payload.lng,
        population: action.payload.population,
      };
    },
  },
});

export const { setLatLng } = globalLatLng.actions;
export default globalLatLng;
