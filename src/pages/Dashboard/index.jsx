import { Helmet } from "react-helmet";
import Text from "../../components/Text"; import Img from "../../components/Img"; import Heading from "../../components/Heading"; import Button from "../../components/Button";
import { Input } from "../../components/Input";
import DashboardProductCard from "../../components/DashboardProductcard";
import { ReactTable } from "../../components/ReactTable";
import Sidebar from "../../components/Sidebar";
import { createColumnHelper } from "@tanstack/react-table";
import React, { Suspense } from "react";

import Person from "../../components/Person";

const data = [
    {
        image: "images/img_rectangle_2044.png",
        p2h4m32s: "2h 4m 32s",
        theunfortable: "The Unfortable Facer",
        bybane: "By Bane Riccardo",
        currentbid: "Current Bid",
        ethcounter: "18.99 ETH",
        placeABid: "Place a Bid",
    },
    {
        image: "images/img_rectangle_2044_140x222.png",
        p2h4m32s: "2h 4m 32s",
        theunfortable: "Mad Ballot Holder",
        bybane: "By Angelina Cruzz",
        currentbid: "Current Bid",
        ethcounter: "4.32 ETH",
        placeABid: "Place a Bid",
    },
    {
        image: "images/img_rectangle_2044_1.png",
        p2h4m32s: "2h 4m 32s",
        theunfortable: "Pile of Many Plates",
        bybane: "By Ralphi Arness",
        currentbid: "Current Bid",
        ethcounter: "4.32 ETH",
        placeABid: "Place a Bid",
    },
];

const demoData = [
    {
        src: "images/img_ellipse_1018_1.png",
        alt: "circleimage1",
        name: "Doodles #2761",
        text: "From Murakami",
        price: "4.4 ETH"
    },
    {
        src: "images/img_ellipse_1018_2.png",
        alt: "circleimage2",
        name: "Peachy Puch#22",
        text: "From Mindblowonstudio",
        price: "5.62 ETH"
    },
    {
        src: "images/img_ellipse_1018_3.png",
        alt: "circleimage3",
        name: "Gemmy #3723",
        text: "From GemmySolana",
        price: "6.19 ETH"
    },
    {
        src: "images/img_ellipse_1018_4.png",
        alt: "circleimage4",
        name: "Art Piece #1018",
        text: "From Art Studio",
        price: "3.75 ETH"
    },
    {
        src: "images/img_ellipse_1018_5.png",
        alt: "circleimage5",
        name: "Digital Artwork #42",
        text: "From Digital Artist",
        price: "2.99 ETH"
    }
];

const tableData = [
    { collectionone: "Doodle Lucu", volume: "14.32", h: "+ 20,4%", floorprice: "2.3", owners: "2.2K", items: "18" },
    { collectionone: "Kimawi Genesis", volume: "6.11", h: "- 18,2%", floorprice: "12.52", owners: "1.9K", items: "21" },
];

