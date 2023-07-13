import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: process.env.SERVER_URI,
	withCredentials: true,
	timeout: 10000
});

export const getApiInstance = () => {
	const getUrl = async (path: string) => {
		const response = await axiosInstance.get(path);
		return response.data;
	};

	const createUrl = async (path: string, data: any) => {
		const response = await axiosInstance.post(path, data);
		return response.data;
	};

	return {
		getUrl,
		createUrl
	};
};
