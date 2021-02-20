export const setPlaylist = (playlist) => {
    return {
        type: "SET_PLAYLIST",
        payload: playlist
    };
};
export const setCurrentPlaying = (curr_music) => {
    return {
        type: "SET_CURR_PLAYING",
        payload: curr_music
    };
}
export const setAudioOpen = (isOpen) => {
    return {
        type: "SET_AUDIO_OPEN",
        payload: isOpen
    };
};

export const increaseTimesPlayed = (id) => {
    return {
        type: "INC_TIMES_PLAYED",
        payload: id
    };
};

export const setSearch = (searchQuery) => {
    return {
        type: "SET_SEARCH_QUERY",
        payload: searchQuery
    };
};

export const setMusicLang = (langList) => {
    return {
        type: "SET_MUSIC_LIST",
        payload: langList
    };
};

export const setShowTab = () => {
    return {
        type: "SHOW_TAB_MUSIC",
    };
};



export const setIsPlay = (isPlay) => {
    return {
        type: "SET_PLAY",
        payload: isPlay
    };
};


export const addFavories = (song) => {
    return {
        type: "ADD_FAVORIES_SONG",
        payload: song
    };
};


export const showScreenMV = () => {
    return {
        type: "SHOW_SCREEN_MV",
    };
};

export const showTimePicker = () => {
    return {
        type: "SHOW_TIME_PICKER",
    };
};


export const setTimeStopPlaying = (time) => {
    return {
        type: "SET_TIME_STOP_PLAYING",
        payload: time
    };
};

export const setCurrentMv = (mv) => {
    return {
        type: "SET_CURRENT_MV",
        payload: mv
    };
};




