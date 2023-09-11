const card = document.querySelector('.container')

card.addEventListener("mousemove", cardEffect)

function cardEffect(event) {
    const cardWidth = card.offsetWidth
    const cardHeight = card.offsetHeight
    const centerX = card.offsetLeft + cardWidth/2
    const centerY = card.offsetTop + cardHeight/2
    const positionX = event.clientX - centerX
    const positionY = event.clientY - centerY

    const rotateX = ((+1) * 25*positionY/(cardHeight/2)).toFixed(2) // esse toFixed(2) é para pegar apenas duas casa decimais
    const rotateY = ((-1) * 25*positionX/(cardWidth/2)).toFixed(2)

    console.log(rotateX,rotateY)

    card.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
}
