// Tired of jumping cactuses?

org_gameOver = Runner.prototype.gameOver

function flash_dino() {
    Runner.prototype.gameOver = function(){}
    Runner.prototype.onKeyUp = function(){}
    Runner.config.ACCELERATION = 50
    Runner.config.MAX_SPEED = 100
    Runner().soundFx.SCORE = ''
}