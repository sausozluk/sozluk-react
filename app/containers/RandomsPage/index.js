import React from 'react';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import H1 from '../../components/H1';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import { getRandoms } from '../../actions/randomsPageActions';
import reducer from '../../reducers/randomsPageReducer';
import saga from '../../sagas/randomsPageSaga';
import { makeSelectRandoms } from '../../selectors/randomsPageSelectors';

class RandomsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const randoms = this.props.randoms || [];

    const entries = randoms.map((entry) => (
      <ListItem key={entry.entry.id}>
        <ListItemTitle>
          {entry.topic.title.toLowerCase()}
        </ListItemTitle>
        <p>{entry.entry.text.toLowerCase()}</p>
      </ListItem>
    ));

    return (
      <div>
        <Helmet>
          <title>randoms</title>
          <meta name="description" content="randoms of saü sözlük" />
        </Helmet>
        <H1>
          # randoms
        </H1>
        <List>
          {entries}
        </List>
      </div>
    );
  }
}

RandomsPage.propTypes = {
  randoms: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  fetch: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    fetch: () => dispatch(getRandoms()),
  };
}

const mapStateToProps = createStructuredSelector({
  randoms: makeSelectRandoms(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'randoms', reducer });
const withSaga = injectSaga({ key: 'randoms', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(RandomsPage);
