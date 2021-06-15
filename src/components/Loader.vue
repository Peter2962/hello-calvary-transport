<template>
	<div class='loader-y0mc8gn3g'>
		<div class='loader-pfku6lh2g'>
			<div class='loader-cms7ea0oxi'>
				<span>
					
				</span>
			</div>
			<div class='loader-h68sdrkuk4'>
				<h1>
					{{ text }}
				</h1>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			text: {
				type: String,
				default: 'Loading'
			}
		}
	}
</script>