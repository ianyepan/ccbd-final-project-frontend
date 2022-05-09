import React from 'react';
import { SubNavItem } from './SubNavItem/SubNavItem';
import styles from './SubNav.module.css';
import { add_follow_list } from '../../hooks/yelp-api/api';

function handleSubmit(event) {
    event.preventDefault();
    let fid = event.target.fid.value;
    add_follow_list(fid).then((value) => {
        window.location.reload();
    });
};


export function SubNav(props) {
    return (
        <div className={styles.container}>
            <div className={styles['sub-nav']}>
                <div>
                    <SubNavItem restorePriceAndRating={props.restorePriceAndRating} setRestaurants={props.setRestaurants} label='My Saved Favorite Lists' icon='fa-info-circle' showRightBorder />
                </div>

                <div>
                    <button className={`button ${styles['subnav-button']} ${styles['omit-right-border']}`}>
                        <span className="icon"><i className="fas fa-pen" /></span>
                        <form onSubmit={handleSubmit}>
                            <label>
                                User ID &nbsp; &nbsp;
                                <input type="text" name="fid" />
                            </label>
                            <input type="submit" value="Follow" />
                        </form>
                    </button>
                    <button className={`button ${styles['subnav-button']} ${styles['omit-right-border']}`}>
                        <span className="icon"><i className="fas fa-pen" /></span>
                        <span>Write a Review</span>
                    </button>
                    <button className={`button ${styles['subnav-button']}`}>
                        <span className="icon"><i className="fas fa-hotel" /></span>
                        <span>For Businesses</span>
                    </button>
                </div>
            </div>
        </div>

    );
}