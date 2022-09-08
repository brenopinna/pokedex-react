import styled from "styled-components";

export const Container = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   justify-content: center;
   gap: 5px 10px;

   @media screen and (max-width: 768px){
      grid-template-columns: repeat(2, 0.4fr);
   }

   @media screen and (max-width: 600px){
      grid-template-columns: 0.7fr;
   }

   @media screen and (max-width: 400px){
      grid-template-columns: 1fr;
   }
`;