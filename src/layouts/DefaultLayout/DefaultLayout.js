import PropTypes from 'prop-types';
import Header from '~/layouts/components/Header';

function DefaultLayout({ children }) {
    return (
        <div style={{ height: 3000 }}>
            <Header />
            <div className="mt-32">{children}</div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default DefaultLayout;
