import React from "react"
import { Link } from "react-router-dom"
import styles from "./About.module.css"

import picture from "./me-sitting.png"
import github from "./imgs/gh_bw.png"
import medium from "./imgs/md_bw.png"
import linkedin from "./imgs/li_bw.png"
import telegram from "./imgs/tg_bw.png"


const About: React.FC = () => {
    return (
        <div className={styles.main}>
            <div className={styles.box + " " + styles.boxLeft}>
                <img className={styles.picture} src={picture} />
            </div>
            <div className={styles.box + " " + styles.boxRight}>
                <h1 className={styles.title}>About Me</h1>
                <div className={styles.text}>
                    I'm Leo. I'm a 22 y/o college student studying Data Science and 
                    Statistics and Minerva University. I'm interested in causal inference,
                    computational statistics, and data visualization. Check out my projects
                    or reach out below.
                </div>
                <div className={styles.imgContainer}>
                    <Link to={"https://github.com/leo-ware"}>
                        <img className={styles.logo} src={github} />
                    </Link>
                    <Link to={"https://www.linkedin.com/in/leo-ware-8b8580b6/"}>
                        <img className={styles.logo} src={linkedin} />
                    </Link>
                    <Link to={"https://t.me/leoware"}>
                        <img className={styles.logo} src={telegram} />
                    </Link>
                    <Link to={"https://medium.com/@leoware"}>
                        <img className={styles.logo} src={medium} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default About