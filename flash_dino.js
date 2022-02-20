function flash_dino(acceleration = 120, max_speed = 450, permanent_night_mode = true, score_sound=false) {
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

    //keep dino's head down
    Runner.prototype.onKeyUp = function(){};
}

flash_dino();
