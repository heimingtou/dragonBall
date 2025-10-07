import Background from "../backGround/backGround";
import ButtonContact from "../Button-contact/Button-contact";
import ProfileCardInf from "../ProfileCardInf/ProfileCardInf";
import Review from "../ProfileReview/profileReview";
import "./ProfileCard.css";
import { useState } from "react"
export default function ProfileCard({ profile}) {
  const [appear,setAppear]=useState(false)
  return (
    <>
      <div className="Container">
          <Background profile={profile} />
          <ProfileCardInf profile={profile} appear={appear}/>
           <Review/>
          <ButtonContact changeAppear={setAppear} appear={appear} />
       </div> 
    </>
  );
}
