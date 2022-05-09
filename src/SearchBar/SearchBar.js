import React from 'react';
import styles from './SearchBar.module.css';
import { SearchSuggestions } from '../LandingPage/SearchSuggestions/SearchSuggestions';

export function SearchBar(props) {
    const { price_level, setPriceLevel, cuisine, setCuisine, rating, setRating } = props;

    const price_levelOptions = [
        { label: '$', value: '$' }, { label: '$$', value: '$$' }, 
        { label: '$$$', value: '$$$' }, { label: '$$$$', value: '$$$$' },
    ];

    const ratingOptions = [
        { label: '4.5', value: '4.5' }, { label: '4.0', value: '4.0' }, 
        { label: '3.5', value: '3.5' }, { label: '3.0', value: '3.0' }, { label: '2.5', value: '2.5' },
    ];

    const handlePriceLevelChange = (event) => {
        setPriceLevel(event.target.value);
    };

    const handleCuisineChange = (event) => {
        setCuisine(event.target.value);
    };

    const handleRatingChange = (event) => {
        setRating(event.target.value);
    };

    function submit(e) {
        if (price_level === "") {
            setPriceLevel("$$$$")
        }
        if (rating === "") {
            setRating("0.0")
        }
        if (typeof props.search === 'function') {
            props.search(price_level, cuisine, rating);
        }
        console.log(price_level, cuisine, rating);
        e.preventDefault();
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
                            onChange={handleCuisineChange}
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
                    options={price_levelOptions}
                    value={price_level}
                    onChange={handlePriceLevelChange}
                />
                <Dropdown
                    label="Select Rating: "
                    options={ratingOptions}
                    value={rating}
                    onChange={handleRatingChange}
                />
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