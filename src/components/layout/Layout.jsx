import React from 'react'
import { Outlet } from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children }) => {

    return (
        <div className='main-content'>
            <Header />

            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark" />
            <aside className='left'></aside>
            <main >

                {children}
            </main>

            <aside className='right'></aside>
            <Outlet />
            <Footer />
        </div >
    )
}


export default Layout

