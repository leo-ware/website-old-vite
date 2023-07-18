import React from "react"
import Grid from "../Grid/Grid"
import Content from "../Content/Content"
import { Outlet } from "react-router-dom"

const AppInner: React.FC = () => {
    return (
        <Grid>
            <Content>
                <Outlet />
            </Content>
        </Grid>
    )
}

export default AppInner