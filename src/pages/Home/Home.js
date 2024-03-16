import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, useEffect } from 'react';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import images from '~/assets/img';
import Button from '~/components/Button';
import DatabaseButton from '~/components/DatabaseButton';
import { CustomArrowIcon, LotusIcon2 } from '~/components/Icons';
import RestaurantCard from '~/components/RestaurantCard';
import Searchbar from '~/components/Searchbar';
import Footer from '~/layouts/components/Footer';
import Header from '~/layouts/components/Header';

const RESTAURANT_ITEMS = [
    {
        img: images.restaurantBanner,
        alt: 'Restaurant Banner',
        title: 'Fresh Salad - Flower Sun',
        trusted: true,
        tags: ['Salad', 'Rice', 'Noodle'],
        star: 4.5,
        timeDelivery: 20,
        distanceDelivery: 1.3,
    },
    {
        img: images.restaurantBanner,
        alt: 'Restaurant Banner',
        title: 'Fresh Salad - Flower Sun',
        trusted: true,
        tags: ['Salad', 'Rice', 'Noodle'],
        star: 4.5,
        timeDelivery: 20,
        distanceDelivery: 1.3,
    },
    {
        img: images.restaurantBanner,
        alt: 'Restaurant Banner',
        title: 'Fresh Salad - Flower Sun',
        trusted: true,
        tags: ['Salad', 'Rice', 'Noodle'],
        star: 4.5,
        timeDelivery: 20,
        distanceDelivery: 1.3,
    },
    {
        img: images.restaurantBanner,
        alt: 'Restaurant Banner',
        title: 'Fresh Salad - Flower Sun',
        trusted: true,
        tags: ['Salad', 'Rice', 'Noodle'],
        star: 4.5,
        timeDelivery: 20,
        distanceDelivery: 1.3,
    },
    {
        img: images.restaurantBanner,
        alt: 'Restaurant Banner',
        title: 'Fresh Salad - Flower Sun',
        trusted: true,
        tags: ['Salad', 'Rice', 'Noodle'],
        star: 4.5,
        timeDelivery: 20,
        distanceDelivery: 1.3,
    },
    {
        img: images.restaurantBanner,
        alt: 'Restaurant Banner',
        title: 'Fresh Salad - Flower Sun',
        trusted: true,
        tags: ['Salad', 'Rice', 'Noodle'],
        star: 4.5,
        timeDelivery: 20,
        distanceDelivery: 1.3,
    },
    {
        img: images.restaurantBanner,
        alt: 'Restaurant Banner',
        title: 'Fresh Salad - Flower Sun',
        trusted: true,
        tags: ['Salad', 'Rice', 'Noodle'],
        star: 4.5,
        timeDelivery: 20,
        distanceDelivery: 1.3,
    },
];

const DATABASE_ITEMS = [
    { img: images.buttonImage, alt: 'Button', title: 'Nearby' },
    { img: images.buttonImage, alt: 'Button', title: 'Nearby' },
    { img: images.buttonImage, alt: 'Button', title: 'Nearby' },
    { img: images.buttonImage, alt: 'Button', title: 'Nearby' },
    { img: images.buttonImage, alt: 'Button', title: 'Nearby' },
    { img: images.buttonImage, alt: 'Button', title: 'Nearby' },
    { img: images.buttonImage, alt: 'Button', title: 'Nearby' },
    { img: images.buttonImage, alt: 'Button', title: 'Nearby' },
    { img: images.buttonImage, alt: 'Button', title: 'Nearby' },
];
function Homepage() {
    const [heightImage, setHeightImage] = useState(1000);
    const imageRef = useRef();

    const screenHeight = window.innerHeight;

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        nextArrow: <CustomArrowIcon />,
        prevArrow: <CustomArrowIcon />,
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

    useEffect(() => {
        const heroImage = imageRef.current;
        setHeightImage(heroImage.clientHeight);
    }, []);

    return (
        <div className="bg-light-background">
            <Header hide breakPointTransition={heightImage} />
            {/* Hero Image */}
            <section className="w-full relative flex snap-start snap-normal">
                <img
                    ref={imageRef}
                    id="heroImage"
                    className={`w-full h-[780px] md:h-auto max-h-[${screenHeight}px] object-cover`}
                    src={images.heroImage}
                    alt="Hero"
                />
                <div
                    className={`2xl:mx-40 xl:mx-32 lg:mx-28 sm:mx-8 max-[640px]:mx-2 flex-col absolute self-center max-w-3xl space-y-16`}
                >
                    <div className="text-light-on-surface text-center md:text-start">
                        <h1 className="text-4xl">Good Morning!</h1>
                        <h2 className="text-base md:text-xl">Where should we deliver your food today?</h2>
                    </div>
                    <div className="flex flex-wrap sm:space-x-8 max-[639px]:justify-evenly md:inline-flex items-center ">
                        <Searchbar />
                        <Button
                            className="ml-8 h-14 text-sm border-transparent font-medium"
                            title="Search"
                            leftIcon={faSearch}
                            primary
                        />
                    </div>
                </div>
            </section>
            <section className="w-full mt-48 2xl:px-40 xl:px-32 lg:px-28 sm:px-8 max-[640px]:px-7 snap-center snap-always scroll-mt-2">
                <h1 className="text-4xl text-light-on-background">Popular restaurants near you</h1>
                <div className="slider-container max-[848px]:px-8 max-[640px]:px-0">
                    <Slider className="flex mt-9 h-auto" {...settings}>
                        {RESTAURANT_ITEMS.map((item, index) => (
                            <RestaurantCard data={item} key={index} />
                        ))}
                    </Slider>
                </div>
            </section>
            <section className="w-full mt-52 2xl:px-40 xl:px-32 lg:px-28 sm:px-8 max-[640px]:px-7 py-10 snap-center snap-always scroll-mt-2 bg-light-tertiary-container">
                <div>
                    <h1 className="text-4xl text-light-on-tertiary-container">There's something for you!</h1>
                    <div className="grid justify-items-center xl:grid-cols-6 md:grid-cols-4 max-[640px]:grid-cols-2 gap-5 mt-9 w-full h-auto">
                        {DATABASE_ITEMS.map((item, index) => (
                            <DatabaseButton data={item} key={index} />
                        ))}
                    </div>
                </div>
            </section>
            <section className="w-full mt-64 2xl:px-40 xl:px-32 lg:px-28 sm:px-8 max-[640px]:px-7 snap-center snap-always scroll-mt-2">
                <div>
                    <h1 className="text-4xl text-light-on-background">Why VegFoLos?</h1>
                    <div className="mt-7 flex-col space-y-5">
                        <div className="flex space-x-2">
                            <LotusIcon2 />
                            <p className="text-light-on-background">
                                <strong>Quickest</strong> - VegFoLos provides the fastest food delivery in the market.
                            </p>
                        </div>{' '}
                        <div className="flex space-x-2">
                            <LotusIcon2 />
                            <p className="text-light-on-background">
                                <strong>Easiest</strong> - Grabbing your food is just a few clicks or taps away. Order
                                online or download our VegFoLos app for a faster and more rewarding experience.
                            </p>
                        </div>
                        <div className="flex space-x-2">
                            <LotusIcon2 />
                            <p className="text-light-on-background">
                                <strong>Healthiest</strong> - Connecting healthy and high quality vegetarian food shops
                                to consumers
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Homepage;
