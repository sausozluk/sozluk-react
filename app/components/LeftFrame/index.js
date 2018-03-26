import React from 'react';
import styled from 'styled-components';

const LeftFrameWrapper = styled.div`
  float: left;
  width: 240px;
  border-right: 1px solid #333;
  height: calc(100% - 40px);
  position: fixed;
  z-index: 2;
  
  @media screen and (max-width: 850px) {
    visibility: hidden;
    display: none;
  }
`;

function LeftFrame() {
  return (
    <LeftFrameWrapper />
  );
}

export default LeftFrame;
