export default interface Post {
	title: string;
	description: string;
	date: Date;
	modified: Date;
	isFeatured: boolean;
	featuredImage: string;
	categories: string[];
	tags: string[];
}
