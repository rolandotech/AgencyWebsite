import {useState, useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import './style.scss';
import Header from '../Header';
import NavMenu from '../NavMenu';
import Footer from '../Footer';

const Main = () => {

    return (
        <>
            <Header />
            <NavMenu />
            <div id="pageBody">
                <Outlet />
            </div>
            <Footer />
        </>
    )

}

export default Main;