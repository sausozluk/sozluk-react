import styled from 'styled-components';

export default styled.ul`
    padding: 0 0 0 10px;
    float: ${(props) => props.left ? 'left' : 'right'};
    margin: 0 10px 0 0;
    display: ${(props) => props.left ? 'none' : 'block'};
    
    @media screen and (max-width: 850px) {
      display: block;
    }
`;
