var pointsToWin = 120;
var PointsRange = 10; // ranges between checkpoints
var delay = 90/10; // in seconds
var timer = 15**100; // in minutes
var progressBar = {
  px: 40, // width of the progress bar (global)
  py: 1, // height of the progress bar (global)
  dbx: 1/23, // ratio of (big checkpoint witdth diameter)/(progressbar width)
  dby: 3, // ratio of (big checkpoint height diameter)/(progressbar height)
  dx: 1/35, // ratio of (small checkpoints witdth diameter)/(progressbar width)
  dy: 2, // ratio of (small checkpoints height diameter)/(progressbar height)
  offsetY: 13.2, //position from the top of screen (global)
  distanceY: 2 // height distance multiplier (global)
};
//todo: add balancing; winning team 10 points ahead = they spawn with half health 
//todo: imrove ship spawing function (randomize)
//todo: add asteroids to gumz maps 
var modUtils = {
  setTimeout: function(f,time){
    this.jobs.push({f:f,time:game.step+time});
  },
  jobs: [],
  tick: function(){
    var t = game.step;
    for (var i=this.jobs.length-1;i>=0;i--){
      var job = this.jobs[i];
      if (t>=job.time){
        try {
          job.f();
        }
        catch (err){
        }
        this.jobs.splice(i,1);
      }
    }
  }
};

var sendUI = function(ship, UI) {
  if (ship != null && typeof ship.setUIComponent == "function") {
    if (UI.visible || UI.visible == null) ship.setUIComponent(UI);
    else ship.setUIComponent({id: UI.id, position: [0,0,0,0], visible: false});
  }
};

