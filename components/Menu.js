import styles from '@/styles/Menu.module.css'
import Twitter from './Twitter';
import Instagram from './Instagram';
import Dribbble from './Dribbble';
import Github from './Github';
import Linkedin from './Linkedin';
import Sun from './Sun';
import Moon from './Moon';
import Link from 'next/link';
import { useState } from 'react';
const Menu = () => {
    const [lightMode , setLightMode] = useState(true)

    const handleChange = ()=>{
        if(lightMode === true){
            setLightMode(false)
        }
        else{
            setLightMode(true)
        }
        // console.log(lightMode)
    }
    return ( 
        <div className={styles.menu}>
            <div className={styles.menuBox}>
            <div className={styles.menuUp}>
                <div className={styles.icons}><Link href='https://twitter.com/Aman72709384' target='_blank'><Twitter/></Link></div>
                <div className={styles.icons}><Link href='https://www.instagram.com/aman.daydreamer/' target='_blank'><Instagram/></Link></div>
                <div className={styles.icons}><Link href='https://dribbble.com/Aman1324' target='_blank'><Dribbble/></Link></div>
                <div className={styles.icons}><Link href='https://github.com/the-day-dreamer' target='_blank'><Github/></Link></div>
                <div className={styles.icons}><Link href='https://www.linkedin.com/in/aman-raj-028802238/' target='_blank'><Linkedin/></Link></div>
                <div className={styles.icons} onClick={handleChange}>{lightMode ? <Sun/> : <Moon/>}</div>
            </div>
            </div>
        </div>
     );
}
 
export default Menu;