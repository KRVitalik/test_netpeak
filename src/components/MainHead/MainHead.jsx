import { Icon } from 'components/ui/Icon';
import { useEffect, useState } from 'react';
import { HeadTitle, IconBackground, StyledHeader } from './MainHead.styled';
import { Link, useLocation } from 'react-router-dom';

const MainHead = () => {
  const location = useLocation();
  const [styles, setStyles] = useState(false);

  useEffect(() => {
    if (location.pathname === '/destructive-behaviors') {
      setStyles(true);
    } else setStyles(false);
  }, [location]);

  const customStyle = {
    maxWidth: 1440,
    margin: '0 auto',
    justifyContent: 'start',
    paddingLeft: 165,
  };

  return (
    <StyledHeader style={styles ? customStyle : {}}>
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
