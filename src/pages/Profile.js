import React, {useState, useEffect} from 'react'


const Profile = ({userName}) => {
    const [profile, setProfile] = useState({})
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const profile =  await fetch(`https://api.github.com/users/${userName}`);
            const result = await profile.json();

            if(result){
                setProfile(result);
                setLoading(false);
            }
        }

        fetchData();
    },[])



  return (
    <div>
        <div className="Profile-container">
            <h2>About Me</h2>
            {loading ? (<span>Loading...</span>) : (
                <div>
                    <img src={profile.avatar_url} alt="avatar" className="Profile-avatar"/>
                    <ul>
                        <li><span>Avatar Url: </span>{profile.avatar_url}</li>
                        <li><span>Html Url: </span>{profile.html_url}</li>
                        <li><span>Repos Url: </span>{profile.repos_url}</li>
                        <li><span>Name Url: </span>{profile.name}</li>
                        <li><span>Company: </span>{profile.company}</li>
                        <li><span>Location: </span>{profile.location}</li>
                        <li><span>Email: </span>{profile.email}</li>
                        <li><span>bio: </span>{profile.bio}</li>
                    </ul>
                </div>
            )}
        </div>
    </div>
  )
}

export default Profile