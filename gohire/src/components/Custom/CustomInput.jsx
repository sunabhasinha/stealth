import React, { useState } from 'react';
import { constants } from '../../constants';

const CustomInput = ({
	value,
	onChange,
	label,
	id,
	className,
	required,
	placeholder,
	type = 'input',
	inputType = 'text',
	inputMode = 'text',
}) => {
	const [isTouched, setIsTouched] = useState(false);

	return (
		<>
			{type === 'radio' ? (
				<>
					{label ? <label>{label}</label> : <div className="h-6"></div>}
					<div className="flex items-center mt-1">
						<div className="flex items-center mr-4">
							<input
								id="default-radio-1"
								type="radio"
								value={constants.APPLY_NOW}
								name="default-radio"
								onChange={(e) => onChange(e)}
								checked={value === constants.APPLY_NOW}
								className="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 dark:focus:ring-blue-600  dark:bg-gray-700 dark:border-gray-600"
							/>
							<label
								htmlFor="default-radio-1"
								className="ml-2 text-sm font-medium cursor-pointer"
							>
								Apply Now
							</label>
						</div>
						<div className="flex items-center">
							<input
								id="default-radio-2"
								type="radio"
								value={constants.EXTERNAL_APPLY}
								name="default-radio"
								onChange={(e) => onChange(e)}
								checked={value === constants.EXTERNAL_APPLY}
								className="w-4 h-4 text-blue-600 cursor-pointer bg-gray-100 border-gray-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
							/>
							<label
								htmlFor="default-radio-2"
								className="ml-2 text-sm font-medium cursor-pointer"
							>
								External apply
							</label>
						</div>
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
						type={inputType}
						id={id}
						inputmode={inputMode}
						value={value}
						onChange={onChange}
						placeholder={placeholder}
						onBlur={() => setIsTouched(true)}
						className="mt-1 p-2 border rounded-md w-full appearance-none"
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
