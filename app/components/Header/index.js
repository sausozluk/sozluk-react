import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { ImmutableLoadingBar as LoadingBar } from 'react-redux-loading-bar';

import NavBar from './NavBar';
import Logo from './Logo';
import Menu from './Menu';
import MenuItem from './MenuItem';
import MenuItemLink from './MenuItemLink';
import MenuItemLinkText from './MenuItemLinkText';
import DropdownMenu from './DropdownMenu';
import Search from '../Search';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <LoadingBar style={{ backgroundColor: '#bdbdbd', height: '2px', zIndex: '999' }} showFastActions />
        <NavBar>
          <Logo to={''}>saü sözlük</Logo>
          <Menu left>
            <MenuItem>
              <MenuItemLink to={'bugun'}>
                <FontAwesomeIcon icon={'bolt'} />
                <MenuItemLinkText>bugün</MenuItemLinkText>
              </MenuItemLink>
            </MenuItem>
          </Menu>
          <Search />
          <Menu>
            <MenuItem>
              <MenuItemLink to={'guguluk'}>
                <FontAwesomeIcon icon={'user'} />
                <MenuItemLinkText>ben</MenuItemLinkText>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink to={'mesaj'}>
                <FontAwesomeIcon icon={'inbox'} />
                <MenuItemLinkText>mesaj</MenuItemLinkText>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <DropdownMenu />
            </MenuItem>
          </Menu>
        </NavBar>
      </div>
    );
  }
}

export default Header;
