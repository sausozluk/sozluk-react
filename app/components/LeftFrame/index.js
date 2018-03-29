import React from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import reducer from '../../reducers/leftFrameReducer';
import saga from '../../sagas/leftFrameSaga';
import { makeSelectLeftFrame } from '../../selectors/leftFrameSelectors';
import More from './More';
import { getLeftFrame } from '../../actions/leftFrameActions';

const LeftFrameWrapper = styled.div`
  ${(props) => props.notLeft ? '' : 'border-right: 1px solid #333;'};
  position: ${(props) => props.notLeft ? 'relative' : 'fixed'};
  z-index: ${(props) => props.notLeft ? '0' : '2'};
  height: 100%;
  
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
  margin-right: 10px;
`;

const ListItemText = styled.span`
  display: block;
  line-height: 18px;
  text-transform: lowercase;
  font-size: .7em;
  padding-right: 5px;
`;

class LeftFrame extends React.PureComponent {
  static renderTopics(topics) {
    return topics.map((topic) => (
      <ListItem key={topic.id}>
        <ListItemContent to={`/${topic.slug}--${topic.id}`}>
          {topic.count > 0 &&
          <ListItemCount>
            {`${topic.count}`}
          </ListItemCount>
          }
          <ListItemText>
            {`${topic.title}`}
          </ListItemText>
        </ListItemContent>
      </ListItem>
    ));
  }

  getMore(topics) {
    const lastTopic = topics[topics.length - 1];
    const lastTopicDate = lastTopic.updated_at;

    this.props.fetchLeftFrame(lastTopicDate);
  }

  render() {
    const leftFrame = this.props.leftFrame;
    const topics = leftFrame ? leftFrame.topics : [];
    const topicList = LeftFrame.renderTopics(topics);
    const notLeft = this.props.notLeft || false;
    const entryCount = leftFrame.entries_count ? leftFrame.entries_count : 'no';
    const topicCount = leftFrame.topics_count ? leftFrame.topics_count : 'no';

    const stairs = (
      <StairsWrapper>
        <TitleWrapper>
          bugün
          <IconWrapper>
            <FontAwesomeIcon icon={'sync'} />
          </IconWrapper>
        </TitleWrapper>
        <SubTitleWrapper>
          {`${topicCount}`} başlık, {`${entryCount}`} entry
        </SubTitleWrapper>
        <List>
          { topicList }
        </List>
        <More onClick={() => this.getMore(topics)}>
          <FontAwesomeIcon icon={'chevron-circle-down'} style={{'width': '2em'}} />
          biraz daha
        </More>
      </StairsWrapper>
    );

    const wrapper = !notLeft ? (
      <Scrollbars style={{ width: 240, height: '100%' }} autoHide>
        { stairs }
      </Scrollbars>
    ) : (stairs);

    return (
      <LeftFrameWrapper notLeft={notLeft}>
        { wrapper }
      </LeftFrameWrapper>
    );
  }
}

LeftFrame.propTypes = {
  leftFrame: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  notLeft: PropTypes.bool,
  fetchLeftFrame: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    fetchLeftFrame: (timestamp) => dispatch(getLeftFrame(timestamp)),
  };
}

const mapStateToProps = createStructuredSelector({
  leftFrame: makeSelectLeftFrame(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'leftFrame', reducer });
const withSaga = injectSaga({ key: 'leftFrame', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LeftFrame);
