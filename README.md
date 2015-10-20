# VSBuildTime
Parse the Visual Studio build output and concatenate all the elapsed times to get the total build time.

## Why?
Building projects in Visual Studio can start to take quite some time when you get above 20-30 projects in a solution. We wanted to improve the speed of this and needed some way
to gauge our improvements. The total solution build time was necessary to know to compare between machines and before/after making improvements.

## How?
When building your project make sure you have the Output window open (View-->Output). After building copy the contents and save to file or use the command line [paste tool](http://www.c3scripts.com/tutorials/msdos/paste.html) to pipe the build output to this project.

```
C:\Code\VSBuildTime\node buildtime.js < log.log
>> Total build time is 0:0:0:52.770
C:\Code\VSBuildTime\node buildtime.js < paste
>> Total build time is 0:0:0:52.770
```
