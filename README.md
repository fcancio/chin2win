# chin2win

Objective:
    'Chin 2 Win' is a fun game to play for anyone who would like to test their celebrity chin knowledge amongst friends. Or perhaps one would like to just prove it to oneself.  

    How to play:
    Single Player/How many?: For each turn, an image of a celebrity's chin will be displayed on the screen. Player types out their best guess of the name of the celebrity whose chin is pictured.

    How to win:
    See how many chins you can guess correctly!

    Name rules:
    Spelling counts
    Casing does not matter

Technology Used:
    HTML, CSS, JavaScript

Wireframes:
    https://wireframe.cc/RjBJC2

User stories:
    As a user, I want to be able to see a clear/high quality image of a chin so for guessing correctly.
    As a user, I need an input box to type out my guess
    As a user, need a way to submit my guess.
    As a user, I need an alert or message to know whether or not my answer is correct.
    As a user, I would like a way to see my score, or how many chins I've guessed correctly.

Features list:
    chin image
    text input box
    submit button
    score

Stretch goals:
    [x] Full face image shown when chin guessed correcly
    [x] Various display messages based on correct or incorrect guesses
        [x] create correct message array
        [x] display/return random idx within correct message array
        [x] reset to default message at render
    - Clues/Hints
        - create clue properties within chins array
        - clue becomes accessible if answer is incorrect
            - click event on 'clue button' will print a clue
        - one additional clue becomes available for each additional incorrect guess
    - Game Over result
        - if player guesses incorrectly 6 times, game is over
            - count number of inputs
            - if number of inputs is => 6, prompt game over
    - Incorrect guess passes
    - Trade incorrect guess pass for clues
    - Timer
    - Multiplayer/How fast?: Each player takes turns correctly typing the name of a celebrity whose chin is pictured. A player accumulates  time for every second taken to answer correctly, with a time limit of 60 seconds (1 minute) for each turn. If a player is unable to correctly guess the name of the celebrity within the time limit, 120 seconds (2 minutes) will be added to their cumulative time.
        - timer
        - player #

Pseudocode:

1. [x] Chin image and player score should initialize upon loading the page.  
    [x] create a chins array that holds chin objects that have properties chinImg, fullImg, answer.  
    [x] upon render, an image pulled from the chins array will display on the page  
    [x] create a player score that increments when player gets a correct answer  
2. [x] User should be able to type guess into input box and press submit.  
3. [x] User's input should be compared to the image variable/assignment.  
4. [x] If user input equals image variable:   
    [x] user is alerted that they have guessed correctly  
    [x] run render()  
        [x] adds point to score  
        [x] displays new chin image   
5. [x] If user input does not equal image variable  
    [x] user is alerted that they should guess again.  

