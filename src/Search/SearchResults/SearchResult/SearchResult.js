import React from 'react';
import styles from './SearchResult.module.css';
import { BusinessRating } from '../../../BusinessRating/BusinessRating';
import {MyHeart} from '../../../FavoriteList/Heart';

export function SearchResult(props) {
    const b = props.business;
    if (!b) {
        return (<div/>);
    }

    const tags = b.categories.map(category => (<span className={`tag ${styles['business-tag']}`} key={b.id + category.title}>{category.title}</span>));
    const addressLines = b.address;

    return (
        <div className={styles['search-result']}>
            <img src={b.image_url} alt='business' className={styles['business-image']}/>
            <div className={styles['business-info']}>
                <h2 className="subtitle">{b.name}</h2>
                <BusinessRating reviewCount={b.review_count} rating={b.rating}/>
                <p>{b.price} {tags}</p>
            </div>
            <div className={styles['contact-info']}>
                {/* <p>{b.phone}</p> */}
                {addressLines}
                <br/>
            </div>
            {/* TODO: add a space between address and heart */}
            <div>
                <MyHeart rid={b.rid} is_active={props.is_in_favorite_list}/>
            </div>
        </div>
    )
}