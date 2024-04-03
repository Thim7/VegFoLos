import { useRef } from 'react';
import Searchbar from '~/components/Searchbar';
import Header from '~/layouts/components/Header';

function Test() {
    const ref = useRef();
    return (
        <div className="h-[2000px]">
            <div className="h-full bg-brown-800">
                <button
                    onClick={() => {
                        ref.current?.scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    Click me!!!
                </button>
            </div>
            <div ref={ref} className="bg-green-500 mt-[1500px]">
                <span>U here!!!</span>
            </div>
        </div>
    );
}

export default Test;
