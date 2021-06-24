# Lily Pad Game

This project is created to help anyone improve their memory while having a fun time.
With a cute and simple design and an easy to use layout.

The Lily pad game challenges the user to remember patterns. In the game there are six colored 
lily pads that light up in randomly generated patterns. The user will repeat the patterns 
shown by pressing the lily pads in the same order. 

When pressing the start button the game begins with one random lily pad lighing flashing. If the 
user clicks on that lily pad, they have completed that level and moves to the next. 
After a completed level, another random lily pad will be added to the pattern. 
Now the user needs to remember the old patterns and the new. Click them in the right order to complete the level. 
In the game there are 15 levels, If the user successfully completes all 15 levels they win the game.

## Showcase

![Showcase-screenshot](assets/img/Lilypadgamepicture.jpg)

A deployed version of my game can be found [here.](https://jesperkarlsson500.github.io/MS2-Lilypad-Game/)
## Navigation

* [UX](#ux)
* [Strategy](#strategy)
    + [User-needs](#user-needs)
    + [Business-vision](#business-vision)
* [Scope](#scope)
* [Structure](#structure)
* [Wireframes](#wireframes)
  + [Changes](#changes-to-wireframes)
* [Features](#features)
    + [Existing-features](#existing-features)
    + [Future-features](#futere-features)
* [Technologies](#technologies)
* [Testing](#testing)
  + [Testing-plan](#testing-plan)
  + [Implementation](#implementation)
  + [Results](#results)
* [Bugs](#bugs)
* [Deployment](#deployment)
* [Credits](#credits)
* [Media](#media)
* [Acknowledgements](#acknowledgements)

## UX
<hr>
The purpose of this game is to help anyone improve their memory while having a good time. 
Put on the ambiant lake sounds in the game, sit back, relax and jump from lily to lily. 
To help the user remember what lily pad to jumped to, they are all colored differently and have a unique splash sound
when clicked. If you win the game you will be rewarded with a light show and happy cheers!


### UX Stories

* As a user I want to have fun.
* As a user I want to follow patterns and improve my memory.
* As a user I want to learn in a relaxed and colorful inviroment
* As a user I want to easily pick up how the game works
* As a user I want to see how good my memory is.

A user for my Lily pad game is looking to improve their memory and have fun doing it.

## Strategy
<hr>

#### User Needs
Be fun, user friendly and challanging throughout the whole experience.
An easy to see favicon so you can find the game in all your tabs. we're all guilty of that.

#### Business vision
As a business I see the market being saturated with memory games. 
This doesn't mean it's a no go. There are possibilites with my frog themed Simon inspired game.
I need to test it with the targeted audiance, to see their reactions
and if it's something they want.

## Scope
I want the user to have fun in a relaxed learning inviroment.

## Structure
The game is made up of one page. 
When the game is loaded you will be greeted by a frog. The frog keeps a lookout and checks every move you make. 
If you play on mobile the frog looks were the user clicks.
It consists of six lily pads that light up in a randomized pattern. 
Every turn you complete the pattern increases by one until you reach the score of 15. 
At 15 you won the game.

## Wireframes
<hr>

I started making the game to look like the Simon game.

![Wireframe](assets/img/Simonwireframe.png)

### Changes to wireframes
I later on changed the game, look and and layout to be more unique.

![Wireframe](assets/img/LilyPadWireframe.jpg)

## Original ideas
<hr>

Originally I was planning to make a Simon game. I wanted to learn how to do it and create a fun game. 
But the more I worked on it the more it fell flat. I know it's just a simon game but still... 
I wanted to upgrade it a little. One day I was walking over a bridge and saw a bunch of beautiful lily pads in the water.
At that moment I knew I wanted to change the look to have the user jump from lily pad to lily pad.
This would be more pleasing to look at and also make the game more fun and sellable.


## Features
<hr>

* on/off game checkbox.
* on/off checkbox for the ambiant music.
* Score counter if the middle of the lilyflower that increments after each succesful turn.
* after reaching and completing 15 turns you win the game and "WIN!" will show up to replace the numbers
* All lily pads will flash their colors from red to green clockwise and then all flash 3 times if you win the game.
* A frog that introduces you to the game and keeps it's eyes on every move that you make.
* If you fail the frog encurages you to try again.

## Technologies
<hr>
This project was build using the following technologies:

* HTML5
* CSS3
* Google Chrome DevTools: Helped me iterate, debug and profile my site.
* Lighthouse: Helped me improve the websites performance on both desktop and mobile.
* Jigsaw W3C validator: Validated and tested my CSS.
* W3C Markup validator: Validated and tested my HTML.
* Used [this.](https://favicon.io/favicon-generator/) to create my favicon.
* Used JSHint to find warnings and errors in my JS code.

## Testing
<hr>
Changed splash sound on the red and yellow leaf since they sounded a bit harsh. 

While testing I found that the game stopped working after reaching 3 loops. I typed in console.log(order); To find that 
I had set the play function to (let i = 0; i < 3; i++). I forgot to turn it back to 15 as it should be.

In Chrome devtools I found "Uncaught TypeError: Cannot read property 'style' of undefined (script.js:37)"
In the for loop I changed: i < 2; to i < 1; that removed the 'style' undefined error.

Moved the variable ambiance = document.getElementById("ambiance"); out of the if statement. 
Changed it into a const and put it next to all other consts. This fixed the problem that the pause function did not work.
Problem was that the ambiance variable was only read by the if (ambianceButton.checked == true).

### Testing plan

My main plan is to play the game and make sure it works on desktop.

### Implementation

I used Lighthouse to check the performance on both mobile and desktop and search for errors.
I used W3C code validator for both CSS and HTML. I test all my functions and checkboxes to make sure they're working.
I used JSHint to search through my Javascript code.

### Future improvements
I want to dry up the code and make it more compact. Trying to figure out how everything works took a lot 
of time so I ended up not drying up any code at all.

#### When using code validator I found:

JSHint found missing semicolons after return statements. Three unused variables and one missing. 

9 Problems with launch.json and settings.json. I get this in every project I open.
## Results
<hr>

I added /*jshint esversion: 6 */ at the top of my scipt.js to remove warning/error at JSHint validator.

## Bugs
<hr>

Sometimes If I click the lilys very fast the game bugs and lilys that are no supposed to be flashing are. 
And the speed of the whole game changes and a restart is needed to solve the problem.

## Deployment
<hr>

This project is deployed using GitPod and GitHub. I used GitPod to code everything and GitHub 
to deploy the website and make it go live.

I used these three steps to deploy my website:

1. Click on settings tab on my repository.
2. Click the pages tab.
3. Set source branch to master. In the green field you will see the link to the live website.

## Credit
<hr>

* Inspiration and code used from this free youtube tutorial [freeCodeCamp.org.](https://www.youtube.com/watch?v=n_ec3eowFLQ)
* Sound effect taken from youtube [Link here.](https://www.youtube.com/watch?v=WS_3OCcKiJ0)
* Moving eye effect taken from youtube [link here.](https://www.youtube.com/watch?v=AixAmLWzXYg)
* Yaykids sound effect taken from youtube [link here.](https://www.youtube.com/watch?v=_Z3ra0CxCE0)
* README template from code institute. [README.md template](https://github.com/Code-Institute-Solutions/readme-template).
* Custom favicon created at [favicon.io.](https://favicon.io/favicon-generator/)

## Media
<hr>

* Cut and modified the sounds myself in the program Ableton live.

## Acknowledgements
<hr>

I want to thank my mentor Antonija Simic for helping and supporting me. She made me see things from new 
perspectives and asked me questions to help me think better. She gave me advice and links 
where I could find more information.

**This project was created for educational purposes only, credit for any code and sounds used goes to all their rightful owners**

**Created by Jesper Karlsson**