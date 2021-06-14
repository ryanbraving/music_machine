# Music Machine
This is an interactive music app developed completely on MeteorJS.
App has been deployed on Heroku and is accessible in here:
https://ryanbraving-musicmachine.herokuapp.com/

People can create music together at the same time on their own browser, no matter where they are! To check it out you can open the above link in two different browsers (e.g Firefox and Chrome) at the same time and start playing.

MongoDB is the database and for music features Maxim JavaScript library has been used. 
On the deployed version, the MangoDB Atlas is used which is hosted on AWS free tier. 


## Installed packages during developments:

`meteor add session orionjs:bootstrap iron:router mobile-experience fortawesome:fontawesome twbs:bootstrap@=3.3.2 mizzao:jquery-ui jiku:bootstrap-toggle` <br/>

Along with above command you might need to use this flag for compatibility: `--allow-incompatible-update` <br/>


## Getting this repo and running local server
#### Clone

`git clone git@github.com:ryanbraving/music_machine.git` <br/>



#### Install dependancies
`cd music_machine` <br/>
`meteor npm install` <br/>

#### Run server
`meteor` <br/>

Open your browser and hit `localserver:3000`
