// Format Date
export const formatDate = (date: Date) => {
	return new Date(date).toLocaleDateString('de-DE', {
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	});
};
