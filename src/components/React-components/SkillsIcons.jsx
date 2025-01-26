import PropTypes from 'prop-types';
import linuxIcon from '../../assets/svg/linux.svg';
import nodejsIcon from '../../assets/svg/nodejs.svg';


import { ReactIcon, TailwindCssIcon, JavascriptIcon, Html5Icon, CssIcon, ViteJsIcon, PythonIcon, ExcelIcon, SapIcon, JupyterIcon, GitIcon, GithubIcon, AstroIcon, PowerBiIcon, VsCodeIcon, PostgreSqlICon, MySqlIcon, ExpressJsIcon } from '../../icons';

import '../../styles/SkillsIcons.css';

const SkillsIcons = ({
  showReactIcon,
  showViteIcon,
  showTailwindIcon,
  showJSIcon,
  showHTMLIcon,
  showCSSIcon,
  showPythonIcon,
  showExcelIcon,
  showSapIcon,
  showJupyterIcon,
  showGitIcon,
  showGithubIcon,
  showAstroIcon,
  showPowerBIIcon,
  showLinuxIcon,
  showVsCodeIcon,
  showPostgreSQLIcon,
  showMySQLIcon,
  showNodeJSIcon,
  showExpressJSIcon,
}) => {
  SkillsIcons.propTypes = {
    showReactIcon: PropTypes.bool,
    showViteIcon: PropTypes.bool,
    showTailwindIcon: PropTypes.bool,
    showJSIcon: PropTypes.bool,
    showHTMLIcon: PropTypes.bool,
    showCSSIcon: PropTypes.bool,
    showPythonIcon: PropTypes.bool,
    showExcelIcon: PropTypes.bool,
    showSapIcon: PropTypes.bool,
    showJupyterIcon: PropTypes.bool,
    showGitIcon: PropTypes.bool,
    showGithubIcon: PropTypes.bool,
    showAstroIcon: PropTypes.bool,
    showPowerBIIcon: PropTypes.bool,
    showLinuxIcon: PropTypes.bool,
    showVsCodeIcon: PropTypes.bool,
    showPostgreSQLIcon: PropTypes.bool,
    showMySQLIcon: PropTypes.bool,
    showNodeJSIcon: PropTypes.bool,
    showExpressJSIcon: PropTypes.bool,
  };

  return (
    <div className="flex flex-wrap gap-1 items-center justify-center w-full cursor-pointer">
      {showReactIcon && (
        <div className="skill-container">
          <ReactIcon className="skill-icon" />
          <p>React</p>
        </div>
      )}
      {showViteIcon && (
        <div className="skill-container">
          <ViteJsIcon className="skill-icon" />
          <p>Vite.js</p>
        </div>
      )}
      {showAstroIcon && (
        <div className="skill-container">
          <AstroIcon className="skill-icon" />
          <p>Astro</p>
        </div>
      )}      
      {showTailwindIcon && (
        <div className="skill-container">
          <TailwindCssIcon className="skill-icon" />
          <p>TailwindCSS</p>
        </div>
      )}
      {showJSIcon && (
        <div className="skill-container">
          <JavascriptIcon className="skill-icon" />
          <p>Javascript</p>
        </div>
      )}
      {showHTMLIcon && (
        <div className="skill-container">
          <Html5Icon className="skill-icon" />
          <p>HTML</p>
        </div>
      )}
      {showCSSIcon && (
        <div className="skill-container">
          <CssIcon className="skill-icon" />
          <p>CSS</p>
        </div>
      )}
      {showPythonIcon && (
        <div className="skill-container">
          <PythonIcon className="skill-icon" />
          <p>Python</p>
        </div>
      )}
      {showExcelIcon && (
        <div className="skill-container">
          <ExcelIcon className="skill-icon" />
          <p>Excel</p>
        </div>
      )}
      {showSapIcon && (
        <div className="skill-container">
          <SapIcon className="skill-icon" />
          <p>SAP</p>
        </div>
      )}
      {showJupyterIcon && (
        <div className="skill-container">
          <JupyterIcon className="skill-icon" />
          <p>Jupyter NB</p>
        </div>
      )}
      {showGitIcon && (
        <div className="skill-container">
          <GitIcon className="skill-icon" />
          <p>Git</p>
        </div>
      )}
      {showGithubIcon && (
        <div className="skill-container">
          <GithubIcon className="skill-icon fill-black dark:fill-white" />
          <p>Github</p>
        </div>
      )}
      {showVsCodeIcon && (
        <div className="skill-container">
          <VsCodeIcon className="skill-icon" />
          <p>VS Code</p>
        </div>
      )}
      {showPowerBIIcon && (
        <div className="skill-container">
          <PowerBiIcon className="skill-icon" />
          <p>Power BI</p>
        </div>
      )}
      {showLinuxIcon && (
        <div className="skill-container">
          <img className="skill-icon" src={linuxIcon.src} alt="linux-icon" />
          <p>Linux</p>
        </div>
      )}
      {showPostgreSQLIcon && (
        <div className="skill-container">
          <PostgreSqlICon className="skill-icon" />
          <p>PostgreSQL</p>
        </div>
      )}
      {showMySQLIcon && (
        <div className="skill-container">
          <MySqlIcon className="skill-icon" />
          <p>MySQL</p>
        </div>
      )}
      {showNodeJSIcon && (
        <div className="skill-container">
          <img className="skill-icon" src={nodejsIcon.src} alt="nodejs-icon" />
          <p>Node.js</p>
        </div>
      )}
      {showExpressJSIcon && (
        <div className="skill-container">
          <ExpressJsIcon className="skill-icon fill-black dark:fill-white" />
          <p>Express.js</p>
        </div>
      )}
    </div>
  );
};

export default SkillsIcons;