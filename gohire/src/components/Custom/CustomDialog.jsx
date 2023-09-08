import React, { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import FormOne from '../CreateJob/FormOne';
import FormTwo from '../CreateJob/FormTwo';
import axios from 'axios';
import { constants } from '../../constants';

const CustomDialog = ({ isOpen, setIsOpen }) => {
	const [isFirstSubmitted, setIsFirstSubmitted] = useState(false);
	const [formOneData, setFormOneData] = useState(null);

	const handleNext = (formOneData) => {
		setIsFirstSubmitted(true);
		setFormOneData(formOneData);
	};
	const handleSubmit = async (formTwoData) => {
		try {
			setIsOpen(false);
			setIsFirstSubmitted(false);
			const finalPayload = { ...formOneData, ...formTwoData };
			const response = await axios.post(constants.BASE_URL, finalPayload);
		} catch (error) {
			console.error('Error', error);
		}
	};
	return (
		<>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog
					as="div"
					className="fixed inset-0 flex items-center justify-center z-50 overflow-x-hidden overflow-y-auto outline-none"
					onClose={() => setIsOpen(false)}
				>
					<div className="fixed inset-0 bg-black opacity-50" />

					<Transition.Child
						as={Fragment}
						enter="transition-opacity ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="relative bg-white rounded-xl shadow-lg">
							<div className="p-8 min-w-[577px] min-h-[564px]">
								{!isFirstSubmitted ? (
									<FormOne
										handleNext={(formOneData) => handleNext(formOneData)}
									/>
								) : (
									<FormTwo
										handleSubmit={(formTwoData) => handleSubmit(formTwoData)}
									/>
								)}
							</div>
						</div>
					</Transition.Child>
				</Dialog>
			</Transition>
		</>
	);
};

export default CustomDialog;
