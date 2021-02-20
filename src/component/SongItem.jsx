import React from "react";
import { useDispatch } from "react-redux";
import {
    setAudioOpen,
    setCurrentPlaying,
    setIsPlay,
} from "../redux/actions/action";

function SongItem({ props }) {
    const dispatch = useDispatch();
    function playing(song) {
        dispatch(setCurrentPlaying(song));
        dispatch(setAudioOpen(true));
        dispatch(setIsPlay(true));
    }
    return (
        <li className="list_song_play_item" onClick={() => playing(props)}>
            <div className="row">
                <div className="col-md-2 ">
                    <div className="list_song_play_item_img">
                        <img
                            className="img-fluid"
                            src={require("../img/" + props.img).default}
                            alt=""
                        />
                        <div className="overplay_song">
                            <div className="overplay_song__icon">
                                <i className="fas fa-play" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-10 ">
                    <div className="list_song_play_item_des">
                        <div className="list_song_play_item_des_name">{props.name}</div>
                        <div className="list_song_play_item_des_artist">
                            {props.author_name}
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default SongItem;
