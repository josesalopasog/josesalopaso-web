
import reactIcon from '../../assets/svg/react.svg';
import tailwindIcon from '../../assets/svg/tailwindcss.svg';
import javascriptIcon from '../../assets/svg/javascript.svg';
import htmlIcon from '../../assets/svg/html5.svg';
import cssIcon from '../../assets/svg/css_old.svg';
import viteIcon from '../../assets/svg/vitejs.svg';

import '../../styles/TechIcons.css';

const TechIcons = ({ showReactIcon, showViteIcon, showTailwindIcon, showJSIcon, showHTMLIcon, showCSSIcon }) => {
  return (
    <div className="flex flex-wrap gap-1 items-center justify-center w-full cursor-pointer">
      {showReactIcon && (
        <div className='tech-icon border border-[#00D8FF]'>
          <img src={reactIcon.src} alt='react-icon' />
          <p>React</p>
        </div>
      )}
      {showViteIcon && (
        <div className='tech-icon border border-[#BD34FE]'>
          <img src={viteIcon.src} alt='vite-icon' />
          <p>Vite.js</p>
        </div>
      )}
      {showTailwindIcon && (
        <div className='tech-icon border border-[#0ED7B5]'>
          <img src={tailwindIcon.src} alt='tailwind-icon' />
          <p>TailwindCSS</p>
        </div>
      )}
      {showJSIcon && (
        <div className='tech-icon border border-[#f0db4f]'>
          <img src={javascriptIcon.src} alt='javascript-icon' />
          <p>Javascript</p>
        </div>
      )}
      {showHTMLIcon && (
        <div className='tech-icon border border-[#e34f26]'>
          <img src={htmlIcon.src} alt='html5-icon' />
          <p>HTML</p>
        </div>
      )}
      {showCSSIcon && (
        <div className='tech-icon border border-[#2965f1]'>
          <img src={cssIcon.src} alt='css-icon' />
          <p>CSS</p>
        </div>
      )}
    </div>
  );
};

export default TechIcons;