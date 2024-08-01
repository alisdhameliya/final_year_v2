// import { Text, Heading, Img } from "./..";
import Text from '../../components/Text'
import Heading from '../../components/Heading'
import Img from '../../components/Img'
import React from "react";

export default function MessageRowKristin({
  kristinwatson = "Kristin Watson",
  wowthisis = "Wow, this is really epic",
  time = "18:00",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex justify-between items-center gap-5 flex-1`}
    >
      <div className="flex w-[63%]  gap-3.5">
        <Img
          src="images/img_ellipse_1018_2.png"
          alt="kristin_watson"
          className="h-[42px] w-[42px] rounded-[50%]"
        />
        <div className="flex flex-col items-start gap-1.5">
          <Heading as="h6" className="tracking-[0.16px]">
            {kristinwatson}
          </Heading>
          <Text as="p" className="tracking-[0.14px]">
            {wowthisis}
          </Text>
        </div>
      </div>
      <Text size="s" as="p" className="tracking-[0.12px]">
        {time}
      </Text>
    </div>
  );
}
