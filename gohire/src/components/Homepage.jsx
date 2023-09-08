import React, { useState, useEffect } from 'react';
import CustomDialog from './Custom/CustomDialog';
import Button from '../components/Custom/Button';
import { constants } from '../constants';
import JobCard from './CreateJob/JobCard';
import axios from 'axios';

const cardsList = ['list 1', 'list 2'];

const Homepage = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [jobList, setJobList] = useState([]);

	const fetchJobs = async () => {
		const response = await axios.get(constants.BASE_URL);
		const allJobs = response?.data;
		console.log('RESPONSE', allJobs);
		setJobList(allJobs);
	};
	useEffect(() => {
		fetchJobs();
	}, []);
	return (
		<div className="w-full h-full">
			<Button
				buttonText={constants.JOB}
				buttonBg={'red'}
				className={'bg-custom-primary text-white w-[68px] ml-auto  mt-[96px]'}
				buttonTextColor={'black'}
				buttonBorder={'borer border-gray-500'}
				handleClick={() => setIsOpen(true)}
			></Button>
			<CustomDialog
				isOpen={isOpen}
				setIsOpen={() => setIsOpen((prev) => !prev)}
			/>
			{jobList?.length > 0 && (
				<div className="flex flex-wrap -mx-4 p-20">
					{jobList.map((job) => (
						<div
							key={job.id}
							className="w-full sm:w-full md:w-1/3 lg:w-1/2 xl:w-1/2 px-4 mb-8"
						>
							<div className="w-full h-80 bg-white rounded-lg shadow-md">
								<JobCard job={job} />
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Homepage;
