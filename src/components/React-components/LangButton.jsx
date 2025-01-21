import "../../styles/LangButton.css"
import { LanguageIcon } from "@heroicons/react/16/solid"

const LangButton = () => {
    return ( 
        <div class="button-container w-full flex justify-center items-center gap-1">
            <LanguageIcon class="w-4"/>
            <p className="text-sm">:</p>
            <input type="checkbox" id="lang-checkbox" class="lang-checkbox"/>
            <label for="lang-checkbox" id="language-switcher" class="language-button"></label>
        </div>
    )
}
export default LangButton