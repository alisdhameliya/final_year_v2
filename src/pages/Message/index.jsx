import { Helmet } from "react-helmet";
// import { closeSVG } from "../../assets/images/close";
// import { Input, Img, Text, Heading } from "../../components";
import { HiMiniPaperClip } from "react-icons/hi2";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import { RiCheckDoubleFill } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import Text from '../../components/Text'
import Heading from '../../components/Heading'
import { Input } from "../../components/Input";
import Img from '../../components/Img'
import MessageRowkristin from "../../components/MessageRowkristin";
import Sidebar from "../../components/Sidebar";
import React, { Suspense, useState } from "react";

const data = [
    { kristinwatson: "Kristin Watson", wowthisis: "Wow, this is really epic", time: "18:00" },
    { kristinwatson: "Darlene Robertson", wowthisis: "Wow, this is really epic", time: "08:00" },
    { kristinwatson: "Arlene McCoy", wowthisis: "perfect!", time: "11:00" },
    { kristinwatson: "Ralph Edwards", wowthisis: "I'll be there in 2 mins", time: "11:30" },
    { kristinwatson: "Darrell Steward", wowthisis: "Haha that's terrifying", time: "13:00" },
    { kristinwatson: "Kathryn Murphy", wowthisis: "woohoooo", time: "09:30" },
    { kristinwatson: "Eleanor Pena", wowthisis: "omg, this is amazing", time: "09:00" },
    { kristinwatson: "Cody Fisher", wowthisis: "aww", time: "12:00" },
    { kristinwatson: "Wade Warren", wowthisis: "Haha oh man", time: "12:30" },
    { kristinwatson: "Theresa Webb", wowthisis: "just ideas for next time", time: "14:00" },
    { kristinwatson: "Albertus Marque", wowthisis: "Hahahaha, Impossible", time: "14:00" },
];

