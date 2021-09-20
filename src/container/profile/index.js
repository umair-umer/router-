import { useParams } from "react-router-dom";

function Profile() {
    const { id } = useParams();
    console.log(id )
    return (<>



        <h1>profile</h1>
        <h2>{id}</h2>
       



    </>);
}
export default Profile;