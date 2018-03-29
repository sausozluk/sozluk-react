import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import FeaturePage from '../RandomsPage/Loadable';
import NotFoundPage from '../NotFoundPage/Loadable';
import TodayPage from '../TodayPage/Loadable';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LeftFrame from '../../components/LeftFrame';

import { getLeftFrame } from './../../actions/leftFrameActions';

import AppWrapper from './AppWrapper';
import ContentWrapper from './ContentWrapper';
import BodyWrapper from './BodyWrapper';

class App extends React.PureComponent {
  componentDidMount() {
    this.props.fetchLeftFrame(new Date().getTime());
  }

  render() {
    return (
      <AppWrapper>
        <Helmet
          titleTemplate="%s - saü sözlük"
          defaultTitle="saü sözlük"
        >
          <meta name="description" content="saü sözlük" />
        </Helmet>
        <Header />
        <BodyWrapper>
          <LeftFrame />
          <ContentWrapper>
            <Switch>
              <Route exact path="/" component={FeaturePage} />
              <Route exact path="/bugun" component={TodayPage} />
              <Route path="" component={NotFoundPage} />
            </Switch>
            <Footer />
          </ContentWrapper>
        </BodyWrapper>
      </AppWrapper>
    );
  }
}

App.propTypes = {
  fetchLeftFrame: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    fetchLeftFrame: (timestamp) => dispatch(getLeftFrame(timestamp)),
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withRouter,
  withConnect,
)(App);
