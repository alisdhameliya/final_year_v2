import { Helmet } from "react-helmet";
import Text from "../../components/Text"; import Img from "../../components/Img"; import Heading from "../../components/Heading"; import Button from "../../components/Button";
import Header from "../../components/Header";
import MarketDetailProductcard from "../../components/MarketDetailProductcard";
import MarketDetailRowcreatorone from "../../components/MarketDetailRowcreatorone";
import Sidebar from "../../components/Sidebar";
import React, { Suspense } from "react";
import { GoHeartFill } from "react-icons/go";

const data = [
  {
    image: "images/img_rectangle_2044_13.png",
    p2h4m32s: "2h 4m 32s",
    dayco: "Person Melirik Kesamping",
    bymarvin: "By Eleanor Pena",
    currentbid: "Current Bid",
    ethcounter: "2,42 ETH",
    placeABid: "Place a Bid",
  },
  {
    image: "images/img_rectangle_2044_14.png",
    p2h4m32s: "2h 4m 32s",
    dayco: "Building Reflection Xd",
    bymarvin: "By Eleanor Pena",
    currentbid: "Current Bid",
    ethcounter: "52,12 ETH",
    placeABid: "Place a Bid",
  },
  {
    image: "images/img_rectangle_2044_15.png",
    p2h4m32s: "2h 4m 32s",
    dayco: "Natural Atomic Circle",
    bymarvin: "By Eleanor Pena",
    currentbid: "Current Bid",
    ethcounter: "22,52 ETH",
    placeABid: "Place a Bid",
  },
  {
    image: "images/img_rectangle_2044_16.png",
    p2h4m32s: "2h 4m 32s",
    dayco: "Oldtown Artistic Alley",
    bymarvin: "By Eleanor Pena",
    currentbid: "Current Bid",
    ethcounter: "1,224 ETH",
    placeABid: "Place a Bid",
  },
];

export default function MarketDetailPage() {
  return (
    <>
      <Helmet>
        <title>AuctiGram</title>
        <meta name="description" content="web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        <div className="flex items-start ">
          <Sidebar />
          <div className="flex flex-1 flex-col items-center gap-[34px] md:self-stretch md:p-5">
            <Header className="self-stretch" />
            <div className="flex w-[94%] flex-col items-start ">
              <div className="flex flex-wrap gap-2 rounded-lg bg-gray-50 p-[5px]">
                <Text as="p" className="self-end tracking-[0.14px]">
                  Marketplace
                </Text>
                <Text as="p" className="self-end tracking-[0.14px]">
                  &gt;
                </Text>
                <Text as="p" className="self-end tracking-[0.14px] text-gray-900_01">
                  Open Bid
                </Text>
              </div>
              <div className="mt-[34px] flex items-center gap-[50px] self-stretch md:flex-col">
                <Img
                  src="images/img_rectangle_2044_1.png"
                  alt="image"
                  className="h-[420px] w-[50%] rounded-[12px] object-cover md:w-full"
                />
                <div className="flex w-[50%] flex-col gap-5 md:w-full">
                  <div className="flex flex-col items-start gap-[18px]">
                    <Heading size="2x1" as="h1" className="tracking-[0.32px]">
                      Dayco Serpentine Belt
                    </Heading>
                    <Text
                      size="1g"
                      as="p"
                      className="w-full !font-normal leading-[180%] tracking-[0.16px] text-gray-500_e5"
                    >
                      Open repair of infrarenal aortic aneurysm or dissection, plus repair of associated arterial trauma, following unsuccessful endovascular repair; tube prosthesis...
                    </Text>
                  </div>
                  <div className="flex  w-[70%] gap-8">
                    <Suspense fallback={<div>Loading feed...</div>}>
                      {[...Array(2)].map((d, index) => (
                        <a href="https://www.youtube.com/embed/bv8Fxk0sz71" target="_blank">
                          <MarketDetailRowcreatorone
                            creatorTwo="Creator"
                            eleanorpena="Eleanor Pena"
                            src="images/img_ellipse_1015.png"
                            key={"listcreatorone" + index}
                          />
                        </a>
                      ))}
                    </Suspense>
                  </div>
                  <div className="flex flex-col items-start">
                    <div className="h-px w-full self-stretch bg-gray-100" />
                    <div className="mt-[21px] flex w-[67%] items-start justify-between gap-5 md:w-full">
                      <div className="flex w-[51%] flex-col items-start justify-center gap-3.5">
                        <Text size="1g" as="p" className="tracking-[0.16px] text-gray-500_e5">
                          Auction End In
                        </Text>
                        <div className="flex items-center justify-center gap-1 self-stretch">
                          <Button
                            color="gray_50"
                            className="w-full rounded-lg  text-lg  h-12 font-semibold tracking-[0.20px]"
                          >
                            03
                          </Button>
                          <p className=" font-bold text-xl" >:</p>

                          <Button
                            color="gray_50"
                            className="w-full rounded-lg  text-lg h-12 font-semibold tracking-[0.20px]"
                          >
                            12
                          </Button>
                          <p className="font-bold text-xl" >:</p>

                          <Button
                            color="gray_50"
                            className="w-full rounded-lg text-lg font-semibold h-12 tracking-[0.20px]"
                          >
                            42
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-center gap-5">
                        <Text size="lg" as="p" className="tracking-[0.16px] text-gray-500_e5">
                          Current Bid
                        </Text>
                        <div className="flex items-center gap-2.5">
                          <Img
                            src="images/img_television_gray_900_01.svg"
                            alt="television"
                            className="h-[25px] w-[25px]"
                          />
                          <Heading size="1g" as="h2" className="tracking-[0.20px]">
                            3,89 ETH
                          </Heading>
                        </div>
                      </div>
                    </div>
                    <div className="mt-[37px] flex gap-3.5">
                      <Button color="gray_100" size="4x1" variant="outline" className="w-[50px] rounded-lg">
                        <GoHeartFill className=" h-12 text-red-600 text-xl" />
                      </Button>
                      <Button
                        color="gray_900_01"
                        size="6x1"
                        className="min-w-[200px] text-gray-200 rounded-1g font-medium tracking-[0.14px] "
                      >
                        Place A Bid
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[53px] flex flex-col items-start gap-[18px] self-stretch">
                <Heading size="xl" as="h3">
                  More Works by Eleanor Pena
                </Heading>
                <div className="flex gap-[19px] self-stretch md:flex-col">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {data.map((d, index) => (
                      <MarketDetailProductcard {...d} key={"productlists" + index} />
                    ))}
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
