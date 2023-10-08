import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useRouter } from 'next/router'
import { Route } from '@mui/icons-material';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

interface Props {
  headers: { key: string, value: string }[],
  rows: any[],
  onEditClick?: (row: any) =>  void;
  onDeleteClick?: (row: any) =>  void;
}

const onDeleteClick = () => {
  
}

export default function Datatabel({ headers, rows, onEditClick, onDeleteClick }: Props) {
  const router = useRouter()
  console.log(this);
    
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [rowId, setRowId] = React.useState<any>(null);

    const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>, id: any) => {
      setAnchorEl(event.currentTarget);
      setRowId(id);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
        setRowId(null);
    };

    const handleEditRow = () => {
      console.log('Editing row:', rowId);
      handleCloseMenu();
    };

    const handleDeleteRow = () => {
      console.log('Deleting row:', rowId);
      handleCloseMenu();
      handleCloseMenu();
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container>
                <Grid item xs={12}>
                   
                   <div className='py-5 overflow-scroll w-{auto}'>
                            <Table aria-label="simple table relative">
                                <TableHead className='border-y-[1px] border-[#ccc]'>
                                    <TableRow className='cursor-pointer whitespace-nowrap'>
                                        {headers.map((header) => (
                                            <TableCell key={header.key} className='py-3 pl-5'>{header.value}</TableCell>
                                        ))}
                                        <TableCell />
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row: any, index: number) => (
                                        <TableRow key={index} >
                                            {headers.map((header) => (
                                                <TableCell key={header.key} className='py-3 pl-5 whitespace-nowrap'>
                                                    {row[header.key]}
                                                </TableCell>
                                            ))}
                                            <TableCell>
                                              <IconButton
                                                aria-controls={`menu-${index}`}
                                                aria-haspopup="true"
                                                onClick={(e) => handleOpenMenu(e, row.id)}
                                              >
                                                <MoreVertIcon />
                                              </IconButton>
                                              <Menu
                                                id={`menu-${index}`}
                                                anchorEl={anchorEl}
                                                open={rowId === row.id}
                                                onClose={handleCloseMenu}
                                              >
                                                <MenuItem onClick={() => onEditClick(row)} >Edit</MenuItem>
                                                {/* <MenuItem onClick={() => onDeleteClick(row)}>Delete</MenuItem> */}
                                              </Menu>
                                            </TableCell>

                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
}