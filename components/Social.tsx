import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SocialIcon } from "./type";


interface Props {
    containerStyles: string | undefined
    iconStyles: string | undefined
}

const socials: SocialIcon[] = [
    { icon: <FaFacebook />, path: 'https://www.facebook.com/xingseno.yu' },
    { icon: <FaInstagram />, path: 'https://www.instagram.com/raindew_ily' },
]


const Social = ({ containerStyles, iconStyles }: Props): JSX.Element => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
                )
            })}
        </div>
    )
}

export default Social;