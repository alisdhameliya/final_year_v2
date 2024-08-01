import React from "react";
import { Helmet } from "react-helmet";
// import { Button, Text, Img, Heading } from "../../components";
import Text from '../../components/Text'
import Button from '../../components/Button'
import Heading from '../../components/Heading'
import Img from '../../components/Img'
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { GoHeartFill } from "react-icons/go";

export default function SavedPage() {
    return (
        <>
            <Helmet>
                <title>AuctiGram</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <div className="w-full bg-white-A700">
                <div className="flex items-start md:flex-col">
                    <Sidebar />
                    <div className="flex flex-1 flex-col items-center gap-[34px] md:self-stretch md:p-5">
                        <Header className="self-stretch p-5" />
                        <div className="flex w-[94%] flex-col items-start gap-7 md:w-full">
                            <Heading size="3xl" as="h1" className="tracking-[0.34px]">
                                Saved
                            </Heading>
                            <div className="flex justify-between gap-5 self-stretch md:flex-col">
                                <div className="flex w-[44%] justify-center gap-6 md:w-full sm:flex-col">
                                    <Button
                                        color="gray_100"
                                        size="6xl"
                                        variant="outline"
                                        shape="round"
                                        leftIcon={<Img src="images/img_grid_black_900.svg" alt="grid" className="h-[24px] w-[24px]" />}
                                        className="w-full flex-1 gap-2.5 font-medium tracking-[0.16px] sm:self-stretch"
                                    >
                                        Category
                                    </Button>
                                    <Button
                                        color="gray_100"
                                        size="6xl"
                                        variant="outline"
                                        shape="round"
                                        leftIcon={<Img src="images/img_settings_black_900.svg" alt="settings" className="h-[24px] w-[24px]" />}
                                        className="w-full flex-1 gap-2.5 font-medium tracking-[0.16px] sm:self-stretch"
                                    >
                                        Collection
                                    </Button>
                                    <Button
                                        color="gray_100"
                                        size="6xl"
                                        variant="outline"
                                        shape="round"
                                        leftIcon={<Img src="images/img_user_black_900.svg" alt="user" className="h-[24px] w-[24px]" />}
                                        className="min-w-[151px] gap-2.5 font-medium tracking-[0.16px]"
                                    >
                                        Price Range
                                    </Button>
                                </div>
                                <Button
                                    color="gray_100"
                                    size="6xl"
                                    variant="outline"
                                    shape="round"
                                    leftIcon={<Img src="images/img_thumbsup.svg" alt="thumbs_up" className="h-[24px] w-[24px]" />}
                                    className="min-w-[151px] gap-2.5 font-medium tracking-[0.16px]"
                                >
                                    Filter & Sort
                                </Button>
                            </div>
                            <div className="flex gap-[19px] ">
                                <div className="flex w-full flex-col items-center gap-[18px] rounded-[15px] bg-white-A700 p-1.5 shadow-xs">
                                    <div className="relative h-[140px] self-stretch md:h-auto">
                                        <Img
                                            src="images/img_rectangle_2044_9.png"
                                            alt="image"
                                            className="h-[140px] w-full rounded-[12px] object-cover"
                                        />
                                        <div className="absolute right-[8.00px] top-[8.00px] m-auto flex items-center gap-2">
                                            <Button size="xs" shape="round" className="min-w-[75px] font-medium tracking-[0.12px]   bg-gray-300  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-5 ">
                                                2h 4m 32s
                                            </Button>
                                            <Button shape="circle" className="w-[30px]  bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 ">
                                                <GoHeartFill className="text-red-600" />
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="ml-2 flex flex-col items-start justify-center gap-1.5 self-start md:ml-0">
                                        <Heading as="h2" className="tracking-[0.16px]">
                                            Diehard BATTERY-SILVER
                                        </Heading>
                                        <Text size="s" as="p" className="tracking-[0.12px]">
                                            By Ralph Edwards
                                        </Text>
                                    </div>
                                    <div className="mb-3 flex items-center justify-between gap-5 self-stretch">
                                        <div className="flex flex-col items-start gap-1">
                                            <Text size="xs" as="p" className="font-outfit tracking-[0.10px]">
                                                Current Bid
                                            </Text>
                                            <div className="flex items-center gap-1.5 self-center">
                                                <Img
                                                    src="images/img_television_gray_900_01.svg"
                                                    alt="278 eth"
                                                    className="h-[16px] w-[16px] self-start"
                                                />
                                                <Text as="p" className="tracking-[0.14px] text-black-900">
                                                    2.78 ETH
                                                </Text>
                                            </div>
                                        </div>
                                        <a href="https://www.youtube.com/embed/bv8Fxk0sz71" target="_blank">
                                            <Button
                                                color="gray_900_01"
                                                size="md"
                                                className="min-w-[88px] text-gray-200 rounded-lg font-medium tracking-[0.12px]"
                                            >
                                                Place a Bid
                                            </Button>
                                        </a>
                                    </div>
                                </div>

                                {/* Repeat the above structure for the other items as needed */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}