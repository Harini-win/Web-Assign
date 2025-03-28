import React from "react";
import ProfileImage from "./ProfileImage";
import UserInfo from "./UserInfo";
import UserPosts from "./UserPosts";
import profileImage from "./assets/profile.jpg"

const ProfilePage = () => {
    const user = {
        imageUrl: profileImage, 
        name: "John Doe",
        email: "johndoe@example.com",
        bio: "Software developer, tech enthusiast, and blogger.",
        posts: ["React is awesome!", "Learning new things every day!", "Happy coding!"]
    };

    return (
        <div style={{ textAlign: "center", padding: "20px", border: "1px solid #ccc", width: "50%", margin: "auto" }}>
            <ProfileImage imageUrl={user.imageUrl} />
            <UserInfo name={user.name} email={user.email} bio={user.bio} />
            <UserPosts posts={user.posts} />
        </div>
    );
};

export default ProfilePage;
