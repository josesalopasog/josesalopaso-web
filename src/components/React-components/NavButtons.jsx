import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid';
import { GithubIcon } from '../../icons';


const NavButtons = ({ WebURL, GitURL }) => {
    return (
        <div className="flex flex-row items-center justify-center w-full gap-3 my-1">
            <a href={WebURL} className="flex flex-row gap-1 p-1 rounded-md transition-transform duration-300 hover:scale-110" target='_blank'>
                <ArrowTopRightOnSquareIcon className='w-4 h-4 text-black dark:text-white' />
                <p className='text-[16px]'>Web</p>
            </a>
            <a href={GitURL} className="flex flex-row gap-1 p-1 rounded-md transition-transform duration-300 hover:scale-110" target='_blank'>
                <GithubIcon className='w-4 h-4 text-black dark:text-white' />
                <p className='text-[16px]'data-lang="codeButton" >Code</p>
            </a>
        </div>
    )
}

export default NavButtons;