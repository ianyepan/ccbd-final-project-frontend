import React, {useEffect} from 'react';
import styles from './SearchResult.module.css';
import { BusinessRating } from '../../../BusinessRating/BusinessRating';
import {MyHeart} from '../../../FavoriteList/Heart';
import { get_healthy_ratio } from '../../../hooks/yelp-api/api';
export function SearchResult(props) {
    const b = props.business;
    if (!b) {
        return (<div/>);
    }

    const tags = b.categories.map(category => (<span className={`tag ${styles['business-tag']}`} key={b.id + category.title}>{category.title}</span>));
    const addressLines = b.address;


    return (
        <div className={styles['search-result']}>
            <img src={b.image_url} alt='business' className={styles['business-image']} />
            <div className={styles['business-info']}>
                <h2 className="subtitle">{b.name}</h2>
                <BusinessRating reviewCount={b.review_count} rating={b.rating} />
                <p>{b.price} {tags}</p>
            </div>
            <div className={styles['contact-info']}>
                {addressLines}
            </div>
            <div style={{"align": "right"}}>
                <MyHeart rid={b.rid} rids={props.rids} />
            </div>
            <SearchBox rid={b.rid}></SearchBox>
        </div>
    )
}

const SearchBox = (props) => {
  const [showResults, setShowResults] = React.useState(false)
  const [result, setResult] = React.useState("");

  useEffect(()=> {
    setResult("")
  }, props.rid)

  
  const onClick = async () => {
    setResult(await get_healthy_ratio(props.rid))
    setShowResults(true)
  }

  return (
    <div>
      <input type="submit" value="Score" onClick={onClick} />
      { showResults ? <Results result={result}/> : null }
    </div>
  )
}

const Results = (props) => (
  <div id="results" className="search-results">
    {props.result}
  </div>
)

// function myFunction(rid) {
//   console.log(rid);
//   var x = document.getElementById(rid);
//   console.log("xxx",x)
//   if (x.style.display) {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }

// export function MyButton(props){
//   return (
//     <div>
//     <button onclick={myFunction(props.rid)}>Click Me</button>
//     <div id={props.rid} style={{"width": 100}}>
//     This is my DIV element.
//     </div>
//     </div>
// )
// }
