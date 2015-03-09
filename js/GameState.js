function GameState() {
    this.deck1 = null;
    this.deck2 = null;
    this.stack1 = [];
    this.stack2 = [];
    this.state = "idle";
    this.favoredPlayer = 0;

    this.restart = function () {
        this.deck1 = new Deck();
        this.deck1.shuffle();
        this.deck2 = this.deck1.split(26); // split deck in half
        this.stack1 = [];
        this.stack2 = [];
        this.state = "running";
    };

    this.tick = function () {
        switch (this.state) {
            case "running":
            case "cardsToOne":
            case "cardsToTwo":
                if (this.deck1.cardCount() === 0) {
                    this.state = "winTwo";
                } else if (this.deck2.cardCount() === 0) {
                    this.state = "winOne";
                } else {
                    this.stack1.push(this.deck1.popCard());
                    this.stack2.push(this.deck2.popCard());
                    this.state = "faceOff";
                }
                break;
            case "faceOff":
                var result = this.stack1.slice(-1)[0].getFace() - this.stack2.slice(-1)[0].getFace();
                if (result < 0) {
                    this.deck2.pushCards(this.stack1);
                    this.deck2.pushCards(this.stack2);
                    this.stack1 = [];
                    this.stack2 = [];
                    this.state = "cardsToTwo";
                } else if (result > 0) {
                    this.deck1.pushCards(this.stack2);
                    this.deck1.pushCards(this.stack1);
                    this.stack1 = [];
                    this.stack2 = [];
                    this.state = "cardsToOne";
                } else {
                    this.state = "war";
                }
                break;
            case "war":
                if (this.deck1.cardCount() < 4) {
                    this.state = "winTwo";
                } else if (this.deck2.cardCount() < 4) {
                    this.state = "winOne";
                } else {
                    this.stack1 = this.stack1.concat(this.deck1.popCards(4));
                    this.stack2 = this.stack2.concat(this.deck2.popCards(4));
                    this.state = "faceOff";
                }
                break;
        }
    };
}