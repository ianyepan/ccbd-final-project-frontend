import {useState, useEffect} from 'react';
import * as api from './api';

export function useBusinessSearch(price_level, cuisine, rating) {
    const [restaurants, setRestaurants] = useState();
    const [amountResults, setAmountResults] = useState();
    const [searchParams, setSearchParams] = useState({price_level, cuisine, rating});

    useEffect(() => {
        setRestaurants([]);
        const fetchData = async () => {
            try {
                const rawData = await api.get('/search', searchParams);
                const resp = await rawData.json();
                setRestaurants(resp.restaurants);
                console.log(resp.restaurants);
                setAmountResults(resp.total);
            } catch(e) {
                console.error(e);
            }
        };
        fetchData();
    }, [searchParams]);
    return [restaurants, amountResults, searchParams, setSearchParams, setRestaurants];
}