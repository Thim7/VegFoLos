import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import images from '~/assets/img';
import DatabaseButton from '~/components/DatabaseButton';
import { CloseIcon, CustomLeftArrowIcon, CustomRightArrowIcon, LotusIcon2, SearchIcon } from '~/components/Icons';
import RestaurantCard from '~/components/RestaurantCard';
import Searchbar from '~/components/Searchbar';
import Header from '~/layouts/components/Header';
import { DATABASE_ITEMS, RESTAURANT_ITEMS } from '~/data';
import { Alert, Button, IconButton } from '@material-tailwind/react';
import config from '~/config';
import { Link, useNavigate } from 'react-router-dom';

function Homepage() {
    const [isOpenAlert, setIsOpenAlert] = useState(false);
    const screenHeight = window.innerHeight;

    const navigate = useNavigate();
    const inputRef = useRef(null);
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        prevArrow: <CustomLeftArrowIcon />,
        nextArrow: <CustomRightArrowIcon />,
        responsive: [
            {
                breakpoint: 1332,
                settings: {
                    slidesToShow: 3,
                },
            },

            {
                breakpoint: 848,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '16px',
                },
            },
            {
                breakpoint: 430,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '28px',
                },
            },
        ],
    };

    const handleClickSearch = () => {
        if (inputRef.current.value === '') {
            setIsOpenAlert(true);
            return;
        }

        navigate(config.routes.restaurants);
    };

    return (
        <div className="">
            <Header hide breakPointTransition={screenHeight} />
            {/* Hero Image */}
            <section className="w-full relative flex snap-start">
                <img
                    id="heroImage"
                    className={`w-full h-[780px] md:h-auto max-h-[${screenHeight}px] object-cover`}
                    src={images.heroImage}
                    alt="Hero"
                />
                <div
                    className={`2xl:mx-40 xl:mx-32 lg:mx-28 sm:mx-8 max-[639px]:mx-2 sm:w-full flex-col absolute self-center max-w-3xl space-y-16`}
                >
                    <div className=" text-light-on-primary dark:text-dark-on-primary text-center md:text-start">
                        <h1 className="text-4xl">Good Morning!</h1>
                        <h2 className="text-base md:text-xl">Where should we deliver your food today?</h2>
                    </div>
                    <div className="flex flex-wrap shrink w-full sm:space-x-8 max-[639px]:justify-evenly md:inline-flex items-center ">
                        <Searchbar ref={inputRef} />
                        <Button
                            onClick={handleClickSearch}
                            size="lg"
                            className="flex items-center gap-3 rounded-full bg-light-primary dark:bg-dark-primary"
                        >
                            <SearchIcon className="!text-light-on-primary dark:!text-dark-on-primary" />
                            <span className="text-light-on-primary dark:text-dark-on-primary">Search</span>
                        </Button>
                    </div>
                    <Alert
                        open={isOpenAlert}
                        className="absolute -bottom-16 w-3/4 bg-light-error-container text-light-on-error-container"
                        action={
                            <IconButton
                                variant="text"
                                size="sm"
                                className="!absolute top-3 right-3"
                                onClick={() => setIsOpenAlert(false)}
                            >
                                <CloseIcon color="#410002" />
                            </IconButton>
                        }
                    >
                        You need to fill your delivery address before continuing
                    </Alert>
                </div>
            </section>
            <section className="w-full mt-48 2xl:px-40 xl:px-32 lg:px-28 sm:px-8 max-[640px]:px-7 scroll-mt-2 snap-center">
                <h1 className="text-4xl text-light-on-background dark:text-dark-on-background">
                    Popular restaurants near you
                </h1>
                <div className="slider-container max-[848px]:px-8 max-[640px]:px-0">
                    <Slider className="flex mt-9 h-auto" {...settings}>
                        {RESTAURANT_ITEMS.map((item, index) => (
                            <RestaurantCard data={item} key={index} />
                        ))}
                    </Slider>
                </div>
            </section>
            <section className="w-full mt-52 2xl:px-40 xl:px-32 lg:px-28 sm:px-8 max-[640px]:px-7 py-10 scroll-mt-2 snap-center bg-light-secondary-container dark:bg-dark-secondary-container">
                <div>
                    <h1 className="text-4xl text-light-on-secondary-container dark:text-dark-on-secondary-container">
                        There's something for you!
                    </h1>
                    <div className="grid justify-items-center xl:grid-cols-6 md:grid-cols-4 max-[640px]:grid-cols-2 gap-5 mt-9 w-full h-auto">
                        {DATABASE_ITEMS.map((item, index) => (
                            <DatabaseButton data={item} key={index} />
                        ))}
                    </div>
                </div>
            </section>
            <section className="w-full mt-64 2xl:px-40 xl:px-32 lg:px-28 sm:px-8 max-[640px]:px-7 scroll-mt-2 snap-center">
                <div>
                    <h1 className="text-4xl text-light-on-background dark:text-dark-on-background">Why VegFoLos?</h1>
                    <div className="mt-7 flex-col space-y-5">
                        <div className="flex space-x-2">
                            <LotusIcon2 />
                            <p className="text-light-on-background dark:text-dark-on-background">
                                <strong>Quickest</strong> - VegFoLos provides the fastest food delivery in the market.
                            </p>
                        </div>{' '}
                        <div className="flex space-x-2">
                            <LotusIcon2 />
                            <p className="text-light-on-background dark:text-dark-on-background">
                                <strong>Easiest</strong> - Grabbing your food is just a few clicks or taps away. Order
                                online or download our VegFoLos app for a faster and more rewarding experience.
                            </p>
                        </div>
                        <div className="flex space-x-2">
                            <LotusIcon2 />
                            <p className="text-light-on-background dark:text-dark-on-background">
                                <strong>Healthiest</strong> - Connecting healthy and high quality vegetarian food shops
                                to consumers
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Homepage;
