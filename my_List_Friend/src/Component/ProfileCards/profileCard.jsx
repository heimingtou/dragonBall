
import { useState } from "react"
import profiles from "../../Data/data"
import ProfileCard from '../ProfileCard/ProfileCard'
import Search from "../Search/search"
import Selection from "../Selecction/Selection"
import "./profileCard.css"
export default function ProfilesCards(){
    const [fillText,setFilltext]=useState('')
    const [opt,setOpt]=useState('')
    let listAdd=[...new Set(profiles.map((p=>p.add)))]
    let listProfile=profiles.map((myProfile, index)=>{
        if(myProfile.name.toLowerCase().indexOf(fillText.toLowerCase())==-1||((myProfile.add!=opt)&&opt!="All"))
            return;
        return <ProfileCard key={index} profile={myProfile} />}
    )
    return(
        <>
        <div className="tool">
            <Selection opt={listAdd} changeOpt={setOpt}/>
            <Search fillText={fillText} changeSetFillText={setFilltext} />
        </div>
        
        <div className="containers"> 
        {listProfile}
        </div>

        </>
        
    )

}