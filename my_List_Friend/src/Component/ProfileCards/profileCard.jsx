
import { useState } from "react"
import profiles from "../../Data/data"
import ProfileCard from '../ProfileCard/ProfileCard'
import Search from "../Search/search"
import "./profileCard.css"
export default function ProfilesCards(){
    const [fillText,setFilltext]=useState('')
    
    let listProfile=profiles.map((myProfile, index)=>{
        if(myProfile.name.toLowerCase().indexOf(fillText.toLowerCase())==-1)
            return;
        return <ProfileCard key={index} profile={myProfile} />}
    )
    return(
        <>
        <Search fillText={fillText} changeSetFillText={setFilltext} />
        <div className="containers"> 
        {listProfile}
        </div>

        </>
        
    )

}