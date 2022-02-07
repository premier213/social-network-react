import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    InputProps,
    TextField,
    TextFieldProps,
} from '@mui/material';
import { amber } from '@mui/material/colors';
import { filter } from 'lodash';
import { ReactElement, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useList } from '../services/userSocial';
import { socialState } from '../store/atom';

export interface Props {
    id: string;
    username: string;
    open: boolean;
    close: () => void;
}

const DeleteDialog = ({ id, username, open, close }: Props): ReactElement => {
    const [isAccepted, setIsAccepted] = useState(false);
    const [social, setSocial] = useRecoilState(socialState);
    const { deleteSocial } = useList();

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
            <Box sx={{ bgcolor: '#303A44' }}>
                <DialogTitle sx={{ color: 'white' }}>آیا از تصمیم خود مطمئن هستید؟</DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{ fontSize: 13, marginBottom: 2, color: 'white' }}>
                        برای حذف مسیر ارتباطی {username} لطفا تائید را بنویسید
                    </DialogContentText>
                    <TextField
                        onChange={(e): void => handleAccept(e.target.value)}
                        fullWidth
                        sx={{
                            '.MuiInputBase-root': {
                                color: 'white',
                            },
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'gray',
                            },
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={close} sx={{ color: amber[600], fontSize: 13 }}>
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
