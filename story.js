/* Uses Case Statements */

// variables
// var name = "";
var scene1=cabin;

function checkAnswers(answer) {
  switch(answer) {
    case "Grab Bandages":
      grabBandages();
      break;
    case "Grab Bread":
      grabBread();
      break;
    case "Grab horse":
      grabHorse();
      break;
    case "Walk":
      walk();
      break;
    case "Job 1 (to slay Minotaur)":
      Job1();
      break;
    case "Job 2 (to slay slimes)":
      Job2();
      break;
    }
}

function scene1(){
  story("You stretch out all of your muscles and stand up from your bed, and walk over to your closet and get dressed.\
  \nGrabbing your sword within its sheath and attach it to your hip.\
  \nYou look over to your table a ponder on whether you should grab your bag of bread or bandages");
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
  \nMaybe you should take your horse to get to work, or would you rather walk.");
  choices = ["Grab horse","Walk"];
  answer = setOptions(choices);
}
//Grab Horse
function grabHorse(){
  story("You grabbed your horse and rode on your way to work, once arriving you jumped off the side of them and entered the guilds building.\
  \nYou look at the wall to your right and see all the jobs that you can take, you see two that get your interest.\
  \nTo slay a Minotaur and to slay Slime, which one should you pick?");
  choices = ["Job 1 (to slay Minotaur)","Job 2 (to slay slimes)"];
  answer = setOptions(choices);  
}
//Walk
function Walk() {
  story("You petted your horse, before starting your way to work.\
  \nWalking half way through you stop and sit on the ground.\
  \nPanting as your walk is still a ways to go, you get up from the ground and grab a water that you had stored in your bag and drink a bit before continuing on your walk to the guild.\
  \nOnce getting there you grab a table that is closest to the missions board. Looking I can see slaying a Minotaur and to Slay slimes, standing up I grab?");
  choices = ["Job 1 (to slay Minotaur)","Job 2 (to slay slimes)"];
  answer = setOptions(choices);
}
//Minotaur
function Job1() {
  story("You grab the Minotaur paper with the job description, Slay 3 minotaurs and bring back each one of their horns from each minotaur, Reward of 100 gold coins. I give a slight smile looking at the reward. I rolled it up and put it in my satchel. I headed my way to the area where minotaurs are found. I grab my sword from it’s hilt once arriving, Isee a minotaur and run towards it and slice it’s leg making it drop to one leg. Jumping back as it let out a huge roar, 4 other minotaurs appeared out of the forests. I tightened my grip on my sword and they all went attacking me besides the one that I had already stricked down. Their horns impaled my sides, tearing through my skin. I feel my arm feeling lighter and my legs weightless. My eyes slowly closed as the pain faded slowly as everything went dark.");
  choices = ["Game Over"];
  answer = setOptions(choices);
}
//Slime
function Job2() {
  story("You grab the paper that shows a slime, with the job description, You are to slay 50 acid slimes and gather their cores, bring them back to the guild and you'll be rewarded.You read this and start your way to head to the slime mines. Once entering you see a slime and it spits acid on your arm, you should?");
  choices = ["Use Sword,Use Bandages"];
  answer = setOptions(choices);
}


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