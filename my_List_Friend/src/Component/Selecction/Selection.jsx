
export default function Selection({opt,changeOpt}){
    let listopt=opt.map((p,i)=>
        <option key={i} value={p}>{p}</option>
    )
    return(
        <select style={{
        marginBottom:"30px",
        width:"20rem",
        height:"2.5rem",
        borderRadius:"15px",
        paddingLeft:"15px",
        fontSize:"20px"
        }
        } onChange={(e)=>changeOpt(e.target.value)}>
            <option>All</option>
            {listopt}
        </select>
    )
}