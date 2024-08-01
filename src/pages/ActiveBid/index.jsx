import { Helmet } from "react-helmet";
import Button from "../../components/Button";
import Img from "../../components/Img";
import Heading from "../../components/Heading";
import ActiveBidProductcard from "../../components/ActiveBidProductCard";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import React, { Suspense } from "react";

const data = [
  {
    image: "images/img_rectangle_2044_140x240.png",
    p2h4m32s: "2h 4m 32s",
    dayco: "Dayco Serpentine Belt",
    bymarvin: "By Marvin McKinney",
    currentbid: "Your Bid",
    ethcounter: "18,99 ETH",
    placeABid: "Place a Bid",
  },
  {
    image: "images/img_rectangle_2044_10.png",
    p2h4m32s: "2h 4m 32s",
    dayco: "Bosch Spark Plug",
    bymarvin: "By Guy Hawkins",
    currentbid: "Your Bid",
    ethcounter: "8,99 ETH",
    placeABid: "Place a Bid",
  },
  {
    image: "images/img_rectangle_2044_11.png",
    p2h4m32s: "2h 4m 32s",
    dayco: "Valvoline Engine oil",
    bymarvin: "By Albert Flores",
    currentbid: "Your Bid",
    ethcounter: "51,23 ETH",
    placeABid: "Place a Bid",
  },
  {
    image: "images/img_rectangle_2044_12.png",
    p2h4m32s: "2h 4m 32s",
    dayco: "Fram Oil Filter",
    bymarvin: "By Jerome Bell",
    currentbid: "Your Bid",
    ethcounter: "25,00 ETH",
    placeABid: "Place a Bid",
  },
];

export default function ActiveBidPage() {
  return (
    <>
      <Helmet>
        <title>AuctiGram</title>
        <meta name="description" content="web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        <div className="flex items-start ">
          <Sidebar />
          <div className="flex flex-1 flex-col items-center gap-[34px] ">
            <Header className="self-stretch " />
            <div className="flex w-[94%] flex-col items-start gap-[22px] ">
              <Heading size="3xl" as="h1" className=" text-3xl font-semibold tracking-[0.34px] ">
                Active Bid
              </Heading>
              <div className="flex items-center justify-between self-stretch">
                <div className="flex w-full  justify-between gap-5">
                  <div className="flex w-[59%] justify-center gap-6 ">
                    <Button
                      color="gray_100"
                      size="6xl"
                      variant="outline"
                      shape="round"
                      className="w-full flex-1 gap-2.5 font-medium tracking-[0.16px] "
                    >
                      On Going
                    </Button>
                    <Button
                      color="gray_100"
                      size="6xl"
                      variant="outline"
                      shape="round"
                      leftIcon={<Img src="images/img_grid_black_900.svg" alt="grid" className="h-[24px] w-[24px]" />}
                      className="w-full flex-1 gap-2.5 font-medium tracking-[0.16px] "
                    >
                      Category
                    </Button>
                    <Button
                      color="gray_100"
                      size="6xl"
                      variant="outline"
                      shape="round"
                      leftIcon={<Img src="images/img_settings_black_900.svg" alt="settings" className="h-[24px] w-[24px]" />}
                      className="w-full flex-1 gap-2.5 font-medium tracking-[0.16px] "
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
                </div>
                <Button
                  color="gray_100"
                  size="6xl"
                  variant="outline"
                  shape="round"
                  leftIcon={<Img src="images/img_thumbsup.svg" alt="thumbs_up" className="h-[24px] w-[24px]" />}
                  className="min-w-[160px]   gap-2.5 font-medium tracking-[0.16px]"
                >
                  Filter & Sort
                </Button>
              </div>
              <div className="flex gap-[19px] ">
                <Suspense fallback={<div>Loading feed...</div>}>
                  {data.map((d, index) => (
                    <ActiveBidProductcard {...d} key={"productlists" + index} />
                  ))}
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
