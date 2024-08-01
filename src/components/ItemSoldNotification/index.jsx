import React from "react";
import Heading from "../Heading"; // Ensure the correct path
// import { Switch } from "../Switch";
export default function ItemSoldNotification({
    itemSoldText = "Item Sold",
    purchaseDescription = "When someone purchased one of your items",
    ...props
}) {
    return (
        <div {...props} className={`${props.className} flex justify-center items-center flex-1`}>
            <div className="flex flex-1 flex-col items-start gap-2.5 sm:gap-2.5">
                <Heading size="textmd" as="p" className="tracking-[0.16px] sm:text-[13px]">
                    {itemSoldText}
                </Heading>
                <Heading as="p" className="!font-normal tracking-[0.14px] !text-gray-500">
                    {purchaseDescription}
                </Heading>
            </div>
            <Switch value={true} className="mb-2.5 self-end" />
        </div>
    );
}
