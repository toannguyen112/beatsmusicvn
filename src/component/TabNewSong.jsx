import React from 'react'
import ListSong from './ListSong'
import PlayList from './PlayList'

function TabNewSong({ audios }) {
    return (
        <div className="playContainer">
            <PlayList
                title={"Music For You"}
                audios={audios}
            />
        </div>
    )
}

export default TabNewSong
