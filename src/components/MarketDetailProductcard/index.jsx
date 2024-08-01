import React from "react";
// import { Button, Text, Img, Heading } from "./..";
import Text from '../../components/Text'
import Button from '../../components/Button'
import Heading from '../../components/Heading'
import Img from '../../components/Img'

export default function MarketDetailProductCard({
  image = "images/img_rectangle_2044_13.png",
  p2h4m32s = "2h 4m 32s",
  dayco = "Person Melirik Kesamping",
  bymarvin = "By Eleanor Pena",
  currentbid = "Current Bid",
  ethcounter = "2,42 ETH",
  placeABid = "Place a Bid",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-full gap-[18px] p-1.5 bg-white-A700 shadow-xs rounded-[15px]`}
    >
      <div className="relative h-[140px] self-stretch md:h-auto">
        <Img
          src={image}
          alt="image"
          className="h-[140px] w-full rounded-[12px] object-cover"
        />
        <div className="absolute right-[8.00px] top-[8.00px] m-auto flex items-center gap-2">
          <Button size="xs" shape="round" className="min-w-[75px] font-medium tracking-[0.12px]">
            {p2h4m32s}
          </Button>
          <Button shape="circle" className="w-[30px] rounded-[15px]">
            <Img src="images/img_settings.svg" />
          </Button>
        </div>
      </div>
      <div className="ml-2 flex flex-col items-start justify-center gap-1 self-start md:ml-0">
        <Heading as="h6" className="tracking-[0.16px]">
          {dayco}
        </Heading>
        <Text size="s" as="p" className="tracking-[0.12px]">
          {bymarvin}
        </Text>
      </div>
      <div className="mb-3 flex items-center justify-between gap-5 self-stretch">
        <div className="flex flex-col items-start gap-1">
          <Text size="xs" as="p" className="font-outfit tracking-[0.10px]">
            {currentbid}
          </Text>
          <div className="flex items-center gap-1.5 self-center">
            <Img
              src="images/img_television_gray_900_01.svg"
              alt="242_eth"
              className="h-[16px] w-[16px] self-start"
            />
            <Text as="p" className="tracking-[0.14px] text-black-900">
              {ethcounter}
            </Text>
          </div>
        </div>
        <Button color="gray_900_01" size="md" className="min-w-[88px] rounded-lg font-medium tracking-[0.12px] text-gray-300">
          {placeABid}
        </Button>
      </div>
    </div>
  );
}
