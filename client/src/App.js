import React from "react";
import {BrowserRouter as Router} from 'react-router-dom'
import {DataProvider} from './GlobalState'
import Header from './components/layouts/Header'
import Sidebar from './components/layouts/Sidebar'
import Slider from './components/layouts/Slider'
import Footer from './components/layouts/Footer'

import MainPages from './components/mainpages/Pages'


function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
         <Header/>
         <Sidebar/>
         <MainPages/>
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;


