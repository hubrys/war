function Deck(cards) {
    if (!value) {
        this._cards = [];
        for (var index = 0; index < 52; index++) {
            this._cards.push(new Card(index));
        }
    } else {
        this._cards = cards;
    }

    this.cardCount = function () {
        return this._cards.length;
    };

    this.popCards = function (count) {
        return this._cards.splice(count);
    };

    this.popCard = function () {
        return this._cards.pop();
    };

    this.pushCard = function (card) {
        this._cards.push(card);
    };

    this.pushCards = function (cards) {
        this._cards = this._cards.concat(cards);
    };

    this.split = function (count) {
        return new Deck(this.takeCards(count));
    };

    this.shuffle = function () {
        // Implemented using the Fisher–Yates Shuffle Algorithm
        for (var i = this._cards.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = this._cards[i];
            this._cards[i] = this._cards[j];
            this._cards[j] = temp;
        }
        return this._cards;
    }
}