import React from 'react';
import { useState, useMemo } from 'react'
import { TopNav } from './TopNav/TopNav';
import logo from '../assets/home-logo.png';
import styles from './LandingPage.module.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchSuggestions } from './SearchSuggestions/SearchSuggestions';
import useReactRouter from 'use-react-router';
import queryString from 'query-string';
import { get_access_token } from '../hooks/yelp-api/api'; 

export function LandingPage() {
  const { location, history } = useReactRouter();

  const [price_level, setPriceLevel] = useState("$$");
  const [cuisine, setCuisine] = useState( '');
  const [rating, setRating] = useState("0.0");

  function search(price_level, cuisine, rating) {
    const encodedPriceLevel = encodeURI(price_level);
    const encodedCusine = encodeURI(cuisine);
    const encodedRating = encodeURI(rating);
    history.push(`/search?price_level=${encodedPriceLevel}&cuisine=${encodedCusine}&rating=${encodedRating}`);
  }

  // Acts as componentWillMount
  useMemo(async () => {
    const urlParams = new URLSearchParams(window.location.search); // E.g. http://localhost:8888/?code=b0b7bc4b-31a9-4b93-b34c-d33f359acf30
    const code = urlParams.get('code'); // E.g. b0b7bc4b-31a9-4b93-b34c-d33f359acf30 (until string end)
    if(!code)
      return
    // exchange authorization token for access_token
    let resp = await get_access_token(code);
    if(resp.access_token && resp.refresh_token){
      localStorage.setItem('access_token', resp.access_token);
      localStorage.setItem('refresh_token', resp.refresh_token);
    }
    // history.push('/');
  });
  

  return (
    <div className={styles.landing}>
      <div className={styles['search-area']}>
        <TopNav/>
        <img src={logo} className={styles.logo} alt="logo" />

        {/* <SearchBar search={search} /> */}
        <SearchBar setPriceLevel={setPriceLevel} setCuisine={setCuisine} setRating={setRating} 
                    price_level={price_level} cuisine={cuisine} rating={rating} search={search}/>
      </div>
    </div>
  );
}
