import Header from '~/layouts/components/Header';
import UnderlineTabs from '~/layouts/components/UnderlineTabs';
import { TABS_DATA } from '~/data';

function News() {
    return (
        <div className="">
            <Header isNews />
            <section className=" pt-32 snap-end snap-always w-full">
                <UnderlineTabs data={TABS_DATA} />
            </section>
        </div>
    );
}

export default News;
