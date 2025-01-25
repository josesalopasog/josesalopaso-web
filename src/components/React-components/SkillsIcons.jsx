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
        <div className="skill-icon">
          <ReactIcon className="w-5 h-5" />
          <p>React</p>
        </div>
      )}
      {showViteIcon && (
        <div className="skill-icon">
          <ViteJsIcon className="w-5 h-5" />
          <p>Vite.js</p>
        </div>
      )}
      {showAstroIcon && (
        <div className="skill-icon">
          <AstroIcon className="w-5 h-5" />
          <p>Astro</p>
        </div>
      )}      
      {showTailwindIcon && (
        <div className="skill-icon">
          <TailwindCssIcon className="w-5 h-5" />
          <p>TailwindCSS</p>
        </div>
      )}
      {showJSIcon && (
        <div className="skill-icon">
          <JavascriptIcon className="w-5 h-5" />
          <p>Javascript</p>
        </div>
      )}
      {showHTMLIcon && (
        <div className="skill-icon">
          <Html5Icon className="w-5 h-5" />
          <p>HTML</p>
        </div>
      )}
      {showCSSIcon && (
        <div className="skill-icon">
          <CssIcon className="w-5 h-5" />
          <p>CSS</p>
        </div>
      )}
      {showPythonIcon && (
        <div className="skill-icon">
          <PythonIcon className="w-5 h-5" />
          <p>Python</p>
        </div>
      )}
      {showExcelIcon && (
        <div className="skill-icon">
          <ExcelIcon className="w-5 h-5" />
          <p>Excel</p>
        </div>
      )}
      {showSapIcon && (
        <div className="skill-icon">
          <SapIcon className="w-5 h-5" />
          <p>SAP</p>
        </div>
      )}
      {showJupyterIcon && (
        <div className="skill-icon">
          <JupyterIcon className="w-5 h-5" />
          <p>Jupyter NB</p>
        </div>
      )}
      {showGitIcon && (
        <div className="skill-icon">
          <GitIcon className="w-5 h-5" />
          <p>Git</p>
        </div>
      )}
      {showGithubIcon && (
        <div className="skill-icon">
          <GithubIcon className="w-5 h-5 fill-black dark:fill-white" />
          <p>Github</p>
        </div>
      )}
      {showVsCodeIcon && (
        <div className="skill-icon">
          <VsCodeIcon className="w-5 h-5" />
          <p>VS Code</p>
        </div>
      )}
      {showPowerBIIcon && (
        <div className="skill-icon">
          <PowerBiIcon className="w-5 h-5" />
          <p>Power BI</p>
        </div>
      )}
      {showLinuxIcon && (
        <div className="skill-icon">
          <img src={linuxIcon.src} alt="linux-icon" />
          <p>Linux</p>
        </div>
      )}
      {showPostgreSQLIcon && (
        <div className="skill-icon">
          <PostgreSqlICon className="w-5 h-5" />
          <p>PostgreSQL</p>
        </div>
      )}
      {showMySQLIcon && (
        <div className="skill-icon">
          <MySqlIcon className="w-5 h-5" />
          <p>MySQL</p>
        </div>
      )}
      {showNodeJSIcon && (
        <div className="skill-icon">
          <img src={nodejsIcon.src} alt="nodejs-icon" />
          <p>Node.js</p>
        </div>
      )}
      {showExpressJSIcon && (
        <div className="skill-icon">
          <ExpressJsIcon className="w-5 h-5 fill-black dark:fill-white" />
          <p>Express.js</p>
        </div>
      )}
    </div>
  );
};

export default SkillsIcons;