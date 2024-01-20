import { InputStyle } from './Input.styled';

const Input = ({
  label,
  name,
  idSuffix,
  type,
  action,
  placeHolder,
  customContainerLabelStyles,
  customContainerInputStyles,
  cnClassNameContainer,
  field,
}) => {
  //   const id = useId();

  return (
    <div className={cnClassNameContainer}>
      {label && (
        <label
          //   htmlFor={`${id}-${idSuffix}`}
          style={customContainerLabelStyles ? customContainerLabelStyles : {}}
        >
          {label}
        </label>
      )}
      <InputStyle
        type={type ? `${type}` : 'text'}
        name={`${name}`}
        // id={`${id}-${idSuffix}`}
        onChange={action}
        placeholder={placeHolder ? `${placeHolder}` : ''}
        // className={cn('input')}
        style={customContainerInputStyles ? customContainerInputStyles : {}}
        {...field}
      />
    </div>
  );
};

export { Input };
