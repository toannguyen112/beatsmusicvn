import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentMv } from "../redux/actions/action";

function MvListPlayItem({ props }) {
    const dispatch = useDispatch();
    const musicReducer = useSelector((state) => state.musicReducer);
    return (
        <li
            className="listplay__item"
            onClick={() => dispatch(setCurrentMv(props))}
        >
            <div className="listplay__item_hinhanh">
                <img src={props.avatarMv} alt="" className="listplay__item__img" />
                {musicReducer.playingMv?.id === props.id ? (
                    <span className="play">Đang phát</span>
                ) : (
                        ""
                    )}
            </div>
            <div className="listplay__item__des">
                <div className="listplay__item__des__title">{props.name}</div>
                <div className="listplay__item__des__sub"> {props.author_name}</div>
            </div>
            {musicReducer.playingMv?.id === props.id ? (
                <div className="listplay__item__overplay"></div>
            ) : (
                    ""
                )}

        </li>
    );
}

export default MvListPlayItem;
