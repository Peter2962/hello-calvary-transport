<style lang='scss' scoped>
	.map-search-autocomplete {
		width: 100%;
		position: relative;
		.map-search-autocomplete-results {
			height: 150px;
			border: 1px solid #efefef;
			position: absolute;
			width: 100%;
			background-color: #f3f3f3;
			left: 0;
			z-index: 1;
			.map-search-autocomplete-results-item {
				p {
					font-size: 12px;
					font-weight: bold;
					cursor: pointer;
				}
			}
			button {
				padding: 1px 10px;
				font-size: 12px;
				position: absolute;
				bottom: 5px;
				right: 5px;
			}
		}
	}
</style>

<template>
	<div class='map-search-autocomplete'>
		<input type='text' class='form-control' @input="$emit('input', $event.target.value)" :value='value' v-on:keypress='getLocation' :placeholder='placeholder'>
		<div class='map-search-autocomplete-results p-2' v-if='results.length > 0'>
			<div class='map-search-autocomplete-results-item' v-for='(data, index) in results' :key="'map-data-' + index" @click='onLocationSelected(data)'>
				<p>{{ data.addressLabel + ' ' + data.city + ', ' + data.country }}</p>
			</div>
			<button class='btn btn-warning' @click='results = []'>
				Close
			</button>
		</div>
	</div>
</template>

<script>
	import {MapClient} from '@/api-clients/MapClient';

	export default {
		props: {
			onLocationSelected: {
				type: Function,
				default: () => {
					return null;
				}
			},
			placeholder: String,
			value: String
		},

		data() {
			return {
				mapSearchTimer: null,
				results: []
			}
		},

		methods: {
			getLocation() {
				clearTimeout(this.mapSearchTimer);
				if (this.value && this.value.length > 0) {
					this.mapSearchTimer = setTimeout(() => {
						MapClient.getLocation(this.value).then((response) => {
							this.results = response.data.addresses;
							console.log(this.results);
						}).catch(() => {

						});
					}, 1000);
				}
			}
		},

		mounted() {

		}
	}
</script>