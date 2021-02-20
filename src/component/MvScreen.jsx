import React from "react";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import MvListPlayItem from "./MvListPlayItem";
import { useDispatch } from "react-redux";
import { showScreenMV } from "../redux/actions/action";
function MvScreen({ playingMv, showScreenmv, listMv }) {
    const dispatch = useDispatch();

    function showListMv() {
        return listMv.map((mv, index) => {

            return <MvListPlayItem key={index} props={mv} />
        })
    }
    return (
        <div
            className="MvScreen"
            style={{ transform: showScreenmv ? "translateY(0)" : "translateY(110%)", }}
        >
            <div className="MvScreen__overplay" style={{ backgroundImage: playingMv !== null ? `url(${playingMv.avatarMv})` : "", backgroundRepeat: "no-repeat" }}></div>
            <div className="MvScreen__overplay__cover"></div>
            <div className="container fluid">
                <div className="MvScreen__top">
                    <div className="MvScreen__top__left">
                        <img
                            className="img-fluid MvScreen__top__left__img"
                            src={playingMv !== null ? playingMv.avatarSinger : ""}
                            alt=""
                        />
                        <div className="MvScreen__top__left__des">
                            <div className="title">
                                {" "}
                                {playingMv !== null ? playingMv.name : ""}{" "}
                            </div>
                            <div className="sub">
                                {" "}
                                {playingMv !== null ? playingMv.author_name : ""}{" "}
                            </div>
                        </div>
                    </div>
                    <div className="MvScreen__top__right">
                        <div
                            className="icon_close"
                            onClick={() => dispatch(showScreenMV())}
                        >
                            <CloseOutlinedIcon />
                        </div>
                    </div>
                </div>
                <div className="video">
                    <iframe
                        title="music"
                        width="1106"
                        height="500"
                        src={playingMv !== null ? playingMv.mv : ""}
                    ></iframe>
                    <ul className="listPlay">
                        <h4 className="p-2">List Mv</h4>
                        {
                            showListMv()
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MvScreen;
