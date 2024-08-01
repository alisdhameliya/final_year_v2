import { Helmet } from "react-helmet";
// import { Button, Text, Img, Heading } from "../../components";
import Text from '../../components/Text'
import Button from '../../components/Button'
import Heading from '../../components/Heading'
import Img from '../../components/Img'
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import React from "react";
import { BsFilter } from "react-icons/bs";

export default function MarketPage() {
  return (
    <>
      <Helmet>
        <title>AuctiGram</title>
        <meta name="description" content="web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700 pb-[50px] ">
        <div className="flex items-start ">
          <Sidebar />
          <div className="flex flex-1 flex-col items-center gap-[35px] md:self-stretch md:p-5">
            <Header className="self-stretch p-[4px]" />
            <div className="flex w-[94%] flex-col items-start gap-[21px] md:w-full">
              <Heading size="3x1" as="h1" className="tracking-[0.34px]">
                Discover
              </Heading>
              <div className="flex flex-col items-center self-stretch">
                <div className="flex justify-between gap-5 self-stretch ">
                  <div className="flex w-[34%] justify-center gap-4 ">
                    <Button
                      color="gray_100"
                      size="4xl"
                      variant="outline"
                      className="w-full flex-1 gap-2.5 font-medium tracking-[0.16px] "
                    >
                      Category
                    </Button>
                    <Button
                      color="gray_100"
                      size="6x1"
                      variant="outline"
                      shape="round"
                      className="w-full flex-1 gap-2.5 font-medium tracking-[0.16px] sm:self-stretch"
                    >
                      Collection
                    </Button>
                    <Button
                      color="gray_100"
                      size="6x1"
                      variant="outline"
                      shape="round"
                      className="min-w-[151px] gap-2.5 font-medium  tracking-[0.16px]"
                    >
                      Price Range
                    </Button>
                  </div>
                  <Button
                    color="gray_100"
                    size="6x1"
                    variant="outline"
                    shape="round"
                    leftIcon={<BsFilter src="" alt="thumbs_up" className="h-[24px] w-[24px]" />}
                    className="min-w-[151px] gap-2.5 font-medium tracking-[0.16px]"
                  >
                    Filter & Sort
                  </Button>
                </div>
                <div className="mt-[30px] grid grid-cols-4 justify-center gap-[19px] self-stretch md:grid-cols-2 sm:grid-cols-1">
                  {/* Item Card 1 */}
                  <div className="flex w-full flex-col items-center gap-[18px] rounded-[15px] bg-white-A700 p-1.5 shadow-xs">
                    <div className="relative h-[140px] self-stretch md:h-auto">
                      <Img
                        src="images/img_rectangle_2044_140x222.png"
                        alt="image"
                        className="h-[140px] w-full rounded-[12px] object-cover"
                      />
                      <div className="absolute right-[8.00px] top-[8.00px] m-auto flex items-center gap-2">
                        <Button size="xs" shape="round" className="min-w-[75px] font-medium tracking-[0.12px]">
                          2h 4m 32s
                        </Button>
                        <Button shape="circle" className="w-[30px] rounded-[15px]">
                          <Img src="images/img_settings.svg" />
                        </Button>
                      </div>
                    </div>
                    <div className="ml-2 flex flex-col items-start justify-center gap-1 self-start md:ml-0">
                      <Heading as="h2" className="tracking-[0.16px]">
                        Dayco Serpentine Belt
                      </Heading>
                      <Text size="s" as="p" className="tracking-[0.12px]">
                        By Marvin McKinney
                      </Text>
                    </div>
                    <div className="mb-3 flex items-center justify-between gap-5 self-stretch">
                      <div className="flex flex-col items-start gap-1">
                        <Text size="xs" as="p" className="tracking-[0.10px]">
                          Current Bid
                        </Text>
                        <div className="flex items-center gap-1.5 self-center">
                          <Img src="images/img_television_gray_900_01.svg" alt="1899 eth" className="h-[16px] w-[16px]" />
                          <Text as="p" className="tracking-[0.14px] !text-black-900">
                            18,99 ETH
                          </Text>
                        </div>
                      </div>
                      <a href="https://www.youtube.com/embed/bv8Fxk0sz71" target="_blank" rel="noopener noreferrer">
                        <Button color="gray_900_01" size="md" className="min-w-[88px] rounded-lg font-medium tracking-[0.12px] text-gray-100">
                          Place a Bid
                        </Button>
                      </a>
                    </div>
                  </div>
                  {/* Repeat item cards as needed */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
