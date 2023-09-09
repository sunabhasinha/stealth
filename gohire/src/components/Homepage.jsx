import React, { useState, useEffect } from 'react';
import CustomDialog from './Custom/CustomDialog';
import Button from '../components/Custom/Button';
import { constants } from '../constants';
import JobCard from './CreateJob/JobCard';
import axios from 'axios';
import { useLoader } from '../context/LoaderContext';
import CustomLoader from './Custom/CustomLoader';

const Homepage = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [jobList, setJobList] = useState([]);
	const [jobInfo, setJobInfo] = useState(null);
	const { isLoading, showLoader, hideLoader } = useLoader();

	const fetchJobs = async () => {
		try {
			showLoader();
			const response = await axios.get(constants.BASE_URL);
			const allJobs = response?.data?.reverse();
			setJobList(allJobs);
		} catch (error) {
			constants.error('Error', error);
		} finally {
			hideLoader();
		}
	};
	const handleModifyJob = async (id, action) => {
		try {
			showLoader();
			if (action === constants.DELETE) {
				await axios.delete(constants.BASE_URL + id);
				await fetchJobs();
			} else {
				setIsOpen(true);
				await getJobDetails(id);
			}
		} catch (error) {
			console.error('Error', error);
		} finally {
			hideLoader();
		}
	};

	const handleSubmitForm = async (data) => {
		try {
			showLoader();
			if (!data?.id) {
				await axios.post(constants.BASE_URL, data);
			} else {
				await axios.put(constants.BASE_URL + data.id, data);
			}
			await fetchJobs();
		} catch (error) {
			console.error('Error', error);
		} finally {
			hideLoader();
		}
	};

	const getJobDetails = async (id) => {
		const response = await axios.get(constants.BASE_URL + id);
		setJobInfo(response.data);
	};
	useEffect(() => {
		fetchJobs();
	}, []);

	const opacity = isLoading ? 'opacity-25 pointer-events-none' : '';
	return (
		<div className={`relative top-0 left-0 w-full h-[100vh] z-50 ${opacity}`}>
			{isLoading && <CustomLoader className={'fixed left-1/2 top-1/2'} />}
			<>
				<CustomDialog
					jobInfo={jobInfo}
					isOpen={isOpen}
					handleSubmitForm={(formData) => handleSubmitForm(formData)}
					setIsOpen={() => setIsOpen((prev) => !prev)}
				/>
				<div className="flex mx-20 my-10 items-center">
					<Button
						buttonText={constants.CREATE_A_JOB}
						className={
							'bg-custom-primary text-white text-center w-1/5 mr-auto cursor-pointer mt-[96px]'
						}
						handleClick={() => {
							setIsOpen(true);
							setJobInfo(null);
						}}
					></Button>
					<div className="text-9xl w-4/5 text-center self-start mt-10">
						Go Hire!
					</div>
				</div>
				{jobList?.length > 0 && (
					<div className="flex flex-wrap -mx-4 p-20">
						{jobList.map((job) => (
							<div
								key={job.id}
								className="w-full sm:w-full md:w-1/3 lg:w-1/2 xl:w-1/2 px-4 mb-8"
							>
								<div className="w-full h-80 bg-white rounded-lg shadow-md">
									<JobCard
										job={job}
										modifyJob={(id, action) => handleModifyJob(id, action)}
									/>
								</div>
							</div>
						))}
					</div>
				)}
				{!isLoading && jobList?.length === 0 && (
					<div className="text-custom-white w-full h-auto text-lg flex justify-center items-center">
						{constants.NO_JOBS}
					</div>
				)}
			</>
		</div>
	);
};

export default Homepage;
