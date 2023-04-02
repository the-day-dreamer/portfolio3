import styles from '@/styles/Skills.module.css'
import { motion } from 'framer-motion'
const Skill=({name , x , y})=>{

    return (<motion.span className={styles.skillsText2}
        whileHover={{scale : 1.05}}
        initial = {{x:0 , y:0}}
        whileInView = {{x:x , y:y}}
        transition={{duration : 1.5}}
        viewport={{once : true}}
    >
        {name}
    </motion.span>
    )
}
const Skills = () => {
    return ( 
        <div className={styles.skills}>
            <div className={styles.skillsTitle}>
                Skills
            </div>
            <div className={styles.skillsBody}>
                <motion.span className={styles.skillsText}
                whileHover={{scale : 1.05}}
                >Web</motion.span>
                <Skill name="CSS" x="-10vw" y="-10vw"/>
                <Skill name="HTML" x="10vw" y="-10vw"/>
                <Skill name="JavaScript" x="-10vw" y="10vw"/>
                <Skill name="ReactJS" x="10vw" y="10vw"/>
                <Skill name="NextJS" x="20vw" y="20vw"/>
                <Skill name="MaterialUI" x="20vw" y="-20vw"/>
                <Skill name="Figma" x="-20vw" y="20vw"/>
                <Skill name="Angular" x="-20vw" y="-20vw"/>
                <Skill name="TailwindCSS" x="-35vw" y="0vw"/>
                <Skill name="chakraUI" x="35vw" y="0vw"/>
            </div>
        </div>
     );
}
 
export default Skills;