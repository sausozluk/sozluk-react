import React from 'react';
import DDMenu from 'react-dd-menu';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import DropdownMenuWrapper from './DropdownMenuWrapper';

class DropdownMenu extends React.Component {
  constructor() {
    super();
    this.state = { isMenuOpen: false };
    this.toggle = this.toggle.bind(this);
    this.close = this.close.bind(this);
    this.items = [
      { title: 'admin', link: 'admin', permission: 'admin' },
      { title: 'moderasyon', link: 'mon', permission: 'mod' },
      { title: 'ayarlar', link: 'ayarlar', permission: 'user' },
      { title: 'kimler ayık', link: 'online', permission: 'user' },
      { title: 'neler oluyor', link: 'aktiviteler', permission: 'user' },
      { title: 'istatistikler', link: 'istatistik', permission: 'user' },
      { title: 'olan biten', link: 'olan-biten', permission: 'user' },
      { title: 'çıkış', link: 'cikis', permission: 'user' },
    ];
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
          {
            this.items.map((item) => (
              <li key={item.title}>
                <Link className={'dd-item-ignore'} to={`${item.link}`}>{`${item.title}`}</Link>
              </li>
            ))
          }
        </DDMenu>
      </DropdownMenuWrapper>
    );
  }
}

export default DropdownMenu;
