import React from 'react'
import Img from '../Img';
import Text from '../Text'
import Heading from '../Heading';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import logo from "../../assets/images"
import { RiDashboardFill, RiAuctionLine } from "react-icons/ri";
import { TbMessageDots } from "react-icons/tb";
import { LuSettings } from "react-icons/lu";
import { GoHeart } from "react-icons/go";
import { CiShop } from "react-icons/ci";
import { AiFillAppstore, AiOutlineAppstore } from "react-icons/ai";
import { IoWalletOutline } from "react-icons/io5";
import { BsClockHistory } from "react-icons/bs";
import { Link } from 'react-router-dom';


function Sidebar1({ ...props }) {

    const [collapsed, setCollapsed] = React.useState('false');

    return (
        <Sidebar
            {...props}
            width='290px !important'
            collapsed={collapsed}
            className={`${props.className} flex flex-col h-screen top-0  pl-[16px] pt-[16px] pr-[5px] border-gray-100 border-r border-solid bg-gray-50 Isticky overflow-auto md:hidden"`}
        >
            <Img src="images/img_logo.png" alt="logo" className="ml-4 mt-4 h-[56px] w-[70%] object-cover md:ml-3" />
            <Text size="s" className=" ml-4 mt-[50px] tracking-[0.12px] [text-black-900 md:ml-3">
                GENERAL
            </Text>
            <Menu
                menuItemStyles={{
                    button: {
                        padding: "0px 100px 0px 4px",
                        color: "#93989a",
                        fontWeight: 400,
                        fontSize: "17px",
                        borderRadius: "10px",
                        [`&: hover, &.ps-active `]: { color: "#15161d", backgroundColor: "#15161d0f !important" },
                    },
                }}
                className="mb-[31px] mt-[13px] -ml-[20px] flex  flex-col items-center self-stretch "
            >
                <div className="flex flex-col gap-1">
                    <Link to="/">
                        <MenuItem icon={< RiDashboardFill className=' text-2xl' />}>
                            Dashboard
                        </MenuItem>
                    </Link>
                    <Link to="/message">
                        <MenuItem icon={<TbMessageDots className=' text-2xl' />}>
                            Message
                        </MenuItem>
                    </Link>
                    <Link to='/settings'>
                        <MenuItem icon={<LuSettings className=' text-2xl' />}>
                            Settings
                        </MenuItem>
                    </Link>
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch pt-7 sm:pt-5">
                    <Text size="s" as="p" className="mt-2  tracking-[0.12px] !text-gray-900 md:ml-3 ">
                        MARKETPLACE
                    </Text>
                    <Link to="/market">
                        <MenuItem icon={<CiShop className=' text-2xl' />}>
                            Market
                        </MenuItem>
                    </Link>
                    <Link to='/activebid'>
                        <MenuItem
                            icon={<RiAuctionLine className=' text-2xl' />}>
                            Active Bid
                        </MenuItem>
                    </Link>
                    <Link to='/saved'>
                        <MenuItem icon={<GoHeart className=' text-2xl' />}>
                            Saved
                        </MenuItem>
                    </Link>
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch pt-7 sm:pt-5">
                    <Text size="s" as="p" className="mt-2  tracking-[0.12px] !text-gray-900 md:ml-3 ">
                        MY PROFILE
                    </Text>
                    <MenuItem icon={<AiOutlineAppstore className=' text-2xl' />}>
                        Collection
                    </MenuItem>
                    <MenuItem
                        icon={<IoWalletOutline className=' text-2xl' />}>
                        Wallet
                    </MenuItem>
                    <MenuItem icon={<BsClockHistory className=' text-2xl' />}>
                        History
                    </MenuItem>
                </div>
                <div className="mt-[100px] flex flex-col items-center rounded-[25px] bg-white-A700 p-[13px] shadow-sm">
                    {/* <Img src="images/img_frame.svg" alt="image" className="h-[24px] w-[24px]" /> */}
                </div>
                <Heading size="md" as="h6" className="mt-4 tracking-[0.18px] ! text-white-A700">
                    Help Center
                </Heading>
                <div className="flex flex-col items-center gap-2 self-stretch pt-2.5">
                    <Text
                        className="w-[80%] text-center !font-normal leading-[180%] tracking-[0.14px] !text-gray-400 md:w-full">
                        <>
                            Having trouble in Enefti?
                            <br />
                            Please contact us for more question
                        </>
                    </Text>
                    <MenuItem>Go To Help Center</MenuItem>
                </div>
            </Menu >
        </Sidebar >

        // </Sidebar >

    )
}

export default Sidebar1