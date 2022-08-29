function setMemberStars (amt) {

    /** player variable */
    const player = Boot.prototype.game._state._current.user.source;

    /** amount of member stars to get */
    const amount = amt;

    if (amount === undefined) return;

    return player.data.storedMemberStars = amount;
}


// TODO implement swal later
setMemberStars(100000);