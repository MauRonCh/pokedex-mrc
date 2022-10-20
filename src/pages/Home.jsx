import React from 'react'
import FormHome from '../components/Home/FormHome'
import './styles/home.css'

const Home = () => {
    return (
        <article className='pokedex'>
            <img src="/home/pokLogo.png" alt="" className='pokedex__logo'/>
            <h2 className="pokedex__subtitle">Hi trainer!</h2>
            <p className="pokedex__text">Enter your name to get access to the Pokedex</p>
            <FormHome />
        </article>
    )
}

export default Home