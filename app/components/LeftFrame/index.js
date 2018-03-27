import React from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';
import { Link } from 'react-router-dom';

const LeftFrameWrapper = styled.div`
  ${(props) => props.notLeft ? '' : 'border-right: 1px solid #333;'};
  position: ${(props) => props.notLeft ? 'relative' : 'fixed'};
  z-index: ${(props) => props.notLeft ? '0' : '2'};
  
  @media screen and (max-width: 850px) {
    display: ${(props) => props.notLeft ? 'block' : 'none'};
  }
`;

const StairsWrapper = styled.div`
  display: block;
`;

const TitleWrapper = styled.span`
  display: block;
  font-size: 12pt;
  color: #53a245;
  padding-left: 12px;
  margin: 20px 0 8px;
`;

const IconWrapper = styled.span`
  cursor: pointer;
  margin-left: 8px;
`;

const SubTitleWrapper = styled.span`
  display: block;
  font-size: 9pt;
  color: #999;
  padding-left: 12px;
  margin-bottom: 24px;
`;

const List = styled.ul`
  display: block;
  border-top: 1px solid #333;
  padding: 0;
`;

const ListItem = styled.li`
  display: block;
`;

const ListItemContent = styled(Link)`
  display: block;
  text-decoration: none;
  border-bottom: 1px solid #333;
  padding: 5px 0 5px 12px;
  color: #bdbdbd;
  
  &:hover {
    background-color: rgba(255,255,255,.3);
  }
`;

const ListItemCount = styled.span`
  padding: 2px 4px;
  color: #999;
  border-radius: 4px;
  font-size: 8pt;
  float: right;
  margin-right: 6px;
`;

const ListItemText = styled.span`
  display: block;
  line-height: 18px;
  text-transform: lowercase;
  font-size: .7em;
  padding-right: 5px;
`;

class LeftFrame extends React.PureComponent {
  constructor() {
    super();

    const arr = [];
    for (let i = 0; i < 100; i += 1) {
      arr.push(i);
    }


    this.topics = arr.map((id) => (
      <ListItem key={id}>
        <ListItemContent to={'/serdivan-ucuz-cay-veritabani--390'}>
          <ListItemCount>
            1
          </ListItemCount>
          <ListItemText>
            serdivan ucuz çay veritabanı
          </ListItemText>
        </ListItemContent>
      </ListItem>
    ));
  }

  render() {
    const topics = this.topics;

    const notLeft = this.props.notLeft || false;

    const topicWrapper = !notLeft ? (
      <Scrollbars style={{ width: 240, height: 720 }}>
        <List>
          { topics }
        </List>
      </Scrollbars>
    ) : (
      <List>
        { topics }
      </List>
    );

    return (
      <LeftFrameWrapper notLeft={notLeft}>
        <StairsWrapper>
          <TitleWrapper>
            bugün
            <IconWrapper>
              <FontAwesomeIcon icon={'sync'} />
            </IconWrapper>
          </TitleWrapper>
          <SubTitleWrapper>
            no başlık, 2 entry
          </SubTitleWrapper>
          { topicWrapper}
        </StairsWrapper>
      </LeftFrameWrapper>
    );
  }
}

LeftFrame.propTypes = {
  notLeft: PropTypes.bool,
};

export default LeftFrame;
