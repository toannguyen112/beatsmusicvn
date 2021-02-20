import React from "react";
import SongItem from "./SongItem";

function ListSong({ audios }) {
    return (
        <div className="songList">
            <div className="container-fluid">
                <h3 className="playlist_title" style={{ fontSize: "15px", fontWeight: "bold" }} >YOUR ELECTRONIC PLAYLIST</h3>
                <div className="row">
                    {audios.map((itemSong, index) => {
                        return (
                            <div className="col-md-4">
                                <ul className="list_song_play">
                                    <SongItem key={index} props={itemSong} />
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default ListSong;
