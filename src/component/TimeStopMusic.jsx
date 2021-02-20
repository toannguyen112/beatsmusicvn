import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { setTimeStopPlaying, showTimePicker } from "../redux/actions/action";
import ChooseStopTimer from "./ChooseStopTimer";

function TimeStopMusic() {
    const dispatch = useDispatch();
    const [value, onChange] = useState("");
    const [saveTime, setSaveTime] = useState(false);
    const musicReducer = useSelector((state) => state.musicReducer);
    useEffect(() => {
        if (saveTime) {
            dispatch(setTimeStopPlaying(value));
            dispatch(showTimePicker());
        }
    }, [saveTime, dispatch, value]);
    function handleSaveTime() {
        Swal.fire({
            title: "Set to stop playing music successfully",
            width: 600,
            padding: "3em",
            background: "#fff url(/images/trees.png)",
            backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `,
        });
        setSaveTime(!saveTime);
    }
    console.log(saveTime);
    return (
        <React.Fragment>
            <div className="TimeStopMusic">

                {
                    musicReducer.timeStopPlaying !== "" ? (
                        <ChooseStopTimer />


                    ) :
                        <div className="TimeStopMusic_formTimePicker">
                            <p className="time_title">Timer Stop Playing Music</p>
                            <input
                                value={value}
                                type="time"
                                id="appt"
                                name="appt"
                                onChange={(e) => onChange(e.target.value)}
                            />

                            <p className="time_title__sub">Timer Stop Playing Music</p>
                            <div
                                className="saveTime"
                                onClick={value !== "" ? () => handleSaveTime() : () => null}
                                style={{ cursor: value !== "" ? "pointer" : "not-allowed" }}
                            >
                                Save Time
                </div>

                            <div className="cancel" onClick={() => dispatch(showTimePicker())}>
                                Cancel
                  </div>
                        </div>
                }


            </div>
        </React.Fragment>
    );
}

export default TimeStopMusic;
