import React from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
// import { Text, Button, Img, Switch, Input, TextArea, Heading } from "../../components";
import Text from '../../components/Text';
import Img from "../../components/Img";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import TextArea from '../../components/TextArea';
import { Input } from "../../components/Input";
import ItemSoldNotification from "../../components/ItemSoldNotification";
// import Switch from "../../components/Switch";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { CgProfile } from "react-icons/cg";
import { IoMailOutline } from "react-icons/io5"; import { IoCheckmarkCircle } from "react-icons/io5";
import { ImSphere } from "react-icons/im";
import { IoLinkOutline } from "react-icons/io5";
import { LuUploadCloud } from "react-icons/lu";

const notificationSettingsList = [
    { itemSoldText: "Item Sold", purchaseDescription: "When someone purchased one of your items" },
    { itemSoldText: "Item Sold", purchaseDescription: "When someone purchased one of your items" },
    {
        itemSoldText: "Owned Item Updates",
        purchaseDescription: "When a significant update occurs for one of the items you have purchased on Enefthy",
    },
    { itemSoldText: "Item Sold", purchaseDescription: "When someone purchased one of your items" },
];

export default function SettingsPage() {
    const [image, setImage] = useState(false)
    return (
        <>
            <Helmet>
                <title>AuctiGram</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <div className="flex items-start w-full bg-white-A700 h-screen">
                <Sidebar userImage={image} />
                <div className="mb-[34px] flex flex-1 flex-col self-center gap-[34px] h-screen Isticky overflow-auto">
                    <Header className="mt-4" />
                    <div className="flex flex-col gap-[30px] mx-[34px]">
                        <div className="flex items-center justify-between gap-5 ">
                            <div className="flex flex-col items-start justify-center gap-2.5">
                                <Heading size="xl" as="h1">
                                    General Settings
                                </Heading>
                                <Heading as="h2" className="tracking-[0.14px] !text-gray-500">
                                    Update your photo and personal details here.
                                </Heading>
                            </div>
                            <div className="flex flex-1 w-[42%] items-center justify-end ">
                                <Text as="p" className="mb-[11px] self-end tracking-[0.14px] !text-black-900">
                                    Every change automatically saved
                                </Text>
                                <div className="flex  gap-3 ">
                                    <Button
                                        color="gray_900_01"
                                        size="3xl"
                                        className="w-full text-white-a700 rounded-lg font-medium tracking-[0.14px] "
                                    >
                                        Preview
                                    </Button>
                                    <Button
                                        color="gray_100"
                                        size="3xl"
                                        className="w-full rounded-lg font-medium tracking-[0.14px] "
                                    >
                                        Cancel
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start gap-[34px] md:flex-col">
                            <div className="flex flex-1 flex-col gap-[30px] self-center md:self-stretch md:p-5">
                                {/* personal information section */}
                                <div className="flex flex-col ">
                                    <div className="flex flex-col gap-[14px] rounded border-[0.75px] border-solid border-gray-108 bg-white-a700 py-6 shadow-xs sm:py-5">
                                        <div className="flex flex-col items-start gap-6">
                                            <Heading size="textlg" as="h4" className="ml-6 tracking-[0.18px] md:ml-0">
                                                Personal Information
                                            </Heading>
                                            <div className="h-[1.5px] w-full self-stretch bg-gray-100" />
                                        </div>
                                        <div className="mx-6 flex flex-col gap-6 md:mx-0">
                                            <div className="flex gap-6 md:flex-col">
                                                <div className="flex w-full flex-col items-start justify-center gap-3">
                                                    <Heading size="textmd" as="h5" className="tracking-[0.16px]">
                                                        <span className="text-black-900">First Name</span>
                                                        <span className="text-red-600">*</span>
                                                    </Heading>
                                                    <Input
                                                        color="gray_400"
                                                        variant="outline"
                                                        name="First Name Input"
                                                        placeholder={'Jhon'}
                                                        prefix={<CgProfile alt="Lock" className="h-[24px] w-[24px]" />}
                                                        className="gap-3 self-stretch rounded-lg tracking-[0.14px] pl-[10px]"
                                                    />
                                                </div>
                                                <div className="flex w-full flex-col items-start justify-center gap-3">
                                                    <Heading size="textmd" as="h6" className="tracking-[0.16px]">
                                                        <span className="text-black-900">Last Name</span>
                                                        <span className="text-red-600">*</span>
                                                    </Heading>
                                                    <Input
                                                        color="gray_400"
                                                        variant="outline"
                                                        name="Last Name Input"
                                                        placeholder={'Doe'}
                                                        className="self-stretch rounded-lg tracking-[0.14px] pl-2"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-start justify-center gap-3">
                                                <Heading size="textmd" as="p" className="tracking-[0.16px]">
                                                    <span className="text-black-900">Email Address</span>
                                                    <span className="text-red-600">*</span>
                                                </Heading>
                                                <Input
                                                    color="gray_400"
                                                    variant="outline"
                                                    type="email"
                                                    name="Email Input"
                                                    placeholder={`user@mail.com`}
                                                    prefix={<IoMailOutline src="images/img_checkmark_gray_500.svg" alt="Checkmark" className="h-[24px] w-[24px]" />}
                                                    suffix={<IoCheckmarkCircle src="images/img_checkmark_green_600_01.svg" alt="Checkmark" className="h-[24px] w-[24px] mr-[-20px]" />}
                                                    className="gap-3 self-stretch rounded-lg tracking-[0.14px] pl-3"
                                                />
                                            </div>
                                            <div className="flex flex-col items-start justify-center gap-3">
                                                <Heading size="textmd" as="p" className="tracking-[0.16px]">
                                                    Username
                                                </Heading>
                                                <div className="flex justify-center self-stretch rounded-lg border border-solid border-gray-400 p-3">
                                                    <div className="flex flex-1 items-start gap-3">
                                                        <div className="flex items-center gap-3 self-center">
                                                            <IoLinkOutline src="images/img_arrow_up.svg" alt="Arrow Up Icon" className="h-[24px] w-[24px]" />
                                                            <Heading as="p" className="self-end font-normal tracking-[0.14px] text-gray-500">
                                                                enefty.com/
                                                            </Heading>
                                                            <div className="h-full w-px bg-gray-300" />
                                                        </div>
                                                        <Heading as="p" className="!font-normal tracking-[0.14px]">

                                                        </Heading>
                                                    </div>
                                                    <IoCheckmarkCircle src="images/img_checkmark_green_600_01.svg" alt="Checkmark Icon" className="h-[24px] w-[24px]" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-start justify-center gap-2.5">
                                                <Heading size="textmd" as="p" className="tracking-[0.16px]">
                                                    Biography
                                                </Heading>
                                                <TextArea
                                                    shape="round"
                                                    name="Biography Input"
                                                    placeholder={'Dedicated to create amazing art exhibition information. Please check the link below:'}
                                                    className="self-stretch border-gray-400 tracking-[0.14px] text-black-900 "
                                                />
                                            </div>
                                            <div className="flex flex-col items-start justify-center gap-3">
                                                <Heading size="textmd" as="p" className="tracking-[0.16px]">
                                                    Website
                                                </Heading>
                                                <Input
                                                    color="gray_400"
                                                    variant="outline"
                                                    name="Website Input"
                                                    placeholder={'xyz.com'}
                                                    prefix={<ImSphere alt="Globe" className="h-[24px] w-[24px]" />}
                                                    className="gap-3 self-stretch rounded-lg tracking-[0.14px] pl-3"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* notification settings section */}
                                <div className="flex flex-col gap-8 rounded-[14px] border-[0.75px] border-solid border-gray-100 bg-white-a700 py-[26px] shadow-xs ">
                                    <div className="flex flex-col items-start gap-[22px]">
                                        <Heading size="textlg" as="p" className="ml-6 tracking-[0.18px] md:ml-0">
                                            Notification Settings
                                        </Heading>
                                        <div className="h-[1.5px] w-full self-stretch bg-gray-100" />
                                    </div>
                                    <div className="mx-6 flex flex-col gap-[26px] md:mx-0">
                                        {/* <Suspense fallback={<div>Loading feed...</div>}>
                                            {notificationSettingsList.map((settings, index) => (
                                                <ItemSoldNotification key={`settings${index}`} {...settings} />
                                            ))}
                                        </Suspense> */}
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-[32%] flex-col gap-[30px] ">
                                <div className="flex flex-col gap-8 rounded-[14px] border-[0.75px] border-solid border-gray-100 bg-white-a700 py-6 shadow-xs sm:py-5">
                                    {/* profile photo section */}
                                    <div className="flex flex-col items-start gap-6">
                                        <Heading size="textlg" as="p" className="ml-6 tracking-[0.18px] md:ml-0">
                                            Your Photo
                                        </Heading>
                                        <div className="h-[1.5px] w-full self-stretch bg-gray-100" />
                                    </div>
                                    <div className="mx-6 flex flex-col gap-6 md:mx-0">
                                        <div className="flex items-center gap-4">
                                            <Img
                                                src={image ? URL.createObjectURL(image) : "/img_ellipse_1020.png"}
                                                alt="Profile Image"
                                                className="h-[64px] w-[64px] rounded-[32px] object-cover"
                                            />
                                            <div className="flex flex-1 flex-col items-start justify-center gap-2">
                                                <Heading size="textmd" as="p" className="tracking-[0.16px]">
                                                    Edit your photo
                                                </Heading>
                                                <div className="flex flex-wrap gap-2.5 self-stretch">
                                                    <Heading as="p" className="font-outfit font-normal tracking-[0.14px] text-gray-500">
                                                        Delete
                                                    </Heading>
                                                    <Heading as="p" className="font-outfit font-normal tracking-[0.14px] text-red-600">
                                                        Update

                                                    </Heading>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center gap-4 rounded-[14px] border-[0.75px] border-dashed border-gray-600 bg-white-a700 p-3.5 relative">
                                            <input type="file" onChange={(e) => setImage(e.target.files[0])} className="opacity-0 bg-red-50 absolute h-full w-full" accept=" .JPG, .JPEG, .png, .PNG  " />
                                            <Button color="gray_50" size="5xl" shape="circle" className="w-[48px] rounded-[24px] ">

                                                <LuUploadCloud className="  text-xl text-zinc-400" />

                                            </Button>
                                            <div className="flex w-[80%] flex-col items-center gap-2">
                                                <Heading as="p" className="tracking-[0.14px] text-gray-900_01 text-sm">
                                                    Click to upload or drag and drop
                                                </Heading>
                                                <Heading
                                                    size="textxs"
                                                    as="p"
                                                    className="text-center leading-[130%] tracking-[0.12px] text-gray-500 text-sm"
                                                >
                                                    <>
                                                        PNG, JPG, or GIF
                                                        <br />
                                                        Max 20Mb
                                                    </>
                                                </Heading>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Social links section */}
                                <div className="flex flex-col gap-[30px] rounded-[14px] border-[0.75px] border-solid border-gray-100 bg-white-a700 py-[22px] shadow-xs ">
                                    <div className="flex flex-col items-start gap-6">
                                        <Heading size="textlg" as="p" className="ml-6 tracking-[0.18px] ">
                                            Social Linked
                                        </Heading>
                                        <div className="h-[1.5px] w-full self-stretch bg-gray-100" />
                                    </div>
                                    <div className="mx-6 flex flex-col gap-3 md:mx-0">
                                        <div className="flex items-center justify-between gap-5">
                                            <Img
                                                src="images/google logo.png"
                                                alt="Settings Icon"
                                                className=" w-[30%]"
                                            />
                                            <Button
                                                color="green_600_01"
                                                size="md"
                                                className="min-w-[96px] rounded-lg font-medium tracking-[0.14px] text-white-a700"
                                            >
                                                Connected
                                            </Button>
                                        </div>
                                        <div className="flex flex-col items-start gap-2">
                                            <Heading size="textmd" as="p" className="tracking-[0.16px]">
                                                Edit your photo
                                            </Heading>
                                            <Heading as="p" className="font-light text-sm leading-[120%] tracking-[0.14px] text-gray-500">
                                                <>
                                                    Use Google to sign in to your account.
                                                    <br />Click here to learn more.
                                                </>
                                            </Heading>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}