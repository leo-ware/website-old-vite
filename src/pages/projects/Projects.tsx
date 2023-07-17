import React from "react"
import { Link, Outlet, RouteObject, matchPath, useLocation } from "react-router-dom"

import PQP from "./pqp.mdx"

type Project = {
    name: string
    description?: string
    thumbnail?: string
    element: React.ReactNode
}

const projects: Project[] = [
    {
        name: "PQP",
        element: <PQP />,
        description: "Subroutines for structural causal modeling",
    }
]

export const projectPath = (proj: Project): string => proj.name.toLowerCase().replace(" ", "-")
export const projectLink = (proj: Project): string => `/projects/${projectPath(proj)}`

export const projectChildren: RouteObject[] = projects.map(project => ({
    path: projectPath(project),
    element: project.element
}))

const ProjectWidget: React.FC<{project: Project}> = ({project}) => (
    <div>
        <Link to={projectLink(project)}>{project.name}</Link>
        <p>{project.description}</p>
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