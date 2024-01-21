import { Title } from 'components/reuseComponent/Title/Title';
import { Icon } from 'components/ui/Icon';
import { ItemContainer, ItemContentLink, ItemLink, P } from './Goal.styled';
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
            <p>Lose Weight</p>
            <Icon iconId="group-1" h={172} />
          </ItemLink>
        </ItemContentLink>
        <ItemContentLink>
          <ItemLink to={'/measure'}>
            <p>Gain Muscle</p>
            <Icon iconId="group-2" h={172} />
          </ItemLink>
        </ItemContentLink>
        <ItemContentLink>
          <ItemLink to={'/measure'}>
            <p>Develop healthy habits</p>
            <Icon iconId="group-3" h={172} />
          </ItemLink>
        </ItemContentLink>
        <ItemContentLink>
          <ItemLink to={'/measure'}>
            <p>Develop healthy habits</p>
            <Icon iconId="group-4" h={172} />
          </ItemLink>
        </ItemContentLink>
      </ItemContainer>
    </div>
  );
};

export default Goal;
