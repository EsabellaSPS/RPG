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
    case "Job one (to slay Minotaur)":
      jobOne();
      break;
    case "Job two (to slay slimes)":
      jobTwo();
      break;
    case "Use Sword":
      swords();
    break;
    case "Use Bandages":
      useBandages();
    break;
    case "Game Over":
      gameOver();
    break;
    case "The End":
      theEnd();
    break;
    case "Restart":
      cabin();
    break;
    }
}

function cabin(){
  addImage("https://i.ytimg.com/vi/jipME-yoUO0/maxresdefault.jpg");
  story("You stretch out all of your muscles and stand up from your bed, and walk over to your closet and get dressed.\
  \nGrabbing your sword within its sheath you attach it to your hip.\
  \nYou look over to your table a ponder on whether you should grab your bag of bread or bandages");
  choices = ["Grab Bandages","Grab Bread"];
  answer = setOptions(choices);
}
//Grab Bandages
function grabBandages(){
  addImage("https://cdn.pixabay.com/photo/2017/12/10/15/16/white-horse-3010129__480.jpg");
  story("You grab the bandages and head out of your house, you look and see Marley.\
  \nGiving him a carrot and petting his mane.\
  \nYou are about to walk away from them but then you thought about it.\
  \nMaybe you should take your horse to get to work, or would you rather walk.");
  choices = ["Grab horse","Walk"];
  answer = setOptions(choices);
}
//Grab Bread
function grabBread(){
  addImage("https://cdn.pixabay.com/photo/2017/12/10/15/16/white-horse-3010129__480.jpg");
  story("You grab the bread and put it in your satchel. You head outside and see Marley.\
    \nYou give him a carrot and pet his mane.\
  \nYou are about to walk away from them but then you thought about it.\
  \nMaybe you should take your horse to get to work, or would you rather walk.");
  choices = ["Grab horse","Walk"];
  answer = setOptions(choices);
}
//Grab Horse
function grabHorse(){
  addImage("https://www.deephollowranch.com/wp-content/uploads/2022/01/Camarillo.jpg");
  story("You grabbed your horse and rode on your way to work, once arriving you jumped off the side of them and entered the guilds building.\
  \nYou look at the wall to your right and see all the jobs that you can take, you see two that get your interest.\
  \nTo slay a Minotaur and to slay Slime, which one should you pick?");
  choices = ["Job one (to slay Minotaur)","Job two (to slay slimes)"];
  answer = setOptions(choices);  
}
//Walk
function walk(){
  addImage("https://post.healthline.com/wp-content/uploads/2020/09/928-Heavy_Breathing-732x549-thumbnail.jpg");
  story("You petted your horse, before starting your way to work.\
  \nWalking half way through you stop and sit on the ground.\
  \nPanting as your walk is still a ways to go, you get up from the ground and grab a water that you had stored in your bag and drink a bit before continuing on your walk to the guild.\
  \nOnce getting there you grab a table that is closest to the missions board. Looking I can see slaying a Minotaur and to Slay slimes, standing up I grab?");
  choices = ["Job one (to slay Minotaur)","Job two (to slay slimes)"];
  answer = setOptions(choices);
}
//Minotaur
function jobOne(){
  addImage("https://t4.ftcdn.net/jpg/00/85/84/25/360_F_85842532_rwFjW9LTmM93FFc2IfkDI708NDPQK881.jpg");
  story("You grab the Minotaur paper with the job description, Slay 3 minotaurs and bring back each one of their horns from each minotaur, Reward of 100 gold coins.\
    \nI give a slight smile looking at the reward. I rolled it up and put it in my satchel.\
    \nI headed my way to the area where minotaurs are found.\
    \nI grab my sword from it’s hilt once arriving, I see a minotaur and run towards it and slice it’s leg making it drop to one leg.\
    \nJumping back as it let out a huge roar, 4 other minotaurs appeared out of the forests.\
    \nI tightened my grip on my sword and they all went attacking me besides the one that I had already stricked down.\
    \nTheir horns impaled my sides, tearing through my skin.\
    \nI feel my arm feeling lighter and my legs weightless. My eyes slowly closed as the pain faded slowly as everything went dark.");
  choices = ["Game Over"];
  answer = setOptions(choices);
}
//Slime
function jobTwo() {
  addImage("https://cdllife.com/wp-content/uploads/2012/10/The-Blob-1988-CDL-Life.jpg");
  story("You grab the paper that shows a slime, with the job description, You are to slay 50 acid slimes and gather their cores, bring them back to the guild and you'll be rewarded.\
    \nYou read this and start your way to head to the slime mines. Once entering you see a slime and it spits acid on your arm, you should?");
  choices = ["Use Sword","Use Bandages"];
  answer = setOptions(choices);
}
//Use Sword
function swords() {
  addImage("https://www.worldhistory.org/img/r/p/500x600/8870.jpg?v=1616515202");
  story("You grab your sword from its hilt and swing the sword at the slimes, once they were killed you looked in your bag and grabbed your bandages \”\ Good thing I had these, I would have totally been a goner\”\ . \
    \nAfter bandaging your arm you put your sword in its hilt and start to gather all the slime cores from the ground.\
    \nYou realize you have the 25 cores that you need and head back to the guild’s area. Opening the door you see a bunch of people inside each having completed their own missions and partying with their own groups.\
    \nI walk to the front counter and hand her the bag full of cores, she hands me 15 silver coins.\
    \nI give her a small smile and walk to a table not before grabbing a drink and food.\
    \nAt the end of the night you decide to head back home, you look up at the moon high up in the sky and smile. \”\ Today was a good day, I wish tomorrow to be like this as well.\”\ \
    \nOnce getting home you walk to your room and change into your PJ’s, laying down in your bed you get comfortable and then you sleep.");
  choices = ["The End"];
  answer = setOptions(choices);
}
//Using Bandages
function useBandages() {
  addImage("https://image1.masterfile.com/getImage/NjQ5LTA2NDMyOTcyZW4uMDAwMDAwMDA=AL21mb/649-06432972en_Masterfile.jpg");
  story("You quickly run out of the cave and grab your bandages out of your bag.\
  \nYou quickly bandage your arm, \”\ Good thing I had these, I would have totally been a goner\”\.\
  \nWalking back inside you grab your sword from its hilt and swing the sword at the slimes, once they are killed you put your sword in its hilt and start to gather all the slime cores from the ground.\
  \nYou realize you have the 25 cores that you need and head back to the guild’s area.\
  \nOpening the door you see a bunch of people inside each having completed their own missions and partying with their own groups.\
  \nI walk to the front counter and hand her the bag full of cores, she hands me 15 silver coins.\
  \nI give her a small smile and walk to a table not before grabbing a drink and food.\
  \nAt the end of the night you decide to head back home, you look up at the moon high up in the sky and smile. \”\ Today was a good day, I hope tomorrow to be like this as well.\”\ \
  \nOnce getting home you walk to your room and change into your PJ’s, laying down in your bed you get comfortable and then you sleep.");
  choices = ["The End"];
  answer = setOptions(choices);
}
//Game over Command, if needed edit but fine for now. 
function gameOver() {
  addImage("https://thumbs.dreamstime.com/b/simple-plain-game-over-screen-carousel-colors-red-green-blue-yellow-big-characters-game-over-big-bit-carousel-plain-203618420.jpg");
  story("You have died, you can restart the game by clicking below.\
  \nFor now you are dead though.You will have fun with this once you get the rhythm you'll never die again but, for now you should restart.\
  \nSee you in your new life hope you don't die this next round. Survive and find your second end. Good Luck brave adventurer.");
  choices = ["Restart"];
  answer = setOptions(choices);
}
//The end, Good ending basically
function theEnd() {
  addImage("https://s3.envato.com/files/38938444/end%20title%20590.jpg");
  story("You Survived! This is the end of today's adventure, I hope that it was a fun adventure.\
  \nYou deserve the best after all! You can reset this and try again but there are only two ends.\
  \nSleep well, yeah? Get rest before your next adventure!");
  choices = ["Restart"];
  answer = setOptions(choices);
}