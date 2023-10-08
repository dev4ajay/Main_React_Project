import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';


interface Props {
    filterHeaders: { key: string, value: string }[],
    filterRows: any[],
}

type Anchor = 'right';

export default function Filter({ filterHeaders, filterRows }: Props) {
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: 250, }}
            role="presentation"
            onClick={toggleDrawer(anchor, true)}
            onKeyDown={toggleDrawer(anchor, true)}
        >
            <div className='text-[#34609d] font-medium text-2xl'>
                {filterHeaders.map((header) => (
                    <Accordion key={header.key} sx={{ boxShadow: 'none', }} className='bg-[#ebf3fe] bg-[#ebf3fe] hover:opacity-75 mx-2 my-3'>

                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon className='text-[#34609d]' />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >

                            <Typography key={header.key} className='text-[#34609d] font-normal'>{header.value}</Typography>

                        </AccordionSummary>

                        {
                            filterRows.map((filter, index) => {
                                if (filter.type === "radio") {
                                    return <AccordionDetails key={filter} className='h-48 overflow-y-auto'>
                                        <FormControl>
                                            <RadioGroup
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                name="radio-buttons-group"
                                            >
                                                {
                                                    filter.data.map((data, dataIndex) => {
                                                        if (header.key in data) {
                                                            return <FormControlLabel key={data} value={data?.[header.key]} control={<Radio />} label={data?.[header.key]} />
                                                        }
                                                    })
                                                }
                                            </RadioGroup>
                                        </FormControl>
                                    </AccordionDetails>
                                } else if (filter.type === "checkbox") {
                                    return <AccordionDetails key={`key${filter}`} className='py-0'>
                                          <FormControl>
                                          {
                                            filter.data.map((data, dataIndex) => {
                                                if (header.key in data) {
                                                    return  <FormControlLabel key={dataIndex} value={data?.[header.key]} control={<Checkbox />} label={data?.[header.key]}/>
                                                }
                                            })
                                        }
                                          </FormControl>
                                      
                                    </AccordionDetails>
                                }
                            })
                        }
                    </Accordion>
                ))}
            </div>
        </Box>
    );

    return (
        <div>
            {(['right'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}><FilterAltOutlinedIcon className='text-3xl text-[#8da5c8]' /></Button>
                    <Drawer
                        className='relative'
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        <div className='text-right flex justify-between px-3 pt-5'>
                        <h1 className='text-center text-xl pb-2 font-bold text-[#34609d]'>Filters</h1>
                        <CloseOutlinedIcon onClick={toggleDrawer(anchor, false)} className='hover:opacity-75 cursor-pointer text-[22px] text-[#34609d] rounded-lg' />
                        </div>
                        {list(anchor)}
                        <div className='absolute bottom-0 text-center bg-[#fff] w-full py-2'>
                            <Button className='px-7 bg-[#fdede8] hover:bg-[#fdede8] text-[#fd8c68] hover:opacity-75 text-md m-1'>Cancel</Button>
                            <Button className='px-7 bg-[#ecf2ff] hover:bg-[#ecf2ff] hover:opacity-75  text-[#34609d] text-md m-1'>Apply</Button>
                        </div>
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}