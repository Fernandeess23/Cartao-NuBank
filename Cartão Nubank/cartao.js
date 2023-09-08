const card = document.querySelector('.container')

card.addEventListener("mousemove", cardEffect)

function cardEffect(event) {
    const cardWidth = card.offsetWidth
    const cardHeight = card.offsetHeight
    const centerX = card.offsetLeft + cardWidth/2
    const centerY = card.offsetTop + cardHeight/2
    const positionX = event.clientX - centerX
    const positionY = event.clientY - centerY

    console.log(positionX,positionY)
}
