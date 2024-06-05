import React from 'react';

const Profile = ({ user }) => {
    return (
        <div className="profile">
            <h2>{user.username}'s Profile</h2>
            <p>Coins: ${user.coins}</p>
        </div>
    );
};

export default Profile;
