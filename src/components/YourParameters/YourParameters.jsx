import { Button } from 'components/ui/Button/Button';
import React from 'react';
import { FormContainer, RadioBtnContainer } from './YourParameters.styled';

const YourParameters = () => {
  return (
    <FormContainer>
      <RadioBtnContainer>
        <div>
          <input
            type="radio"
            id="imperial"
            name="param"
            value="imperial"
            checked
          />
          <label for="imperial">Imperial</label>
        </div>
        <div>
          <input type="radio" id="metric" name="param" value="metric" />
          <label for="metric">Metric</label>
        </div>
      </RadioBtnContainer>
      <input type="text" />
      <input type="text" />
      <Button label={'Continue'} />
    </FormContainer>
  );
};

export default YourParameters;
