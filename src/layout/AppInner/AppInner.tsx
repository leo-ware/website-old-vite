import React from "react"
import Navbar from "../../components/Navbar/Navbar"
import Grid from "../Grid/Grid"
import Content from "../Content/Content"
import { Outlet } from "react-router-dom"

const AppInner: React.FC = () => {
    return (
        <Grid header={
            <Navbar />
        }>
            <Content>
                <Outlet />
            </Content>
        </Grid>
    )
}

export default AppInner