var a = {};
a.H_Mercury = '{"name":"H-Mercury","level":6,"model":9,"size":2,"specs":{"shield":{"capacity":[250,400],"reload":[6,9]},"generator":{"capacity":[100,175],"reload":[45,60]},"ship":{"mass":430,"speed":[75,90],"rotation":[50,65],"acceleration":[60,100]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":20},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-65,-70,-60,-40,0,50,110,100],"z":[0,0,0,0,0,0,0,0]},"width":[1,5,10,20,30,25,10,0],"height":[1,5,10,15,25,20,10,0],"texture":[6,4,4,63,11,63,12],"propeller":true,"laser":{"damage":[7,12],"rate":8,"type":1,"speed":[100,190],"number":1,"error":0}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-20,"z":35},"position":{"x":[0,0,0,0,0,0,0],"y":[-20,-10,0,15,25],"z":[0,0,0,0,0]},"width":[0,10,12,10,5],"height":[0,10,13,12,5],"texture":[9,9,4,4],"propeller":false},"arms":{"section_segments":8,"offset":{"x":60,"y":0,"z":-10},"position":{"x":[0,0,0,5,10,0,0,-10],"y":[-85,-70,-80,-30,0,30,100,90],"z":[0,0,0,0,0,0,0,0]},"width":[1,5,6,15,15,15,10,0],"height":[1,5,6,20,30,25,10,0],"texture":[6,4,4,4,4,4,12],"angle":1,"propeller":true,"laser":{"damage":[2,4],"rate":4,"type":1,"speed":[150,200],"number":1,"error":0}},"canon":{"section_segments":12,"offset":{"x":100,"y":27,"z":5},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-20,0,20,30,40],"z":[0,0,0,0,0,0,0]},"width":[0,5,7,7,3,5,0],"height":[0,5,15,15,3,5,0],"angle":3,"laser":{"damage":[4,9],"rate":1.5,"type":1,"speed":[150,220],"number":1,"error":0},"propeller":false,"texture":[6,4,10,4,4,4]}},"wings":{"main":{"offset":{"x":0,"y":-15,"z":20},"length":[60,40],"width":[60,30,20],"angle":[-20,10],"position":[30,50,30],"texture":[11,11],"bump":{"position":30,"size":10}},"font":{"length":[60],"width":[20,15],"angle":[-10,20],"position":[-20,-40],"texture":[63],"bump":{"position":30,"size":10},"offset":{"x":0,"y":0,"z":0}},"font2":{"offset":{"x":0,"y":40,"z":8},"length":[60],"width":[20,15],"angle":[-10,20],"position":[20,40],"texture":[63],"bump":{"position":30,"size":10}}},"typespec":{"name":"H-Mercury","level":6,"model":9,"code":609,"specs":{"shield":{"capacity":[250,400],"reload":[6,9]},"generator":{"capacity":[100,175],"reload":[45,60]},"ship":{"mass":430,"speed":[75,90],"rotation":[50,65],"acceleration":[60,100]}},"shape":[2.806,2.807,2.354,2.037,1.822,4.151,4.081,3.789,3.595,3.471,3.406,4.17,4.202,4.284,4.413,4.508,4.834,4.883,4.011,4.534,4.917,4.734,3.583,3.454,4.418,4.409,4.418,3.454,3.583,4.734,4.917,4.534,4.011,4.883,4.834,4.508,4.413,4.284,4.202,4.17,3.406,3.471,3.595,3.789,4.081,4.151,1.822,2.037,2.354,2.807],"lasers":[{"x":0,"y":-2.8,"z":0.8,"angle":0,"damage":[7,12],"rate":8,"type":1,"speed":[100,190],"number":1,"spread":0,"error":0,"recoil":0},{"x":2.341,"y":-3.399,"z":-0.4,"angle":1,"damage":[2,4],"rate":4,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-2.341,"y":-3.399,"z":-0.4,"angle":-1,"damage":[2,4],"rate":4,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":3.895,"y":-0.917,"z":0.2,"angle":3,"damage":[4,9],"rate":1.5,"type":1,"speed":[150,220],"number":1,"spread":0,"error":0,"recoil":0},{"x":-3.895,"y":-0.917,"z":0.2,"angle":-3,"damage":[4,9],"rate":1.5,"type":1,"speed":[150,220],"number":1,"spread":0,"error":0,"recoil":0}],"radius":4.917}}';
a.Toscain = '{"name":"Toscain","level":5,"model":8,"size":1.7,"specs":{"shield":{"capacity":[275,350],"reload":[5,8]},"generator":{"capacity":[75,100],"reload":[35,50]},"ship":{"mass":300,"speed":[80,90],"rotation":[50,80],"acceleration":[80,110]}},"bodies":{"front":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[-100,-95,-25,0,25],"z":[0,0,0,0,0]},"width":[0,20,40,40,20],"height":[0,10,35,20,5],"texture":[63,11,2,63],"laser":{"damage":[14,30],"rate":1,"type":2,"speed":[150,200],"number":1,"recoil":50,"error":0}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":0,"z":10},"position":{"x":[0,0,0,0,0],"y":[-70,-70,-25,0,100],"z":[0,0,0,0,9]},"width":[0,10,15,15,10],"height":[0,15,35,20,0],"texture":[9,9,9,4]},"lasers":{"section_segments":8,"angle":15,"offset":{"x":1,"y":-5,"z":-3},"position":{"x":[0,0,0],"y":[-90,-70,-100],"z":[0,0,0]},"width":[5,5,0],"height":[5,5,0],"texture":[6],"laser":{"damage":[3.75,6],"rate":2,"type":1,"speed":[100,130],"number":2,"angle":45,"error":0}},"motor":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[10,20,30,100,95],"z":[0,0,0,0,0]},"width":[0,40,50,50,0],"height":[0,10,15,20,0],"texture":[63,63,10,4]},"propulsors":{"section_segments":8,"offset":{"x":25,"y":0,"z":0},"position":{"x":[0,0,0],"y":[30,105,100],"z":[0,0,0]},"width":[15,15,0],"height":[10,10,0],"propeller":true,"texture":[12]}},"wings":{"main":{"doubleside":true,"offset":{"x":30,"y":80,"z":0},"length":[70,20],"width":[80,20],"angle":[0,0],"position":[-20,0],"texture":[11],"bump":{"position":20,"size":10}},"winglets":{"doubleside":true,"offset":{"x":98,"y":81,"z":-20},"length":[20,50,20],"width":[20,35,20],"angle":[90,90,90],"position":[0,0,0,0],"texture":[63],"bump":{"position":30,"size":50}}},"typespec":{"name":"Toscain","level":5,"model":8,"code":508,"specs":{"shield":{"capacity":[275,350],"reload":[5,8]},"generator":{"capacity":[75,100],"reload":[35,50]},"ship":{"mass":300,"speed":[80,90],"rotation":[50,80],"acceleration":[80,110]}},"shape":[3.4,3.354,3.556,2.748,2.336,2.055,1.858,1.732,1.634,1.548,1.462,1.404,1.371,1.36,1.241,1.161,1.723,4.485,5.01,4.795,4.111,3.842,3.82,3.753,3.634,3.407,3.634,3.753,3.82,3.842,4.111,4.795,5.01,4.485,1.723,1.161,1.241,1.353,1.371,1.404,1.462,1.548,1.634,1.732,1.858,2.055,2.336,2.748,3.556,3.354],"lasers":[{"x":0,"y":-3.4,"z":0,"angle":0,"damage":[14,30],"rate":1,"type":2,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":50},{"x":-0.846,"y":-3.454,"z":-0.102,"angle":15,"damage":[3.75,6],"rate":2,"type":1,"speed":[100,130],"number":2,"spread":45,"error":0,"recoil":0},{"x":0.846,"y":-3.454,"z":-0.102,"angle":-15,"damage":[3.75,6],"rate":2,"type":1,"speed":[100,130],"number":2,"spread":45,"error":0,"recoil":0}],"radius":5.01}}';
var ships = [];
for (let ship in a) ships.push(a[ship]);

var vocabulary = [
  {text: "Yes", icon:"\u004c", key:"Y"},
  {text: "No", icon:"\u004d", key:"N"},
  {text: "Defend", icon:"\u0025", key:"D"},
  {text: "Kill", icon:"\u007f", key:"K"},
  {text: "Sorry", icon:"\u00a1", key:"S"},
  {text: "Thanks", icon:"\u0041", key:"X"},
  {text: "You", icon:"\u004e", key:"O"},
  {text: "Me", icon:"\u004f", key:"E"},
  {text: "No Problem", icon:"\u0047", key:"P"},
  {text: "Attack", icon:"\u0049", key:"A"},
  {text: "Help", icon:"\u004a", key:"H"},
  {text: "Hmmm?", icon:"\u004b", key:"Q"},
  {text: "GoodGame", icon:"\u00a3", key:"G"},
  {text: "Wait", icon:"\u0048", key:"T"},
  {text: "Base", icon:"\u0034", key:"B"},
  {text: "Follow", icon:"\u0050", key:"F"},
  {text: "Why?", icon:"KK", key:"I"},
  {text: "Love", icon:"\u0024", key:"L"},
  {text: "Bruh", icon:"˙ ͜ʟ˙", key:"M"},
  {text: "WTF", icon:"ಠ_ಠ", key:"W"}
];

