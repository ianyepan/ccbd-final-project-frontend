import React from 'react';
import logo from '../assets/search-logo.png';
import styles from './NavBar.module.css';
import { SearchBar } from '../SearchBar/SearchBar';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const LogOutButton = withRouter(({ history }) => (
  <button
    type='button'
    className={`button ${styles['nav-button']}`}
    onClick={() => { 
      history.push('/'); 
      localStorage.removeItem('access_token'); 
      localStorage.removeItem('refresh_token');
    }}
  >
  Log Out
  </button>
))

export function NavBar(props) {
    console.log("In NavBar")
    return (
        <div className={styles['nav-bar']}>
            <Link to='/'><img src={logo} className={styles.logo} alt='belb logo' /></Link>
            <SearchBar small term={props.term} location={props.location} search={props.search}/>
            <LogOutButton/>
        </div>
    );
}