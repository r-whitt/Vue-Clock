<template>
	<div>
		<!-- This will use the choose what to show @ the top depending what the URL is -->
		<!--If the URL isn't a specific one, a button shows. If it matches, then a Header -->
		<router-link id="LogTimeBtn" to="/time-entries/log-time"><button class=" btn btn-primary" v-if="$route.path !== '/time-entries/log-time'">Log Time</button></router-link>
		<div v-if="$route.path === '/time-entries/log-time'">
			<h3>Log Time</h3>
		</div>

		<hr>

		<router-view></router-view>

		<div class="time-entries">
			<p v-if="!userTimeEntries.length"><strong>No time entries yet</strong></p>
			<!-- List of Time Entries per User --> 
			<div class="list-group">
				
				<!-- This is the template for ALL entries in Time Entries (using v-for) -->
				<a class="list-group-item" v-for="timeEntry in userTimeEntries">
					<div class="row">

						<!-- User info & Picture on left of row -->
						<div class="col-sm-2 user-details">
							<img :src="timeEntry.user.image" class="avatar img-circle img-responsive" />
							<p class="text-center">
								<strong>
									{{ timeEntry.user.firstName }}
									{{ timeEntry.user.lastName }}
								</strong>
							</p>
						</div>

						<!-- for the Time & Date on the left side of the data block -->
						<!-- the i tags have the symbols next to the numbers -->
						<div class="col-sm-2 text-center time-block">
							<h3 class="list-group-item-text total-time">
								<i class="glyphicon glyphicon-time"></i>
								{{ timeEntry.totalTime }}
							</h3>
							<!--<p id="timeEnryHoursP">hours</p> -->
							<p class="label label-primary text-center">
								<i class="glyphicon glyphicon-calendar"></i>
								{{ timeEntry.date }}
							</p>
						</div>

						<div class="col-sm-7 comment-section">
							<p>{{ timeEntry.comment }}</p>
						</div>

						<!-- this is for the small red x button in the top right -->
						<!-- this will delete that entry -->
						<div class="col-sm-1">
							<button class="btn btn-xs btn-danger delete-button" @click="deleteEntry(timeEntry)">
								X
							</button>
						</div>

					</div>
				</a>

			</div>
		</div>
	</div>
</template>

<script>
import store from '../store'

	export default {
		computed: {
			userTimeEntries () {
				return store.state.entry.timeEntries
			}
		},
		methods: {
			deleteEntry (timeEntry) {
				if(window.confirm('Are you sure you want to delete this time entry?')) {
					store.commit('deleteTimeEntry', timeEntry)
				}
			},
			storeTimeUpdate (timeEntry) {
				store.commit('timeUpdate', timeEntry)
			}
		},
		events: {
			storeTimeUpdate (timeEntry) {
				store.commit('timeUpdate', timeEntry)
			}
		}
	}
</script>

<style>
	.avatar {
		height: 75px;
		margin: 0 auto;
		margin-top: 10px;
		margin-bottom: 10px;
	}

	.user-details {
		background-color: #f5f5f5; /*White Smoke color*/
		border-right: 1px solid #ddd;
		margin: -10px 0;
	}

	.time-block {
		padding: 10px;
	}

	.comment-section {
		padding: 20px;
	}

	#LogTimeBtn {
		color: white;
	}
</style>