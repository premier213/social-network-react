import { Box, Button, Grid, Typography, useTheme } from '@mui/material';
import { ReactElement, useEffect, useState } from 'react';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import showIcon from '../utils/showIcon';
import { amber, blueGrey, grey } from '@mui/material/colors';
import DeleteDialog from './deleteDialog';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { editData, isEdit, socialState } from '../store/atom';
import { find } from 'lodash';
import { useList } from '../services/userSocial';

const ShowSection = (): ReactElement => {
    const [isOpen, setIsOpen] = useState(false);
    const [isId, setIsId] = useState('');
    const [isUsername, setIsUsername] = useState('');
    const setEdit = useSetRecoilState(isEdit);
    const setIsEditData = useSetRecoilState(editData);
    const social = useRecoilValue(socialState);
    const { refetch } = useList();
    const theme = useTheme();

    // render list of social when page load
    useEffect(() => {
        refetch();
    }, []);

    // find id from global state & edit selected social
    function handleEdit(id: string) {
        const result = find(social, function (o) {
            return o.id === id;
        });

        if (result !== undefined) {
            setEdit(true);
            setIsEditData(result);
        }
    }

    // handle function for delete social network
    function handleDelete(id: string, username: string) {
        setIsOpen(true);
        setIsId(id);
        setIsUsername(username);
    }

    // close dialog delete social
    function handleCloseDialog() {
        setIsOpen(false);
    }

    return (
        <Grid item>
            <Box
                mx={2}
                my={2}
                py={2}
                sx={{
                    bgcolor: theme.palette.mode === 'dark' ? blueGrey[900] : blueGrey[100],
                    width: '96%',
                    borderRadius: 2,
                }}>
                {social?.map((item) => {
                    return (
                        <Grid container direction='row' key={item.id} mx={2} sx={{ fontSize: 12 }}>
                            <Box
                                sx={{
                                    color: theme.palette.mode === 'dark' ? blueGrey[100] : blueGrey[900],
                                    marginTop: '-2px',
                                }}
                                mr={1}>
                                {showIcon(item.type)}
                            </Box>

                            <Box
                                sx={{
                                    color: theme.palette.mode === 'dark' ? blueGrey[100] : blueGrey[900],
                                    width: '10%',
                                }}>
                                {item.type}
                            </Box>

                            <Box
                                sx={{
                                    color: theme.palette.mode === 'dark' ? blueGrey[100] : blueGrey[900],
                                    width: '20%',
                                }}>
                                <Typography
                                    mx={1}
                                    variant='caption'
                                    sx={{ color: theme.palette.mode === 'dark' ? blueGrey[100] : blueGrey[900] }}>
                                    آی دی:
                                </Typography>
                                <Typography
                                    mx={1}
                                    variant='caption'
                                    sx={{ color: theme.palette.mode === 'dark' ? amber[500] : amber[800] }}>
                                    {item.username}
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    color: theme.palette.mode === 'dark' ? amber[500] : amber[800],
                                    width: '40%',
                                }}>
                                <Typography
                                    mx={1}
                                    variant='caption'
                                    sx={{ color: theme.palette.mode === 'dark' ? blueGrey[100] : blueGrey[900] }}>
                                    لینک:
                                </Typography>
                                <Typography
                                    mx={1}
                                    variant='caption'
                                    sx={{ color: theme.palette.mode === 'dark' ? amber[500] : amber[800] }}>
                                    {item.link}
                                </Typography>
                            </Box>

                            <Grid item xs={1}>
                                <Box>
                                    <Button
                                        sx={{ color: theme.palette.mode === 'dark' ? amber[500] : amber[800] }}
                                        variant='text'
                                        size='small'
                                        onClick={() => handleEdit(item.id)}
                                        startIcon={<ModeEditOutlineOutlinedIcon />}>
                                        <Typography variant='caption'>ویرایش</Typography>
                                    </Button>
                                </Box>
                            </Grid>
                            <Grid item xs={1}>
                                <Box ml={2}>
                                    <Button
                                        onClick={() => handleDelete(item.id, item.username)}
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
                <DeleteDialog id={isId} username={isUsername} open={isOpen} close={handleCloseDialog} />
            </Box>
        </Grid>
    );
};

export default ShowSection;