export default function MessagePage() {
    const [searchBarValue3, setSearchBarValue3] = useState("");


    return (
        <>
            <Helmet>
                <title>AuctiGram</title>
                <meta name="description" content="web site created using create-react-app" />
            </Helmet>
            <div className="flex w-full items-start bg-white-A700  ">
                <div className="flex items-start w-full ">
                    <Sidebar />
                    <div className="flex flex-col w-[28%] h-screen overflow-y-scroll relative">
                        <header className="flex h-[8vh] p-3 mx-auto pl-5 my-5 rounded-lg w-[80%] border-r-2 border-solid border-gray-100 items-center gap-[24px] bg-zinc-100">
                            <Input
                                color="gray_50"
                                shape="round"
                                name="search"
                                placeholder="Search chat"
                                value={searchBarValue3}
                                onChange={(e) => setSearchBarValue3(e.target.value)}
                                prefix={
                                    <Img
                                        src="images/img_contrast_gray_500.svg"
                                        alt="contrast"
                                        className="h-[24px] w-[24px] cursor-pointer"
                                    />
                                }
                                suffix={
                                    searchBarValue3?.length > 0 ? (
                                        <CloseSVG onClick={() => setSearchBarValue3("")} height={24} width={24} fillColor="#93989aff" />
                                    ) : null
                                }
                                className="m-[5px] gap-4 font-outfit tracking-[0.14px] md:w-full sm:pr-5"
                            />
                        </header>
                        <div className="  border-r-[0.5px]  h-[95vh] border-solid border-gray-100 bg-white-A700 pb-[98px] ">
                            <div className="flex flex-col items-center gap-5">
                                <div className="flex items-center justify-between gap-5 self-stretch bg-gray-900_26 p-5">
                                    <div className="ml-3 flex w-[45%] items-center justify-center gap-3.5 ">
                                        <Img
                                            src="images/img_ellipse_1018_1.png"
                                            alt="circleimage"
                                            className="h-[42px] w-[42px] rounded-[50%]"
                                        />
                                        <div className="flex flex-col items-start justify-center gap-[5px]">
                                            <Heading as="h1" className="tracking-[0.16px]">
                                                Jenny Wilson
                                            </Heading>
                                            <Text as="p" className="tracking-[0.14px] text-green-600_01">
                                                Online
                                            </Text>
                                        </div>
                                    </div>
                                    <Text size="s" as="p" className="mr-[13px] tracking-[0.12px] ">
                                        16:00
                                    </Text>
                                </div>
                                <div className="flex w-[82%] flex-col gap-[39px]">
                                    <Suspense fallback={<div>Loading feed...</div>}>
                                        {data.map((d, index) => (
                                            <MessageRowkristin {...d} key={"message" + index} />
                                        ))}
                                    </Suspense>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="Flex flex-1 flex-col gap-[50px]  bg-gray-50  h-screen overflow-y-scroll ">
                        {/* chat area section */}
                        <div className="">
                            <div className="flex items-center  border-b-[0.5px] border-solid border-gray-100 bg-white-a700 p-[26px] ">
                                <div className="flex w-full flex-col items-start justify-center gap-0.5">
                                    <Heading size="headingmd" as="h1" className="tracking-[0.18px]">
                                        Jenny Wilson
                                    </Heading>
                                    <Heading as="h2" className="tracking-[0.14px] text-sm !text-green-600">
                                        Online
                                    </Heading>
                                </div>
                                <div className="flex w-full justify-end gap-5">
                                    <Img src="images/img_contrast_gray_500.svg" alt="Contrast Icon" className="h-[24px] w-[24px]" />
                                    <BsThreeDotsVertical alt="Notification Icon" className="h-[24px] w-[24px] text-zinc-500" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[188px] ">
                            <div className="mx-8 flex flex-col items-start gap-7 ">
                                <div className="flex flex-col items-start justify-center gap-3.5 self-stretch">
                                    <div className="flex w-[56%] justify-center rounded-br-[10px] rounded-tl-[10px] rounded-tr-[10px] border border-solid border-gray-300 bg-gray-100 p-2">
                                        <Heading as="h3" className="w-full font-normal leading-[180%] tracking-[0.14px] text-gray-900_e5">
                                            <>
                                                Amateurs think about how much money they can make.
                                                <br />
                                                Professionals think about how much money they could lose.
                                            </>
                                        </Heading>
                                    </div>
                                    <Heading size="textxs" as="h4" className="tracking-[0.12px] text-gray-500">
                                        4:32 AM
                                    </Heading>
                                </div>
                                <div className="flex flex-col items-end gap-2.5 self-stretch">
                                    <div className="flex w-[84%] justify-center rounded-bl-[12px] rounded-tl-[12px] rounded-tr-[12px] bg-gray-900_01 p-3 ">
                                        <Heading
                                            as="h5"
                                            className="w-full font-normal leading-[180%] tracking-[0.14px] text-white-a700_e5"
                                        >
                                            <>
                                                The price of a commodity will never go to zero. When you invest in commodities futures,
                                                <br />
                                                you are not buying a piece of paper that says you own an intangible of the company that
                                                <br />
                                                can go bankrupt.
                                            </>
                                        </Heading>
                                    </div>
                                    <div className="flex items-center justify-end gap-2.5 self-stretch">
                                        <RiCheckDoubleFill src="images/img_frame.svg" alt="Frame Image" className="h-[24px] w-[24px]" />
                                        <Heading size="textxs" as="h6" className="tracking-[0.12px] text-gray-500">
                                            4:10 AM
                                        </Heading>
                                    </div>
                                </div>
                                <div className="flex w-[56%] justify-center rounded-br-[10px] rounded-tl-[10px] rounded-tr-[10px] border border-solid border-gray-300 bg-gray-100 p-2">
                                    <Heading as="p" className="w-full font-normal leading-[180%] tracking-[0.14px] text-gray-900_e5">
                                        <>
                                            Amateurs think about how much money they can make.
                                            <br />
                                            Professionals think about how much money they could lose.
                                        </>
                                    </Heading>
                                </div>
                                <div className="flex flex-col items-start justify-center gap-3.5 self-stretch">
                                    <div className="flex w-[88%] justify-center rounded-br-[10px] rounded-tl-[10px] rounded-tr-[10px] border border-solid border-gray-300 bg-gray-100 p-2">
                                        <Heading as="p" className="w-full font-normal leading-[180%] tracking-[0.14px] text-gray-900_e5">
                                            <>
                                                It's not always easy to do what's not popular, but that's where you make your money.
                                                <br />
                                                Buy stocks that look bad to less careful investors and hang on until their real value is recognized.
                                            </>
                                        </Heading>
                                    </div>
                                    <Heading size="textxs" as="p" className="tracking-[0.12px] text-gray-500">
                                        4:26 AM
                                    </Heading>
                                </div>
                                <div className="flex flex-col items-end gap-2.5 self-stretch">
                                    <div className="flex w-[86%] justify-center rounded-bl-[12px] rounded-tl-[12px] rounded-tr-[12px] bg-gray-900_01 p-3 ">
                                        <Heading
                                            as="p"
                                            className="w-full font-normal  leading-[180%] tracking-[0.14px] text-white-a700_e5"
                                        >
                                            <>
                                                99% of traders don't care about Ferraris and yachts. They just want to pay their bills,
                                                save a
                                                <br />
                                                little extra money, and sleep well at night. The only way to do that is to bat 70% or more.
                                                <br />
                                                Anything less, and these goals are nothing more than fantasy.
                                            </>
                                        </Heading>
                                    </div>
                                    <div className="flex items-center justify-end gap-2.5 self-stretch">
                                        <RiCheckDoubleFill src="images/img_frame.svg" alt="Frame Image One" className="h-[24px] w-[24px]" />
                                        <Heading size="textxs" as="p" className="tracking-[0.12px] text-gray-500">
                                            5:22 AM
                                        </Heading>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* message input section */}
                        <div className="relative">
                            <div className="border-t-[0.5px] border-solid border-gray-100 bg-white-a700 p-4 bottom-0 ">
                                <Input
                                    color="gray_50"
                                    size="sm"
                                    shape="round"
                                    name="Message EditText"
                                    placeholder="Write message"
                                    prefix={<HiMiniPaperClip alt="Settings" className="h-[24px] w-[24px] " />}
                                    suffix={<PiPaperPlaneRightFill alt="User" className="h-[24px] w-[24px]" />}
                                    className="gap-4 font-outfit tracking-[0.14px] "
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
