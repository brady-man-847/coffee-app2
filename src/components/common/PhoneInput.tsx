import { BaseTextFieldProps, TextField } from '@mui/material';
import { ChangeEvent, useState } from 'react';

interface Props extends BaseTextFieldProps {
  handleValueChange: (arg0: string) => void;
}
export default function PhoneInput({ handleValueChange, ...props }: Props) {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const formattedValue = value
      .replace(/\D/g, '') // Remove non-numeric characters
      .replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3') // Format as 3-4-4
      .slice(0, 13); // Limit to 12 digits (3-4-4)

    setPhoneNumber(formattedValue);
    handleValueChange(formattedValue);
  };

  return <TextField type="text" id="phone-number-input" value={phoneNumber} onChange={handlePhoneNumberChange} {...props} />;
}
