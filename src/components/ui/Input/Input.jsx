import { InputStyle } from './Input.styled';

const Input = ({
  label,
  name,
  type,
  action,
  placeHolder,
  customContainerLabelStyles,
  customContainerInputStyles,
  field,
}) => {
  //   const id = useId();

  return (
    <div>
      {label && (
        <label
          style={customContainerLabelStyles ? customContainerLabelStyles : {}}
        >
          {label}
        </label>
      )}
      <InputStyle
        type={type ? `${type}` : 'text'}
        name={`${name}`}
        onChange={action}
        placeholder={placeHolder ? `${placeHolder}` : ''}
        style={customContainerInputStyles ? customContainerInputStyles : {}}
        {...field}
      />
    </div>
  );
};

export { Input };
