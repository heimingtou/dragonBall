

export default function Search({fillText,changeSetFillText}){
    return <>
    <input type="text" style={
       { marginBottom:"30px",
        width:"40rem",
        height:"2.5rem",
        borderRadius:"15px",
        paddingLeft:"15px",
        fontSize:"20px"
       }
    } placeholder="Search..." value={fillText} onChange={(e)=>changeSetFillText(e.target.value)}></input>
    </> 
}