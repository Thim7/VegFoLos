import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, useEffect } from 'react';

import images from '~/assets/img';
import Button from '~/components/Button';
import { LotusIcon2 } from '~/components/Icons';
import RestaurantCard from '~/components/RestaurantCard';
import Searchbar from '~/components/Searchbar';
import Header from '~/layouts/components/Header';

const RESTAURANT_ITEM = [
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
function Homepage() {
    const [heightImage, setHeightImage] = useState(1000);
    const imageRef = useRef();

    const windowHeight = window.innerHeight;

    useEffect(() => {
        const heroImage = imageRef.current;
        setHeightImage(heroImage.clientHeight);
    }, []);

    return (
        <div style={{ height: 3000 }} className="bg-light-background">
            <Header hide breakPointTransition={heightImage} />
            {/* Hero Image */}
            <section className="flex relative snap-start snap-normal">
                <img ref={imageRef} id="heroImage" className={`w-full h-auto`} src={images.heroImage} alt="Hero" />
                <div
                    className={`flex-col absolute ml-40 top-[${windowHeight / 2}px] max-w-xl w-full space-y-16 -translate-y-1/2`}
                >
                    <div className="w-full text-text-color">
                        <h1 className="text-4xl">Good Morning!</h1>
                        <h2 className="text-xl">Where should we deliver your food today?</h2>
                    </div>
                    <div className="inline-flex items-center">
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
            <section className="mt-16 mx-40 snap-center snap-always h-96 scroll-mt-2">
                <div>
                    <h1 className="text-4xl text-light-on-background">There's something for you!</h1>
                </div>
            </section>
            <section className="mt-16 mx-40 snap-center snap-always h-96 scroll-mt-2">
                <div>
                    <h1 className="text-4xl text-light-on-background">Popular restaurants near you</h1>
                    <div className="inline-flex mt-3 space-x-8 w-full h-auto overscroll-y-auto">
                        {RESTAURANT_ITEM.map((item, index) => (
                            <RestaurantCard data={item} key={index} />
                        ))}
                    </div>
                </div>
            </section>
            <section className="mt-16 mx-40 snap-center snap-always h-96 scroll-mt-2">
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
        </div>
    );
}

export default Homepage;
