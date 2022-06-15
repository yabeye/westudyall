import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function DropDownReport() {
  const [reportCase, setReportCase] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setReportCase(event.target.value);
  };

  //   alert(reportCase);
  return (
    <FormControl sx={{ minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Report</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={reportCase}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={10}>Off topic</MenuItem>
        <MenuItem value={20}>Abusive</MenuItem>
        <MenuItem value={30}>Threating</MenuItem>
        <MenuItem value={30}>Sexual</MenuItem>
        <MenuItem value={30}>Racists</MenuItem>
      </Select>
    </FormControl>
  );
}