var ships_list = [
  ["Fly"],
  ["Delta-Fighter","Trident"],
  ["Pulse-Fighter","Side-Fighter","Shadow-X-1","Y-Defender"],
  ["Vanguard","Mercury","X-Warrior","Side-Interceptor","Pioneer","Crusader"],
  ["U-Sniper","FuryStar","T-Warrior","Aetos","Shadow X-2","Howler","Bat-Defender","Toscain"],
  ["Advanced-Fighter","Scorpion","Marauder","Condor","A-Speedster","Rock-Tower","Baracuda","O-Defender","H-Mercury"],
  ["Odyssey","Shadow X-3","Bastion","Aries"]
], ship_codes = ships_list, remove_ships = [101,201,202,601,602,703];

for (let i=0; i<ship_codes.length; i++){
  for (let j=0;j<ship_codes[i].length; j++){
    ship_codes[i][j] = ((i+1)*100+j+1);
  }  
}
ship_codes = ship_codes.map(ships => ships.filter(ship => remove_ships.indexOf(ship) == -1));
//let t = Array(7).fill(0).map((i,j) => Array(99).fill(0).map((k,l) => (j+1)*100 + l + 1)); // max torturing test

function random(num){
  return Math.floor(num*Math.random());
}

function getLevel(code){
  return Math.trunc(code/100);
}

function randomPath(shipTree, tierGap){
  // checking  0 <= tierGap < Infinity
  if (isNaN(tierGap)) tierGap = Infinity;
  tierGap = Math.max(tierGap, 0);
  // clone the ship tree and index array, complexity O(n) for each clone:
  let clone = shipTree.flat().sort((a,b) => a-b);
  let indexes = clone.map((j,i) => i);
  // ok what - O(n^2)
  for (let i = 0; i < clone.length; i++) {
    let val = clone[i];
    let cIndexes = JSON.parse(JSON.stringify(indexes));
    while (cIndexes.length > 0) {
      let rIndex = cIndexes.splice(random(cIndexes.length), 1)[0];
      if (Math.abs(getLevel(clone[rIndex]) - getLevel(val)) <= tierGap && Math.abs(getLevel(clone[rIndex-1]||val) - getLevel(val)) <= tierGap) {
        clone.splice(i,1);
        if (i < rIndex) rIndex--;
        clone.splice(rIndex, 0, val);
        break;
      }
    }
  }
  // Overal O(n^2 + 2n)
  return clone;
}

var stages = {
  level_1: [703,601,601].map((a) => ({sort:Math.random(),value:a})).sort((a, b) => a.sort - b.sort).map((a) => a.value)[0],
  level_2: [703,601,602].filter(a => a != 703)[1],
  level_3: ship_codes[4][~~(Math.random()*ship_codes[4].length)],
  level_12: 101
};

let random_ships = randomPath(ship_codes,1).concat().filter(a => a != stages.level_3);
for (let i=4; i<12; i++){
  stages[`level_${i}`] = random_ships[i]; 
}

