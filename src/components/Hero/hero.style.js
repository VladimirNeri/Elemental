import styled from 'styled-components';

export const HeroStyl = styled.div`
  margin: auto; 
  width: 70%; 
  padding-bottom: 10px; 
  padding-top: 3px; 

  @media (max-width: 450px) {
    width: 100%
  }

   /* Should be on the markup */
  img {
   width: 900px; 
   height: auto; 
  }
`;
