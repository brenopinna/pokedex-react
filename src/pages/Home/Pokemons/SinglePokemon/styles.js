import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 10px;
   padding: 10px;
   cursor: pointer;
`;

export const Image = styled.img`
   width: 75%;
   border-radius: 50%;
   border: 2px solid rgb(150,150,150);
   background-color: rgb(200,200,200);
`;

export const Name = styled.p`
   text-transform: capitalize;
   font-weight: 500;
   font-size: 1.6rem;
`;