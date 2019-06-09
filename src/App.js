import React from 'react';

import 'materialize-css/dist/css/materialize.min.css'
/*import M from 'materialize-css/dist/js/materialize.min.js'
*/
import './App.scss';

import Navbar from './components/containers/Navbar';

import ContainerList from './components/containers/ContainerList'
import ContainerChat from './components/containers/ContainerChat';
function App() {
  return (
 <div className="">
      <Navbar/>
     
      <div className="row">
      <div className="col s12  ">
        <div className="container-flex">
          <ContainerList/>
          <ContainerChat/>
        </div>
        </div>
      </div>


      </div>
   
  
  );
}

export default App;
