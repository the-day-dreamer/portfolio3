import styles from '@/styles/Navbar.module.css'
import Link from 'next/link';
import { motion } from 'framer-motion'
import { useRouter } from 'next/router';
import Twitter from './Twitter';
import Instagram from './Instagram';
import Dribbble from './Dribbble';
import Github from './Github';
import Linkedin from './Linkedin';
const Navbar = () => {
    const router = useRouter()
    return ( 
        <div className={styles.navbar}>
            <div className={styles.navbarLeft}>
                <div><Link href='/'>Home</Link></div>
                <div><Link href='/about'>About</Link></div>
                <div><Link href='/projects'>Projects</Link></div>
                <div><Link href='/articles'>Articles</Link></div>
            </div>
            <div className={styles.navbarMiddle}>
                <motion.div className={styles.logo}
                whileHover={{
                    color : ['#34e7e4' , '#ef5777' , '#ff5e57' , '#ffd32a' , '#c56cf0' , '#32ff7e'],
                    transition :{duration : 1 , repeat : Infinity}

                }}
                >AR</motion.div>
            </div>
            <div className={styles.navbarRight}>
                <div className={styles.icons}><Link href='https://twitter.com/Aman72709384' target='_blank'><Twitter/></Link></div>
                <div className={styles.icons}><Link href='https://www.instagram.com/aman.daydreamer/' target='_blank'><Instagram/></Link></div>
                <div className={styles.icons}><Link href='https://dribbble.com/Aman1324' target='_blank'><Dribbble/></Link></div>
                <div className={styles.icons}><Link href='https://github.com/the-day-dreamer' target='_blank'><Github/></Link></div>
                <div className={styles.icons}><Link href='https://www.linkedin.com/in/aman-raj-028802238/' target='_blank'><Linkedin/></Link></div>
                
            </div>
        </div>
        
     );
}
 
export default Navbar;
