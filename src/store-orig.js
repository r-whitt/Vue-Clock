import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

var store = new Vuex.Store ({
	state: {
		//We want to start with an existing time entry
		timeEntries: [{
			user: {
				firstName: 'Ryan',
				lastName: 'Chenkie',
				email: 'ryanchenkie@gmail.com',
				image: 'https://1.gravatar.com/avatar/7f4ec37467f2f7db6fffc7b4d2cc8dc2?s=250'
			},
			comment: 'First time entry',
			totalTime: 1.5,
			date: '2016-04-08'
		}],
		//Start out with the existing entry
		//by placing it in the array
	},
	mutations: {
		deleteTimeEntry (state, timeEntry) {
			let index = state.timeEntries.indexOf(timeEntry)
			state.timeEntries.splice(index, 1)
		},
		timeUpdate (state, timeEntry) {
			state.timeEntries.push(timeEntry)
			return true
		}
	}
})

export default store