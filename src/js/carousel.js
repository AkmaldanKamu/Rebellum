function scrollToCard(cardNumber) {
    console.log(`tombol ${cardNumber} diklik`);
    const card = document.getElementById(`card-${cardNumber}`);
    const container = document.querySelector('.container');
    const cardWidth = card.offsetWidth;
    const containerWidth = container.offsetWidth;
    const scrollOffset = (cardWidth - containerWidth) / 2;
    
    card.scrollIntoView({ behavior: 'smooth', inline: 'center'});
}