import { AfterTitleText } from 'components/reuseComponent/AfterTitleText/AfterTitleText';
import { Title } from 'components/reuseComponent/Title/Title';
import { Button } from 'components/ui/Button/Button';
import { Icon } from 'components/ui/Icon';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  BehaviorsGrid,
  BehaviorsGridItem,
  BehaviorsGridItemText,
} from './Behaviors.styled';

const Behaviors = () => {
  return (
    <div>
      <Title title={'Destructive behaviors'} />
      <AfterTitleText text={`We all have them! Which are yours?`} />
      <BehaviorsGrid>
        <BehaviorsGridItem>
          <Icon iconId="group-4" h={30} w={30} />
          <BehaviorsGridItemText>I don't rest enough</BehaviorsGridItemText>
        </BehaviorsGridItem>
        <BehaviorsGridItem>
          <Icon iconId="group-4" h={30} w={30} />
          <BehaviorsGridItemText>I have a sweet tooth</BehaviorsGridItemText>
        </BehaviorsGridItem>
        <BehaviorsGridItem>
          <Icon iconId="group-4" h={30} w={30} />
          <BehaviorsGridItemText>I have too much soda</BehaviorsGridItemText>
        </BehaviorsGridItem>
        <BehaviorsGridItem>
          <Icon iconId="group-4" h={30} w={30} />
          <BehaviorsGridItemText>I eat many salty foods</BehaviorsGridItemText>
        </BehaviorsGridItem>
        <BehaviorsGridItem>
          <Icon iconId="group-4" h={30} w={30} />
          <BehaviorsGridItemText>I enjoy midnight snacks</BehaviorsGridItemText>
        </BehaviorsGridItem>
        <BehaviorsGridItem>
          <Icon iconId="icon-soda" h={30} w={30} />
          <BehaviorsGridItemText>None of the above</BehaviorsGridItemText>
        </BehaviorsGridItem>
      </BehaviorsGrid>
      <Link to={'/physical-exercise'}>
        <Button label={'Continue'} />
      </Link>
    </div>
  );
};

export default Behaviors;
