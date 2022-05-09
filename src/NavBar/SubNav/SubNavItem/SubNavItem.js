import React, { useState, useEffect, useMemo } from 'react';
import styles from './SubNavItem.module.css';
import { get_saved_favorite_lists} from '../../../hooks/yelp-api/api';

export function SubNavItem(props) {
  const borderClass = props.showRightBorder ? styles['right-border'] : '';
  const [selectedFavList, setSelectedFavList] = useState();
  const [favoriteListsOptions, setFavoriteListsOptions] = useState([""]);

  const handleSelectedFavListChange = (event) => {
    setSelectedFavList(event.target.value);
  };

  const getFavListOptions = async() => {
    const favLists = await get_saved_favorite_lists();

    const output = Object.keys(favLists).map(email => email.split('@')[0]);
    setFavoriteListsOptions(output)
  };

  useEffect(() => {
    getFavListOptions();
  }, []);


  return (
      <Dropdown
        label="My Saved Favorite Lists"
        options={favoriteListsOptions}
        value={selectedFavList}
        onChange={setSelectedFavList}
      />
  );
}


// options: ["ianyepan", "hanjuTsai", "fff..."]
const Dropdown = ({ label, options, value, onChange }) => {
  return (
    <label>
      {label}
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
      {"  "}
    </label>
  )
    // <div className="dropdown-menu" id="dropdown-menu4" role="menu">
    //   <div className="dropdown-content">
    //     {
    //       options.map((option) => (
    //         <div className="dropdown-item">
    //         <p>{option}</p>
    //        </div> 
    //       )
    //     )
    //     }
    //   </div>
    // </div>
};