import { Link } from 'react-router-dom';
import config from '~/config';
import images from '~/assets/img';
import Button from '~/components/Button';
import IconButton from '~/components/IconButton';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
function Footer() {
    return (
        <footer className="mt-64 px-40 w-full snap-center snap-always scroll-mt-2 bg-light-surface-container-lowest divide-y">
            <Link to={config.routes.home} className>
                <img className="shrink-0 h-auto max-w-full w-36 z-50 py-8" src={images.logo} alt="VegFoLos" />
            </Link>
            <div className={`flex justify-between py-8`}>
                <div className="flex space-x-8 flex-shrink-0 items-center">
                    <img src={images.btnDownloadGG} alt="DownLoad on Google Play" />
                    <img src={images.btnDownloadAppStore} alt="DownLoad on App Store" />
                </div>
                <div className="grid lg:grid-rows-1 md:grid-cols-2 gap-x-2">
                    <Button text title="Help" />
                    <Button text title="About Us" />
                    <Button text title="Contact" />
                    <Button text title="Hiring" />
                </div>
            </div>
            <div className={`flex justify-between py-8`}>
                <div className="inline-flex justify-between items-center">
                    <IconButton icon={faFacebookF} />
                    <IconButton icon={faInstagram} />
                    <IconButton icon={faTwitter} />
                </div>
                <div className="inline-flex justify-between items-center space-x-10 sm:space-x-4">
                    <p className="text-light-on-surface">2023 VegFoLos</p>
                    <p className="text-light-on-surface">Terms</p>
                    <p className="text-light-on-surface">Privacy Policy</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
