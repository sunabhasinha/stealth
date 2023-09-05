import React, { useState } from 'react';
import CustomDialog from './Custom/CustomDialog';
import Button from '../components/Custom/Button';
import { constants } from '../constants';
import JobCard from './CreateJob/JobCard';

const cardsList = ['list 1', 'list 2'];

const Homepage = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="bg-custom-dark-grey">
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
			{cardsList &&
				cardsList?.length > 0 &&
				cardsList?.map((card) => <JobCard />)}
		</div>
	);
};

export default Homepage;
