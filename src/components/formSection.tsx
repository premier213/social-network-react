import { ReactElement, useState } from 'react';
import {
    Button,
    Collapse,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,
    ToggleButton,
    Typography,
} from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box } from '@mui/system';
import { amber, blueGrey } from '@mui/material/colors';
import AddIcon from '@mui/icons-material/Add';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import showIcon from '../utils/showIcon';

export interface Obj {
    [key: string]: string;
}
const FormSection = (): ReactElement => {
    const [social, setSocial] = useState<Array<Obj>>([]);
    const [collapseState, setCollapseState] = useState(false);
    const [id, setId] = useState('');
    const [link, setLink] = useState('');
    const [type, setType] = useState('');

    function handleClear() {
        setId('');
        setLink('');
        setType('');
        setCollapseState(false);
    }
    function handleSubmit() {
        setSocial((oldArray) => [...oldArray, { id, link, type }]);
    }

    return (
        <>
            <Grid container direction='column' sx={{ width: 1 / 2, bgcolor: '#1E2832', borderRadius: 5, boxShadow: 3 }}>
                <Grid item>
                    <Box m={4} color='gray'>
                        <Typography variant='caption'>مسیرهای ارتباطی</Typography>
                    </Box>
                </Grid>
                <Grid item>
                    <Box mx={2}>
                        <Button
                            sx={{ color: amber[400] }}
                            variant='text'
                            startIcon={<AddIcon sx={{ color: amber[700] }} />}
                            onClick={() => setCollapseState(!collapseState)}>
                            <Typography color={amber[700]} variant='caption'>
                                افزودن مسیر ارتباطی
                            </Typography>
                        </Button>
                    </Box>
                </Grid>
                <Grid item>
                    <Collapse in={collapseState}>
                        <Box sx={{ bgcolor: '#303A44', width: '96%', borderRadius: 3 }} mx={2} my={2} py={2}>
                            <Typography variant='caption' color='white' mx={2}>
                                افزودن مسیر ارتباطی
                            </Typography>

                            <Grid container direction='row' spacing={2} my={1}>
                                <Grid item xs={4}>
                                    <FormControl sx={{ m: 1, width: '90%' }}>
                                        <InputLabel id='type'>نوع</InputLabel>
                                        <Select
                                            sx={{
                                                border: 'red',
                                            }}
                                            value={type}
                                            onChange={(e) => setType(e.target.value)}
                                            id='type'
                                            label='نوع'
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}>
                                            <MenuItem value='اینستاگرام'>اینستاگرام </MenuItem>
                                            <MenuItem value='فیسبوک'>فیسبوک</MenuItem>
                                            <MenuItem value='تویتر'>تویتر</MenuItem>
                                            <MenuItem value='تلگرام'>تلگرام</MenuItem>
                                            <MenuItem value='لینکدین'>لینکدین</MenuItem>
                                            <MenuItem value='وبسایت'>وبسایت</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={4}>
                                    <FormControl sx={{ m: 1, width: '90%' }}>
                                        <TextField
                                            value={link}
                                            onChange={(e) => setLink(e.target.value)}
                                            label='لینک'
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={4}>
                                    <FormControl sx={{ m: 1, width: '90%' }}>
                                        <TextField
                                            value={id}
                                            onChange={(e) => setId(e.target.value)}
                                            label='آی دی (ID)'
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid container justifyContent='end'>
                                <Stack spacing={2} direction='row' mx={2}>
                                    <Button
                                        onClick={handleClear}
                                        variant='outlined'
                                        sx={{ borderRadius: 2, color: 'white', borderColor: blueGrey[600] }}>
                                        انصراف
                                    </Button>
                                    <Button
                                        variant='contained'
                                        onClick={handleSubmit}
                                        sx={{
                                            color: 'black',
                                            borderRadius: 2,
                                            bgcolor: amber[700],
                                            '&:hover': {
                                                bgcolor: amber[900],
                                            },
                                        }}>
                                        ثبت مسیر ارتباطی
                                    </Button>
                                </Stack>
                            </Grid>
                        </Box>
                    </Collapse>
                </Grid>
                <Grid item>
                    <Box mx={2} my={2} py={2} sx={{ bgcolor: '#303A44', width: '96%', borderRadius: 2 }}>
                        {social?.map((item, index) => {
                            return (
                                <Grid container direction='row' key={index} mx={2} sx={{ fontSize: 12 }}>
                                    <Box sx={{ color: 'white', marginTop: '-2px' }} mr={1}>
                                        {showIcon(item.type)}
                                    </Box>

                                    <Box sx={{ color: 'white', width: '10%' }}>{item.type}</Box>

                                    <Box sx={{ color: 'white', width: '20%' }}>
                                        <Typography mx={1} variant='caption' sx={{ color: 'gray' }}>
                                            آی دی:
                                        </Typography>{' '}
                                        {item.id}
                                    </Box>

                                    <Box sx={{ color: 'white', width: '40%' }}>
                                        <Typography mx={1} variant='caption' sx={{ color: 'gray' }}>
                                            لینک:
                                        </Typography>
                                        <Typography mx={1} variant='caption' sx={{ color: amber[600] }}>
                                            {item.link}
                                        </Typography>
                                    </Box>

                                    <Grid xs={1}>
                                        <Box>
                                            <Button
                                                sx={{ color: amber[600] }}
                                                variant='text'
                                                size='small'
                                                startIcon={<ModeEditOutlineOutlinedIcon />}>
                                                <Typography variant='caption'>ویرایش</Typography>
                                            </Button>
                                        </Box>
                                    </Grid>
                                    <Grid xs={1}>
                                        <Box ml={2}>
                                            <Button
                                                color='error'
                                                variant='text'
                                                size='small'
                                                startIcon={<DeleteOutlinedIcon />}>
                                                <Typography variant='caption'>حذف</Typography>
                                            </Button>
                                        </Box>
                                    </Grid>
                                </Grid>
                            );
                        })}
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default FormSection;
