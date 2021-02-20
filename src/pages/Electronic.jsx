import React from 'react'
import ListSong from '../component/ListSong'

function Electronic({ audios }) {
    return (
        <ListSong audios={audios.slice(0, 9)} />

    )
}

export default Electronic
