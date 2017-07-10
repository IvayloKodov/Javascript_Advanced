function makeCard(face, suite) {
    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let suites = ['S', 'H', 'D', 'C'];

    let suitToChar = {
        'S': "\u2660", // ♠
        'H': "\u2665", // ♥
        'D': "\u2666", // ♦
        'C': "\u2663", // ♣
    };

    if (!faces.includes(face) || !suites.includes(suite)) {
        throw new Error("Error");
    }

    let card = {
        face,
        suite,
        toString: () => {
            return `${card.face}${suitToChar[suite]}`
        }
    };

    return card;
}


console.log('' + makeCard('A', 'S'));
console.log('' + makeCard('10', 'H'));
console.log('' + makeCard('1', 'C'));