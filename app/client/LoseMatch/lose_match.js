// State: The player has lost the match.
var lose_match = function(game) {};

var loseResultText, playAgainButton, quitButton;

lose_match.prototype = {
    preload: () => {
        game.load.image('playAgain', 'assets/PlayAgainButton.png');
        game.load.image('quit', 'assets/QuitButton.png');
    },

    create: () => {
        loseResultText = game.add.text(game.world.centerX, game.world.height * 0.2, "You Lost!", instructionsStyle);
        loseResultText.anchor.set(0.5, 0.5);

        playAgainButton = game.add.button(game.world.centerX, 
                                          game.world.height * 0.4, 
                                          'playAgain',
                                          () => {
                                             playAgainButton.tint = 0.1 * 0xffffff;
                                             game.state.start("GameMatch");
                                          }, this);
        playAgainButton.tint = 0.5 * 0xffffff;
        playAgainButton.anchor.set(0.5, 0.5);

        playAgainButton.onInputOver.add(() => {
            playAgainButton.tint = 0.8 * 0xffffff;
        }, this);

        playAgainButton.onInputOut.add(() => {
            playAgainButton.tint = 0.5 * 0xffffff;
        }, this);

        quitButton = game.add.button(game.world.centerX, 
                                     game.world.height * 0.6, 
                                     'quit',
                                     () => {
                                        quitButton.tint = 0.1 * 0xffffff;
                                        client.quit();
                                     }, this);
        quitButton.tint = 0.5 * 0xffffff;
        quitButton.anchor.set(0.5, 0.5);

        quitButton.onInputOver.add(() => {
            quitButton.tint = 0.8 * 0xffffff;
        }, this);

        quitButton.onInputOut.add(() => {
            quitButton.tint = 0.5 * 0xffffff;
        }, this);
    }
};