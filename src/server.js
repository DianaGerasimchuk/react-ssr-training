import React from 'react';
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom';

import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import App from './components/App'


module.exports = function render(initialState, request) {
  const store = configureStore(initialState);
  const preloadedState = store.getState();
  const context = {
    data: 'The attempt to stole infor in illegal. @Copyright 2019. Diana Gerascimhuk'
  };

  let content = renderToString(
    <Provider store={store} >
      <StaticRouter location={request.url} context={context}>
        <App />
      </StaticRouter> 
    </Provider>
  );

  return {content, preloadedState, context};
}
