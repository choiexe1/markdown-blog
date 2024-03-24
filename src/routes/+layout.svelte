<script lang="ts">
	import '../app.postcss';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import { AppShell } from '@skeletonlabs/skeleton';

	import type { AfterNavigate } from '@sveltejs/kit';
	import { afterNavigate } from '$app/navigation';

	afterNavigate((params: AfterNavigate) => {
		const isNewPage = params.from?.url.pathname !== params.to?.url.pathname;
		const elemPage = document.querySelector('#page');
		if (isNewPage && elemPage !== null) {
			elemPage.scrollTop = 0;
		}
	});
</script>

<AppShell>
	<svelte:fragment slot="header"><Header /></svelte:fragment>
	<slot />
	<svelte:fragment slot="pageFooter"><Footer /></svelte:fragment>
</AppShell>
