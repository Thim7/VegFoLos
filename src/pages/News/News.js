import Header from '~/layouts/components/Header';
import { NEWS_TABS_DATA } from '~/data';
import UnderlineTabs from '~/components/UnderlineTabs';

function News() {
    return (
        <>
            <Header isNews />
            <section className="w-full">
                <UnderlineTabs
                    className="pt-32 2xl:px-40 xl:px-32 lg:px-28 sm:px-8 max-[640px]:px-4"
                    data={NEWS_TABS_DATA}
                />
            </section>
        </>
    );
}

export default News;
