import React, { useState } from 'react';
import styles from './SubNavItem.module.css';

export function SubNavItem(props) {
  const borderClass = props.showRightBorder ? styles['right-border'] : '';
  const [selectedFavList, setSelectedFavList] = useState();

  const handleSelectedFavListChange = (event) => {
    setSelectedFavList(event.target.value);
  };

  function getFavListOptions() {
    // TODO: get fav list from backend
    const favListOptions = ["List1", "List2", "List3", "List4"]; // list name / list of rids

    // const favListOptions = [
    //     { label: 'List1', value: ["asdfdsf"] }, { label: '$$', value: '$$' }, { label: '$$$', value: '$$$' }, { label: '$$$$', value: '$$$$' },
    // ];

    return favListOptions;
  };

  const favListOptions = getFavListOptions();

  return (
    // <div className="dropdown is-hoverable">
    //   <div className="dropdown-trigger">
    //     <div
    //       className={`${styles['sub-nav-item']} ${borderClass}`}
    //       aria-haspopup="true"
    //       aria-controls="dropdown-menu4"
    //     >
    //       <span className="icon is-small">
    //         <i className={`fas ${props.icon}`}></i>
    //       </span>
    //       <span>{props.label}</span>
    //       <span className="icon is-small">
    //         <i className="fas fa-angle-down" aria-hidden="true"></i>
    //       </span>
    //     </div>
    //   </div>
      <Dropdown
        label="My Saved Favorite Lists"
        options={favListOptions}
        value={selectedFavList}
        onChange={setSelectedFavList}
      />
    // </div>
  );
}


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
  )
};