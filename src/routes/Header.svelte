<script lang="ts">
	import { LightSwitch } from '@skeletonlabs/skeleton';
</script>

<header class="variant-filled-surface p-4">
	<div class="container mx-auto grid grid-cols-2 md:grid-cols-3 items-center">
		<h3 class="h3">LOGO</h3>
		<nav class="order-3 md:order-none md:flex justify-center">
			<ul class="hidden md:flex gap-4">
				<li><a href="/">홈</a></li>
				<li><a href="/about">블로그에 대해</a></li>
				<li><a href="/post">게시글</a></li>
			</ul>
		</nav>
		<div class="flex items-center gap-2">
			<label
				class="ml-auto md:ml-0 md:hidden relative z-40 cursor-pointer px-3 py-6"
				for="mobile-menu"
			>
				<input class="peer hidden" type="checkbox" id="mobile-menu" />
				<div
					class="md:hidden peer-checked:hidden relative z-50 block h-[1px] w-7 bg-white bg-transparent content-[''] before:absolute before:top-[-0.50rem] before:z-50 before:block before:h-full before:w-full before:bg-white before:transition-all before:duration-200 before:ease-out before:content-[''] after:absolute after:right-0 after:bottom-[-0.50rem] after:block after:h-full after:w-full after:bg-white after:transition-all after:duration-200 after:ease-out after:content-[''] peer-checked:bg-transparent before:peer-checked:top-0 before:peer-checked:w-full before:peer-checked:rotate-45 before:peer-checked:transform after:peer-checked:bottom-0 after:peer-checked:w-full after:peer-checked:-rotate-45 after:peer-checked:transform"
				></div>
				<div
					class="fixed inset-0 z-100 hidden h-full w-full bg-black/50 backdrop-blur-sm peer-checked:block"
				>
					&nbsp;
				</div>
				<div
					class="fixed top-0 right-0 z-40 h-full w-full translate-x-full overflow-y-auto overscroll-y-none transition duration-500 peer-checked:translate-x-0"
				>
					<div
						class="float-right min-h-full w-[75%] variant-filled-surface px-6 pt-12 shadow-2xl z-100"
					>
						<menu class="list-nav grid gap-4">
							<li>
								<a href="/"
									><span class="badge variant-filled-primary"
										><svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 16 16"
											fill="currentColor"
											class="w-4 h-4"
										>
											<path
												d="M8.543 2.232a.75.75 0 0 0-1.085 0l-5.25 5.5A.75.75 0 0 0 2.75 9H4v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9h1.25a.75.75 0 0 0 .543-1.268l-5.25-5.5Z"
											/>
										</svg>
									</span>
									<span class="flex-auto">홈</span></a
								>
							</li>
							<li>
								<a href="/about"
									><span class="badge bg-primary-500"
										><svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 16 16"
											fill="currentColor"
											class="w-4 h-4"
										>
											<path
												fill-rule="evenodd"
												d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM9 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.75 8a.75.75 0 0 0 0 1.5h.75v1.75a.75.75 0 0 0 1.5 0v-2.5A.75.75 0 0 0 8.25 8h-1.5Z"
												clip-rule="evenodd"
											/>
										</svg>
									</span>
									<span class="flex-auto">블로그에 대해</span></a
								>
							</li>
							<li>
								<a href="/post"
									><span class="badge bg-primary-500"
										><svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 16 16"
											fill="currentColor"
											class="w-4 h-4"
										>
											<path
												fill-rule="evenodd"
												d="M4 2a1.5 1.5 0 0 0-1.5 1.5v9A1.5 1.5 0 0 0 4 14h8a1.5 1.5 0 0 0 1.5-1.5V6.621a1.5 1.5 0 0 0-.44-1.06L9.94 2.439A1.5 1.5 0 0 0 8.878 2H4Zm1 5.75A.75.75 0 0 1 5.75 7h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 5 7.75Zm0 3a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z"
												clip-rule="evenodd"
											/>
										</svg>
									</span>
									<span class="flex-auto">게시글</span></a
								>
							</li>
						</menu>
					</div>
				</div>
			</label>
			<LightSwitch class="md:ml-auto" />
		</div>
	</div>
</header>
