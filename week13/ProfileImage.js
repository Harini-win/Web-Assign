import React from "react";

const ProfileImage = ({ imageUrl }) => {
    return (
        <div>
            <img src={imageUrl} alt="Profile" style={{ width: "150px", borderRadius: "50%" }} />
        </div>
    );
};

export default ProfileImage;
