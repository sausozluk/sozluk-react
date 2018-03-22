import React from 'react';
import styled from 'styled-components';
import DDMenu from 'react-dd-menu';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const DropdownMenuWrapper = styled.div`
  > * {
    .dd-menu-items {
      right: -16px !important;
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

class DropdownMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      isMenuOpen: false,
    };
    this.toggle = this.toggle.bind(this);
    this.close = this.close.bind(this);
  }

  toggle() {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }

  close() {
    this.setState({ isMenuOpen: false });
  }

  render() {
    const menuOptions = {
      isOpen: this.state.isMenuOpen,
      close: this.close,
      toggle: <button type="button" onClick={this.toggle}><FontAwesomeIcon icon={'ellipsis-h'} /></button>,
      inverse: false,
      align: 'right',
      animate: false,
    };

    return (
      <DropdownMenuWrapper>
        <DDMenu {...menuOptions}>
          <li>
            <Link className={'dd-item-ignore'} to="ayarlar">ayarlar</Link>
          </li>
          <li>
            <Link className={'dd-item-ignore'} to="online">kimler ayık</Link>
          </li>
          <li>
            <Link className={'dd-item-ignore'} to="aktiviteler">neler oluyor</Link>
          </li>
          <li>
            <Link className={'dd-item-ignore'} to="istatistik">istatistikler</Link>
          </li>
          <li>
            <Link className={'dd-item-ignore'} to="olan-biten">olan biten</Link>
          </li>
          <li>
            <Link className={'dd-item-ignore'} to="cikis">çıkış</Link>
          </li>
        </DDMenu>
      </DropdownMenuWrapper>
    );
  }
}

export default DropdownMenu;
