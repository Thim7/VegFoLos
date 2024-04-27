function CustomInput({ label, placeholder, content, isDisabled = false }) {
    let classes = 'p-2 border border-light-outline rounded-lg';
    if (isDisabled) {
        classes += ' bg-light-surface-container-highest';
    }
    return (
        <div>
            <label className="text-light-on-surface-variant" for={label}>
                {label}
            </label>
            <br />
            <div className={classes}>
                <input
                    type="text"
                    name={label}
                    placeholder={placeholder}
                    disabled={isDisabled}
                    className="w-full outline-none "
                />
            </div>
        </div>
    );
}

export default CustomInput;
