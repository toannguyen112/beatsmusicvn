import React from "react";
import MvItem from "../component/MvItem";
function Mvpage({ audios }) {
    console.log(audios);
    return (
        <div className="Mvpage">
            <div className="Mvpage__heading">MV</div>
            <div className="Mvpage__content">
                <div className="container-fluid">
                    <div className="row">
                        {
                            audios.map((song) => {
                                return <MvItem props={song} />
                            })
                        }



                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mvpage;
