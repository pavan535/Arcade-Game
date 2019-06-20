# Arcade-Game
- By developing this game I learned lot of things.
- I got a lot of experience when I was doing this project.
- I learned document object modelling and creating content using Javascript.
## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

## Steps to be followed to complete this Game

- I had followed the instructions given by **UDACITY** and cloned the SKELETON project from github.
- At first when I opened page there is blank page and an error in console panel _allEnemies[]_.
- Then after I created a class for actor and assigned  it to a variable.
- I initialized actor as a winner variable.
- Later I initialized the below functions for the Bug in order to run the game:
      - `render()`
      - `update()`
      - `handleInput()`
- `render()` function is used for placing winner on canvas.
- `update()` function is to update the winner position.
- `handleInput()` function is the used to handle the input.
         To this method they already implemented some method, for that I just modified steps to make a move.
                - `left` key
                - `up` key
                - `right` key
                - `down` key
- If winner reaches to top of the canvas then he gets 50 points and gets back to its initial position.
- I initialized `score` to know the score player scored for the game.
- By using array I placed three enemies.
- On game output screen I showed the score that player scored.
- While Playing game, If player touches the enemy then player gets killed and pop up will arise & display the score.
