import { instance } from './config';
import { useSetRecoilState } from 'recoil';
import { socialState } from '../store/atom';
import { AddSocial, ListOfSocial } from '../types/global';

export function useList(): ListOfSocial {
    // global state of social
    const setSocial = useSetRecoilState(socialState);

    //show social network list
    function refetch() {
        instance.get('/socials').then((item) => {
            if (item.status === 200) {
                setSocial(item.data);
            }
        });
    }

    // add new social network
    function add(props: AddSocial) {
        const { username, link, type } = props;
        instance.post('/socials', { username, link, type }).then((item) => {
            if (item.status === 201) {
                refetch();
            }
        });
    }

    // edit selected social network
    function edit(props: AddSocial) {
        const { id, username, link, type } = props;
        instance.put(`/socials/${id}`, { username, link, type }).then((item) => {
            if (item.status === 200) {
                refetch();
            }
        });
    }

    // delete selected social network
    function deleteSocial(id: string) {
        instance.delete(`/socials/${id}`).then((item) => {
            if (item.status === 200) {
                refetch();
            }
        });
    }

    return { refetch, add, edit, deleteSocial };
}
