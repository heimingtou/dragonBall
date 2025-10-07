
export default function Background({profile}){
    return(
         <div
          className="top"
          style={{
            backgroundImage: `url(/avatars/${profile.background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            maxWidth: "100%",
            height: "9rem",
            borderRadius: "30px 30px 0 0",
            zIndex:'5'
          }}>
        </div>
    )
}