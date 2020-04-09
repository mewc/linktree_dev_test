import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../state/store';
import App from '../App';
import ReactTestUtils from 'react-dom/test-utils'; 

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const heading = getByText(/Linktree Task Homepage/i);
  ReactTestUtils.isElement(heading);

  //TODO expand on unit testing throughout
});
