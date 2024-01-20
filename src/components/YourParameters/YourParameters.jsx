import { Button } from 'components/ui/Button/Button';
import React from 'react';
import {
  FormContainer,
  IndexInfoText,
  InputContainer,
  BtnContainer,
  ButtonStyleImperial,
  ButtonStyleMetric,
} from './YourParameters.styled';
import { Input } from 'components/ui/Input/Input';
import { Link } from 'react-router-dom';
import { Title } from 'components/reuseComponent/Title/Title';
import { AfterTitleText } from 'components/reuseComponent/AfterTitleText/AfterTitleText';

const YourParameters = () => {
  return (
    <FormContainer>
      <InputContainer>
        <BtnContainer>
          <ButtonStyleImperial type="button" name="imperial">
            Imperial
          </ButtonStyleImperial>
          <ButtonStyleMetric type="button" name="metric">
            Metric
          </ButtonStyleMetric>
        </BtnContainer>
        <Input placeHolder={'Height(ft)'} />
        <Input placeHolder={'Current Weight(ft)'} />
      </InputContainer>
      <IndexInfoText>
        <Title
          title={'Measure Yourself'}
          customContainerStyles={{ marginTop: 0 }}
        />
        <AfterTitleText text={`What are your height and body weight? `} />
      </IndexInfoText>
      <Link to={'/destructive-behaviors'}>
        <Button label={'Continue'} />
      </Link>
    </FormContainer>
  );
};

export default YourParameters;
