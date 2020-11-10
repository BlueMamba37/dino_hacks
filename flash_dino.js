//Runner.prototype.gameOver = org_gameOver
//if you're trying to get killed by cactuses and birds
org_gameOver = Runner.prototype.gameOver;

function flash_dino(acceleration, max_speed, permanent_night_mode = true,score_sound=false) {
    //immortality
    Runner.prototype.gameOver = function(){};

    Runner.config.ACCELERATION = acceleration;
    Runner.config.MAX_SPEED = max_speed;

    if (score_sound == false) {
        Runner().soundFx.SCORE = "";
    }

    if (permanent_night_mode == true){
        Runner.prototype.invert = function(){};
    }

    //easter-egg (press key down)
    Runner.prototype.onKeyUp = function(){};
}