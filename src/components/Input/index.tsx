import s from './Input.module.scss';

interface IInput {
  placeholder: string;
  value?: string;
  type: string;
  onChange?: any;
  refInput?: any;
}

export function Input({ placeholder, value, onChange, refInput, type }: IInput) {
  return (
    <>
      {type === 'tel' ? (
        <input
          className={s.input}
          ref={refInput}
          type={type}
          placeholder={'8 (____) ____ - __ - __'}
          value={value}
          onChange={(e) => onChange && onChange(e.target.value)}
        />
      ) : (
        <input
          className={s.input}
          ref={refInput}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange && onChange(e.target.value)}
        />
      )}
    </>
  );
}
