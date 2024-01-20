import styled from 'styled-components';

const FormContainer = styled.form`
  position: relative;
  display: flex;
  gap: 159px;
  flex-direction: column;
  justify-content: center;

  width: 360px;
  margin: 0 auto;
  padding-top: 90px;
`;

const RadioBtnContainer = styled.div`
  display: flex;
  width: 360px;
  height: 32px;
  justify-content: center;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid var(--primary-100, #5fcb39);
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const IndexInfoText = styled.div`
  position: absolute;
  top: 253px;
  z-index: -1;
`;

export { FormContainer, RadioBtnContainer, InputContainer, IndexInfoText };
