import { faker } from "@faker-js/faker";

export class DataService {
	static generateData(): {
		id: number;
		title: string;
		type: string;
		description: string;
		image: string;
		url: string;
	}[] {
		const getImage = () => faker.image.urlLoremFlickr({ category: "animals" });
		const getType = () => faker.animal.type();
		const getUrl = () => faker.internet.url();
		const getText = () => faker.lorem.sentences();

		return Array.from({ length: 100 }, (_, index) => {
			const type = getType();
			return {
				type,
				id: index + 1,
				url: getUrl(),
				title: type,
				description: getText(),
				image: getImage(),
			};
		});
	}
}
