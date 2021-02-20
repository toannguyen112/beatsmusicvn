import React from 'react'
import PlayItem from './PlayItem'
function PlayList({ title, audios, choeseSong }) {

    return (
        <div className="play_list_box">
            <h3 className="playlist_title">
                {title}
            </h3>
            <ul className="list_music">
                <div className="row">

                    {
                        audios.map((item, index) => {
                            return (
                                <PlayItem choeseSong={choeseSong} song={item} key={index} index={index} />

                            )
                        })
                    }


                </div>

            </ul>




        </div>
    )
}

export default PlayList
