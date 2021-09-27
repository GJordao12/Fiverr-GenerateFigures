let wiener_1;
const firstNamesMale = ["James", "John", "Robert", "Michael", "William", "David", "Richard", "Joseph", "Thomas", "Charles", "Christopher", "Daniel", "Matthew", "Anthony", "Donald", "Mark", "Paul", "Steven", "Andrew", "Kenneth", "Joshua", "Kevin", "Brian", "George", "Edward", "Ronald", "Timothy", "Jason", "Jeffrey", "Ryan", "Jacob", "Gary", "Nicholas", "Eric", "Jonathan", "Stephen", "Larry", "Justin", "Scott", "Brandon", "Benjamin", "Samuel", "Frank", "Gregory", "Raymond", "Alexander", "Patrick", "Jack", "Dennis", "Jerry", "Tyler", "Aaron", "Jose", "Henry", "Adam", "Douglas", "Nathan", "Peter", "Zachary", "Kyle", "Walter", "Harold", "Jeremy", "Ethan", "Carl", "Keith", "Roger", "Gerald", "Christian", "Terry", "Sean", "Arthur", "Austin", "Noah", "Lawrence", "Jesse", "Joe", "Bryan", "Billy", "Jordan", "Albert", "Dylan", "Bruce", "Willie", "Gabriel", "Alan", "Juan", "Logan", "Wayne", "Ralph", "Roy","Eugene", "Randy", "Vincent", "Russell", "Louis", "Philip", "Bobby", "Johnny", "Bradley"];
const firstNamesFemale = ["Mary", "Patricia", "Jennifer", "Linda", "Elizabeth", "Barbara", "Susa", "Jessica", "Sara", "Kare", "Nancy", "Lisa", "Margaret", "Betty", "Sandra", "Ashley", "Dorothy", "Kimberly", "Emily", "Donna", "Michelle", "Carol", "Amanda", "Melissa", "Deborah", "Stephanie", "Rebecca", "Laura", "Sharon", "Cynthia", "Kathleen", "Amy", "Shirley", "Angela", "Helen", "Anna", "Brenda", "Pamela", "Nicole", "Samantha", "Katherine", "Emma", "Ruth", "Christine", "Catherine", "Debra", "Rachel", "Carolyn", "Janet", "Virginia", "Maria", "Heather", "Diane", "Julie", "Joyce", "Victoria", "Kelly", "Christina", "Lauren", "Joan", "Evelyn", "Olivia", "Judith", "Megan", "Cheryl", "Martha", "Andrea", "Frances", "Hannah", "Jacqueline", "Ann", "Gloria", "Jean", "Kathryn", "Alice", "Teresa", "Sara", "Janice", "Doris", "Madison", "Julia", "Grace", "Judy", "Abigail", "Marie", "Denise", "Beverly", "Amber", "Theresa", "Marilyn", "Danielle", "Diana", "Brittany", "Natalie", "Sophia", "Rose", "Isabella", "Alexis", "Kayla", "Charlotte"];
const lastNames = ["Gwaidl", "Gwaidlbauer", "Brenngwaidl", "Gwaidldurst", "Sauteuer", "Wucher", "Wucher", "Wucher", "Wucher","Porphygwaidl","Porphygwaidl","Porphygwaidl","Porphygwaidl","Porphygwaidl", "Gaspedal", "Tankstelle", "Krampus","Mondjäger","Kaltlager", "Huber", "Huber", "Huber", "Huber","Warmlager", "Ameisenknappe", "Pumpengruber", "Hartgabel", "Weichgabel", "Stückmünze", "Huber","Huber","Huber","Huber","Huber","Huber","Huber","Huber","Huber","Beutelhalter", "Kerzenstock", "Zifferzunder", "Blitznetz", "Luftsturz", "Kettenspalt", "Dunkelnetz", "Wolkengräber", "Todkatzhops", "Staubtausch", "Vollknoten", "Hartkappe", "Weichkappe","Huber", "Zapfhahn", "Randschrei", "Meisterknoten", "Merkelbaum", "Kewaisi", "Kleinstplaner", "Nullmünzer", "Freiquell", "Schilling", "Samensatz", "Drecksmünz", "Seidenweg", "Dichtigkeit", "Verpflocker", "Waschwerk", "Dampfware", "Lebensbutter", "Staubabwickler", "Hatl", "Gewirr", "Sperrzeit ", "Schwachhändler", "Pizzatag", "Hirnranzen", "Kleindichter","Wagner", "Weber", "Bauer", "Müller", "Wolf", "Winkler", "Mayer", "Fischer", "Huber", "Schneider", "Berger", "Zimmermann", "Mueller", "Mueller", "Mueller", "Mueller", "Mueller", "Mueller", "Mueller", "Mueller", "Mueller", "Mueller", "Mueller", "Mueller", "Mueller", "Mueller", "Jovanovic", "Binder", "Vasic", "Richter", "Werner", "Nikolic", "Petrovic", "Zach", "Seidl", "Koch", "König", "Kaiser", "Djordjevic", "Markovich", "Tichy", "Todorovic", "Yilmaz", "Swoboda", "Unterbusch","Popel", "Dünnbier", "Hartwigsen", "Hodenberg", "Oberbillig", "Stehfest", "Schinken", "Schnitzel", "Bierhansl", "Immervoll", "Vonderbankk", "Gwaidl", "Gwaidl", "Gwaidl", "Gwaidl", "Gwaidl", "Gwaidl", "Gwaidl", "Gwaidl", "Gwaidl", "Gwaidl", "Gwaidl", "Gwaidl", "Gwaidl", "Gwaidl", "Bierhals", "Freybier", "Biersack"];

function draw() {
  var canvas = document.getElementById("canvas");
  var wienerSeed = canvas.getContext("2d");
  if (canvas.getContext) {

    let background = canvas.getContext("2d");

    const sex = Math.floor(Math.random() * 2) + 1;

    if ((sex == 1)) {
      wiener_1 = new Wiener(
        sex,
        Math.floor(Math.random() * 3) + 1,
        getMaleEyeColor(),
        Math.floor(Math.random() * 2) + 1,
        getMaleNose(),
        getMaleMouth(),
        getMaleEarrings(),
        getMaleHair(),
        getMaleBeard(),
        getMaleShirt(),
        getMaleTrousers(),
        getMaleLeftHand(),
        getMaleRightHand(),
        getMaleVest(),
        getMaleChain(),
        Math.floor(Math.random() * 5) + 1,
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 150),
        getAnimal()
      );
    } else {
      wiener_1 = new Wiener(
        sex,
        Math.floor(Math.random() * 3) + 1,
        getFemaleEyeColor(),
        Math.floor(Math.random() * 2) + 1,
        getFemaleNose(),
        getFemaleMouth(),
        getFemaleEarrings(),
        getFemaleHair(),
        0,
        getFemaleShirt(),
        getFemaleTrousers(),
        getFemaleLeftHand(),
        getFemaleRightHand(),
        0,
        0,
        Math.floor(Math.random() * 5) + 1,
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 150),
        getAnimal()
      );
    }
    wiener_1.display();
    displaySeed();
  }
}

// Eye Color
function getMaleEyeColor() {
  var aux = Math.floor(Math.random() * 100);
  if (aux < 30) return 1; //Black
  if (aux < 55) return 2; //Brown
  if (aux < 80) return 3; //Green
  return 4; //Blue
}

function getFemaleEyeColor() {
  var aux = Math.floor(Math.random() * 100);
  if (aux < 40) return 1; //Black
  if (aux < 70) return 2; //Brown
  if (aux < 90) return 3; //Green
  return 4; //Blue
}

//------------------------------------------------------------

//Nose
function getMaleNose() {
  var aux = Math.floor(Math.random() * 100);
  if (aux < 20) return 1; //Horizontal
  if (aux < 50) return 2; //Middle
  if (aux < 70) return 3; //Vertical
  if (aux < 90) return 4; //To the Left
  return 5; //Sunglasses
}

function getFemaleNose() {
  var aux = Math.floor(Math.random() * 100);
  if (aux < 20) return 1; //Horizontal
  if (aux < 45) return 2; //Middle
  if (aux < 65) return 3; //Vertical
  if (aux < 90) return 4; //To the Left
  return 5; //Sunglasses
}

//------------------------------------------------------------

//Beard
function getMaleBeard() {
  var aux = Math.floor(Math.random() * 100);
  if (aux < 10) return 1; //Blonde Stache
  if (aux < 20) return 2; //Black Stache
  if (aux < 25) return 3; //Ginger Stache
  if (aux < 35) return 4; //Black Beard
  if (aux < 40) return 5; //Black Beard
  if (aux < 50) return 6; //Ginger Beard
  return 7; //Blonde Beard
}

//------------------------------------------------------------

//Mouth
function getMaleMouth() {
  var aux = Math.floor(Math.random() * 100);
  if (aux < 50) return 1; //Normal (white)
  if (aux < 55) return 2; //Drooling Saliva
  if (aux < 75) return 3; //Drooling Mustard
  return 4; //Open Mouth
}

function getFemaleMouth() {
  var aux = Math.floor(Math.random() * 100);
  if (aux < 30) return 1; //Normal (white)
  if (aux < 60) return 2; //Drooling Saliva
  if (aux < 85) return 3; //Red
  return 4; //Drooling Mustard
}

//------------------------------------------------------------

//Earrings
function getMaleEarrings() {
  var aux = Math.floor(Math.random() * 100);
  if (aux < 5) return 1; //Gold, Right
  if (aux < 15) return 2; //Silver, Left
  if (aux < 25) return 3; //Silver, Right
  return 4; //No Earring
}

function getFemaleEarrings() {
  var aux = Math.floor(Math.random() * 100);
  if (aux < 35) return 1; //Gold, Right
  if (aux < 50) return 2; //Purple, Left
  if (aux < 90) return 3; //Silver, Right
  return 4; //No Earring
}

//------------------------------------------------------------

//Shirts
function getMaleShirt() {
  var aux = Math.floor(Math.random() * 100);
  if (aux < 12) return 1; //Black
  if (aux < 16) return 2; //Yellow, Happy
  if (aux < 21) return 3; //Green
  if (aux < 26) return 4; //White, Sad
  if (aux < 32) return 5; //Pink Polo
  if (aux < 40) return 6; //Light Blue Polo
  if (aux < 49) return 7; //Green Polo
  if (aux < 61) return 8; //White, No arms
  if (aux < 65) return 9; //Red Hoodie
  if (aux < 75) return 10; //Black Hoodie
  if (aux < 78) return 11; //Pink Suit
  if (aux < 87) return 12; //grey suit
  if (aux < 89) return 13; //yellow suit
  if (aux < 94) return 14; //Striped pullover, Green
  return 15; //Striped pullover Orange
}

function getFemaleShirt() {
  var aux = Math.floor(Math.random() * 100);
  if (aux < 10) return 1; //Black
  if (aux < 20) return 2; //Yellow, Happy
  if (aux < 30) return 3; //Green
  if (aux < 40) return 4; //White, Sad
  if (aux < 50) return 5; //Pink Polo
  if (aux < 55) return 6; //Light Blue Polo
  if (aux < 60) return 7; //Green Polo
  if (aux < 65) return 8; //White, No arms
  if (aux < 73) return 9; //Red Hoodie
  if (aux < 78) return 10; //Black Hoodie
  if (aux < 83) return 11; //Pink Suit
  if (aux < 88) return 12; //grey suit
  if (aux < 92) return 13; //yellow suit
  if (aux < 97) return 14; //Striped pullover, Green
  if (aux < 99) return 15; //Striped pullover, Green
  return 16; //no shirt
}

//------------------------------------------------------------

//Chain
function getMaleChain() {
  var aux = Math.floor(Math.random() * 100);
  if (aux < 3) return 1; //Gold Cross
  if (aux < 10) return 2; //Gold Chain
  if (aux < 15) return 3; //Silver Cross
  if (aux < 23) return 4; //Silver Chain
  return 5; //No Chain
}

//------------------------------------------------------------

//Vest
function getMaleVest() {
  var aux = Math.floor(Math.random() * 100);
  if (aux < 60) return 0; //No Vest
  if (aux < 90) return 1; //Green Vest
  return 2; //Light Green Vest
}

//------------------------------------------------------------

//Trousers
function getMaleTrousers() {
  var aux = Math.floor(Math.random() * 100);
  if (aux < 16) return 1; //Khaki
  if (aux < 26) return 2; //Dark Purple
  if (aux < 44) return 3; //Black
  if (aux < 62) return 4; //Blue
  if (aux < 74) return 5; //Green
  if (aux < 78) return 6; //Pink Suit Pants
  if (aux < 96) return 7; //Pink Suit Pants
  if (aux < 99) return 8; //Grey Suit Pants
  return 9; //Yellow Suit Pants
}

function getFemaleTrousers() {
  var aux = Math.floor(Math.random() * 100);
  if (aux < 10) return 1; //Khaki
  if (aux < 30) return 2; //Dark Purple
  if (aux < 45) return 3; //Black
  if (aux < 60) return 4; //Blue
  if (aux < 75) return 5; //Green
  if (aux < 85) return 6; //Pink Suit Pants
  if (aux < 95) return 7; //Pink Suit Pants
  return 8;
}

//------------------------------------------------------------

//Hair
function getMaleHair() {
  var aux = Math.floor(Math.random() * 100);
  if (aux < 7) return 0; //No Hair
  if (aux < 12) return 1; //Punk, Green
  if (aux < 30) return 2; //Black
  if (aux < 48) return 3; //Blonde
  if (aux < 56) return 4; //Black Elvis
  if (aux < 68) return 5; //Blonde Elvis
  if (aux < 74) return 6; //Ginger Long
  if (aux < 82) return 7; //Blonde Long
  if (aux < 90) return 8; //Light Blonde Long
  return 9; //Nerd Brown
}

function getFemaleHair() {
  var aux = Math.floor(Math.random() * 100);
  if (aux < 3) return 0; //No Hair
  if (aux < 8) return 1; //Punk, Green
  if (aux < 20) return 2; //Black
  if (aux < 35) return 3; //Blonde
  if (aux < 55) return 4; //Black Elvis
  if (aux < 70) return 5; //Blonde Elvis
  if (aux < 80) return 6; //Ginger Long
  if (aux < 85) return 7; //Blonde Long
  if (aux < 95) return 8; //Light Blonde Long
  return 9; //Nerd Brown
}

//------------------------------------------------------------

//Animal
function getAnimal() {
  var aux = Math.floor(Math.random() * 100);
  if (aux < 5) return 5; 
  if (aux < 8) return 4; 
  if (aux < 12) return 3; 
  if (aux < 16) return 2; 
  if (aux < 20) return 1; 
  return 0; 
}

//------------------------------------------------------------

//Left Hand
function getMaleLeftHand() {
  var aux = Math.floor(Math.random() * 100);
  if (aux < 10) return 1; //Middle Finger
  if (aux < 30) return 2; //Beer Bottle
  if (aux < 55) return 3; //Beer Pint
  if (aux < 70) return 4; //Cigarette
  if (aux < 85) return 5; //Punk Hand
  return 6; //Hot Dog
}

function getFemaleLeftHand() {
  var aux = Math.floor(Math.random() * 100);
  if (aux < 15) return 1; //Middle Finger
  if (aux < 40) return 2; //Beer Bottle
  if (aux < 55) return 3; //Beer Pint
  if (aux < 70) return 4; //Cigarette
  if (aux < 95) return 5; //Punk Hand
  return 6; //Hot Dog
}

//------------------------------------------------------------

//Right Hand
function getMaleRightHand() {
  var aux = Math.floor(Math.random() * 100);
  if (aux < 10) return 1; //Regular Hand
  if (aux < 30) return 2; //Beer Spilling
  if (aux < 55) return 3; //Beer Bottle
  if (aux < 70) return 4; //Cigarette
  if (aux < 85) return 5; //Punk Hand
  return 6; //Hot Dog
}

function getFemaleRightHand() {
  var aux = Math.floor(Math.random() * 100);
  if (aux < 30) return 1; //Regular Hand
  if (aux < 40) return 2; //Beer Spilling
  if (aux < 50) return 3; //Beer Bottle
  if (aux < 65) return 4; //Cigarette
  if (aux < 85) return 5; //Punk Hand
  return 6; //Hot Dog
}

class Wiener {
  constructor(
    Sex,
    sColor,
    eColor,
    eyes,
    nose,
    mouth,
    earring,
    hair,
    beard,
    shirt,
    trousers,
    leftHand,
    rightHand,
    vest,
    chain,
    bColor,
    name,
    lastName,
    bird
  ) {
    this.sex = Sex;
    this.sColor = sColor;
    this.eColor = eColor;
    this.eyes = eyes;
    this.nose = nose;
    this.mouth = mouth;
    this.earring = earring;
    this.hair = hair;
    this.noHair = false;
    this.beard = beard;
    this.shirt = shirt;
    this.trousers = trousers;
    this.leftHand = leftHand;
    this.rightHand = rightHand;
    this.vest = vest;
    this.noVest = false;
    this.chain = chain;
    this.bColor = bColor;
    this.wienerName = name;
    this.wienerLastName = lastName;
    this.bird = bird;
    this.nobird = false;
  }

