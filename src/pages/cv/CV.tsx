import React from "react"
import styles from "./CV.module.css"
import cv_json from "./cv.json"

const edToJob = (ed: typeof cv_json.education[0]): JobType => {
    return {
        company: ed.institution,
        location: ed.location,
        position: ed.degree + ", " + ed.major,
        start_date: ed.start_date,
        end_date: ed.end_date,
        notes: ed.notes
    }
}

const SectionHeader: React.FC<{ title: string }> = ({ title }) => {
    return (
        <div className={styles.sectionHeaderContainer}>
            {title}
        </div>
    )
}

type JobType = {
    company: string,
    location: string,
    position: string,
    start_date: string,
    end_date: string,
    notes: string[]
}

const JobWidget: React.FC<{ job: JobType }> = ({ job }) => {
    return (
        <div>
            <table className={styles.table}>
                <tr>
                    <td className={styles.company}>{job.company}</td>
                    <td className={styles.location + " " + styles.right}>{job.location}</td>
                </tr>
                <tr>
                    <td className={styles.position}>{job.position}</td>
                    <td className={styles.date + " " + styles.right}>{job.start_date + " - " + job.end_date}</td>
                </tr>
                <tr>
                    <td colSpan={2}>
                    <ul>
                        {job.notes.map((note) => (
                            <li>{note}</li>
                        ))}
                    </ul>
                    </td>
                    
                </tr>
            </table>
        </div>
    )
}

const AwardWidget: React.FC<{award: typeof cv_json.awards[0]}> = ({award}) => {
    return (
        <div>
            <table className={styles.table}>
                <tr>
                    <td className={styles.company}>{award.name}</td>
                    <td className={styles.date + " " + styles.right}>{award.date}</td>
                </tr>
                <tr>
                    <td className={styles.position}>{award.institution}</td>
                </tr>
                <tr style={{height: 15}}/>
            </table>
        </div>
    )
}

const CV: React.FC = () => {
    return (
        <div className={styles.main}>
            <h1>Resume</h1>
            <SectionHeader title="Education" />
            {cv_json.education.map((education) => (
                <JobWidget job={edToJob(education)} />
            ))}

            <SectionHeader title="Experience" />
            {cv_json.experience.map((experience) => (
                <JobWidget job={experience} />
            ))}

            <SectionHeader title="Awards" />
            {cv_json.awards.map((award) => (
                <AwardWidget award={award} />
            ))}
        </div>
    )
}

export default CV