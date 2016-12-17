import ActionNames from './ActionNames.js';

export default {
    init: () => {
        return {
            type: ActionNames.INIT
        }
    },

    setPlayCurrentSong: ( isPlaying ) => {
        return {
            type: ActionNames.SET_PLAY_CURRENT,
            isPlaying: isPlaying
        }
    },

    playNext: () => {
        return {
            type: ActionNames.PLAY_NEXT
        }
    },

    playPrev: () => {
        return {
            type: ActionNames.PLAY_PREV
        }
    }
};