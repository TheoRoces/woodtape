import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';

const EpisodeContext = React.createContext();

const ContextProviderTwo = ({ children }) => {
	const [episodes, setEpisodes] = useState([]);

	const handleFectch = async () => {
		try {
			const { data } = await axios(
				'https://tapehouse.upbee.fr/wp-json/wp/v2/episodes'
			);
			console.log(data);
			setEpisodes(data);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		handleFectch();
	}, []);
	
	return (
		<EpisodeContext.Provider value={{episodes}}>{children}</EpisodeContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(EpisodeContext);
};

export { ContextProviderTwo, EpisodeContext };