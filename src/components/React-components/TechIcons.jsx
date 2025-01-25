import { ReactIcon, TailwindCssIcon, JavascriptIcon, Html5Icon, CssIcon, ViteJsIcon } from '../../icons';

import '../../styles/TechIcons.css';

const TechIcons = ({ showReactIcon, showViteIcon, showTailwindIcon, showJSIcon, showHTMLIcon, showCSSIcon }) => {
  return (
    <div className="flex flex-wrap gap-1 items-center justify-center w-full cursor-pointer">
      {showReactIcon && (
        <div className='tech-icon border border-[#00D8FF]'>
          <ReactIcon className='w-[12px] h-[12px]' />
          <p>React</p>
        </div>
      )}
      {showViteIcon && (
        <div className='tech-icon border border-[#BD34FE]'>
          <ViteJsIcon className='w-[12px] h-[12px]' />
          <p>Vite.js</p>
        </div>
      )}
      {showTailwindIcon && (
        <div className='tech-icon border border-[#0ED7B5]'>
          <TailwindCssIcon className='w-[12px] h-[12px]'/>
          <p>TailwindCSS</p>
        </div>
      )}
      {showJSIcon && (
        <div className='tech-icon border border-[#f0db4f]'>
          <JavascriptIcon className='w-[12px] h-[12px]'/>
          <p>Javascript</p>
        </div>
      )}
      {showHTMLIcon && (
        <div className='tech-icon border border-[#e34f26]'>
          <Html5Icon className='w-[12px] h-[12px]'/>
          <p>HTML</p>
        </div>
      )}
      {showCSSIcon && (
        <div className='tech-icon border border-[#2965f1]'>
          <CssIcon className='w-[12px] h-[12px]'/>
          <p>CSS</p>
        </div>
      )}
    </div>
  );
};

export default TechIcons;