import React from 'react';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';
import { default as AppContainer } from './src/containers/app';
import { configureAppStore } from './src/store/configureStore';

const store = configureAppStore();

const App = () => {
    return (
        <Provider store={store}>
            <AppContainer />
        </Provider>
    );
}

export default App;