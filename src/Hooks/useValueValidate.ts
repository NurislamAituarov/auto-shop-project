import React from 'react';

export function useValueValidate() {
  const [valuePhone, setValuePhone] = React.useState('');

  function onChange(e: string) {
    const value = e.replace(/\D/g, '');
    setValuePhone(value);
  }

  return { valuePhone, setValuePhone, onChange };
}
