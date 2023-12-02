import React from 'react';
import './Search.css';

import {FaMobile, FaTv,FaMobi, FaDesktop, FaHdd, FaList,  } from 'react-icons/fa';

function Search(){
    return(
       <section className='searchArea'>
        <div className='iconeArea'>
              
              <FaMobile />
              <FaTv/>
              <FaDesktop/>
              <FaHdd/>
              <FaList/>
          
          </div>
        </section>
        
        );
}

export default Search;