function Game(ui) {
    this.gameState = new GameState();
    this.ui = ui;

    this.playGame = function () {
        this.gameState.restart();
        this.render();
    };

    this.advance = function () {
        this.gameState.tick();
        this.render();
    };

    this.render = function () {
        this.ui.render(this.gameState, function() {
            this.advance();
        }.bind(this));
    }
}