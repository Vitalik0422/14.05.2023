const root = document.querySelector('.root')
const nextBtn = document.querySelector('.nextBtn')
const prevBtn = document.querySelector('.prevBtn')

const loadArticle = async (index) => {
    const { data }   = await axios.post('/loadArticle',)
    if(data != null){
        renderArticle(data)
    }else{ 
        root.innerHTML = 'Пусто'
    }
}
loadArticle()

nextBtn.addEventListener('click', async ()=>{
    const {data} = await axios.post('/next')
    renderArticle(data)
})
prevBtn.addEventListener('click', async ()=>{
    const {data} = await axios.post('/prev');
    renderArticle(data)

})

const renderArticle = (data) => {
    root.innerHTML =`<div class="authorArticle">${data.textAuthor}</div><div class="nameArticle"r>${data.nameArticle}</div><div class="textArticle">${data.textArticle}</div>`
}