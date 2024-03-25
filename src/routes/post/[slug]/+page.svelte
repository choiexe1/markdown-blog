<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main class="container mx-auto">
	<h2 class="h1 md:h2 my-8">{data.title}</h2>
	<section class="flex gap-4 flex-wrap">
		<p class="badge variant-soft-primary">{data.date}</p>
		{#each data.tags as tag}
			<p class="badge variant-soft-secondary">{tag}</p>
		{/each}
	</section>
</main>

<hr class="my-8" />

<article class="mx-auto container">
	<div class="all-prose mb-10">
		<svelte:component this={data.content} />
	</div>
</article>
