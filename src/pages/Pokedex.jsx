import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardPokemon from '../components/Pokedex/CardPokemon'
import InputSearch from '../components/Pokedex/InputSearch'
import Pagination from '../components/Pokedex/Pagination'
import SelectByType from '../components/Pokedex/SelectByType'
import Header from '../components/shared/Header'
import './styles/pokedex.css'

const Pokedex = () => {

    const [pokemons, setPokemons] = useState()
    const [typeSelected, setTypeSelected] = useState('All Pokemons')

    useEffect(() => {

        if (typeSelected !== 'All Pokemons') {
            // If select a type
            axios.get(typeSelected)
            .then(res => {
                const result = res.data.pokemon.map(e => e.pokemon)
                setPokemons(result)
            })
            .catch(err => console.log(err))
        } else {
            // If I want all pokemons
            const URL = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
            axios.get(URL)
                .then(res => setPokemons(res.data.results))
                .catch(err => console.log(err))
        }
    }, [typeSelected])


    const username = useSelector(state => state.username);

    // Paginate
    const [page, setPage] = useState(1);
    const [pokePerPage, setPokePerPage] = useState(8);
    const initialPoke = (page - 1) * pokePerPage;
    const finalPoke = page * pokePerPage;

    return (
        <div className='pokedex__container'>
            <Header />
            <img src="/home/pokLogo.png" alt="" className='pokedex__logo'/>
            <header className='pokedex__header'>
                <p className='pokedex__text'><span className='pokedex__span'>Welcome {username},</span> here you can find your favorite Pokemon</p>
            </header>
            <aside className='pokedex__aside'>
                <div className="pokedex__aside-b1">
                    <InputSearch />
                    <SelectByType setTypeSelected={setTypeSelected} setPage={setPage}/>
                </div>
                <Pagination 
                page={page}
                pagesLength={pokemons && Math.ceil(pokemons.length / pokePerPage)}
                setPage={setPage}
                />
            </aside>
            <main>
                <div className="card-container">
                {
                    pokemons?.slice(initialPoke, finalPoke).map(pokemon => (
                    <CardPokemon
                        key={pokemon.url}
                        url={pokemon.url}    
                    />
                ))
                }
                </div>
            </main>
        </div>
    )
}

export default Pokedex