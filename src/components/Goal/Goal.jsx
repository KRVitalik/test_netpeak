import { Title } from 'components/Title/Title';
import { Icon } from 'components/ui/Icon';
import React from 'react';
import {
  ItemContainer,
  ItemContentLink,
  P,
  PostTitleText,
} from './Goal.styled';

const Goal = () => {
  return (
    <div>
      <Title title={'The Goal'} />
      <PostTitleText>
        Focus on the health benefits you need.
        <br />
        Balanced nutrition will let you achieve them
      </PostTitleText>
      <P>What are your goals?</P>
      <ItemContainer>
        <ItemContentLink>
          <p>Lose Weight</p>
          <Icon iconId="group-1" h={172} />
        </ItemContentLink>
        <ItemContentLink>
          <p>Gain Muscle</p>
          <Icon iconId="group-2" h={172} />
        </ItemContentLink>
        <ItemContentLink>
          <p>Develop healthy habits</p>
          <Icon iconId="group-3" h={172} />
        </ItemContentLink>
        <ItemContentLink>
          <p>Develop healthy habits</p>
          <Icon iconId="group-4" h={172} />
        </ItemContentLink>
      </ItemContainer>
    </div>
  );
};

export default Goal;
