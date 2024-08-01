import React from "react";
import { CloseSVG } from "../../assets/images/close";
// import { SelectBox, Button, Img, Input } from "./..";
import Button from '../../components/Button'
import { SelectBox } from '../../components/SelectBox'
import { Input } from "../../components/Input";
import Img from '../../components/Img'

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function Header({ ...props }) {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <header
      {...props}
      className={`${props.className} flex justify-between items-center gap-5 border-gray-100 border-b-[0.5px] border-solid bg-white-A700`}
    ><div className="mx-auto flex w-full max-w-[1070px] h-[100px] items-center justify-between gap-5 ">

        <Input
          shape="round"
          name="Search Field"
          placeholder={`Search items, collections, and users`}
          value={searchBarValue}
          onChange={(e) => setSearchBarValue(e.target.value)}
          prefix={
            <img
              src="images/img_contrast_gray_500.svg"
              alt="contrast"
              className="h-[24px] w-[24px] cursor-pointer ml-4"
            />
          }
          suffix={
            searchBarValue?.length > 0 ? (
              <CloseSVG
                onClick={() => setSearchBarValue("")}
                height={24}
                width={24}
                fillColor="#93989a"
              />
            ) : null
          }
          className="w-[44%] gap-4 border border-solid border-gray-300 font-outfit tracking-[0.16px] text-gray-500 "
        />
        <div className="flex w-[31%] justify-between gap-5 md:w-full">
          <Button
            color="gray_100"
            size="6xl"
            variant="outline"
            leftIcon={
              <Img
                src="images/img_television_gray_900_01.svg"
                alt="television"
                className="h-[24px] w-[24px]"
              />
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
              className="w-[52px] rounded-[26px]"
            >
              <Img src="images/img_icon.svg" />
            </Button>
          </a>
          <SelectBox
            shape="square"
            name="User Dropdown"
            options={dropDownOptions}
            className="w-[26%]"
          />
        </div>
      </div>
    </header>
  );
}
