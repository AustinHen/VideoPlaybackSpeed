# TLDR 
Usually browsers require video playback speeds to be between 0.5 and 2; this script changes playback speeds to whatever you want. 

# Rational
Other people have made similar scripts but they do not work well with Echo360(the site my school uploads lecture recordings to). 
Echo360 has multiple videos running at the same time and will automatically change the playback speed back to 1 if outside code updates it.

# Running The Code
To run add this bookmark:
```js
javascript:fetch("https://raw.githubusercontent.com/AustinHen/VideoPlaybackSpeed/main/main.js").then(a=>a.text()).then(eval)
```
Then click on it when watching a video


Alternatively you can copy my code into TamperMonkey. 

Some sites (like YouTube) require scripts to be registered through the Google Store. TamperMonkey lets you get around this requirement.   
# Key bindings
<kbd>s</kbd> + 0.1 speed
<kbd>d</kbd> - 0.1 speed
<kbd>a</kbd> + set speed to 1
# Issues 
I have yet to make a gui for this. It also lacks a lot of polish. It does work well on Echo360 which is what I wanted out of it. 

