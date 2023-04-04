import styles from '@/styles/Experience.module.css'
const Details =({position , company , companyLink , time , address , work})=>{
    return <li className={styles.list}>
        <div className={styles.position}>{position}&nbsp;<a href={companyLink} target='_blank'>@{company}</a></div>
        <span className={styles.time}>{time} | {address}</span>
        <p>{work}</p>
    </li>
}
const Skills = () => {
    return ( 
        <div className={styles.experience}>
            <div className={styles.experienceTitle}>
                Experience
            </div>
            <div className={styles.experienceDetails}>
                <div className={styles.line}></div>
                <ul>
                    <Details
                    position={"Software Engineer"}
                    company={"google"}
                    companyLink={"https://www.google.com/"}
                    time={"2022-Present"}
                    address={" Mountain View, CA"}
                    work={"Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."}
                    />
                    <Details
                    position={"Intern"}
                    company={"facebook"}
                    companyLink={"https://www.facebook.com/"}
                    time={"summer intern"}
                    address={" Menlo Park, CA"}
                    work={"Worked on a team responsible for developing a new mobile app feature that allowed users to create and share short-form video content, including designing and implementing a new user interface and developing the backend infrastructure to support the feature."}
                    />
                    <Details
                    position={"Software Developer"}
                    company={"amazon"}
                    companyLink={"https://www.amazon.com/"}
                    time={"2020-2021"}
                    address={" Redmond , WA"}
                    work={"Worked on a team responsible for developing Amazon's mobile app, including implementing new features such as product recommendations and user reviews, and optimizing the app's performance and reliability."}
                    />
                    <Details
                    position={"Software Developer"}
                    company={"Microsoft"}
                    companyLink={"https://www.microsoft.com/"}
                    time={"Summer 2019"}
                    address={" Seattle , WA"}
                    work={"Worked on a team responsible for developing new features for Microsoft's Windows operating system, including implementing a new user interface for a system settings panel and optimizing the performance of a core system component.."}
                    />
                    <Details
                    position={"Teaching Assistant MIT"}
                    company={"MIT"}
                    companyLink={"https://www.mit.com/"}
                    time={"Fall 2018"}
                    address={"Massachusetts Ave, Cambridge, MA."}
                    work={"Assisted in teaching a course on computer programming, held office hours to help students with assignments, and graded exams and assignments."}
                    />
                </ul>
            </div>
        </div>
     );
}
 
export default Skills;