import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import './App.css';
import Signup from "./components/Signup";
import Login from './components/Login';
// import Homepage from "./pages/Homepage";


// establish connection to back-end server's /graphql endpoint
const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        {/*going to input logIn/signUp here */}
        <Login />
        <Signup />
        {/* <Homepage /> */}
      </div>

    </ApolloProvider>
  );
}

export default App;
