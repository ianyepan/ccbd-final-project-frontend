import React, { useState, useEffect, useMemo } from 'react';
import styles from './SubNavItem.module.css';
import { get_saved_favorite_lists} from '../../../hooks/yelp-api/api';

export function SubNavItem(props) {
  const borderClass = props.showRightBorder ? styles['right-border'] : '';
  const [selectedFavList, setSelectedFavList] = useState();
  const [favoriteListsOptions, setFavoriteListsOptions] = useState([""]);
  const [favoriteList, setFavoriteList] = useState([""]);

  const handleSelectedFavListChange = (event) => {
    let selectedList = event.target.value;
    setSelectedFavList(selectedList);
    props.setRestaurants(favoriteList[selectedList])
    props.restorePriceAndRating()
  };

  const getFavListOptions = async() => {
    // check if user logged in or not
    // process favorite list options
    const favLists = await get_saved_favorite_lists();
    // inplace modify the favorite list to maintain the key value pair
    Object.keys(favLists).forEach(function(key){
      let newkey = key.split('@')[0] 
      favLists[newkey] = favLists[key];
      if (newkey !== key) {
        delete favLists[key];
      }
    });
    setFavoriteList(favLists)
    setFavoriteListsOptions(Object.keys(favLists).sort())
  };

  useEffect(() => {
    getFavListOptions();
  }, []);

  return (
      <Dropdown
        label="My Saved Favorite Lists"
        options={favoriteListsOptions}
        value={selectedFavList}
        onChange={handleSelectedFavListChange}
      />
  );
}


// options: ["ianyepan", "hanjuTsai", "fff..."]
const Dropdown = ({ label, options, value, onChange }) => {
  return (
    <label>
      {label + "   "}
      <select value={value} onChange={onChange} style={{padding: "13px",  "border": "1px solid rgb(237,237,237)"}}>
        <option value="" disabled selected>select</option>

        {options.map((option) => (
          <option value={option} style={{"font-size":"14px"}}>{option}</option>
        ))}
      </select>
      {"  "}
    </label>
  )
};