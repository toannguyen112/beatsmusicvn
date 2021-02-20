import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MediaItem from "../component/MediaItem";
import { addFavories, setIsPlay } from "../redux/actions/action";

function PlayListDetail({ data }) {
    const musicReducer = useSelector((state) => state.musicReducer);
    const dispatch = useDispatch();

    function showButton() {
        if (musicReducer.isPlay) {
            return (
                <button className="stop" onClick={() => dispatch(setIsPlay(false))}>
                    <i className="fas fa-pause mr-3" />
          Tạm dừng
                </button>
            );
        } else {
            return (
                <button className="stop" onClick={() => dispatch(setIsPlay(true))}>
                    <i className="fas fa-play mr-3" />
          Tiếp tục phát
                </button>
            );
        }
    }
    function addClasRote() {
        return musicReducer.isPlay
            ? "playListDetai__img active"
            : "playListDetai__img ";
    }
    if (data.playing === null) return "";
    return (
        <div className="playListDetai">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 col-sm-12 col-xs-12">
                        <div className="playListDetai__left">
                            <div className={addClasRote()}>
                                <img
                                    src={require("../img/" + data.playing.img).default}
                                    alt=""
                                    className="playListDetai__img__content img-fluid"
                                />
                                {
                                    musicReducer.isPlay ? (
                                        <div className="overplay">
                                            <div className="icon_play">
                                                <img src="./img/icon-playing.gif" alt="" />
                                            </div>
                                        </div>
                                    ) : ""
                                }

                            </div>
                            <div className="playListDetai__des">
                                <p className="namesong"> {data.playing.name} </p>
                                <p className="update">Cập nhật: 02/11/2020</p>
                                <p className="like">140 người yêu thích</p>
                            </div>
                            <div className="btn_stop">{showButton()}</div>
                            <div className="favoriesMore">
                                <i className="favoriesMore__icon fas fa-heart" onClick={() => dispatch(addFavories(data.playing))} />
                                <i className="favoriesMore__icon fas fa-ellipsis-h" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-sm-12 col-xs-12">
                        <ul className="playListDetai__listSong">
                            {data.playlists.map((item, index) => {
                                return <MediaItem key={index} item={item} />;
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlayListDetail;
