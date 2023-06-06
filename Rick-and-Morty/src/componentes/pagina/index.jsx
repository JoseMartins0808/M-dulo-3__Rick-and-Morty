import React from 'react'
import './style.css';

export const Pagina = ({ personagem }) => {
    return (
        <>
            {personagem.status === 'Alive' ? (
                < li className='vivo' >
                    <img src={personagem.image}></img>
                    <p>Nome: {personagem.name}</p>
                    <span>Espécie: {personagem.species}</span>
                </li >
            ) : (
                < li className='morto' >
                    <img src={personagem.image}></img>
                    <p>Nome: {personagem.name}</p>
                    <span>Espécie: {personagem.species}</span>
                </li >
            )}
        </>

    )
}
