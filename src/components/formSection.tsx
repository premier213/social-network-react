import { ReactElement, useEffect, useState } from 'react';
import {
    Button,
    Collapse,
    FormControl,
    FormHelperText,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,
    Typography,
    useTheme,
} from '@mui/material';
import { Box } from '@mui/system';
import { amber, blueGrey, red } from '@mui/material/colors';
import AddIcon from '@mui/icons-material/Add';
import ShowSection from './showSection';
import some from 'lodash/some';
import { useRecoilState, useRecoilValue } from 'recoil';
import { editData, isEdit, socialState } from '../store/atom';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useList } from '../services/userSocial';

const FormSection = (): ReactElement => {
    const social = useRecoilValue(socialState);
    const [collapseState, setCollapseState] = useState(false);
    const [username, setUsername] = useState('');
    const [link, setLink] = useState('');
    const [type, setType] = useState('');
    const [uniqueStatus, setUniqueStatus] = useState(false);
    const [edit, setEdit] = useRecoilState(isEdit);
    const isEditData = useRecoilValue(editData);
    const { add, edit: editFunction } = useList();
    const theme = useTheme();
    const { refetch } = useList();

    useEffect(() => {
        // Condition when use edit social
        if (edit) {
            setCollapseState(true);
            setType(isEditData.type);
            setLink(isEditData.link);
            setUsername(isEditData.username);
        }
    }, [edit, isEditData]);

    // when click cancel clear inputs
    function handleReset() {
        formik.resetForm();
        setType('');
        setLink('');
        setUsername('');
        setEdit(false);
        setCollapseState(false);
        setUniqueStatus(false);
    }

    // validation social form
    const validationSchema = yup.object({
        type: yup.string().required('انتخاب شبکه الزامی است'),
        link: yup.string().required('لینک را وارد کنید'),
        username: yup.string().required('آی دی را وارد کنید'),
    });

    // handle form with formik
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            type,
            link,
            username,
        },
        validationSchema: validationSchema,
        onSubmit: async (values, { resetForm }) => {
            // submit edit social when exist
            if (edit) {
                editFunction({ id: isEditData.id, username: values.username, link: values.link, type: values.type });
                setEdit(false);
                setType('');
                setLink('');
                setUsername('');
                setCollapseState(false);
            } else {
                // submit new social
                const checkUnique = some(social, { username: values.username, link: values.link, type: values.type });

                if (!checkUnique) {
                    add({ username: values.username, link: values.link, type: values.type });
                    resetForm();
                    setUniqueStatus(false);
                } else {
                    setUniqueStatus(true);
                }
            }
        },
    });

    return (
        <>
            <Grid
                container
                direction='column'
                sx={{
                    width: 1 / 2,
                    bgcolor: theme.palette.mode === 'dark' ? blueGrey[800] : blueGrey[200],
                    borderRadius: 5,
                    boxShadow: 3,
                }}>
                <Grid item>
                    <Box m={4} color='gray'>
                        <Typography variant='caption'>مسیرهای ارتباطی</Typography>
                    </Box>
                </Grid>
                <Grid item>
                    <Box mx={2}>
                        <Button
                            variant='text'
                            startIcon={
                                edit ? (
                                    <ModeEditOutlineOutlinedIcon
                                        sx={{ color: theme.palette.mode === 'dark' ? amber[600] : amber[900] }}
                                    />
                                ) : (
                                    <AddIcon sx={{ color: theme.palette.mode === 'dark' ? amber[600] : amber[900] }} />
                                )
                            }
                            onClick={() => setCollapseState(!collapseState)}>
                            <Typography
                                color={theme.palette.mode === 'dark' ? amber[600] : amber[900]}
                                variant='caption'>
                                {edit ? 'ویرایش مسیر ارتباطی' : ' افزودن مسیر ارتباطی'}
                            </Typography>
                        </Button>
                    </Box>
                </Grid>
                <Grid item>
                    <Collapse in={collapseState}>
                        <Box
                            sx={{
                                bgcolor: theme.palette.mode === 'dark' ? blueGrey[900] : blueGrey[100],
                                width: '96%',
                                borderRadius: 3,
                            }}
                            mx={2}
                            my={2}
                            py={2}>
                            <Typography variant='caption' mx={2}>
                                {edit ? 'ویرایش مسیر ارتباطی' : ' افزودن مسیر ارتباطی'}
                            </Typography>

                            <form onSubmit={formik.handleSubmit}>
                                <Grid container direction='row' spacing={2} my={1}>
                                    <Grid item xs={4}>
                                        <FormControl sx={{ m: 1, width: '90%' }}>
                                            <InputLabel id='type'>نوع</InputLabel>
                                            <Select
                                                id='type'
                                                label='نوع'
                                                name='type'
                                                error={formik.touched.type && Boolean(formik.errors.type)}
                                                value={formik.values.type}
                                                onChange={formik.handleChange}>
                                                <MenuItem value='اینستاگرام'>اینستاگرام </MenuItem>
                                                <MenuItem value='فیسبوک'>فیسبوک</MenuItem>
                                                <MenuItem value='تویتر'>تویتر</MenuItem>
                                                <MenuItem value='تلگرام'>تلگرام</MenuItem>
                                                <MenuItem value='لینکدین'>لینکدین</MenuItem>
                                                <MenuItem value='وبسایت'>وبسایت</MenuItem>
                                            </Select>
                                            <FormHelperText>{formik.touched.type && formik.errors.type}</FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl sx={{ m: 1, width: '90%' }}>
                                            <TextField
                                                label='لینک'
                                                id='link'
                                                name='link'
                                                value={formik.values.link}
                                                onChange={formik.handleChange}
                                                error={formik.touched.link && Boolean(formik.errors.link)}
                                                helperText={formik.touched.link && formik.errors.link}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl sx={{ m: 1, width: '90%' }}>
                                            <TextField
                                                label='آی دی (ID)'
                                                id='username'
                                                name='username'
                                                value={formik.values.username}
                                                onChange={formik.handleChange}
                                                error={formik.touched.username && Boolean(formik.errors.username)}
                                                helperText={formik.touched.username && formik.errors.username}
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>

                                <Grid container justifyContent='space-between'>
                                    <Box
                                        mx={2}
                                        my={1}
                                        sx={{
                                            color: theme.palette.mode === 'dark' ? red[500] : red[500],
                                            fontSize: 13,
                                        }}>
                                        {uniqueStatus && 'مقادیر تکراری است'}
                                    </Box>
                                    <Stack spacing={2} direction='row' mx={2}>
                                        <Button
                                            type='reset'
                                            onClick={() => handleReset()}
                                            variant='outlined'
                                            sx={{
                                                borderRadius: 2,
                                                color: theme.palette.mode === 'dark' ? blueGrey[200] : blueGrey[800],
                                                borderColor: blueGrey[600],
                                                right: 0,
                                            }}>
                                            انصراف
                                        </Button>
                                        <Button
                                            type='submit'
                                            variant='contained'
                                            sx={{
                                                color: 'black',
                                                fontSize: 13,
                                                borderRadius: 2,
                                                bgcolor: amber[700],
                                                '&:hover': {
                                                    bgcolor: amber[800],
                                                },
                                            }}>
                                            {edit ? `ویرایش مسیر ارتباطی  ${isEditData.type}` : 'ثبت مسیر ارتباطی'}
                                        </Button>
                                    </Stack>
                                </Grid>
                            </form>
                        </Box>
                    </Collapse>
                </Grid>
                {/* list section */}
                <ShowSection />
            </Grid>
        </>
    );
};

export default FormSection;
