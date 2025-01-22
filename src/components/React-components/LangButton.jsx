import "../../styles/LangButton.css"
import { LanguageIcon } from '../../icons';

const LangButton = () => {
    return ( 
        <div class="button-container flex justify-center items-center gap-1">
            <LanguageIcon class="w-4 h-4 text-black dark:text-white transition-transform duration-300 hover:scale-110 cursor-pointer"/>
            <p className="text-sm">:</p>
            <input type="checkbox" id="lang-checkbox" class="lang-checkbox"/>
            <label for="lang-checkbox" id="language-switcher" class="language-button"></label>
        </div>
    )
}
export default LangButton