function findShipCode(name){
  for (let i=0;i<ships_list.length;i++)
  for (let j=0;j<ships_list[i].length;j++)
  if (ships_list[i][j] == name) return (i+3)*100+j+1;
  return null;
}
console.log(stages);
var maps = [
  {name: "Heart's Edge", author: "X7", map:
    "    9999999999999999999    9999999999999999999    \n"+
    "    9               999    999               9    \n"+
    "                     99    99                     \n"+
    "99                    9    9                    99\n"+
    "9                                                9\n"+
    "9              9                  9              9\n"+
    "9             99                  99             9\n"+
    "9            99                    99            9\n"+
    "9     9     99        9999999       99     9     9\n"+
    "9     99   99        99     99       99   99     9\n"+
    "9      9  99                          99  9      9\n"+
    "9      9                                  9      9\n"+
    "9      9                                  9      9\n"+
    "9      9                                  9      9\n"+
    "9     99                                  99     9\n"+
    "9     9                                    9     9\n"+
    "9                  9          9                  9\n"+
    "9                  99        99                  9\n"+
    "9                   99      99                   9\n"+
    "9            999     99    99     999            9\n"+
    "9           99999     9    9     99999           9\n"+
    "9          999999                999999          9\n"+
    "9         9999999                9999999         9\n"+
    "9        9999999                  9999999        9\n"+
    "9       99999999                  99999999       9\n"+
    "9       99999999                  99999999       9\n"+
    "9        9999999                  9999999        9\n"+
    "9         9999999                9999999         9\n"+
    "9          999999                999999          9\n"+
    "9           99999     9    9     99999           9\n"+
    "9            999     99    99     999            9\n"+
    "9                   99      99                   9\n"+
    "9                  99        99                  9\n"+
    "9                  9          9                  9\n"+
    "9     9                                    9     9\n"+
    "9     99                                  99     9\n"+
    "9      9                                  9      9\n"+
    "9      9                                  9      9\n"+
    "9      9                                  9      9\n"+
    "9      9  99                          99  9      9\n"+
    "9     99   99        99     99       99   99     9\n"+
    "9     9     99        9999999       99     9     9\n"+
    "9            99                    99            9\n"+
    "9             99                  99             9\n"+
    "9              9                  9              9\n"+
    "9                                                9\n"+
    "99                    9    9                    99\n"+
    "                     99    99                     \n"+
    "    9               999    999               9    \n"+
    "    9999999999999999999    9999999999999999999    ",
  shipspawn: [{x:-210,y:0},{x:210,y:0}],
  radar: {type:"box",width:10,height:18}
  },
  {name: "Torment", author: "Gumz", map:
    "    8999999999999999999    9999999999999999998    \n"+
    "    8999999999999778  9    9  8779999999999998    \n"+
    "     799999999778                877999999997     \n"+
    "      89999998        9    9        89999998      \n"+
    "88     799977                        779997     88\n"+
    "997     898                            898     799\n"+
    "9998     7            9    9            7     8999\n"+
    "99997                99977999                79999\n"+
    "999998                9    9                899999\n"+
    "9999997     9                        9     7999999\n"+
    "999998       9                      9       899999\n"+
    "99997       7                        7       79999\n"+
    "99997                                        79999\n"+
    "9998            6                6            8999\n"+
    "997                                            799\n"+
    "997                                            799\n"+
    "998                9          9                899\n"+
    "97                7 9        9 7                79\n"+
    "97                                              79\n"+
    "98                                              89\n"+
    "9                      9998                      9\n"+
    "9      9                  9               9      9\n"+
    "99 9  999                                999  9 99\n"+
    "       9            89 7  7  9            9       \n"+
    "       7            9        9            7       \n"+
    "       7            9        9            7       \n"+
    "       9            9  7  7 98            9       \n"+
    "99 9  999                                999  9 99\n"+
    "9      9               9                  9      9\n"+
    "9                      8999                      9\n"+
    "98                                              89\n"+
    "97                                              79\n"+
    "97                  9        9                  79\n"+
    "998                9          9                899\n"+
    "997                 7        7                 799\n"+
    "997                                            799\n"+
    "9998            6                6            8999\n"+
    "99997                                        79999\n"+
    "99997       7                        7       79999\n"+
    "999998       9                      9       899999\n"+
    "9999997     9                        9     7999999\n"+
    "999998                9    9                899999\n"+
    "99997                99977999                79999\n"+
    "9998     7            9    9            7     8999\n"+
    "997     898                            898     799\n"+
    "88     799977                        779997     88\n"+
    "      89999998        9    9        89999998      \n"+
    "     799999999778                877999999997     \n"+
    "    8999999999999778  9    9  8779999999999998    \n"+
    "    8999999999999999999    9999999999999999998    ",
  shipspawn: [{x:-100,y:0},{x:100,y:0}],
  radar: {type:"box",width:10,height:18}
  },
  {name: "VY Asylum", author: "Gumz", map:
    "997    898    799999997    799999997    898    799\n"+
    "997  7 8998    7 7 7 7      7 7 7 7    8998 7  799\n"+
    "77      88                              88      77\n"+
    "    98   8                              8   89    \n"+
    "   99                                        99   \n"+
    " 7 8 8        8                             8 8 7 \n"+
    "      8      898                99         8      \n"+
    "88                               9              88\n"+
    "998                                            899\n"+
    "8998                                          8998\n"+
    " 8                                 7            8 \n"+
    "                                  7     5         \n"+
    "         5       7                                \n"+
    "                  7                               \n"+
    "7                        5                       7\n"+
    "97                       5                      79\n"+
    "9                        7        5      8       9\n"+
    "97    99    9            7       5      9       79\n"+
    "9     9                 79             8 8       9\n"+
    "97             5        999    7                79\n"+
    "9               77     79999  7                  9\n"+
    "97               777  999999999                 79\n"+
    "7                 7999999999997                  7\n"+
    "                   79999999999997777555           \n"+
    "                   79999999999999775              \n"+
    "                    999999999997                  \n"+
    "          99        7999999999           3        \n"+
    "7                   9999999999                   7\n"+
    "97                 79999999997              99  79\n"+
    "9                  999999999999             99   9\n"+
    "97                79999     9997      99        79\n"+
    "9     8 8        79999       7775                9\n"+
    "97     9         797           75               79\n"+
    "9       8       777             55               9\n"+
    "97             77                               79\n"+
    "7              7                  5        5     7\n"+
    "              5                    5              \n"+
    "             5                                    \n"+
    "                                                  \n"+
    " 8                                              8 \n"+
    "8998      5                          8        8998\n"+
    "998                                  98        899\n"+
    "88              9                    8          88\n"+
    "      8         99        5                8      \n"+
    " 7 8 8                                      8 8 7 \n"+
    "   99                                        99   \n"+
    "    98   8                              8   89    \n"+
    "77      88                              88      77\n"+
    "997  7 8998    7 7 7 7      7 7 7 7    8998 7  799\n"+
    "997    898    799999997    799999997    898    799",
  shipspawn: [{x:-130,y:0},{x:130,y:0}],
  radar: {type:"box",width:10,height:18}
  },
  {name: "Hryudigas", author: "Rob0nuko", map:
    "99   999999999999999   9999   999999999999999   99\n"+
    "99    99999             99             99999    99\n"+
    "  9    999                              999    9  \n"+
    "   7                9        9                7   \n"+
    "    5              999      999              5    \n"+
    "9            999999999  99  999999999            9\n"+
    "99         9999999999   99   9999999999         99\n"+
    "999                                            999\n"+
    "999                                            999\n"+
    "999                                            999\n"+
    "99                                              99\n"+
    "99      9    99999              99999    9      99\n"+
    "99     99       999            999       99     99\n"+
    "99    99         99    7  7    99         99    99\n"+
    "99   99                                    99   99\n"+
    "99   9                  77                  9   99\n"+
    "99   9                                      9   99\n"+
    "99   9           99    7  7    99           9   99\n"+
    "99               99            99               99\n"+
    "99              999            999              99\n"+
    "99      9      999              999      9      99\n"+
    "99            999  9          9  999            99\n"+
    "999     9    99   9            9   99    9     999\n"+
    " 999    99                              99    999 \n"+
    "  99    99                              99    99  \n"+
    "  99    99                              99    99  \n"+
    " 999    99                              99    999 \n"+
    "999     9    99   9            9   99    9     999\n"+
    "99            999  9          9  999            99\n"+
    "99      9      999              999      9      99\n"+
    "99              999            999              99\n"+
    "99               99            99               99\n"+
    "99   9           99    7  7    99           9   99\n"+
    "99   9                                      9   99\n"+
    "99   9                  77                  9   99\n"+
    "99   99                                    99   99\n"+
    "99    99         99    7  7    99         99    99\n"+
    "99     99       999            999       99     99\n"+
    "99      9    99999              99999    9      99\n"+
    "99                                              99\n"+
    "999                                            999\n"+
    "999                                            999\n"+
    "999                                            999\n"+
    "99         9999999999   99   9999999999         99\n"+
    "9            999999999  99  999999999            9\n"+
    "    5              999      999              5    \n"+
    "   7                9        9                7   \n"+
    "  9    999                              999    9  \n"+
    "99    99999             99             99999    99\n"+
    "99   999999999999999   9999   999999999999999   99",
  shipspawn: [{x:-210,y:0},{x:210,y:0}],
  radar: {type:"box",width:10,height:18}
  },
  {name: "Passageways", author: "Rob0nuko", map:
    "9    99   99            99            99   99    9\n"+
    "     99   99                          99   99     \n"+
    "    999   9    999              999    9   999    \n"+
    "   999          999            999          999   \n"+
    "  999            999          999            999  \n"+
    "                  99999999999999                  \n"+
    "           999     999999999999     999           \n"+
    "            999                    999            \n"+
    "9999         999                  999         9999\n"+
    "999           999       99       999           999\n"+
    "       9999    99999    99    99999    9999       \n"+
    "      999999    99999   99   99999    999999      \n"+
    "          999           99           999          \n"+
    "           999          99          999           \n"+
    "999         99          99          99         999\n"+
    "9999        99          99          99        9999\n"+
    "  999       99     9    99    9     99       999  \n"+
    "   99       99    99    99    99    99       99   \n"+
    "   99        9   99            99   9        99   \n"+
    "   99   9        99            99        9   99   \n"+
    "   99   99       99            99       99   99   \n"+
    "    9   99       99            99       99   9    \n"+
    "        99       99            99       99        \n"+
    "        99       99            99       99        \n"+
    "9       99       99     99     99       99       9\n"+
    "9       99       99     99     99       99       9\n"+
    "        99       99            99       99        \n"+
    "        99       99            99       99        \n"+
    "    9   99       99            99       99   9    \n"+
    "   99   99       99            99       99   99   \n"+
    "   99   9        99            99        9   99   \n"+
    "   99        9   99            99   9        99   \n"+
    "   99       99    99    99    99    99       99   \n"+
    "  999       99     9    99    9     99       999  \n"+
    "9999        99          99          99        9999\n"+
    "999         99          99          99         999\n"+
    "           999          99          999           \n"+
    "          999           99           999          \n"+
    "      999999    99999   99   99999    999999      \n"+
    "       9999    99999    99    99999    9999       \n"+
    "999           999       99       999           999\n"+
    "9999         999                  999         9999\n"+
    "            999                    999            \n"+
    "           999     999999999999     999           \n"+
    "                  99999999999999                  \n"+
    "  999            999          999            999  \n"+
    "   999          999            999          999   \n"+
    "    999   9    999              999    9   999    \n"+
    "     99   99                          99   99     \n"+
    "9    99   99            99            99   99    9",
  shipspawn: [{x:-150,y:0},{x:150,y:0}],
  radar: {type:"box",width:10,height:18}
  },  
];

