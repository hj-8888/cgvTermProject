import './CSS/Header.css';
import './CSS/NavBar.css';
import './CSS/MovieList.css';
import './scss/owl.carousel.css';
import './scss/owl.theme.default.css';
import Header from './Component/Header.js';
import NavBar from './Component/NavBar.js';
import MovieList from './Component/MovieList.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
   return (
      <div>

         <BrowserRouter>
            <Header/>
            <NavBar/>

				<Routes>
					<Route path="/" element={<MovieList />}></Route>
				</Routes>

			</BrowserRouter>
      </div>
   );
}

export default App;
