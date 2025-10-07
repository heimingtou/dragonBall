import "./ProfileCardInf.css";
export default function ProfileCardInf({profile,appear}){
    return(
           <div className="Infor">
           <div className="img">
            {appear&&<img src={`/avatars/${profile.img}`} />}
            </div>
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
    )
 
}