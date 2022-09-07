import React from 'react';

import { Container, Type } from './styles';

const PokemonStats = ({ stats }) => {
   return (
      <Container>
         {stats.map(stat => <Type>{stat.name} - {stat.value}</Type>)}
      </Container>
   );
}

export default PokemonStats;