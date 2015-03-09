function Input(cb) {
    document.getElementById("player_1").onclick = function () {
        cb.onBetPlaced(1);
    };

    document.getElementById("player_2").onclick = function () {
        cb.onBetPlaced(2);
    }
}