import { AfterTitleText } from 'components/reuseComponent/AfterTitleText/AfterTitleText';
import { Title } from 'components/reuseComponent/Title/Title';
import girl from '../../assets/girl.png';
import React from 'react';
import {
  GroupImg,
  GroupItems,
  GroupItemsText,
  OptionText,
} from './PhysicalExercise.styled';
import { P } from 'components/Goal/Goal.styled';

const PhysicalExercise = () => {
  return (
    <div>
      <Title title={'Physical exercise'} />
      <AfterTitleText
        text={`Physical exercise means a lot for a woman who \nwants to lose kilos and works at the office`}
      />

      <P>How active are you during the day?</P>
      <GroupItems>
        <GroupImg src={girl} alt="girl" />
        <GroupItemsText>
          <OptionText>Hardly at all</OptionText>
          <OptionText>Fitness 1-2 times a week</OptionText>
          <OptionText>Fitness 3-5 times a week</OptionText>
          <OptionText>Fitness 5-7 times a week</OptionText>
        </GroupItemsText>
      </GroupItems>
    </div>
  );
};

export default PhysicalExercise;
