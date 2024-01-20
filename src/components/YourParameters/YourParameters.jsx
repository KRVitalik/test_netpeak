import { Button } from 'components/ui/Button/Button';
import React from 'react';
import {
  FormContainer,
  InputContainer,
  RadioBtnContainer,
} from './YourParameters.styled';
import { Input } from 'components/ui/Input/Input';
import { Link } from 'react-router-dom';

const YourParameters = () => {
  return (
    <FormContainer>
      <InputContainer>
        <RadioBtnContainer>
          <div>
            <input
              type="radio"
              id="imperial"
              name="param"
              value="imperial"
              // checked
            />
            <label htmlFor="imperial">Imperial</label>
          </div>
          <div>
            <input type="radio" id="metric" name="param" value="metric" />
            <label htmlFor="metric">Metric</label>
          </div>
        </RadioBtnContainer>
        <Input placeHolder={'Height(ft)'} />
        <Input placeHolder={'Current Weight(ft)'} />
      </InputContainer>
      <Link to={'/destructive-behaviors'}>
        <Button label={'Continue'} />
      </Link>
    </FormContainer>
  );
};

export default YourParameters;
