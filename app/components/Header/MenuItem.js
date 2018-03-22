import styled from 'styled-components';

export default styled.li`
    float: left;
    display: inline-block;
    padding: 5px 8px;
    border-radius: 2px;
    line-height: 18px;
    font-size: 9pt;
    cursor: pointer;
    margin-top: 6px;
    
    & > a, svg {
      color: #ccc;
    }
    
    &:hover {
        background-color: #fff;
        & > a, svg {
            color: #53a245;
        }
    }
`;
