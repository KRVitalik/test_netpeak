import styled from 'styled-components';

const FormContainer = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 360px;
  margin: 0 auto;
  padding-top: 90px;
`;

const BtnContainer = styled.div`
  display: flex;
  width: 360px;
  height: 32px;
  justify-content: center;
  align-items: flex-start;
`;

const ButtonStyleImperial = styled.button`
  display: flex;
  width: 50%;
  height: 32px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: var(--primary-100, #5fcb39);
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  align-items: center;
  background-color: transparent;
  padding: 0;
  outline: 0;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border: 1px solid var(--primary-100, #5fcb39);
  border-right: 0;
`;

const ButtonStyleMetric = styled.button`
  display: flex;
  width: 50%;
  height: 32px;
  flex-direction: column;
  justify-content: center;
  color: var(--primary-100, #5fcb39);
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  align-items: center;

  padding: 0;
  background-color: transparent;
  outline: 0;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border: 1px solid var(--primary-100, #5fcb39);
  border-left: 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const IndexInfoText = styled.div`
  margin-top: 131px;
  margin-bottom: 116px;
`;

const InputPosition = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 10px;
  top: 132px;
`;

export {
  FormContainer,
  BtnContainer,
  InputContainer,
  IndexInfoText,
  ButtonStyleMetric,
  ButtonStyleImperial,
  InputPosition,
};
