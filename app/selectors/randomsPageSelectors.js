import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const selectRandoms = (state) => state.get('randoms');

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
);

const makeSelectRandoms = () => createSelector(
  selectRandoms,
  (globalState) => globalState.get('data')
);

export {
  selectGlobal,
  selectRandoms,
  makeSelectRandoms,
  makeSelectLoading,
  makeSelectError,
};
