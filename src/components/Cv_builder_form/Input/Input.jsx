import { TextField } from '@mui/material';

export default function Input({ label, value, onChange }) {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      variant="outlined"
      fullWidth
      margin="normal"
    />
  );
}
