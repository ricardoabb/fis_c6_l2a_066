'use client';
import React, { useRef, useState, useEffect } from 'react';
import { useMapStore } from './store/useMapStore';
import Home from './components/Layout';
import { TextBox } from './components/TextBox';

// Swiper
import { Navigation, A11y } from 'swiper/modules';
import { register, SwiperContainer } from "swiper/element/bundle";
register();

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import SwiperClass from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { info } from './utils/info';

interface MapProps {
    mapSrc?: string;
}

export default function Info() {
    
    const [realIndex, setIndex] = useState(0);
    const [isEnd, setIsEnd] = useState(false);

    // const [imageActive, setImageActive] = useState(false);
    const [loading, setLoading] = useState(true);


    const [text, setText] = useState('');
    const [activeIndex, setActiveIndex] = useState(0);


    const sliderRef: any = useRef<SwiperClass>()
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const handleSlideChange = (swiper: any) => {
        setActiveIndex(swiper.activeIndex);
        // setModal({ image1: `${card[swiper.activeIndex].image}`, title: `${card[swiper.activeIndex].title}`, subtitle: `${card[swiper.activeIndex].subtitle}` });

    };
    const isFirst = info[0];
    const isLast = info.length - 1;


    return (
        <Home>
            <div className='relative flex justify-center items-center md:mt-0 '>
                <Swiper
                    onSlideChange={handleSlideChange}
                    modules={[Navigation, A11y]}
                    ref={sliderRef}
                    // navigation
                    onInit={(swiper: any) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                    spaceBetween={50}

                    slidesPerView={1}
                    allowTouchMove={true}
                >

                    {info?.map((item, index) => {
                    console.log(item.image);
                    
                        return (

                            <SwiperSlide key={index}>
                                {
                                    activeIndex === index && <TextBox content={item.content} title={item.title} image={item.image} imagesubtitle={item.imageSubtitle} />
                                }
                                {/* <TextBox content={item.content} title={item.title} image={item.image} imagesubtitle={item.imageSubtitle} /> */}
                            </SwiperSlide>

                        )
                    })}

                </Swiper>
            </div>
            {/* ${activeIndex <= 0 || activeIndex === isLast ? 'bottom-[0] md:bottom-[150px]' : 'bottom-[0] md:bottom-[80px]'} */}
            <div id="swiper-navigation" className={`absolute m-auto left-0 right-0 bottom-[40px] lg:bottom-[250px] h-fit                       
                     flex items-center justify-between md:justify-between gap-6 mt-12 w-[90%] md:w-[70%] mx-auto transition-all ease-in-out duration-[.3s]`}>

                <button className={`${sliderRef.current?.swiper.activeIndex == 0 ? "opacity-[.5]" : "opacity-100"} scale-x-[-1] flex justify-center items-centerfull z-50`}
                    //ref={prevRef}
                    disabled={sliderRef.current?.swiper.activeIndex == 0}
                    onClick={() => {
                        setIndex(sliderRef.current?.swiper.realIndex);
                        setIsEnd(sliderRef.current?.swiper.isEnd);
                        sliderRef.current?.swiper.slidePrev();
                    }}>
                    <div >
                        <svg className='w-[46px] md:w[66px] h-[30px] md:h-[50px]' width="66" height="50" viewBox="0 0 35 46" fill="#BB7843" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.7382 18.2279C34.8891 20.6291 34.8891 25.3709 31.7382 27.7721L10.1369 44.2346C6.18746 47.2444 0.500008 44.428 0.500008 39.4624L0.500008 6.53757C0.500008 1.57198 6.18746 -1.24442 10.1369 1.76544L31.7382 18.2279Z" />
                        </svg>
                    </div>
                </button>

                <button className={`${sliderRef.current?.swiper.activeIndex == isLast ? "opacity-[.5]" : "opacity-100"} flex justify-center items-center z-50`}
                    //ref={nextRef}
                    disabled={sliderRef.current?.swiper.activeIndex == isLast}
                    onClick={(swiper: any) => {
                        setIndex(sliderRef.current?.swiper.realIndex);
                        setIsEnd(sliderRef.current?.swiper.isEnd)
                        sliderRef.current?.swiper.slideNext();


                    }}>
                    <div >
                        <svg className='w-[46px] md:w[66px] h-[30px] md:h-[50px]' viewBox="0 0 35 46" fill="#BB7843" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.7382 18.2279C34.8891 20.6291 34.8891 25.3709 31.7382 27.7721L10.1369 44.2346C6.18746 47.2444 0.500008 44.428 0.500008 39.4624L0.500008 6.53757C0.500008 1.57198 6.18746 -1.24442 10.1369 1.76544L31.7382 18.2279Z" />
                        </svg>
                    </div>
                </button>
            </div>
        </Home>
    );
}
