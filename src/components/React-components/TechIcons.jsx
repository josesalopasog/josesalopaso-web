import { ReactIcon, TailwindCssIcon, JavascriptIcon, Html5Icon, CssIcon, ViteJsIcon } from '../../icons';

import '../../styles/TechIcons.css';

const TechIcons = ({ showReactIcon, showViteIcon, showTailwindIcon, showJSIcon, showHTMLIcon, showCSSIcon }) => {
  return (
    <div className="flex flex-wrap gap-1 items-center justify-center w-full cursor-pointer">
      {showReactIcon && (
        <div className='tech border border-[#00D8FF]'>
          <ReactIcon className='tech-icon' />
          <p>React</p>
        </div>
      )}
      {showViteIcon && (
        <div className='tech border border-[#BD34FE]'>
          <ViteJsIcon className='tech-icon' />
          <p>Vite.js</p>
        </div>
      )}
      {showTailwindIcon && (
        <div className='tech border border-[#0ED7B5]'>
          <TailwindCssIcon className='tech-icon'/>
          <p>TailwindCSS</p>
        </div>
      )}
      {showJSIcon && (
        <div className='tech border border-[#f0db4f]'>
          <JavascriptIcon className='tech-icon'/>
          <p>Javascript</p>
        </div>
      )}
      {showHTMLIcon && (
        <div className='tech border border-[#e34f26]'>
          <Html5Icon className='tech-icon'/>
          <p>HTML</p>
        </div>
      )}
      {showCSSIcon && (
        <div className='tech border border-[#2965f1]'>
          <CssIcon className='tech-icon'/>
          <p>CSS</p>
        </div>
      )}
    </div>
  );
};

export default TechIcons;