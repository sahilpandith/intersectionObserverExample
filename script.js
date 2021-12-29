const cards = document.querySelectorAll(".card")

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle('show',entry.isIntersecting)
            // if(entry.isIntersecting) observer.unobserve(entry.target)
        })
    },
    {
        threshold:1 , // threshold :1 => add card only when entire element is visible
        
    }
)

cards.forEach(card => {
    observer.observe(card)
})

//lazy loading (adding new cards)
// const lastCard = document.querySelector(".card:last-child")
const lastCard = document.querySelectorAll(".card")[document.querySelectorAll(".card").length-1]

const lastCardObserver = new IntersectionObserver((entries) =>{
    const lastCard = entries[0]
    if(!lastCard.isIntersecting) return
    loadNewCards()
    lastCardObserver.unobserve(lastCard.target)
    // lastCardObserver.observe(document.querySelector(".card:last-child"))
    lastCardObserver.observe(document.querySelectorAll(".card")[document.querySelectorAll(".card").length-1])
} ,
{
    rootMargin:"100px"
})
lastCardObserver.observe(lastCard)

const cardContainer = document.querySelector('.card-container')
function loadNewCards(){
    
    for(let i=0;i<10;i++){
        const card = document.createElement('div')
        card.textContent = "New Card"
        card.classList.add("card")
        observer.observe(card)
        cardContainer.append(card)
    }
}