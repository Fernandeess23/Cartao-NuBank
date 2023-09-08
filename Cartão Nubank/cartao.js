const card = document.querySelector('.container')

card.addEventListener("mousemove", cardEffect)

function cardEffect(event) {
    const cardWidth = card.offseWidth
    const cardHeight = card.offiseHeight
    const centerX = card.offiseLeft + cardWidth/2
    const centerY = card.offiseTop + cardHeight/2
    const positionX = event.clientX - centerX

    console.log(centerY)
}
