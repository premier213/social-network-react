import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
} from '@mui/material';
import { amber, blueGrey } from '@mui/material/colors';
import { ReactElement, useState } from 'react';
import { useList } from '../services/userSocial';
import { PropsDelete } from '../types/global';
import { useTheme } from '@mui/material';

const DeleteDialog = ({ id, username, open, close }: PropsDelete): ReactElement => {
    const [isAccepted, setIsAccepted] = useState(false);
    const { deleteSocial } = useList();
    const theme = useTheme();

    // check if input is accepted
    function handleAccept(value: string) {
        if (value === 'تائید') {
            setIsAccepted(true);
        }
    }

    // remove row from table by index
    function handleDeleteObject(id: string) {
        deleteSocial(id);
        setIsAccepted(false);
        close();
    }

    return (
        <Dialog open={open}>
            <Box sx={{ bgcolor: theme.palette.mode === 'dark' ? blueGrey[900] : blueGrey[100] }}>
                <DialogTitle>آیا از تصمیم خود مطمئن هستید؟</DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{ fontSize: 13, marginBottom: 2 }}>
                        برای حذف مسیر ارتباطی {username} لطفا تائید را بنویسید
                    </DialogContentText>
                    <TextField onChange={(e): void => handleAccept(e.target.value)} fullWidth />
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={close}
                        sx={{ color: theme.palette.mode === 'dark' ? amber[600] : amber[800], fontSize: 13 }}>
                        انصراف
                    </Button>
                    <Button
                        onClick={() => handleDeleteObject(id)}
                        sx={{ color: 'red', fontSize: 13 }}
                        disabled={!isAccepted}>
                        حذف
                    </Button>
                </DialogActions>
            </Box>
        </Dialog>
    );
};

export default DeleteDialog;
