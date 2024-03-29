import PropTypes from 'prop-types';
import Footer from '../components/Footer';

function DefaultLayout({ children }) {
    return (
        <div className="h-max bg-light-background">
            {children}
            <Footer />
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default DefaultLayout;
