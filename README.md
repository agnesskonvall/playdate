<img src="https://i.pinimg.com/originals/ec/bc/4e/ecbc4e4b004c14326431df7763044eb8.gif" width=50% height=50%>

# Yrgotchi

A tamagotchi with a "web dev student @ Yrgo" theme. Built using Vite, React and PixiJS.
URL to demo: [Yrgotchi](https://yrgotchi.netlify.app)

# Installation

1. Clone the repo
2. npm i
3. npm run dev

# Changelog


[17 - Last bugfix](https://github.com/agnesskonvall/playdate/pull/18)

[16 - More bugfixes](https://github.com/agnesskonvall/playdate/pull/17)

[15 - Bugfixes](https://github.com/agnesskonvall/playdate/pull/16)

[14 - Added sounds](https://github.com/agnesskonvall/playdate/pull/15)

[13 - Added navbar with instructions](https://github.com/agnesskonvall/playdate/pull/14)

[12 - Even more animations](https://github.com/agnesskonvall/playdate/pull/13)

[11 - Update read.me](https://github.com/agnesskonvall/playdate/pull/12)

[10 - Split into even more files](https://github.com/agnesskonvall/playdate/pull/11)

[9 - Split files](https://github.com/agnesskonvall/playdate/pull/10)

[8 - Animations](https://github.com/agnesskonvall/playdate/pull/8)

[7 - Added React](https://github.com/agnesskonvall/playdate/pull/7)

[6 - Prepare for React](https://github.com/agnesskonvall/playdate/pull/6)

[5 - Pixi init](https://github.com/agnesskonvall/playdate/pull/5)

[4 - Vite init](https://github.com/agnesskonvall/playdate/pull/4)

[3 - Initial commit](https://github.com/agnesskonvall/playdate/pull/3)

[2 - Boilerplate](https://github.com/agnesskonvall/playdate/pull/2)

[1 - Pixi](https://github.com/agnesskonvall/playdate/pull/1)

# Code Review by [Theo Sandell](https://github.com/theo0165) & [Patrik Staaf](https://github.com/patrikstaaf)

1. `App.jsx:20` - No 404 route.
2. `App.jsx:20` - All Legend components/pages (Eat, Sleep etc) could be refactored to one Legend component that contains LegendNav and LegendCard that takes instructions as prop and send it to LegendCard.
3. `game.js:61-67` - Error and loading not needed for prod/functions doesn't give information to user.
4. `game.js:92-115` - Lots of DRY code, could this be refactored as a for loop?
5. `game.js:121` - gameLoop() is empty.
6. `animations.js:25-36;68-79` - Same code, refactor to a seperate method.
7. `animations.js:173-180` - Could use template literals for concatenation.
8. `menuitem.js:2, yrgonaut.js:2, yrgostats.js:1` - No need to import game.js.
9. `animations.js:96-167` - This works fine but could it be refactored into a single method?
10. Praise: Overall, great job! Fun idea, cool animated sprites and good execution.


# Testers

Tested by the following people:

1. Alice Nyberg
2. Amanda Hultén
3. Sofia Rönnqvist
4. Oliver Davis

Tested by the following muggles (non-coders):

1. Filippa Kärn
2. Karin Skönvall Hesslind
3. Anna Ramstedt
4. Arlene Stridh
5. Rohit Narayan
