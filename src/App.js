import React, {useEffect, useState} from "react";
import './index.css'
import MainHeader from "./components/MainHeader/MainHeader";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";


function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const userLogged = localStorage.getItem('isLoggedIn');
        if (userLogged === "true") {
            setIsLoggedIn(true);
        }
    }, []);

    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', 'true');
        setIsLoggedIn(true);
    }

    const logoutHandler = () => {
        localStorage.setItem('isLoggedIn', 'false');
        setIsLoggedIn(false);
    }


    const addToFavoritesHandler = (imdbID) => {
        function checkFav(favorite) {
            return favorite !== imdbID;
        }

        const favId = favorites.find(favorite => favorite === imdbID);
        if (favId !== imdbID) {
            const newFavorites = [...favorites, imdbID];
            setFavorites(newFavorites);
        } else {
            setFavorites(favorites.filter(checkFav));
        }
        localStorage.setItem('favoriteMovies', favorites.toString());
    }


    return (
        <>
            <MainHeader favorites={favorites} isAuthenticated={isLoggedIn} onLogout={logoutHandler}/>
            <main>
                {!isLoggedIn && <Login onLogin={loginHandler}/>}
                {isLoggedIn &&
                <Home favorites={favorites} onFavoriteClick={addToFavoritesHandler} onLogout={logoutHandler}/>}
            </main>
        </>
    );
}

export default App;
