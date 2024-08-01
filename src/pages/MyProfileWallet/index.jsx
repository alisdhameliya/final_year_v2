import { Helmet } from "react-helmet";
// import { Text, Img, Heading, Button } from "../../components";
import Text from '../../components/Text'
import Button from '../../components/Button'
import Heading from '../../components/Heading'
import Img from '../../components/Img'
import Header from "../../components/Header";
import MyProfilewalletTotalspending from "../../components/MyProfileWalletTotalspending";
import { ReactTable } from "../../components/ReactTable";
import Sidebar10 from "../../components/Sidebar10";
import { createColumnHelper } from "@tanstack/react-table";
import React from "react";

const data = [
    {
        totalspending: "Total Spending",
        price: "$432,215.32",
        image: "images/img_trending_up.svg",
        twentyfour: "+2.4%",
        may172022: "May 17, 2022",
    },
    {
        totalspending: "Total Income",
        price: "$21,579.22",
        image: "images/img_trending_up_red_600.svg",
        twentyfour: "-2.32",
        may172022: "May 17, 2022",
    },
    {
        totalspending: "Total Saving",
        price: "$68,483.16",
        image: "images/img_trending_up.svg",
        twentyfour: "+2.4%",
        may172022: "May 17, 2022",
    },
];

const table1Data = [
    { itemlist: "Peachy Puch#22", status: "Actived", openprice: "5.62 ETH", youroffer: "5.62 ETH", timeleft: "1h 19m" },
    {
        itemlist: "Pile of Many Plates",
        status: "On Going",
        openprice: "5.62 ETH",
        youroffer: "5.62 ETH",
        timeleft: "1h 19m",
    },
    {
        itemlist: "Worldpac Alternator",
        status: "Ended",
        openprice: "5.62 ETH",
        youroffer: "5.62 ETH",
        timeleft: "1h 19m",
    },
    { itemlist: "Fram Oil Filter", status: "Actived", openprice: "5.62 ETH", youroffer: "5.62 ETH", timeleft: "1h 19m" },
];

