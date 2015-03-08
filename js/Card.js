function Card(value) {
    this._rawValue = value;

    this.getSuit = function () {
        return Math.floor(this._rawValue / 13);
    };

    this.getSuitStr = function () {
        switch (this.getSuit()) {
            case 0:
                return "hearts";
            case 1:
                return "clubs";
            case 2:
                return "diamonds";
            case 3:
                return "spades";
        }
        return null;
    };

    this.getFace = function () {
        return this._rawValue % 13;
    };

    this.getFaceStr = function () {
        var face = this.getFace();
        if (face === 0) {
            return "ace";
        }

        if (face < 10) {
            return "" + (face + 1);
        }

        switch (face) {
            case 10:
                return "jack";
            case 11:
                return "queen";
            case 12:
                return "king";
        }
    }

    this.toString = function () {
        return this.getFaceStr() + " of " + this.getSuitStr();
    }
}