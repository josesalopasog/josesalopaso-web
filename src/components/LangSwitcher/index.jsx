import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import './styles.css';
import { ColombiaFlag, UsaFlag } from '../../assets/icons';

const LanguageSwitcher = () => {
    const { language, toggleLanguage } = useContext(AppContext); 
    return (
        <div className='toggle-lang-btn-container'>
            <button className='toggle-lang-btn' onClick={toggleLanguage}>
                {language === 'en' ? <UsaFlag className='lang-icon' /> : <ColombiaFlag className='lang-icon'/>} 
            </button>
        </div>
    );
};

export default LanguageSwitcher;