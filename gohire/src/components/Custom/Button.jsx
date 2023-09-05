import React from 'react';

const Button = ({ buttonText, handleClick, className }) => {
	return (
		<div
			className={`${className} pointer text-base py-2 px-4 rounded-md`}
			onClick={handleClick}
		>
			{buttonText}
		</div>
	);
};

export default Button;
