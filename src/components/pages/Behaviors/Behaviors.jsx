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

const Behaviors = () => {
  return (
    <>
      <Title title={'Destructive behaviors'} />
      <AfterTitleText text={`We all have them! Which are yours?`} />
      <BehaviorsGrid>
        <BehaviorsGridItem>
          <Icon iconId="moon" h={30} />
          <BehaviorsGridItemText>I don't rest enough</BehaviorsGridItemText>
        </BehaviorsGridItem>
        <BehaviorsGridItem>
          <Icon iconId="donut" h={30} />
          <BehaviorsGridItemText>I have a sweet tooth</BehaviorsGridItemText>
        </BehaviorsGridItem>
        <BehaviorsGridItem>
          <Icon iconId="soda" h={30} />
          <BehaviorsGridItemText>I have too much soda</BehaviorsGridItemText>
        </BehaviorsGridItem>
        <BehaviorsGridItem>
          <Icon iconId="salt" h={30} />
          <BehaviorsGridItemText>I eat many salty foods</BehaviorsGridItemText>
        </BehaviorsGridItem>
        <BehaviorsGridItem>
          <Icon iconId="pizza" h={30} />
          <BehaviorsGridItemText>I enjoy midnight snacks</BehaviorsGridItemText>
        </BehaviorsGridItem>
        <BehaviorsGridItem>
          <Icon iconId="cross" h={30} />
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
