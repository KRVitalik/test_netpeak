import styled from 'styled-components';

const InputStyle = styled.input`
  width: 360px;
  height: 64px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid var(--Separator-Light, #e1e1e1);
  background: var(--Background-Light, #fff);

  color: var(--General-Black, #2d3436);

  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.71; /* 171.429% */
  letter-spacing: 0.25px;
  padding: 20px 15px;

  &::placeholder {
    color: var(--General-Black, #2d3436);
  }
`;

export { InputStyle };
