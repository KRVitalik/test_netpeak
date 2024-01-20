import { TitleStyle } from './Title.styled';

const Title = ({ title, customContainerStyles }) => {
  return (
    <TitleStyle style={customContainerStyles ? customContainerStyles : {}}>
      {title}
    </TitleStyle>
  );
};

export { Title };
