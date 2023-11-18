import React from 'react';
import './Header.css';
import headerImage from './../images/MicrosoftTeams-image (2).png'
import {FaSearch, fasearch} from 'react-icons/fa';

function Header(){
    return(
        <header class="btnArea">
        <div class="pesquisa">    
                <input type="text" id="text" name="texto" placeholder=''></input>
                <FaSearch className='icone'/>
            <div class="btnPesquisar">
                <button type="submit" value="Pesquisar">Pesquisar</button>
            </div>
        </div>
            
            <div class="headerImagem">
                <img src={headerImage}></img>
            </div>

        </header>
        
        );
}

export default Header;