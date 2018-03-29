import { GET_LEFT_FRAME, GET_LEFT_FRAME_SUCCESS } from './actionTypes';

export function getLeftFrame(timestamp) {
  return {
    type: GET_LEFT_FRAME,
    timestamp,
  };
}

export function leftFrameLoaded(data) {
  return {
    type: GET_LEFT_FRAME_SUCCESS,
    data,
  };
}
