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

    const [restaurants, amountResults, searchParams, performSearch] = useBusinessSearch(price_level, cuisine, rating);

    function search_(price_level, cuisine, rating) {
      const encodedPriceLevel = encodeURI(price_level);
      const encodedCusine = encodeURI(cuisine);
      const encodedRating = encodeURI(rating);
      performSearch({price_level, cuisine, rating});
    }

    // if (!price_level || !cuisine || !rating) {
    //   console.log("--------------------Redirecting to home")
    //   history.push('/')
    // }

    return (
        <div>
            <NavBar term={cuisine} location={rating} search={search_}/>
            <SubNav/>
            <SearchResultsSummary term={searchParams.cuisine}
                                  location={searchParams.rating}
                                  amountResults={amountResults}
                                  shownResults={restaurants ? restaurants.length : 0}
            />
            <SearchResults restaurants={restaurants}/>
        </div>
    );
}