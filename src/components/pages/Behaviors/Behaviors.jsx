import { AfterTitleText } from 'components/reuseComponent/AfterTitleText/AfterTitleText';
import { Title } from 'components/reuseComponent/Title/Title';
import { Button } from 'components/ui/Button/Button';
import { Link } from 'react-router-dom';
import {
  BehaviorsGrid,
  BehaviorsGridItem,
  BehaviorsGridItemText,
} from './Behaviors.styled';
import { Icon } from 'components/ui/Icon';
import { useEffect, useState } from 'react';

const Behaviors = () => {
  const [behaviors, setBehaviors] = useState('');

  const handleClick = e => {
    setBehaviors(e.currentTarget.textContent);
  };

  useEffect(() => {
    console.dir(behaviors);
  }, [behaviors]);

  return (
    <>
      <Title title={'Destructive behaviors'} />
      <AfterTitleText text={`We all have them! Which are yours?`} />
      <BehaviorsGrid>
        <BehaviorsGridItem onClick={e => handleClick(e)}>
          <Icon iconId="moon" h={30} w={30} />
          <BehaviorsGridItemText>I don't rest enough</BehaviorsGridItemText>
        </BehaviorsGridItem>
        <BehaviorsGridItem onClick={e => handleClick(e)}>
          <Icon iconId="donut" h={30} w={30} />
          <BehaviorsGridItemText>I have a sweet tooth</BehaviorsGridItemText>
        </BehaviorsGridItem>
        <BehaviorsGridItem onClick={e => handleClick(e)}>
          <Icon iconId="soda" h={30} w={30} />
          <BehaviorsGridItemText>I have too much soda</BehaviorsGridItemText>
        </BehaviorsGridItem>
        <BehaviorsGridItem onClick={e => handleClick(e)}>
          <Icon iconId="salt" h={30} w={30} />
          <BehaviorsGridItemText>I eat many salty foods</BehaviorsGridItemText>
        </BehaviorsGridItem>
        <BehaviorsGridItem onClick={e => handleClick(e)}>
          <Icon iconId="pizza" h={30} w={30} />
          <BehaviorsGridItemText>I enjoy midnight snacks</BehaviorsGridItemText>
        </BehaviorsGridItem>
        <BehaviorsGridItem onClick={e => handleClick(e)}>
          <Icon iconId="cross" h={30} w={30} />
          <BehaviorsGridItemText>None of the above</BehaviorsGridItemText>
        </BehaviorsGridItem>
      </BehaviorsGrid>
      <Link to={'/physical-exercise'}>
        <Button label={'Continue'} />
      </Link>
    </>
  );
};

export default Behaviors;
