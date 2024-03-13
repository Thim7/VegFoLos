import { LotusIcon } from '~/components/Icons';

function RestaurantCard({ data }) {
    return (
        <div className="w-64 min-w-64 h-32">
            <img className="w-full h-28 object-cover rounded-t-lg" src={data.img} alt={data.alt} />
            <div className="p-2 text-light-on-surface bg-light-surface-container-lowest rounded-b-lg">
                <div className="flex space-x-2">
                    {data.trusted && <LotusIcon />}
                    <p className="uppercase text-ellipsis">{data.title}</p>
                </div>
                <div className="flex space-x-2 my-3">
                    {data.tags &&
                        data.tags.map((tag, index) => (
                            <p className="text-sm text-light-on-surface-variant truncate" key={index}>
                                {tag},
                            </p>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default RestaurantCard;