var colors = [
  {team:"Red",hue:0,team2:"Blue",hue2:240},
  {team:"Yellow",hue:60,team2:"Pink",hue2:300},
  {team:"Green",hue:120,team2:"Purple",hue2:270},
  {team:"Aqua",hue:150,team2:"Orange",hue2:30}
].map((a) => ({sort:Math.random(),value:a})).sort((a, b) => a.sort - b.sort).map((a) => a.value);

var teams = {
  names: [colors[0].team,colors[0].team2],
  points: [109,109],
  points2: [109,109],
  count: [0,0],
  ships: [[],[]],
  hues: [colors[0].hue,colors[0].hue2],
  level: [1,1],
  update: [false,false]
};

var update = 1;
if (!game.custom.map) game.custom.map = maps[Math.trunc(Math.random()*maps.length)];
var map = game.custom.map;
delay = delay*60;
timer = timer*60*60+delay;

this.options = {
  vocabulary: vocabulary,
  custom_map: map.map,
  soundtrack: ["crystals.mp3","argon.mp3"][~~(Math.random()*2)],
  weapons_store: false,
  friendly_colors: 2,
  radar_zoom: 1,
  map_size: 50,
  starting_ship: 801,
  crystal_value: 0,
  speed_mod: 1.5,
  max_players: 12,
  ships: ships,
  release_crystal: false,
  hues: [colors.hue,colors.hue2],
  asteroids_strength: 1e6,
  crystal_drop: 0,
  max_level: 1,
  shield_regen_factor: 0.3
};

