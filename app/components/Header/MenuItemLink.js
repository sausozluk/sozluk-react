import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default styled(Link)`
    float: left;
    display: inline-block;
    padding: 5px 8px;
    border-radius: 2px;
    line-height: 18px;
    font-size: 9pt;
    cursor: pointer;
    margin-top: 6px;
    color: #ccc;
    
    &:hover {
        background-color: #fff;
        svg, span {
            color: #53a245;
        }
    }
`;
