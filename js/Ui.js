function Ui() {
    this.deck1 = document.getElementById("deck_1");
    this.deck2 = document.getElementById("deck_2");
    this.stack1 = document.getElementById("stack_1");
    this.stack2 = document.getElementById("stack_2");
    this.message = document.getElementById("message");
    this.upperMessage = document.getElementById("upper_message");
    this.lowerMessage = document.getElementById("lower_message");
    this.tickSpeed = document.getElementById("tick_speed");

    this.render = function (gameState, cb) {
        if (gameState.state === "idle" ||
            gameState.state === "winOne" ||
            gameState.state === "winTwo") {
            d3.select("#start_ui").style("display", "block");
            d3.select("#game_ui").style("display", "none");

            if (gameState.state === "idle") {
                this.upperMessage.innerHTML = "Who are you betting on?";
            } else if ((gameState.state == "winOne" && gameState.favoredPlayer == 1) ||
                (gameState.state == "winTwo" && gameState.favoredPlayer == 2)) {
                this.upperMessage.innerHTML = "Nice Job! " + gameState.favoredPlayer + " won!";
                this.lowerMessage.innerHTML = "Care to go again?"
            } else {
                this.upperMessage.innerHTML = "Tough Luck, " + gameState.favoredPlayer + " didn't win.";
                this.lowerMessage.innerHTML = "Have another go?";
            }
        } else {
            d3.select("#start_ui").style("display", "none");
            d3.select("#game_ui").style("display", "block");

            this.showDeck("deck_1", gameState.deck1.cards);
            this.showDeck("deck_2", gameState.deck2.cards);

            this.showStack("stack_1", gameState.stack1);
            this.showStack("stack_2", gameState.stack2);

            switch (gameState.state) {
                case "running":
                    this.message.innerHTML = "Let the games being";
                    break;

                case "cardsToOne":
                    this.message.innerHTML = "Player 2 won the faceoff";
                    break;

                case "cardsToTwo":
                    this.message.innerHTML = "Player 2 won the faceoff";
                    break;

                case "faceOff":
                    this.message.innerHTML = "Faceoff!"
                    break;

                case "war":
                    this.message.innerHTML = "War has broken out!";
                    break;
            }

            setTimeout(cb, this.tickSpeed.value * 25 + 50);
        }
    };

    this.showDeck = function (id, cards) {
        var deck = d3.select("#" + id)
            .selectAll("div")
            .data(cards);

        deck.enter()
            .append("div")
            .classed("card_face_down", true);

        deck.exit()
            .remove();


        deck.style("left", function (d, i) {
            return ((i % 4) * 3.2) + "rem";
        })
            .style("top", function (d, i) {
                return Math.floor(i / 4) + "rem";
            });
        //.style("z-index", function (d, i) {
        //    return i;
        //});
    };

    this.showStack = function (id, cards) {
        var offset = Math.min(13 / cards.length, 1);
        var stack = d3.select("#" + id)
            .selectAll("div")
            .data(cards);

        stack.enter()
            .append("div");

        stack.exit()
            .remove();

        stack.html(function (card) {
            return card.toString();
        })
            //.classed(function (d, i) {
            //    if (Math.floor())
            //    return {"card", true}
            //})
            .classed({
                "card": function (d, i) {
                    return Math.floor(i % 4) == 0
                },
                "card_face_down": function (d, i) {
                    return Math.floor(i % 4) !== 0;
                },
                "red": function (d) {
                    return Math.floor(d.getSuit() % 2) == 0;
                }
            })
            .style("top", function (d, i) {
                return (i * offset) + "rem";
            })
            .style("color", function (d) {
                return Math.floor(d.getSuit() % 2) == 0 ? "red" : "black";
            });
    };
}