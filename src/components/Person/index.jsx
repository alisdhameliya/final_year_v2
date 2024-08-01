import React from 'react'
import Img from '../Img'
import Heading from '../Heading'
import Text from '../Text'

function Person({ src, alt, name, text, price }) {
    const demoData = [
        {
            src: "images/img_ellipse_1018_1.png",
            alt: "circleimage1",
            name: "Doodles #2761",
            text: "From Murakami",
            price: "4.4 ETH"
        },
        {
            src: "images/img_ellipse_1018_2.png",
            alt: "circleimage2",
            name: "Peachy Puch#22",
            text: "From Mindblowonstudio",
            price: "5.62 ETH"
        },
        {
            src: "images/img_ellipse_1018_3.png",
            alt: "circleimage3",
            name: "Gemmy #3723",
            text: "From GemmySolana",
            price: "6.19 ETH"
        },
        {
            src: "images/img_ellipse_1018_4.png",
            alt: "circleimage4",
            name: "Art Piece #1018",
            text: "From Art Studio",
            price: "3.75 ETH"
        },
        {
            src: "images/img_ellipse_1018_5.png",
            alt: "circleimage5",
            name: "Digital Artwork #42",
            text: "From Digital Artist",
            price: "2.99 ETH"
        }
    ];
    return (
        <div className="flex flex-1 items-center justify-between gap-5">
            <div className="flex w-[59%] items-center justify-center gap-3.5">
                <Img
                    // src="images/img_ellipse_1018_4.png"
                    // alt="circleimage"
                    src={src}
                    alt={alt}
                    className="h-[42px] w-[42px] rounded-[50%]"
                />
                <div className="flex flex-col items-start justify-center gap-1">
                    <Heading as="h6" className="tracking-[-0.16px]">
                        {/* Doodles #2761 */}
                        {name}
                    </Heading>
                    <Text size="s" as="p" className="tracking-[-0.12px]">
                        {/* From Murakami */}
                        {text}
                    </Text>
                </div>
            </div>
            <div className="flex items-center gap-1.5">
                <Img
                    src="images/img_television_gray_900_01.svg"
                    alt="television"
                    className="h-[16px] w-[16px]"
                />
                <Text as="p" className="tracking-[-0.14px] !text-black-900">
                    {/* 4.4 ETH */}
                    {price}
                </Text>
            </div>
        </div>
    )
}

export default Person