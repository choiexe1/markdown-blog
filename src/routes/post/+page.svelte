<script lang="ts">
	import { Paginator, type PaginationSettings } from '@skeletonlabs/skeleton';
	import type { Post } from './../../lib/types.ts';

	export let data;

	const source: Post[] = data.posts;

	$: paginatedSource = source.slice(
		paginationSettings.page * paginationSettings.limit,
		paginationSettings.page * paginationSettings.limit + paginationSettings.limit
	);

	let paginationSettings = {
		page: 0,
		limit: 5,
		size: source.length,
		amounts: []
	} satisfies PaginationSettings;

	const replacePostTitle = (title: string) => {
		title = title.toLocaleLowerCase();
		return title.replaceAll(' ', '-');
	};
</script>

<main>
	{#each paginatedSource as post}
		<a href="/post/{replacePostTitle(post.title)}">
			<section class="container mx-auto my-4 p-2">
				<div class="">
					<p class="badge variant-soft-primary my-2">{post.date}</p>
				</div>
				<div class=""><h2 class="h2">{post.title}</h2></div>
				<div class="flex gap-4 text-xs my-2">
					{#each post.tags as tag}
						<p class="badge variant-soft-secondary">{tag}</p>
					{/each}
				</div>
			</section>
		</a>
		<hr class="container mx-auto my-4" />
	{/each}
	<div class="mx-auto container flex justify-center my-8">
		<Paginator
			bind:settings={paginationSettings}
			showFirstLastButtons={true}
			showPreviousNextButtons={true}
		/>
	</div>
</main>
