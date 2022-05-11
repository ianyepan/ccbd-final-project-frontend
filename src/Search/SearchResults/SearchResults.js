import React, { useState, useEffect, useMemo } from 'react';
import { SearchResult } from './SearchResult/SearchResult';
import styles from './SearchResults.module.css';
import { Spinner } from '../../Spinner/Spinner.js';
import {get, get_my_favorite_list} from '../../hooks/yelp-api/api'

async function get_my_favorite_list_rids() {
    let restaurants = await get_my_favorite_list();
    let rids = restaurants.map(restaurant => restaurant.rid);
    return rids;
}

export function SearchResults(props) {
    let searchResults = <Spinner />;
    const [rids, setRids] = useState([]);

    useMemo(() => {
        async function fetchRIDs() {
          setRids(await get_my_favorite_list_rids());
        }
        fetchRIDs();
        console.log(rids);
    }, []);


    useEffect(() => {
      console.log("use effect")
      const fetchData = async () => {
        setRids(await get_my_favorite_list());
      }
      fetchData();
    }, [props.restaurants])


    if (props.restaurants && props.restaurants.length) {
        searchResults = props.restaurants.map(b => <SearchResult key={b.id} business={b} rids={rids} />);
    }
    return (
        <div className={styles['search-results']}>
            {searchResults}
        </div>
    );

}


const EmptyResults = () => {
    return (
        <div style={{"text-align": "center"}}>
            <h1>
                This favorite list is empty.
            </h1>
        </div>
    );
};