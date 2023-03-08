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
            score: payload.payload[0].miPoint,
            id: payload.payload[0].id,
          },
          second: {
            lat: payload.payload[1].latitude,
            lng: payload.payload[1].longitude,
            score: payload.payload[1].miPoint,
            id: payload.payload[1].id,
          },
          third: {
            lat: payload.payload[2].latitude,
            lng: payload.payload[2].longitude,
            score: payload.payload[2].miPoint,
            id: payload.payload[2].id,
          },
        },
      };
    },
  },
});

export const { setAnswer } = missonAnswer.actions;
export default missonAnswer;
