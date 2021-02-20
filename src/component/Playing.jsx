import React from "react";
import TabSongItem from "./TabSongItem";

export default function Playing({ listSong, musicPlaying }) {
    return (
        <ul className="tabPlay__list">
            {listSong.map((song) => {
                return <TabSongItem
                    key={song}
                    song={song}
                    musicPlaying={musicPlaying} />;
            })}
        </ul>
    );
}
