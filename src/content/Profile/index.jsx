import { useTranslation } from 'react-i18next';
import { AcademicCapIcon, BriefCaseIcon, MapPinIcon } from "../../icons";
import GradientText from "../../components/GradientText";

import "./styles.css";

const Profile = () => {
    const { t } = useTranslation();

    return (
        <>
            <h1>{t('profile.title')}</h1>
            <div className="profile-info-container">
                <p className="profile-text">
                    <span><BriefCaseIcon className="profile-icons" /></span>
                    <span>{t('profile.role')}</span>
                </p>
                <p className="profile-text">
                    <span><AcademicCapIcon className="profile-icons" /></span>
                    <span>{t('profile.university')}</span>
                </p>
                <p className="profile-text">
                    <span><MapPinIcon className="profile-icons" /></span>
                    <span>{t('profile.location')}</span>
                </p>
            </div>
            <div className="profile-quote">
                <GradientText>{t('profile.experience')}</GradientText>
            </div>
        </>
    );
};

export default Profile;
