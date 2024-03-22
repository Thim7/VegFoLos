import { FullBlogCard, ShortBlogCard } from '~/components/BlogCard';
import Header from '~/layouts/components/Header';
import UnderlineTabs from '~/layouts/components/UnderlineTabs';
import images from '~/assets/img';
import CustomCarousel from '~/layouts/components/CustomCarousel';

const CAROUSEL_DATA = [
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

const TABS_DATA = [
    {
        label: 'New Feed',
        value: 'New Feed',
        desc: <FullBlogCard />,
    },
    {
        label: 'Popular',
        value: 'Popular',
        desc: (
            <div className="grid grid-rows-1 grid-flow-col gap-x-8">
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
            </div>
        ),
    },
    {
        label: 'Following',
        value: 'Following',
        desc: `We're not always in the position that we want to be at.
  We're constantly growing. We're constantly making mistakes. We're
  constantly trying to express ourselves and actualize our dreams.`,
    },
    {
        label: 'Video',
        value: 'Video',
        desc: `Because it's about motivating the doers. Because I'm here
  to follow my dreams and inspire other people to follow their dreams, too.`,
    },
];
function News() {
    return (
        <div className="bg-light-background">
            <Header isNews />
            <section className="2xl:px-40 xl:px-32 lg:px-28 sm:px-8 max-[640px]:px-4 pt-32 snap-center snap-always">
                <UnderlineTabs data={TABS_DATA} />
            </section>
        </div>
    );
}

export default News;
