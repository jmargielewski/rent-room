import styled from 'styled-components';

const SpinnerWrap = styled.div`
  height: 40px;
  position: relative;
  top: 10vh;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Spinner = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  border-radius: 50%;
  border: 3px solid rgba(247, 120, 107, 1);
  border-top-color: rgba(3, 79, 132, 1);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-bottom: transparent;
  width: 40px;
  height: inherit;
  animation: rotate 0.5s linear infinite;
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export { SpinnerWrap, Spinner };
