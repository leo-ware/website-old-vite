import { createBrowserRouter } from 'react-router-dom'

import AppInner from './layout/AppInner/AppInner'
// import Landing from './components/Landing/Landing'

import About from './pages/about.mdx'
import CV from './pages/cv/CV'
import Projects, {projectChildren} from './pages/projects/Projects'


const router = createBrowserRouter([{
    path: '/',
    element: <AppInner />,
    children: [
        {
            path: 'about',
            element: <About />
        },
        {
            path: 'cv',
            element: <CV />
        },
        {
            path: 'projects',
            element: <Projects />,
            children: projectChildren
        }
    ]
}])

export default router