import { atom } from 'recoil';
import { SocialState } from '../types/global';

// save state for list of social rows
const socialState = atom<SocialState[]>({
    key: 'socialState',
    default: [],
});
// state is true when edit row enabled
const isEdit = atom({
    key: 'isEdit',
    default: false,
});
// keep selected row for edit
const editData = atom<SocialState>({
    key: 'editData',
    default: {},
});

export { socialState, isEdit, editData };
