import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LyricsProvider from './views/LyricsSearch/LyricsContext';

import ExchangeRates from 'components/views/ExchangeRates/ExchangeRates';
import Home from 'components/views/Home/Home';
import LyricsSearch from 'components/views/LyricsSearch/LyricsSearch';
import PageNotFound from 'components/views/PageNotFound/PageNotFound';
import Quotes from 'components/views/Quotes/Quotes';
import Weather from 'components/views/Weather/Weather';

import Header from 'components/Header/Header';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/quotes' component={Quotes} />
        <Route path='/weather' component={Weather} />
        <Route path='/exchange-rates' component={ExchangeRates} />
        <LyricsProvider>
          <Route path='/lyrics-app' exact component={LyricsSearch} />
        </LyricsProvider>
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
};

export default App;
