//modal
const root = document.querySelector('.root')
const listAuthorEl = document.querySelector('.listAuthor')
const navMenuEl = document.querySelector('.navigation')

//view
const renderFormAuthor = () => {
    const html = `<form class="author">
    <input name="author"></input>
    <button type="submit" name="submitBtn">Відправити</button>
    </form>`
    root.innerHTML = html;
    root.childNodes[0].addEventListener('submit', (ev) => {
        ev.preventDefault()
        controlForm(ev)
    })
}
renderFormAuthor()

const renderArticle = (data) => {
    const html = `<form class="article">
        <input name="nameArticle"></input>
        <textarea name="textArticle"></textarea>
        <select name="textAuthor">
            ${data.map(item => `<option>${item.author}</option>`)}
        </select>
        <button type="submit" name="submitBtn">Відправити</button>
        </form>` 
    listAuthorEl.innerHTML = '';
    root.innerHTML = html;
    root.childNodes[0].addEventListener('submit', (ev) => {
        ev.preventDefault()
        const formData = new FormData(ev.target)
        const data = formData.get('nameArticle')
        const data1 = formData.get('textArticle')
        console.log(data, data1);
        controlForm(ev)
    })
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


//controler

const controlForm = (ev) => {
    if(ev.target.classList.contains('author')){
        writeAuthor(ev)
    }
    if (ev.target.classList.contains('article')) {
        writeArticle(ev)
    }
}

const controlMenu = (ev) => {
    if (ev.target.classList.contains('author')) {
        renderFormAuthor();
    }
    if (ev.target.classList.contains('article')) {
        renderFormArticle();
    }
    // if(ev.target.classList.contains('articlelist')){
    //     console.log('yes');
    //     loadArticle();
    // }
}

const renderFormArticle = async () => {
    const res = await loadAuthor();
    renderArticle(res)
}


//ajax

const writeAuthor = async (ev) => {
    const formData = new FormData(ev.target)
    const { data } = await axios.post('/createauthor', formData)
    renderListAuthor(data)
}

const loadAuthor = async () => {
    const { data } = await axios.post('/loadauthor')
    console.log(data)
    return data;
}

const writeArticle = async (ev) => {
        const formData = new FormData(ev.target)
        await axios.post('/createarticle', formData)
}

// const loadArticle = async () => {
//     const data = await axios.get('/loadarticle')
// }