  display() { // function to display the whole wiener
    if (canvas.getContext) {
      let head = canvas.getContext("2d");
      let eyes = canvas.getContext("2d");
      let nose = canvas.getContext("2d");
      let mouth = canvas.getContext("2d");
      let earring = canvas.getContext("2d");
      let hair = canvas.getContext("2d");
      let beard = canvas.getContext("2d");
      let shirt = canvas.getContext("2d");
      let trousers = canvas.getContext("2d");
      let leftHand = canvas.getContext("2d");
      let rightHand = canvas.getContext("2d");
      let vest = canvas.getContext("2d");
      let chain = canvas.getContext("2d");
      let background = canvas.getContext("2d");
      let bird = canvas.getContext("2d");

      //Background

      if (this.bColor == 1) {
        background.fillStyle = "rgb(80,90,81)";
      }
      if (this.bColor == 2) {
        background.fillStyle = "rgb(70,60,65)";
      }
      if (this.bColor == 3) {
        background.fillStyle = "rgb(80,70,80)";
      }
      if (this.bColor == 4) {
        background.fillStyle = "rgb(40,34,33)";
      }
      if (this.bColor == 5) {
        background.fillStyle = "rgb(70,11,27)";
      }
      background.fillRect(0, 0, 960, 960);

      /////////// Male ///////////

      if (this.sex == 1) {
        // Head

        if (this.sColor == 1) {
          // White Skin Tone
          head.fillStyle = "rgb(255,221,205)";
          head.fillRect(390, 120, 120, 30);
          head.fillRect(360, 150, 180, 240);
          head.fillRect(330, 180, 30, 90);
          head.fillRect(540, 180, 30, 90);
          head.fillRect(390, 390, 120, 90);
          head.fillRect(420, 480, 60, 30);
        }
        if (this.sColor == 2) {
          // Black Skin Tone
          head.fillStyle = "rgb(165,107,70)";
          head.fillRect(390, 120, 120, 30);
          head.fillRect(360, 150, 180, 240);
          head.fillRect(330, 180, 30, 90);
          head.fillRect(540, 180, 30, 90);
          head.fillRect(390, 390, 120, 90);
          head.fillRect(420, 480, 60, 30);
        }
        if (this.sColor == 3) {
          // Brown Skin Tone
          head.fillStyle = "rgb(200,161,135)";
          head.fillRect(390, 120, 120, 30);
          head.fillRect(360, 150, 180, 240);
          head.fillRect(330, 180, 30, 90);
          head.fillRect(540, 180, 30, 90);
          head.fillRect(390, 390, 120, 90);
          head.fillRect(420, 480, 60, 30);
        }

        // Eyes

        if (this.eyes == 1) {
          // eyes further appart
          if (this.eColor == 1) {
            // Black
            eyes.fillStyle = "rgb(0,0,0)";
            eyes.fillRect(420, 210, 30, 30);
            eyes.fillRect(510, 210, 30, 30);
          }
          if (this.eColor == 2) {
            // Brown
            eyes.fillStyle = "rgb(100,50,40)";
            eyes.fillRect(420, 210, 30, 30);
            eyes.fillRect(510, 210, 30, 30);
          }
          if (this.eColor == 3) {
            // Green
            eyes.fillStyle = "rgb(0,85,30)";
            eyes.fillRect(420, 210, 30, 30);
            eyes.fillRect(510, 210, 30, 30);
          }
          if (this.eColor == 4) {
            // Blue
            eyes.fillStyle = "rgb(0,89,119)";
            eyes.fillRect(420, 210, 30, 30);
            eyes.fillRect(510, 210, 30, 30);
          }
        }
        if (this.eyes == 2) {
          // eyes close together
          if (this.eColor == 1) {
            eyes.fillStyle = "rgb(0,0,0)";
            eyes.fillRect(420, 210, 30, 30);
            eyes.fillRect(480, 210, 30, 30);
          }
          if (this.eColor == 2) {
            eyes.fillStyle = "rgb(100,50,40)";
            eyes.fillRect(420, 210, 30, 30);
            eyes.fillRect(480, 210, 30, 30);
          }
          if (this.eColor == 3) {
            eyes.fillStyle = "rgb(0,85,30)";
            eyes.fillRect(420, 210, 30, 30);
            eyes.fillRect(480, 210, 30, 30);
          }
          if (this.eColor == 4) {
            eyes.fillStyle = "rgb(0,89,119)";
            eyes.fillRect(420, 210, 30, 30);
            eyes.fillRect(480, 210, 30, 30);
          }
        }

        // Nose

        if (this.sColor == 1) {
          if (this.nose == 1) {
            // horizontal
            nose.fillStyle = "rgb(227,182,185)";
            nose.fillRect(450, 270, 60, 30);
          }
          if (this.nose == 2) {
            // Middle
            nose.fillStyle = "rgb(227,182,185)";
            nose.fillRect(450, 270, 30, 30);
          }
          if (this.nose == 3) {
            // vertical
            nose.fillStyle = "rgb(227,182,185)";
            nose.fillRect(450, 240, 30, 60);
          }
          if (this.nose == 4) {
            // to the Left
            nose.fillStyle = "rgb(227,182,185)";
            nose.fillRect(480, 270, 30, 30);
          }
          if (this.nose == 5) {
            // sunglasses
            nose.fillStyle = "rgb(227,182,185)";
            nose.fillRect(450, 240, 30, 60);
            nose.fillStyle = "rgb(0,0,50)";
            nose.fillRect(390, 210, 60, 60);
            nose.fillRect(480, 210, 60, 60);
            nose.fillRect(450, 210, 30, 30);
          }
        }
        if (this.sColor == 2) {
          if (this.nose == 1) {
            nose.fillStyle = "rgb(170,130,80)";
            nose.fillRect(450, 270, 60, 30);
          }
          if (this.nose == 2) {
            nose.fillStyle = "rgb(170,130,80)";
            nose.fillRect(450, 270, 30, 30);
          }
          if (this.nose == 3) {
            nose.fillStyle = "rgb(170,130,80)";
            nose.fillRect(450, 240, 30, 60);
          }
          if (this.nose == 4) {
            nose.fillStyle = "rgb(170,130,80)";
            nose.fillRect(480, 270, 30, 30);
          }
          if (this.nose == 5) {
            // sunglasses
            nose.fillStyle = "rgb(170,130,80)";
            nose.fillRect(450, 240, 30, 60);
            nose.fillStyle = "rgb(0,0,50)";
            nose.fillRect(390, 210, 60, 60);
            nose.fillRect(480, 210, 60, 60);
            nose.fillRect(450, 210, 30, 30);
          }
        }
        if (this.sColor == 3) {
          if (this.nose == 1) {
            nose.fillStyle = "rgb(165,122,120)";
            nose.fillRect(450, 270, 60, 30);
          }
          if (this.nose == 2) {
            nose.fillStyle = "rgb(165,122,120)";
            nose.fillRect(450, 270, 30, 30);
          }
          if (this.nose == 3) {
            nose.fillStyle = "rgb(165,122,120)";
            nose.fillRect(450, 240, 30, 60);
          }
          if (this.nose == 4) {
            nose.fillStyle = "rgb(165,122,120)";
            nose.fillRect(480, 270, 30, 30);
          }
          if (this.nose == 5) {
            // sunglasses
            nose.fillStyle = "rgb(165,122,120)";
            nose.fillRect(450, 240, 30, 60);
            nose.fillStyle = "rgb(0,0,50)";
            nose.fillRect(390, 210, 60, 60);
            nose.fillRect(480, 210, 60, 60);
            nose.fillRect(450, 210, 30, 30);
          }
        }

        // Beard (male only) could count as head band or a purse for females

        if (this.beard == 1) {
          // Blonde Stache
          beard.fillStyle = "rgb(192,178,87)";
          beard.fillRect(390, 300, 120, 30);
        }
        if (this.beard == 2) {
          // Black Stache
          beard.fillStyle = "rgb(0,0,0)";
          beard.fillRect(420, 300, 90, 30);
        }
        if (this.beard == 3) {
          // Ginger Stache
          beard.fillStyle = "rgb(242,130,63)";
          beard.fillRect(420, 300, 90, 30);
        }
        if (this.beard == 4) {
          // Black Beard
          beard.fillStyle = "rgb(0,0,0)";
          beard.fillRect(360, 270, 30, 120);
          beard.fillRect(390, 300, 150, 90);
          beard.fillRect(390, 390, 120, 30);
        }
        if (this.beard == 5) {
          // Ginger Beard
          beard.fillStyle = "rgb(242,130,63)";
          beard.fillRect(360, 270, 30, 120);
          beard.fillRect(390, 300, 150, 90);
          beard.fillRect(390, 390, 120, 30);
        }
        if (this.beard == 6) {
          // Blonde Beard
          beard.fillStyle = "rgb(192,178,87)";
          beard.fillRect(360, 270, 30, 120);
          beard.fillRect(390, 300, 150, 90);
          beard.fillRect(390, 390, 120, 30);
        }

        // Mouth

        if (this.mouth == 1) {
          // Normal Mouth (White)
          mouth.fillStyle = "rgb(255,255,255)";
          mouth.fillRect(420, 330, 60, 30);
        }
        if (this.mouth == 2) {
          // Drooling saliva
          mouth.fillStyle = "rgb(255,255,255)";
          mouth.fillRect(420, 330, 60, 30);
          mouth.fillStyle = "rgb(211,227,188)";
          mouth.fillRect(420, 360, 30, 30);
        }
        if (this.mouth == 3) {
          // Drooling Mustard
          mouth.fillStyle = "rgb(255,255,255)";
          mouth.fillRect(420, 330, 60, 30);
          mouth.fillStyle = "rgb(254,146,0)";
          mouth.fillRect(420, 360, 30, 30);
        }
        if (this.mouth == 4) {
          // Open Mouth
          mouth.fillStyle = "rgb(255,255,255)";
          mouth.fillRect(420, 330, 60, 30);
          mouth.fillStyle = "rgb(46,46,46)";
          mouth.fillRect(420, 360, 60, 30);
        }

        // Earrings

        if (this.earring == 1) {
          // Right Ear, Gold Earring
          earring.fillStyle = "rgb(255,255,12)";
          earring.fillRect(330, 270, 30, 30);
        }
        if (this.earring == 2) {
          // Left Ear, Gold Earring
          earring.fillStyle = "rgb(225,200,100)";
          earring.fillRect(540, 270, 30, 30);
        }
        if (this.earring == 3) {
          // Right Ear, Silver Earring
          earring.fillStyle = "rgb(192,192,192)";
          earring.fillRect(330, 180, 30, 30);
        }

        //Shirt

        if (this.shirt == 1) {
          // Black Shirt
          shirt.fillStyle = "rgb(0,0,0)";
          shirt.fillRect(360, 510, 180, 240);
          shirt.fillRect(300, 450, 60, 60);
          shirt.fillRect(540, 450, 60, 60);
          shirt.fillRect(510, 450, 30, 60);
          shirt.fillRect(360, 450, 30, 60);
          shirt.fillRect(390, 480, 30, 30);
          shirt.fillRect(480, 480, 30, 30);

          if (this.sColor == 1) {
            shirt.fillStyle = "rgb(255,221,205)";
            shirt.fillRect(240, 450, 60, 60);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(600, 450, 60, 60);
            shirt.fillRect(660, 360, 30, 120);
          }
          if (this.sColor == 2) {
            shirt.fillStyle = "rgb(165,107,70)";
            shirt.fillRect(240, 450, 60, 60);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(600, 450, 60, 60);
            shirt.fillRect(660, 360, 30, 120);
          }
          if (this.sColor == 3) {
            shirt.fillStyle = "rgb(200,161,135)";
            shirt.fillRect(240, 450, 60, 60);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(600, 450, 60, 60);
            shirt.fillRect(660, 360, 30, 120);
          }
        }
        if (this.shirt == 2) {
          // Yellow Happy Face Shirt
          shirt.fillStyle = "rgb(255,255,0)";
          shirt.fillRect(360, 510, 180, 240);
          shirt.fillRect(300, 450, 60, 60);
          shirt.fillRect(540, 450, 60, 60);
          shirt.fillRect(510, 450, 30, 60);
          shirt.fillRect(360, 450, 30, 60);
          shirt.fillRect(390, 480, 30, 30);
          shirt.fillRect(480, 480, 30, 30);
          shirt.fillStyle = "rgb(0,0,0)";
          shirt.fillRect(480, 570, 30, 30);
          shirt.fillRect(390, 570, 30, 30);
          shirt.fillRect(480, 630, 30, 30);
          shirt.fillRect(390, 630, 30, 30);
          shirt.fillRect(420, 660, 60, 30);
          if (this.sColor == 1) {
            shirt.fillStyle = "rgb(255,221,205)";
            shirt.fillRect(240, 450, 60, 60);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(600, 450, 60, 60);
            shirt.fillRect(660, 360, 30, 120);
          }
          if (this.sColor == 2) {
            shirt.fillStyle = "rgb(165,107,70)";
            shirt.fillRect(240, 450, 60, 60);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(600, 450, 60, 60);
            shirt.fillRect(660, 360, 30, 120);
          }
          if (this.sColor == 3) {
            shirt.fillStyle = "rgb(200,161,135)";
            shirt.fillRect(240, 450, 60, 60);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(600, 450, 60, 60);
            shirt.fillRect(660, 360, 30, 120);
          }
        }
        if (this.shirt == 3) {
          // Green Shirt
          shirt.fillStyle = "rgb(110,139,61)";
          shirt.fillRect(360, 510, 180, 240);
          shirt.fillRect(300, 450, 60, 60);
          shirt.fillRect(540, 450, 60, 60);
          shirt.fillRect(510, 450, 30, 60);
          shirt.fillRect(360, 450, 30, 60);
          shirt.fillRect(390, 480, 30, 30);
          shirt.fillRect(480, 480, 30, 30);
          if (this.sColor == 1) {
            shirt.fillStyle = "rgb(255,221,205)";
            shirt.fillRect(240, 450, 60, 60);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(600, 450, 60, 60);
            shirt.fillRect(660, 360, 30, 120);
          }
          if (this.sColor == 2) {
            shirt.fillStyle = "rgb(165,107,70)";
            shirt.fillRect(240, 450, 60, 60);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(600, 450, 60, 60);
            shirt.fillRect(660, 360, 30, 120);
          }
          if (this.sColor == 3) {
            shirt.fillStyle = "rgb(200,161,135)";
            shirt.fillRect(240, 450, 60, 60);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(600, 450, 60, 60);
            shirt.fillRect(660, 360, 30, 120);
          }
        }
        if (this.shirt == 4) {
          // White Sad Face Shirt
          shirt.fillStyle = "rgb(255,255,255)";
          shirt.fillRect(360, 510, 180, 240);
          shirt.fillRect(300, 450, 60, 60);
          shirt.fillRect(540, 450, 60, 60);
          shirt.fillRect(510, 450, 30, 60);
          shirt.fillRect(360, 450, 30, 60);
          shirt.fillRect(390, 480, 30, 30);
          shirt.fillRect(480, 480, 30, 30);
          shirt.fillStyle = "rgb(0,0,0)";
          shirt.fillRect(480, 570, 30, 30);
          shirt.fillRect(390, 570, 30, 30);
          shirt.fillRect(480, 660, 30, 30);
          shirt.fillRect(390, 660, 30, 30);
          shirt.fillRect(420, 630, 60, 30);
          if (this.sColor == 1) {
            shirt.fillStyle = "rgb(255,221,205)";
            shirt.fillRect(240, 450, 60, 60);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(600, 450, 60, 60);
            shirt.fillRect(660, 360, 30, 120);
          }
          if (this.sColor == 2) {
            shirt.fillStyle = "rgb(165,107,70)";
            shirt.fillRect(240, 450, 60, 60);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(600, 450, 60, 60);
            shirt.fillRect(660, 360, 30, 120);
          }
          if (this.sColor == 3) {
            shirt.fillStyle = "rgb(200,161,135)";
            shirt.fillRect(240, 450, 60, 60);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(600, 450, 60, 60);
            shirt.fillRect(660, 360, 30, 120);
          }
        }
        if (this.shirt == 5) {
          // Pink PoloShirt
          shirt.fillStyle = "rgb(255,182,193)";
          shirt.fillRect(360, 510, 180, 240);
          shirt.fillRect(300, 450, 60, 60);
          shirt.fillRect(540, 450, 60, 60);
          shirt.fillRect(510, 450, 30, 60);
          shirt.fillRect(360, 450, 30, 60);
          shirt.fillRect(390, 480, 30, 30);

          shirt.fillRect(480, 480, 30, 30);

          shirt.fillStyle = "rgb(255,255,255)";
          shirt.fillRect(480, 450, 30, 30);
          shirt.fillRect(390, 450, 30, 30);
          shirt.fillRect(360, 420, 30, 30);
          shirt.fillRect(420, 480, 60, 30);
          shirt.fillRect(510, 420, 30, 30);
          shirt.fillRect(450, 510, 30, 30);
          shirt.fillRect(600, 450, 30, 60);
          shirt.fillRect(270, 450, 30, 60);

          if (this.sColor == 1) {
            shirt.fillStyle = "rgb(255,221,205)";
            shirt.fillRect(240, 450, 60, 60);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(600, 450, 60, 60);
            shirt.fillRect(660, 360, 30, 120);
          }
          if (this.sColor == 2) {
            shirt.fillStyle = "rgb(165,107,70)";
            shirt.fillRect(240, 450, 60, 60);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(600, 450, 60, 60);
            shirt.fillRect(660, 360, 30, 120);
          }
          if (this.sColor == 3) {
            shirt.fillStyle = "rgb(200,161,135)";
            shirt.fillRect(240, 450, 60, 60);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(600, 450, 60, 60);
            shirt.fillRect(660, 360, 30, 120);
          }
        }
        if (this.shirt == 6) {
          // Light Blue Polo Shirt
          shirt.fillStyle = "rgb(176,224,230)";
          shirt.fillRect(360, 510, 180, 240);
          shirt.fillRect(300, 450, 60, 60);
          shirt.fillRect(540, 450, 60, 60);
          shirt.fillRect(510, 450, 30, 60);
          shirt.fillRect(360, 450, 30, 60);
          shirt.fillRect(390, 480, 30, 30);

          shirt.fillRect(480, 480, 30, 30);

          shirt.fillStyle = "rgb(255,255,255)";
          shirt.fillRect(480, 450, 30, 30);
          shirt.fillRect(390, 450, 30, 30);
          shirt.fillRect(360, 420, 30, 30);
          shirt.fillRect(420, 480, 60, 30);
          shirt.fillRect(510, 420, 30, 30);
          shirt.fillRect(450, 510, 30, 30);
          shirt.fillRect(600, 450, 30, 60);
          shirt.fillRect(270, 450, 30, 60);
          if (this.sColor == 1) {
            shirt.fillStyle = "rgb(255,221,205)";
            shirt.fillRect(240, 450, 60, 60);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(600, 450, 60, 60);
            shirt.fillRect(660, 360, 30, 120);
          }
          if (this.sColor == 2) {
            shirt.fillStyle = "rgb(165,107,70)";
            shirt.fillRect(240, 450, 60, 60);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(600, 450, 60, 60);
            shirt.fillRect(660, 360, 30, 120);
          }
          if (this.sColor == 3) {
            shirt.fillStyle = "rgb(200,161,135)";
            shirt.fillRect(240, 450, 60, 60);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(600, 450, 60, 60);
            shirt.fillRect(660, 360, 30, 120);
          }
        }
        if (this.shirt == 7) {
          // Green Polo shirt
          shirt.fillStyle = "rgb(56,163,114)";
          shirt.fillRect(360, 510, 180, 240);
          shirt.fillRect(300, 450, 60, 60);
          shirt.fillRect(540, 450, 60, 60);
          shirt.fillRect(510, 450, 30, 60);
          shirt.fillRect(360, 450, 30, 60);
          shirt.fillRect(390, 480, 30, 30);

          shirt.fillRect(480, 480, 30, 30);

          shirt.fillStyle = "rgb(255,255,255)";
          shirt.fillRect(480, 450, 30, 30);
          shirt.fillRect(390, 450, 30, 30);
          shirt.fillRect(360, 420, 30, 30);
          shirt.fillRect(420, 480, 60, 30);
          shirt.fillRect(510, 420, 30, 30);
          shirt.fillRect(450, 510, 30, 30);
          shirt.fillRect(600, 450, 30, 60);
          shirt.fillRect(270, 450, 30, 60);
          if (this.sColor == 1) {
            shirt.fillStyle = "rgb(255,221,205)";
            shirt.fillRect(240, 450, 60, 60);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(600, 450, 60, 60);
            shirt.fillRect(660, 360, 30, 120);
          }
          if (this.sColor == 2) {
            shirt.fillStyle = "rgb(165,107,70)";
            shirt.fillRect(240, 450, 60, 60);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(600, 450, 60, 60);
            shirt.fillRect(660, 360, 30, 120);
          }
          if (this.sColor == 3) {
            shirt.fillStyle = "rgb(200,161,135)";
            shirt.fillRect(240, 450, 60, 60);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(600, 450, 60, 60);
            shirt.fillRect(660, 360, 30, 120);
          }
        }
        if (this.shirt == 8) {
          // Shirt with no arms
          if (this.sColor == 1) {
            shirt.fillStyle = "rgb(255,221,205)";
            shirt.fillRect(240, 450, 420, 60);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(600, 450, 60, 60);
            shirt.fillRect(660, 360, 30, 120);
          }
          if (this.sColor == 2) {
            shirt.fillStyle = "rgb(165,107,70)";
            shirt.fillRect(240, 450, 420, 60);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(600, 450, 60, 60);
            shirt.fillRect(660, 360, 30, 120);
          }
          if (this.sColor == 3) {
            shirt.fillStyle = "rgb(200,161,135)";
            shirt.fillRect(240, 450, 420, 60);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(600, 450, 60, 60);
            shirt.fillRect(660, 360, 30, 120);
          }

          shirt.fillStyle = "rgb(255,255,255)";
          shirt.fillRect(360, 510, 180, 240);

          shirt.fillRect(510, 450, 30, 60);
          shirt.fillRect(360, 450, 30, 60);

          shirt.fillStyle = "rgb(200,200,200)";
          shirt.fillRect(480, 640, 30, 60);
          shirt.fillRect(390, 580, 30, 30);
        }
        if (this.shirt == 9) {
          // Red Hoodie
          shirt.fillStyle = "rgb(125,0,0)";
          shirt.fillRect(360, 510, 180, 240);
          shirt.fillRect(300, 450, 60, 60);
          shirt.fillRect(540, 450, 60, 60);
          shirt.fillRect(510, 450, 30, 60);
          shirt.fillRect(360, 450, 30, 60);
          shirt.fillRect(390, 480, 30, 30);
          shirt.fillRect(480, 480, 30, 30);
          shirt.fillRect(600, 450, 60, 60);
          shirt.fillRect(660, 360, 30, 120);
          shirt.fillRect(240, 450, 60, 60);
          shirt.fillRect(210, 480, 30, 180);
          shirt.fillRect(360, 390, 30, 60);
          shirt.fillRect(360, 390, 30, 60);
          shirt.fillRect(510, 390, 30, 60);
          shirt.fillRect(540, 270, 30, 120);
          shirt.fillRect(570, 150, 30, 120);
          shirt.fillRect(540, 120, 30, 60);
          shirt.fillRect(510, 90, 30, 60);
          shirt.fillRect(330, 90, 180, 30);
          shirt.fillRect(360, 60, 150, 30);
          shirt.fillRect(330, 90, 60, 60);
          shirt.fillRect(300, 120, 60, 60);
          shirt.fillRect(270, 180, 60, 120);
          shirt.fillRect(300, 270, 60, 90);
          shirt.fillRect(330, 360, 30, 60);

          shirt.fillRect(210, 480, 30, 180);
          shirt.fillRect(360, 390, 30, 60);
          shirt.fillRect(360, 390, 30, 60);
          shirt.fillRect(510, 390, 30, 60);
          shirt.fillStyle = "rgb(170,0,0)";
          shirt.fillRect(480, 480, 30, 90);
          shirt.fillRect(390, 480, 30, 60);
          shirt.fillStyle = "rgb(255,255,255)";
          shirt.fillRect(480, 570, 30, 30);
          shirt.fillRect(390, 540, 30, 30);
        }
        if (this.shirt == 10) {
          // Black Hoodie
          shirt.fillStyle = "rgb(50,50,50)";
          shirt.fillRect(360, 510, 180, 240);
          shirt.fillRect(300, 450, 60, 60);
          shirt.fillRect(540, 450, 60, 60);
          shirt.fillRect(510, 450, 30, 60);
          shirt.fillRect(360, 450, 30, 60);
          shirt.fillRect(390, 480, 30, 30);
          shirt.fillRect(480, 480, 30, 30);
          shirt.fillRect(600, 450, 60, 60);
          shirt.fillRect(660, 360, 30, 120);
          shirt.fillRect(240, 450, 60, 60);
          shirt.fillRect(210, 480, 30, 180);
          shirt.fillRect(360, 390, 30, 60);
          shirt.fillRect(360, 390, 30, 60);
          shirt.fillRect(510, 390, 30, 60);
          shirt.fillRect(540, 270, 30, 120);
          shirt.fillRect(570, 150, 30, 120);
          shirt.fillRect(540, 120, 30, 60);
          shirt.fillRect(510, 90, 30, 60);
          shirt.fillRect(330, 90, 180, 30);
          shirt.fillRect(360, 60, 150, 30);
          shirt.fillRect(330, 90, 60, 60);
          shirt.fillRect(300, 120, 60, 60);
          shirt.fillRect(270, 180, 60, 120);
          shirt.fillRect(300, 270, 60, 90);
          shirt.fillRect(330, 360, 30, 60);

          shirt.fillRect(210, 480, 30, 180);
          shirt.fillRect(360, 390, 30, 60);
          shirt.fillRect(360, 390, 30, 60);
          shirt.fillRect(510, 390, 30, 60);
          shirt.fillStyle = "rgb(90,90,90)";
          shirt.fillRect(480, 480, 30, 90);
          shirt.fillRect(390, 480, 30, 60);
          shirt.fillStyle = "rgb(255,255,255)";
          shirt.fillRect(480, 570, 30, 30);
          shirt.fillRect(390, 540, 30, 30);
        }
        if (this.shirt == 11) {
          // Pink Suit
          shirt.fillStyle = "rgb(255,0,250)";
          shirt.fillRect(360, 510, 180, 240);
          shirt.fillRect(300, 450, 60, 60);
          shirt.fillRect(540, 450, 60, 60);
          shirt.fillRect(510, 450, 30, 60);
          shirt.fillRect(360, 450, 30, 60);
          shirt.fillRect(390, 480, 30, 30);
          shirt.fillRect(480, 480, 30, 30);
          shirt.fillRect(600, 450, 60, 60);
          shirt.fillRect(660, 360, 30, 120);
          shirt.fillRect(240, 450, 60, 60);
          shirt.fillRect(210, 480, 30, 180);
          shirt.fillRect(390, 450, 30, 30);
          shirt.fillRect(360, 420, 30, 30);
          shirt.fillRect(510, 420, 30, 30);
          shirt.fillRect(480, 450, 30, 30);

          shirt.fillStyle = "rgb(255,255,255)";
          shirt.fillRect(420, 510, 60, 210);
          shirt.fillRect(390, 720, 120, 30);
          shirt.fillRect(420, 450, 30, 30);
          shirt.fillRect(390, 420, 30, 30);
          shirt.fillRect(480, 420, 30, 30);
          shirt.fillRect(540, 420, 30, 30);
          shirt.fillRect(510, 390, 30, 30);
          shirt.fillRect(330, 390, 60, 30);
          shirt.fillRect(660, 360, 30, 30);
          shirt.fillRect(210, 630, 30, 30);

          shirt.fillStyle = "rgb(0,0,0)";
          shirt.fillRect(450, 480, 30, 210);
          shirt.fillRect(420, 480, 30, 30);
        }
        if (this.shirt == 12) {
          // Gray Suit
          shirt.fillStyle = "rgb(123,123,123)";
          shirt.fillRect(360, 510, 180, 240);
          shirt.fillRect(300, 450, 60, 60);
          shirt.fillRect(540, 450, 60, 60);
          shirt.fillRect(510, 450, 30, 60);
          shirt.fillRect(360, 450, 30, 60);
          shirt.fillRect(390, 480, 30, 30);
          shirt.fillRect(480, 480, 30, 30);
          shirt.fillRect(600, 450, 60, 60);
          shirt.fillRect(660, 360, 30, 120);
          shirt.fillRect(240, 450, 60, 60);
          shirt.fillRect(210, 480, 30, 180);
          shirt.fillRect(390, 450, 30, 30);
          shirt.fillRect(360, 420, 30, 30);
          shirt.fillRect(510, 420, 30, 30);
          shirt.fillRect(480, 450, 30, 30);
          shirt.fillStyle = "rgb(255,255,255)";
          shirt.fillRect(420, 510, 60, 210);
          shirt.fillRect(390, 720, 120, 30);
          shirt.fillRect(420, 450, 30, 30);
          shirt.fillRect(390, 420, 30, 30);
          shirt.fillRect(480, 420, 30, 30);
          shirt.fillRect(540, 420, 30, 30);
          shirt.fillRect(510, 390, 30, 30);
          shirt.fillRect(330, 390, 60, 30);
          shirt.fillRect(660, 360, 30, 30);
          shirt.fillRect(210, 630, 30, 30);
          shirt.fillStyle = "rgb(0,0,0)";
          shirt.fillRect(450, 480, 30, 210);
          shirt.fillRect(420, 480, 30, 30);
        }
        if (this.shirt == 13) {
          // Yellow Suit
          shirt.fillStyle = "rgb(246,227,57)";
          shirt.fillRect(360, 510, 180, 240);
          shirt.fillRect(300, 450, 60, 60);
          shirt.fillRect(540, 450, 60, 60);
          shirt.fillRect(510, 450, 30, 60);
          shirt.fillRect(360, 450, 30, 60);
          shirt.fillRect(390, 480, 30, 30);
          shirt.fillRect(480, 480, 30, 30);
          shirt.fillRect(600, 450, 60, 60);
          shirt.fillRect(660, 360, 30, 120);
          shirt.fillRect(240, 450, 60, 60);
          shirt.fillRect(210, 480, 30, 180);
          shirt.fillRect(390, 450, 30, 30);
          shirt.fillRect(360, 420, 30, 30);
          shirt.fillRect(510, 420, 30, 30);
          shirt.fillRect(480, 450, 30, 30);
          shirt.fillStyle = "rgb(255,255,255)";
          shirt.fillRect(420, 510, 60, 210);
          shirt.fillRect(390, 720, 120, 30);
          shirt.fillRect(420, 450, 30, 30);
          shirt.fillRect(390, 420, 30, 30);
          shirt.fillRect(480, 420, 30, 30);
          shirt.fillRect(540, 420, 30, 30);
          shirt.fillRect(510, 390, 30, 30);
          shirt.fillRect(330, 390, 60, 30);
          shirt.fillRect(660, 360, 30, 30);
          shirt.fillRect(210, 630, 30, 30);
          shirt.fillStyle = "rgb(0,0,0)";
          shirt.fillRect(450, 480, 30, 210);
          shirt.fillRect(420, 480, 30, 30);
        }
        if (this.shirt == 14) {
          // Stripped Pillover
          shirt.fillStyle = "rgb(90,120,70)";
          shirt.fillRect(300, 450, 60, 60);
          shirt.fillRect(540, 450, 60, 60);
          shirt.fillRect(510, 450, 30, 60);
          shirt.fillRect(600, 450, 60, 60);
          shirt.fillRect(660, 390, 30, 90);
          shirt.fillRect(240, 450, 60, 60);
          shirt.fillRect(210, 480, 30, 150);
          shirt.fillRect(480, 450, 60, 300);
          shirt.fillRect(360, 450, 60, 300);
          shirt.fillRect(420, 450, 60, 300);
          shirt.fillRect(390, 420, 120, 30);

          shirt.fillStyle = "rgb(60,90,40)";
          shirt.fillRect(360, 450, 180, 30);
          shirt.fillRect(360, 510, 180, 30);
          shirt.fillRect(360, 570, 180, 30);
          shirt.fillRect(360, 630, 180, 30);
          shirt.fillRect(360, 690, 180, 30);
          shirt.fillRect(330, 450, 30, 60);
          shirt.fillRect(270, 450, 30, 60);
          shirt.fillRect(210, 480, 30, 30);
          shirt.fillRect(210, 540, 30, 30);
          shirt.fillRect(210, 600, 30, 30);
          shirt.fillRect(540, 450, 30, 60);
          shirt.fillRect(600, 450, 30, 60);
          shirt.fillRect(660, 450, 30, 30);
          shirt.fillRect(660, 390, 30, 30);
          shirt.fillRect(660, 330, 30, 30);
          if (this.sColor == 1) {
            shirt.fillStyle = "rgb(255,221,205)";
            shirt.fillRect(660, 360, 30, 30);
            shirt.fillRect(210, 630, 30, 30);
          }
          if (this.sColor == 2) {
            shirt.fillStyle = "rgb(165,107,70)";
            shirt.fillRect(660, 360, 30, 30);
            shirt.fillRect(210, 630, 30, 30);
          }
          if (this.sColor == 3) {
            shirt.fillStyle = "rgb(200,161,135)";
            shirt.fillRect(660, 360, 30, 30);
            shirt.fillRect(210, 630, 30, 30);
          }
        }
        if (this.shirt == 15) {
          // Stripped Pollover orange
          shirt.fillStyle = "rgb(155,65,1)";
          shirt.fillRect(300, 450, 60, 60);
          shirt.fillRect(540, 450, 60, 60);
          shirt.fillRect(510, 450, 30, 60);
          shirt.fillRect(600, 450, 60, 60);
          shirt.fillRect(660, 390, 30, 90);
          shirt.fillRect(240, 450, 60, 60);
          shirt.fillRect(210, 480, 30, 150);
          shirt.fillRect(480, 450, 60, 300);
          shirt.fillRect(360, 450, 60, 300);
          shirt.fillRect(420, 450, 60, 300);
          shirt.fillRect(390, 420, 120, 30);

          shirt.fillStyle = "rgb(185,95,1)";
          shirt.fillRect(360, 450, 180, 30);
          shirt.fillRect(360, 510, 180, 30);
          shirt.fillRect(360, 570, 180, 30);
          shirt.fillRect(360, 630, 180, 30);
          shirt.fillRect(360, 690, 180, 30);
          shirt.fillRect(330, 450, 30, 60);
          shirt.fillRect(270, 450, 30, 60);
          shirt.fillRect(210, 480, 30, 30);
          shirt.fillRect(210, 540, 30, 30);
          shirt.fillRect(210, 600, 30, 30);
          shirt.fillRect(540, 450, 30, 60);
          shirt.fillRect(600, 450, 30, 60);
          shirt.fillRect(660, 450, 30, 30);
          shirt.fillRect(660, 390, 30, 30);
          shirt.fillRect(660, 330, 30, 30);
          if (this.sColor == 1) {
            shirt.fillStyle = "rgb(255,221,205)";
            shirt.fillRect(660, 360, 30, 30);
            shirt.fillRect(210, 630, 30, 30);
          }
          if (this.sColor == 2) {
            shirt.fillStyle = "rgb(165,107,70)";
            shirt.fillRect(660, 360, 30, 30);
            shirt.fillRect(210, 630, 30, 30);
          }
          if (this.sColor == 3) {
            shirt.fillStyle = "rgb(200,161,135)";
            shirt.fillRect(660, 360, 30, 30);
            shirt.fillRect(210, 630, 30, 30);
          }
        }

        // Chain
        if (this.chain == 1) {
          // Gold Cross
          chain.fillStyle = "rgb(218,165,32)";
          chain.fillRect(420, 480, 60, 30);
          chain.fillRect(390, 450, 30, 30);
          chain.fillRect(480, 450, 30, 30);
          if (this.vest != 1 && this.vest != 2 && this.shirt <= 8) {
            chain.fillRect(450, 510, 30, 120);
            chain.fillRect(420, 540, 90, 30);
          }
        }
        if (this.chain == 2) {
          // Gold Chain
          chain.fillStyle = "rgb(218,165,32)";
          chain.fillRect(420, 480, 60, 30);
          chain.fillRect(390, 450, 30, 30);
          chain.fillRect(480, 450, 30, 30);
        }
        if (this.chain == 3) {
          // Silver Cross
          chain.fillStyle = "rgb(192,192,192)";
          chain.fillRect(420, 480, 60, 30);
          chain.fillRect(390, 450, 30, 30);
          chain.fillRect(480, 450, 30, 30);
          if (this.vest != 1 && this.vest != 2 && this.shirt <= 8) {
            chain.fillRect(450, 510, 30, 120);
            chain.fillRect(420, 540, 90, 30);
          }
        }
        if (this.chain == 4) {
          // Silver Chain
          chain.fillStyle = "rgb(192,192,192)";
          chain.fillRect(420, 480, 60, 30);
          chain.fillRect(390, 450, 30, 30);
          chain.fillRect(480, 450, 30, 30);
        }

        // Vest
        if (this.vest == 1) {
          // Green Vest
          vest.fillStyle = "rgb(43,45,24)";

          vest.fillRect(300, 450, 60, 60);
          vest.fillRect(540, 450, 60, 60);
          vest.fillRect(510, 450, 30, 60);

          vest.fillRect(600, 450, 60, 60);
          vest.fillRect(660, 360, 30, 120);
          vest.fillRect(240, 450, 60, 60);
          vest.fillRect(210, 480, 30, 180);

          vest.fillRect(480, 450, 60, 300);
          vest.fillRect(360, 450, 60, 300);

          vest.fillStyle = "rgb(143,145,124)";
          vest.fillRect(330, 420, 90, 30);
          vest.fillRect(480, 420, 90, 30);
          vest.fillRect(510, 660, 30, 30);
          vest.fillRect(360, 660, 30, 30);
        }
        if (this.vest == 2) {
          // Light Green Vest
          vest.fillStyle = "rgb(143,145,124)";

          vest.fillRect(300, 450, 60, 60);
          vest.fillRect(540, 450, 60, 60);
          vest.fillRect(510, 450, 30, 60);

          vest.fillRect(600, 450, 60, 60);
          vest.fillRect(660, 360, 30, 120);
          vest.fillRect(240, 450, 60, 60);
          vest.fillRect(210, 480, 30, 180);

          vest.fillRect(480, 450, 60, 300);
          vest.fillRect(360, 450, 60, 300);

          vest.fillStyle = "rgb(43,45,24)";

          vest.fillRect(330, 420, 90, 30);
          vest.fillRect(480, 420, 90, 30);
          vest.fillRect(510, 660, 30, 30);
          vest.fillRect(360, 660, 30, 30);
        }

        // Trousers
        if (this.trousers == 1) {
          // Khaki Trousers
          trousers.fillStyle = "rgb(200,155,105)";
          trousers.fillRect(360, 750, 60, 240);
          trousers.fillRect(480, 750, 60, 240);
          trousers.fillRect(420, 750, 60, 90);
          trousers.fillStyle = "rgb(170,125,85)";
          trousers.fillRect(450, 780, 30, 60);
          trousers.fillStyle = "rgb(80,80,80)";
          trousers.fillRect(360, 750, 60, 30);
          trousers.fillRect(480, 750, 60, 30);
          trousers.fillStyle = "rgb(80,80,80)";
          trousers.fillRect(360, 750, 60, 30);
          trousers.fillStyle = "rgb(225,200,100)";
          trousers.fillRect(420, 750, 60, 30);
        }
        if (this.trousers == 2) {
          // Dark Purple Trousers
          trousers.fillStyle = "rgb(50,50,105)";
          trousers.fillRect(360, 750, 60, 240);
          trousers.fillRect(480, 750, 60, 240);
          trousers.fillRect(420, 750, 60, 90);
          trousers.fillStyle = "rgb(40,40,95)";
          trousers.fillRect(450, 780, 30, 60);
          trousers.fillStyle = "rgb(95,50,23)";
          trousers.fillRect(360, 750, 60, 30);
          trousers.fillRect(480, 750, 60, 30);
          trousers.fillStyle = "rgb(95,50,23)";
          trousers.fillRect(360, 750, 60, 30);
          trousers.fillStyle = "rgb(120,120,120)";
          trousers.fillRect(420, 750, 60, 30);
        }
        if (this.trousers == 3) {
          // Black Trousers
          trousers.fillStyle = "rgb(0,0,0)";
          trousers.fillRect(360, 750, 60, 240);
          trousers.fillRect(480, 750, 60, 240);
          trousers.fillRect(420, 750, 60, 90);
          trousers.fillStyle = "rgb(121,85,71)";
          trousers.fillRect(360, 750, 60, 30);
          trousers.fillRect(480, 750, 60, 30);
          trousers.fillStyle = "rgb(158,158,158)";
          trousers.fillRect(420, 750, 60, 30);
        }
        if (this.trousers == 4) {
          // Blue Trousers
          trousers.fillStyle = "rgb(59,92,233)";
          trousers.fillRect(360, 750, 60, 240);
          trousers.fillRect(480, 750, 60, 240);
          trousers.fillRect(420, 750, 60, 90);
          trousers.fillStyle = "rgb(48,77,195)";
          trousers.fillRect(450, 780, 30, 60);
          trousers.fillStyle = "rgb(80,80,80)";
          trousers.fillRect(360, 750, 60, 30);
          trousers.fillRect(480, 750, 60, 30);
          trousers.fillStyle = "rgb(80,80,80)";
          trousers.fillRect(360, 750, 60, 30);
          trousers.fillStyle = "rgb(225,200,100)";
          trousers.fillRect(420, 750, 60, 30);
        }
        if (this.trousers == 5) {
          // Green Trousers
          trousers.fillStyle = "rgb(20,50,0)";
          trousers.fillRect(360, 750, 60, 240);
          trousers.fillRect(480, 750, 60, 240);
          trousers.fillRect(420, 750, 60, 90);
          trousers.fillStyle = "rgb(20,60,0)";
          trousers.fillRect(450, 780, 30, 60);
          trousers.fillStyle = "rgb(121,85,71)";
          trousers.fillRect(360, 750, 60, 30);
          trousers.fillRect(480, 750, 60, 30);
          trousers.fillStyle = "rgb(158,158,158)";
          trousers.fillRect(420, 750, 60, 30);
        }
        if (this.trousers == 6) {
          // Pink Suit Pants
          trousers.fillStyle = "rgb(255,0,250)";
          trousers.fillRect(360, 750, 60, 240);
          trousers.fillRect(480, 750, 60, 240);
          trousers.fillRect(420, 750, 60, 90);
          trousers.fillStyle = "rgb(255,60,250)";
          trousers.fillRect(450, 780, 30, 60);
          trousers.fillStyle = "rgb(0,0,0)";
          trousers.fillRect(360, 750, 60, 30);
          trousers.fillRect(480, 750, 60, 30);
          trousers.fillStyle = "rgb(158,158,158)";
          trousers.fillRect(420, 750, 60, 30);
        }
        if (this.trousers == 7) {
          // Gray Suit Pants
          trousers.fillStyle = "rgb(123,123,123)";
          trousers.fillRect(360, 750, 60, 240);
          trousers.fillRect(480, 750, 60, 240);
          trousers.fillRect(420, 750, 60, 90);
          trousers.fillStyle = "rgb(130,130,130)";
          trousers.fillRect(450, 780, 30, 60);
          trousers.fillStyle = "rgb(0,0,0)";
          trousers.fillRect(360, 750, 60, 30);
          trousers.fillRect(480, 750, 60, 30);
          trousers.fillStyle = "rgb(158,158,158)";
          trousers.fillRect(420, 750, 60, 30);
        }
        if (this.trousers == 8) {
          // Yellow Suit Pants
          trousers.fillStyle = "rgb(246,227,57)";
          trousers.fillRect(360, 750, 60, 240);
          trousers.fillRect(480, 750, 60, 240);
          trousers.fillRect(420, 750, 60, 90);
          trousers.fillStyle = "rgb(252,239,117)";
          trousers.fillRect(450, 780, 30, 60);
          trousers.fillStyle = "rgb(0,0,0)";
          trousers.fillRect(360, 750, 60, 30);
          trousers.fillRect(480, 750, 60, 30);
          trousers.fillStyle = "rgb(158,158,158)";
          trousers.fillRect(420, 750, 60, 30);
        }

        // Hair

        if (this.hair == 0) {
          // no hair
          this.noHair = true;
        }
        if (this.hair == 1) {
          // Green Punk hair
          hair.fillStyle = "rgb(0,200,0)";
          hair.fillRect(390, 90, 30, 30);
          hair.fillRect(420, 60, 30, 90);
          hair.fillRect(450, 30, 30, 150);
        }
        if (this.hair == 2) {
          // Black Hair
          hair.fillStyle = "rgb(0,0,0)";
          hair.fillRect(330, 150, 30, 60);
          hair.fillRect(330, 270, 30, 60);
          hair.fillRect(360, 120, 30, 120);
          hair.fillRect(390, 90, 30, 90);
          hair.fillRect(420, 90, 90, 60);
          hair.fillRect(510, 90, 30, 90);
          hair.fillRect(540, 150, 30, 60);
        }
        if (this.hair == 3) {
          // Blonde Hair
          hair.fillStyle = "rgb(230,200,0)";
          hair.fillRect(330, 150, 30, 60);
          hair.fillRect(330, 270, 30, 60);
          hair.fillRect(360, 120, 30, 120);
          hair.fillRect(390, 90, 30, 90);
          hair.fillRect(420, 90, 90, 60);
          hair.fillRect(510, 90, 30, 90);
          hair.fillRect(540, 150, 30, 60);
        }
        if (this.hair == 4) {
          // Black Elvis Hair
          hair.fillStyle = "rgb(0,0,0)";
          hair.fillRect(330, 120, 30, 90);
          hair.fillRect(360, 120, 30, 120);
          hair.fillRect(390, 90, 30, 90);
          hair.fillRect(420, 90, 30, 60);
          hair.fillRect(450, 60, 30, 150);
          hair.fillRect(480, 60, 60, 120);
          hair.fillRect(540, 60, 30, 150);
          hair.fillRect(570, 90, 30, 60);
        }
        if (this.hair == 5) {
          // Blonde Elvis Hair
          hair.fillStyle = "rgb(192,178,87)";
          hair.fillRect(330, 120, 30, 90);
          hair.fillRect(360, 120, 30, 120);
          hair.fillRect(390, 90, 30, 90);
          hair.fillRect(420, 90, 30, 60);
          hair.fillRect(450, 60, 30, 150);
          hair.fillRect(480, 60, 60, 120);
          hair.fillRect(540, 60, 30, 150);
          hair.fillRect(570, 90, 30, 60);
        }
        if (this.hair == 6) {
          // Ginger Long Hair
          hair.fillStyle = "rgb(242,130,63)";
          hair.fillRect(300, 150, 30, 180);
          hair.fillRect(330, 120, 30, 90);
          hair.fillRect(330, 270, 30, 90);
          hair.fillRect(360, 90, 30, 150);
          hair.fillRect(390, 90, 120, 60);
          hair.fillRect(450, 150, 30, 30);
          hair.fillRect(510, 90, 30, 90);
          hair.fillRect(540, 120, 30, 90);
          hair.fillRect(540, 270, 30, 30);
        }
        if (this.hair == 7) {
          // Blonde Long Hair
          hair.fillStyle = "rgb(230,200,0)";
          hair.fillRect(300, 150, 30, 180);
          hair.fillRect(330, 120, 30, 90);
          hair.fillRect(330, 270, 30, 90);
          hair.fillRect(360, 90, 30, 150);
          hair.fillRect(390, 90, 120, 60);
          hair.fillRect(450, 150, 30, 30);
          hair.fillRect(510, 90, 30, 90);
          hair.fillRect(540, 120, 30, 90);
          hair.fillRect(540, 270, 30, 30);
        }
        if (this.hair == 8) {
          // Light Blonde Long Hair
          hair.fillStyle = "rgb(192,178,87)";
          hair.fillRect(300, 150, 30, 180);
          hair.fillRect(330, 120, 30, 90);
          hair.fillRect(330, 270, 30, 90);
          hair.fillRect(360, 90, 30, 150);
          hair.fillRect(390, 90, 120, 60);
          hair.fillRect(450, 150, 30, 30);
          hair.fillRect(510, 90, 30, 90);
          hair.fillRect(540, 120, 30, 90);
          hair.fillRect(540, 270, 30, 30);
        }
        if (this.hair == 9) {
          // Nerd Brown Hair
          hair.fillStyle = "rgb(105,60,33)";
          hair.fillRect(300, 150, 30, 90);
          hair.fillRect(330, 120, 30, 90);
          hair.fillRect(360, 90, 30, 120);
          hair.fillRect(390, 90, 60, 90);
          hair.fillRect(450, 120, 30, 30);
          hair.fillRect(480, 90, 30, 60);
          hair.fillRect(510, 90, 30, 90);
          hair.fillRect(540, 120, 30, 90);
          hair.fillRect(570, 180, 30, 60);
        }

        // Animals
        if (this.bird == 0) {
          this.nobird = true;
        }
        if (this.bird == 1) {
          // bird 1
          //head
          bird.fillStyle = "rgb(255,0,0)";
          bird.fillRect(210, 270, 90, 90);
          bird.fillStyle = "rgb(200,0,0)";
          bird.fillRect(240, 240, 30, 30);

          //body
          bird.fillStyle = "rgb(255,0,0)";
          bird.fillRect(210, 360, 90, 90);
          bird.fillRect(180, 360, 150, 30);

          //feet
          bird.fillStyle = "rgb(200,0,0)";
          bird.fillRect(210, 450, 30, 30);
          bird.fillRect(240, 420, 30, 30);

          //upper wings
          bird.fillStyle = "rgb(255,200,0)";
          bird.fillRect(180, 390, 30, 30);
          bird.fillRect(300, 390, 30, 30);

          //lower wings
          bird.fillStyle = "rgb(0,0,180)";
          bird.fillRect(180, 420, 30, 90);
          bird.fillRect(300, 420, 30, 30);

          //tail
          bird.fillStyle = "rgb(200,0,0)";
          bird.fillRect(240, 510, 30, 60);

          //schnabel
          bird.fillStyle = "rgb(0,0,0)";
          bird.fillRect(240, 300, 30, 60);

          //eyes
          bird.fillStyle = "rgb(255,255,255)";
          bird.fillRect(210, 300, 30, 30);
          bird.fillRect(270, 300, 30, 30);
        }
        if (this.bird == 2) {
          // bird 2
          //head
          bird.fillStyle = "rgb(255,255,255)";
          bird.fillRect(210, 270, 90, 90);
          bird.fillStyle = "rgb(255,255,255)";
          bird.fillRect(240, 240, 30, 30);

          //body
          bird.fillStyle = "rgb(255,255,255)";
          bird.fillRect(210, 360, 90, 90);
          bird.fillRect(180, 360, 150, 30);

          //feet
          bird.fillStyle = "rgb(250,250,250)";
          bird.fillRect(210, 450, 30, 30);
          bird.fillRect(240, 420, 30, 30);

          //upper wings
          bird.fillStyle = "rgb(250,250,250)";
          bird.fillRect(180, 390, 30, 30);
          bird.fillRect(300, 390, 30, 30);

          //lower wings
          bird.fillStyle = "rgb(245,245,245)";
          bird.fillRect(180, 420, 30, 90);
          bird.fillRect(300, 420, 30, 30);

          //tail
          bird.fillStyle = "rgb(255,255,255)";
          bird.fillRect(240, 510, 30, 60);
          bird.fillStyle = "rgb(250,250,250)";
          bird.fillRect(240, 510, 30, 30);

          //schnabel
          bird.fillStyle = "rgb(255,165,0)";
          bird.fillRect(240, 330, 30, 30);

          //eyes
          bird.fillStyle = "rgb(0,0,0)";
          bird.fillRect(210, 300, 30, 30);
          bird.fillRect(270, 300, 30, 30);
        }
        if (this.bird == 3) {
          // bird 3
          //head
          bird.fillStyle = "rgb(0,0,0)";
          bird.fillRect(210, 270, 90, 90);
          bird.fillStyle = "rgb(0,0,0)";
          bird.fillRect(240, 240, 30, 30);

          //body
          bird.fillStyle = "rgb(0,0,0)";
          bird.fillRect(210, 360, 90, 90);
          bird.fillRect(180, 360, 150, 30);

          //feet
          bird.fillStyle = "rgb(20,20,20)";
          bird.fillRect(210, 450, 30, 30);
          bird.fillRect(240, 420, 30, 30);

          //upper wings
          bird.fillStyle = "rgb(0,0,0)";
          bird.fillRect(180, 390, 30, 30);
          bird.fillRect(300, 390, 30, 30);

          //lower wings
          bird.fillStyle = "rgb(0,0,0)";
          bird.fillRect(180, 420, 30, 90);
          bird.fillRect(300, 420, 30, 30);

          //tail
          bird.fillStyle = "rgb(15,15,15)";
          bird.fillRect(240, 510, 30, 60);
          bird.fillStyle = "rgb(0,0,0)";
          bird.fillRect(240, 510, 30, 30);

          //schnabel
          bird.fillStyle = "rgb(60,60,60)";
          bird.fillRect(240, 330, 30, 30);

          //eyes
          bird.fillStyle = "rgb(50,30,30)";
          bird.fillRect(210, 300, 30, 30);
          bird.fillRect(270, 300, 30, 30);
        }
        if (this.bird == 4) {
          // weasel ?
          //head
          bird.fillStyle = "rgb(51,21,4)";
          bird.fillRect(210, 330, 90, 30);

          //ears
          bird.fillRect(210, 300, 30, 30);
          bird.fillRect(270, 300, 30, 30);

          //body
          bird.fillStyle = "rgb(51,21,4)";
          bird.fillRect(210, 360, 90, 90);

          //feet
          bird.fillStyle = "rgb(51,21,4)";
          bird.fillRect(210, 450, 30, 30);
          bird.fillRect(240, 420, 30, 30);

          //tail
          bird.fillStyle = "rgb(41,11,1)";
          bird.fillRect(240, 510, 30, 90);
          bird.fillStyle = "rgb(41,11,1)";
          bird.fillRect(240, 510, 30, 30);

          //eyes
          bird.fillStyle = "rgb(230,230,230)";
          bird.fillRect(210, 360, 30, 30);
          bird.fillRect(270, 360, 30, 30);

          //nose
          bird.fillStyle = "rgb(5,5,5)";
          bird.fillRect(240, 390, 30, 30);
        }
        if (this.bird == 5) {
          // mouse
          //body
          bird.fillStyle = "rgb(140,140,140)";
          bird.fillRect(240, 390, 90, 60);

          //tail
          bird.fillStyle = "rgb(170,170,170)";
          bird.fillRect(210, 420, 30, 60);
          bird.fillRect(180, 480, 30, 30);

          //eye
          bird.fillStyle = "rgb(0,0,0)";
          bird.fillRect(300, 390, 30, 30);

          //ear
          bird.fillStyle = "rgb(255,192,203)";
          bird.fillRect(300, 360, 30, 30);
        }

        // Left Hand
        if (this.sColor == 1) {
          if (this.leftHand == 1) {
            // Middle finger
            leftHand.fillStyle = "rgb(255,221,205)";
            leftHand.fillRect(630, 300, 90, 60);
            leftHand.fillRect(660, 240, 30, 60);
          }
          if (this.leftHand == 2) {
            // Beer Bottle
            leftHand.fillStyle = "rgb(136,74,1)";
            leftHand.fillRect(720, 180, 30, 30);
            leftHand.fillRect(690, 240, 90, 30);
            leftHand.fillRect(690, 360, 90, 30);
            leftHand.fillStyle = "rgb(60,99,34)";
            leftHand.fillRect(690, 270, 90, 90);
            leftHand.fillRect(720, 210, 30, 30);
            leftHand.fillStyle = "rgb(255,221,205)";
            leftHand.fillRect(660, 300, 30, 60);
            leftHand.fillRect(690, 300, 30, 30);
            leftHand.fillRect(750, 300, 30, 60);
          }
          if (this.leftHand == 3) {
            // Beer Pint
            leftHand.fillStyle = "rgb(255,255,255)";
            leftHand.fillRect(690, 240, 90, 30);
            leftHand.fillRect(780, 270, 30, 30);
            leftHand.fillStyle = "rgb(253,200,124)";
            leftHand.fillRect(690, 270, 90, 120);
            leftHand.fillStyle = "rgb(255,182,77)";
            leftHand.fillRect(720, 270, 30, 120);
            leftHand.fillRect(690, 360, 30, 30);
            leftHand.fillRect(750, 330, 30, 30);
            leftHand.fillStyle = "rgb(255,221,205)";
            leftHand.fillRect(660, 300, 30, 60);
            leftHand.fillRect(690, 300, 30, 30);
          }
          if (this.leftHand == 4) {
            // Cigarette
            leftHand.fillStyle = "rgb(165,94,38)";
            leftHand.fillRect(660, 300, 30, 30);
            leftHand.fillStyle = "rgb(255,255,255)";
            leftHand.fillRect(720, 300, 30, 30);
            leftHand.fillStyle = "rgb(120,116,117)";
            leftHand.fillRect(750, 300, 30, 30);
            leftHand.fillRect(810, 270, 30, 30);
            leftHand.fillRect(870, 240, 30, 30);
            leftHand.fillRect(810, 180, 30, 30);
            leftHand.fillStyle = "rgb(189,189,189)";
            leftHand.fillRect(810, 150, 30, 30);
            leftHand.fillRect(840, 180, 30, 30);
            leftHand.fillRect(840, 240, 30, 30);
            leftHand.fillStyle = "rgb(255,221,205)";
            leftHand.fillRect(660, 330, 30, 30);
            leftHand.fillRect(690, 300, 30, 60);
          }
          if (this.leftHand == 5) {
            // Punk hand?
            leftHand.fillStyle = "rgb(255,221,205)";
            leftHand.fillRect(630, 300, 90, 60);
            leftHand.fillRect(630, 270, 30, 30);
            leftHand.fillRect(690, 270, 30, 30);
            leftHand.fillRect(600, 330, 30, 30);
          }
          if (this.leftHand == 6) {
            // Hotdog
            leftHand.fillStyle = "rgb(255,144,0)";
            leftHand.fillRect(690, 270, 60, 150);
            leftHand.fillStyle = "rgb(191,54,12)";
            leftHand.fillRect(690, 210, 30, 60);
            leftHand.fillStyle = "rgb(255,221,205)";
            leftHand.fillRect(660, 300, 30, 60);
            leftHand.fillRect(690, 300, 30, 30);
          }
        }
        if (this.sColor == 2) {
          if (this.leftHand == 1) {
            // Middle finger
            leftHand.fillStyle = "rgb(165,107,70)";
            leftHand.fillRect(630, 300, 90, 60);
            leftHand.fillRect(660, 240, 30, 60);
          }
          if (this.leftHand == 2) {
            // Beer Bottle
            leftHand.fillStyle = "rgb(136,74,1)";
            leftHand.fillRect(720, 180, 30, 30);
            leftHand.fillRect(690, 240, 90, 30);
            leftHand.fillRect(690, 360, 90, 30);
            leftHand.fillStyle = "rgb(60,99,34)";
            leftHand.fillRect(690, 270, 90, 90);
            leftHand.fillRect(720, 210, 30, 30);
            leftHand.fillStyle = "rgb(165,107,70)";
            leftHand.fillRect(660, 300, 30, 60);
            leftHand.fillRect(690, 300, 30, 30);
            leftHand.fillRect(750, 300, 30, 60);
          }
          if (this.leftHand == 3) {
            // Beer Pint
            leftHand.fillStyle = "rgb(255,255,255)";
            leftHand.fillRect(690, 240, 90, 30);
            leftHand.fillRect(780, 270, 30, 30);
            leftHand.fillStyle = "rgb(253,200,124)";
            leftHand.fillRect(690, 270, 90, 120);
            leftHand.fillStyle = "rgb(255,182,77)";
            leftHand.fillRect(720, 270, 30, 120);
            leftHand.fillRect(690, 360, 30, 30);
            leftHand.fillRect(750, 330, 30, 30);
            leftHand.fillStyle = "rgb(165,107,70)";
            leftHand.fillRect(660, 300, 30, 60);
            leftHand.fillRect(690, 300, 30, 30);
          }
          if (this.leftHand == 4) {
            // Cigarette
            leftHand.fillStyle = "rgb(165,94,38)";
            leftHand.fillRect(660, 300, 30, 30);
            leftHand.fillStyle = "rgb(255,255,255)";
            leftHand.fillRect(720, 300, 30, 30);
            leftHand.fillStyle = "rgb(120,116,117)";
            leftHand.fillRect(750, 300, 30, 30);
            leftHand.fillRect(810, 270, 30, 30);
            leftHand.fillRect(870, 240, 30, 30);
            leftHand.fillRect(810, 180, 30, 30);
            leftHand.fillStyle = "rgb(189,189,189)";
            leftHand.fillRect(810, 150, 30, 30);
            leftHand.fillRect(840, 180, 30, 30);
            leftHand.fillRect(840, 240, 30, 30);
            leftHand.fillStyle = "rgb(165,107,70)";
            leftHand.fillRect(660, 330, 30, 30);
            leftHand.fillRect(690, 300, 30, 60);
          }
          if (this.leftHand == 5) {
            // Punk Hand?
            leftHand.fillStyle = "rgb(165,107,70)";
            leftHand.fillRect(630, 300, 90, 60);
            leftHand.fillRect(630, 270, 30, 30);
            leftHand.fillRect(690, 270, 30, 30);
            leftHand.fillRect(600, 330, 30, 30);
          }
          if (this.leftHand == 6) {
            // Hotdog
            leftHand.fillStyle = "rgb(255,144,0)";
            leftHand.fillRect(690, 270, 60, 150);
            leftHand.fillStyle = "rgb(191,54,12)";
            leftHand.fillRect(690, 210, 30, 60);
            leftHand.fillStyle = "rgb(165,107,70)";
            leftHand.fillRect(660, 300, 30, 60);
            leftHand.fillRect(690, 300, 30, 30);
          }
        }
        if (this.sColor == 3) {
          if (this.leftHand == 1) {
            //Middle finger
            leftHand.fillStyle = "rgb(200,161,135)";
            leftHand.fillRect(630, 300, 90, 60);
            leftHand.fillRect(660, 240, 30, 60);
          }
          if (this.leftHand == 2) {
            // Beer Bottle
            leftHand.fillStyle = "rgb(136,74,1)";
            leftHand.fillRect(720, 180, 30, 30);
            leftHand.fillRect(690, 240, 90, 30);
            leftHand.fillRect(690, 360, 90, 30);
            leftHand.fillStyle = "rgb(60,99,34)";
            leftHand.fillRect(690, 270, 90, 90);
            leftHand.fillRect(720, 210, 30, 30);
            leftHand.fillStyle = "rgb(200,161,135)";
            leftHand.fillRect(660, 300, 30, 60);
            leftHand.fillRect(690, 300, 30, 30);
            leftHand.fillRect(750, 300, 30, 60);
          }
          if (this.leftHand == 3) {
            // Beer Pint
            leftHand.fillStyle = "rgb(255,255,255)";
            leftHand.fillRect(690, 240, 90, 30);
            leftHand.fillRect(780, 270, 30, 30);
            leftHand.fillStyle = "rgb(253,200,124)";
            leftHand.fillRect(690, 270, 90, 120);
            leftHand.fillStyle = "rgb(255,182,77)";
            leftHand.fillRect(720, 270, 30, 120);
            leftHand.fillRect(690, 360, 30, 30);
            leftHand.fillRect(750, 330, 30, 30);
            leftHand.fillStyle = "rgb(200,161,135)";
            leftHand.fillRect(660, 300, 30, 60);
            leftHand.fillRect(690, 300, 30, 30);
          }
          if (this.leftHand == 4) {
            // Cigarette
            leftHand.fillStyle = "rgb(165,94,38)";
            leftHand.fillRect(660, 300, 30, 30);
            leftHand.fillStyle = "rgb(255,255,255)";
            leftHand.fillRect(720, 300, 30, 30);
            leftHand.fillStyle = "rgb(120,116,117)";
            leftHand.fillRect(750, 300, 30, 30);
            leftHand.fillRect(810, 270, 30, 30);
            leftHand.fillRect(870, 240, 30, 30);
            leftHand.fillRect(810, 180, 30, 30);
            leftHand.fillStyle = "rgb(189,189,189)";
            leftHand.fillRect(810, 150, 30, 30);
            leftHand.fillRect(840, 180, 30, 30);
            leftHand.fillRect(840, 240, 30, 30);
            leftHand.fillStyle = "rgb(200,161,135)";
            leftHand.fillRect(660, 330, 30, 30);
            leftHand.fillRect(690, 300, 30, 60);
          }
          if (this.leftHand == 5) {
            // Punk hand?
            leftHand.fillStyle = "rgb(200,161,135)";
            leftHand.fillRect(630, 300, 90, 60);
            leftHand.fillRect(630, 270, 30, 30);
            leftHand.fillRect(690, 270, 30, 30);
            leftHand.fillRect(600, 330, 30, 30);
          }
          if (this.leftHand == 6) {
            // Hotdog
            leftHand.fillStyle = "rgb(255,144,0)";
            leftHand.fillRect(690, 270, 60, 150);
            leftHand.fillStyle = "rgb(191,54,12)";
            leftHand.fillRect(690, 210, 30, 60);
            leftHand.fillStyle = "rgb(200,161,135)";
            leftHand.fillRect(660, 300, 30, 60);
            leftHand.fillRect(690, 300, 30, 30);
          }
        }

        // Right Hand
        if (this.sColor == 1) {
          if (this.rightHand == 1) {
            // Regular Hand
            rightHand.fillStyle = "rgb(255,221,205)";
            rightHand.fillRect(210, 660, 60, 90);
            rightHand.fillRect(270, 660, 30, 30);
          }
          if (this.rightHand == 2) {
            // Beer Spilling
            rightHand.fillStyle = "rgb(255,221,205)";
            rightHand.fillRect(210, 660, 60, 90);
            rightHand.fillStyle = "rgb(207,216,221)";
            rightHand.fillRect(150, 660, 30, 90);
            rightHand.fillRect(300, 660, 30, 90);
            rightHand.fillStyle = "rgb(254,193,7)";
            rightHand.fillRect(180, 660, 30, 90);
            rightHand.fillRect(270, 660, 30, 90);
            rightHand.fillStyle = "rgb(255,255,255)";
            rightHand.fillRect(180, 690, 30, 30);
            rightHand.fillStyle = "rgb(150,127,19)";
            rightHand.fillRect(330, 720, 30, 30);
            rightHand.fillRect(390, 780, 30, 30);
            rightHand.fillRect(390, 870, 30, 30);
            rightHand.fillRect(420, 930, 30, 30);
            rightHand.fillStyle = "rgb(214,193,95)";
            rightHand.fillRect(360, 750, 30, 30);
            rightHand.fillRect(390, 810, 30, 60);
            rightHand.fillRect(390, 900, 30, 30);
          }
          if (this.rightHand == 3) {
            // Beer Bottle
            rightHand.fillStyle = "rgb(255,221,205)";
            rightHand.fillRect(210, 660, 60, 90);
            rightHand.fillStyle = "rgb(121,85,71)";
            rightHand.fillRect(150, 660, 30, 90);
            rightHand.fillRect(300, 660, 30, 90);
            rightHand.fillRect(360, 690, 30, 30);
            rightHand.fillStyle = "rgb(25,33,140)";
            rightHand.fillRect(180, 660, 30, 90);
            rightHand.fillRect(270, 660, 30, 90);
            rightHand.fillRect(330, 690, 30, 30);
            rightHand.fillStyle = "rgb(255,255,255)";
            rightHand.fillRect(270, 690, 30, 30);
            rightHand.fillRect(180, 690, 30, 30);
          }
          if (this.rightHand == 4) {
            // Ciggarette
            rightHand.fillStyle = "rgb(255,221,205)";
            rightHand.fillRect(210, 660, 60, 90);
            rightHand.fillRect(270, 660, 30, 30);
            rightHand.fillStyle = "rgb(161,95,42)";
            rightHand.fillRect(270, 720, 30, 30);
            rightHand.fillStyle = "rgb(255,255,255)";
            rightHand.fillRect(210, 720, 30, 30);
            rightHand.fillStyle = "rgb(117,117,117)";
            rightHand.fillRect(180, 720, 30, 30);
            rightHand.fillRect(120, 660, 30, 30);
            rightHand.fillRect(60, 600, 30, 30);
            rightHand.fillRect(150, 570, 30, 30);
            rightHand.fillStyle = "rgb(189,189,189)";
            rightHand.fillRect(90, 630, 30, 30);
            rightHand.fillRect(150, 540, 30, 30);
            rightHand.fillRect(120, 570, 30, 30);
          }
          if (this.rightHand == 5) {
            // Gun Hand?
            rightHand.fillStyle = "rgb(255,221,205)";
            rightHand.fillRect(210, 660, 60, 60);
            rightHand.fillRect(270, 660, 30, 30);
            rightHand.fillRect(240, 720, 30, 30);
          }
          if (this.rightHand == 6) {
            // Hotdog
            rightHand.fillStyle = "rgb(255,144,0)";
            rightHand.fillRect(180, 690, 150, 60);
            rightHand.fillRect(390, 810, 30, 30);
            rightHand.fillStyle = "rgb(191,54,12)";
            rightHand.fillRect(330, 720, 60, 30);
            rightHand.fillStyle = "rgb(255,221,205)";
            rightHand.fillRect(210, 660, 60, 90);
            rightHand.fillRect(270, 660, 30, 30);
          }
        }
        if (this.sColor == 2) {
          if (this.rightHand == 1) {
            // Regular Hand
            rightHand.fillStyle = "rgb(165,107,70)";
            rightHand.fillRect(210, 660, 60, 90);
            rightHand.fillRect(270, 660, 30, 30);
          }
          if (this.rightHand == 2) {
            // Beer Spilling
            rightHand.fillStyle = "rgb(165,107,70)";
            rightHand.fillRect(210, 660, 60, 90);
            rightHand.fillStyle = "rgb(207,216,221)";
            rightHand.fillRect(150, 660, 30, 90);
            rightHand.fillRect(300, 660, 30, 90);
            rightHand.fillStyle = "rgb(254,193,7)";
            rightHand.fillRect(180, 660, 30, 90);
            rightHand.fillRect(270, 660, 30, 90);
            rightHand.fillStyle = "rgb(255,255,255)";
            rightHand.fillRect(180, 690, 30, 30);
            rightHand.fillStyle = "rgb(150,127,19)";
            rightHand.fillRect(330, 720, 30, 30);
            rightHand.fillRect(390, 780, 30, 30);
            rightHand.fillRect(390, 870, 30, 30);
            rightHand.fillRect(420, 930, 30, 30);
            rightHand.fillStyle = "rgb(214,193,95)";
            rightHand.fillRect(360, 750, 30, 30);
            rightHand.fillRect(390, 810, 30, 60);
            rightHand.fillRect(390, 900, 30, 30);
          }
          if (this.rightHand == 3) {
            // Beer Bottle
            rightHand.fillStyle = "rgb(165,107,70)";
            rightHand.fillRect(210, 660, 60, 90);
            rightHand.fillStyle = "rgb(121,85,71)";
            rightHand.fillRect(150, 660, 30, 90);
            rightHand.fillRect(300, 660, 30, 90);
            rightHand.fillRect(360, 690, 30, 30);
            rightHand.fillStyle = "rgb(25,33,140)";
            rightHand.fillRect(180, 660, 30, 90);
            rightHand.fillRect(270, 660, 30, 90);
            rightHand.fillRect(330, 690, 30, 30);
            rightHand.fillStyle = "rgb(255,255,255)";
            rightHand.fillRect(270, 690, 30, 30);
            rightHand.fillRect(180, 690, 30, 30);
          }
          if (this.rightHand == 4) {
            // Ciggarette
            rightHand.fillStyle = "rgb(165,107,70)";
            rightHand.fillRect(210, 660, 60, 90);
            rightHand.fillRect(270, 660, 30, 30);
            rightHand.fillStyle = "rgb(161,95,42)";
            rightHand.fillRect(270, 720, 30, 30);
            rightHand.fillStyle = "rgb(255,255,255)";
            rightHand.fillRect(210, 720, 30, 30);
            rightHand.fillStyle = "rgb(117,117,117)";
            rightHand.fillRect(180, 720, 30, 30);
            rightHand.fillRect(120, 660, 30, 30);
            rightHand.fillRect(60, 600, 30, 30);
            rightHand.fillRect(150, 570, 30, 30);
            rightHand.fillStyle = "rgb(189,189,189)";
            rightHand.fillRect(90, 630, 30, 30);
            rightHand.fillRect(150, 540, 30, 30);
            rightHand.fillRect(120, 570, 30, 30);
          }
          if (this.rightHand == 5) {
            // Gun hand?
            rightHand.fillStyle = "rgb(165,107,70)";
            rightHand.fillRect(210, 660, 60, 60);
            rightHand.fillRect(270, 660, 30, 30);
            rightHand.fillRect(240, 720, 30, 30);
          }
          if (this.rightHand == 6) {
            // Hotdog
            rightHand.fillStyle = "rgb(255,144,0)";
            rightHand.fillRect(180, 690, 150, 60);
            rightHand.fillRect(390, 810, 30, 30);
            rightHand.fillStyle = "rgb(191,54,12)";
            rightHand.fillRect(330, 720, 60, 30);
            rightHand.fillStyle = "rgb(165,107,70)";
            rightHand.fillRect(210, 660, 60, 90);
            rightHand.fillRect(270, 660, 30, 30);
          }
        }
        if (this.sColor == 3) {
          if (this.rightHand == 1) {
            // Regular Hand
            rightHand.fillStyle = "rgb(200,161,135)";
            rightHand.fillRect(210, 660, 60, 90);
            rightHand.fillRect(270, 660, 30, 30);
          }
          if (this.rightHand == 2) {
            // Beer Spilling
            rightHand.fillStyle = "rgb(200,161,135)";
            rightHand.fillRect(210, 660, 60, 90);
            rightHand.fillStyle = "rgb(207,216,221)";
            rightHand.fillRect(150, 660, 30, 90);
            rightHand.fillRect(300, 660, 30, 90);
            rightHand.fillStyle = "rgb(254,193,7)";
            rightHand.fillRect(180, 660, 30, 90);
            rightHand.fillRect(270, 660, 30, 90);
            rightHand.fillStyle = "rgb(255,255,255)";
            rightHand.fillRect(180, 690, 30, 30);
            rightHand.fillStyle = "rgb(150,127,19)";
            rightHand.fillRect(330, 720, 30, 30);
            rightHand.fillRect(390, 780, 30, 30);
            rightHand.fillRect(390, 870, 30, 30);
            rightHand.fillRect(420, 930, 30, 30);
            rightHand.fillStyle = "rgb(214,193,95)";
            rightHand.fillRect(360, 750, 30, 30);
            rightHand.fillRect(390, 810, 30, 60);
            rightHand.fillRect(390, 900, 30, 30);
          }
          if (this.rightHand == 3) {
            // Beer Bottle
            rightHand.fillStyle = "rgb(200,161,135)";
            rightHand.fillRect(210, 660, 60, 90);
            rightHand.fillStyle = "rgb(121,85,71)";
            rightHand.fillRect(150, 660, 30, 90);
            rightHand.fillRect(300, 660, 30, 90);
            rightHand.fillRect(360, 690, 30, 30);
            rightHand.fillStyle = "rgb(25,33,140)";
            rightHand.fillRect(180, 660, 30, 90);
            rightHand.fillRect(270, 660, 30, 90);
            rightHand.fillRect(330, 690, 30, 30);
            rightHand.fillStyle = "rgb(255,255,255)";
            rightHand.fillRect(270, 690, 30, 30);
            rightHand.fillRect(180, 690, 30, 30);
          }
          if (this.rightHand == 4) {
            // Ciggarette
            rightHand.fillStyle = "rgb(200,161,135)";
            rightHand.fillRect(210, 660, 60, 90);
            rightHand.fillRect(270, 660, 30, 30);
            rightHand.fillStyle = "rgb(161,95,42)";
            rightHand.fillRect(270, 720, 30, 30);
            rightHand.fillStyle = "rgb(255,255,255)";
            rightHand.fillRect(210, 720, 30, 30);
            rightHand.fillStyle = "rgb(117,117,117)";
            rightHand.fillRect(180, 720, 30, 30);
            rightHand.fillRect(120, 660, 30, 30);
            rightHand.fillRect(60, 600, 30, 30);
            rightHand.fillRect(150, 570, 30, 30);
            rightHand.fillStyle = "rgb(189,189,189)";
            rightHand.fillRect(90, 630, 30, 30);
            rightHand.fillRect(150, 540, 30, 30);
            rightHand.fillRect(120, 570, 30, 30);
          }
          if (this.rightHand == 5) {
            // Gun Hand?
            rightHand.fillStyle = "rgb(200,161,135)";
            rightHand.fillRect(210, 660, 60, 60);
            rightHand.fillRect(270, 660, 30, 30);
            rightHand.fillRect(240, 720, 30, 30);
          }
          if (this.rightHand == 6) {
            // Hotdog
            rightHand.fillStyle = "rgb(255,144,0)";
            rightHand.fillRect(180, 690, 150, 60);
            rightHand.fillRect(390, 810, 30, 30);
            rightHand.fillStyle = "rgb(191,54,12)";
            rightHand.fillRect(330, 720, 60, 30);
            rightHand.fillStyle = "rgb(200,161,135)";
            rightHand.fillRect(210, 660, 60, 90);
            rightHand.fillRect(270, 660, 30, 30);
          }
        }

        // Name
        document.getElementById("random-name").innerText = `${
          firstNamesMale[this.wienerName]
        } ${lastNames[this.wienerLastName]}`;
      }
      /////////////////// Female //////////////////////////

      if (this.sex == 2) {
        // Head- Skin Color

        if (this.sColor == 1) {
          // White skin tone
          head.fillStyle = "rgb(255,221,205)";
          head.fillRect(390, 150, 120, 30);
          head.fillRect(360, 180, 180, 210);
          head.fillRect(330, 210, 30, 60);
          head.fillRect(540, 210, 30, 60);
          head.fillRect(390, 390, 120, 30);
          head.fillRect(420, 420, 60, 90);
        }
        if (this.sColor == 2) {
          // Black skin tone
          head.fillStyle = "rgb(165,107,70)";
          head.fillRect(390, 150, 120, 30);
          head.fillRect(360, 180, 180, 210);
          head.fillRect(330, 210, 30, 60);
          head.fillRect(540, 210, 30, 60);
          head.fillRect(390, 390, 120, 30);
          head.fillRect(420, 420, 60, 90);
        }
        if (this.sColor == 3) {
          // Brown skin tone
          head.fillStyle = "rgb(200,161,135)";
          head.fillRect(390, 150, 120, 30);
          head.fillRect(360, 180, 180, 210);
          head.fillRect(330, 210, 30, 60);
          head.fillRect(540, 210, 30, 60);
          head.fillRect(390, 390, 120, 30);
          head.fillRect(420, 420, 60, 90);
        }

        // Eyes

        if (this.eyes == 1) {
          // Eyes close together
          if (this.eColor == 1) {
            // Black
            eyes.fillStyle = "rgb(0,0,0)";
            eyes.fillRect(420, 210, 30, 30);
            eyes.fillRect(510, 210, 30, 30);
          }
          if (this.eColor == 2) {
            // Brown
            eyes.fillStyle = "rgb(100,50,40)";
            eyes.fillRect(420, 210, 30, 30);
            eyes.fillRect(510, 210, 30, 30);
          }
          if (this.eColor == 3) {
            // Green
            eyes.fillStyle = "rgb(0,100,60)";
            eyes.fillRect(420, 210, 30, 30);
            eyes.fillRect(510, 210, 30, 30);
          }
          if (this.eColor == 4) {
            // Blue
            eyes.fillStyle = "rgb(0,89,119)";
            eyes.fillRect(420, 210, 30, 30);
            eyes.fillRect(510, 210, 30, 30);
          }
        }
        if (this.eyes == 2) {
          // Eyes further appart
          if (this.eColor == 1) {
            eyes.fillStyle = "rgb(0,0,0)";
            eyes.fillRect(420, 210, 30, 30);
            eyes.fillRect(480, 210, 30, 30);
          }

          if (this.eColor == 2) {
            eyes.fillStyle = "rgb(100,50,40)";
            eyes.fillRect(420, 210, 30, 30);
            eyes.fillRect(480, 210, 30, 30);
          }
          if (this.eColor == 3) {
            eyes.fillStyle = "rgb(0,100,60)";
            eyes.fillRect(420, 210, 30, 30);
            eyes.fillRect(480, 210, 30, 30);
          }
          if (this.eColor == 4) {
            eyes.fillStyle = "rgb(0,89,119)";
            eyes.fillRect(420, 210, 30, 30);
            eyes.fillRect(480, 210, 30, 30);
          }
        }

        // Nose

        if (this.sColor == 1) {
          if (this.nose == 1) {
            // Horizontal
            nose.fillStyle = "rgb(227,182,185)";
            nose.fillRect(450, 270, 60, 30);
          }
          if (this.nose == 2) {
            // Middle
            nose.fillStyle = "rgb(227,182,185)";
            nose.fillRect(450, 300, 30, 30);
          }
          if (this.nose == 3) {
            // Vertical
            nose.fillStyle = "rgb(227,182,185)";
            nose.fillRect(450, 240, 30, 60);
          }
          if (this.nose == 4) {
            // To the Left
            nose.fillStyle = "rgb(227,182,185)";
            nose.fillRect(480, 270, 30, 30);
          }
          if (this.nose == 5) {
            // Sunglasses
            nose.fillStyle = "rgb(165,122,120)";
            nose.fillRect(450, 240, 30, 60);
            nose.fillStyle = "rgb(0,0,50)";
            nose.fillRect(390, 210, 60, 60);
            nose.fillRect(480, 210, 60, 60);
            nose.fillRect(450, 210, 30, 30);
          }
        }
        if (this.sColor == 2) {
          if (this.nose == 1) {
            nose.fillStyle = "rgb(170,130,80)";
            nose.fillRect(450, 270, 60, 30);
          }
          if (this.nose == 2) {
            nose.fillStyle = "rgb(170,130,80)";
            nose.fillRect(450, 300, 30, 30);
          }
          if (this.nose == 3) {
            nose.fillStyle = "rgb(170,130,80)";
            nose.fillRect(450, 240, 30, 60);
          }
          if (this.nose == 4) {
            nose.fillStyle = "rgb(170,130,80)";
            nose.fillRect(480, 270, 30, 30);
          }
          if (this.nose == 5) {
            // Needs Sunglasses!!!!!!!!!
            nose.fillStyle = "rgb(165,122,120)";
            nose.fillRect(450, 240, 30, 60);
            nose.fillStyle = "rgb(191,255,244)";
            nose.fillRect(390, 210, 60, 60);
            nose.fillRect(480, 210, 60, 60);
            nose.fillRect(450, 210, 30, 30);
          }
        }
        if (this.sColor == 3) {
          if (this.nose == 1) {
            nose.fillStyle = "rgb(170,130,80)";
            nose.fillRect(450, 270, 60, 30);
          }
          if (this.nose == 2) {
            nose.fillStyle = "rgb(170,130,80)";
            nose.fillRect(450, 300, 30, 30);
          }
          if (this.nose == 3) {
            nose.fillStyle = "rgb(170,130,80)";
            nose.fillRect(450, 240, 30, 60);
          }
          if (this.nose == 4) {
            nose.fillStyle = "rgb(170,130,80)";
            nose.fillRect(480, 270, 30, 30);
          }
          if (this.nose == 5) {
            // Needs Sunglasses!!!!!!!!!
            nose.fillStyle = "rgb(165,122,120)";
            nose.fillRect(450, 240, 30, 60);
            nose.fillStyle = "rgb(150,0,50)";
            nose.fillRect(390, 210, 60, 60);
            nose.fillRect(480, 210, 60, 60);
            nose.fillRect(450, 210, 30, 30);
          }
        }

        // Mouth

        if (this.mouth == 1) {
          // White
          mouth.fillStyle = "rgb(255,255,255)";
          mouth.fillRect(420, 360, 60, 30);
        }
        if (this.mouth == 2) {
          // Black
          mouth.fillStyle = "rgb(0,0,0)";
          mouth.fillRect(420, 360, 60, 30);
        }
        if (this.mouth == 3) {
          // Red
          mouth.fillStyle = "rgb(161,41,51)";
          mouth.fillRect(420, 360, 60, 30);
        }
        if (this.mouth == 4) {
          // Drooling Mustard
          mouth.fillStyle = "rgb(255,255,255)";
          mouth.fillRect(420, 360, 60, 30);
          mouth.fillStyle = "rgb(254,146,0)";
          mouth.fillRect(420, 390, 30, 30);
        }

        // Earrings

        if (this.earring == 1) {
          // left ear only Gold
          earring.fillStyle = "rgb(255,255,12)";
          earring.fillRect(540, 270, 30, 30);
        }
        if (this.earring == 2) {
          // eft ear only Purple
          earring.fillStyle = "rgb(180,0,180)";
          earring.fillRect(330, 270, 30, 30);
          earring.fillRect(540, 270, 30, 30);
        }
        if (this.earring == 3) {
          // left ear only Silver
          earring.fillStyle = "rgb(192,192,192)";
          earring.fillRect(330, 270, 30, 30);
          earring.fillRect(540, 270, 30, 30);
        }

        // Hair

        if (this.hair == 0) {
          // No Hair
          this.noHair = true;
        }
        if (this.hair == 1) {
          // Red Punk
          hair.fillStyle = "rgb(210,72,85)";
          hair.fillRect(330, 270, 30, 90);
          hair.fillRect(330, 180, 30, 30);
          hair.fillRect(360, 150, 30, 90);
          hair.fillRect(390, 120, 30, 60);
          hair.fillRect(420, 90, 30, 60);
          hair.fillRect(450, 60, 30, 120);
        }
        if (this.hair == 2) {
          // Brown to the Back
          hair.fillStyle = "rgb(75,41,3)";
          hair.fillRect(300, 150, 30, 210);
          hair.fillRect(330, 120, 30, 90);
          hair.fillRect(330, 270, 30, 150);
          hair.fillRect(360, 90, 30, 150);
          hair.fillRect(360, 390, 30, 90);
          hair.fillRect(390, 90, 120, 60);
          hair.fillRect(390, 150, 60, 30);
          hair.fillRect(510, 90, 30, 90);
          hair.fillRect(540, 120, 30, 90);
          hair.fillRect(540, 270, 30, 30);
          hair.fillRect(390, 420, 30, 60);
          hair.fillRect(480, 420, 30, 60);
        }
        if (this.hair == 3) {
          // Blonde to the Back
          hair.fillStyle = "rgb(230,200,0)";
          hair.fillRect(300, 150, 30, 210);
          hair.fillRect(330, 120, 30, 90);
          hair.fillRect(330, 270, 30, 150);
          hair.fillRect(360, 90, 30, 150);
          hair.fillRect(360, 390, 30, 90);
          hair.fillRect(390, 90, 120, 60);
          hair.fillRect(390, 150, 60, 30);
          hair.fillRect(510, 90, 30, 90);
          hair.fillRect(540, 120, 30, 90);
          hair.fillRect(540, 270, 30, 30);
          hair.fillRect(390, 420, 30, 60);
          hair.fillRect(480, 420, 30, 60);
        }
        if (this.hair == 4) {
          // Brown
          hair.fillStyle = "rgb(75,41,3)";
          hair.fillRect(300, 180, 30, 270);
          hair.fillRect(330, 150, 30, 60);
          hair.fillRect(330, 270, 30, 210);
          hair.fillRect(360, 120, 30, 120);
          hair.fillRect(360, 390, 30, 90);
          hair.fillRect(390, 120, 30, 60);
          hair.fillRect(390, 420, 30, 60);
          hair.fillRect(420, 90, 90, 60);
          hair.fillRect(510, 120, 30, 60);
          hair.fillRect(540, 150, 30, 300);
          hair.fillRect(510, 390, 30, 90);
          hair.fillRect(480, 420, 30, 60);
          hair.fillRect(330, 510, 30, 90);
          hair.fillRect(360, 600, 30, 30);
        }
        if (this.hair == 5) {
          // Blonde
          hair.fillStyle = "rgb(192,179,87)";
          hair.fillRect(300, 180, 30, 270);
          hair.fillRect(330, 150, 30, 60);
          hair.fillRect(330, 270, 30, 210);
          hair.fillRect(360, 120, 30, 120);
          hair.fillRect(360, 390, 30, 90);
          hair.fillRect(390, 120, 30, 60);
          hair.fillRect(390, 420, 30, 60);
          hair.fillRect(420, 90, 90, 60);
          hair.fillRect(510, 120, 30, 60);
          hair.fillRect(540, 150, 30, 300);
          hair.fillRect(510, 390, 30, 90);
          hair.fillRect(480, 420, 30, 60);
          hair.fillRect(330, 510, 30, 90);
          hair.fillRect(360, 600, 30, 30);
        }
        if (this.hair == 6) {
          // Black, Green Band
          hair.fillStyle = "rgb(53,56,61)";
          hair.fillRect(270, 210, 30, 30);
          hair.fillRect(270, 300, 30, 30);
          hair.fillRect(270, 360, 30, 30);
          hair.fillRect(300, 150, 30, 240);
          hair.fillRect(300, 420, 30, 30);
          hair.fillRect(300, 540, 30, 30);
          hair.fillRect(300, 630, 30, 30);
          hair.fillRect(330, 120, 30, 30);
          hair.fillRect(330, 270, 30, 210);
          hair.fillRect(330, 510, 30, 180);
          hair.fillRect(360, 360, 30, 120);
          hair.fillRect(360, 600, 30, 120);
          hair.fillRect(390, 420, 30, 60);
          hair.fillRect(480, 420, 30, 60);
          hair.fillRect(510, 390, 30, 30);
          hair.fillRect(360, 90, 30, 30);
          hair.fillRect(360, 150, 30, 30);
          hair.fillRect(390, 120, 60, 30);
          hair.fillRect(420, 90, 120, 30);
          hair.fillRect(480, 120, 90, 30);
          hair.fillRect(510, 150, 90, 30);
          hair.fillRect(540, 180, 90, 30);
          hair.fillStyle = "rgb(168,255,184)";
          hair.fillRect(330, 150, 30, 60);
          hair.fillRect(360, 120, 30, 30);
          hair.fillRect(390, 90, 30, 30);
          hair.fillRect(420, 60, 90, 30);
          if (this.sColor == 1) {
            hair.fillStyle = "rgb(255,221,205)";
            hair.fillRect(450, 120, 30, 30);
          }
          if (this.sColor == 2) {
            hair.fillStyle = "rgb(165,107,70)";
            hair.fillRect(450, 120, 30, 30);
          }
          if (this.sColor == 3) {
            hair.fillStyle = "rgb(200,161,135)";
            hair.fillRect(450, 120, 30, 30);
          }
        }
        if (this.hair == 7) {
          // Blonde, White Band
          hair.fillStyle = "rgb(192,179,87)";
          hair.fillRect(270, 210, 30, 30);
          hair.fillRect(270, 300, 30, 30);
          hair.fillRect(270, 360, 30, 30);
          hair.fillRect(300, 150, 30, 240);
          hair.fillRect(300, 420, 30, 30);
          hair.fillRect(300, 540, 30, 30);
          hair.fillRect(300, 630, 30, 30);
          hair.fillRect(330, 120, 30, 30);
          hair.fillRect(330, 270, 30, 210);
          hair.fillRect(330, 510, 30, 180);
          hair.fillRect(360, 360, 30, 120);
          hair.fillRect(360, 600, 30, 120);
          hair.fillRect(390, 420, 30, 60);
          hair.fillRect(480, 420, 30, 60);
          hair.fillRect(510, 390, 30, 30);
          hair.fillRect(360, 90, 30, 30);
          hair.fillRect(360, 150, 30, 30);
          hair.fillRect(390, 120, 60, 30);
          hair.fillRect(420, 90, 120, 30);
          hair.fillRect(480, 120, 90, 30);
          hair.fillRect(510, 150, 90, 30);
          hair.fillRect(540, 180, 90, 30);
          hair.fillStyle = "rgb(255,255,255)";
          hair.fillRect(330, 150, 30, 60);
          hair.fillRect(360, 120, 30, 30);
          hair.fillRect(390, 90, 30, 30);
          hair.fillRect(420, 60, 90, 30);
          if (this.sColor == 1) {
            hair.fillStyle = "rgb(255,221,205)";
            hair.fillRect(450, 120, 30, 30);
          }
          if (this.sColor == 2) {
            hair.fillStyle = "rgb(165,107,70)";
            hair.fillRect(450, 120, 30, 30);
          }
          if (this.sColor == 3) {
            hair.fillStyle = "rgb(200,161,135)";
            hair.fillRect(450, 120, 30, 30);
          }
        }
        if (this.hair == 8) {
          // Ginger
          hair.fillStyle = "rgb(242,130,63)";
          hair.fillRect(300, 180, 30, 270);
          hair.fillRect(330, 150, 30, 60);
          hair.fillRect(330, 270, 30, 210);
          hair.fillRect(360, 120, 30, 120);
          hair.fillRect(360, 390, 30, 90);
          hair.fillRect(390, 120, 30, 60);
          hair.fillRect(390, 420, 30, 60);
          hair.fillRect(420, 90, 90, 60);
          hair.fillRect(510, 120, 30, 60);
          hair.fillRect(540, 150, 30, 300);
          hair.fillRect(510, 390, 30, 90);
          hair.fillRect(480, 420, 30, 60);
          hair.fillRect(330, 510, 30, 90);
          hair.fillRect(360, 600, 30, 30);
        }
        if (this.hair == 9) {
          // Ginger White Band
          hair.fillStyle = "rgb(242,130,63)";
          hair.fillRect(270, 210, 30, 30);
          hair.fillRect(270, 300, 30, 30);
          hair.fillRect(270, 360, 30, 30);
          hair.fillRect(300, 150, 30, 240);
          hair.fillRect(300, 420, 30, 30);
          hair.fillRect(300, 540, 30, 30);
          hair.fillRect(300, 630, 30, 30);
          hair.fillRect(330, 120, 30, 30);
          hair.fillRect(330, 270, 30, 210);
          hair.fillRect(330, 510, 30, 180);
          hair.fillRect(360, 360, 30, 120);
          hair.fillRect(360, 600, 30, 120);
          hair.fillRect(390, 420, 30, 60);
          hair.fillRect(480, 420, 30, 60);
          hair.fillRect(510, 390, 30, 30);
          hair.fillRect(360, 90, 30, 30);
          hair.fillRect(360, 150, 30, 30);
          hair.fillRect(390, 120, 60, 30);
          hair.fillRect(420, 90, 120, 30);
          hair.fillRect(480, 120, 90, 30);
          hair.fillRect(510, 150, 90, 30);
          hair.fillRect(540, 180, 90, 30);
          hair.fillStyle = "rgb(255,255,255)";
          hair.fillRect(330, 150, 30, 60);
          hair.fillRect(360, 120, 30, 30);
          hair.fillRect(390, 90, 30, 30);
          hair.fillRect(420, 60, 90, 30);
          if (this.sColor == 1) {
            hair.fillStyle = "rgb(255,221,205)";
            hair.fillRect(450, 120, 30, 30);
          }
          if (this.sColor == 2) {
            hair.fillStyle = "rgb(165,107,70)";
            hair.fillRect(450, 120, 30, 30);
          }
          if (this.sColor == 3) {
            hair.fillStyle = "rgb(200,161,135)";
            hair.fillRect(450, 120, 30, 30);
          }
        }

        // Shirt
        if (this.shirt == 1) {
          // Black shirt no arms (1)
          shirt.fillStyle = "rgb(0,0,0)"; //91,64,117
          shirt.fillRect(390, 480, 30, 30);
          shirt.fillRect(480, 480, 30, 30);
          shirt.fillRect(360, 510, 30, 90);
          shirt.fillRect(510, 510, 30, 30);
          shirt.fillRect(540, 510, 30, 90);
          shirt.fillRect(450, 540, 30, 30);
          shirt.fillRect(390, 570, 150, 180);
          shirt.fillRect(360, 720, 30, 30);
          shirt.fillRect(660, 360, 30, 30);
          shirt.fillRect(210, 630, 30, 30);
          if (this.sColor == 1) {
            shirt.fillStyle = "rgb(255,221,205)";
            shirt.fillRect(390, 510, 30, 60);
            shirt.fillRect(420, 480, 30, 90);
            shirt.fillRect(450, 480, 30, 60);
            shirt.fillRect(480, 510, 30, 60);
            shirt.fillRect(510, 540, 30, 30);
            shirt.fillRect(240, 480, 150, 30);
            shirt.fillRect(210, 480, 30, 150);
            shirt.fillRect(510, 480, 150, 30);
            shirt.fillRect(660, 390, 30, 120);
          }
          if (this.sColor == 2) {
            shirt.fillStyle = "rgb(165,107,70)";
            shirt.fillRect(390, 510, 30, 60);
            shirt.fillRect(420, 480, 30, 90);
            shirt.fillRect(450, 480, 30, 60);
            shirt.fillRect(480, 510, 30, 60);
            shirt.fillRect(510, 540, 30, 30);
            shirt.fillRect(240, 480, 150, 30);
            shirt.fillRect(210, 480, 30, 150);
            shirt.fillRect(510, 480, 150, 30);
            shirt.fillRect(660, 390, 30, 120);
          }
          if (this.sColor == 3) {
            shirt.fillStyle = "rgb(200,161,135)";
            shirt.fillRect(390, 510, 30, 60);
            shirt.fillRect(420, 480, 30, 90);
            shirt.fillRect(450, 480, 30, 60);
            shirt.fillRect(480, 510, 30, 60);
            shirt.fillRect(510, 540, 30, 30);
            shirt.fillRect(240, 480, 150, 30);
            shirt.fillRect(210, 480, 30, 150);
            shirt.fillRect(510, 480, 150, 30);
            shirt.fillRect(660, 390, 30, 120);
          }
        }
        if (this.shirt == 2) {
          // Green shirt no arms (2)
          shirt.fillStyle = "rgb(57,151,98)"; //91,64,117
          shirt.fillRect(390, 480, 30, 30);
          shirt.fillRect(480, 480, 30, 30);
          shirt.fillRect(360, 510, 30, 90);
          shirt.fillRect(510, 510, 30, 30);
          shirt.fillRect(540, 510, 30, 90);
          shirt.fillRect(390, 570, 150, 180);
          shirt.fillRect(360, 720, 30, 30);
          if (this.sColor == 1) {
            shirt.fillStyle = "rgb(255,221,205)";
            shirt.fillRect(390, 510, 30, 60);
            shirt.fillRect(420, 480, 30, 90);
            shirt.fillRect(450, 480, 30, 60);
            shirt.fillRect(480, 510, 30, 60);
            shirt.fillRect(510, 540, 30, 30);
            shirt.fillRect(240, 480, 150, 30);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(510, 480, 150, 30);
            shirt.fillRect(660, 360, 30, 150);
            shirt.fillStyle = "rgb(230,195,176)";
            shirt.fillRect(450, 540, 30, 30);
          }
          if (this.sColor == 2) {
            shirt.fillStyle = "rgb(165,107,70)";
            shirt.fillRect(390, 510, 30, 60);
            shirt.fillRect(420, 480, 30, 90);
            shirt.fillRect(450, 480, 30, 60);
            shirt.fillRect(480, 510, 30, 60);
            shirt.fillRect(510, 540, 30, 30);
            shirt.fillRect(240, 480, 150, 30);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(510, 480, 150, 30);
            shirt.fillRect(660, 360, 30, 150);
            shirt.fillStyle = "rgb(173,127,80)";
            shirt.fillRect(450, 540, 30, 30);
          }
          if (this.sColor == 3) {
            shirt.fillStyle = "rgb(200,161,135)";
            shirt.fillRect(390, 510, 30, 60);
            shirt.fillRect(420, 480, 30, 90);
            shirt.fillRect(450, 480, 30, 60);
            shirt.fillRect(480, 510, 30, 60);
            shirt.fillRect(510, 540, 30, 30);
            shirt.fillRect(240, 480, 150, 30);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(510, 480, 150, 30);
            shirt.fillRect(660, 360, 30, 150);
            shirt.fillStyle = "rgb(203,147,122)";
            shirt.fillRect(450, 540, 30, 30);
          }
        }
        if (this.shirt == 3) {
          // Pink shirt no arms (1)
          shirt.fillStyle = "rgb(185,49,111)"; //91,64,117
          shirt.fillRect(390, 480, 30, 30);
          shirt.fillRect(480, 480, 30, 30);
          shirt.fillRect(360, 510, 30, 90);
          shirt.fillRect(510, 510, 30, 30);
          shirt.fillRect(540, 510, 30, 90);
          shirt.fillRect(450, 540, 30, 30);
          shirt.fillRect(390, 570, 150, 180);
          shirt.fillRect(360, 720, 30, 30);
          shirt.fillRect(660, 360, 30, 30);
          shirt.fillRect(210, 630, 30, 30);
          if (this.sColor == 1) {
            shirt.fillStyle = "rgb(255,221,205)";
            shirt.fillRect(390, 510, 30, 60);
            shirt.fillRect(420, 480, 30, 90);
            shirt.fillRect(450, 480, 30, 60);
            shirt.fillRect(480, 510, 30, 60);
            shirt.fillRect(510, 540, 30, 30);
            shirt.fillRect(240, 480, 150, 30);
            shirt.fillRect(210, 480, 30, 150);
            shirt.fillRect(510, 480, 150, 30);
            shirt.fillRect(660, 390, 30, 120);
          }
          if (this.sColor == 2) {
            shirt.fillStyle = "rgb(165,107,70)";
            shirt.fillRect(390, 510, 30, 60);
            shirt.fillRect(420, 480, 30, 90);
            shirt.fillRect(450, 480, 30, 60);
            shirt.fillRect(480, 510, 30, 60);
            shirt.fillRect(510, 540, 30, 30);
            shirt.fillRect(240, 480, 150, 30);
            shirt.fillRect(210, 480, 30, 150);
            shirt.fillRect(510, 480, 150, 30);
            shirt.fillRect(660, 390, 30, 120);
          }
          if (this.sColor == 3) {
            shirt.fillStyle = "rgb(200,161,135)";
            shirt.fillRect(390, 510, 30, 60);
            shirt.fillRect(420, 480, 30, 90);
            shirt.fillRect(450, 480, 30, 60);
            shirt.fillRect(480, 510, 30, 60);
            shirt.fillRect(510, 540, 30, 30);
            shirt.fillRect(240, 480, 150, 30);
            shirt.fillRect(210, 480, 30, 150);
            shirt.fillRect(510, 480, 150, 30);
            shirt.fillRect(660, 390, 30, 120);
          }
        }
        if (this.shirt == 4) {
          // White T-shirt (3)
          shirt.fillStyle = "rgb(255,255,255)"; //91,64,117
          shirt.fillRect(300, 480, 120, 30);
          shirt.fillRect(480, 480, 150, 30);
          shirt.fillRect(360, 510, 210, 90);
          shirt.fillRect(540, 510, 30, 90);
          shirt.fillRect(390, 570, 150, 180);
          shirt.fillRect(360, 720, 30, 30);
          shirt.fillRect(300, 510, 60, 30);
          shirt.fillRect(570, 510, 60, 30);

          if (this.sColor == 1) {
            shirt.fillStyle = "rgb(255,221,205)";
            shirt.fillRect(240, 480, 60, 30);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(630, 480, 60, 30);
            shirt.fillRect(660, 360, 30, 150);
          }
          if (this.sColor == 2) {
            shirt.fillStyle = "rgb(165,107,70)";
            shirt.fillRect(240, 480, 60, 30);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(630, 480, 60, 30);
            shirt.fillRect(660, 360, 30, 150);
          }
          if (this.sColor == 3) {
            shirt.fillStyle = "rgb(200,161,135)";
            shirt.fillRect(240, 480, 60, 30);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(630, 480, 60, 30);
            shirt.fillRect(660, 360, 30, 150);
          }
        }
        if (this.shirt == 5) {
          // Purple T-shirt (3)
          shirt.fillStyle = "rgb(33,0,90)"; //91,64,117
          shirt.fillRect(300, 480, 120, 30);
          shirt.fillRect(480, 480, 150, 30);
          shirt.fillRect(360, 510, 210, 90);
          shirt.fillRect(540, 510, 30, 90);
          shirt.fillRect(390, 570, 150, 180);
          shirt.fillRect(360, 720, 30, 30);
          shirt.fillRect(300, 510, 60, 30);
          shirt.fillRect(570, 510, 60, 30);

          if (this.sColor == 1) {
            shirt.fillStyle = "rgb(255,221,205)";
            shirt.fillRect(240, 480, 60, 30);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(630, 480, 60, 30);
            shirt.fillRect(660, 360, 30, 150);
          }
          if (this.sColor == 2) {
            shirt.fillStyle = "rgb(165,107,70)";
            shirt.fillRect(240, 480, 60, 30);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(630, 480, 60, 30);
            shirt.fillRect(660, 360, 30, 150);
          }
          if (this.sColor == 3) {
            shirt.fillStyle = "rgb(200,161,135)";
            shirt.fillRect(240, 480, 60, 30);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(630, 480, 60, 30);
            shirt.fillRect(660, 360, 30, 150);
          }
        }
        if (this.shirt == 6) {
          // Pink T-shirt (3)
          shirt.fillStyle = "rgb(220,90,90)";
          shirt.fillRect(300, 480, 120, 30);
          shirt.fillRect(480, 480, 150, 30);
          shirt.fillRect(360, 510, 210, 90);
          shirt.fillRect(540, 510, 30, 90);
          shirt.fillRect(390, 570, 150, 180);
          shirt.fillRect(360, 720, 30, 30);
          shirt.fillRect(300, 510, 60, 30);
          shirt.fillRect(570, 510, 60, 30);

          if (this.sColor == 1) {
            shirt.fillStyle = "rgb(255,221,205)";
            shirt.fillRect(240, 480, 60, 30);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(630, 480, 60, 30);
            shirt.fillRect(660, 360, 30, 150);
          }
          if (this.sColor == 2) {
            shirt.fillStyle = "rgb(165,107,70)";
            shirt.fillRect(240, 480, 60, 30);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(630, 480, 60, 30);
            shirt.fillRect(660, 360, 30, 150);
          }
          if (this.sColor == 3) {
            shirt.fillStyle = "rgb(200,161,135)";
            shirt.fillRect(240, 480, 60, 30);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(630, 480, 60, 30);
            shirt.fillRect(660, 360, 30, 150);
          }
        }
        if (this.shirt == 7) {
          // Gray T-shirt (3)
          shirt.fillStyle = "rgb(120,120,130)";
          shirt.fillRect(300, 480, 120, 30);
          shirt.fillRect(480, 480, 150, 30);
          shirt.fillRect(360, 510, 210, 90);
          shirt.fillRect(540, 510, 30, 90);
          shirt.fillRect(390, 570, 150, 180);
          shirt.fillRect(360, 720, 30, 30);
          shirt.fillRect(300, 510, 60, 30);
          shirt.fillRect(570, 510, 60, 30);

          if (this.sColor == 1) {
            shirt.fillStyle = "rgb(255,221,205)";
            shirt.fillRect(240, 480, 60, 30);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(630, 480, 60, 30);
            shirt.fillRect(660, 360, 30, 150);
          }
          if (this.sColor == 2) {
            shirt.fillStyle = "rgb(165,107,70)";
            shirt.fillRect(240, 480, 60, 30);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(630, 480, 60, 30);
            shirt.fillRect(660, 360, 30, 150);
          }
          if (this.sColor == 3) {
            shirt.fillStyle = "rgb(200,161,135)";
            shirt.fillRect(240, 480, 60, 30);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(630, 480, 60, 30);
            shirt.fillRect(660, 360, 30, 150);
          }
        }
        if (this.shirt == 8) {
          // Black T-shirt (3)
          shirt.fillStyle = "rgb(0,0,0)";
          shirt.fillRect(300, 480, 120, 30);
          shirt.fillRect(480, 480, 150, 30);
          shirt.fillRect(360, 510, 210, 90);
          shirt.fillRect(540, 510, 30, 90);
          shirt.fillRect(390, 570, 150, 180);
          shirt.fillRect(360, 720, 30, 30);
          shirt.fillRect(300, 510, 60, 30);
          shirt.fillRect(570, 510, 60, 30);

          if (this.sColor == 1) {
            shirt.fillStyle = "rgb(255,221,205)";
            shirt.fillRect(240, 480, 60, 30);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(630, 480, 60, 30);
            shirt.fillRect(660, 360, 30, 150);
          }
          if (this.sColor == 2) {
            shirt.fillStyle = "rgb(165,107,70)";
            shirt.fillRect(240, 480, 60, 30);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(630, 480, 60, 30);
            shirt.fillRect(660, 360, 30, 150);
          }
          if (this.sColor == 3) {
            shirt.fillStyle = "rgb(200,161,135)";
            shirt.fillRect(240, 480, 60, 30);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(630, 480, 60, 30);
            shirt.fillRect(660, 360, 30, 150);
          }
        }
        if (this.shirt == 9) {
          // Red Shirt (short arms) (4)
          shirt.fillStyle = "rgb(161,41,52)";
          shirt.fillRect(270, 480, 150, 30);
          shirt.fillRect(480, 480, 150, 30);
          shirt.fillRect(360, 510, 30, 90);
          shirt.fillRect(510, 510, 30, 30);
          shirt.fillRect(540, 510, 30, 90);
          shirt.fillRect(450, 540, 30, 30);
          shirt.fillRect(390, 570, 150, 180);
          shirt.fillRect(360, 720, 30, 30);
          if (this.sColor == 1) {
            shirt.fillStyle = "rgb(255,221,205)";
            shirt.fillRect(390, 510, 30, 60);
            shirt.fillRect(420, 480, 30, 90);
            shirt.fillRect(450, 480, 30, 60);
            shirt.fillRect(480, 510, 30, 60);
            shirt.fillRect(510, 540, 30, 30);
            shirt.fillRect(240, 480, 30, 30);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(630, 480, 30, 30);
            shirt.fillRect(660, 360, 30, 150);
          }
          if (this.sColor == 2) {
            shirt.fillStyle = "rgb(165,107,70)";
            shirt.fillRect(390, 510, 30, 60);
            shirt.fillRect(420, 480, 30, 90);
            shirt.fillRect(450, 480, 30, 60);
            shirt.fillRect(480, 510, 30, 60);
            shirt.fillRect(510, 540, 30, 30);
            shirt.fillRect(240, 480, 30, 30);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(630, 480, 30, 30);
            shirt.fillRect(660, 360, 30, 150);
          }
          if (this.sColor == 3) {
            shirt.fillStyle = "rgb(200,161,135)";
            shirt.fillRect(390, 510, 30, 60);
            shirt.fillRect(420, 480, 30, 90);
            shirt.fillRect(450, 480, 30, 60);
            shirt.fillRect(480, 510, 30, 60);
            shirt.fillRect(510, 540, 30, 30);
            shirt.fillRect(240, 480, 30, 30);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(630, 480, 30, 30);
            shirt.fillRect(660, 360, 30, 150);
          }
        }
        if (this.shirt == 10) {
          // Cyan Shirt (short arms) (4)
          shirt.fillStyle = "rgb(0,41,52)";
          shirt.fillRect(270, 480, 150, 30);
          shirt.fillRect(480, 480, 150, 30);
          shirt.fillRect(360, 510, 30, 90);
          shirt.fillRect(510, 510, 30, 30);
          shirt.fillRect(540, 510, 30, 90);
          shirt.fillRect(450, 540, 30, 30);
          shirt.fillRect(390, 570, 150, 180);
          shirt.fillRect(360, 720, 30, 30);
          if (this.sColor == 1) {
            shirt.fillStyle = "rgb(255,221,205)";
            shirt.fillRect(390, 510, 30, 60);
            shirt.fillRect(420, 480, 30, 90);
            shirt.fillRect(450, 480, 30, 60);
            shirt.fillRect(480, 510, 30, 60);
            shirt.fillRect(510, 540, 30, 30);
            shirt.fillRect(240, 480, 30, 30);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(630, 480, 30, 30);
            shirt.fillRect(660, 360, 30, 150);
          }
          if (this.sColor == 2) {
            shirt.fillStyle = "rgb(165,107,70)";
            shirt.fillRect(390, 510, 30, 60);
            shirt.fillRect(420, 480, 30, 90);
            shirt.fillRect(450, 480, 30, 60);
            shirt.fillRect(480, 510, 30, 60);
            shirt.fillRect(510, 540, 30, 30);
            shirt.fillRect(240, 480, 30, 30);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(630, 480, 30, 30);
            shirt.fillRect(660, 360, 30, 150);
          }
          if (this.sColor == 3) {
            shirt.fillStyle = "rgb(200,161,135)";
            shirt.fillRect(390, 510, 30, 60);
            shirt.fillRect(420, 480, 30, 90);
            shirt.fillRect(450, 480, 30, 60);
            shirt.fillRect(480, 510, 30, 60);
            shirt.fillRect(510, 540, 30, 30);
            shirt.fillRect(240, 480, 30, 30);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(630, 480, 30, 30);
            shirt.fillRect(660, 360, 30, 150);
          }
        }
        if (this.shirt == 11) {
          // Brown Shirt (short arms) (4)
          shirt.fillStyle = "rgb(87,65,52)";
          shirt.fillRect(270, 480, 150, 30);
          shirt.fillRect(480, 480, 150, 30);
          shirt.fillRect(360, 510, 30, 90);
          shirt.fillRect(510, 510, 30, 30);
          shirt.fillRect(540, 510, 30, 90);
          shirt.fillRect(450, 540, 30, 30);
          shirt.fillRect(390, 570, 150, 180);
          shirt.fillRect(360, 720, 30, 30);
          if (this.sColor == 1) {
            shirt.fillStyle = "rgb(255,221,205)";
            shirt.fillRect(390, 510, 30, 60);
            shirt.fillRect(420, 480, 30, 90);
            shirt.fillRect(450, 480, 30, 60);
            shirt.fillRect(480, 510, 30, 60);
            shirt.fillRect(510, 540, 30, 30);
            shirt.fillRect(240, 480, 30, 30);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(630, 480, 30, 30);
            shirt.fillRect(660, 360, 30, 150);
          }
          if (this.sColor == 2) {
            shirt.fillStyle = "rgb(165,107,70)";
            shirt.fillRect(390, 510, 30, 60);
            shirt.fillRect(420, 480, 30, 90);
            shirt.fillRect(450, 480, 30, 60);
            shirt.fillRect(480, 510, 30, 60);
            shirt.fillRect(510, 540, 30, 30);
            shirt.fillRect(240, 480, 30, 30);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(630, 480, 30, 30);
            shirt.fillRect(660, 360, 30, 150);
          }
          if (this.sColor == 3) {
            shirt.fillStyle = "rgb(200,161,135)";
            shirt.fillRect(390, 510, 30, 60);
            shirt.fillRect(420, 480, 30, 90);
            shirt.fillRect(450, 480, 30, 60);
            shirt.fillRect(480, 510, 30, 60);
            shirt.fillRect(510, 540, 30, 30);
            shirt.fillRect(240, 480, 30, 30);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(630, 480, 30, 30);
            shirt.fillRect(660, 360, 30, 150);
          }
        }
        if (this.shirt == 12) {
          // Yellow Shirt (short arms) (4)
          shirt.fillStyle = "rgb(255,165,0)";
          shirt.fillRect(270, 480, 150, 30);
          shirt.fillRect(480, 480, 150, 30);
          shirt.fillRect(360, 510, 30, 90);
          shirt.fillRect(510, 510, 30, 30);
          shirt.fillRect(540, 510, 30, 90);
          shirt.fillRect(450, 540, 30, 30);
          shirt.fillRect(390, 570, 150, 180);
          shirt.fillRect(360, 720, 30, 30);
          if (this.sColor == 1) {
            shirt.fillStyle = "rgb(255,221,205)";
            shirt.fillRect(390, 510, 30, 60);
            shirt.fillRect(420, 480, 30, 90);
            shirt.fillRect(450, 480, 30, 60);
            shirt.fillRect(480, 510, 30, 60);
            shirt.fillRect(510, 540, 30, 30);
            shirt.fillRect(240, 480, 30, 30);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(630, 480, 30, 30);
            shirt.fillRect(660, 360, 30, 150);
          }
          if (this.sColor == 2) {
            shirt.fillStyle = "rgb(165,107,70)";
            shirt.fillRect(390, 510, 30, 60);
            shirt.fillRect(420, 480, 30, 90);
            shirt.fillRect(450, 480, 30, 60);
            shirt.fillRect(480, 510, 30, 60);
            shirt.fillRect(510, 540, 30, 30);
            shirt.fillRect(240, 480, 30, 30);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(630, 480, 30, 30);
            shirt.fillRect(660, 360, 30, 150);
          }
          if (this.sColor == 3) {
            shirt.fillStyle = "rgb(200,161,135)";
            shirt.fillRect(390, 510, 30, 60);
            shirt.fillRect(420, 480, 30, 90);
            shirt.fillRect(450, 480, 30, 60);
            shirt.fillRect(480, 510, 30, 60);
            shirt.fillRect(510, 540, 30, 30);
            shirt.fillRect(240, 480, 30, 30);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(630, 480, 30, 30);
            shirt.fillRect(660, 360, 30, 150);
          }
        }
        if (this.shirt == 13) {
          // Green shirt no arms no cleavage (5)
          shirt.fillStyle = "rgb(57,151,98)"; //91,64,117
          shirt.fillRect(390, 480, 30, 30);
          shirt.fillRect(480, 480, 30, 30);
          shirt.fillRect(360, 510, 180, 90);
          shirt.fillRect(510, 510, 30, 30);
          shirt.fillRect(540, 510, 30, 90);
          shirt.fillRect(390, 570, 150, 180);
          shirt.fillRect(360, 720, 30, 30);
          if (this.sColor == 1) {
            shirt.fillStyle = "rgb(255,221,205)";
            shirt.fillRect(420, 510, 90, 30);
            shirt.fillRect(240, 480, 150, 30);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(510, 480, 150, 30);
            shirt.fillRect(660, 360, 30, 150);
          }
          if (this.sColor == 2) {
            shirt.fillStyle = "rgb(165,107,70)";
            shirt.fillRect(420, 510, 90, 30);
            shirt.fillRect(240, 480, 150, 30);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(510, 480, 150, 30);
            shirt.fillRect(660, 360, 30, 150);
          }
          if (this.sColor == 3) {
            shirt.fillStyle = "rgb(200,161,135)";
            shirt.fillRect(420, 510, 90, 30);
            shirt.fillRect(240, 480, 150, 30);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(510, 480, 150, 30);
            shirt.fillRect(660, 360, 30, 150);
          }
        }
        if (this.shirt == 14) {
          // Yellow shirt no arms no cleavage (5)
          shirt.fillStyle = "rgb(255,165,0)"; //91,64,117
          shirt.fillRect(390, 480, 30, 30);
          shirt.fillRect(480, 480, 30, 30);
          shirt.fillRect(360, 510, 180, 90);
          shirt.fillRect(510, 510, 30, 30);
          shirt.fillRect(540, 510, 30, 90);
          shirt.fillRect(390, 570, 150, 180);
          shirt.fillRect(360, 720, 30, 30);
          if (this.sColor == 1) {
            shirt.fillStyle = "rgb(255,221,205)";
            shirt.fillRect(420, 510, 90, 30);
            shirt.fillRect(240, 480, 150, 30);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(510, 480, 150, 30);
            shirt.fillRect(660, 360, 30, 150);
          }
          if (this.sColor == 2) {
            shirt.fillStyle = "rgb(165,107,70)";
            shirt.fillRect(420, 510, 90, 30);
            shirt.fillRect(240, 480, 150, 30);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(510, 480, 150, 30);
            shirt.fillRect(660, 360, 30, 150);
          }
          if (this.sColor == 3) {
            shirt.fillStyle = "rgb(200,161,135)";
            shirt.fillRect(420, 510, 90, 30);
            shirt.fillRect(240, 480, 150, 30);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(510, 480, 150, 30);
            shirt.fillRect(660, 360, 30, 150);
          }
        }
        if (this.shirt == 15) {
          // Pinky Shirt (short arms) (4)
          shirt.fillStyle = "rgb(255,0,102)";
          shirt.fillRect(270, 480, 150, 30);
          shirt.fillRect(480, 480, 150, 30);
          shirt.fillRect(360, 510, 30, 90);
          shirt.fillRect(510, 510, 30, 30);
          shirt.fillRect(540, 510, 30, 90);
          shirt.fillRect(450, 540, 30, 30);
          shirt.fillRect(390, 570, 150, 180);
          shirt.fillRect(360, 720, 30, 30);
          if (this.sColor == 1) {
            shirt.fillStyle = "rgb(255,221,205)";
            shirt.fillRect(390, 510, 30, 60);
            shirt.fillRect(420, 480, 30, 90);
            shirt.fillRect(450, 480, 30, 60);
            shirt.fillRect(480, 510, 30, 60);
            shirt.fillRect(510, 540, 30, 30);
            shirt.fillRect(240, 480, 30, 30);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(630, 480, 30, 30);
            shirt.fillRect(660, 360, 30, 150);
          }
          if (this.sColor == 2) {
            shirt.fillStyle = "rgb(165,107,70)";
            shirt.fillRect(390, 510, 30, 60);
            shirt.fillRect(420, 480, 30, 90);
            shirt.fillRect(450, 480, 30, 60);
            shirt.fillRect(480, 510, 30, 60);
            shirt.fillRect(510, 540, 30, 30);
            shirt.fillRect(240, 480, 30, 30);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(630, 480, 30, 30);
            shirt.fillRect(660, 360, 30, 150);
          }
          if (this.sColor == 3) {
            shirt.fillStyle = "rgb(200,161,135)";
            shirt.fillRect(390, 510, 30, 60);
            shirt.fillRect(420, 480, 30, 90);
            shirt.fillRect(450, 480, 30, 60);
            shirt.fillRect(480, 510, 30, 60);
            shirt.fillRect(510, 540, 30, 30);
            shirt.fillRect(240, 480, 30, 30);
            shirt.fillRect(210, 480, 30, 180);
            shirt.fillRect(630, 480, 30, 30);
            shirt.fillRect(660, 360, 30, 150);
          }
        }
        // Animals
        if (this.bird == 0) {
          // No Anmal
          this.nobird = true;
        }
        if (this.bird == 1) {
          // bird 1
          //head
          bird.fillStyle = "rgb(255,0,0)";
          bird.fillRect(210, 300, 90, 90);
          bird.fillStyle = "rgb(200,0,0)";
          bird.fillRect(240, 270, 30, 30);

          //body
          bird.fillStyle = "rgb(255,0,0)";
          bird.fillRect(210, 390, 90, 90);
          bird.fillRect(180, 390, 150, 30);

          //feet
          bird.fillStyle = "rgb(200,0,0)";
          bird.fillRect(210, 480, 30, 30);
          bird.fillRect(240, 450, 30, 30);

          //upper wings
          bird.fillStyle = "rgb(255,200,0)";
          bird.fillRect(180, 420, 30, 30);
          bird.fillRect(300, 420, 30, 30);

          //lower wings
          bird.fillStyle = "rgb(0,0,180)";
          bird.fillRect(180, 450, 30, 90);
          bird.fillRect(300, 450, 30, 30);

          //tail
          bird.fillStyle = "rgb(200,0,0)";
          bird.fillRect(240, 510, 30, 90);

          //schnabel
          bird.fillStyle = "rgb(0,0,0)";
          bird.fillRect(240, 330, 30, 60);

          //eyes
          bird.fillStyle = "rgb(255,255,255)";
          bird.fillRect(210, 330, 30, 30);
          bird.fillRect(270, 330, 30, 30);
        }
        if (this.bird == 2) {
          // bird 2
          //head
          bird.fillStyle = "rgb(255,255,255)";
          bird.fillRect(210, 300, 90, 90);
          bird.fillStyle = "rgb(255,255,255)";
          bird.fillRect(240, 270, 30, 30);

          //body
          bird.fillStyle = "rgb(255,255,255)";
          bird.fillRect(210, 390, 90, 90);
          bird.fillRect(180, 390, 150, 30);

          //feet
          bird.fillStyle = "rgb(250,250,250)";
          bird.fillRect(210, 480, 30, 30);
          bird.fillRect(240, 450, 30, 30);

          //upper wings
          bird.fillStyle = "rgb(250,250,250)";
          bird.fillRect(180, 420, 30, 30);
          bird.fillRect(300, 420, 30, 30);

          //lower wings
          bird.fillStyle = "rgb(245,245,245)";
          bird.fillRect(180, 450, 30, 90);
          bird.fillRect(300, 450, 30, 30);

          //tail
          bird.fillStyle = "rgb(255,255,255)";
          bird.fillRect(240, 510, 30, 90);
          bird.fillStyle = "rgb(250,250,250)";
          bird.fillRect(240, 540, 30, 30);

          //schnabel
          bird.fillStyle = "rgb(255,165,0)";
          bird.fillRect(240, 360, 30, 30);

          //eyes
          bird.fillStyle = "rgb(0,0,0)";
          bird.fillRect(210, 330, 30, 30);
          bird.fillRect(270, 330, 30, 30);
        }
        if (this.bird == 3) {
          // bird 3
          //head
          bird.fillStyle = "rgb(0,0,0)";
          bird.fillRect(210, 300, 90, 90);
          bird.fillStyle = "rgb(0,0,0)";
          bird.fillRect(240, 270, 30, 30);

          //body
          bird.fillStyle = "rgb(0,0,0)";
          bird.fillRect(210, 390, 90, 90);
          bird.fillRect(180, 390, 150, 30);

          //feet
          bird.fillStyle = "rgb(20,20,20)";
          bird.fillRect(210, 480, 30, 30);
          bird.fillRect(240, 450, 30, 30);

          //upper wings
          bird.fillStyle = "rgb(0,0,0)";
          bird.fillRect(180, 420, 30, 30);
          bird.fillRect(300, 420, 30, 30);

          //lower wings
          bird.fillStyle = "rgb(0,0,0)";
          bird.fillRect(180, 450, 30, 90);
          bird.fillRect(300, 450, 30, 30);

          //tail
          bird.fillStyle = "rgb(15,15,15)";
          bird.fillRect(240, 570, 30, 30);
          bird.fillStyle = "rgb(0,0,0)";
          bird.fillRect(240, 540, 30, 30);
          bird.fillRect(240, 510, 30, 60);
          //schnabel
          bird.fillStyle = "rgb(60,60,60)";
          bird.fillRect(240, 360, 30, 30);

          //eyes
          bird.fillStyle = "rgb(50,30,30)";
          bird.fillRect(210, 330, 30, 30);
          bird.fillRect(270, 330, 30, 30);
        }
        if (this.bird == 4) {
          // weasel ?
          //head
          bird.fillStyle = "rgb(51,21,4)";
          bird.fillRect(210, 360, 90, 30);

          //ears
          bird.fillRect(210, 330, 30, 30);
          bird.fillRect(270, 330, 30, 30);

          //body
          bird.fillStyle = "rgb(51,21,4)";
          bird.fillRect(210, 360, 90, 90);

          //feet
          bird.fillStyle = "rgb(51,21,4)";
          bird.fillRect(210, 480, 30, 30);
          bird.fillRect(270, 480, 30, 30);
          bird.fillRect(240, 450, 30, 30);

          //tail
          bird.fillStyle = "rgb(41,11,1)";
          bird.fillRect(240, 510, 30, 90);
          bird.fillStyle = "rgb(41,11,1)";
          bird.fillRect(240, 510, 30, 30);

          //eyes
          bird.fillStyle = "rgb(230,230,230)";
          bird.fillRect(210, 390, 30, 30);
          bird.fillRect(270, 390, 30, 30);

          //nose
          bird.fillStyle = "rgb(5,5,5)";
          bird.fillRect(240, 420, 30, 30);
        }
        if (this.bird == 5) {
          // mouse
          //body
          bird.fillStyle = "rgb(140,140,140)";
          bird.fillRect(240, 420, 90, 60);

          //tail
          bird.fillStyle = "rgb(170,170,170)";
          bird.fillRect(210, 420, 30, 60);
          bird.fillRect(180, 480, 30, 30);

          //eye
          bird.fillStyle = "rgb(0,0,0)";
          bird.fillRect(300, 420, 30, 30);

          //ear
          bird.fillStyle = "rgb(255,192,203)";
          bird.fillRect(300, 390, 30, 30);
        }

        // Trousers
        if (this.trousers == 1) {
          // Purple Trousers, gray belt
          trousers.fillStyle = "rgb(56,91,111)";
          trousers.fillRect(360, 750, 90, 30);
          trousers.fillRect(480, 750, 60, 30);
          trousers.fillStyle = "rgb(192,179,109)";
          trousers.fillRect(450, 750, 30, 30);
          trousers.fillStyle = "rgb(91,64,117)";
          trousers.fillRect(360, 780, 180, 60);
          trousers.fillRect(360, 840, 60, 120);
          trousers.fillRect(480, 840, 60, 120);
        }
        if (this.trousers == 2) {
          // Black Trousers
          trousers.fillStyle = "rgb(56,91,111)";
          trousers.fillRect(360, 750, 90, 30);
          trousers.fillRect(480, 750, 60, 30);
          trousers.fillStyle = "rgb(192,179,109)";
          trousers.fillRect(450, 750, 30, 30);
          trousers.fillStyle = "rgb(0,0,0)";
          trousers.fillRect(360, 780, 180, 60);
          trousers.fillRect(360, 840, 60, 120);
          trousers.fillRect(480, 840, 60, 120);
        }
        if (this.trousers == 3) {
          // Blue Trousers
          trousers.fillStyle = "rgb(0,0,0)";
          trousers.fillRect(360, 750, 90, 30);
          trousers.fillRect(480, 750, 60, 30);
          trousers.fillStyle = "rgb(192,179,109)";
          trousers.fillRect(450, 750, 30, 30);
          trousers.fillStyle = "rgb(22,86,150)";
          trousers.fillRect(360, 780, 180, 60);
          trousers.fillRect(360, 840, 60, 120);
          trousers.fillRect(480, 840, 60, 120);
        }
        if (this.trousers == 4) {
          // Blue Skirt
          trousers.fillStyle = "rgb(50,97,185)";
          trousers.fillRect(330, 750, 270, 210);
          trousers.fillRect(360, 720, 60, 30);
          trousers.fillRect(540, 720, 30, 30);
          trousers.fillRect(240, 930, 30, 30);
          trousers.fillRect(270, 870, 30, 90);
          trousers.fillRect(300, 810, 30, 150);
          trousers.fillRect(600, 810, 30, 150);
          trousers.fillRect(630, 870, 30, 90);
          trousers.fillRect(660, 930, 30, 30);
          trousers.fillStyle = "rgb(47,92,177)";
          trousers.fillRect(270, 930, 30, 30);
          trousers.fillRect(330, 930, 30, 30);
          trousers.fillRect(390, 930, 60, 30);
          trousers.fillRect(480, 930, 30, 30);
          trousers.fillRect(570, 930, 30, 30);
          trousers.fillRect(630, 930, 30, 30);
          trousers.fillRect(300, 870, 30, 30);
          trousers.fillRect(360, 870, 30, 30);
          trousers.fillRect(420, 870, 30, 30);
          trousers.fillRect(480, 870, 30, 30);
          trousers.fillRect(540, 870, 30, 30);
          trousers.fillRect(600, 870, 30, 30);
          trousers.fillRect(330, 810, 30, 30);
          trousers.fillRect(390, 810, 60, 30);
          trousers.fillRect(480, 810, 60, 30);
          trousers.fillRect(570, 810, 30, 30);
          trousers.fillRect(360, 750, 30, 30);
          trousers.fillRect(420, 750, 30, 30);
          trousers.fillRect(480, 750, 30, 30);
          trousers.fillRect(540, 750, 30, 30);
        }
        if (this.trousers == 5) {
          // White Skirt
          trousers.fillStyle = "rgb(255,255,255)";
          trousers.fillRect(330, 750, 270, 210);
          trousers.fillRect(360, 720, 60, 30);
          trousers.fillRect(540, 720, 30, 30);
          trousers.fillRect(240, 930, 30, 30);
          trousers.fillRect(270, 870, 30, 90);
          trousers.fillRect(300, 810, 30, 150);
          trousers.fillRect(600, 810, 30, 150);
          trousers.fillRect(630, 870, 30, 90);
          trousers.fillRect(660, 930, 30, 30);
          trousers.fillStyle = "rgb(242,242,242)";
          trousers.fillRect(270, 930, 30, 30);
          trousers.fillRect(330, 930, 30, 30);
          trousers.fillRect(390, 930, 60, 30);
          trousers.fillRect(480, 930, 30, 30);
          trousers.fillRect(570, 930, 30, 30);
          trousers.fillRect(630, 930, 30, 30);
          trousers.fillRect(300, 870, 30, 30);
          trousers.fillRect(360, 870, 30, 30);
          trousers.fillRect(420, 870, 30, 30);
          trousers.fillRect(480, 870, 30, 30);
          trousers.fillRect(540, 870, 30, 30);
          trousers.fillRect(600, 870, 30, 30);
          trousers.fillRect(330, 810, 30, 30);
          trousers.fillRect(390, 810, 60, 30);
          trousers.fillRect(480, 810, 60, 30);
          trousers.fillRect(570, 810, 30, 30);
          trousers.fillRect(360, 750, 30, 30);
          trousers.fillRect(420, 750, 30, 30);
          trousers.fillRect(480, 750, 30, 30);
          trousers.fillRect(540, 750, 30, 30);
        }
        if (this.trousers == 6) {
          // Purple Trousers, green belt
          trousers.fillStyle = "rgb(56,156,111)";
          trousers.fillRect(360, 750, 90, 30);
          trousers.fillRect(480, 750, 60, 30);
          trousers.fillStyle = "rgb(192,179,109)";
          trousers.fillRect(450, 750, 30, 30);
          trousers.fillStyle = "rgb(91,64,117)";
          trousers.fillRect(360, 780, 180, 60);
          trousers.fillRect(360, 840, 60, 120);
          trousers.fillRect(480, 840, 60, 120);
        }
        if (this.trousers == 7) {
          // Light green Trousers no Belt
          trousers.fillStyle = "rgb(169,172,91)";
          trousers.fillRect(360, 720, 60, 30);
          trousers.fillRect(360, 750, 180, 90);
          trousers.fillRect(360, 840, 60, 120);
          trousers.fillRect(480, 840, 60, 120);
        }
        if (this.trousers == 8) {
          // Black and White Trousers
          trousers.fillStyle = "rgb(255,255,255)";
          trousers.fillRect(360, 750, 180, 90);
          trousers.fillRect(360, 840, 60, 120);
          trousers.fillRect(480, 840, 60, 120);
          trousers.fillStyle = "rgb(80,80,80)";
          trousers.fillRect(360, 750, 30, 30);
          trousers.fillRect(360, 840, 30, 60);
          trousers.fillRect(390, 810, 30, 60);
          trousers.fillRect(420, 750, 60, 90);
          trousers.fillRect(480, 750, 30, 30);
          trousers.fillRect(480, 840, 30, 60);
          trousers.fillRect(510, 810, 30, 60);
          trousers.fillRect(390, 930, 30, 30);
          trousers.fillRect(510, 930, 30, 30);
        }

        // Left Hand
        if (this.sColor == 1) {
          if (this.leftHand == 1) {
            // Middle finger
            leftHand.fillStyle = "rgb(255,221,205)";
            leftHand.fillRect(630, 300, 90, 60);
            leftHand.fillRect(660, 240, 30, 60);
          }
          if (this.leftHand == 2) {
            // Beer Bottle
            leftHand.fillStyle = "rgb(136,74,1)";
            leftHand.fillRect(720, 180, 30, 30);
            leftHand.fillRect(690, 240, 90, 30);
            leftHand.fillRect(690, 360, 90, 30);
            leftHand.fillStyle = "rgb(60,99,34)";
            leftHand.fillRect(690, 270, 90, 90);
            leftHand.fillRect(720, 210, 30, 30);
            leftHand.fillStyle = "rgb(255,221,205)";
            leftHand.fillRect(660, 300, 30, 60);
            leftHand.fillRect(690, 300, 30, 30);
            leftHand.fillRect(750, 300, 30, 60);
          }
          if (this.leftHand == 3) {
            // Beer Pint
            leftHand.fillStyle = "rgb(255,255,255)";
            leftHand.fillRect(690, 240, 90, 30);
            leftHand.fillRect(780, 270, 30, 30);
            leftHand.fillStyle = "rgb(253,200,124)";
            leftHand.fillRect(690, 270, 90, 120);
            leftHand.fillStyle = "rgb(255,182,77)";
            leftHand.fillRect(720, 270, 30, 120);
            leftHand.fillRect(690, 360, 30, 30);
            leftHand.fillRect(750, 330, 30, 30);
            leftHand.fillStyle = "rgb(255,221,205)";
            leftHand.fillRect(660, 300, 30, 60);
            leftHand.fillRect(690, 300, 30, 30);
          }
          if (this.leftHand == 4) {
            // Ciggarette
            leftHand.fillStyle = "rgb(165,94,38)";
            leftHand.fillRect(660, 300, 30, 30);
            leftHand.fillStyle = "rgb(255,255,255)";
            leftHand.fillRect(720, 300, 30, 30);
            leftHand.fillStyle = "rgb(120,116,117)";
            leftHand.fillRect(750, 300, 30, 30);
            leftHand.fillRect(810, 270, 30, 30);
            leftHand.fillRect(870, 240, 30, 30);
            leftHand.fillRect(810, 180, 30, 30);
            leftHand.fillStyle = "rgb(189,189,189)";
            leftHand.fillRect(810, 150, 30, 30);
            leftHand.fillRect(840, 180, 30, 30);
            leftHand.fillRect(840, 240, 30, 30);
            leftHand.fillStyle = "rgb(255,221,205)";
            leftHand.fillRect(660, 330, 30, 30);
            leftHand.fillRect(690, 300, 30, 60);
          }
          if (this.leftHand == 5) {
            // Punk Hand?
            leftHand.fillStyle = "rgb(255,221,205)";
            leftHand.fillRect(630, 300, 90, 60);
            leftHand.fillRect(630, 270, 30, 30);
            leftHand.fillRect(690, 270, 30, 30);
            leftHand.fillRect(600, 330, 30, 30);
          }
          if (this.leftHand == 6) {
            // Hotdog
            leftHand.fillStyle = "rgb(255,144,0)";
            leftHand.fillRect(690, 270, 60, 150);
            leftHand.fillStyle = "rgb(191,54,12)";
            leftHand.fillRect(690, 210, 30, 60);
            leftHand.fillStyle = "rgb(255,221,205)";
            leftHand.fillRect(660, 300, 30, 60);
            leftHand.fillRect(690, 300, 30, 30);
          }
        }
        if (this.sColor == 2) {
          if (this.leftHand == 1) {
            leftHand.fillStyle = "rgb(165,107,70)";
            leftHand.fillRect(630, 300, 90, 60);
            leftHand.fillRect(660, 240, 30, 60);
          }
          if (this.leftHand == 2) {
            leftHand.fillStyle = "rgb(136,74,1)";
            leftHand.fillRect(720, 180, 30, 30);
            leftHand.fillRect(690, 240, 90, 30);
            leftHand.fillRect(690, 360, 90, 30);
            leftHand.fillStyle = "rgb(60,99,34)";
            leftHand.fillRect(690, 270, 90, 90);
            leftHand.fillRect(720, 210, 30, 30);
            leftHand.fillStyle = "rgb(165,107,70)";
            leftHand.fillRect(660, 300, 30, 60);
            leftHand.fillRect(690, 300, 30, 30);
            leftHand.fillRect(750, 300, 30, 60);
          }
          if (this.leftHand == 3) {
            leftHand.fillStyle = "rgb(255,255,255)";
            leftHand.fillRect(690, 240, 90, 30);
            leftHand.fillRect(780, 270, 30, 30);
            leftHand.fillStyle = "rgb(253,200,124)";
            leftHand.fillRect(690, 270, 90, 120);
            leftHand.fillStyle = "rgb(255,182,77)";
            leftHand.fillRect(720, 270, 30, 120);
            leftHand.fillRect(690, 360, 30, 30);
            leftHand.fillRect(750, 330, 30, 30);
            leftHand.fillStyle = "rgb(165,107,70)";
            leftHand.fillRect(660, 300, 30, 60);
            leftHand.fillRect(690, 300, 30, 30);
          }
          if (this.leftHand == 4) {
            leftHand.fillStyle = "rgb(165,94,38)";
            leftHand.fillRect(660, 300, 30, 30);
            leftHand.fillStyle = "rgb(255,255,255)";
            leftHand.fillRect(720, 300, 30, 30);
            leftHand.fillStyle = "rgb(120,116,117)";
            leftHand.fillRect(750, 300, 30, 30);
            leftHand.fillRect(810, 270, 30, 30);
            leftHand.fillRect(870, 240, 30, 30);
            leftHand.fillRect(810, 180, 30, 30);
            leftHand.fillStyle = "rgb(189,189,189)";
            leftHand.fillRect(810, 150, 30, 30);
            leftHand.fillRect(840, 180, 30, 30);
            leftHand.fillRect(840, 240, 30, 30);
            leftHand.fillStyle = "rgb(165,107,70)";
            leftHand.fillRect(660, 330, 30, 30);
            leftHand.fillRect(690, 300, 30, 60);
          }
          if (this.leftHand == 5) {
            leftHand.fillStyle = "rgb(165,107,70)";
            leftHand.fillRect(630, 300, 90, 60);
            leftHand.fillRect(630, 270, 30, 30);
            leftHand.fillRect(690, 270, 30, 30);
            leftHand.fillRect(600, 330, 30, 30);
          }
          if (this.leftHand == 6) {
            // Hotdog
            leftHand.fillStyle = "rgb(255,144,0)";
            leftHand.fillRect(690, 270, 60, 150);
            leftHand.fillStyle = "rgb(191,54,12)";
            leftHand.fillRect(690, 210, 30, 60);
            leftHand.fillStyle = "rgb(165,107,70)";
            leftHand.fillRect(660, 300, 30, 60);
            leftHand.fillRect(690, 300, 30, 30);
          }
        }
        if (this.sColor == 3) {
          if (this.leftHand == 1) {
            leftHand.fillStyle = "rgb(200,161,135)";
            leftHand.fillRect(630, 300, 90, 60);
            leftHand.fillRect(660, 240, 30, 60);
          }
          if (this.leftHand == 2) {
            leftHand.fillStyle = "rgb(136,74,1)";
            leftHand.fillRect(720, 180, 30, 30);
            leftHand.fillRect(690, 240, 90, 30);
            leftHand.fillRect(690, 360, 90, 30);
            leftHand.fillStyle = "rgb(60,99,34)";
            leftHand.fillRect(690, 270, 90, 90);
            leftHand.fillRect(720, 210, 30, 30);
            leftHand.fillStyle = "rgb(200,161,135)";
            leftHand.fillRect(660, 300, 30, 60);
            leftHand.fillRect(690, 300, 30, 30);
            leftHand.fillRect(750, 300, 30, 60);
          }
          if (this.leftHand == 3) {
            leftHand.fillStyle = "rgb(255,255,255)";
            leftHand.fillRect(690, 240, 90, 30);
            leftHand.fillRect(780, 270, 30, 30);
            leftHand.fillStyle = "rgb(253,200,124)";
            leftHand.fillRect(690, 270, 90, 120);
            leftHand.fillStyle = "rgb(255,182,77)";
            leftHand.fillRect(720, 270, 30, 120);
            leftHand.fillRect(690, 360, 30, 30);
            leftHand.fillRect(750, 330, 30, 30);
            leftHand.fillStyle = "rgb(200,161,135)";
            leftHand.fillRect(660, 300, 30, 60);
            leftHand.fillRect(690, 300, 30, 30);
          }
          if (this.leftHand == 4) {
            leftHand.fillStyle = "rgb(165,94,38)";
            leftHand.fillRect(660, 300, 30, 30);
            leftHand.fillStyle = "rgb(255,255,255)";
            leftHand.fillRect(720, 300, 30, 30);
            leftHand.fillStyle = "rgb(120,116,117)";
            leftHand.fillRect(750, 300, 30, 30);
            leftHand.fillRect(810, 270, 30, 30);
            leftHand.fillRect(870, 240, 30, 30);
            leftHand.fillRect(810, 180, 30, 30);
            leftHand.fillStyle = "rgb(189,189,189)";
            leftHand.fillRect(810, 150, 30, 30);
            leftHand.fillRect(840, 180, 30, 30);
            leftHand.fillRect(840, 240, 30, 30);
            leftHand.fillStyle = "rgb(200,161,135)";
            leftHand.fillRect(660, 330, 30, 30);
            leftHand.fillRect(690, 300, 30, 60);
          }
          if (this.leftHand == 5) {
            leftHand.fillStyle = "rgb(200,161,135)";
            leftHand.fillRect(630, 300, 90, 60);
            leftHand.fillRect(630, 270, 30, 30);
            leftHand.fillRect(690, 270, 30, 30);
            leftHand.fillRect(600, 330, 30, 30);
          }
          if (this.leftHand == 6) {
            // Hotdog
            leftHand.fillStyle = "rgb(255,144,0)";
            leftHand.fillRect(690, 270, 60, 150);
            leftHand.fillStyle = "rgb(191,54,12)";
            leftHand.fillRect(690, 210, 30, 60);
            leftHand.fillStyle = "rgb(200,161,135)";
            leftHand.fillRect(660, 300, 30, 60);
            leftHand.fillRect(690, 300, 30, 30);
          }
        }

        // Right Hand
        if (this.sColor == 1) {
          if (this.rightHand == 1) {
            //  Regular Hand
            rightHand.fillStyle = "rgb(255,221,205)";
            rightHand.fillRect(210, 660, 60, 90);
            rightHand.fillRect(270, 660, 30, 30);
          }
          if (this.rightHand == 2) {
            // Beer Spilling
            rightHand.fillStyle = "rgb(255,221,205)";
            rightHand.fillRect(210, 660, 60, 90);
            rightHand.fillStyle = "rgb(207,216,221)";
            rightHand.fillRect(150, 660, 30, 90);
            rightHand.fillRect(300, 660, 30, 90);
            rightHand.fillStyle = "rgb(254,193,7)";
            rightHand.fillRect(180, 660, 30, 90);
            rightHand.fillRect(270, 660, 30, 90);
            rightHand.fillStyle = "rgb(255,255,255)";
            rightHand.fillRect(180, 690, 30, 30);
            rightHand.fillStyle = "rgb(150,127,19)";
            rightHand.fillRect(330, 720, 30, 30);
            rightHand.fillRect(390, 780, 30, 30);
            rightHand.fillRect(390, 870, 30, 30);
            rightHand.fillRect(420, 930, 30, 30);
            rightHand.fillStyle = "rgb(214,193,95)";
            rightHand.fillRect(360, 750, 30, 30);
            rightHand.fillRect(390, 810, 30, 60);
            rightHand.fillRect(390, 900, 30, 30);
          }
          if (this.rightHand == 3) {
            // Beer Bottle
            rightHand.fillStyle = "rgb(255,221,205)";
            rightHand.fillRect(210, 660, 60, 90);
            rightHand.fillStyle = "rgb(121,85,71)";
            rightHand.fillRect(150, 660, 30, 90);
            rightHand.fillRect(300, 660, 30, 90);
            rightHand.fillRect(360, 690, 30, 30);
            rightHand.fillStyle = "rgb(25,33,140)";
            rightHand.fillRect(180, 660, 30, 90);
            rightHand.fillRect(270, 660, 30, 90);
            rightHand.fillRect(330, 690, 30, 30);
            rightHand.fillStyle = "rgb(255,255,255)";
            rightHand.fillRect(270, 690, 30, 30);
            rightHand.fillRect(180, 690, 30, 30);
          }
          if (this.rightHand == 4) {
            // Ciggarette
            rightHand.fillStyle = "rgb(255,221,205)";
            rightHand.fillRect(210, 660, 60, 90);
            rightHand.fillRect(270, 660, 30, 30);
            rightHand.fillStyle = "rgb(161,95,42)";
            rightHand.fillRect(270, 720, 30, 30);
            rightHand.fillStyle = "rgb(255,255,255)";
            rightHand.fillRect(210, 720, 30, 30);
            rightHand.fillStyle = "rgb(117,117,117)";
            rightHand.fillRect(180, 720, 30, 30);
            rightHand.fillRect(120, 660, 30, 30);
            rightHand.fillRect(60, 600, 30, 30);
            rightHand.fillRect(150, 570, 30, 30);
            rightHand.fillStyle = "rgb(189,189,189)";
            rightHand.fillRect(90, 630, 30, 30);
            rightHand.fillRect(150, 540, 30, 30);
            rightHand.fillRect(120, 570, 30, 30);
          }
          if (this.rightHand == 5) {
            // Gun Hand?
            rightHand.fillStyle = "rgb(255,221,205)";
            rightHand.fillRect(210, 660, 60, 60);
            rightHand.fillRect(270, 660, 30, 30);
            rightHand.fillRect(240, 720, 30, 30);
          }
          if (this.rightHand == 6) {
            // Hotdog
            rightHand.fillStyle = "rgb(255,144,0)";
            rightHand.fillRect(180, 690, 150, 60);
            rightHand.fillRect(390, 810, 30, 30);
            rightHand.fillStyle = "rgb(191,54,12)";
            rightHand.fillRect(330, 720, 60, 30);
            rightHand.fillStyle = "rgb(255,221,205)";
            rightHand.fillRect(210, 660, 60, 90);
            rightHand.fillRect(270, 660, 30, 30);
          }
        }
        if (this.sColor == 2) {
          if (this.rightHand == 1) {
            rightHand.fillStyle = "rgb(165,107,70)";
            rightHand.fillRect(210, 660, 60, 90);
            rightHand.fillRect(270, 660, 30, 30);
          }
          if (this.rightHand == 2) {
            rightHand.fillStyle = "rgb(165,107,70)";
            rightHand.fillRect(210, 660, 60, 90);
            rightHand.fillStyle = "rgb(207,216,221)";
            rightHand.fillRect(150, 660, 30, 90);
            rightHand.fillRect(300, 660, 30, 90);
            rightHand.fillStyle = "rgb(254,193,7)";
            rightHand.fillRect(180, 660, 30, 90);
            rightHand.fillRect(270, 660, 30, 90);
            rightHand.fillStyle = "rgb(255,255,255)";
            rightHand.fillRect(180, 690, 30, 30);
            rightHand.fillStyle = "rgb(150,127,19)";
            rightHand.fillRect(330, 720, 30, 30);
            rightHand.fillRect(390, 780, 30, 30);
            rightHand.fillRect(390, 870, 30, 30);
            rightHand.fillRect(420, 930, 30, 30);
            rightHand.fillStyle = "rgb(214,193,95)";
            rightHand.fillRect(360, 750, 30, 30);
            rightHand.fillRect(390, 810, 30, 60);
            rightHand.fillRect(390, 900, 30, 30);
          }
          if (this.rightHand == 3) {
            rightHand.fillStyle = "rgb(165,107,70)";
            rightHand.fillRect(210, 660, 60, 90);
            rightHand.fillStyle = "rgb(121,85,71)";
            rightHand.fillRect(150, 660, 30, 90);
            rightHand.fillRect(300, 660, 30, 90);
            rightHand.fillRect(360, 690, 30, 30);
            rightHand.fillStyle = "rgb(25,33,140)";
            rightHand.fillRect(180, 660, 30, 90);
            rightHand.fillRect(270, 660, 30, 90);
            rightHand.fillRect(330, 690, 30, 30);
            rightHand.fillStyle = "rgb(255,255,255)";
            rightHand.fillRect(270, 690, 30, 30);
            rightHand.fillRect(180, 690, 30, 30);
          }
          if (this.rightHand == 4) {
            // Ciggarette
            rightHand.fillStyle = "rgb(165,107,70)";
            rightHand.fillRect(210, 660, 60, 90);
            rightHand.fillRect(270, 660, 30, 30);
            rightHand.fillStyle = "rgb(161,95,42)";
            rightHand.fillRect(270, 720, 30, 30);
            rightHand.fillStyle = "rgb(255,255,255)";
            rightHand.fillRect(210, 720, 30, 30);
            rightHand.fillStyle = "rgb(117,117,117)";
            rightHand.fillRect(180, 720, 30, 30);
            rightHand.fillRect(120, 660, 30, 30);
            rightHand.fillRect(60, 600, 30, 30);
            rightHand.fillRect(150, 570, 30, 30);
            rightHand.fillStyle = "rgb(189,189,189)";
            rightHand.fillRect(90, 630, 30, 30);
            rightHand.fillRect(150, 540, 30, 30);
            rightHand.fillRect(120, 570, 30, 30);
          }
          if (this.rightHand == 5) {
            rightHand.fillStyle = "rgb(165,107,70)";
            rightHand.fillRect(210, 660, 60, 60);
            rightHand.fillRect(270, 660, 30, 30);
            rightHand.fillRect(240, 720, 30, 30);
          }
          if (this.rightHand == 6) {
            // Hotdog
            rightHand.fillStyle = "rgb(255,144,0)";
            rightHand.fillRect(180, 690, 150, 60);
            rightHand.fillRect(390, 810, 30, 30);
            rightHand.fillStyle = "rgb(191,54,12)";
            rightHand.fillRect(330, 720, 60, 30);
            rightHand.fillStyle = "rgb(165,107,70)";
            rightHand.fillRect(210, 660, 60, 90);
            rightHand.fillRect(270, 660, 30, 30);
          }
        }
        if (this.sColor == 3) {
          if (this.rightHand == 1) {
            rightHand.fillStyle = "rgb(200,161,135)";
            rightHand.fillRect(210, 660, 60, 90);
            rightHand.fillRect(270, 660, 30, 30);
          }
          if (this.rightHand == 2) {
            rightHand.fillStyle = "rgb(200,161,135)";
            rightHand.fillRect(210, 660, 60, 90);
            rightHand.fillStyle = "rgb(207,216,221)";
            rightHand.fillRect(150, 660, 30, 90);
            rightHand.fillRect(300, 660, 30, 90);
            rightHand.fillStyle = "rgb(254,193,7)";
            rightHand.fillRect(180, 660, 30, 90);
            rightHand.fillRect(270, 660, 30, 90);
            rightHand.fillStyle = "rgb(255,255,255)";
            rightHand.fillRect(180, 690, 30, 30);
            rightHand.fillStyle = "rgb(150,127,19)";
            rightHand.fillRect(330, 720, 30, 30);
            rightHand.fillRect(390, 780, 30, 30);
            rightHand.fillRect(390, 870, 30, 30);
            rightHand.fillRect(420, 930, 30, 30);
            rightHand.fillStyle = "rgb(214,193,95)";
            rightHand.fillRect(360, 750, 30, 30);
            rightHand.fillRect(390, 810, 30, 60);
            rightHand.fillRect(390, 900, 30, 30);
          }
          if (this.rightHand == 3) {
            rightHand.fillStyle = "rgb(200,161,135)";
            rightHand.fillRect(210, 660, 60, 90);
            rightHand.fillStyle = "rgb(121,85,71)";
            rightHand.fillRect(150, 660, 30, 90);
            rightHand.fillRect(300, 660, 30, 90);
            rightHand.fillRect(360, 690, 30, 30);
            rightHand.fillStyle = "rgb(25,33,140)";
            rightHand.fillRect(180, 660, 30, 90);
            rightHand.fillRect(270, 660, 30, 90);
            rightHand.fillRect(330, 690, 30, 30);
            rightHand.fillStyle = "rgb(255,255,255)";
            rightHand.fillRect(270, 690, 30, 30);
            rightHand.fillRect(180, 690, 30, 30);
          }
          if (this.rightHand == 4) {
            // Ciggarette
            rightHand.fillStyle = "rgb(200,161,135)";
            rightHand.fillRect(210, 660, 60, 90);
            rightHand.fillRect(270, 660, 30, 30);
            rightHand.fillStyle = "rgb(161,95,42)";
            rightHand.fillRect(270, 720, 30, 30);
            rightHand.fillStyle = "rgb(255,255,255)";
            rightHand.fillRect(210, 720, 30, 30);
            rightHand.fillStyle = "rgb(117,117,117)";
            rightHand.fillRect(180, 720, 30, 30);
            rightHand.fillRect(120, 660, 30, 30);
            rightHand.fillRect(60, 600, 30, 30);
            rightHand.fillRect(150, 570, 30, 30);
            rightHand.fillStyle = "rgb(189,189,189)";
            rightHand.fillRect(90, 630, 30, 30);
            rightHand.fillRect(150, 540, 30, 30);
            rightHand.fillRect(120, 570, 30, 30);
          }
          if (this.rightHand == 5) {
            rightHand.fillStyle = "rgb(200,161,135)";
            rightHand.fillRect(210, 660, 60, 60);
            rightHand.fillRect(270, 660, 30, 30);
            rightHand.fillRect(240, 720, 30, 30);
          }
          if (this.rightHand == 6) {
            // Hotdog
            rightHand.fillStyle = "rgb(255,144,0)";
            rightHand.fillRect(180, 690, 150, 60);
            rightHand.fillRect(390, 810, 30, 30);
            rightHand.fillStyle = "rgb(191,54,12)";
            rightHand.fillRect(330, 720, 60, 30);
            rightHand.fillStyle = "rgb(200,161,135)";
            rightHand.fillRect(210, 660, 60, 90);
            rightHand.fillRect(270, 660, 30, 30);
          }
        }
        // Name
        document.getElementById("random-name").innerText = `${
          firstNamesFemale[this.wienerName]
        } ${lastNames[this.wienerLastName]}`;
      }
    }
  }

  getSeed() { // This function pushes all the atributes into an array and returns that array as the result.
    let seed = []; // array that will hold the seed
    seed.push(this.sex);
    seed.push(this.sColor);
    seed.push(this.eColor);
    seed.push(this.eyes);
    seed.push(this.nose);
    seed.push(this.mouth);
    seed.push(this.earring);
    seed.push(this.hair);
    seed.push(this.beard);
    seed.push(this.shirt);
    seed.push(this.trousers);
    seed.push(this.leftHand);
    seed.push(this.rightHand);
    seed.push(this.vest);
    seed.push(this.chain);
    seed.push(this.bColor);
    seed.push(this.wienerName);
    seed.push(this.bird);
    return seed;
  }
}
