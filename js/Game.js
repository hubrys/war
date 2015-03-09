function Game(ui) {
    this.gameState = new GameState();
    this.ui = ui;

    var self = this;
    new Input({
        onBetPlaced: function (player) {
            console.log("clicked");
            self.gameState.favoredPlayer = player === 1 ? "Player 1" : "Player 2";
            self.playGame();
        }
    });

    this.start = function () {
        this.ui.render(this.gameState);
    };

    this.playGame = function () {
        this.gameState.restart();
        this.render();
    };

    this.advance = function () {
        this.gameState.tick();
        this.render();
    };

    this.render = function () {
        this.ui.render(this.gameState, function () {
            this.advance();
        }.bind(this));
    }
}