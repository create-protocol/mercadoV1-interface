import React from 'react'
import './addcolab.css'

function addcolab() {
    return (
        <div id="centol">
            <view className="headerinline">
                <label className="switch" >
                    <input type="checkbox"/>
                    <span className="slider round"></span>
                    <text className="headi" >ADD COLLABORATORS / CO-CONTRIBUTORS</text>
                    <div className="circle">i</div>
                </label>
            </view>
        </div>
    )
}

export default addcolab
