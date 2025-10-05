import ButtonContact from "../Button-contact/Button-contact";
import "./ProfileCard.css";
import { useState } from "react"
export default function ProfileCard({ profile}) {
  const [appear,setAppear]=useState(false)
  return (
    <>
      <div className="Container">
        <div
          className="top"
          style={{
            backgroundImage: `url(/avatars/${profile.background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="Infor">
          <div className="img">{appear&&<img src={`/avatars/${profile.img}`} />}</div>
          
           <div className="Pri-Inf">
                <p>Age: {profile.age}</p>
                <hr />
                <p>Address: {profile.add}</p>
                <hr />
                <p>Phone: {profile.phone}</p>
            </div>
              { appear&& (<>
              <h2 style={{ margin: "0" }}>{profile.name}</h2>
              <h3 style={{ margin: "0" }}>{profile.job}</h3>
              </>)}
          </div>
          <div className="review">
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit
              amet consectetur adipiscing elit quisque faucibus.
            </p>
          </div>

          <ButtonContact changeAppear={setAppear} appear={appear} />
       
      </div> {}
    </>
  );
}
