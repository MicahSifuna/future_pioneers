import React from 'react';
import '././styles/CardMain.css';
import queen from "./../Assets/queen.jpg";
import oscar from "./../Assets/oscar.jpg";

function CardMain() {
  return (
    <div className='MainContainer'>
        <div className="leftImage">
            <div className="image">
                <img src={queen} alt="Queen Image" width={300} height={300} />
            </div>
            <h4><b>Mary</b></h4>
        </div>
        <div className="rightDescription">
            <p id="description-box">
                <p1>"Our Aim is very clearly stated in the Motto. We normally pay visits to the Homes we Chose to go."</p1>
                    <p>"This happens after we made some contributions that facilitate the welfare of our members and
                        those we are visiting.We are actually aiming
                        higher and more in the future to better the society we live in."
                    </p>
            </p>
        </div>

        <div className="leftImage">
            <div className="image">
                <img src={oscar} alt="Queen Image" width={300} height={300} />
            </div>
            <h4><b>Oscar</b></h4>
        </div>
        <div className="rightDescription">
            <p id="description-box">
                <p2>"The group started with few willing individuals who had the same vision of making the society better."</p2>
                <p>"We are still doing the same despite few challenges. We also still urge anybody
                    willing to join this great Organization to do so. And also you can still donate something
                    to help us better the society together. "</p>
            </p>
        </div>
    </div>
  )
}

export default CardMain;