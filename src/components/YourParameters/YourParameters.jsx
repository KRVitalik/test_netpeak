import { Button } from 'components/ui/Button/Button';
import React, { useState } from 'react';
import {
  FormContainer,
  IndexInfoText,
  InputContainer,
  BtnContainer,
  ButtonStyleImperial,
  ButtonStyleMetric,
  InputPosition,
} from './YourParameters.styled';
import { Input } from 'components/ui/Input/Input';
import { Link } from 'react-router-dom';
import { Title } from 'components/reuseComponent/Title/Title';
import { AfterTitleText } from 'components/reuseComponent/AfterTitleText/AfterTitleText';

const YourParameters = () => {
  const [imperial, setImperial] = useState(false);
  const [metric, setMetric] = useState(false);
  const [parameters, setParameters] = useState({});

  const handleImperial = e => {
    console.log(e.target.name);
    setImperial(!imperial);
    setMetric(false);
    setParameters({});
  };

  const handleMetric = e => {
    console.log(e.target.name);
    setMetric(!metric);
    setImperial(false);
    setParameters({});
  };

  const handleChange = e => {
    setParameters({
      [e.target.name]: e.target.value,
    });
  };
  console.log(parameters);

  return (
    <FormContainer>
      <InputContainer>
        <BtnContainer>
          <ButtonStyleImperial
            type="button"
            name="imperial"
            onClick={e => handleImperial(e)}
            style={
              imperial ? { backgroundColor: 'rgba(95, 203, 57, 0.2)' } : {}
            }
          >
            Imperial
          </ButtonStyleImperial>
          <ButtonStyleMetric
            type="button"
            name="metric"
            onClick={e => handleMetric(e)}
            style={metric ? { backgroundColor: 'rgba(95, 203, 57, 0.2)' } : {}}
          >
            Metric
          </ButtonStyleMetric>
        </BtnContainer>
        {(imperial || metric) && (
          <InputPosition>
            <Input
              name={'height'}
              placeHolder={'Height(ft)'}
              action={e => handleChange(e)}
              value={''}
            />
            <Input
              name={'weight'}
              placeHolder={'Current Weight(ft)'}
              action={e => handleChange(e)}
              value={''}
            />
          </InputPosition>
        )}
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
