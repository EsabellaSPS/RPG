/* Uses Case Statements */

// variables
// var name = "";
var scene1=cabin;

function checkAnswers(answer) {
  switch(answer) {
    case "cabin":
      grabBandges();
      break;
    case "grabBandges":
      grabHorse();
      break;
    case "ignore it and go home":
      homeEarly();
      break;
    }
}

function cabin(){
  story("You stretch out all of your muscles and stand up from your bed, and walk over to your closet and get dressed.\
  \nGrabbing your sword within its sheath and attach it to your hip.\
  \nYou look over to your table a polder on whether you should grab your bag of bread or bandages");
  choices = ["Grab Bandages","Grab Bread"];
  answer = setOptions(choices);
}
//Grab Bandages
function grabBandages(){
  story("You grab the bandages and head out of your house, you look and see Marley.\
  \nGiving him a carrot and petting his mane.\
  \nYou are about to walk away from them but then you thought about it.\
  \nMaybe you should take your horse to get to work, or would you rather walk.");
  choices = ["Grab horse","Walk"];
  answer = setOptions(choices);
}
//Grab Bread
function grabBread(){
  story("You grab the bread and put it in your satchel. You head outside and see Marley.\
    \nYou give him a carrot and pet his mane.\
  \nYou are about to walk away from them but then you thought about it.\
  \nMaybe you should take your horse to get to work, or would you rather walk.")
}
/*Grab Horse
function grabHorse(){
  story("You grabbed your horse and rode on your way to work, once arriving you jumped off the side of them and entered the guilds building.\
  \nYou look at the wall to your right and see all the jobs that you can take, you see two that get your interest.\
  \nTo slay a Minotaur and to slay Slime, which one should you pick?")
  choices = ["Job 1 (to slay Minotaur)","Job 2 (to slay slimes)"];
  answer = setOptions(choices);  
}
*/
/* Old Code */

function town(){
  // var name = prompt("what is your name?");
  story("One day you are on your way home from school and you hear a whisper coming from a dark forest you never remember seeing before.\
  \n\"Come here Come here!\"\
  \nit says. You can't place the voice, but there is something familiar about it. What do you do?");
  choices = ["Think some more", "go into the forest", "ignore it and go home"];
  answer = setOptions(choices);
}

// Places
function thinkSomeMore() {
  story("You think about it some more and are sure this forest was not here yesterday.  \
  \nWhere did it come from and how does it know your name?\
  \nWhat do you want to do?");
  choices = ["go into the forest", "ignore it and go home"];
  answer = setOptions(choices);
}

function enterForest() {
    story("You enter the forest and soon become hopefully lost.\
    \nWhile you can't find your way out you do see a few places of interest.");
    forest();
}

function forest() {
  story("There is a house made of candy.\
  \nThere is a fruit vender.\
  \nThere is a small opening in the trees with a ring of mushroom in the middle.");
  choices = ["Think some more", "ignore it and go home"];
  answer = setOptions(choices);
}

function homeEarly() {
  var messages = ['You ignore it and walk home.',
    'Nothing exciting happens to you one the way.',
    "That was a very boring story, but you must be a boring person for having chosen to go home.",
    "If it was me there is no way I am passing up the chance to check out a new forest that just happens over night.",
    "To each his own I guess."
  ];
  delayText(messages, 1000);
}