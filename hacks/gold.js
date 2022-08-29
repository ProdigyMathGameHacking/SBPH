function getLevel (lvl) {

    /** player variable */
    const player = Boot.prototype.game._state._current.user.source;

    // TODO implement swal laterTM
    const level = lvl;

    if (level.value === undefined) return;

    // now we calculate how many stars the level *should* have
    // from 3-16-1.js:8382


    if (level.value === 1) return 0;

    const i = level.value - 2;

    // xpConstant from 3-16-1.js:8528

    const xpConstant = 1.042;
    player.data.stars = Math.round((1 - Math.pow(xpConstant, i)) / (1 - xpConstant) * 20 + 10);
    player.data.level = +level.value;
    player.getLevel = () => {
        return player.data.level;
    };

}

// TODO Implement swal later
getLevel(100);