import { atom } from 'recoil';

export interface Obj {
    [key: string]: string;
}

const socialState = atom<Obj[]>({
    key: 'socialState',
    default: [],
});

export default socialState;
