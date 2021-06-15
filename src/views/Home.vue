<template>
	<div class='home-ui d-flex p-5'>
		<div class='home-ui-query-box p-3'>
			<div class='mb-3'>
				<h1 class='h5 font-weight-bold'>Origin:</h1>
				<div class='form-group'>
					<map-search-auto-complete placeholder='Enter an address' v-model='form.origin' :onLocationSelected='onOriginSelected' />
				</div>
			</div>
			<div class='mb-4'>
				<h1 class='h5 font-weight-bold'>Destination:</h1>
				<div class='form-group'>
					<map-search-auto-complete placeholder='Enter an address' v-model='form.destination'  :onLocationSelected='onDestinationSelected'/>
				</div>
			</div>
			<div>
				<button class='btn btn-warning' @click='getTrips'>
					Get trips
				</button>
			</div>
		</div>
		<div class='home-ui-query-box-result ml-4 p-3'>
			<div v-if='trips.length < 1' class='d-flex w-100 h-100 align-items-center justify-content-center'>
				<p class='font-weight-bold'>
					No results available.
				</p>
			</div>
			<div v-else class='w-100'>
				<p class='font-12 font-weight-bold text-underline'>
					Found {{ trips.length }} trip(s) from {{ form.origin }} to {{ form.destination }}
				</p>
				<div v-for='(trip, index) in trips' :key="'itinerary-' + trip.id" class='home-ui-query-box-result-trip p-3 mb-3'>
					<h3 class='h5 font-weight-bold'>Trip {{ index + 1 }}</h3>
					<div class='list-group'>
						<a href='#' class='list-group-item list-group-item-action flex-column align-items-start bg-warning text-white' v-for='(leg, index) in trip.legs' :key="'leg-' + index">
							<div class='d-flex w-100 justify-content-between'>
								<h5 class='mb-1 font-weight-bold h6'>
									Trip type: <i :class='tripTypesIcons[leg.type]'></i>
								</h5>
							</div>
							<div class='d-flex w-100 justify-content-between'>
								<h5 class='mb-1 font-weight-bold h6'>
									Distance: {{ leg.distance.value }} {{ leg.distance.unit }}
								</h5>
							</div>
							<div class='d-flex w-100 justify-content-between'>
								<h5 class='mb-1 font-weight-bold h6'>
									<span>Fare:</span>
									<span v-if='leg.fare == undefined'>N/A</span>
									<span v-else>
										{{ leg.fare.cost.amount }} {{ leg.fare.cost.currency }}
									</span>
								</h5>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {ApiClient} from '@clients/ApiClient';

	export default {
		components: {
			//
		},

		data () {
			return {
				form: {
					origin: null,
					destination: null,
					originCoordinates: [],
					destinationCoordinates: []
				},
				trips: [],
				tripTypesIcons: {
					'Walking': 'icon ion-ios-walk',
					'Transit': 'icon ion-ios-train'
				}
			}
		},

		methods: {
			getTrips() {
				let data = {
					geometry: {
						type: 'MultiPoint',
						coordinates: [
						this.originCoordinates,
						this.destinationCoordinates
						]
					},
					maxItineraries: 5
				}

				ApiClient.getTrips(JSON.stringify(data)).then((response) => {
					console.log(response.data);
					this.trips = response.data.itineraries;
				}).catch((err) => {
					alert('Unable to get trips');
				});
			},
			onOriginSelected(data) {
				this.originCoordinates = [data.longitude, data.latitude];
			},
			onDestinationSelected(data) {
				this.destinationCoordinates = [data.longitude, data.latitude];
			}
		},

		mounted() {
		}
	}
</script>