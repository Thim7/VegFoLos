import { Button, Dialog, DialogFooter, DialogHeader, Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import config from '~/config';

function SuccessOrder() {
    return (
        <Dialog size="lg" open className="bg-light-surface-container-lowest">
            <DialogHeader>
                <Typography className="w-full text-center text-light-on-surface text-2xl font-medium">
                    Thank you for shopping at VegFoLos
                </Typography>
            </DialogHeader>

            <DialogFooter className="gap-x-3 justify-center">
                <Button
                    variant="outlined"
                    className="text-light-primary rounded-full hover:bg-light-primary/8 border-light-outline"
                >
                    Tracking My Order
                </Button>
                <Link to={config.routes.home}>
                    <Button ripple className="bg-light-primary-container text-light-on-primary rounded-full">
                        Continue Shopping
                    </Button>
                </Link>
            </DialogFooter>
        </Dialog>
    );
}

export default SuccessOrder;
