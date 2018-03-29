import styled from 'styled-components';

export default styled.ul`
  display: inline-block;
  float: left;
  border-radius: 2px;
  font-size: 9pt;
  cursor: pointer;
  margin-top: 6px;
  color: #ccc;
  padding: 0;
  
  &:hover {
      background-color: #fff;
      svg {
          color: #53a245;
      }
  }

  > * {
    button {
      padding: 5px 8px;
      line-height: 18px;
    }
  
    .dd-menu-items {
      right: -8px !important;
      top: 24px;
      
      ul {
        background: #333;
        border-radius: 3px;
        border: 1px solid #fff;
        width: 108px;
        
        li {
          &:hover {
            background-color: rgba(255,255,255,.3) !important;
          }
          
          a {
            line-height: 30px;
            display: block;
            float: none;
            color: #ccc;
            font-size: 10pt;
            text-decoration: none;
            cursor: pointer;
            padding: 0 16px;
            text-align: left !important;
          }
        }
      }
    }
  }
`;
