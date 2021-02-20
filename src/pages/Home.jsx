import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PlayListDetail from "./PlayListDetail";
import SideBar from "../component/SideBar";
import TabNewSong from "../component/TabNewSong";
import TabPlay from "../component/TabPlay";
import AudioBar from "../component/AudioBar";
import Mvpage from "./Mvpage";
import MvScreen from "../component/MvScreen";
import Electronic from "./Electronic";
import TimeStopMusic from "../component/TimeStopMusic";
import { setIsPlay } from "../redux/actions/action";
import Swal from "sweetalert2";
function Home() {
    const [listLi, setlistLie] = useState({
        currenPlayList: "Home",
        playlist: {
            Home: "Home",
            MV: "MV",
            Electronic: "Electronic",
        },
    });

    const [keyWord, setKeyWord] = useState("");
    const newplaylist = Object.keys(listLi.playlist);
    const [showDetailSong, setShowDetailSong] = useState(false);
    const musicReducer = useSelector((state) => state.musicReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        if (musicReducer.timeStopPlaying !== "") {
            let x = musicReducer.timeStopPlaying;
            let date = new Date();

            //split your x string into hours,minutes and seconds
            date.setHours(x.split(":")[0]); //set hours
            date.setMinutes(x.split(":")[1]); //set minutes
            // date.setSeconds(x.split(":")[2]); //set seconds

            let t = Math.abs(date - new Date());
            let timer = setTimeout(function () {
                Swal.fire({
                    title: "Music Playing Stopped",
                    showClass: {
                        popup: "animate__animated animate__fadeInDown",
                    },
                    hideClass: {
                        popup: "animate__animated animate__fadeOutUp",
                    },
                });
                dispatch(setIsPlay(false));
            }, t);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [musicReducer.timeStopPlaying, dispatch]);

    function chooseTab(tab) {
        setlistLie({ ...listLi, currenPlayList: tab });
    }

    function showAudiosBar() {
        return musicReducer.playing != null ? (
            <AudioBar
                setShowDetailSong={setShowDetailSong}
                musicReducer={musicReducer}
                musicPlaying={musicReducer.playing}
            />
        ) : (
                ""
            );
    }

    function showTimePicker() {
        return musicReducer.timePicker ? <TimeStopMusic /> : "";
    }

    const listSongItem = () => {
        const filteredCountries = musicReducer.playlists.filter((item) => {
            return (
                item.name.toLowerCase().indexOf(keyWord.toLowerCase()) !== -1 ||
                item.author_name.toLowerCase().indexOf(keyWord.toLowerCase()) !== -1 ||
                item.type.toLowerCase().indexOf(keyWord.toLowerCase()) !== -1
            );
        });

        return filteredCountries;
    };

    function renderPage() {
        if (listLi.currenPlayList === newplaylist[0]) {
            return (
                <React.Fragment>
                    {showDetailSong ? <PlayListDetail data={musicReducer} /> : ""}
                    <TabNewSong audios={listSongItem()} />
                </React.Fragment>
            );
        }
        if (listLi.currenPlayList === newplaylist[1]) {
            return <Mvpage audios={musicReducer.playlists.slice(16, 20)} />;
        } else {
            return <Electronic audios={listSongItem()} />;
        }
    }

    return (
        <React.Fragment>
            <div className="HomePage">
                <div className="HomePage__content">
                    <SideBar
                        currenPlayList={listLi.currenPlayList}
                        playlist={newplaylist}
                        chooseTab={chooseTab}
                    />
                    <div className="Content__right">
                        <div className="Content__right__search">
                            <div className="search">
                                <i className="fas fa-search"></i>
                                <input
                                    type="text"
                                    className="input_search"
                                    placeholder="Search song..."
                                    onChange={(e) => setKeyWord(e.target.value)}
                                />
                            </div>
                        </div>

                        {renderPage()}
                        <MvScreen
                            playingMv={
                                musicReducer.playingMv !== null ? musicReducer.playingMv : null
                            }
                            showScreenmv={musicReducer.showScreenMV}
                            listMv={musicReducer.playlists.slice(16, 20)}
                        />
                    </div>
                    {showAudiosBar()}
                    {showTimePicker()}
                </div>
                <TabPlay />
            </div>
        </React.Fragment>
    );
}

export default Home;
