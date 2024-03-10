import images from '~/assets/img';
import Header from '~/layouts/components/Header';
import { useState, useRef, useEffect } from 'react';
function Homepage() {
    const [heightImage, setHeightImage] = useState(1000);
    const imageRef = useRef();

    useEffect(() => {
        const heroImage = imageRef.current;
        setHeightImage(heroImage.clientHeight);
    }, []);

    return (
        <div style={{ height: 3000 }}>
            <Header hide breakPointTransition={heightImage} />
            <div>
                <img ref={imageRef} id="heroImage" className="w-full h-auto" src={images.heroImage} alt="Hero" />
            </div>
        </div>
    );
}

export default Homepage;
