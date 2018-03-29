import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { ImmutableLoadingBar as LoadingBar } from 'react-redux-loading-bar';

import NavBar from './NavBar';
import Logo from './Logo';
import Menu from './Menu';
import MenuItemLink from './MenuItemLink';
import MenuItemLinkWrapper from './MenuItemLinkWrapper';
import MenuItemLinkText from './MenuItemLinkText';
import DropdownMenu from './DropdownMenu';
import Search from '../Search';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const loadingBarStyle = { backgroundColor: '#bdbdbd', height: '2px', zIndex: '999' };

    return (
      <div>
        <LoadingBar style={loadingBarStyle} showFastActions />
        <NavBar>
          <Logo to={''}>saü sözlük</Logo>
          <Menu left>
            <MenuItemLink to={'bugun'}>
              <MenuItemLinkWrapper>
                <FontAwesomeIcon icon={'bolt'} />
                <MenuItemLinkText>bugün</MenuItemLinkText>
              </MenuItemLinkWrapper>
            </MenuItemLink>
          </Menu>
          <Search />
          <Menu>
            <MenuItemLink to={'guguluk'}>
              <MenuItemLinkWrapper>
                <FontAwesomeIcon icon={'user'} />
                <MenuItemLinkText>ben</MenuItemLinkText>
              </MenuItemLinkWrapper>
            </MenuItemLink>
            <MenuItemLink to={'mesaj'}>
              <MenuItemLinkWrapper>
                <FontAwesomeIcon icon={'inbox'} />
                <MenuItemLinkText>mesaj</MenuItemLinkText>
              </MenuItemLinkWrapper>
            </MenuItemLink>
            <DropdownMenu />
          </Menu>
        </NavBar>
      </div>
    );
  }
}

export default Header;
