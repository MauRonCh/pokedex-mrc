import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setGlobalUsername } from '../../store/slices/username.slice';

const FormHome = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        dispatch(setGlobalUsername(e.target.firstChild.value.trim()))
        navigate('/pokedex')
    }


    return (
        <form onSubmit={submit} className='pokedex__form'>
            <input type="text" className="pokedex__input" placeholder='Your name here'/>
            <button className="pokedex__button">Gotta catch 'em all!</button>
        </form>
    )
}

export default FormHome