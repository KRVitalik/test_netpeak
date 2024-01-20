import { Icon } from 'components/ui/Icon';
import React from 'react';
import { HeadTitle, IconBackground, StyledHeader } from './MainHead.styled';
import { Link } from 'react-router-dom';

const MainHead = () => {
  return (
    <StyledHeader>
      <Link to={'..'}>
        <Icon
          iconId="back"
          w={30}
          h={30}
          customStyles={{
            cursor: 'pointer',
          }}
        />
      </Link>
      <IconBackground>
        <Icon
          iconId="avocado"
          w={33.5}
          h={33.5}
          customStyles={{
            fill: 'transparent',
          }}
        />
      </IconBackground>
      <HeadTitle>Food Mentor</HeadTitle>
    </StyledHeader>
  );
};

export default MainHead;
