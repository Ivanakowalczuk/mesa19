import React, { useContext } from 'react'
import "../App.css"
import LanguageContext from '../context'

const Navbar = () => {
    const { language, handleChangeLA } = useContext(LanguageContext)
    const {text} = language
    
   
    return (
        <div className="navbar">
            {/* CONSEJO: Renderizar la información traida del contexto de forma dinamica */}
            <p>Início</p> 
            <p>Idioma atual: {text}</p>
            <button onClick={() => handleChangeLA('en')}>Alterar idioma a inglés</button>
            <button onClick={() => handleChangeLA('es')}>Cambiar a español</button>
        </div>
    )
}

export default Navbar