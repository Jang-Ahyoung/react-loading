import React from 'react';
import styled, { keyframes } from 'styled-components';

const Spinning = ({ width, height, border, color, bgColor, isLoading = 'true'}) => {
  if (!isLoading) return;
  return (
    <SpinContainer>
      <Spin width={width} height={height} border={border} color={color} bgColor={bgColor}></Spin>
    </SpinContainer>
  );
};
export default React.memo(Spinning);

const spin = keyframes`
  to{
    transform: rotate(360deg);
  }
`;

const SpinContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spin = styled.section`
  width: ${(props) => props.width || `1.5em`};
  height: ${(props) => props.height || '1.5em'};
  border-radius: 50%;
  border: ${(props) => props.border || '0.2rem'} solid ${(props) => props.color || 'rgb(113, 187, 255)'};
  border-top: ${(props) => props.border || '0.2rem'} solid ${(props) => props.bgColor || 'rgba(197, 197, 197, 0.527)'};
  animation: ${spin} 2s linear infinite;
`;
