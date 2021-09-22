import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

export default {
    startLoader({ commit }, payload) {
        const id = uuidv4();
        commit('START_LOADER', {
          id,
          payload,
        });
        return id;
    },
    endLoader({ commit }, id) {
        commit('END_LOADER', id);
    },
    async eventsDumpFetch({ commit, dispatch }) {
        const loader = await dispatch('startLoader', {
            event: 'Pulling TJ Event log',
            message: 'All activities',
        });

        const eventsRaw = await axios.get(`https://thoughtjumper.edvanta.com/api/v1/events/lastndays/1`);
        console.log({ eventsRaw });
        commit('SET_EVENTS_RAW_LOG', eventsRaw);

        dispatch('endLoader', loader);
    },
}