import React, { useState } from 'react';

const CustomInput = ({
	value,
	onChange,
	label,
	id,
	className,
	required,
	placeholder,
	type = 'input',
}) => {
	const [isTouched, setIsTouched] = useState(false);

	return (
		<>
			{type === 'radio' ? (
				<>
					<div className="my-4">
						<label className="inline-flex items-center">
							<input
								type="radio"
								className="form-radio text-blue-500 h-5 w-5"
								name={id} // Use the 'id' prop as the name for uniqueness
								value="option1"
							/>
							<span className="ml-2">Option 1</span>
						</label>
					</div>
					<div className="my-4">
						<label className="inline-flex items-center">
							<input
								type="radio"
								className="form-radio text-blue-500 h-5 w-5"
								name={id} // Use the 'id' prop as the name for uniqueness
								value="option2"
							/>
							<span className="ml-2">Option 2</span>
						</label>
					</div>
				</>
			) : (
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
			)}
		</>
	);
};

export default CustomInput;
