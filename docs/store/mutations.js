export default {
    SET_EVENTS_RAW_LOG: (state, eventsRaw) => {
        state.eventsRaw = eventsRaw.data;
    },
    START_LOADER: (state, loaderInfo) => {
        state.loaderFeed[loaderInfo.id] = loaderInfo.payload;
    },
    END_LOADER: (state, id) => {
        delete state.loaderFeed[id];
    },
}