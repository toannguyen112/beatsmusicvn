import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListenRecently from "./ListenRecently";
import Playing from "./Playing";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import { showTimePicker } from "../redux/actions/action";
function TabPlay() {
    const dispatch = useDispatch();
    const [state, setState] = useState({
        current: "Danh sách yêu thích",
        array: ["Danh sách yêu thích", "Nghe gần đây"],
    });

    const musicReducer = useSelector((state) => state.musicReducer);

    function showTab() {
        if (state.current === "Danh sách yêu thích") {
            return (
                <Playing
                    listSong={musicReducer.favoriesSong}
                    musicPlaying={musicReducer.playing}
                />
            );
        } else {
            return <ListenRecently />;
        }
    }
    return (
        <div
            className="tabPlay"
            style={
                musicReducer.tabMusic
                    ? { transform: "translateX(0)" }
                    : { transform: "translateX(100%)" }
            }
        >
            <div className="boxnav">
                <div className="boxnav__center">
                    {state.array.map((item, index) => {
                        return (
                            <span
                                key={index}
                                className={`listplaying ${item === state.current ? "active" : ""
                                    }`}
                                onClick={() => setState({ ...state, current: item })}
                            >
                                {item}
                            </span>
                        );
                    })}
                </div>
                <span
                    style={{ display: "flex", alignItems: "center" }}
                    onClick={() => dispatch(showTimePicker())}
                >
                    <AccessAlarmIcon style={{ color: "#fff", cursor: "pointer" }} />
                </span>
            </div>
            {showTab()}
        </div>
    );
}

export default TabPlay;
