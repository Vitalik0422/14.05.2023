//modal
const root = document.querySelector('.root')
const listAuthorEl = document.querySelector('.listAuthor')
const navMenuEl = document.querySelector('.navigation')

//view
const renderFormAuthor = () => {
    const html = `<form>
    <input name="author"></input>
    <button type="submit" name="submitBtn">Відправити</button>
    </form>`
    root.innerHTML = html;
}
renderFormAuthor()

const renderArticle = (data) => {
    const html = `<form class="article">
    <input placeholder="Назва статі">
        <textarea placeholder="Текст статі"></textarea>
        <select>
            ${data.map(list => `<option>${list.author}</option>`)}
        </select>
    </form>`
    listAuthorEl.innerHTML = ``;
    root.innerHTML = html;
}

renderListAuthor = (data) => {
    console.log(data);
    const html = `<ul>
                    ${data.map(list => `<li>${list.author}</li>`)}
                 </ul>`
    listAuthorEl.innerHTML = html;
}

navMenuEl.addEventListener('click', (ev) => {
    controlMenu(ev)
})

root.childNodes[0].addEventListener('submit', (ev) => {
    ev.preventDefault()
    writeAuthor(ev)
})


//controler
const writeAuthor = async (ev) => {
    const formData = new FormData(ev.target)
    const { data } = await axios.post('/createAuthor', formData)
    renderListAuthor(data)
}

const loadAuthor = async () => {
    const {data} = await axios.post('/loadAuthor')
    console.log(data)
    return data;
}

const controlMenu = (ev) => {
    if (ev.target.classList.contains('author')) {
        renderFormAuthor();
    }
    if (ev.target.classList.contains('article')) {
        renderFormArticle()
    }
}

const renderFormArticle = async () => {
    const res = await loadAuthor();
    renderArticle(res)
}