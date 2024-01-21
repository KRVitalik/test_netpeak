import { AfterTitleText } from 'components/reuseComponent/AfterTitleText/AfterTitleText';
import { Title } from 'components/reuseComponent/Title/Title';
import {
  GroupItems,
  GroupItemsText,
  OptionText,
} from './PhysicalExercise.styled';
import { P } from 'components/pages/Goal/Goal.styled';
import { Icon } from 'components/ui/Icon';
import { useEffect, useState } from 'react';

const PhysicalExercise = () => {
  const [value, setValue] = useState('');

  const handleClick = e => {
    setValue(e);
  };

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <>
      <Title title={'Physical exercise'} />
      <AfterTitleText
        text={`Physical exercise means a lot for a woman who \nwants to lose kilos and works at the office`}
      />
      <P>How active are you during the day?</P>
      <GroupItems>
        <Icon iconId={'Group_28'} h={276} w={172} />
        <GroupItemsText>
          <OptionText onClick={e => handleClick('Hardly at all')}>
            Hardly at all
          </OptionText>
          <OptionText onClick={e => handleClick('Fitness 1-2 times a week')}>
            Fitness 1-2 times a week
          </OptionText>
          <OptionText onClick={e => handleClick('Fitness 3-5 times a week')}>
            Fitness 3-5 times a week
          </OptionText>
          <OptionText onClick={e => handleClick('Fitness 5-7 times a week')}>
            Fitness 5-7 times a week
          </OptionText>
        </GroupItemsText>
      </GroupItems>
    </>
  );
};

export default PhysicalExercise;
