import type { Post } from '$lib/types';

export async function load({ fetch }) {
	const response = await fetch('api/post');
	const posts: Post[] = await response.json();

	for (let i = 0; i < posts.length; i++) {
		posts[i].tags = posts[i].tags.split(',');
	}

	return { posts, total: posts.length };
}
