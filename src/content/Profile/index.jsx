import { AcademicCapIcon, BriefCaseIcon, MapPinIcon } from "../../assets/icons";

import "./styles.css";

const Profile = () => {
    return (
        <>
            <h1>Profile</h1>
            <div className="profile-info-container">
                <p className="hero-text">
                    <span><BriefCaseIcon className="hero-icons" /></span>
                    <span>Fullstack Web Developer · Electronic Engineer</span>
                </p>
                <p className="hero-text">
                    <span><AcademicCapIcon className="hero-icons" /></span>
                    <span>Universidad Sergio Arboleda</span>
                </p>
                <p className="hero-text">
                    <span><MapPinIcon className="hero-icons" /></span>
                    <span>Bogotá, Colombia</span>
                </p>
            </div>
        </>
    );
};

export default Profile;
