import React, { useState, useEffect, InputHTMLAttributes } from 'react';

interface CurrencyInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  value: number;
  onChange: (value: number) => void;
}

const CurrencyInput: React.FC<CurrencyInputProps> = ({ value, onChange, ...props }) => {
  const [displayValue, setDisplayValue] = useState('');

  useEffect(() => {
    // Format the value from props to include commas and "원"
    const formattedValue = `${new Intl.NumberFormat('ko-KR').format(value)}원`;
    setDisplayValue(formattedValue);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    // Remove non-numeric characters except for the "원" at the end
    const numericValue = parseInt(inputValue.replace(/[^0-9]/g, ''), 10);

    if (!isNaN(numericValue)) {
      onChange(numericValue);
    } else {
      onChange(0);
    }
  };

  return (
    <input
      {...props}
      type="text"
      value={displayValue}
      onChange={handleChange}
    />
  );
};

export default CurrencyInput;
