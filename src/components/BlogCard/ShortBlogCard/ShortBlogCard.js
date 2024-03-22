import { Link } from 'react-router-dom';

export default function ShortBlogCard({ img, title, desc }) {
    return (
        <Link className="relative w-64 h-64 hover:shadow-[0_1px_3px_1px_rgba(0,0,0,0.3),_0_1px_2px_0_rgba(0,0,0,0.3)] rounded-lg">
            <img src={img} alt={title} className="w-64 h-64 object-cover rounded-lg" />
            <div className="absolute p-2 bottom-2 left-2 w-[calc(100%-16px)] rounded-lg bg-light-tertiary-container text-light-on-surface">
                <h1 className="text-xl">{title}</h1>
                <p className="text-sm truncate">{desc}</p>
            </div>
        </Link>
    );
}
