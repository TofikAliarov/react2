import React from 'react'
import './App.css';
import Routs from './components/routs/Routs';
import { Provider } from 'react-redux';
import store from "./redux/store";

function App() {

  return (
    <Provider store={store}>
   <Routs/>
   </Provider>
  );
}

export default App;
