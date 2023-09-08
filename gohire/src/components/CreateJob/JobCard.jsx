import React, { useState } from 'react';
import Button from '../Custom/Button';

const JobCard = ({
	job: {
		jobTitle,
		companyName,
		location,
		industry,
		remoteType,
		maxExp,
		minExp,
		maxSal,
		minSal,
		totalEmp,
		applyType,
	},
}) => {
	return (
		<div className="bg-white rounded-lg flex px-6 py-4">
			<div className="w-[10%]">
				<img
					src="src/assets/logo.png"
					alt="company logo"
					className="w-12 h-12"
				/>
			</div>
			<div className="w-4/5">
				<div className="text-2xl">{jobTitle}</div>
				<div className="text-base">
					{companyName} - {industry}
				</div>
				<div className="text-base text-[#646464] font-normal">
					{location}, {remoteType}
				</div>
				<div className="mt-6 mb-2 text-base">
					Part Time (9.00 am - 5.00 pm IST)
				</div>
				<div className="mb-2 text-base">{`Experience (${minExp} - ${maxExp} years)`}</div>
				<div className="mb-2 text-base">{`INR (₹) ${minSal} - ${maxSal} / Month`}</div>
				<div className="mb-6 text-base">{totalEmp} employees</div>
				<Button
					buttonText={applyType}
					className={'border border-custom-primary-2 w-[68px] '}
				/>
			</div>
		</div>
	);
};

export default JobCard;
