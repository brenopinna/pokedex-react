import React, { useState } from 'react';
import axios from 'axios';

import { Container } from './styles';
import SinglePokemon from './SinglePokemon/index'

const Pokemons = () => {
   const [pokeId, setPokeId] = useState(1);
   const [pokemons, setPokemons] = useState([]);
   const numberOfPokemons = 900;

   if(pokeId <= numberOfPokemons){
      axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
      .then(({ data }) => {
         const { id, name, sprites, stats, types } = data;
         const newPokemons = [...pokemons, {
            name: name,
            id: id,
            front: sprites['front_default'],
            back: sprites['back_default'],
            stats: stats.map(stat => (
               {
                  name: stat.stat.name,
                  value: stat['base_stat']
               })),
            types: types.map(type => type.type.name) 
         }]
         setPokemons(newPokemons);
         setPokeId(pokeId + 1);
      })
   }
   
   return (
      <Container>
         {pokemons.map(pokemon => <SinglePokemon key={pokemon.id} info={pokemon} />)}
      </Container>
   );
}

export default Pokemons;