export default function MyProfileWalletPage() {
    const table1Columns = React.useMemo(() => {
        const table1ColumnHelper = createColumnHelper();
        return [
            table1ColumnHelper.accessor("itemlist", {
                cell: (info) => (
                    <div className="flex flex-col gap-12">
                        <div className="flex w-[86%] items-center gap-3.5 md:w-full">
                            <Img src="images/img_ellipse_1018_5.png" alt="circleimage" className="h-[42px] w-[42px] rounded-[50%]" />
                            <div className="flex flex-col items-start justify-center gap-[3px]">
                                <Heading as="h3" className="tracking-[0.16px]">
                                    {info?.getValue?.()}
                                </Heading>
                                <Text size="s" as="p" className="tracking-[0.12px]">
                                    From Mindblowonstudio
                                </Text>
                            </div>
                        </div>
                        <div className="flex items-center gap-3.5">
                            <Img src="images/img_ellipse_1018_19.png" alt="circleimage" className="h-[42px] w-[42px] rounded-[50%]" />
                            <div className="flex flex-col items-start justify-center gap-1">
                                <Heading as="h4" className="tracking-[0.16px]">
                                    Dayco Serpentine Belt
                                </Heading>
                                <Text size="s" as="p" className="tracking-[0.12px]">
                                    From Marvin McKinney
                                </Text>
                            </div>
                        </div>
                    </div>
                ),
                header: (info) => (
                    <Text as="p" className="pb-[25px] pl-6 pt-px tracking-[0.14px] sm:pb-5 sm:pl-5">
                        Item List
                    </Text>
                ),
                meta: { width: "266px" },
            }),
            table1ColumnHelper.accessor("status", {
                cell: (info) => (
                    <div className="ml-[25px] flex flex-col items-start gap-[74px] md:gap-[55px] sm:ml-0 sm:gap-[37px]">
                        <Text as="p" className="tracking-[0.14px] !text-black-900">
                            {info?.getValue?.()}
                        </Text>
                        <Text as="p" className="tracking-[0.14px] !text-black-900">
                            On Going
                        </Text>
                    </div>
                ),
                header: (info) => (
                    <Text as="p" className="pb-[25px] pt-px tracking-[0.14px] sm:pb-5">
                        Status
                    </Text>
                ),
                meta: { width: "111px" },
            }),
            table1ColumnHelper.accessor("openprice", {
                cell: (info) => (
                    <div className="flex flex-col items-start justify-center gap-[72px] md:gap-[54px] sm:gap-9">
                        <div className="flex items-center gap-1.5">
                            <Img src="images/img_television_gray_900_01.svg" alt="television" className="h-[16px] w-[16px]" />
                            <Text as="p" className="tracking-[0.14px] !text-black-900">
                                {info?.getValue?.()}
                            </Text>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Img src="images/img_television_gray_900_01.svg" alt="television" className="h-[16px] w-[16px]" />
                            <Text as="p" className="tracking-[0.14px] !text-black-900">
                                5.62 ETH
                            </Text>
                        </div>
                    </div>
                ),
                header: (info) => (
                    <Text as="p" className="px-px pb-6 pt-0.5 tracking-[0.14px] sm:pb-5">
                        Open Price
                    </Text>
                ),
                meta: { width: "141px" },
            }),
            table1ColumnHelper.accessor("youroffer", {
                cell: (info) => (
                    <div className="flex flex-col items-start justify-center gap-[72px] md:gap-[54px] sm:gap-9">
                        <div className="flex items-center gap-1.5">
                            <Img src="images/img_television_gray_900_01.svg" alt="television" className="h-[16px] w-[16px]" />
                            <Text as="p" className="tracking-[0.14px] !text-black-900">
                                {info?.getValue?.()}
                            </Text>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Img src="images/img_television_gray_900_01.svg" alt="television" className="h-[16px] w-[16px]" />
                            <Text as="p" className="tracking-[0.14px] !text-black-900">
                                5.62 ETH
                            </Text>
                        </div>
                    </div>
                ),
                header: (info) => (
                    <Text as="p" className="px-px pb-[26px] tracking-[0.14px] sm:pb-5">
                        Your Offer
                    </Text>
                ),
                meta: { width: "137px" },
            }),
            table1ColumnHelper.accessor("timeleft", {
                cell: (info) => (
                    <div className="flex flex-col items-start justify-center gap-[73px] md:gap-[54px] sm:gap-9">
                        <Text as="p" className="tracking-[0.14px] !text-black-900">
                            {info?.getValue?.()}
                        </Text>
                        <Text as="p" className="tracking-[0.14px] !text-black-900">
                            1h 19m
                        </Text>
                    </div>
                ),
                header: (info) => (
                    <Text as="p" className="px-px pb-[26px] tracking-[0.14px] sm:pb-5">
                        Time Left
                    </Text>
                ),
                meta: { width: "85px" },
            }),
        ];
    }, []);

    return (
        <>
            <Helmet>
                <title>AuctiGram</title>
                <meta name="description" content="web site created using create-react-app" />
            </Helmet>
            <div className="w-full bg-white-A700">
                <div className="flex md:flex-col">
                    <Sidebar10 />
                    <div className="flex flex=1 flex-col md:self-stretch md:p-5">
                    </div>
                </div>
            </div>
            <Header className="relative z-[1] p-[34px]" />
            <div className="relative mt-[1px] flex w-[97%] items-center gap-[34px] md:w-full md:flex-col">
                <div className="flex flex-1 flex-col gap-8 md:self-stretch">
                    <div className="flex flex-col items-start gap-8">
                        <Heading size="3x1" as="h1" className="tracking-[0.34px]">
                            Wallet
                        </Heading>
                        <div className="flex gap-[19px] self-stretch md:flex-col">
                            <Suspense fallback={<div>Loading feed...</div>}>
                                {data.map((d, index) => (
                                    <MyProfilewalletTotalspending {...d} key={`summary${index}`} className="p-6" />
                                ))}
                            </Suspense>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[51px] sm:gap-[25px]">
                        <div className="flex flex-wrap items-start justify-between gap-5">
                            <Heading size="x1" as="h2" className="font-outfit tracking-[0.24px]">
                                Recent Activity
                            </Heading>
                            <a href="#" className="mt-1">
                                <Text as="p" className="tracking-[8.14px] text-gray-900_01">
                                    View All
                                </Text>
                            </a>
                        </div>
                        <ReactTable
                            size="sm"
                            bodyProps={{ className: "" }}
                            headerProps={{ className: "flex-wrap" }}
                            rowDataProps={{ className: "sm:flex-col" }}
                            className="rounded-[15px] border-[0.5px] border-solid border-gray-100 bg-white-A700 shadow-xs"
                            columns={tableColumns}
                            data={tableData}
                        />
                    </div>
                </div>
                <div className="flex w-[31%] flex-col gap-[27px] border-[0.5px] border-solid border-gray-100 bg-white-A700 p-[23px] md:w-full sm:p-5">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center justify-between gap-5">
                            <Text size="xl" as="p" className="tracking-[0.18px] !text-black-900">
                                Wallet
                            </Text>
                            <Img src="images/img_notification.svg" alt="notification" className="h-[24px] w-[24px]" />
                        </div>
                        <div className="relative h-[150px] rounded-[15px] bg-white-A700 md:h-auto">
                            <Img src="images/img_group_33968.png" alt="image" className="h-[150px] w-full object-cover" />
                            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-max items-center gap-[25px]">
                                <div className="flex flex-col items-start gap-7">
                                    <Text as="p" className="font-normal tracking-[0.14px] !text-white-A700">
                                        Local Banking Card
                                    </Text>
                                    <div className="flex flex-wrap items-center gap-4">
                                        <Img src="images/img_.svg" alt="image" className="h-[5px]" />
                                        <Img src="images/img.svg" alt="image" className="h-[5px]" />
                                        <Img src="images/img_.svg" alt="image" className="h-[5px]" />
                                        <Text as="p" className="self-start !font-normal tracking-[0.14px] text-white-A700_cc">
                                            3982
                                        </Text>
                                    </div>
                                    <Text as="p" className="font-normal tracking-[0.14px] !text-white-A700">
                                        Kevin Cranel
                                    </Text>
                                </div>
                                <Img src="images/img_settings_white_a700.svg" alt="settings" className="h-[16px] self-end" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[25px]">
                        <div className="h-px bg-gray-100" />
                        <div className="flex flex-col items-center gap-[30px]">
                            <div className="flex flex-col items-center gap-[7px]">
                                <Text size="x1" as="p" className="!font-normal tracking-[0.18px]">
                                    Your Balance
                                </Text>
                                <Heading size="xl" as="h4">
                                    $185,424.52
                                </Heading>
                            </div>
                            <div className="flex gap-3 self-start">
                                <Button
                                    color="gray-900-01"
                                    size="3x1"
                                    className="min-w-[228px] rounded-lg font-medium tracking-[6.14px] sm:px-5"
                                >
                                    Add New Card
                                </Button>
                                <Button color="gray_900_26" size="x1" className="w-[42px] rounded-lg">
                                    <Img src="images/img_top_up.png" />
                                </Button>
                            </div>
                        </div>
                        <div className="h-px bg-gray-100" />
                    </div>
                    <div className="mb-[18px] flex flex-col items-start gap-[18px]">
                        <Text size="x1" as="p" className="tracking-[0.18px] !text-black-900">
                            Transaction History
                        </Text>
                        <div className="flex flex-col gap-[22px] self-stretch">
                            <div className="flex flex-col pb-[25px] sm:pb-5">
                                <div className="flex items-center gap-6 self-start">
                                    <div className="flex items-center gap-3.5">
                                        <Button color="gray_50" size="x1" shape="circle" className="w-[42px] !rounded-[21px]">
                                            <Img src="images/img_icon_gray_900_01.png" />
                                        </Button>
                                        <div className="flex flex-col items-start justify-center gap-1">
                                            <Heading as="h6" className="tracking-[0.16px]">
                                                Exchange to ETH
                                            </Heading>
                                            <Text size="s" as="p" className="tracking-[0.12px]">
                                                Today at 4:13 PM
                                            </Text>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Img src="images/img_television_gray_900_01.svg" alt="television" className="h-[16px] w-[16px]" />
                                        <Text as="p" className="tracking-[0.14px] !text-black-900">
                                            2.22 ETH
                                        </Text>
                                    </div>
                                </div>
                            </div>
                            <div className="h-px w-full bg-gray-100" />
                            <div className="flex flex-1 items-center justify-between gap-5">
                                <div className="flex items-center gap-3.5">
                                    <Button color="gray_50" size="x1" shape="circle" className="w-[42px] !rounded-[21px]">
                                        <Img src="images/img_top_up.png" />
                                    </Button>
                                    <div className="flex flex-col items-start justify-center gap-1">
                                        <Heading as="h6" className="tracking-[0.16px]">
                                            Enefty Top Up
                                        </Heading>
                                        <Text size="s" as="p" className="tracking-[0.12px]">
                                            Today at 4:23 PM
                                        </Text>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Img src="images/img_television_gray_900_01.svg" alt="television" className="h-[16px] w-[16px]" />
                                    <Text as="p" className="tracking-[0.14px] !text-black-900">
                                        1.32 ETH
                                    </Text>
                                </div>
                            </div>
                            <div className="h-px w-full bg-gray-100" />
                            <div className="flex flex-col justify-center py-6 sm:py-5">
                                <div className="flex items-center gap-[19px] self-start">
                                    <div className="flex items-center gap-3.5">
                                        <Button color="gray_50" size="x1" shape="circle" className="w-[42px] !rounded-[21px]">
                                            <Img src="images/img_icon_gray_900_01_42x42.png" />
                                        </Button>
                                        <div className="flex flex-col items-start justify-center gap-1">
                                            <Heading as="h6" className="tracking-[0.16px]">
                                                Open Bid Success
                                            </Heading>
                                            <Text size="s" as="p" className="tracking-[0.12px]">
                                                Yesterday at 5:12 AM
                                            </Text>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Img src="images/img_television_gray_900_01.svg" alt="television" className="h-[16px] w-[16px]" />
                                        <Text as="p" className="tracking-[0.14px] !text-black-900">
                                            5.56 ETH
                                        </Text>
                                    </div>
                                </div>
                            </div>
                            <div className="h-px w-full bg-gray-100" />
                            <div className="flex items-center gap-[23px]">
                                <div className="flex items-center gap-3.5">
                                    <div className="flex flex-col items-center rounded-[21px] bg-gray-50 p-[9px]">
                                        <Img src="images/img_icon_gray_900_01_42x42.png" alt="judge" className="h-[24px] w-[24px] object-cover" />
                                    </div>
                                    <div className="flex flex-col items-start justify-center gap-1">
                                        <Heading as="h6" className="tracking-[0.16px]">
                                            Open Bid Success
                                        </Heading>
                                        <Text size="s" as="p" className="tracking-[0.12px]">
                                            Yesterday at 3:12 AM
                                        </Text>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Img src="images/img_television_gray_900_01.svg" alt="television" className="h-[16px] w-[16px]" />
                                    <Text as="p" className="tracking-[0.14px] !text-black-900">
                                        2.21 ETH
                                    </Text>
                                </div>
                            </div>
                            <div className="h-px w-full bg-gray-100" />
                            <div className="flex flex-1 flex-col pt-6 sm:pt-5">
                                <div className="flex items-center justify-between gap-5">
                                    <div className="flex items-center gap-3.5">
                                        <Button color="gray_50" size="xl" shape="circle" className="w-[42px] rounded-[21px]">
                                            <Img src="images/img_top_up.png" />
                                        </Button>
                                        <div className="flex flex-col items-start justify-center gap-1">
                                            <Heading as="h6" className="tracking-[0.16px]">
                                                Enefty Top Up
                                            </Heading>
                                            <Text size="s" as="p" className="tracking-[0.12px]">
                                                Yesterday at 3:12 AM
                                            </Text>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Img src="images/img_television_gray_900_01.svg" alt="television" className="h-[16px] w-[16px]" />
                                        <Text as="p" className="tracking-[0.14px] text-black-900">
                                            2.32 ETH
                                        </Text>
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