var check = function(game, isWaiting, isGameOver){
  modUtils.tick();
  if (game.step % 30 === 0){
    teams.count = [0,0];
    for (let ship of game.ships){
      if (!ship.custom.init){
        ship.custom.init = true;
        ship.custom.frags = 0;
        ship.custom.deaths = 0;
        ship.custom.ship = stages.level_1;        
        setteam(ship);
        setup(ship);
        //sendUI(ship, game.custom.radar_background);
        if (isGameOver) gameover(ship);
      }
      else if (isGameOver && !ship.custom.exited){
        modUtils.setTimeout(function(){gameover(ship)},300);
        ship.custom.exited = true
      }
      if (!ship.custom.joined && !isWaiting && !isGameOver) {
        joinmessage(ship);
        ship.custom.joined = true;
      }
      ship.set({idle:!!isWaiting,collider:!(isWaiting || isGameOver)})
      teams.count[ship.custom.team]++;
      (ship.score != ship.custom.frags) && ship.set({score:ship.custom.frags});
    }
  }
}, FormatTime = function(tick, forced, forceAll){
  var array = Array(3).fill(0).map((i,j) => Math.floor((tick%(60**(j+2)))/(60**(j+1)))).reverse();
  while (array.length > forceAll && array[0] == 0) array.splice(0,1);
  forced = forced.reverse().slice(0,array.length).reverse();
  return array.map((i,j) => (i<10&&(j==0?forced[j]:!0))?"0"+i.toString():i).join(":");
}

var endgametext = ["Unknown", "Unknown"], endgamestatus = {};
var gameover = function (ship){
  ship.gameover({
    "Match status": endgametext[0],
    "Match results": endgametext[1],
    "Frags": ship.custom.frags,
    "Deaths": ship.custom.deaths,
    " ": " ",
    "#. Best killers":"Frags",
    ...endgamestatus
  });
  ship.custom.exited = true;
}

var waiting = function(game){
  check(game, true);
  if (game.step % 30 === 0) 
  for (let ship of game.ships){
    sendUI(ship, {
      id: "delay",
      position: [39,18,42,40],
      visible: true,
      components: [
        {type: "text",position:[2,5,80/1.5,33/1.5],value:"Waiting for more players...",color:"#cde"},
      ]
    });
    sendUI(ship, {
      id: "scoreboard",
      visible: true,
      components: [
        {type: "text",position:[15,0,70,10],value:"Waiting for more players...",color:"#cde"},
      ]
    });
  }
  if (game.step >= delay){
    checkscores(game);
    updateScoreboard(game);
    sendUI(game, {id:"delay time",visible:false});
    sendUI(game, {id:"delay",visible:false});
    this.tick = main_game;
  }
  else {
    for (let ship of game.ships)
    sendUI(ship, {
      id: "delay time",
      position: [45.7,26,10,7],
      visible: true,
      components: [
        {type: "text",position:[0,0,100,50],value:`${FormatTime(delay - game.step, [], 1)}`,color:"#cde"},
      ]
    });
  }
}, main_game = function(game){
  check(game);
  //if (Math.min(...teams.count) == 0) finishgame(game, 2);
  if (Math.max(...teams.points) >= pointsToWin) finishgame(game, 1);
  else if (game.step % 30 === 0){
    let time = timer;
    if (game.step < time){
      if (game.step > delay){
        sendUI(game, {
          id: "timer",
          position: [2.5,28,15,10],
          visible: true,
          components: [
            {type: "text",position:[0,0,100,50],value:`Time left: ${FormatTime(time - game.step, [false, true, true], 2)}`,color:"#cde"},
          ]
        });
      }
    } else finishgame(game, 0);
  }
  if (update){
    checkscores(game);
    updateScoreboard(game);
    update = 0;
  }
  if (game.step % 60 === 0){
    //checkteambase(game)
    checkstatus(game);
    updateScoreboard(game);
  }
}, finishgame = function(game, condition){
  // conditions: 0 (time's up), 1 (reach enough kills), 2 (all one team left)
  let win;
  if (condition != 2) {
    if (teams.points[0] != teams.points[1]){
      win = teams.points.indexOf(Math.max(...teams.points));
      endgametext = `${teams.names[win]} team wins!`;
    } else endgametext = "It's a draw!";
    endgametext = [condition?`${teams.names[win]} team reaches ${pointsToWin} kills`:"Time's up!", endgametext];
  }
  else {
    win = teams.count.indexOf(0);
    if (win == -1) return;
    win = 1 - win;
    endgametext = [`All ${teams.names[1-win]} players left`, `${teams.names[win]} team wins!`];
  }
  game.ships.sort((a,b) => (b.custom.frags || 0) - (a.custom.frags || 0)).slice(0,3).forEach((ship,i) => {
    endgamestatus[(i+1)+". "+ship.name] = ship.custom.frags
  });
  game.custom.ended = true;
  game.setOpen(false);
  sendUI(game, {
    id: "timer",
    position: [2.5,28,15,10],
    visible: true,
    components: [
      {type: "text",position:[0,0,100,50],value:"Game finished!",color:"#cde"},
    ]
  });
  sendUI(game, {
    id: "end",
    position: [35,25,30,15],
    visible: true,
    components: [
      {type:"text",position:[0,0,100,50],value:endgametext[0],color:"#cde"},
      {type:"text",position:[0,50,100,50],value:endgametext[1],color:"#cde"}
    ]
  });
  this.tick = endgame;
}.bind(this), endgame = function(game){
  check(game, false, true);
};

