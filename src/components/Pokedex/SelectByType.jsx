import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SelectByType = ({setTypeSelected, setPage}) => {

    const [types, setTypes] = useState()

    useEffect(() => {
        const URL = 'https://pokeapi.co/api/v2/type'
        axios.get(URL)
            .then(res => setTypes(res.data.results))
            .catch(err => console.log(err))
        }, [])

        const handleChange = e => {
            setTypeSelected(e.target.value)
            setPage(1);
        }

    return (
        <div className="select__container">
            <select onChange={handleChange} className='select'>
                <option value="All Pokemons" className='select__option'>All Pokemons</option>
                {
                    types?.map(type => ((type.name != 'unknown' && type.name != 'shadow') &&
                        <option key={type.url} value={type.url} className='select__option'>{type.name}</option>
                    ))
                }

            </select>
        </div>
    )
}

export default SelectByType