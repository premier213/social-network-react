import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';

export default function showIcon(props: string) {
    switch (props) {
        case 'اینستاگرام':
            return <InstagramIcon />;
        case 'فیسبوک':
            return <FacebookIcon />;
        case 'تویتر':
            return <TwitterIcon />;
        case 'تلگرام':
            return <TelegramIcon />;
        case 'لینکدین':
            return <LinkedInIcon />;
        case 'وبسایت':
            return <LanguageIcon />;

        default:
            break;
    }
}