this.tick = waiting;

function checkscores(game){
  let filled = teams.points.map(i => i/pointsToWin);
  let index = teams.points.map(i => Math.trunc(i/PointsRange));
  let hues = [[`hsla(${Math.abs(teams.hues[0]-5)}, 100%, 62.55%, 0.7)`,`hsla(${Math.abs(teams.hues[1]-7)}, 97%, 74%, .7)`],["hsl(353, 100%, 55%)","hsl(233, 100%, 55%)"]];
  let checked = [["hsla(210, 50%, 87%, 1)","hsla(210, 50%, 87%, 1)"]]; // color for unachieved checkpoints
  let achieved = [[`hsla(${Math.abs(teams.hues[0])}, 100%, 62.55%, 1)`,`hsla(${Math.abs(teams.hues[1])}, 97%, 74%, 1)`],[`hsl(${Math.abs(teams.hues[0]*2)}, 100%, 1)`,`hsl(${Math.abs(teams.hues[1]*2)}, 100%, 1)`]]; // checkpoints' color after the checkpoint has finished
  let {px, py, dbx, dby, dx, dy, offsetY, distanceY} = progressBar;
  let rbax = (1 + dbx/2);
  let rpy = dy/dby;
  let pax = dx/rbax;
  let apx = px * rbax;
  let apy = py * dby;
  let p = Math.trunc(pointsToWin/PointsRange);
  // let ty = 100 - rby;
  for (let i=0; i<2; i++){
    sendUI(game, {
      id: "progressBar"+i,
      position: [(100 - apx)/2, offsetY+i*distanceY*apy, apx, apy], 
      visible: true,
      components: [
        {type:"box",position:[0, 50*(1 - 1/dby), 100/rbax, 100/dby],fill:"hsla(170, 32%, 28%, .1)",stroke:"hsla(170, 32%, 28%, 1)",width:2},
        {type:"box",position:[0, 50*(1 - 1/dby), 100/rbax*filled[i], 100/dby],fill:hues[0][i]},
        ...Array(p-1).fill(0).map((v,j) => ({type:"round",position:[100*(p*PointsRange/pointsToWin)/rbax/p*(j+1) - 50*pax, 50*(1 - rpy), 100*pax, 100*rpy],fill:((index[i]>=j+1)?achieved:checked)[0][i]})),
        {type:"round",position:[100*(2/rbax - 1), 0, 200*(1 - 1/rbax), 100],fill:((index[i]>=p)?achieved:checked)[0][i]}
      ]
    }); 
  }
}

function checkstatus(game, team){
  let upgraded = [[],[]];
  let checkpoints = Array.from(Array(12).fill({1:0}).map(a => a*13).keys()).map((a,b) => (b+1)*10);
  //for (let j=0; j<2; j++) for (let i=0; i<12; i++) upgraded[j].push({[(i+1)*10]:0});
  for (let i=0; i<2; i++){
    if (teams.points2[i] % 10 === 0 && teams.points2[i] > 1){
      teams.points2[i] += .05
      teams.level[i]++;
      for (let ship of game.ships)
        if (ship.team == i) 
        ship.set({type:stages[`level_${teams.level[i]}`],invulnerable:60,stats:88888888,shield:999});
    }
  }
}

function setup(ship){
  let t = ship.custom.team;
  let level = Math.trunc(ship.type/100);
  let gems = ((level**2)*20)/1.5;
  let x = map.shipspawn[t].x,
  y = map.shipspawn[t].y,r=0;
  ship.set({x:x,y:y,stats:88888888,invulnerable:300,shield:999});
}

function setteam(ship){
  let t;
  if ([...new Set(teams.count)].length == 1) t=teams.points.indexOf(Math.min(...teams.points));
  else t = teams.count.indexOf(Math.min(...teams.count));
  ship.custom.team = t;
  configship(ship, t);
}

function configship(ship,t){
  ship.set({hue:teams.hues[t],team:t,type:stages[`level_${teams.level[t]}`],invulnerable:300,stats:88888888,shield:999});
}

function joinmessage(ship){
  sendUI(ship, {
    id: "join",
    position: [32,16,34,32],
    visible: true,
    components: [
      {type: "text",position:[0,3,100,50],value:`Kill the enemy team to unlock new ships for your team!`,color:"#cde"},
      {type: "text",position:[10,21,80,35],value:`First team to reach ${pointsToWin} kills wins`,color:"#cde"},
    ]
  });
  sendUI(ship, {
    id: "map info",
    position: [2,88,24,22],
    visible: true,
    components: [
      {type: "text",position:[0,0,100,50],value:`Map: ${map.name} by ${map.author}`,color:"#cde"},
    ]
  });
  modUtils.setTimeout(function(){
    sendUI(ship, {id:"join",visible:false});
  },480);
}

var scoreboard = {
  id:"scoreboard",
  visible: true,
  components: []
};

function getcolor(color){
  return `hsla(${color},100%,50%,1)`;
}

