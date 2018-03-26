import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import FeaturePage from '../RandomsPage/Loadable';
import NotFoundPage from '../NotFoundPage/Loadable';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LeftFrame from '../../components/LeftFrame';

const AppWrapper = styled.div`
  min-height: 100%;
  color: #bdbdbd;
  margin-top: 40px;
`;

const ContentWrapper = styled.div`
  padding: 20px;
  width: calc(100% - 280px);
  margin-left: 240px;
  
  @media screen and (max-width: 850px) {
    width: calc(100% - 40px);
    margin-left: inherit;
  }
`;

const BodyWrapper = styled.div`
  
`;


export default function App() {
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
            <Route path="" component={NotFoundPage} />
          </Switch>
          <Footer />
        </ContentWrapper>
      </BodyWrapper>
    </AppWrapper>
  );
}
