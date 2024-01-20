import { TextStyle } from './AfterTitleText.styled';

const AfterTitleText = ({ text, customContainerStyles }) => {
  return (
    <TextStyle style={customContainerStyles ? customContainerStyles : {}}>
      {text}
    </TextStyle>
  );
};

export { AfterTitleText };
