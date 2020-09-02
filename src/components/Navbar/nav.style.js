import styled from 'styled-components';

export const Nav = styled.div`
  background-color: white;
  display: grid;
  grid-template-columns: 1fr auto 1fr; 
  font-size: 12px;
  text-transform: uppercase;
  height: 4em; 
  width: 99%;
  
  /* fix navbar to top */
  overflow: hidden;
  z-index: 21; 
  padding-bottom: 2em;
  position: fixed;
  top: 0; 

  @media (max-width: 950px) {
    grid-template-columns: 1fr 1fr; 
    margin: auto;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    color: #1e90ff;
    text-decoration: none;
    transform: translateY(-3px);
  }

  .title {
    padding-bottom: 1em;

    &:hover {
      color: #1e90ff;
      text-decoration: none;
    }
  }

  .links {
    padding-top: 1em;
    grid-column: 2/3; 
    
    @media (max-width: 950px) {
      grid-column: 3/3;
  
    }

    @media (max-width: 499px) {
      display: none;
    }
  }

  .icons {
    padding-top: 1em;
    grid-column: 3/3;
    justify-self: end;
    
    @media (max-width: 950px) {
      display: none; 
    }
  }

  ul {
    padding: 5px; 
    align-content: center;
    font-size: 16px; 

    a {
      color: inherit; 
      text-decoration: none; 
    }
    
  li {
    display: inline-block;
    margin-right: 20px; 
    transition: opacity 0.5s ease; 
    cursor: pointer; 
    
    :last-of-type {
      margin-right: 0px; 
    }
  }
}
`
