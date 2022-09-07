import React from 'react';

import { Image, Container } from './styles';

const PokemonsImages = ({ front, back }) => {
   return (
      <Container>
         <Image src={front}/>
         <Image src={back}/>
      </Container>
   );
}

export default PokemonsImages;