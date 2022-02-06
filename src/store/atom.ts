import { atom } from 'recoil';

export interface Obj {
    [key: string]: string;
}

// save state for list of social rows
const socialState = atom<Obj[]>({
    key: 'socialState',
    default: [],
});
// state is true when edit row enabled
const isEdit = atom({
    key: 'isEdit',
    default: false,
});
// keep selected row for edit
const editData = atom<Obj>({
    key: 'editData',
    default: {},
});

export { socialState, isEdit, editData };
