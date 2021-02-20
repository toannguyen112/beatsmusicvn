import React from "react";

function SideBar({ currenPlayList, playlist, chooseTab }) {
    function chooseTabItem(tab) {
        chooseTab(tab);
    }

    return (
        <div className="Content__left">
            <ul className="Content__left__list">
                <li className="Content__left__list__item Content__left__list__item__heading">
                    <img src="https://www.freepnglogos.com/uploads/beats-music-logo-png-6.png" alt="" className="img-fluid" />
                    BeatsMusic
                </li>
                {playlist.map((list) => {
                    return (
                        <li
                            key={list}
                            className={`Content__left__list__item ${list === currenPlayList ? "active" : ""
                                } `}
                            onClick={() => chooseTabItem(list)}
                        >
                            {list}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default SideBar;
