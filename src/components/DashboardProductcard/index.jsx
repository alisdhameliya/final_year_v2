import React from "react";
// import { Button, Text, Img, Heading } from "../..";
import Button from "../Button";
import Text from "../Text";
import Img from "../Img";
import Heading from "../Heading";



function DashboardProductCard({
    image = "images/img_rectangle_2044.png",
    theunfortable = "The Unfortable Facer",
    bybane = "By Bane Riccardo",
    currentbid = "Current Bid",
    ethcounter = "18.99 ETH",
    placeABid = "Place a Bid",
    p2h4m32s = "2h 4m 32s",
    ...props
}) {
    const handleClickOnProduct = (e) => {
        e.preventDefault();
        // console.log(e.target);
        console.log("Clicked on product: ", theunfortable);
        // Navigate to product page or open in new tab
        window.location.href = `marketdetail`, "_blank";
        // window.open(`marketdetail${theunfortable.toLowerCase().replace(/ /g, "-")}`, "_blank");
        // window.location.href = `product/${theunfortable.toLowerCase().replace(/ /g, "-")}`;
        // history.push(`/product/${theunfortable.toLowerCase().replace(/ /g, "-")}`);
        // window.location.href = `/product/${theunfortable.toLowerCase().replace(/ /g, "-")}`;

    };
    return (
        <div
            {...props}
            className={`${props.className} flex flex-col  items-center w-full gap-[18px] p-1.5 bg-white-A700 shadow-xs rounded-[15px] hover:scale-[1.04] transition-all hover:cursor-pointer hover:shadow-slate-500 drop-shadow-sm `} onClick={(e) => handleClickOnProduct(e)}
        >
            <div className="relative h-[140px] self-stretch md:h-auto">
                <Img
                    src={image}
                    alt="image"
                    className="h-[140px] w-full rounded-[12px] object-cover"
                />
                <div className="absolute right-[8.00px] top-[8.00px] m-auto flex items-center gap-2">
                    <Button
                        size="xs"
                        shape="round"
                        className="min-w-[75px] font-medium tracking-[0.12px]"
                    >
                        {p2h4m32s}
                    </Button>
                    <Button shape="circle" className="w-[30px] !rounded-[15px]">
                        <Img src="images/img_settings.svg" />
                    </Button>
                </div>
            </div>
            <div className="ml-2 flex flex-col items-start justify-center gap-1.5 self-start md:ml-0">
                <Heading as="h6" className="tracking-[0.16px]">
                    {theunfortable}
                </Heading>
                <Text size="s" as="p" className="tracking-[0.12px]">
                    {bybane}
                </Text>
            </div>
            <div className="mb-3 flex items-center justify-between gap-5 self-stretch">
                <div className="flex flex-col items-start gap-1">
                    <Text size="xs" as="p" className="!font-outfit tracking-[0.10px]">
                        {currentbid}
                    </Text>
                    <div className="flex items-center gap-1.5">
                        <Img
                            src="images/img_television_gray_900_01.svg"
                            alt="1899_eth"
                            className="h-[16px] w-[16px]"
                        />
                        <Text as="p" className="tracking-[0.14px] !text-black-900">
                            {ethcounter}
                        </Text>
                    </div>
                </div>
                <Button
                    color="gray_900_01"
                    size="md"
                    className="min-w-[88px] rounded-lg text-gray-200 font-medium tracking-[0.12px]"
                >
                    {placeABid}
                </Button>
            </div>
        </div>
    );
}
export default DashboardProductCard;