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
            <NavBar/>
         </header>
         <main>
            
         </main>
      </div>
   );
}

export default App;
