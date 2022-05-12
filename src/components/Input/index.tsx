import s from './Input.module.scss';

interface IInput {
  placeholder: string;
  value?: string | number;
  type: string;
  onChange?: any;
  refInput?: any;
}

export function Input({ placeholder, value, onChange, refInput, type }: IInput) {
  return (
    <label>
      <input
        className={s.input}
        ref={refInput}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    </label>
  );
}
