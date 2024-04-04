import Header from '~/layouts/components/Header';

function Test() {
    return (
        <div className="h-[2000px]">
            <Header />
            <div className="flex-col bg-brown-400 h-[1000px]">
                <div className="sticky top-32 mt-40 bg-blue-gray-800 h-32"></div>
            </div>
        </div>
    );
}

export default Test;