export default function DashboardPage() {
    const [searchBarValue1, setSearchBarValue1] = React.useState("");
    const tableColumns = React.useMemo(() => {
        const tableColumnHelper = createColumnHelper();
        return [
            tableColumnHelper.accessor("collectionone", {
                cell: (info) => (
                    <div className="flex items-center   gap-3.5">
                        <Img src="images/img_ellipse_1018.png" alt="circleImage" className="h-[42px] w-[42px] rounded-[50%]" />
                        <div className="flex flex-col items-start justify-center  gap-1.5">
                            <Heading as="h4" className="tracking-[0.16px]">
                                {info?.getValue?.()}
                            </Heading>
                            <Text size="s" as="p" className="tracking-[0.12px]">
                                By Doodles
                            </Text>
                        </div>
                    </div>
                ),
                header: (info) => (
                    <Text size="s" as="p" className="p-px tracking-[0.12px]">
                        Collection
                    </Text>
                ),
                meta: { width: "255px" },
            }),
            tableColumnHelper.accessor("volume", {
                cell: (info) => (
                    <div className="flex items-center ">
                        <Img src="images/img_television_gray_900_01.svg" alt="television" className="h-[16px] w-[16px]" />
                        <Text as="p" className="tracking-[0.14px] text-black-900">
                            {info?.getValue?.()}
                        </Text>
                    </div>
                ),
                header: (info) => (
                    <Text size="s" as="p" className="p-px tracking-[0.12px]">
                        Volume
                    </Text>
                ),
                meta: { width: "111px" },
            }),
            tableColumnHelper.accessor("h", {
                cell: (info) => (
                    <Text as="p" className="font-outfit  tracking-[0.14px] !text-green-600_01">
                        {info.getValue()}
                    </Text>
                ),
                header: (info) => (
                    <Text size="s" as="p" className="p-px tracking-[0.12px]">
                        24h %
                    </Text>
                ),
                meta: { width: "101px" },
            }),
            tableColumnHelper.accessor("floorprice", {
                cell: (info) => (
                    <div className="flex items-center">
                        <Img src="images/img_television_gray_900_01.svg" alt="television" className="h-[16px] w-[16px]" />
                        <Text as="p" className="h-[17px] w-[18px] tracking-[0.14px] text-black-900">
                            {info.getValue()}
                        </Text>
                    </div>
                ),
                header: (info) => (
                    <Text size="s" as="p" className="p-px tracking-[0.12px]">
                        Floor Price
                    </Text>
                ),
                meta: { width: "126px" },
            }),
            tableColumnHelper.accessor("owners", {
                cell: (info) => (
                    <Text as="p" className="tracking-[0.14px] !text-black-900">
                        {info.getValue()}
                    </Text>
                ),
                header: (info) => (
                    <Text size="s" as="p" className="p-px tracking-[0.12px]">
                        Owners
                    </Text>
                ),
                meta: { width: "112px" },
            }),
            tableColumnHelper.accessor("items", {
                cell: (info) => (
                    <Text as="p" className="tracking-[0.14px] !text-black-900">
                        {info.getValue()}
                    </Text>
                ),
                header: (info) => (
                    <Text size="s" as="p" className="p-px tracking-[0.12px]">
                        Items
                    </Text>
                ),
                meta: { width: "35px" },
            }),
        ];
    }, []);

    return (
        <>
            <Helmet>
                <title>AuctiGram</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <div className="w-full bg-white-A700">
                <div className="flex ">
                    <Sidebar />
                    <div className="flex flex-1 flex-col h-screen Isticky overflow-auto">
                        <header className="flex items-center justify-between gap-5 border-[0.5px] border-solid border-gray-100 bg-white-A700 p-[34px] ">
                            <Input
                                shape="round"
                                name="search"
                                placeholder={`Search items, collections, and users`}
                                value={searchBarValue1}
                                onChange={(e) => setSearchBarValue1(e.target.value)}
                                prefix={
                                    <Img
                                        src="images/img_contrast_gray_500.svg"
                                        alt="contrast"
                                        className="h-[24px] w-[24px] cursor-pointer ml-4"
                                    />
                                }
                                suffix={
                                    searchBarValue1?.length > 0 ? (
                                        <CloseSVG onClick={() => setSearchBarValue1("")} height={24} width={24} fillColor="#93989aff" />
                                    ) : null
                                }
                                className="w-[44%] gap-4 border border-solid border-gray-300 font-outfit tracking-[0.14px] text-gray-500 "
                            />
                            <div className="flex w-[31%] justify-between gap-5 ">
                                <Button
                                    color="gray_100"
                                    size="6xl"
                                    variant="outline"
                                    leftIcon={
                                        <Img src="images/img_television_gray_900_01.svg" alt="television" className="h-[24px] w-[24px]" />
                                    }
                                    className="min-w-[137px] gap-2.5 rounded-[10px] font-medium tracking-[0.16px]"
                                >
                                    3,421 ETH
                                </Button>
                                <a href="#">
                                    <Button
                                        color="gray_100"
                                        size="5xl"
                                        variant="outline"
                                        shape="circle"
                                        className="w-[52px] !rounded-[26px]"
                                    >
                                        <Img src="images/img_icon.svg" alt="icon" />
                                    </Button>
                                </a>
                                <div className="flex w-[26%] items-center justify-center gap-3">
                                    <Img
                                        src="images/img_ellipse_1020.png"
                                        alt="circleimage"
                                        className="h-[52px] w-[52px] rounded-[50%]"
                                    />
                                    <a href="#">
                                        <Img src="images/img_checkmark.svg" alt="checkmark" className="h-[24px] w-[24px]" />
                                    </a>
                                </div>
                            </div>
                        </header>
                        <div className="flex w-[100%] pl-3 gap-[14px] ">
                            <div className="flex flex-1 flex-col gap-[50px] mt-6 ">
                                <div className="h-[230px] rounded-[15px] bg-[url(./images/img_group_33913.png)] bg-cover  bg-no-repeat ">
                                    <div className="flex h-full rounded-[15px]   bg-custom-gradient">
                                        <div className="p-10  flex-col items-start gap-[33px]">
                                            <div className="flex flex-col items-start gap-3.5">
                                                <Heading size="2xl" as="h1" className="tracking-[0.32px] text-white-a700 font-semibold text-3xl ">
                                                    Create and Sell Extraordinary ACCOUNTs
                                                </Heading>
                                                <Text as="p" className=" tracking-[0.14px] text-white-a700">
                                                    The world's first and largest digital marketplace for Social media account auctions
                                                </Text>
                                            </div>
                                            <div className="flex mt-8 gap-5">
                                                <Button
                                                    color="white_A700"
                                                    size="3xl"
                                                    className=" bg-white-a700 text-sm min-w-[120px] rounded-lg font-semibold tracking-[0.14px]"
                                                >
                                                    Explore More
                                                </Button>
                                                <Button
                                                    color="white_A700"
                                                    size="3xl"
                                                    variant="outline"
                                                    className="min-w-[120px] text-zinc-50 text-sm rounded-lg font-semibold tracking-[0.14px]"
                                                >
                                                    Sell Artwork
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-[18px]">
                                    <div className="flex flex-wrap items-start justify-between gap-5">
                                        <Heading size="xl" as="h2">
                                            Trending Auction
                                        </Heading>
                                        <a href="#">
                                            <Text as="p" className="tracking-[0.14px] !text-gray-900_01">
                                                View All
                                            </Text>
                                        </a>
                                    </div>
                                    <div className="flex gap-[19px] ">
                                        <Suspense fallback={<div>Loading feed...</div>}>
                                            {data.map((d, index) => (
                                                <DashboardProductCard {...d} key={`productlist-${index}`} />
                                            ))}
                                        </Suspense>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-[18px]">
                                    <div className="flex flex-wrap items-start justify-between gap-5">
                                        <Heading size="xl" as="h3">
                                            Top Collection
                                        </Heading>
                                        <a href="#">
                                            <Text as="p" className=" ">
                                                View All
                                            </Text>
                                        </a>
                                    </div>
                                    <ReactTable
                                        size="xs"
                                        bodyProps={{ className: "" }}
                                        headerProps={{ className: "flex-wrap" }}
                                        rowDataProps={{ className: "sm:flex-col" }}
                                        columns={tableColumns}
                                        data={tableData}
                                    />
                                </div>
                            </div>
                            <div className="flex w-[31%] flex-col gap-[42px] border-[0.5px] border-solid border-gray-100 bg-white-A700 p-[26px] ">
                                <div className="mt-3.5 flex flex-col gap-5">
                                    <div className="flex flex-wrap items-center justify-between gap-5">
                                        <Heading size="md" as="h6">
                                            Featured Creators
                                        </Heading>
                                        <a href="#" className="self-start">
                                            <Text as="p" className="">
                                                See All
                                            </Text>
                                        </a>
                                    </div>
                                    <div className="flex flex-col items-center gap-[11px] rounded-[15px] bg-white-A700 p-1.5 shadow-md">
                                        <div className="self-stretch">
                                            <div className="flex flex-col items-center">
                                                <img
                                                    src="images/img_rectangle_2043.png"
                                                    alt="image"
                                                    className="h-[120px] w-full rounded-[12px] object-cover "
                                                />
                                                <img
                                                    src="images/img_ellipse_1019.png"
                                                    alt="circleimage"
                                                    className="relative mt-[-26px] h-[52px] w-[52px] rounded-[50%]"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between gap-5 self-stretch">
                                            <div className="flex flex-col items-start justify-center gap-1">
                                                <div className="flex items-center gap-1">
                                                    <Heading size="xs" as="p" className="tracking-[0.14px]">
                                                        Murakami Flowers
                                                    </Heading>
                                                    <img src="images/img_checkmark_blue_a200.svg" alt="checkmark" className="h-[18px] w-[38px]" />
                                                </div>
                                                <Text size="s" as="p" className="tracking-[0.12px]">
                                                    @mftmkkus
                                                </Text>
                                            </div>
                                            <Button
                                                color="gray_900_01"
                                                size="xs"
                                                shape="round"
                                                className="min-w-[64px] text-gray-200 text-[12px] font-outfit tracking-[0.12px]"
                                            >
                                                Follow
                                            </Button>
                                        </div>
                                        <div className="h-px self-stretch bg-gray-100" />
                                        <Text
                                            size="s"
                                            as="p"
                                            className="mb-2 w-[94%] font-normal leading-[188%] tracking-[0.12px] "
                                        >
                                            Murakami Flowers is a work in which artist Takashi Murakami's representative artwork...
                                        </Text>
                                    </div>
                                </div>
                                <div className="mb-[15px] flex flex-col gap-[18px]">
                                    <div className="flex flex-wrap items-center justify-between gap-5">
                                        <Heading size="md" as="h6">
                                            Recent Activity
                                        </Heading>
                                        <a href="#" className="self-start">
                                            <Text as="p" className="tracking-[0.14px] !text-gray-900_01">
                                                See All
                                            </Text>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}
