import { AcademicCapIcon, BriefCaseIcon, MapPinIcon } from "../../assets/icons";

import "./styles.css";

const Profile = () => {
    return (
        <>
            <h1>Profile</h1>
            <div className="profile-info-container">
                <p className="profile-text">
                    <span><BriefCaseIcon className="profile-icons" /></span>
                    <span>Fullstack Web Developer · Electronic Engineer</span>
                </p>
                <p className="profile-text">
                    <span><AcademicCapIcon className="profile-icons" /></span>
                    <span>Universidad Sergio Arboleda</span>
                </p>
                <p className="profile-text">
                    <span><MapPinIcon className="profile-icons" /></span>
                    <span>Bogotá, Colombia</span>
                </p>
            </div>
        </>
    );
};

export default Profile;
