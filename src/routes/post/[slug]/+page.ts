export const load = async ({ params }) => {
	const post = await import(`../../../../md/${params.slug}.md`);
	const { title, date } = post.metadata;
	const tags = post.metadata.tags.split(',');

	const content = post.default;

	return {
		content,
		title,
		date,
		tags
	};
};
