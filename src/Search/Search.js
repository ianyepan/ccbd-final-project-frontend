import React from 'react';
import { NavBar } from '../NavBar/NavBar';
import { SubNav } from '../NavBar/SubNav/SubNav';
import { SearchResultsSummary } from './SearchResultsSummary/SearchResultsSummary';
import { SearchResults } from './SearchResults/SearchResults';
import useReactRouter from 'use-react-router';
import {useBusinessSearch} from '../hooks/yelp-api/useBusinessSearch';

export function Search() {
    const {location, history} = useReactRouter();
    const params = new URLSearchParams(location.search);
    const price_level = params.get('price_level');
    const cuisine = params.get('cuisine');
    const rating = params.get('rating');

    const [restaurants, amountResults, searchParams, performSearch, setRestaurants] = useBusinessSearch(price_level, cuisine, rating);

    function search_(price_level, cuisine, rating) {
      const encodedPriceLevel = encodeURI(price_level);
      const encodedCusine = encodeURI(cuisine);
      const encodedRating = encodeURI(rating);
      performSearch({price_level, cuisine, rating});
      history.push(`/search?price_level=${encodedPriceLevel}&cuisine=${encodedCusine}&rating=${encodedRating}`);   
    }

    // if user hasn't logged in, redirect to login page
    if(!localStorage.getItem('access_token'))
      history.push('/login')

    return (
        <div>
            <NavBar term={cuisine} location={rating} search={search_}/>
            <SubNav setRestaurants={setRestaurants}/>
            <SearchResultsSummary term={searchParams.cuisine}
                                  location={searchParams.rating}
                                  amountResults={amountResults}
                                  shownResults={restaurants ? restaurants.length : 0}
            />
            <SearchResults restaurants={restaurants}/>
        </div>
    );
}


