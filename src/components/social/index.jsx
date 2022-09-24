import Link from "next/link"
import * as Style from "./style"

// React Icons
import { FiGithub,FiInstagram,FiLinkedin,FiYoutube } from "react-icons/fi"
import { FaTiktok } from 'react-icons/fa';
export default function Social() {
    return(
        <Style.List>
            <li>
                <Link  href="./">
                    <a><FiGithub size={25}/></a>
                </Link>
            </li>
            
            <li>
                <Link  href="./">
                    <a><FiLinkedin size={25}/></a>
                </Link>
            </li>

            <li>
                <Link  href="./">
                    <a><FiInstagram size={25}/></a>
                </Link>
            </li>

            <li>
                <Link  href="./">
                    <a><FaTiktok size={25}/></a>
                </Link>
            </li>

            <li>
                <Link  href="./">
                    <a><FiYoutube size={25}/></a>
                </Link>
            </li>
        </Style.List>
    )
}