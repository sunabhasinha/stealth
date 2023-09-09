// LoaderContext.js
import React, { createContext, useContext, useState } from 'react';

const LoaderContext = createContext();

export const useLoader = () => {
	return useContext(LoaderContext);
};

export const LoaderProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(false);

	const showLoader = () => {
		setIsLoading(true);
	};

	const hideLoader = () => {
		setIsLoading(false);
	};

	return (
		<LoaderContext.Provider value={{ isLoading, showLoader, hideLoader }}>
			{isLoading && (
				<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
					<div className="loader animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 h-12 w-12"></div>
				</div>
			)}
			{children}
		</LoaderContext.Provider>
	);
};
