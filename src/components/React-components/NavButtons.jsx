import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid';
import githubIcon from '../../assets/svg/github-dark.svg';


const NavButtons = ({ WebURL, GitURL }) => {
    return (
        <div className="flex flex-row items-center justify-center w-full gap-1">
            <h3 className='text-[12px] '>Visit on:</h3>
            <a href={WebURL} className="flex flex-row gap-1 p-1 rounded-md transition-transform duration-300 hover:scale-110" target='_blank'>
                <ArrowTopRightOnSquareIcon className='w-3 h-3' />
                <p className='text-[12px]'>Web</p>
            </a>
            <a href={GitURL} className="flex flex-row gap-1 p-1 rounded-md transition-transform duration-300 hover:scale-110" target='_blank'>
                <img src={githubIcon.src} alt='github icon' className='w-3 h-3' />
                <p className='text-[12px]'>GitHub</p>
            </a>
        </div>
    )
}

export default NavButtons;