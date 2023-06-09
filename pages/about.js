import Head from 'next/head'
import styles from '@/styles/About.module.css'
import Navbar from '@/components/Navbar';
import Experience from '@/components/Experience'
import Footer from '@/components/Footer';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import man from '../public/man.jpg'
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import { useState } from 'react';
const passion = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 1
        }
    }
}
const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null)
    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref)
    useEffect(() => {
        if (isInView) {
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0)
            }
        })
    }, [springValue, value])

    return <div className={styles.number} ref={ref}></div>
}
const About = () => {
    const [lightMode , setLightMode] = useState(true)
    const pullData = (data)=>{
    setLightMode(data)
  
  }
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={lightMode ? `${styles.about}` : `${styles.darkAbout}`}>
                <Navbar pullData={pullData}/>
                <div className={styles.aboutPage}>
                    <motion.div className={styles.aboutTitle}
                        variants={passion}
                        initial="initial"
                        animate="animate"
                    >
                        Passion Fuels Purpose!
                    </motion.div>
                    <div className={styles.biography}>
                        <div className={styles.biography1}>
                            <div className={styles.bioTitle}>BIOGRAPHY</div>
                            <div className={styles.bioBody1}>
                                Hi, I m <span>Aman</span>, a web developer and UI/UX designer with a passion for creating beautiful, functional, and user-centered digital experiences. With 4 years of experience in the field. I am always looking for new and innovative ways to bring my clients visions to life.
                            </div>
                            <div className={styles.bioBody2}>
                                I believe that design is about more than just making things look pretty – its about solving problems and creating intuitive, enjoyable experiences for users.
                            </div>
                            <div className={styles.bioBody3}>
                                Whether I m working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
                            </div>

                        </div>
                        <div className={styles.biography2}>
                            <div className={styles.imageContainer}>
                                <div className={styles.imageBox}>
                                    <Image src={man} alt='man' className={styles.image} />
                                </div>
                            </div>
                        </div>
                        <div className={styles.biography3}>
                            <div className={styles.num1}>
                                <AnimatedNumbers value={50} />
                                <div className={styles.numText}>satisfied clients</div>
                            </div>
                            <div className={styles.num1}>
                                <AnimatedNumbers value={40} />

                                <div className={styles.numText}>project completed</div>
                            </div>
                            <div className={styles.num1}>
                                <AnimatedNumbers value={4} />

                                <div className={styles.numText}>years of experience</div>
                            </div>
                        </div>
                    </div>
                </div>
                <Skills lightMode = {lightMode} setLightMode = {setLightMode}/>
                <Experience/>
                <Education/>
                <Footer />
            </main>
        </>
    );
}

export default About;