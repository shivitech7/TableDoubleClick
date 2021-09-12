import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import scheme from '../tableJSON/schema.json';
import createRows from './createRows';
import menuOptions from '../tableJSON/menuOptions.json';
export const MyDataTable = () => {

  const [enabled, setEnabled] = useState(true);

  // table rows
  const rows = [
    // create data for rows
    createRows("my text", false, "10"),
    createRows("my text", false, "20"),
    createRows("my text", false, "30"),
    createRows("my text", false, "40"),
  ];

  return (
    <TableContainer sx={{ maxWidth: 800, margin: 'auto', marginTop: "10%" }} component={Paper}>
      <Table aria-label="simple table">

        <TableHead>
          <TableRow sx={{ height: '40px'}} >
            {/* Creating dynamic table scheme */}
            {scheme.map((scheme) => (
              <TableCell align="center">{scheme.header}</TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {/* dynamically creating table rows. */}
          {rows.map((row, id) => (
            <TableRow
              key={id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, height: '40px', }}
            >
              <TableCell align="center"><input className="myinput" defaultValue={row.textValue} readOnly={enabled} onBlur={() => setEnabled(true)} onDoubleClick={() => setEnabled(false)} /></TableCell>
              <TableCell align="center"><input className="myinput" readOnly="true" onDoubleClick={(e) => { e.target.value = (e.target.value === "false" ? "true" : "false") }} value={row.switchValue} /></TableCell>
              <TableCell align="center">
                <InputLabel id="demo-simple-select-label">Options</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  readOnly={enabled}
                  label="Options"
                  onBlur={() => setEnabled(true)} onClick={() => setEnabled(false)}
                >
                  {menuOptions.map((menu) =>

                    <MenuItem value={menu.value}>{menu.value}</MenuItem>

                  )}
                </Select>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

