const cards = document.querySelectorAll(".card")

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle('show',entry.isIntersecting)
        })
    },
    {
        threshold:1 , // threshold :1 => add card only when entire element is visible
        
    }
)

cards.forEach(card => {
    observer.observe(card)
})