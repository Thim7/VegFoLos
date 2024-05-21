import images from '~/assets/img';
import NewsTabContent from '~/components/NewsTabContent';
export const DATABASE_ITEMS = [
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
export const RESTAURANT_ITEMS = [
    {
        img: images.restaurantBanner,
        alt: 'Restaurant Banner',
        title: 'Fresh Salad - Flower Sun',
        trusted: true,
        tags: ['Salad', 'Rice', 'Noodle'],
        star: 4.5,
        timeDelivery: 20,
        distanceDelivery: 1.3,
        foodTabData: [
            {
                label: 'Flash Sale',
                value: 'flashSale',
                content: [
                    {
                        img: images.restaurantBanner,
                        foodName: 'Four Seasons Mixed Salad',
                        desc: 'Order our Salad and Italian Bread combo today and experience the perfect balance of freshness, flavor, and tradition. It&apos;s a delightful pairing that will leave you completely satisfied.',
                        sale: 5000,
                        originalPrice: 55000,
                        totalPrice: 50000,
                        note: '',
                        optional: [
                            {
                                toppingName: 'Tomato',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Cucumber',
                                toppingPrice: 5000,
                            },
                        ],
                    },
                    {
                        img: images.blogImage2,
                        foodName: 'Salad & Italian bread 2',
                        desc: 'Order our Salad and Italian Bread combo today and experience the perfect balance of freshness, flavor, and tradition. It&apos;s a delightful pairing that will leave you completely satisfied.',
                        sale: 5000,
                        originalPrice: 55000,
                        totalPrice: 50000,
                        note: '',
                        optional: [
                            {
                                toppingName: 'Tomato',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Cucumber',
                                toppingPrice: 5000,
                            },
                        ],
                    },
                    {
                        img: images.blogImage2,
                        foodName: 'Salad & Italian bread',
                        desc: 'Order our Salad and Italian Bread combo today and experience the perfect balance of freshness, flavor, and tradition. It&apos;s a delightful pairing that will leave you completely satisfied.',
                        sale: 5000,
                        originalPrice: 55000,
                        totalPrice: 50000,
                        note: '',
                        optional: [
                            {
                                toppingName: 'Tomato',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Cucumber',
                                toppingPrice: 5000,
                            },
                        ],
                    },
                ],
            },
            {
                label: 'Best Seller',
                value: 'bestSeller',
                content: [
                    {
                        img: images.blogImage2,
                        foodName: 'Salad & Italian bread',
                        desc: 'Order our Salad and Italian Bread combo today and experience the perfect balance of freshness, flavor, and tradition. It&apos;s a delightful pairing that will leave you completely satisfied.',
                        sale: 5000,
                        originalPrice: 55000,
                        totalPrice: 50000,
                        note: '',
                        optional: [
                            {
                                toppingName: 'Tomato',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Cucumber',
                                toppingPrice: 5000,
                            },
                        ],
                    },
                    {
                        img: images.blogImage2,
                        foodName: 'Salad & Italian bread',
                        desc: 'Order our Salad and Italian Bread combo today and experience the perfect balance of freshness, flavor, and tradition. It&apos;s a delightful pairing that will leave you completely satisfied.',
                        sale: 5000,
                        originalPrice: 55000,
                        totalPrice: 50000,
                        note: '',
                        optional: [
                            {
                                toppingName: 'Tomato',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Cucumber',
                                toppingPrice: 5000,
                            },
                        ],
                    },
                    {
                        img: images.blogImage2,
                        foodName: 'Salad & Italian bread',
                        desc: 'Order our Salad and Italian Bread combo today and experience the perfect balance of freshness, flavor, and tradition. It&apos;s a delightful pairing that will leave you completely satisfied.',
                        sale: 5000,
                        originalPrice: 55000,
                        totalPrice: 50000,
                        note: '',
                        optional: [
                            {
                                toppingName: 'Tomato',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Cucumber',
                                toppingPrice: 5000,
                            },
                        ],
                    },
                ],
            },
            {
                label: 'Best Rating',
                value: 'bestRating',
                content: [
                    {
                        img: images.blogImage2,
                        foodName: 'Salad & Italian bread',
                        desc: 'Order our Salad and Italian Bread combo today and experience the perfect balance of freshness, flavor, and tradition. It&apos;s a delightful pairing that will leave you completely satisfied.',
                        sale: 5000,
                        originalPrice: 55000,
                        totalPrice: 50000,
                        note: '',
                        optional: [
                            {
                                toppingName: 'Tomato',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Cucumber',
                                toppingPrice: 5000,
                            },
                        ],
                    },
                    {
                        img: images.blogImage2,
                        foodName: 'Salad & Italian bread',
                        desc: 'Order our Salad and Italian Bread combo today and experience the perfect balance of freshness, flavor, and tradition. It&apos;s a delightful pairing that will leave you completely satisfied.',
                        sale: 5000,
                        originalPrice: 55000,
                        totalPrice: 50000,
                        note: '',
                        optional: [
                            {
                                toppingName: 'Tomato',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Cucumber',
                                toppingPrice: 5000,
                            },
                        ],
                    },
                    {
                        img: images.blogImage2,
                        foodName: 'Salad & Italian bread',
                        desc: 'Order our Salad and Italian Bread combo today and experience the perfect balance of freshness, flavor, and tradition. It&apos;s a delightful pairing that will leave you completely satisfied.',
                        sale: 5000,
                        originalPrice: 55000,
                        totalPrice: 50000,
                        note: '',
                        optional: [
                            {
                                toppingName: 'Tomato',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Cucumber',
                                toppingPrice: 5000,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        img: images.blogImage4,
        alt: 'Restaurant Banner',
        title: 'Goi Cuon - Do Thuy',
        trusted: false,
        tags: ['Spring Roll'],
        star: 4.3,
        timeDelivery: 30,
        distanceDelivery: 2.6,
        foodTabData: [
            {
                label: 'Flash Sale',
                value: 'flashSale',
                content: [
                    {
                        img: images.blogImage4,
                        foodName: 'Five-color Spring Roll',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo.',
                        sale: 5000,
                        originalPrice: 35000,
                        totalPrice: 30000,
                        note: '',
                        optional: [
                            {
                                toppingName: 'Carrot',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Cucumber',
                                toppingPrice: 5000,
                            },
                        ],
                    },
                    {
                        img: images.blogImage4,
                        foodName: 'Five-color Spring Roll',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo.',
                        sale: 5000,
                        originalPrice: 35000,
                        totalPrice: 30000,
                        note: '',
                        optional: [
                            {
                                toppingName: 'Carrot',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Cucumber',
                                toppingPrice: 5000,
                            },
                        ],
                    },
                    {
                        img: images.blogImage4,
                        foodName: 'Five-color Spring Roll',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo.',
                        sale: 5000,
                        originalPrice: 35000,
                        totalPrice: 30000,
                        note: '',
                        optional: [
                            {
                                toppingName: 'Carrot',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Cucumber',
                                toppingPrice: 5000,
                            },
                        ],
                    },
                ],
            },
            {
                label: 'Best Seller',
                value: 'bestSeller',
                content: [
                    {
                        img: images.blogImage4,
                        foodName: 'Five-color Spring Roll',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo.',
                        sale: 5000,
                        originalPrice: 35000,
                        totalPrice: 30000,
                        note: '',
                        optional: [
                            {
                                toppingName: 'Carrot',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Cucumber',
                                toppingPrice: 5000,
                            },
                        ],
                    },
                    {
                        img: images.blogImage4,
                        foodName: 'Five-color Spring Roll',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo.',
                        sale: 5000,
                        originalPrice: 35000,
                        totalPrice: 30000,
                        note: '',
                        optional: [
                            {
                                toppingName: 'Carrot',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Cucumber',
                                toppingPrice: 5000,
                            },
                        ],
                    },
                    {
                        img: images.blogImage4,
                        foodName: 'Five-color Spring Roll',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo.',
                        sale: 5000,
                        originalPrice: 35000,
                        totalPrice: 30000,
                        note: '',
                        optional: [
                            {
                                toppingName: 'Carrot',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Cucumber',
                                toppingPrice: 5000,
                            },
                        ],
                    },
                ],
            },
            {
                label: 'Best Rating',
                value: 'bestRating',
                content: [
                    {
                        img: images.blogImage4,
                        foodName: 'Five-color Spring Roll',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo.',
                        sale: 5000,
                        originalPrice: 35000,
                        totalPrice: 30000,
                        note: '',
                        optional: [
                            {
                                toppingName: 'Carrot',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Cucumber',
                                toppingPrice: 5000,
                            },
                        ],
                    },
                    {
                        img: images.blogImage4,
                        foodName: 'Five-color Spring Roll',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo.',
                        sale: 5000,
                        originalPrice: 35000,
                        totalPrice: 30000,
                        note: '',
                        optional: [
                            {
                                toppingName: 'Carrot',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Cucumber',
                                toppingPrice: 5000,
                            },
                        ],
                    },
                    {
                        img: images.blogImage4,
                        foodName: 'Five-color Spring Roll',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo.',
                        sale: 5000,
                        originalPrice: 35000,
                        totalPrice: 30000,
                        note: '',
                        optional: [
                            {
                                toppingName: 'Carrot',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Cucumber',
                                toppingPrice: 5000,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        img: images.blogImage5,
        alt: 'Restaurant Banner',
        title: 'Healthy Breakfast - YumYum',
        trusted: true,
        tags: ['Soup', 'Fruit', 'Nutrition'],
        star: 4.9,
        timeDelivery: 10,
        distanceDelivery: 0.7,
        foodTabData: [
            {
                label: 'Flash Sale',
                value: 'flashSale',
                content: [
                    {
                        img: images.blogImage5,
                        foodName: 'Tropical Soup',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo.',
                        sale: 9000,
                        originalPrice: 49000,
                        totalPrice: 40000,
                        note: '',
                        optional: [
                            {
                                toppingName: 'Banana',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Walnut',
                                toppingPrice: 15000,
                            },
                            {
                                toppingName: 'Almond',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Macadamia',
                                toppingPrice: 15000,
                            },
                        ],
                    },
                    {
                        img: images.blogImage5,
                        foodName: 'Tropical Soup',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo.',
                        sale: 9000,
                        originalPrice: 49000,
                        totalPrice: 40000,
                        note: '',
                        optional: [
                            {
                                toppingName: 'Banana',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Walnut',
                                toppingPrice: 15000,
                            },
                            {
                                toppingName: 'Almond',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Macadamia',
                                toppingPrice: 15000,
                            },
                        ],
                    },
                    {
                        img: images.blogImage5,
                        foodName: 'Tropical Soup',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo.',
                        sale: 9000,
                        originalPrice: 49000,
                        totalPrice: 40000,
                        note: '',
                        optional: [
                            {
                                toppingName: 'Banana',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Walnut',
                                toppingPrice: 15000,
                            },
                            {
                                toppingName: 'Almond',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Macadamia',
                                toppingPrice: 15000,
                            },
                        ],
                    },
                ],
            },
            {
                label: 'Best Seller',
                value: 'bestSeller',
                content: [
                    {
                        img: images.blogImage5,
                        foodName: 'Tropical Soup',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo.',
                        sale: 9000,
                        originalPrice: 49000,
                        totalPrice: 40000,
                        note: '',
                        optional: [
                            {
                                toppingName: 'Banana',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Walnut',
                                toppingPrice: 15000,
                            },
                            {
                                toppingName: 'Almond',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Macadamia',
                                toppingPrice: 15000,
                            },
                        ],
                    },
                    {
                        img: images.blogImage5,
                        foodName: 'Tropical Soup',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo.',
                        sale: 9000,
                        originalPrice: 49000,
                        totalPrice: 40000,
                        note: '',
                        optional: [
                            {
                                toppingName: 'Banana',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Walnut',
                                toppingPrice: 15000,
                            },
                            {
                                toppingName: 'Almond',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Macadamia',
                                toppingPrice: 15000,
                            },
                        ],
                    },
                    {
                        img: images.blogImage5,
                        foodName: 'Tropical Soup',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo.',
                        sale: 9000,
                        originalPrice: 49000,
                        totalPrice: 40000,
                        note: '',
                        optional: [
                            {
                                toppingName: 'Banana',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Walnut',
                                toppingPrice: 15000,
                            },
                            {
                                toppingName: 'Almond',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Macadamia',
                                toppingPrice: 15000,
                            },
                        ],
                    },
                ],
            },
            {
                label: 'Best Rating',
                value: 'bestRating',
                content: [
                    {
                        img: images.blogImage5,
                        foodName: 'Tropical Soup',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo.',
                        sale: 9000,
                        originalPrice: 49000,
                        totalPrice: 40000,
                        note: '',
                        optional: [
                            {
                                toppingName: 'Banana',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Walnut',
                                toppingPrice: 15000,
                            },
                            {
                                toppingName: 'Almond',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Macadamia',
                                toppingPrice: 15000,
                            },
                        ],
                    },
                    {
                        img: images.blogImage5,
                        foodName: 'Tropical Soup',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo.',
                        sale: 9000,
                        originalPrice: 49000,
                        totalPrice: 40000,
                        note: '',
                        optional: [
                            {
                                toppingName: 'Banana',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Walnut',
                                toppingPrice: 15000,
                            },
                            {
                                toppingName: 'Almond',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Macadamia',
                                toppingPrice: 15000,
                            },
                        ],
                    },
                    {
                        img: images.blogImage5,
                        foodName: 'Tropical Soup',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo.',
                        sale: 9000,
                        originalPrice: 49000,
                        totalPrice: 40000,
                        note: '',
                        optional: [
                            {
                                toppingName: 'Banana',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Walnut',
                                toppingPrice: 15000,
                            },
                            {
                                toppingName: 'Almond',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Macadamia',
                                toppingPrice: 15000,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        img: images.blogImage8,
        alt: 'Restaurant Banner',
        title: 'Vegetarian Hamburger - ViVi',
        tags: ['Salad', 'Hamburger', 'Bread'],
        star: 4.4,
        timeDelivery: 22,
        distanceDelivery: 1.5,
        foodTabData: [
            {
                label: 'Flash Sale',
                value: 'flashSale',
                content: [
                    {
                        img: images.blogImage8,
                        foodName: 'Peach Burger',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo.',
                        sale: 9000,
                        originalPrice: 39000,
                        totalPrice: 30000,
                        note: '',
                        optional: [
                            {
                                toppingName: 'Tomato',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Cucumber',
                                toppingPrice: 5000,
                            },
                        ],
                    },
                    {
                        img: images.blogImage8,
                        foodName: 'Peach Burger',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo.',
                        sale: 9000,
                        originalPrice: 39000,
                        totalPrice: 30000,
                        note: '',
                        optional: [
                            {
                                toppingName: 'Tomato',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Cucumber',
                                toppingPrice: 5000,
                            },
                        ],
                    },
                    {
                        img: images.blogImage8,
                        foodName: 'Peach Burger',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo.',
                        sale: 9000,
                        originalPrice: 39000,
                        totalPrice: 30000,
                        note: '',
                        optional: [
                            {
                                toppingName: 'Tomato',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Cucumber',
                                toppingPrice: 5000,
                            },
                        ],
                    },
                ],
            },
            {
                label: 'Best Seller',
                value: 'bestSeller',
                content: [
                    {
                        img: images.blogImage8,
                        foodName: 'Peach Burger',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo.',
                        sale: 9000,
                        originalPrice: 39000,
                        totalPrice: 30000,
                        note: '',
                        optional: [
                            {
                                toppingName: 'Tomato',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Cucumber',
                                toppingPrice: 5000,
                            },
                        ],
                    },
                    {
                        img: images.blogImage8,
                        foodName: 'Peach Burger',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo.',
                        sale: 9000,
                        originalPrice: 39000,
                        totalPrice: 30000,
                        note: '',
                        optional: [
                            {
                                toppingName: 'Tomato',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Cucumber',
                                toppingPrice: 5000,
                            },
                        ],
                    },
                    {
                        img: images.blogImage8,
                        foodName: 'Peach Burger',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo.',
                        sale: 9000,
                        originalPrice: 39000,
                        totalPrice: 30000,
                        note: '',
                        optional: [
                            {
                                toppingName: 'Tomato',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Cucumber',
                                toppingPrice: 5000,
                            },
                        ],
                    },
                ],
            },
            {
                label: 'Best Rating',
                value: 'bestRating',
                content: [
                    {
                        img: images.blogImage8,
                        foodName: 'Peach Burger',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo.',
                        sale: 9000,
                        originalPrice: 39000,
                        totalPrice: 30000,
                        note: '',
                        optional: [
                            {
                                toppingName: 'Tomato',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Cucumber',
                                toppingPrice: 5000,
                            },
                        ],
                    },
                    {
                        img: images.blogImage8,
                        foodName: 'Peach Burger',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo.',
                        sale: 9000,
                        originalPrice: 39000,
                        totalPrice: 30000,
                        note: '',
                        optional: [
                            {
                                toppingName: 'Tomato',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Cucumber',
                                toppingPrice: 5000,
                            },
                        ],
                    },
                    {
                        img: images.blogImage8,
                        foodName: 'Peach Burger',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo.',
                        sale: 9000,
                        originalPrice: 39000,
                        totalPrice: 30000,
                        note: '',
                        optional: [
                            {
                                toppingName: 'Tomato',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Cucumber',
                                toppingPrice: 5000,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        img: images.blogImage9,
        alt: 'Restaurant Banner',
        title: 'Pan-fried Bread - Hula',
        trusted: false,
        tags: ['Salad', 'Fry', 'Bread'],
        star: 4.1,
        timeDelivery: 10,
        distanceDelivery: 0.7,
        foodTabData: [
            {
                label: 'Flash Sale',
                value: 'flashSale',
                content: [
                    {
                        img: images.blogImage9,
                        foodName: 'Special Pan-fried Bread',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo.',
                        sale: 3000,
                        originalPrice: 25000,
                        totalPrice: 22000,
                        note: '',
                        optional: [
                            {
                                toppingName: 'Tomato',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Cucumber',
                                toppingPrice: 5000,
                            },
                        ],
                    },
                    {
                        img: images.blogImage9,
                        foodName: 'Special Pan-fried Bread',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo.',
                        sale: 3000,
                        originalPrice: 25000,
                        totalPrice: 22000,
                        note: '',
                        optional: [
                            {
                                toppingName: 'Tomato',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Cucumber',
                                toppingPrice: 5000,
                            },
                        ],
                    },
                    {
                        img: images.blogImage9,
                        foodName: 'Special Pan-fried Bread',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo.',
                        sale: 3000,
                        originalPrice: 25000,
                        totalPrice: 22000,
                        note: '',
                        optional: [
                            {
                                toppingName: 'Tomato',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Cucumber',
                                toppingPrice: 5000,
                            },
                        ],
                    },
                ],
            },
            {
                label: 'Best Seller',
                value: 'bestSeller',
                content: [
                    {
                        img: images.blogImage9,
                        foodName: 'Special Pan-fried Bread',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo.',
                        sale: 3000,
                        originalPrice: 25000,
                        totalPrice: 22000,
                        note: '',
                        optional: [
                            {
                                toppingName: 'Tomato',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Cucumber',
                                toppingPrice: 5000,
                            },
                        ],
                    },
                    {
                        img: images.blogImage9,
                        foodName: 'Special Pan-fried Bread',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo.',
                        sale: 3000,
                        originalPrice: 25000,
                        totalPrice: 22000,
                        note: '',
                        optional: [
                            {
                                toppingName: 'Tomato',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Cucumber',
                                toppingPrice: 5000,
                            },
                        ],
                    },
                    {
                        img: images.blogImage9,
                        foodName: 'Special Pan-fried Bread',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo.',
                        sale: 3000,
                        originalPrice: 25000,
                        totalPrice: 22000,
                        note: '',
                        optional: [
                            {
                                toppingName: 'Tomato',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Cucumber',
                                toppingPrice: 5000,
                            },
                        ],
                    },
                ],
            },
            {
                label: 'Best Rating',
                value: 'bestRating',
                content: [
                    {
                        img: images.blogImage9,
                        foodName: 'Special Pan-fried Bread',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo.',
                        sale: 3000,
                        originalPrice: 25000,
                        totalPrice: 22000,
                        note: '',
                        optional: [
                            {
                                toppingName: 'Tomato',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Cucumber',
                                toppingPrice: 5000,
                            },
                        ],
                    },
                    {
                        img: images.blogImage9,
                        foodName: 'Special Pan-fried Bread',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo.',
                        sale: 3000,
                        originalPrice: 25000,
                        totalPrice: 22000,
                        note: '',
                        optional: [
                            {
                                toppingName: 'Tomato',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Cucumber',
                                toppingPrice: 5000,
                            },
                        ],
                    },
                    {
                        img: images.blogImage9,
                        foodName: 'Special Pan-fried Bread',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo.',
                        sale: 3000,
                        originalPrice: 25000,
                        totalPrice: 22000,
                        note: '',
                        optional: [
                            {
                                toppingName: 'Tomato',
                                toppingPrice: 10000,
                            },
                            {
                                toppingName: 'Cucumber',
                                toppingPrice: 5000,
                            },
                        ],
                    },
                ],
            },
        ],
    },
];
export const CAROUSEL_DATA = [
    {
        img: images.blogImage,
        title: 'Lorem ipsum dolor sit amet consectetur.',
        desc: 'Lorem ipsum dolor sit amet consectetur. Lacus luctus pretium massa turpis tristique mi aliquet sed massa. Vestibulum sit ut gravida metus mauris vitae eget id. Non laoreet cras pulvinar ipsum hendrerit nam commodo feugiat. Auctor pulvinar at enim porttitor. Facilisis elementum quis fames tortor non.',
    },
    {
        img: images.blogImage2,
        title: 'Lorem ipsum dolor sit amet consectetur.',
        desc: 'Massa eget consequat scelerisque enim euismod penatibus ullamcorper. Egestas arcu nunc odio donec nisl non aliquet mi. Fermentum arcu auctor at ut a vel non gravida. Amet tristique mi viverra enim ullamcorper. Eget at turpis at dui pellentesque ut vel lacus faucibus. Felis in tellus orci leo amet. Nullam felis penatibus suscipit viverra vitae est viverra ultrices lectus.',
    },
    {
        img: images.blogImage3,
        title: 'Lorem ipsum dolor sit amet consectetur.',
        desc: 'Vitae nullam accumsan viverra tortor pulvinar. Consectetur id in quisque ac placerat. Praesent condimentum id platea natoque magna malesuada etiam mauris cursus. Quam mattis turpis lacus mus massa egestas nullam. Nunc purus vitae tincidunt mauris sit duis diam nulla. Diam suspendisse amet elit erat dui. Nunc tincidunt posuere turpis ut morbi. Ut scelerisque urna semper fermentum ultrices eros tortor. Vulputate quam quam pharetra proin condimentum mattis risus. Sapien at dapibus urna vitae scelerisque. Fringilla purus cursus viverra et ultricies posuere. Tellus at justo diam pellentesque malesuada morbi. Vulputate vitae viverra pharetra et rhoncus dictum ullamcorper bibendum pellentesque.',
    },
    {
        img: images.blogImage4,
        title: 'Lorem ipsum dolor sit amet consectetur.',
        desc: 'Vitae nullam accumsan viverra tortor pulvinar. Consectetur id in quisque ac placerat. Praesent condimentum id platea natoque magna malesuada etiam mauris cursus. Quam mattis turpis lacus mus massa egestas nullam. Nunc purus vitae tincidunt mauris sit duis diam nulla. Diam suspendisse amet elit erat dui. Nunc tincidunt posuere turpis ut morbi. Ut scelerisque urna semper fermentum ultrices eros tortor. Vulputate quam quam pharetra proin condimentum mattis risus. Sapien at dapibus urna vitae scelerisque. Fringilla purus cursus viverra et ultricies posuere. Tellus at justo diam pellentesque malesuada morbi. Vulputate vitae viverra pharetra et rhoncus dictum ullamcorper bibendum pellentesque.',
    },
    {
        img: images.blogImage5,
        title: 'Lorem ipsum dolor sit amet consectetur.',
        desc: 'Vitae nullam accumsan viverra tortor pulvinar. Consectetur id in quisque ac placerat. Praesent condimentum id platea natoque magna malesuada etiam mauris cursus. Quam mattis turpis lacus mus massa egestas nullam. Nunc purus vitae tincidunt mauris sit duis diam nulla. Diam suspendisse amet elit erat dui. Nunc tincidunt posuere turpis ut morbi. Ut scelerisque urna semper fermentum ultrices eros tortor. Vulputate quam quam pharetra proin condimentum mattis risus. Sapien at dapibus urna vitae scelerisque. Fringilla purus cursus viverra et ultricies posuere. Tellus at justo diam pellentesque malesuada morbi. Vulputate vitae viverra pharetra et rhoncus dictum ullamcorper bibendum pellentesque.',
    },
];

export const FULLBLOGCARD_DATA = [
    {
        img: images.blogImage,
        title: 'Discover the Incredible Benefits of Bananas for Your Health and Well-being',
        desc: 'In a recent study conducted by nutrition experts, bananas have been hailed as a superfood with numerous health benefits. Packed with essential nutrients, this humble fruit has proven to be a valuable addition to a balanced diet. Let&apos;s explore the remarkable advantages of incorporating bananas into your daily routine.',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80',
        avatarName: 'Emery Donin',
        postDate: 'December 12, 2023',
    },
    {
        img: images.blogImage,
        title: 'Discover the Incredible Benefits of Bananas for Your Health and Well-being',
        desc: 'In a recent study conducted by nutrition experts, bananas have been hailed as a superfood with numerous health benefits. Packed with essential nutrients, this humble fruit has proven to be a valuable addition to a balanced diet. Let&apos;s explore the remarkable advantages of incorporating bananas into your daily routine.',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80',
        avatarName: 'Emery Donin',
        postDate: 'December 12, 2023',
    },
    {
        img: images.blogImage,
        title: 'Discover the Incredible Benefits of Bananas for Your Health and Well-being',
        desc: 'In a recent study conducted by nutrition experts, bananas have been hailed as a superfood with numerous health benefits. Packed with essential nutrients, this humble fruit has proven to be a valuable addition to a balanced diet. Let&apos;s explore the remarkable advantages of incorporating bananas into your daily routine.',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80',
        avatarName: 'Emery Donin',
        postDate: 'December 12, 2023',
    },
];

export const NEWS_TABS_DATA = [
    {
        label: 'New Feed',
        value: 'New Feed',
        content: <NewsTabContent label="New" />,
    },
    {
        label: 'Popular',
        value: 'Popular',
        content: <NewsTabContent label="Popular" />,
    },
    {
        label: 'Following',
        value: 'Following',
        content: <NewsTabContent label="Following" />,
    },
    {
        label: 'Video',
        value: 'Video',
        content: <NewsTabContent label="Video" />,
    },
];
