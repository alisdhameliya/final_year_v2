import React from "react";
import { useRoutes } from "react-router-dom";
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
// import MyProfilePreview from "pages/MyProfilePreview";
// import MyProfileCollection from "pages/MyProfileCollection";
// import MyProfileWallet from "./pages/MyProfileWallet";
// import MyProfileHistory from "pages/MyProfileHistory";

const ProjectRoutes = () => {
    let element = useRoutes([
        { path: "/AuctiGram-dashboard", element: <Home /> },
        { path: "*", element: <NotFound /> },
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
