import React, { useState } from 'react';

const CustomInput = ({
	value,
	onChange,
	label,
	id,
	className,
	required,
	placeholder,
}) => {
	const [isTouched, setIsTouched] = useState(false);

	return (
		<div className={className}>
			{label ? (
				<label htmlFor={id}>{label}</label>
			) : (
				<div className="h-6"></div>
			)}
			<input
				type="text"
				id={id}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				onBlur={() => setIsTouched(true)}
				className="mt-1 p-2 border rounded-md w-full"
			/>
			{required && isTouched && !value && (
				<p className="text-red-500 text-sm mt-1">{label} is required</p>
			)}
		</div>
	);
};

export default CustomInput;
