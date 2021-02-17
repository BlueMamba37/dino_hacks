function flash_dino(acceleration, max_speed, permanent_night_mode = true,score_sound=false) {
    //sets higher score
    Runner().saveHighScore(999999950);

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
    //Runner.prototype.onKeyUp = function(){};
}

flash_dino(200,450);
