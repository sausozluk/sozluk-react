import styled from 'styled-components';

export default styled.div`
  padding: 20px;
  width: calc(100% - 280px);
  margin-left: 240px;
  
  @media screen and (max-width: 850px) {
    width: calc(100% - 40px);
    margin-left: inherit;
  }
`;