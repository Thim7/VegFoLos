function DatabaseButton({ data }) {
    return (
        <button className="relative w-40 rounded-lg hover:shadow-[0_1px_3px_1px_rgba(0,0,0,0.3),_0_1px_2px_0_rgba(0,0,0,0.3)] snap-center">
            <img className="w-40 h-16 rounded-lg object-cover opacity-80" src={data.img} alt={data.alt} />

            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-light-on-surface-variant font-bold">
                {data.title}
            </p>
        </button>
    );
}

export default DatabaseButton;
