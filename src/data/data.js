import images from '~/assets/img';
import NewsTabContent from '~/components/NewsTabContent';

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

export const TABS_DATA = [
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
