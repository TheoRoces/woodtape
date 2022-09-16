import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';

const EventContext = React.createContext();

const ContextProvider = ({ children }) => {
	const [events, setEvents] = useState([]);

	const handleFectch = async () => {
		try {
			const { data } = await axios(
				'https://tapehouse.upbee.fr/wp-json/wp/v2/product'
			);
			console.log(data);
			setEvents(data);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		handleFectch();
	}, []);
	
	return (
		<EventContext.Provider value={{events}}>{children}</EventContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(EventContext);
};

export { ContextProvider, EventContext };