import { Carousel } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

function CustomCarousel({ data }) {
    return (
        <Carousel
            className="rounded-lg"
            autoplay
            loop
            navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill('').map((_, i) => (
                        <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                activeIndex === i ? 'w-8 h-2 bg-white' : 'w-2 h-2 bg-white/50'
                            }`}
                            onClick={() => setActiveIndex(i)}
                        />
                    ))}
                </div>
            )}
        >
            {data.map((item, index) => (
                <Link
                    key={index}
                    className="relative w-full h-64 hover:shadow-[0_1px_3px_1px_rgba(0,0,0,0.3),_0_1px_2px_0_rgba(0,0,0,0.3)] rounded-lg"
                >
                    <img src={item.img} alt={item.title} className="w-full h-auto max-h-64 object-cover rounded-lg" />
                    <div className="absolute p-2 bottom-2 left-2 w-[calc(100%-16px)] rounded-lg bg-light-tertiary-container text-light-on-surface">
                        <h1 className="text-xl">{item.title}</h1>
                        <p className="text-sm truncate">{item.desc}</p>
                    </div>
                </Link>
            ))}
        </Carousel>
    );
}

export default CustomCarousel;
