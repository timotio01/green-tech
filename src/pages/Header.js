import React from 'react';
import './Header.css';
import headerImage from './../images/MicrosoftTeams-image (2).png'

function Header(){
    return(
        <header class="btnArea">
        <div class="pesquisa">    
                <input type="text" id="text" name="texto"placeholder="Pesquisar" ></input>
            <div class="btnPesquisar">
                <input type="submit" value="Pesquisar"></input>
            </div>
        </div>
            
            <div class="headerImagem">
                <img src={headerImage}></img>
            </div>

        </header>
        
        );
}

export default Header;