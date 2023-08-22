# Hello World in Hyper

Hyper is an Electron based terminal that can be customized with plugins written in Javascript. 
This "project" is to show the general concept for a beginner.

## Usage
If you want to try this on your Hyper terminal,     clone the repo and put 
    index.js
    package.json
in this location:
    Home/.hyper_plugins/local/<Your Plugin Name>

Then open up the config file by pressing 
    ctrl + ,
or go to the hamburger menu and select
    Edit -> Preferences
Inside the .hyper.js config file, search for
    localplugins : []
which will be an empty array if you haven't tested any of your local plugins before. 
Localplugins and plugins are not the same thing. If you want to add a normal plugin/theme to your Hyper, use 
    plugins: [<various plugin names>]

After saving and exiting .hyper.js, you won't see any changes on Hyper. To see changes, close the application and start again. Or you can refresh by pressing
    ctrl + shift + F5

