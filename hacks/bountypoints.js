function setBountyPoints (amt) {

    /** player variable */
    const player = Boot.prototype.game._state._current.user.source;

    /** amount of bounty points to get */
    const amount = amt;

    if (amount === undefined) return;
    
    return player.data.bountyScore = Math.min(+amount, 100);
}

// TODO implement swal later.
setBountyPoints(100);