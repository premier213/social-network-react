export interface SocialState {
    [key: string]: string;
}
export interface AddSocial {
    [key: string]: string;
}
export interface ListOfSocial {
    refetch: () => void;
    add: (props: AddSocial) => void;
    edit: (props: AddSocial) => void;
    deleteSocial: (props: string) => void;
}
export interface Panel {
    open: boolean;
    close: () => void;
}
export interface Setting {
    handleOpen: () => void;
}
export interface PropsDelete {
    id: string;
    username: string;
    open: boolean;
    close: () => void;
}
