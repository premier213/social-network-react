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
    Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { amber, blueGrey } from '@mui/material/colors';
import AddIcon from '@mui/icons-material/Add';
import ShowSection from './showSection';
import some from 'lodash/some';
import { useRecoilState } from 'recoil';
import socialState from '../store/atom';
import { v4 as uuidv4 } from 'uuid';

export interface Obj {
    [key: string]: string;
}
const FormSection = (): ReactElement => {
    const [social, setSocial] = useRecoilState(socialState);
    const [collapseState, setCollapseState] = useState(false);
    const [username, setUsername] = useState('');
    const [link, setLink] = useState('');
    const [type, setType] = useState('');
    const [uniqueStatus, setUniqueStatus] = useState(false);

    // when click  cancel clear input
    function handleClear() {
        setUsername('');
        setLink('');
        setType('');
        setCollapseState(false);
    }

    // add new social network
    function handleSubmit() {
        const checkUnique = some(social, { username: username, link: link, type: type });
        if (!checkUnique) {
            setSocial((oldArray) => [...oldArray, { id: uuidv4(), username, link, type }]);
            setUniqueStatus(false);
        } else {
            setUniqueStatus(true);
        }
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
                                        <InputLabel id='type' sx={{ color: 'white' }}>
                                            نوع
                                        </InputLabel>
                                        <Select
                                            sx={{
                                                color: 'white',
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'gray',
                                                },
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
                                            sx={{
                                                '.MuiInputBase-root': {
                                                    color: 'white',
                                                },
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'gray',
                                                },
                                            }}
                                            value={link}
                                            onChange={(e) => setLink(e.target.value)}
                                            label='لینک'
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={4}>
                                    <FormControl sx={{ m: 1, width: '90%' }}>
                                        <TextField
                                            sx={{
                                                '.MuiInputBase-root': {
                                                    color: 'white',
                                                },
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    color: 'white',
                                                    borderColor: 'gray',
                                                },
                                            }}
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            label='آی دی (ID)'
                                        />
                                    </FormControl>
                                    <Box sx={{ color: 'red', fontSize: 13 }}>{uniqueStatus && 'مقادیر تکراری است'}</Box>
                                </Grid>
                            </Grid>

                            <Grid container justifyContent='end'>
                                <Stack spacing={2} direction='row' mx={2}>
                                    <Button
                                        onClick={handleClear}
                                        variant='outlined'
                                        sx={{ borderRadius: 2, color: 'white', borderColor: blueGrey[600], right: 0 }}>
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
                {/* list section */}
                <ShowSection social={social} />
            </Grid>
        </>
    );
};

export default FormSection;
