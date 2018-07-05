import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const selectLeftFrame = (state) => state.get('leftFrame');

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
);

const makeSelectLeftFrame = () => createSelector(
  selectLeftFrame,
  (globalState) => globalState.get('data').toJS()
);

export {
  selectGlobal,
  selectLeftFrame,
  makeSelectLeftFrame,
  makeSelectLoading,
  makeSelectError,
};
