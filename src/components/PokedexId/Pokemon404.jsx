import React from 'react'
import { Link } from 'react-router-dom'
import './styles/nf.css'

const Pokemon404 = () => {
    return (
        <div className='nf'>
            <h1>Pokemon not found</h1>
            <Link to='/pokedex' className='link'>Return to Pokedex</Link>
        </div>
    )
}

export default Pokemon404