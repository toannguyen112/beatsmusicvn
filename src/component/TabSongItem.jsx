import React from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentPlaying } from '../redux/actions/action';

function TabSongItem({ song, musicPlaying }) {
    const dispatch = useDispatch();
    return (
        <li className={musicPlaying.id === song.id ? "tabPlay__list__item active" : "tabPlay__list__item "}>
            <div className="tabPlay__list__item__left">
                <div className="tabPlay__list__item__left__img">
                    <img
                        src={require("../img/" + song.img).default}
                        alt=""
                        className="img-fluid tabPlay__list__item__img"
                    />
                    {
                        musicPlaying.id === song.id ? (


                            <div className="overplay_gif">
                                <img src="./img/icon-playing.gif" alt="" />
                            </div>

                        ) :
                            (
                                <div className="overplay_song" onClick={() => dispatch(setCurrentPlaying(song))} >
                                    <i class="fas fa-play"></i>
                                </div>
                            )
                    }


                </div>
                <div className="tabPlay__list__item__left__des">
                    <p className="name"> {song.name} </p>
                    <p className="atr">{song.author_name}</p>
                </div>
            </div>
            <div className="tabPlay__list__item__right">
                <i className="tabPlay__list__item__right__icon fas fa-heart" />
                <i className="tabPlay__list__item__right__icon fas fa-ellipsis-h" />

            </div>
        </li>



    )
}

export default TabSongItem
