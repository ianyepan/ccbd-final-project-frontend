//
// DEPRECATED!!: This file has been moved to SearchBar.js
//

// import React, { useState } from 'react';
// import styles from './SearchSuggestions.module.css';

// export function SearchSuggestions() {

//   const [priceLevel, setPriceLevel] = React.useState("$$");
//   const [rating, setRating] = React.useState("4.0");

//   const priceLevelOptions = [
//     { label: '$', value: '$' },
//     { label: '$$', value: '$$' },
//     { label: '$$$', value: '$$$' },
//     { label: '$$$$', value: '$$$$' },
//   ];

//   const ratingOptions = [
//     { label: '4.5', value: '4.5' },
//     { label: '4.0', value: '4.0' },
//     { label: '3.5', value: '3.5' },
//     { label: '3.0', value: '3.0' },
//     { label: '2.5', value: '2.5' },
//   ];

//   const handlePriceLevelChange = (event) => {
//     setPriceLevel(event.target.value);
//   };

//   const handleRatingChange = (event) => {
//     setRating(event.target.value);
//   };

//   return (
//     <>
//       {/* <div className={styles.suggestions}>
//         <span className="icon is-small"><i className="fas fa-utensils"></i></span><span className={styles.suggestion}>Restaurants</span>
//         <span className="icon is-small"><i className="fas fa-cocktail"></i></span><span className={styles.suggestion}>Nightlife</span>
//         <span className="icon is-small"><i className="fas fa-concierge-bell"></i></span><span className={styles.suggestion}>Services</span>
//         <span className="icon is-small"><i className="fas fa-truck"></i></span><span className={styles.suggestion}>Delivery Services</span>
//       </div> */}
//       <Dropdown
//         label="Select Price Level: "
//         options={priceLevelOptions}
//         value={priceLevel}
//         onChange={handlePriceLevelChange}
//       />
//       <Dropdown
//         label="Select Rating: "
//         options={ratingOptions}
//         value={rating}
//         onChange={handleRatingChange}
//       />
//     </>
//   );
// }

// const Dropdown = ({ label, value, options, onChange }) => {
//   return (
//     <label>
//       {label}
//       <select value={value} onChange={onChange}>
//         {options.map((option) => (
//           <option value={option.value}>{option.label}</option>
//         ))}
//       </select>
//     </label>
//   );
// };
