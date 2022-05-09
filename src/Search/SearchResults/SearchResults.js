import React, { useState, useEffect, useMemo } from 'react';
import { SearchResult } from './SearchResult/SearchResult';
import styles from './SearchResults.module.css';
import { Spinner } from '../../Spinner/Spinner.js';
import {get_my_favorite_list} from '../../hooks/yelp-api/api'

async function get_my_favorite_list_rids() {
    let restaurants = await get_my_favorite_list();
    let rids = restaurants.map(restaurant => restaurant.rid);
    return rids;
}

export function SearchResults(props) {
    let searchResults = <Spinner />;
    const [rids, setRids] = useState([]);

    useMemo(async() => {
        async function fetchRIDs() {
            try {
                setRids(await get_my_favorite_list_rids());
            } catch (err) {
                console.log(err);
            }
        }
        fetchRIDs();
    }, []);

    if (props.restaurants && props.restaurants.length) {
        searchResults = props.restaurants.map(b => <SearchResult key={b.id} business={b} is_in_favorite_list={rids.includes(b.rid)} />);
    }

    return (
        <div className={styles['search-results']}>
            {searchResults}
        </div>
    );
}