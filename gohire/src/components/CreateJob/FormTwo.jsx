import React, { useState } from 'react';
import { constants } from '../../constants';
import CustomInput from '../Custom/CustomInput';
import Button from '../Custom/Button';

const FormTwo = ({ handleSubmit }) => {
	const [maxExp, setMaxExp] = useState('');
	const [minExp, setMinExp] = useState('');

	const [minSal, setMinSal] = useState('');

	const [maxSal, setMaxSal] = useState('');
	const [totalEmp, setTotalEmp] = useState('');
	const [applyType, setApplyType] = useState('');

	const handleFormTwoData = () => {
		const form2Data = {
			maxExp,
			minExp,
			minSal,
			maxSal,
			totalEmp,
			applyType,
		};

		console.log('Payload', form2Data);
		handleSubmit(form2Data);
	};

	return (
		<>
			<div className="flex justify-between">
				<div className="text-xl">{constants.CREATE_A_JOB}</div>
				<div>{constants.STEP} 2</div>
			</div>

			<div className="flex w-full items-center my-6">
				<CustomInput
					label={constants.EXPERIENCE}
					value={minExp}
					placeholder={constants.MINIMUM}
					className={'mr-6 w-[245px]'}
					onChange={(e) => setMinExp(e.target.value)}
				/>

				<CustomInput
					label={''}
					value={maxExp}
					placeholder={constants.MAXIMUM}
					className="w-[245px]"
					onChange={(e) => setMaxExp(e.target.value)}
				/>
			</div>

			<div className="flex justify-between items-center mb-6">
				<CustomInput
					label={constants.SALARY}
					value={minSal}
					placeholder={constants.MINIMUM}
					className="w-[245px]"
					onChange={(e) => setMinSal(e.target.value)}
				/>
				<CustomInput
					label={''}
					className="w-[245px]"
					value={maxSal}
					placeholder={constants.MAXIMUM}
					onChange={(e) => setMaxSal(e.target.value)}
				/>
			</div>
			<CustomInput
				label={constants.TOTAL_EMPLOYEE}
				value={totalEmp}
				className={'mb-6'}
				placeholder={constants.EX_100}
				onChange={(e) => setTotalEmp(e.target.value)}
			/>

			<CustomInput
				type="radio"
				label={constants.APPLY_TYPE}
				value={applyType}
				onChange={(e) => setApplyType(e.target.value)}
			/>

			<Button
				buttonText={constants.SAVE}
				buttonBg={'red'}
				className={'bg-custom-primary text-white w-[68px] ml-auto  mt-[96px]'}
				buttonTextColor={'black'}
				buttonBorder={'borer border-gray-500'}
				handleClick={() => handleFormTwoData()}
			></Button>
		</>
	);
};

export default FormTwo;
