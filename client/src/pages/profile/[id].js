import React from 'react'
import Info from '../../components/profile/Info'
import Posts from '../../components/profile/Posts'
import {useSelector} from 'react-redux'
import LoadIcon from '../../images/loading.gif'


const Profile = () => {
    const { profile } = useSelector(state => state)
    return (
        <div className="profile">
            {
                profile.loading 
                ?  <img className="d-block mx-auto my-4" src={LoadIcon} alt="loading" />
                : <Info />

            }
        
            <Posts />
        </div>

        // <div>
        //     <h2>Profile</h2>
        // </div>
    )
}

export default Profile