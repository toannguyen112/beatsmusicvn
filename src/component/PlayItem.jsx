import React from "react";
import { useDispatch } from "react-redux";
import { setAudioOpen, setCurrentPlaying, setIsPlay } from '../redux/actions/action'


function PlayItem({ song }) {
    const dispatch = useDispatch();
    function playing(song) {
        dispatch(setCurrentPlaying(song));
        dispatch(setAudioOpen(true));
        dispatch(setIsPlay(true));

    }
    return (
        <div className="col-md-2 col-sm-2 col-xs-12">
            <li className="list_music__item" onClick={() => playing(song)} >
                <div className="list_music__item__img">
                    <img
                        src={require("../img/" + song.img).default}
                        alt=""
                        className="img-fluid list_music__item__img__content"
                    />
                    <div className="overplay_play">
                        <div className="overplay_content">
                            <i className="fas fa-play" />
                        </div>
                    </div>
                </div>
                <p className="list_music__item__name_song">{song.name} </p>
                <p className="list_music__item__name_at"> {song.author_name} </p>
            </li>
        </div>
    );
}

export default PlayItem;
