import React from 'react';

import { Container, Logo } from './styles';
import pokeLogo from '../../assets/pokedex-logo.png'

const Header = () => {
   return (
      <Container>
         <Logo src={pokeLogo} alt="Logo Pokémon" />
      </Container>
   );
}

export default Header;