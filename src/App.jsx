import React, {useEffect, useState} from "react";
import './index.css'
import MainHeader from "./components/MainHeader/MainHeader/MainHeader";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home/Home";
import FavoritesPage from "./components/Home/FavoritesPage/FavoritesPage";


function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isFavorites, setIsFavorites] = useState(false);

    const [favorites, setFavorites] = useState(sessionStorage.getItem('favoriteID') ? sessionStorage.getItem('favoriteID').split(',') : []);
    const [favoritesLocal, setFavoritesLocal] = useState(sessionStorage.getItem('favoriteObjects') ? sessionStorage.getItem('favoriteObjects').split(',') : []);

    const [sessionCout, setSessionCount] = useState(0);

    useEffect(() => {
        const userLogged = localStorage.getItem('isLoggedIn');
        // const raw = sessionStorage.getItem('favoriteObjects') || [];
        // setFavoritesLocal(JSON.parse(raw));
        if (userLogged === "true") {
            setIsLoggedIn(true);
        }
    }, []);

    useEffect(() => {
        if (sessionCout !== 0) {
            if (favorites.length > 0) {
                sessionStorage.setItem('favoriteID', favorites.toString());
                sessionStorage.setItem('favoriteObjects', JSON.stringify(favoritesLocal));
            } else {
                sessionStorage.setItem('favoriteID', '');
                sessionStorage.setItem('favoriteObjects', '');
            }
        }
    }, [favorites, favoritesLocal, sessionCout]);


    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', 'true');
        setIsLoggedIn(true);
    }

    const logoutHandler = () => {
        localStorage.setItem('isLoggedIn', 'false');
        setIsLoggedIn(false);
    }


    const addToFavoritesHandler = (results) => {
        setSessionCount(1);
        console.log("my results ", results)
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

                {isFavorites &&
                <FavoritesPage favoritesLocal={favoritesLocal} onFavoriteClick={addToFavoritesHandler}/>}
            </main>
        </>
    );
}

export default App;
