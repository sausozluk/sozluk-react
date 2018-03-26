import styled from 'styled-components';

export default styled.li`
    float: left;
    display: inline-block;
    padding: 5px 8px;
    border-radius: 2px;
    line-height: 18px;
    font-size: 8pt;
    cursor: pointer;
    margin-top: 6px;
    
    & > a {
      font-size: 9pt;
    }
    
    & > a, svg {
      color: #ccc;
      cursor: pointer;
    }
    
    &:hover {
        background-color: #fff;
        & > a, svg {
            color: #53a245;
        }
    }
`;
