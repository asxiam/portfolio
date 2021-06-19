Things I need to look up:

1) How to do a loading bar, an accurate one so that when it reaches 100% the page loads
	- Waiting on implementing this, in case everything loads dummy fast
2) How to acheive a parallax effect.
	- According to a google dev blog, JS doesn't guarantee that parallaxing will keep in step with the page's scroll position
	- Also, it's bad to update *background-position*, it's costly because we are painting on every frame
	- The best way it seems to achieve parallax is to use CSS 3D transforms.
		* Container element has the overflow & perspective attrs.(does perspective size matter?)
		* To the children elements, translateZ and scale()
		* We can adjust scale for perspective using this equation: (persp-dist)/persp
		* In most cases, I can add a `transform-style: preserve-3d` to propagate any 3d properties that were applied further up the tree.
		* More info here: https://developers.google.com/web/updates/2016/12/performant-parallaxing
		* Another link: https://medium.com/@dailyfire/pure-css-parallax-simple-tricks-da102d0ffdb9

3) Background video
	- https://www.w3schools.com/howto/howto_css_fullscreen_video.asp
	- Everything in the above link it's pretty simple

4) Words/anything that follows the cursor
	- Gonna try in vanilla JavaScript, but can always add jquery later for simpler stuff all around.
	- attach an event listener onto the video layer or the container layer
	- calculate using current mouse position and play around the numbers

5) Creating my own hamburger menu with an animation of a circle coming in from the top right to the bottom left.
	- https://dev.to/ljcdev/easy-hamburger-menu-with-js-2do0
	- https://www.w3schools.com/howto/howto_js_mobile_navbar.asp
	- Some really nice animations: https://codepen.io/designcouch/pen/Atyop
	- Advanced animations(SVG + CSS): https://css-tricks.com/line-animated-hamburger-menu/
	- Really advanced shit https://www.hongkiat.com/blog/hamburger-menu-animations/
	- Full screen animation: https://freefrontend.com/css-fullscreen-menus/
	- Specific full screen animation: https://codepen.io/arjancodes/pen/jErbyM?editors=1000 (Is the animation just a scale)
	- An animation to test out: https://stackoverflow.com/questions/37687014/animate-an-element-to-the-size-of-screen-in-fixed-position

6) Text underline animations
	- https://speckyboy.com/underline-text-effects-css/
	- https://paulund.co.uk/css-animation-link-underline#:~:text=First%20you%20set%20the%20width,by%20setting%20it%20to%200.&text=On%20the%20hover%20event%20of%20the%20link%20we%20display%20the,setting%20the%20height%20to%203px.
	- Useful ::before property info: https://www.w3schools.com/css/css_pseudo_elements.asp

7) CSS info from StackOverflow
	- https://stackoverflow.com/questions/2336302/single-huge-css-file-vs-multiple-smaller-specific-css-files

8) Continuous Scroll
	- https://stackoverflow.com/questions/60161393/how-to-horizontally-move-a-div-as-you-scroll-down-in-javascript-and-or-css
	- This could be it? https://sudo.isl.co/translate-vertical-horizontal/
		- There are three sections: card, parent, view-content
		- card is in view-content and view-content is in parent
		- Parent is bigger than view-content by a lot
		- Use offsetTop and apply the value to translateX()
		- In article, they track how tall parent should be and how much they should translate card left/right
		- Here are the necessary steps ... 
		- 1. dynamic height variable, translateX var
		- 2. dynamic height = widthofoverflowingcards+heightofviewingcontainer+abuffer(150px?)
		- 3. make the viewing container sticky, adjust the height, top:0, and overflowx hidden for the cards
		- 4. card container is the same height as the viewing container, position absolute, and if needed a will-change: transform
		- 5. Beginning logic
		- 6. func calcDynamicHeight that gets called whenever the screen gets resized. This is will adjust the tall container by reapplying the above equation with updated variables. handleDynamicHeight calls calcDynamicHeight when there is a resize of the window. apply a scroll listener that updates a translateX variable based on the viewcontainer's offsetTop
		- 7. Final thoughts
		- 8. It kind of makes sense now.  There is all this extra empty room from the tall container, but with the sticky positioning of the viewing container we will seem to be "stuck in the same spot"
		- 9. Very interesting will like to see what happens
		- 10. Shit ain't working.  Need to first figure out how to be able to scroll more without changing the rest of the screen
		- 11. Then figure out how to incorporate the static view-container into Step 10

9) Parallax Effect
	- https://medium.com/@dailyfire/pure-css-parallax-simple-tricks-da102d0ffdb9
	- (perspective — distance) / perspective = scaleFactor