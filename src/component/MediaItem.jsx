import React from 'react'
import { useDispatch } from 'react-redux'
import { addFavories, setAudioOpen, setCurrentPlaying, setIsPlay } from '../redux/actions/action'
function MediaItem({ item }) {
    const dispatch = useDispatch();
    function playing(song) {
        dispatch(setIsPlay(true));
        dispatch(setCurrentPlaying(song));
        dispatch(setAudioOpen(true));
    }

    return (
        <li className="playListDetai__listSong__item"  >
            <div className="row">
                <div className="col-md-4">
                    <div className="playListDetai__listSong__item__img">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="playListDetai__listSong__item__img__detail" onClick={() => playing(item)}>
                                    <img
                                        src={require('../img/' + item.img).default}
                                        alt=""
                                        className="playListDetai__listSong__item__img__content img-fluid "
                                    />
                                    <div className="overplay_song">
                                        <div className="overplay_song__icon">
                                            <i className="fas fa-play" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9 p-0">
                                <div className="playListDetai__listSong__item__des">
                                    <div className="namesong">
                                        {item.name}
                                    </div>
                                    <div className="atrist">
                                        {item.author_name}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="time">04:56</div>
                </div>
                <div className="col-md-4">
                    <div className="more">
                        <i class="fas fa-heart" onClick={() => dispatch(addFavories(item))} ></i>
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default MediaItem
