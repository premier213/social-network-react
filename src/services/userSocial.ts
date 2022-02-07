import { instance } from './config';
import { useRecoilState } from 'recoil';
import { socialState } from '../store/atom';

export interface Add {
    [key: string]: string;
}
export interface List {
    refetch: () => void;
    add: (props: Add) => void;
    edit: (props: Add) => void;
    deleteSocial: (props: string) => void;
}
export function useList(): List {
    const [social, setSocial] = useRecoilState(socialState);
    function refetch() {
        instance.get('/socials').then((item) => {
            if (item.status === 200) {
                setSocial(item.data);
            }
        });
    }
    function add(props: Add) {
        const { username, link, type } = props;

        instance.post('/socials', { username, link, type }).then((item) => {
            if (item.status === 201) {
                refetch();
            }
        });
    }
    function edit(props: Add) {
        const { id, username, link, type } = props;
        instance.put(`/socials/${id}`, { username, link, type }).then((item) => {
            if (item.status === 200) {
                refetch();
            }
        });
    }
    function deleteSocial(id: string) {
        instance.delete(`/socials/${id}`).then((item) => {
            if (item.status === 200) {
                refetch();
            }
        });
    }

    return { refetch, add, edit, deleteSocial };
}
