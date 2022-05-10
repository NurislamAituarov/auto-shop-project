import s from './Input.module.scss';

interface IInput {
  placeholder: string;
  value?: string | number;
  onChange?: any;
  refInput?: any;
}

export function Input({ placeholder, value, onChange, refInput }: IInput) {
  return (
    <label>
      <input
        className={s.input}
        ref={refInput}
        type="tel"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    </label>
  );
}
