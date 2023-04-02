import styles from '@/styles/Aman.module.css'
import Image from 'next/image';
import developer from '../public/developer-pic-1.png'
import Bulb from './Bulb';
import { animate, delay, motion } from 'framer-motion'
import Link from 'next/link';
import Download from './Download';
const quote ={
    initial : {
        opacity:0
    },
    animate : {
        opacity :1,
        transition:{
            delay : .7,
        }
    }
}
const Aman = () => {
    
    return ( 
        <div className={styles.home}>
            <div className={styles.homeLeft}>
                <div className={styles.imageBox}>
                    <Image src={developer} alt='developer' className={styles.developer}/>
                </div>
            </div>
            <div className={styles.homeRight}>
                <motion.div className={styles.rightTitle}
                variants={quote}
                initial = "initial"
                animate = "animate"
                >Turning Vision Into Reality With Code And Design.</motion.div>
                <div className={styles.rightText}>
                    <div className={styles.rightText1}>
                        <motion.div className={styles.rightText2}
                        variants={quote}
                        initial = "initial"
                        animate = "animate"
                        >As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.</motion.div>
                        <div className={styles.rightText3}>
                            <button className={styles.resume}><Link download={true} href='/MidSem.pdf' className={styles.link}
                            target='_blank'
                            >Resume </Link></button>
                        </div>

                    </div>
                    <motion.div className={styles.rightIcon}
                    variants={quote}
                    initial = "initial"
                    animate = "animate"
                    ><Bulb/></motion.div>
                </div>
            </div>
        </div>
     );
}
 
export default Aman;