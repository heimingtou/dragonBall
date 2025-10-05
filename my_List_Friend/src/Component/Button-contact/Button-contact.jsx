export default function ButtonContact({changeAppear,appear})
{
    return <button style={{
            marginTop:"10px",
        //   position:"absolute",
        //   top:"27rem",
        //   left:"10rem",
        }} onClick={()=>changeAppear(!appear)}>Contact</button>
}