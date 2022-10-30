export const formatDate = (date) => {
	const newDate = new Date(date);
	const options = {
		year: "numeric",
		month: "long",
		day: "2-digit",
	};
	return newDate.toLocaleDateString("en-US", options);
};
