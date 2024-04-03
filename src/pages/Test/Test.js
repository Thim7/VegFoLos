import Searchbar from '~/components/Searchbar';
import Header from '~/layouts/components/Header';

function Test() {
    return (
        <div className="h-[2000px]">
            <Header />
            <div className="bg-green-500 h-[1500px]">
                <div className="sticky bg-purple-600 top-32 h-[300px]">
                    <div className="bg-light-primary h-10 top-64 sticky"></div>
                </div>
            </div>
        </div>
    );
}

export default Test;
