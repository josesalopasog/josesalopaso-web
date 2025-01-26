import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid';
import { GithubIcon } from '../../icons';

import '../../styles/SourceButtons.css'

const SourceButtons = ({ WebURL, GitURL }) => {
    return (
        <div className="source-buttons-container">
            <a href={WebURL} className="source-button-container" target='_blank'>
                <ArrowTopRightOnSquareIcon className='source-button' />
                <p className='source-text'>Web</p>
            </a>
            <a href={GitURL} className="source-button-container" target='_blank'>
                <GithubIcon className='source-button' />
                <p className='source-text'data-lang="codeButton" >Code</p>
            </a>
        </div>
    )
}

export default SourceButtons;