import React from 'react';
import Button from '../Custom/Button';
import { constants } from '../../constants';
import JobCardIcon from "../../../public/assets/logo.png";

const JobCard = ({
	job: {
		id,
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
	modifyJob,
}) => {
	const applyNow =
		applyType === constants.APPLY_NOW
			? 'bg-custom-primary text-white'
			: 'border border-custom-primary text-custom-primary';
	return (
		<div className="bg-white rounded-lg flex px-6 py-4">
			<div className="w-[10%]">
				<img
					src={JobCardIcon}
					alt="company logo"
					className="w-12 h-12"
				/>
			</div>
			<div className="w-[90%] font-normal">
				<div className="flex justify-between">
					<div className="text-2xl">{jobTitle}</div>
					<div className="flex justify-between">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-5 h-5 ml-auto cursor-pointer mr-4"
							onClick={() => modifyJob(id, constants.EDIT)}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
							/>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-5 h-5 text-red-500 cursor-pointer"
							onClick={() => modifyJob(id, constants.DELETE)}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
							/>
						</svg>
					</div>
				</div>
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
					className={`w-1/3 px-4 py-2 text-center cursor-pointer ${applyNow}`}
				/>
			</div>
		</div>
	);
};

export default JobCard;
