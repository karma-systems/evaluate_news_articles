import { urlChecker } from './js/checkURL'
import { handleSubmit } from './js/handleSubmit'

// sass files
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

const button = document.querySelector(".btn-submit");
button.addEventListener("click", handleSubmit);

export {
    urlChecker,
    handleSubmit
}
