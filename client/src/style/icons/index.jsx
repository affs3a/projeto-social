import { styled } from "styled-components"
import {
    ListAlt, ErrorOutline, Login, Menu, PersonAddOutlined, HomeOutlined, Close, ArrowForward,
    Search, ManageSearch, InfoOutlined, PersonOutline, SettingsOutlined, StoreOutlined, PeopleOutline,
    ArrowBack, Add, CancelOutlined, CheckOutlined, EditOutlined, CloseOutlined, FileUploadOutlined, WhatsApp, Instagram
} from '@mui/icons-material';

export const ListIcon = styled(ListAlt)`
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
`

export const InfoIcon = styled(InfoOutlined)`
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
`

export const ErrorInfo = styled(ErrorOutline)`
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
`

export const LoginIcon = styled(Login)`
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
`

export const HomeIcon = styled(HomeOutlined)`
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
`

export const CloseIcon = styled(Close)`
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
    cursor: pointer;
`

export const Menuicon = styled(Menu)`
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
    cursor: pointer;

    @media (min-width: 991px) {
        display: none;
    }
`

export const ResgisterIcon = styled(PersonAddOutlined)`
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
    cursor: pointer;
`

export const Arrowicon = styled(ArrowForward)`
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
    cursor: pointer;
`

export const ArrowLeft = styled(ArrowBack)`
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
    cursor: pointer;
`

export const ArrowRight = styled(ArrowForward)`
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
    cursor: pointer;
`

export const SearchIcon = styled(Search)`
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
    cursor: pointer;
`

export const SearchCategoryIcon = styled(ManageSearch)`
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
    cursor: pointer;
`

export const ProfileIcon = styled(PersonOutline)`
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
    cursor: pointer;
`

export const PeopleIcon = styled(PeopleOutline)`
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
    cursor: pointer;
`

export const ConfigIncon = styled(SettingsOutlined)`
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
    cursor: pointer;
`

export const StoreIcon = styled(StoreOutlined)`
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
    cursor: pointer;
`

export const PlusIcon = styled(Add)`
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
    cursor: pointer;
`

export const CancelIcon = styled(CancelOutlined)`
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
    cursor: pointer;
`

export const CheckIcon = styled(CheckOutlined)`
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
    cursor: pointer;
`

export const EditIcon = styled(EditOutlined)`
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
    cursor: pointer;
`

export const DeleteIcon = styled(CloseOutlined)`
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
    cursor: pointer;
`

export const FileIcon = styled(FileUploadOutlined)`
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
    cursor: pointer;
`

export const WhatsIcon = styled(WhatsApp)`
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
    cursor: pointer;
`

export const InstaIcon = styled(Instagram)`
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
    cursor: pointer;
`