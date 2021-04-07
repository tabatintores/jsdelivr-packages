import axios from "axios";

export default {
    state: {
        searchValue: '',
        searchResults: [],
        isSearching: false
    },
    actions: {
        async getPackagesFromSearch({commit, getters, dispatch, state}, {query, offset = 0}) {
            const request = await axios.get(`https://api.npms.io/v2/search?q=${query || state.searchValue}&size=10&from=${offset}`);
            const result = request.data;
            commit("setResults", result);
            // Кэширование поисковой строки для пагинации
            if (query) {
                commit("setSearchValue", query);
            }
        },
        setSearchingState({commit}, data) {
            commit("setSearchingSate", data);
        }
    },
    mutations: {
        setResults(state, data) {
            state.searchResults = data;
        },
        setSearchingSate(state, data) {
            state.isSearching = data;
        },
        setSearchValue(state, data) {
            state.searchValue = data;
        }
    },
    getters: {
        packagesList: state => state.searchResults.results,
        totalPackages: state => state.searchResults.total,
        isSearching: state => state.isSearching,
    }
}
