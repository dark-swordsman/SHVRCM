"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export interface ImageElement {
  url: string
}

enum INCREMENT   {
  UP,
  DOWN,
}


export default function ImageCarousel({ images }: { images: ImageElement[] }) {
  const [currentImage, setCurrentImage] = useState(0);
  
  function handleCarouselNavClick(increment: INCREMENT) {
    if (increment === INCREMENT.UP && currentImage < images.length - 1) setCurrentImage(currentImage + 1);
    if (increment === INCREMENT.DOWN && currentImage > 0) setCurrentImage(currentImage - 1);
    console.log(currentImage);
  }

  return (
    <div className="bg-slate-500 rounded-3xl overflow-clip group relative h-[28em]">
      <div className="absolute w-full h-full z-10 flex invisible group-hover:visible">
        <div onClick={() => handleCarouselNavClick(INCREMENT.DOWN)} className={`${currentImage > 0 ? "" : "invisible" } flex justify-center h-full w-20 bg-black opacity-20 hover:opacity-40 active:bg-opacity-60 active:opacity-100 duration-75 cursor-pointer`}>
          <FontAwesomeIcon className="h-12 self-center" icon={faChevronLeft} />
        </div>
        {/* add modal popup for zoomed image (or something) */}
        <div className="cursor-zoom-in w-full h-full">aaa</div>
        <div onClick={() => handleCarouselNavClick(INCREMENT.UP)} className={`${currentImage < images.length - 1 ? "" : "invisible" } flex justify-center h-full w-20 bg-black opacity-20 hover:opacity-40 active:bg-opacity-60 active:opacity-100 duration-75 cursor-pointer`}>
          <FontAwesomeIcon className="h-12 self-center" icon={faChevronRight} />
        </div>
      </div>
      <div className="flex flex-row duration-500 h-full" style={{ transform: `translateX(-${100 * currentImage}%)`}}>
        {images.map((image) => <CarouselImage key={Math.random()} url={image.url} />)}
      </div>
    </div>
  );
}

function CarouselImage({ url }: { url: string }) {
  return (
    <div className="basis-full shrink-0 flex justify-center">
      <Image className="drop-shadow-[0_0_2rem_rgba(0,0,0,0.5)] h-fit w-fit self-center" alt="funny item" width={1024} height={1024} src={url} />
    </div>
  );
}