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
    - Full face image shown when chin guessed correcly
    - Incorrect guess passes
    - Clues
    - Trade incorrect guess pass for clues
    - Timer
    - Multiplayer/How fast?: Each player takes turns correctly typing the name of a celebrity whose chin is pictured. A player accumulates  time for every second taken to answer correctly, with a time limit of 60 seconds (1 minute) for each turn. If a player is unable to correctly guess the name of the celebrity within the time limit, 120 seconds (2 minutes) will be added to their cumulative time.
        - timer
        - player #

Pseudocode:

1. Chin image and player score should initialize upon loading the page.
    [x] create a chins array that holds chin objects that have properties chinImg, fullImg, answer.
    - upon render, an image pulled from the chins array will display on the page
    - create a player score that increments when player gets a correct answer
2. User should be able to type guess into input box and press submit.
3. User's input should be compared to the image variable/assignment.
4. If user input equals image variable: 
    - user is alerted that they have guessed correctly
    - run init()
        - adds point to score
        - displays new random image 
5. If user input does not equal image variable
    - user is alerted that they should guess again.

