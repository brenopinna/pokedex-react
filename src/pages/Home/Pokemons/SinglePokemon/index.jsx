import React from 'react';

import { useNavigate } from 'react-router-dom';

import { Container, Image, Name} from './styles';
import PokemonTypes from '../../../../components/PokemonTypes/index'

const SinglePokemon = ({ info  }) => {
   const navigate = useNavigate();

   const { name, types, front } = info;

   const handleClick = () => {
      localStorage.setItem('pokemon', JSON.stringify(info));
      navigate(`/${name}`);
   }

   return (
      <Container onClick={handleClick}>
         <Image src={front} alt={name}/>
         <Name>{name}</Name>
         <PokemonTypes types={types}/>
      </Container>
   );
}

export default SinglePokemon;