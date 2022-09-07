import React, { useState, useEffect } from 'react';

import { Container, PokemonName } from './styles'
import PokemonImages from './PokemonImages/index'
import PokemonTypes from '../../components/PokemonTypes/index'
import PokemonStats from './PokemonStats/index';

const Details = () => {
   const pokemon = JSON.parse(localStorage.getItem('pokemon'));

   return (
      <Container>
         <PokemonName>
            <span>{pokemon.name} - {pokemon.id}</span>
            <PokemonTypes types={pokemon.types}/>
         </PokemonName>
         <PokemonImages front={pokemon.front} back={pokemon.back}/>
         <PokemonStats stats={pokemon.stats}/>
      </Container>
   );
}

export default Details;