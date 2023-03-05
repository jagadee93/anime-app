import React from 'react'
import { Outlet } from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer';
const Layout = ({ children }) => {

    return (
        <div className='main-content'>
            <Header />
            <aside className='left'></aside>
            <main >{children}</main>
            <aside className='right'></aside>
            <Outlet />
            <Footer />
        </div>
    )
}


export default Layout

