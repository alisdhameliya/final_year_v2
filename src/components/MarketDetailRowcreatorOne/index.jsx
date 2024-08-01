// import { Heading, Text, Img } from "./..";
import Text from '../../components/Text'
// import Button from '../../components/Button'
import Heading from '../../components/Heading'
import Img from '../../components/Img'
import React from "react";

export default function MarketDetailRowCreatorOne({ src, creatorTwo = "Creator", eleanorpena = "Eleanor Pena", ...props }) {
    return (
        <div {...props} className={`${props.className} flex items-center w-full gap-3.5`}>
            <Img src={src} alt="creator" className="h-[42px] w-[42px] rounded-[50%]" />
            <div className="flex flex-col items-start justify-center gap-0.5">
                <Text as="p" className="tracking-[0.14px]">
                    {creatorTwo}
                </Text>
                <Heading as="h6" className="tracking-[0.16px]">
                    {eleanorpena}
                </Heading>
            </div>
        </div>
    );
}
