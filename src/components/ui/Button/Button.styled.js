import styled from 'styled-components';

const ButtonStyle = styled.button`
  display: flex;
  width: 360px;
  height: 50px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  opacity: 0.3;
  background: var(--primary-100, #5fcb39);
  border: 0;
  outline: 0;

  flex-direction: column;

  color: var(--General-White, #fff);
  text-align: center;

  font-family: Inter;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.44; /* 144.444% */
  letter-spacing: 0.2px;

  margin: 0 auto;

  &:active,
  &:hover {
    opacity: 1;
  }
`;

export { ButtonStyle };
