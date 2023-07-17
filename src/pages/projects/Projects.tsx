import React from "react"
import { Link, Outlet, RouteObject, matchPath, useLocation } from "react-router-dom"
import styles from "./Projects.module.css"

import projects from "./project_manifest"

export type ProjectType = {
    name: string
    description?: string
    thumbnail?: string
    element: React.ReactNode
}

export const projectPath = (proj: ProjectType): string => proj.name.toLowerCase().replace(" ", "-")
export const projectLink = (proj: ProjectType): string => `/projects/${projectPath(proj)}`

export const projectChildren: RouteObject[] = projects.map(project => ({
    path: projectPath(project),
    element: project.element
}))

const ProjectWidget: React.FC<{project: ProjectType}> = ({project}) => (
    <div className={styles.projectWidgetContainer}>
        <div className={styles.thumbnailContainer}>
            <Link to={projectLink(project)}>
                <img className={styles.thumbnail} src={project.thumbnail} />
            </Link>
        </div>
        <div className={styles.projectTextContainer}>
            <Link to={projectLink(project)} className={styles.projectLink}>
                {project.name}
            </Link>
            <div className={styles.projectDescription}>{project.description}</div>
        </div>
    </div>
)

const Projects: React.FC = () => {
    const location = useLocation()
    const match = matchPath(location.pathname, "/projects")

    if (!match) {
        return <Outlet/>
    }

    return (
        <div>
            <h1>Projects</h1>
            {projects.map((project) => (
                <ProjectWidget project={project} />
            ))}
        </div>
    )
}

export default Projects