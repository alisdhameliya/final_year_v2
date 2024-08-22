import React, { useContext } from "react";
import { useNavigate, useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Message from "./pages/Message";
import Settings from "./pages/Settings";
import Market from "./pages/Market";
import MarketDetail from "./pages/MarketDetail";
// import OtherUserProfile from "pages/OtherUserProfile";
import ActiveBid from "./pages/ActiveBid";
import Saved from "./pages/Saved";
import Login from "./pages/Login";
// import MyProfilePreview from "pages/MyProfilePreview";
// import MyProfileCollection from "pages/MyProfileCollection";
// import MyProfileWallet from "./pages/MyProfileWallet";
// import MyProfileHistory from "pages/MyProfileHistory";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './config/firebase';
import { AppContext } from "./context/AppContext";
// import loadUserData

const ProjectRoutes = () => {

    const navigate = useNavigate();

    const { loadUserData } = useContext(AppContext);

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                navigate('/');
                console.log(user);

                await loadUserData(user.uid);
            } else {
                navigate('/login');
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        })
    }, []);

    let element = useRoutes([
        { path: "/AuctiGram-dashboard", element: <Home /> },
        { path: "*", element: <NotFound /> },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/",
            element: <Dashboard />,
        },
        {
            path: "message",
            element: <Message />,
        },
        {
            path: "settings",
            element: <Settings />,
        },
        {
            path: "market",
            element: <Market />,
        },
        {
            path: "marketdetail",
            element: <MarketDetail />,
        },
        // {
        //     path: "otheruserprofile",
        //     element: <OtherUserProfile />,
        // },
        {
            path: "activebid",
            element: <ActiveBid />,
        },
        {
            path: "saved",
            element: <Saved />,
        },
        // {
        //     path: "myprofilepreview",
        //     element: <MyProfilePreview />,
        // },
        // {
        //     path: "myprofilecollection",
        //     element: <MyProfileCollection />,
        // },
        // {
        //     path: "myprofilewallet",
        //     element: <MyProfileWallet />,
        // },
        // {
        //     path: "myprofilehistory",
        //     element: <MyProfileHistory />,
        // },
    ]);

    return element;
};

export default ProjectRoutes;
