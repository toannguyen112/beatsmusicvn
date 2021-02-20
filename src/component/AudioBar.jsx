import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addFavories, setCurrentPlaying, setShowTab } from "../redux/actions/action";
import Slider from "@material-ui/core/Slider";
import RepeatOneIcon from "@material-ui/icons/RepeatOne";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import { setIsPlay } from "../redux/actions/action";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import QueueMusicRoundedIcon from "@material-ui/icons/QueueMusicRounded";
function AudioBar({ setShowDetailSong, musicReducer, musicPlaying }) {
    const audioRef = useRef();
    const [isPrevClicked, setPrevClicked] = useState(false);
    const [isNextClicked, setNextClicked] = useState(false);
    const [repeatOne, setRepeatOne] = useState(false);
    const [{ id, name, author_name, img, musicName }, setCurrTrack] = useState(
        musicPlaying
    );
    const [random, setRandom] = useState(false);
    const [isVolumeClicked, setVolumeClicked] = useState(true);

    const [volume, setVolume] = useState(0.5);
    const [seekTime, setSeekTime] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const dispatch = useDispatch();
    useEffect(() => {
        setCurrTrack(musicPlaying);
    }, [musicPlaying]);
    useEffect(() => {
        if (musicPlaying != null && musicReducer.isPlay) {
            audioRef.current.volume = 0.5;
            audioRef.current.muted = false;
            audioRef.current.play();

            audioRef.current.onloadeddata = () => {
                if (audioRef.current != null) {
                    setDuration(audioRef.current.duration);
                    audioRef.current.play();
                    setInterval(() => {
                        if (audioRef.current !== null)
                            setCurrentTime(audioRef.current.currentTime);
                    });
                    addClassPlay();
                }
            };
        } else {
            audioRef.current.pause();
            removeClassPlay();
        }
    }, [musicPlaying, musicReducer.playlists, musicReducer.isPlay]);

    useEffect(() => {
        setSeekTime(currentTime / (duration / 100));
    }, [duration, currentTime]);

    useEffect(() => {
        if (musicPlaying != null) {
            if (isNextClicked) {
                let currTrackId = (id + 1) % musicReducer.playlists.length;
                dispatch(setCurrentPlaying(musicReducer.playlists[currTrackId]));
                setNextClicked(false);
            }
            if (isPrevClicked) {
                let currTrackId = (id - 1) % musicReducer.playlists.length;
                if (id - 1 < 0) {
                    currTrackId = musicReducer.playlists.length - 1;
                }
                dispatch(setCurrentPlaying(musicReducer.playlists[currTrackId]));
                setPrevClicked(false);
            }
        }
    }, [
        dispatch,
        isNextClicked,
        isPrevClicked,
        musicPlaying,
        musicReducer.playlists,
        id,
    ]);

    const handleVolumeChange = (e, value) => {
        audioRef.current.volume = value;
        setVolume(value);
    };

    const handleSeekChange = (e, value) => {
        audioRef.current.currentTime = (value * duration) / 100;
        var carulator = (value * duration) / 100;
        console.log(carulator);
        setSeekTime(value);
    };
    const play_pause = () => {
        if (musicReducer.isPlay) {
            removeClassPlay();
            dispatch(setIsPlay(false));
        } else {
            addClassPlay();
            dispatch(setIsPlay(true));
        }
    };

    function repeatClicked() {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
    }
    function muted() {
        setVolumeClicked(!isVolumeClicked);
        audioRef.current.muted = isVolumeClicked;
    }
    function showTabMusic() {
        dispatch(setShowTab());
    }

    function addClassPlay() {
        document
            .getElementsByClassName("audio_left_image__content")[0]
            .classList.add("active");
    }

    function removeClassPlay() {
        document
            .getElementsByClassName("audio_left_image__content")[0]
            .classList.remove("active");
    }

    function next() {
        setNextClicked(true);
        dispatch(setIsPlay(true));
        removeClassPlay();
    }

    function pre() {
        setPrevClicked(true);
        dispatch(setIsPlay(true));
    }

    function formatTime(seconds) {
        let min = Math.floor(seconds / 60);
        let sec = Math.floor(seconds - min * 60);
        if (sec < 10) {
            sec = `0${sec}`;
        }
        return `${min}:${sec}`;
    }

    function randomMusic() {
        const randomSong =
            musicReducer.playlists[
            Math.floor(Math.random() * musicReducer.playlists.length)
            ];
        dispatch(setCurrentPlaying(musicReducer.playlists[randomSong.id]));
    }

    function onended() {
        if (repeatOne) {
            repeatClicked();
        } else if (random) {
            randomMusic();
        } else {
            next();
        }
    }

    if (musicPlaying === null) return "";
    return (
        <div className="audio">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-sm-3 col-xs-12">
                        <div className="audio_left">
                            <div className="row">
                                <div className="col-sm-6 col-md-8 col-xs-6 ">
                                    <div
                                        className="audio_left_image"
                                        onClick={() => setShowDetailSong(true)}
                                    >
                                        <img
                                            src={require("../img/" + img).default}
                                            alt=""
                                            className="audio_left_image__content  "
                                        />
                                        <div className="audio_left_des">
                                            <p className="name_song">{name}</p>
                                            <p className="casy">{author_name}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-md-4  col-xs-6">
                                    <div className="audio_left_more" onClick={() => dispatch(addFavories(musicPlaying))}  >
                                        <i className="fas fa-heart" />
                                        <i className="fas fa-ellipsis-h" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="audio_center">
                            <div className="allButtonPlay">
                                <button
                                    className="btnControl"
                                    onClick={() => setRepeatOne(!repeatOne)}
                                >
                                    <RepeatOneIcon style={{ color: repeatOne ? "#c662ef" : "" }} />
                                </button>

                                <button className="btnControl" onClick={() => pre()}>
                                    <SkipPreviousIcon />
                                </button>

                                {musicReducer.isPlay ? (
                                    <button
                                        className="btnControl btnplay"
                                        onClick={() => play_pause()}
                                    >
                                        <i className="fas fa-pause" />
                                    </button>
                                ) : (
                                        <button
                                            className="btnControl btnplay"
                                            onClick={() => play_pause()}
                                        >
                                            <i className="fas fa-play"></i>
                                        </button>
                                    )}

                                <button className="btnControl" onClick={() => next()}>
                                    <SkipNextIcon />
                                </button>
                                <button className="btnControl" onClick={() => setRandom(!random)}>
                                    <ShuffleIcon style={{ color: random ? "#c662ef" : "" }} />
                                </button>
                            </div>
                            <div className="processPlay">
                                <div className="time_left time"> {formatTime(currentTime)} </div>
                                <Slider
                                    value={seekTime}
                                    onChange={handleSeekChange}
                                    style={{ color: "#fff" }}
                                />
                                <div className="time_right time"> {formatTime(duration)} </div>
                            </div>

                            <audio
                                ref={audioRef}
                                src={require("../audio/" + musicName).default}
                                preload={"metadata"}
                                onEnded={onended}
                            />
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12">
                        <div className="audio_right">
                            <button className="btn_volume" onClick={() => muted()}>
                                {isVolumeClicked ? (
                                    <i className="fas fa-volume-up" />
                                ) : (
                                        <i className="fas fa-volume-mute" />
                                    )}
                            </button>
                            <Slider
                                value={volume}
                                onChange={handleVolumeChange}
                                min={0.0}
                                max={1.0}
                                step={0.1}
                                color="secondary"
                            />
                            <div
                                className={`btn_playlist ${musicReducer.tabMusic ? "active" : ""
                                    }`}
                                onClick={() => showTabMusic()}
                            >
                                <QueueMusicRoundedIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AudioBar;
