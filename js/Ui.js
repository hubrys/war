function Ui() {
    this.deck1 = document.getElementById("deck_1");
    this.deck2 = document.getElementById("deck_2");
    this.stack1 = document.getElementById("stack_1");
    this.stack2 = document.getElementById("stack_2");
    this.message = document.getElementById("message");

    this.render = function (gameState, cb) {
        this.message.innerHTML = gameState.state;

        this.showDeck("deck_1", gameState.deck1.cards);
        this.showDeck("deck_2", gameState.deck2.cards);

        this.showStack("stack_1", gameState.stack1);
        this.showStack("stack_2", gameState.stack2);

        switch (gameState.state) {
            case "idle":
            case "cardsToOne":
            case "cardsToTwo":
                break;

            case "faceOff":
                break;

            case "war":
                break;
        }

        setTimeout(cb, 2000);
    };

    this.showDeck = function (id, cards) {
        var deck = d3.select("#" + id)
            .selectAll("div")
            .data(cards);

        deck.enter()
            .append("div");

        deck.exit()
            .remove();

        deck.text(function (card) {
            return card.toString();
        });

    };

    this.showStack = function (id, cards) {
        var stack = d3.select("#" + id)
            .selectAll("div")
            .data(cards);

        stack.enter()
            .append("div");

        stack.exit()
            .remove();

        stack.text(function (card) {
                return card.toString();
            });
    };
}