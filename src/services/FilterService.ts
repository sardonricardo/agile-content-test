export class FilterService {
	static filterData(
		data: {
			id: number;
			title: string;
			type: string;
			description: string;
			image: string;
			url: string;
		}[],
		term: string
	) {
		if (!term) return data;
		return data.filter(
			(item) =>
				item.title.toLowerCase().includes(term.toLowerCase()) ||
				item.type.toLowerCase().includes(term.toLowerCase())
		);
	}
}
