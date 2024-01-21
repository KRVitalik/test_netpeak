import { Title } from 'components/reuseComponent/Title/Title';
import { Icon } from 'components/ui/Icon';
import {
  ItemContainer,
  ItemContentLink,
  ItemLink,
  ItemText,
  P,
} from './Goal.styled';
import { AfterTitleText } from 'components/reuseComponent/AfterTitleText/AfterTitleText';

const Goal = () => {
  return (
    <div>
      <Title title={'The Goal'} />
      <AfterTitleText
        text={`Focus on the health benefits you need.\nBalanced nutrition will let you achieve them`}
      />
      <P>What are your goals?</P>
      <ItemContainer>
        <ItemContentLink>
          <ItemLink to={'/measure'}>
            <ItemText>Lose Weight</ItemText>
            <Icon iconId="group-1" h={172} w={'100%'} />
          </ItemLink>
        </ItemContentLink>
        <ItemContentLink>
          <ItemLink to={'/measure'}>
            <ItemText>Gain Muscle</ItemText>
            <Icon iconId="group-2" h={172} w={'100%'} />
          </ItemLink>
        </ItemContentLink>
        <ItemContentLink>
          <ItemLink to={'/measure'}>
            <ItemText>Develop healthy habits</ItemText>
            <Icon iconId="group-3" h={172} w={'100%'} />
          </ItemLink>
        </ItemContentLink>
        <ItemContentLink>
          <ItemLink to={'/measure'}>
            <ItemText>Develop healthy habits</ItemText>
            <Icon iconId="group-4" h={172} w={'100%'} />
          </ItemLink>
        </ItemContentLink>
      </ItemContainer>
    </div>
  );
};

export default Goal;
