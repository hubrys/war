function Card(value) {
    this._rawValue = value;

    this.getSuit = function () {
        return Math.floor(this._rawValue / 13);
    };

    this.getSuitStr = function () {
        switch (this.getSuit()) {
            case 0:
                return "\u2665";
            case 1:
                return "\u2663";
            case 2:
                return "\u2666";
            case 3:
                return "\u2660";
        }
        return null;
    };

    this.getFace = function () {
        return this._rawValue % 13;
    };

    this.getFaceStr = function () {
        var face = this.getFace();
        if (face < 9) {
            return "" + (face + 2);
        }

        switch (face) {
            case 9:
                return "J";
            case 10:
                return "Q";
            case 11:
                return "K";
            case 12:
                return "A";
        }
    };

    this.toString = function () {
        return this.getFaceStr() + "<br/>" + this.getSuitStr();
    };
}