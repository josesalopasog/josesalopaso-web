import { LanguageIcon } from '../../icons';

import "../../styles/HeaderButtons.css";

const LangButton = () => {
    return ( 
        <div class="button-container flex justify-center items-center gap-2">
            <LanguageIcon class="w-[30px] h-[30px] text-black dark:text-white transition-transform duration-300 hover:scale-110 cursor-pointer"/>
            <p className="text-md">:</p>
            <input type="checkbox" id="lang-checkbox" class="lang-checkbox"/>
            <label for="lang-checkbox" id="language-switcher" class="language-button transition-transform duration-300 hover:scale-110"></label>
        </div>
    )
}
export default LangButton