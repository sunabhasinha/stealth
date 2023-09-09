import React, { useEffect, useState, useRef } from 'react';
import { constants } from '../../constants';
import CustomInput from '../Custom/CustomInput';
import Button from '../Custom/Button';

const FormOne = ({ handleNext, job, handleClose }) => {
	const [jobTitle, setJobTitle] = useState('');
	const [companyName, setCompanyName] = useState('');
	const [industry, setIndustry] = useState('');
	const [location, setLocation] = useState('');
	const [remoteType, setRemoteType] = useState('');
	const titleRef = useRef(null);
	const companyNameRef = useRef(null);
	const industryRef = useRef(null);

	const handleFormOne = () => {
		const payload = {
			companyName,
			jobTitle,
			industry,
			location,
			remoteType,
		};
		if (!jobTitle || !companyName || !industry) {
			!jobTitle && titleRef?.current?.click();
			!companyName && companyNameRef?.current?.click();
			!industry && industryRef?.current?.click();

			return;
		}

		handleNext(payload);
		//
	};

	const applyFormOneData = () => {
		if (!job) return;
		const { jobTitle, companyName, industry, location, remoteType } = job;
		setJobTitle(jobTitle);
		setCompanyName(companyName);
		setIndustry(industry);
		setLocation(location);
		setRemoteType(remoteType);
	};

	useEffect(() => {
		applyFormOneData();
	}, [job]);
	return (
		<>
			<div className="flex justify-between">
				<div className="text-xl">
					{job?.id ? constants.EDIT_THE_JOB : constants.CREATE_A_JOB}
				</div>
				<div>{constants.STEP} 1</div>
			</div>

			<CustomInput
				ref={titleRef}
				label={constants.JOB_TITLE}
				value={jobTitle}
				placeholder={constants.UX_UI_DESIGNER}
				required={true}
				className={'my-6'}
				onChange={(e) => setJobTitle(e.target.value)}
			/>

			<CustomInput
				ref={companyNameRef}
				label={constants.COMPANY_NAME}
				value={companyName}
				required={true}
				placeholder={constants.GOOGLE}
				className={'mb-6'}
				onChange={(e) => setCompanyName(e.target.value)}
			/>

			<CustomInput
				ref={industryRef}
				label={constants.INDUSTRY}
				value={industry}
				required={true}
				placeholder={constants.INFORMATION_TECHNOLOGY}
				className={'mb-6'}
				onChange={(e) => setIndustry(e.target.value)}
			/>
			<div className="flex justify-between">
				<CustomInput
					className="mr-6 w-[245px]"
					label={constants.LOCATION}
					value={location}
					placeholder={constants.CHENNAI}
					onChange={(e) => setLocation(e.target.value)}
				/>
				<CustomInput
					label={constants.REMOTE_TYPE}
					value={remoteType}
					placeholder={constants.IN_OFFICE}
					className={'w-[245px]'}
					onChange={(e) => setRemoteType(e.target.value)}
				/>
			</div>

			<div className="mt-[96px] ml-auto flex justify-end">
				<Button
					buttonText={constants.CANCEL}
					className={
						'w-[100px] text-center border border-red-500 text-red-500 cursor-pointer mr-2'
					}
					handleClick={() => handleClose()}
				></Button>

				<Button
					buttonText={constants.NEXT}
					buttonBg={'red'}
					className={'bg-custom-primary text-white w-[68px]  cursor-pointer  '}
					buttonTextColor={'black'}
					buttonBorder={'borer border-gray-500'}
					handleClick={() => handleFormOne()}
				></Button>
			</div>
		</>
	);
};

export default FormOne;
