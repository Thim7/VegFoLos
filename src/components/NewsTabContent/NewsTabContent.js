import { FullBlogCard, ShortBlogCard } from '../BlogCard';
import { LotusIcon2 } from '../Icons';
import { Typography } from '@material-tailwind/react';
import Slider from 'react-slick';
import images from '~/assets/img';
import { CAROUSEL_DATA, FULLBLOGCARD_DATA } from '~/data';
import { CustomLeftArrowIcon, CustomRightArrowIcon } from '~/components/Icons';
import CustomCarousel from '../CustomCarousel';

function NewsTabContent({ label = null }) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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
    return (
        <>
            <section className="grid grid-rows-1 grid-flow-col gap-x-8">
                <ShortBlogCard
                    img={images.blogImage6}
                    title="Benefit of blueberry"
                    desc="Blueberries offer numerous health benefits due to their rich nutritional profile. Here are some
                    key benefits of consuming blueberries"
                />
                <ShortBlogCard
                    img={images.blogImage7}
                    title="Benefit of blueberry"
                    desc="Blueberries offer numerous health benefits due to their rich nutritional profile. Here are some
                    key benefits of consuming blueberries"
                />
                <CustomCarousel data={CAROUSEL_DATA} />
            </section>
            <section className="mt-14">
                <div className="inline-flex items-center space-x-2">
                    <LotusIcon2 />
                    <Typography className="text-[22px] font-normal text-light-on-background dark:text-dark-on-background">
                        {label} Posts
                    </Typography>
                </div>
                <div className="mt-6 slider-container">
                    <Slider {...settings} className="flex h-auto">
                        {FULLBLOGCARD_DATA.map((data, index) => (
                            <FullBlogCard key={index} data={data} />
                        ))}
                    </Slider>
                </div>
            </section>
        </>
    );
}

export default NewsTabContent;
