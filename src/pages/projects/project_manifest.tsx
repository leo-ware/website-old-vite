import {ProjectType} from "./Projects"

import PQP from "./pqp/pqp.mdx"
import PQPLogo from "./pqp/pqp_logo.png"

// edit this list to add new projects
const projects: ProjectType[] = [
    {
        name: "PQP",
        element: <PQP />,
        thumbnail: PQPLogo,
        description: "Subroutines for structural causal modeling",
    }
]

export default projects