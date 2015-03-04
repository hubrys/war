function Card(value) {
    this._rawValue = value;

    this.getSuit = function () {
        return this._rawValue / 12;
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
        return this._rawValue % 12;
    };

    this.getFaceStr = function () {
        var face = this.getFace();
        if (face === 0) {
            return "ace";
        }

        if (face < 9) {
            return "" + (face + 1);
        }

        switch (face) {
            case 9:
                return "jack";
            case 10:
                return "queen";
            case 11:
                return "king";
        }
    }
}