import { Typography } from '@material-tailwind/react';
import FoodCard from '../FoodCard';

function FoodCategory({ data, id }) {
    const foodCardData = data.content;
    return (
        <div id={id}>
            <Typography className="text-4xl font-normal">{data.label}</Typography>
            <div className="grid grid-cols-3 gap-8 mt-9">
                {foodCardData.map((dataItem, index) => (
                    <FoodCard data={dataItem} key={index} />
                ))}
            </div>
        </div>
    );
}

export default FoodCategory;
