import './CSS/Header.css';
import './CSS/NavBar.css';
import Header from './Component/Header.js';
import NavBar from './Component/NavBar.js';
import React, { useState } from "react";

function App() {
   return (
      <div>
         <header>
            <Header/>
         </header>
         <manu>
            <NavBar/>
         </manu>
      </div>
   );
}

export default App;
