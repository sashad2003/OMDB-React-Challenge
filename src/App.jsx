import React, {useEffect, useState} from "react";
import './index.css'
import MainHeader from "./components/MainHeader/MainHeader/MainHeader";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import FavoritesPage from "./components/FavoritesPage/FavoritesPage";

function getSessionStorageOrDefault(key, defaultValue) {
    const stored = sessionStorage.getItem(key);
    console.log(defaultValue, 'key')
    if (!stored) {
        return defaultValue;
    }
    return JSON.parse(stored);
}


function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isFavorites, setIsFavorites] = useState(false);

    const [favorites, setFavorites] = useState(sessionStorage.getItem('favoriteID') ? sessionStorage.getItem('favoriteID').split(',') : []);
    const [favoritesLocal, setFavoritesLocal] = useState(getSessionStorageOrDefault('favoriteObjects',''));


    useEffect(() => {
        const userLogged = localStorage.getItem('isLoggedIn');
        if (userLogged === "true") {
            setIsLoggedIn(true);
        }
    }, []);

    useEffect(() => {
        if (favorites.length > 0) {
                sessionStorage.setItem('favoriteID', favorites.toString());
                sessionStorage.setItem('favoriteObjects', JSON.stringify(favoritesLocal));
            } else {
                sessionStorage.setItem('favoriteID', '');
                sessionStorage.setItem('favoriteObjects', '');
            }
    }, [favorites, favoritesLocal]);


    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', 'true');
        setIsLoggedIn(true);
    }

    const logoutHandler = () => {
        localStorage.setItem('isLoggedIn', 'false');
        setIsLoggedIn(false);
    }


    const addToFavoritesHandler = (results) => {

        const isFavoriteExist = !!favorites.find(favorite => favorite === results.imdbID);

        function checkFav(favorite) {
            return favorite !== results.imdbID;
        }

        function checkObjFav(favorite) {
            return favorite !== results;
        }

        if (!isFavoriteExist) {
            const newFavorites = [...favorites, results.imdbID];
            const newFavoriteObjects = [...favoritesLocal, results];
            setFavorites(newFavorites);
            setFavoritesLocal(newFavoriteObjects);
        } else {
            setFavorites(favorites.filter(checkFav));
            setFavoritesLocal(favoritesLocal.filter(checkObjFav))
        }
    }
    const showFavoritesHandler = () => {
        if (!isFavorites) {
            setIsFavorites(true);
        } else {
            setIsFavorites(false);
        }
    }

    return (
        <>
            <MainHeader favorites={favorites} isAuthenticated={isLoggedIn} onLogout={logoutHandler}
                        showFavoritesClicked={showFavoritesHandler}/>
            <main>

                {!isLoggedIn && <Login onLogin={loginHandler}/>}

                {isLoggedIn && !isFavorites &&
                <Home favorites={favorites} onFavoriteClick={addToFavoritesHandler}/>}

                {isLoggedIn && isFavorites &&
                <FavoritesPage favoritesLocal={favoritesLocal} onFavoriteClick={addToFavoritesHandler}/>}
            </main>
        </>
    );
}

export default App;
