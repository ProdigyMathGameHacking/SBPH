// IDK IF IT WORKS OR NOT

(function () {
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    async function customChat(text) {
        Boot.prototype.game._state._current.user.source.chatID=0;
        await sleep(100);
        Boot.prototype.game._state._current.user.chatText.setText(text);
    }
    
    customChat("Niger");
})();
