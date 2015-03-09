function Deck(cards) {
    if (!cards) {
        this.cards = [];
        for (var index = 0; index < 52; index++) {
            this.cards.push(new Card(index));
        }
    } else {
        this.cards = cards;
    }

    this.cardCount = function () {
        return this.cards.length;
    };

    this.popCards = function (count) {
        return this.cards.splice(0, count);
    };

    this.popCard = function () {
        return this.cards.shift();
    };

    this.pushCard = function (card) {
        this.cards.push(card);
    };

    this.pushCards = function (cards) {
        this.cards = this.cards.concat(cards);
    };

    this.split = function (count) {
        return new Deck(this.popCards(count));
    };

    this.shuffle = function () {
        // Implemented using the Fisher–Yates Shuffle Algorithm
        for (var i = this.cards.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = temp;
        }
        return this.cards;
    }
}