
import reactIcon from '../../assets/svg/react.svg';
import tailwindIcon from '../../assets/svg/tailwindcss.svg';
import javascriptIcon from '../../assets/svg/javascript.svg';
import htmlIcon from '../../assets/svg/html5.svg';
import cssIcon from '../../assets/svg/css_old.svg';
import viteIcon from '../../assets/svg/vitejs.svg';

const TechIcons = ({ showReactIcon, showViteIcon, showTailwindIcon, showJSIcon, showHTMLIcon, showCSSIcon }) => {
  return (
    <div className="flex flex-wrap gap-1 items-center justify-center w-full cursor-pointer">
      {showReactIcon && (
        <div className='flex flex-row items-center justify-center px-1 py-[2px] m-0 border border-[#00D8FF] rounded-lg transition-transform duration-300 hover:scale-110 '>
          <img className='w-2 h-2' src={reactIcon.src} alt='react-icon' />
          <p className='text-[10px] px-1 '>React</p>
        </div>
      )}
      {showViteIcon && (
        <div className='flex flex-row items-center justify-center px-1 py-[2px] m-0 border border-[#BD34FE] rounded-lg transition-transform duration-300 hover:scale-110 '>
          <img className='w-2 h-2' src={viteIcon.src} alt='vite-icon' />
          <p className='text-[10px] px-1 '>Vite.js</p>
        </div>
      )}
      {showTailwindIcon && (
        <div className='flex flex-row items-center justify-center px-1 py-[2px] m-0 border border-[#0ED7B5] rounded-lg transition-transform duration-300 hover:scale-110 '>
          <img className='w-2 h-2' src={tailwindIcon.src} alt='tailwind-icon' />
          <p className='text-[10px] px-1 '>TailwindCSS</p>
        </div>
      )}
      {showJSIcon && (
        <div className='flex flex-row items-center justify-center px-1 py-[2px] m-0 border border-[#f0db4f] rounded-lg transition-transform duration-300 hover:scale-110 '>
          <img className='w-2 h-2' src={javascriptIcon.src} alt='javascript-icon' />
          <p className='text-[10px] px-1 '>Javascript</p>
        </div>
      )}
      {showHTMLIcon && (
        <div className='flex flex-row items-center justify-center px-1 py-[2px] m-0 border border-[#e34f26] rounded-lg transition-transform duration-300 hover:scale-110 '>
          <img className='w-2 h-2' src={htmlIcon.src} alt='html5-icon' />
          <p className='text-[10px] px-1 '>HTML</p>
        </div>
      )}
      {showCSSIcon && (
        <div className='flex flex-row items-center justify-center px-1 py-[2px] m-0 border border-[#2965f1] rounded-lg transition-transform duration-300 hover:scale-110 '>
          <img className='w-2 h-2' src={cssIcon.src} alt='css-icon' />
          <p className='text-[10px] px-1 '>CSS</p>
        </div>
      )}
    </div>
  );
};

export default TechIcons;