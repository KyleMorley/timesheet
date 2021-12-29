const Profile = ({user}) => {
    return (
        <div className='profile'>
            <h4>Welcome { user.firstName }</h4>
            <h4 className='text-muted'>{user.title}</h4>
        </div>
    )
}

export default Profile
