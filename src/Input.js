import React, { useState } from 'react';
import arrow from './assets/icon-arrow.svg';
import './input.css';
// import error from './assets/icon-error.svg';
export default function Input() {
   return (
      <form>
         <input type="mail" placeholder="Email Address" />
         <button type="button">
            <img src={arrow} alt="" />
         </button>
      </form>
   )
}