import React, {useEffect, useState} from 'react';
import SearchBox from "./SearchBox";
import ColCardBox from "./ColCardBox";
import MovieDetail from "./MovieDetail"
import Loader from "./Loader";
import {Modal} from 'antd';
import 'antd/dist/antd.css';
import {AllCards} from "./AllCardsStyle";
import Error from "../UI/Error/Error";

const API_KEY = 'df124266';

function Home(props) {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState('');
    const [activateModal, setActivateModal] = useState(false);
    const [detail, setShowDetail] = useState(false);
    const [detailRequest, setDetailRequest] = useState(false);
    const [searchPosition, setSearchPosition] = useState('center');


    useEffect(() => {

        const timer = setTimeout(() => {
            setLoading(true);
            setError(null);
            setData(null);
            setSearchPosition(query ? 'top' : 'center');

            fetch(`http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`)
                .then(resp => resp)
                .then(resp => resp.json())
                .then(response => {
                    if (response.Response === 'False') {
                        // setSearchPosition('center');
                        if (query !== '') {
                            setError(response.Error);
                        }
                    } else {
                        // setSearchPosition('top');
                        setData(response.Search);

                    }
                    setLoading(false);
                })
                .catch(({message}) => {
                    setError(message);
                    setLoading(false);
                })
        }, 800)
        return () => clearTimeout(timer);
    }, [query]);

    return (

        <div>
            <SearchBox searchHandler={setQuery} value={query} curPositon={searchPosition}/>
            {loading && <Loader/>}
            {error !== null && <Error message={error} type="error"/>}
            <AllCards>
                {data !== null && data.length > 0 && data.map((result, index) => (
                    <ColCardBox
                        ShowDetail={setShowDetail}
                        DetailRequest={setDetailRequest}
                        ActivateModal={setActivateModal}
                        key={index}
                        {...result}
                        favorite={!!props.favorites.find(favorite => favorite === result.imdbID)}
                        onFavoriteClick={props.onFavoriteClick}
                    />
                ))}
            </AllCards>
            <Modal
                title='Detail'
                centered
                visible={activateModal}
                onCancel={() => setActivateModal(false)}
                footer={null}
                width={800}
            >
                {detailRequest === false ?
                    (<MovieDetail {...detail} />) :
                    (<Loader/>)
                }
            </Modal>
        </div>
    );
}

export default Home;
