import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { SaasProvider } from '@saas-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import { store } from './redux/store';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    {/* <ChakraProvider> */}
      {/* <SaasProvider> */}
        <Provider store={store}>
          <App />
        </Provider>
      {/* </SaasProvider> */}
    {/* </ChakraProvider> */}
  </BrowserRouter>,
);
