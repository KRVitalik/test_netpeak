import { AfterTitleText } from 'components/reuseComponent/AfterTitleText/AfterTitleText';
import { Title } from 'components/reuseComponent/Title/Title';
import {
  GroupItems,
  GroupItemsText,
  OptionText,
} from './PhysicalExercise.styled';
import { P } from 'components/pages/Goal/Goal.styled';
import { Icon } from 'components/ui/Icon';

const PhysicalExercise = () => {
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
          <OptionText>Hardly at all</OptionText>
          <OptionText>Fitness 1-2 times a week</OptionText>
          <OptionText>Fitness 3-5 times a week</OptionText>
          <OptionText>Fitness 5-7 times a week</OptionText>
        </GroupItemsText>
      </GroupItems>
    </>
  );
};

export default PhysicalExercise;
