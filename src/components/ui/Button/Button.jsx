import { ButtonStyle } from './Button.styled';

const Button = ({ label, action, customContainerStyles, type, isDisabled }) => {
  const disabledBtn = (
    <button
      onClick={action}
      style={
        customContainerStyles
          ? { ...customContainerStyles, cursor: 'not-allowed' }
          : { cursor: 'not-allowed' }
      }
      type={type ? `${type}` : 'button'}
      disabled={true}
    >
      <span>{label}</span>
    </button>
  );

  const btn = (
    <ButtonStyle
      onClick={action}
      style={customContainerStyles ? customContainerStyles : {}}
      type={type ? `${type}` : 'button'}
    >
      <span>{label}</span>
    </ButtonStyle>
  );

  return isDisabled ? disabledBtn : btn;
};

export { Button };
