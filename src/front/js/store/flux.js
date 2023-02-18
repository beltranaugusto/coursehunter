const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

		},
		actions: {
			createPost: async (formData) => {
				console.log(formData)
				fetch('http://127.0.0.1:3001/api/create_event', {
				method: 'POST',
				body: JSON.stringify(formData),
				headers: {
					'Content-Type': 'application/json'
				  },
				})
				.then((response) => response.json())
				.then((result) => {
					console.log('Success:', result);
				})
				.catch((error) => {
					console.error('Error:', error);
				});
			}
		}
	};
};

export default getState;
