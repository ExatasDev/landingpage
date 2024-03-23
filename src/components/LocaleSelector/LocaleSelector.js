import { useGlobal } from '../../context/GlobalContext'
import './LocaleSelector.css'

const LocaleSelector = () => {
    const {localeAvailable, locale, setLocale} = useGlobal()

    const handleSelectChange = (e) => {
        setLocale(e.target.value)
    }

    return (
        <div class="language-selector__container">
                <select class="language-selector__select" onChange={handleSelectChange}>
                    {localeAvailable.map((e) => (
                        <option value={e} selected={locale == e}>{e}</option>
                    ))}
                </select>
        </div>
    )
}

export default LocaleSelector