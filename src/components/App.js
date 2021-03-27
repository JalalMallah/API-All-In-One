import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from 'components/Header/Header';
import Home from 'components/views/Home/Home';
import Quotes from 'components/views/Quotes/Quotes';
import Weather from 'components/views/Weather/Weather';
import ExchangeRates from 'components/views/ExchangeRates/ExchangeRates';
import PageNotFound from 'components/views/PageNotFound/PageNotFound';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/quotes' component={Quotes} />
        <Route path='/weather' component={Weather} />
        <Route path='/exchange-rates' component={ExchangeRates} />
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
};

export default App;
