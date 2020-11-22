import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Loader } from './components';
import Root from './screens/Root';
import { store, persistor } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <Root />
      </PersistGate>
    </Provider>
  );
};

export default App;
