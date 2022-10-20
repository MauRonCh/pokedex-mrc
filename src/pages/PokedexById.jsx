import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Pokemon404 from '../components/PokedexId/Pokemon404'
import Loading from '../components/shared/Loading'
import './styles/pokeId.css'

const PokedexById = () => {

    const { id } = useParams()

    const [pokemon, setPokemon] = useState()
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`
        axios.get(URL)
            .then(res => setPokemon(res.data))
            .catch(err => {
                console.log(err)
                setHasError(true)
            })
    }, [])

    if (hasError) {
        return <Pokemon404 />
    }

    return (
    <>  <aside className='poke-id__aside'>
            <img src="../public/home/pokLogo.png" alt="" className='pokedex__logo' /> 
            <Link to='/pokedex' className='poke-id__back'>Return to Pokedex»</Link>
        </aside>
    {    
        pokemon ?
        <main className='poke-id__container'>

            <article className='poke-id__card-info'>
                <header className={`poke-id__header bg-${pokemon?.types[0].type.name}`}>
                    <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" className='poke-id__sprite' />
                </header>
                <section className='poke-id__principal'>
                    <span className='poke-id__id'>#{pokemon?.id}</span>
                    <h1 className="poke-id__name">{pokemon?.name}</h1>
                    <div className="poke-id__props">
                        <div className="poke-id__prop">
                            <h4 className="poke-id__prop-title">Weight</h4>
                            <p className="poke-id__prop-number">{pokemon?.weight}</p>
                        </div>
                        <div className="poke-id__prop">
                            <h4 className="poke-id__prop-title">Height</h4>
                            <p className="poke-id__prop-number">{pokemon?.height}</p>
                        </div>
                    </div>
                </section>
                <div className='poke-id__block2'>
                    <section className='poke-id__types'>
                        <h3 className='poke-id__types-title'>{pokemon?.types.length == 1 ? 'Type' : 'Types'}</h3>
                        <ul className='poke-id__types-container'>
                            {pokemon?.types.map(type => (
                                <li key={type.slot} className={`poke-id__type bg-${type.type.name}`}>{type.type.name}</li>
                            ))
                            }
                        </ul>
                    </section>
                    <section className='poke-id__types'>
                    <h3 className='poke-id__types-title'>Abilities</h3>
                        <ul className='poke-id__types-container'>
                            {pokemon?.abilities.map(ability => (
                                <li key={ability.slot} className={`poke-id__ability bg-${ability.ability.name} ${(ability.is_hidden && 'bg__hiddenA')}`}>{ability.ability.name}</li>
                            ))
                            }
                        </ul>
                    </section>
                </div>
                <section className='poke-id__stats-container'>
                    <h2 className='poke-id__stats-title'>Stats</h2>
                    <ul className='poke-id__stats'>
                        {pokemon?.stats.map(stat => (
                            <li key={stat.stat.name} className='poke-id__stat-name'>
                                <div className='stat'>
                                    <h6 className='stat__name'>{stat.stat.name}</h6>
                                    <span className='stat__number'>{stat.base_stat}/150</span>
                                    <div className='stat__bar'>
                                        <span className='stat__base-stat' style={{width:`${(800 * stat.base_stat)/150}px`}}></span>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>

            </article>
            <article className='poke-id__card-info low-margin'>
                <h2 className='poke-id__mov-title'>Movements</h2>
                <ul className='poke-id__movs-container'>
                    {
                        pokemon?.moves.slice(0, 31).map((move, i) => (
                            <li className='poke-id__mov' key={i}>{move.move.name}</li>
                        ))
                    }
                </ul>
            </article>
        </main>
        : <Loading />
        }
    </>
    )
}

export default PokedexById