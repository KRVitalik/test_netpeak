import { Title } from 'components/reuseComponent/Title/Title';
import { Icon } from 'components/ui/Icon';
import React from 'react';
import { ItemContainer, ItemContentLink, P } from './Goal.styled';
import { AfterTitleText } from 'components/reuseComponent/AfterTitleText/AfterTitleText';
import { Link } from 'react-router-dom';

const Goal = () => {
  return (
    <div>
      <Title title={'The Goal'} />
      <AfterTitleText
        text={`Focus on the health benefits you need.\nBalanced nutrition will let you achieve them`}
      />

      <P>What are your goals?</P>
      <ItemContainer>
        <Link to={'/measure'}>
          <ItemContentLink>
            <p>Lose Weight</p>
            <Icon iconId="group-1" h={172} />
          </ItemContentLink>
        </Link>
        <Link to={'/measure'}>
          <ItemContentLink>
            <p>Gain Muscle</p>
            <Icon iconId="group-2" h={172} />
          </ItemContentLink>
        </Link>
        <Link to={'/measure'}>
          <ItemContentLink>
            <p>Develop healthy habits</p>
            <Icon iconId="group-3" h={172} />
          </ItemContentLink>
        </Link>
        <Link to={'/measure'}>
          <ItemContentLink>
            <p>Develop healthy habits</p>
            <Icon iconId="group-4" h={172} />
          </ItemContentLink>
        </Link>
      </ItemContainer>
    </div>
  );
};

export default Goal;
