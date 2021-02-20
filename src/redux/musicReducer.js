import music from "../db/music";
const initialState = {
    playlists: music,
    playing: null,
    playingMv: null,
    audioOpen: false,
    search: null,
    musicReducer: false,
    language: null,
    isPlay: false,
    showScreenMV: false,
    timePicker: false,
    favoriesSong: [],
    timeStopPlaying: ""
};

const musicReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_AUDIO_OPEN": {
            return {
                ...state,
                audioOpen: action.payload,
            };
        }
        case "SET_CURR_PLAYING": {
            return {
                ...state,
                playing: action.payload,
            };
        }

        case "SHOW_TAB_MUSIC": {
            return {
                ...state,
                tabMusic: !state.tabMusic,
            };
        }
        case "SET_PLAY": {
            return {
                ...state,
                isPlay: action.payload,
            };
        }

        case "ADD_FAVORIES_SONG": {
            return {
                ...state,
                favoriesSong: [...state.favoriesSong, action.payload],
            };
        }

        case "SHOW_SCREEN_MV": {
            return {
                ...state,
                showScreenMV: !state.showScreenMV,
            };
        }

        case "SHOW_TIME_PICKER": {
            return {
                ...state,
                timePicker: !state.timePicker,
            };
        }

        case "SET_TIME_STOP_PLAYING": {
            return {
                ...state,
                timeStopPlaying: action.payload,
            };
        }

        case "SET_CURRENT_MV": {
            return {
                ...state,
                playingMv: action.payload,
            };
        }



        default:
            return state;
    }
};

export default musicReducer;