import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const selectFeature = (state) => state.get('randoms');

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
);

const makeSelectRandoms = () => createSelector(
  selectFeature,
  (globalState) => globalState.get('data')
);

export {
  selectGlobal,
  selectFeature,
  makeSelectRandoms,
  makeSelectLoading,
  makeSelectError,
};
