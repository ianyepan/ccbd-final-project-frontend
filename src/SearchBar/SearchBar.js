import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import { SearchSuggestions } from '../LandingPage/SearchSuggestions/SearchSuggestions';
import {create_favorite_list} from '../hooks/yelp-api/api';

export function SearchBar(props) {
    const [priceLevel, setPriceLevel] = useState("$$");
    const [cuisine, setCuisine] = useState(props.term || '');
    const [rating, setRating] = useState("4.0");

    const priceLevelOptions = [
        { label: '$', value: '$' }, { label: '$$', value: '$$' }, { label: '$$$', value: '$$$' }, { label: '$$$$', value: '$$$$' },
    ];

    const ratingOptions = [
        { label: '4.5', value: '4.5' }, { label: '4.0', value: '4.0' }, { label: '3.5', value: '3.5' }, { label: '3.0', value: '3.0' }, { label: '2.5', value: '2.5' },
    ];

    const handlePriceLevelChange = (event) => {
        setPriceLevel(event.target.value);
    };

    const handleRatingChange = (event) => {
        setRating(event.target.value);
    };

    function submit(e) {
        console.log("Button pressed")
        if (typeof props.search === 'function') {
            props.search(priceLevel, cuisine, rating);
        }
        console.log(priceLevel, cuisine, rating);
        e.preventDefault();
    }

    function testapi(e) {

    }

    const sizeClass = props.small ? '' : 'is-medium';
    return (
        <>
            <form onSubmit={submit}>
                <div className="field has-addons">
                    <p className="control">
                        <button className={`button is-static ${sizeClass}`}>Search</button>
                    </p>
                    <p className="control">
                        <input className={`input ${sizeClass} ${styles['input-control']}`}
                            onChange={(e) => setCuisine(e.target.value)}
                            type="text"
                            value={cuisine}
                            placeholder="vegetarian, vegan, "
                        />
                    </p>
                    <div className={`button ${sizeClass} ${styles['search-button']}`} onClick={submit}>
                        <span className={`icon is-small ${styles['search-icon']}`}><i className="fas fa-search"></i></span>
                    </div>
                </div>
            </form>
            <div>
                <Dropdown
                    label="Select Price Level: "
                    options={priceLevelOptions}
                    value={priceLevel}
                    onChange={handlePriceLevelChange}
                />
                <Dropdown
                    label="Select Rating: "
                    options={ratingOptions}
                    value={rating}
                    onChange={handleRatingChange}
                />
            </div>
            <div>
            <button type="button" onClick={()=>{create_favorite_list(localStorage.getItem('access_token'))}} >Test API Button </button>
            </div>
        </>
    );
}

const Dropdown = ({ label, options, value, onChange }) => {
    return (
        <label>
            {label}
            <select value={value} onChange={onChange}>
                {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                ))}
            </select>
            {"  "}
        </label>
    );
};