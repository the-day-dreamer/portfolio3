import styles from '@/styles/Education.module.css'
const Details = ({degree , time , address , work})=>{
    return <li className={styles.list}>
        <div className={styles.degree}>{degree}</div>
        <span className={styles.time}>{time} | {address}</span>
        <p className={styles.work}>{work}</p>
    </li>
}
const Education = () => {
    return ( 
        <div className={styles.education}>
            <div className={styles.educationTitle}>
                Education
            </div>
            <div className={styles.educationDetails}>
                <div className={styles.line}></div>
                <ul>
                    <Details
                    degree={"Bachelor Of Science In Computer Science"}
                    time={"2016-2020"}
                    address={"Massachusetts Institute Of Technology (MIT)"}
                    work={"Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."}
                    />
                    <Details
                    degree={"Master Of Computer Science"}
                    time={"2020-2022"}
                    address={"Stanford University"}
                    work={"Completed a master's project on deep learning, developing a new neural network architecture for natural language understanding."}
                    />
                    <Details
                    degree={"Online Coursework"}
                    time={"2016-2020"}
                    address={"Coursera And EdX"}
                    work={"Completed coursework in advanced topics such as Reinforcement Learning, Computer Vision, and Machine Learning Engineering."}
                    />
                </ul>
            </div>
        </div>
     );
}
 
export default Education;