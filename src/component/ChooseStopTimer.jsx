import React from 'react'
import { useDispatch } from 'react-redux'
import { setTimeStopPlaying, showTimePicker } from '../redux/actions/action'

function ChooseStopTimer() {
    const dispatch = useDispatch()
    return (
        <div className="deleteTime">
            <p className="time_title">Delete timer</p>
            <p className="deleteTime__text">
                Are you sure you want to delete timer?
</p>
            <div className="button__container">
                <div className="btn__ys__no yes" onClick={() => dispatch(setTimeStopPlaying(''))}>Yes</div>
                <div className="btn__ys__no" onClick={() => dispatch(showTimePicker())} >No</div>
            </div>
        </div>
    )
}

export default ChooseStopTimer
