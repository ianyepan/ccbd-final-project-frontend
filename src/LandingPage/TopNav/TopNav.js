import React from 'react';
import styles from './TopNav.module.css';
import { withRouter } from 'react-router-dom'

const handleLogin = () => {

};

const LoginButton = withRouter(({ history }) => (
  <button
    type='button'
    className='button'
    onClick={() => { history.push('/login') }}
  >
    Login
  </button>
))

const SignUpButton = withRouter(({ history }) => (
  <button
    type='button'
    className='button'
    onClick={() => { history.push('/signup') }}
  >
    Sign Up
  </button>
))

export function TopNav() {
    return (
        <div className={styles['top-nav']}>
            <div className={styles.left}>
                <span>Write a Review</span>
                <span>Events</span>
            </div>
            <div className={styles.right}>
                <LoginButton />
                <SignUpButton />
            </div>
        </div>
    );
}