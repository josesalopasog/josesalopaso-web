import PropTypes from 'prop-types';

import reactIcon from '../../assets/svg/react.svg';
import tailwindIcon from '../../assets/svg/tailwindcss.svg';
import javascriptIcon from '../../assets/svg/javascript.svg';
import htmlIcon from '../../assets/svg/html5.svg';
import cssIcon from '../../assets/svg/css_old.svg';
import viteIcon from '../../assets/svg/vitejs.svg';
import pythonIcon from '../../assets/svg/python.svg';
import excelIcon from '../../assets/svg/excel.svg';
import sapIcon from '../../assets/svg/sap.svg';
import jupyterIcon from '../../assets/svg/jupyter.svg';
import gitIcon from '../../assets/svg/git.svg';
import githubIcon from '../../assets/svg/github-dark.svg';
import astroIcon from '../../assets/svg/astro_dark.svg';
import powerBIIcon from '../../assets/svg/power-bi.svg';
import linuxIcon from '../../assets/svg/linux.svg';
import vscodeIcon from '../../assets/svg/vscode.svg';
import postgresqlIcon from '../../assets/svg/postgresql.svg';
import mysqlIcon from '../../assets/svg/mysql.svg';
import nodejsIcon from '../../assets/svg/nodejs.svg';
import expressjsIcon from '../../assets/svg/expressjs_dark.svg';

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
          <img src={reactIcon.src} alt="react-icon" />
          <p>React</p>
        </div>
      )}
      {showViteIcon && (
        <div className="skill-icon">
          <img src={viteIcon.src} alt="vite-icon" />
          <p>Vite.js</p>
        </div>
      )}
      {showAstroIcon && (
        <div className="skill-icon">
          <img src={astroIcon.src} alt="astro-icon" />
          <p>Astro</p>
        </div>
      )}      
      {showTailwindIcon && (
        <div className="skill-icon">
          <img src={tailwindIcon.src} alt="tailwind-icon" />
          <p>TailwindCSS</p>
        </div>
      )}
      {showJSIcon && (
        <div className="skill-icon">
          <img src={javascriptIcon.src} alt="javascript-icon" />
          <p>Javascript</p>
        </div>
      )}
      {showHTMLIcon && (
        <div className="skill-icon">
          <img src={htmlIcon.src} alt="html5-icon" />
          <p>HTML</p>
        </div>
      )}
      {showCSSIcon && (
        <div className="skill-icon">
          <img src={cssIcon.src} alt="css-icon" />
          <p>CSS</p>
        </div>
      )}
      {showPythonIcon && (
        <div className="skill-icon">
          <img src={pythonIcon.src} alt="python-icon" />
          <p>Python</p>
        </div>
      )}
      {showExcelIcon && (
        <div className="skill-icon">
          <img src={excelIcon.src} alt="excel-icon" />
          <p>Excel</p>
        </div>
      )}
      {showSapIcon && (
        <div className="skill-icon">
          <img src={sapIcon.src} alt="sap-icon" />
          <p>SAP</p>
        </div>
      )}
      {showJupyterIcon && (
        <div className="skill-icon">
          <img src={jupyterIcon.src} alt="jupyter-icon" />
          <p>Jupyter NB</p>
        </div>
      )}
      {showGitIcon && (
        <div className="skill-icon">
          <img src={gitIcon.src} alt="git-icon" />
          <p>Git</p>
        </div>
      )}
      {showGithubIcon && (
        <div className="skill-icon">
          <img src={githubIcon.src} alt="github-icon" />
          <p>Github</p>
        </div>
      )}
      {showVsCodeIcon && (
        <div className="skill-icon">
          <img src={vscodeIcon.src} alt="vscode-icon" />
          <p>VS Code</p>
        </div>
      )}
      {showPowerBIIcon && (
        <div className="skill-icon">
          <img src={powerBIIcon.src} alt="powerbi-icon" />
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
          <img src={postgresqlIcon.src} alt="postgresql-icon" />
          <p>PostgreSQL</p>
        </div>
      )}
      {showMySQLIcon && (
        <div className="skill-icon">
          <img src={mysqlIcon.src} alt="mysql-icon" />
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
          <img src={expressjsIcon.src} alt="expressjs-icon" />
          <p>Express.js</p>
        </div>
      )}
    </div>
  );
};

export default SkillsIcons;