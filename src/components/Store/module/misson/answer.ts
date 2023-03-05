import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypeMission } from '../../../Mission/Mission';

type MissonArray = TypeMission[];

const initState = {
  answer: {
    first: {},
    second: {},
    third: {},
  },
};

const missonAnswer = createSlice({
  name: 'answerofMisson',
  initialState: initState,
  reducers: {
    setAnswer(state, payload: PayloadAction<MissonArray>) {
      return {
        answer: {
          first: {
            lat: payload.payload[0].latitude,
            lng: payload.payload[0].longitude,
          },
          second: {
            lat: payload.payload[1].latitude,
            lng: payload.payload[1].longitude,
          },
          third: {
            lat: payload.payload[2].latitude,
            lng: payload.payload[2].longitude,
          },
        },
      };
    },
  },
});

export const { setAnswer } = missonAnswer.actions;
export default missonAnswer;
