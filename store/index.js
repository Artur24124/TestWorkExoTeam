export const state = () => ({
    searchResults: []
});

export const getters = {
    getSearchResults(state) {
        return state.searchResults
    }
};

export const actions = {
    setSearchResults({commit}, searchResults) {
        commit('SET_SEARCH_RESULTS', searchResults);
    }
};

export const mutations = {
    SET_SEARCH_RESULTS (state, searchResults) {
        state.searchResults = searchResults;
    }
};