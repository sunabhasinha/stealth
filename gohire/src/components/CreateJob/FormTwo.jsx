import React, { useEffect, useState } from 'react';
import { constants } from '../../constants';
import CustomInput from '../Custom/CustomInput';
import Button from '../Custom/Button';

const FormTwo = ({ handleSubmit, job, handleClose }) => {
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
		handleSubmit(form2Data);
	};

	const applyFormTwoData = () => {
		if (!job) return;
		const { maxExp, minExp, minSal, maxSal, totalEmp, applyType } = job;
		setMaxExp(maxExp);
		setMinExp(minExp);
		setMinSal(minSal);
		setMaxSal(maxSal);
		setTotalEmp(totalEmp);
		setApplyType(applyType);
	};

	useEffect(() => {
		applyFormTwoData();
	}, [job]);

	return (
		<>
			<div className="flex justify-between">
				<div className="text-xl">
					{job?.id ? constants.EDIT_THE_JOB : constants.CREATE_A_JOB}
				</div>
				<div>{constants.STEP} 2</div>
			</div>

			<div className="flex w-full items-center my-6">
				<CustomInput
					label={constants.EXPERIENCE}
					value={minExp}
					inputType={constants.NUMBER}
					placeholder={constants.MINIMUM}
					className={'mr-6 w-[245px]'}
					onChange={(e) => setMinExp(e.target.value)}
				/>

				<CustomInput
					label={''}
					value={maxExp}
					inputType={constants.NUMBER}
					placeholder={constants.MAXIMUM}
					className="w-[245px]"
					onChange={(e) => setMaxExp(e.target.value)}
				/>
			</div>

			<div className="flex justify-between items-center mb-6">
				<CustomInput
					label={constants.SALARY}
					value={minSal}
					inputType={constants.NUMBER}
					placeholder={constants.MINIMUM}
					className="w-[245px]"
					onChange={(e) => setMinSal(e.target.value)}
				/>
				<CustomInput
					label={''}
					className="w-[245px]"
					value={maxSal}
					inputType={constants.NUMBER}
					placeholder={constants.MAXIMUM}
					onChange={(e) => setMaxSal(e.target.value)}
				/>
			</div>
			<CustomInput
				label={constants.TOTAL_EMPLOYEE}
				value={totalEmp}
				inputType={constants.NUMBER}
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

			<div className="mt-[96px] ml-auto flex justify-end">
				<Button
					buttonText={constants.CANCEL}
					className={
						'w-[100px] text-center border border-red-500 text-red-500 cursor-pointer mr-2'
					}
					handleClick={() => handleClose()}
				></Button>

				<Button
					buttonText={constants.SAVE}
					buttonBg={'red'}
					className={'bg-custom-primary text-white w-[68px] cursor-pointer'}
					buttonTextColor={'black'}
					buttonBorder={'borer border-gray-500'}
					handleClick={() => handleFormTwoData()}
				></Button>
			</div>
		</>
	);
};

export default FormTwo;
