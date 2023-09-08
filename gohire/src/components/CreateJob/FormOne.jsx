import React, { useState } from 'react';
import { constants } from '../../constants';
import { Combobox } from '@headlessui/react';
import CustomInput from '../Custom/CustomInput';
import Button from '../Custom/Button';

const FormOne = ({ handleNext }) => {
	const [jobTitle, setJobTitle] = useState('');
	const [companyName, setCompanyName] = useState('');
	const [industry, setIndustry] = useState('');
	const [location, setLocation] = useState('');
	const [remoteType, setRemoteType] = useState('');

	const handleFormOne = () => {
		const payload = {
			companyName: companyName,
			jobTitle: jobTitle,
			industry: industry,
			location: location,
			remoteType: remoteType,
		};

		handleNext(payload);
		//
	};
	return (
		<>
			<div className="flex justify-between">
				<div className="text-xl">{constants.CREATE_A_JOB}</div>
				<div>{constants.STEP} 1</div>
			</div>

			<CustomInput
				label={constants.JOB_TITLE}
				value={jobTitle}
				placeholder={constants.UX_UI_DESIGNER}
				required={true}
				className={'my-6'}
				onChange={(e) => setJobTitle(e.target.value)}
			/>

			<CustomInput
				label={constants.COMPANY_NAME}
				value={companyName}
				required={true}
				placeholder={constants.GOOGLE}
				className={'mb-6'}
				onChange={(e) => setCompanyName(e.target.value)}
			/>

			<CustomInput
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

			<Button
				buttonText={constants.NEXT}
				buttonBg={'red'}
				className={'bg-custom-primary text-white w-[68px] ml-auto  mt-[96px]'}
				buttonTextColor={'black'}
				buttonBorder={'borer border-gray-500'}
				handleClick={() => handleFormOne()}
			></Button>
		</>
	);
};

export default FormOne;
