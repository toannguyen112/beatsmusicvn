import React from "react";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import { setCurrentMv, showScreenMV } from "../redux/actions/action";
import { useDispatch } from "react-redux";

function MvItem({ props }) {
    const dispatch = useDispatch();
    function showMvitem(song) {
        dispatch(showScreenMV());
        dispatch(setCurrentMv(song));
    }
    return (
        <div className="col-md-4 col-sm-12 col-xl-4 col-md-4">
            <div className="mv__item" onClick={() => showMvitem(props)}>
                <div className="mv__item__img">
                    <img src={props.avatarMv} alt="" className="mv_image img-fluid" />
                    <div className="mv__overplay">
                        <div className="icon_play">
                            <PlayCircleOutlineIcon fontSize="large" />
                        </div>
                    </div>
                    <span className="time">06:21</span>
                </div>
                <div className="mv_des">
                    <img
                        src={props.avatarSinger}
                        alt=""
                        className="mv__des__img img-fluid"
                    />
                    <div className="mv__des__info">
                        <div className="mv__des__info__name">{props.name} </div>
                        <div className="mv__des__info__name__author">
                            {props.author_name}{" "}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MvItem;
