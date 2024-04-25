import { useLocation } from 'react-router-dom';

function Checkout() {
    const location = useLocation();
    console.log(location.state);
    return <h1>Checkout Page</h1>;
}

export default Checkout;
