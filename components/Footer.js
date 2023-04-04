import styles from '@/styles/Footer.module.css'
const Footer = ({lightMode , setLightMode}) => {
    return ( 
        <div className={lightMode ? `${styles.footer}` : `${styles.darkFooter}`}>
            <div className={styles.footerText}>2023&#169;all right reserved</div>
            <div className={styles.footerText}>built with ❤ by Aman</div>
        </div>
     );
}
 
export default Footer;