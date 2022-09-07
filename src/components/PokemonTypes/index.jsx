import React from 'react';

import { Container, Type } from './styles';

const PokemonTypes = ({ types }) => {
   return (
      <Container>
         {types.map(type => <Type key={type}>{type}</Type>)}
      </Container>
   );
}

export default PokemonTypes;