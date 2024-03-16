import { Link } from 'react-router-dom';
import config from '~/config';
import images from '~/assets/img';
import Button from '~/components/Button';
import IconButton from '~/components/IconButton';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
function Footer() {
    return (
        <footer className="mt-64 2xl:px-40 xl:px-32 lg:px-28 sm:px-8 max-[640px]:px-4 w-full snap-center snap-always scroll-mt-2 bg-light-surface-container-lowest divide-y">
            <Link to={config.routes.home} className>
                <img className="shrink-0 h-auto max-w-full w-36 z-50 py-8" src={images.logo} alt="VegFoLos" />
            </Link>
            <div className={`flex w-full justify-between py-8 flex-wrap-reverse`}>
                <div className="sm:hidden max-[639px]:inline-flex justify-between items-center">
                    <IconButton icon={faFacebookF} />
                    <IconButton icon={faInstagram} />
                    <IconButton icon={faTwitter} />
                </div>

                <div className="max-[639px]:w-full max-[639px]:hidden sm:flex justify-evenly sm:space-x-8 sm:justify-start flex-shrink-0 items-center">
                    <button className="rounded-lg hover:shadow-[0_1px_3px_1px_rgba(0,0,0,0.3),_0_1px_2px_0_rgba(0,0,0,0.3)]">
                        <img src={images.btnDownloadGG} alt="DownLoad on Google Play" />
                    </button>
                    <button className="rounded-lg hover:shadow-[0_1px_3px_1px_rgba(0,0,0,0.3),_0_1px_2px_0_rgba(0,0,0,0.3)]">
                        <img src={images.btnDownloadAppStore} alt="DownLoad on App Store" />
                    </button>
                </div>
                <div className="max-[639px]:w-full grid grid-flow-col sm:grid-rows-2 md:gap-x-2">
                    <Button text title="Help" />
                    <Button text title="About Us" />
                    <Button text title="Contact" />
                    <Button text title="Hiring" />
                </div>
            </div>
            <div
                className={`flex max-[639px]:justify-center sm:justify-between py-5 sm:py-8 max-[639px]:space-y-3 flex-wrap `}
            >
                <div className="max-[639px]:hidden sm:inline-flex justify-between items-center">
                    <IconButton icon={faFacebookF} />
                    <IconButton icon={faInstagram} />
                    <IconButton icon={faTwitter} />
                </div>
                <div className="max-[639px]:w-full max-[639px]:flex justify-evenly sm:space-x-8 sm:justify-start flex-shrink-0 items-center sm:hidden">
                    <button className="rounded-lg hover:shadow-[0_1px_3px_1px_rgba(0,0,0,0.3),_0_1px_2px_0_rgba(0,0,0,0.3)]">
                        <img src={images.btnDownloadGG} alt="DownLoad on Google Play" />
                    </button>
                    <button className="rounded-lg hover:shadow-[0_1px_3px_1px_rgba(0,0,0,0.3),_0_1px_2px_0_rgba(0,0,0,0.3)]">
                        <img src={images.btnDownloadAppStore} alt="DownLoad on App Store" />
                    </button>
                </div>
                <div className="inline-flex justify-evenly space-x-2 sm:justify-between items-center sm:space-x-4">
                    <p className="text-light-on-surface">2023 VegFoLos</p>
                    <p className="text-light-on-surface">Terms</p>
                    <p className="text-light-on-surface">Privacy Policy</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