var def_clr = "hsla(210, 50%, 87%, 1)";

function updateScoreboard(game){
  scoreboard.components = [];
  for (let i=0; i<2; i++){
    scoreboard.components.push({type:"box",id:"la"+i,position:[0,0+i*50,100,7],fill:getcolor(teams.hues[i]),stroke:"hsla(0, 0%, 41%, 1)",width:2});
    scoreboard.components.push({type:"text",id:"na"+i,position:[20,0+i*50,60,7],value:teams.names[i],color:"hsla(0, 0%, 0%, 1)"});
  }
  let icons = ["\u{2693}","\u{2694}","\u{1F9C0}","\u{1F52B}","\u{1F320}","\u{1F47E}","\u{1F577}","\u{1F43B}","\u{1F480}","\u{1F512}","\u{1F531}","\u{1F41F}","\u{1F340}","\u{1F5E1}"];
  let line = 0, line2 = 0;
  let sa = []
  for (let i=0; i<game.ships.length; i++)
  sa[i] = game.ships[i];
  let sc = sa.sort((a,b) => b.custom.frags - a.custom.frags);
  for (let i=0; i<sc.length; i++){
    let ship = sc[i];
    let shipicon = icons[(ship.type-700)-1];
    if (ship.type > 790) shipicon = "\u{1F30C}";
    let length = Math.log(ship.score) * Math.LOG10E + 1 | 0;
    let fix = 0//length*2.4;
    if (ship != null){
      switch (ship.custom.team){
        case 0:
          if (line>=5) break;
          scoreboard.components.push(
            {type:"player",id:ship.id,position:[1,7+(line*8+1.5),60,7],color:def_clr,align:"left"},
            //{type:"text",position:[65,7+(line*8+1.5),60,7],value:shipicon,color:def_clr},
            {type:"text",position:[29-fix,7+(line*8+1.5),60,7],value:ship.score,color:def_clr,align:"right"}
          )
          line++;
        break;
        case 1:
          if (line2>=5) break;
          scoreboard.components.push(
            {type:"player",id:ship.id,position:[1,57+(line2*8+1.5),60,7],color:def_clr,align:"left"},
            //{type:"text",position:[65,57+(line2*8+1.5),60,7],value:shipicon,color:def_clr},
            {type:"text",position:[29-fix,57+(line2*8+1.5),60,7],value:ship.score,color:def_clr,align:"right"}
          )
          line2++;
        break;
      }
    }
  }
  outputScoreboard(game);
};

function outputScoreboard(game){
  for (let ship of game.ships) {
    let o = [...scoreboard.components], t = scoreboard.components.map(x => (x.id != null)?x.id:-1).indexOf(ship.id);
    if (t != -1) scoreboard.components.splice(t,0,{type:"box",position:scoreboard.components[t].position.map((j,i) => (i==2)?100:j),fill:"hsla(210,24.3%,29%,0.5)"});
    sendUI(ship, scoreboard);
    scoreboard.components = [...o];
  }
}

game.custom.radar_background = {
  id: "radar_background",
  components: [],
};

var scale_pos = 100 / (this.options.map_size * 10);
var scale_size = 50 / this.options.map_size;
function addRadarSpot (x, y, type, width, height, alpha, color){
  game.custom.radar_background.components.push({
    type: type,
    position: [
      50+x*scale_pos-width*scale_size/2,
      50-y*scale_pos-height*scale_size/2,
      width*scale_size, height*scale_size,
    ],
    fill:`hsla(${color},100%,50%,${alpha})`
  });
}

for (let i=0; i<map.shipspawn.length; i++){
  addRadarSpot(map.shipspawn[i].x,map.shipspawn[i].y,map.radar.type,map.radar.width,map.radar.height,0.3,teams.hues[i]);
  addRadarSpot(map.shipspawn[i].x,map.shipspawn[i].y,map.radar.type,map.radar.width-2,map.radar.height-2,0.2,teams.hues[i]);
}

this.event = function(event, game){
  let ship = event.ship;
  if (ship != null) switch (event.name){
    case "ship_destroyed":
      let killer = event.killer;
      if (killer != null){
        ship.set({collider:true});
        teams.points[killer.custom.team]++;
        teams.points2[killer.custom.team]++;
        teams.points2[killer.custom.team] = Math.trunc(teams.points2[killer.custom.team]);
        killer.custom.frags++;
      } else {
        //teams.points[Math.abs(ship.team-1)]++;
      }
      ship.custom.deaths++;
      update = 1;
      ship.custom.hasbeenkilled = true;
      checkstatus(game);
      break;
    case "ship_spawned":
      if (ship.custom.team != null) setup(ship);
      update = 1;
      break;
    case "ui_component_clicked":
      if (ship.custom.buttons){
        let component = event.id;
        switch (component){
          case "open": ship.custom.opened = true; break;
          case "heal": ship.set({healing:!ship.healing}); break;
          case "close": ship.custom.opened = false; break;
          default:
            if (component.startsWith("ship_selection_") && ship.custom.opened){
              let ship_code = findShipCode(ship.custom.rand[parseInt(component.replace(/^ship_selection_/,"")) || 0]);
              if (ship_code){
                if (ship.type != ship_code) ship.set({type:ship_code,stats:88888888,shield:999,collider:true});
              }
              ship.custom.opened = false;
              ship.custom.buttons = false;
            }
          break;
        }
      }
    break;
  }
};
