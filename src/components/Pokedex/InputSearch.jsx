import React from 'react'
import { useNavigate } from 'react-router-dom';

const InputSearch = () => {
    
    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        navigate(`/pokedex/${e.target.search.value.trim().toLowerCase()}`)
    }
    
    return (
        <form onSubmit={submit} className='input__form'>
            <input className='input__input' id='search' type="text" placeholder='Search a Pokemon'/>
            <button className='input__button'>Search</button>
        </form>
    )
}

export default InputSearch