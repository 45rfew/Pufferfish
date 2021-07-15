var pointsToWin = 120;
var PointsRange = 10; // ranges between checkpoints
var progressBar = {
  px: 40, // width of the progress bar (global)
  py: 1, // height of the progress bar (global)
  dbx: 1/20, // ratio of (big checkpoint witdth diameter)/(progressbar width)
  dby: 3, // ratio of (big checkpoint height diameter)/(progressbar height)
  dx: 1/30, // ratio of (small checkpoints witdth diameter)/(progressbar width)
  dy: 2, // ratio of (small checkpoints height diameter)/(progressbar height)
  offsetY: 13.2, //position from the top of screen (global)
  distanceY: 2 // height distance multiplier (global)
}

var modifier = {
  map_size: 60,
  crystal_value: 0,
  max_players: 20,
  kills_to_win: 100,
  yeet_gems: true,
  healer_button: false,
  round_timer: 30, // in minutes
  game_delay: 60, // in seconds
  round_ship_tier: "random",//choose from 3-7 or "random"
  gems_upon_spawning: 0,//removed
  laggy_objs: false
};

var modUtils = {
  setTimeout: function(f,time) {
    this.jobs.push({f: f,time: game.step+time}) ;
  },
  jobs: [],
  tick: function() {
    var t = game.step;
    for (var i=this.jobs.length-1;i>=0;i--) {
      var job = this.jobs[i] ;
      if (t>=job.time) {
        try {
          job.f() ;
        }
        catch (err) {
        }
        this.jobs.splice(i,1) ;
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
a.Barracuda = '{"name":"Barracuda","level":6,"model":7,"size":2.4,"specs":{"shield":{"capacity":[300,400],"reload":[8,12]},"generator":{"capacity":[100,150],"reload":[8,14]},"ship":{"mass":550,"speed":[70,90],"rotation":[30,45],"acceleration":[130,150],"dash":{"rate":2,"burst_speed":[160,180],"speed":[100,130],"acceleration":[70,70],"initial_energy":[50,75],"energy":[20,30]}}},"bodies":{"body":{"section_segments":12,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-90,-100,-60,-10,0,20,50,80,100,90],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,5,20,25,35,40,40,35,30,0],"height":[0,5,40,45,40,60,70,60,30,0],"texture":[10,2,10,2,3,13,13,63,12],"propeller":true},"front":{"section_segments":8,"offset":{"x":0,"y":-20,"z":0},"position":{"x":[0,0,0,0,0],"y":[-90,-85,-70,-60,-20],"z":[0,0,0,0,0]},"width":[0,40,45,10,12],"height":[0,15,18,8,12],"texture":[8,63,4,4,4],"propeller":true},"propeller":{"section_segments":10,"offset":{"x":40,"y":40,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,70,60],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,20,15,0],"height":[0,10,15,15,15,10,10,18,8,0],"texture":[4,4,10,3,3,63,4,63,12],"propeller":true},"sides":{"section_segments":6,"angle":90,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-80,-75,-60,-50,-10,10,50,60,75,80],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,30,35,10,12,12,10,35,30,0],"height":[0,10,12,8,12,12,8,12,10,0],"texture":[4,63,4,4,4,4,4,63,4]},"cockpit":{"section_segments":12,"offset":{"x":0,"y":-20,"z":30},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-50,-20,0,10,30,50],"z":[0,0,0,0,0,0]},"width":[0,12,18,20,15,0],"height":[0,20,22,24,20,0],"texture":[9]}},"wings":{"top":{"doubleside":true,"offset":{"x":0,"y":20,"z":15},"length":[70],"width":[70,30],"angle":[90],"position":[0,30],"texture":[63],"bump":{"position":10,"size":30}},"top2":{"doubleside":true,"offset":{"x":0,"y":51,"z":5},"length":[70],"width":[50,20],"angle":[90],"position":[0,60],"texture":[63],"bump":{"position":10,"size":30}}},"typespec":{"name":"Barracuda","level":6,"model":7,"code":607,"specs":{"shield":{"capacity":[300,400],"reload":[8,12]},"generator":{"capacity":[100,150],"reload":[8,14]},"ship":{"mass":550,"speed":[70,90],"rotation":[30,45],"acceleration":[130,150],"dash":{"rate":2,"burst_speed":[160,180],"speed":[100,130],"acceleration":[70,70],"initial_energy":[50,75],"energy":[20,30]}}},"shape":[5.28,5.25,5.332,5.393,4.944,1.997,1.745,1.556,1.435,3.587,3.81,3.779,3.838,3.84,3.779,3.81,3.587,3.205,3.571,3.9,5.132,5.888,5.835,5.551,4.886,5.808,4.886,5.551,5.835,5.888,5.132,3.9,3.571,3.205,3.587,3.81,3.779,3.838,3.84,3.779,3.81,3.587,1.435,1.556,1.745,1.997,4.944,5.393,5.332,5.25],"lasers":[],"radius":5.888}}';
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
], ship_codes = ships_list, remove_ships = [101,601,602,703];
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
  level_13: [101,607][~~(Math.random()*2)] 
};

let random_ships = randomPath(ship_codes,2).concat().filter(a => a != stages.level_3);
for (let i=4; i<13; i++){
  stages[`level_${i}`] = random_ships[i]; 
}

function findShipCode(name){
  for (let i=0;i<ships_list.length;i++)
  for (let j=0;j<ships_list[i].length;j++)
  if (ships_list[i][j] == name) return (i+3)*100+j+1;
  return null;
}

var chooseships,maps = [1761,1749,77,45,4360,3604,5575,4990],music = ["crystals.mp3","argon.mp3"],
tierratio = [{t:3,r:[0,6]},{t:4,r:[7,16]},{t:5,r:[17,41]},{t:6,r:[42,74]},{t:7,r:[75,100]}/*6,17,25,33,17*/];
var colors = [
  {team:"Red",hue:0,team2:"Blue",hue2:240},
  {team:"Yellow",hue:60,team2:"Pink",hue2:300},
  {team:"Green",hue:120,team2:"Purple",hue2:270},
  {team:"Aqua",hue:150,team2:"Orange",hue2:30}
];

if (!game.custom.ship_name){
  game.custom.ship_name = true;
  colors = colors[0];
  game.custom.colors = colors;
  game.custom.ship_name = ship_name;
  game.custom.modifier = modifier;
}
colors = game.custom.colors;
modifier = game.custom.modifier;
var ship_name = game.custom.ship_name;

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
  }
];

game.custom.radar_background = {
  id: "radar_background",
  components: [],
};

var scale_pos = 100 / (modifier.map_size * 10);
var scale_size = 50 / modifier.map_size;
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
var teams = {
  names: ["Red","Blue"],
  points: [9,9],
  count: [0,0],
  ships: [[],[]],
  hues: [0,240],
  level: [1,1],
  update: [false,false]
};
var update = 1;
var delay = modifier.game_delay * 60;
if (!game.custom.map) game.custom.map = maps[Math.trunc(Math.random()*maps.length)];
var map = game.custom.map; // for debugging
for (let i=0; i<map.shipspawn.length; i++){
  addRadarSpot(map.shipspawn[i].x,map.shipspawn[i].y,map.radar.type,map.radar.width,map.radar.height,0.3,teams.hues[i]);
  addRadarSpot(map.shipspawn[i].x,map.shipspawn[i].y,map.radar.type,map.radar.width-2,map.radar.height-2,0.2,teams.hues[i]);
}

this.options = {
  vocabulary: vocabulary,
  custom_map: map.map,
  soundtrack: music[~~(Math.random()*music.length)],
  weapons_store: false,
  friendly_colors: 2,
  radar_zoom: 1,
  map_size: 50,
  starting_ship: 801,
  crystal_value: 0,
  speed_mod: 1.25,
  max_players: 16,
  ships: ships,
  release_crystal: false,
  hues: [colors.hue,colors.hue2],
  asteroids_strength: 1e6,
  crystal_drop: 0,
  max_level: 1,
  shield_regen_factor: 0.5
};

var a = [["a"],["a"]];
this.tick = function(game){
  if (game.step % 30 === 0){
    teams.count = [0,0];
    for (let ship of game.ships){
      if (!ship.custom.init){
        ship.custom.init = true;
        setteam(ship);
        ship.custom.frags = 0;
        ship.custom.kills = 0;
      }
      teams.count[ship.custom.team]++;
    }
    checkscores(game);
  }
}

function checkscores(game){
  let filled = teams.points.map(i => i/pointsToWin);
  let index = teams.points.map(i => Math.trunc(i/PointsRange));
  let hues = [["hsla(355, 100%, 62.55%, 0.7)","hsla(192, 97%, 74%, .7)"],["hsl(353, 100%, 55%)","hsl(233, 100%, 55%)"]];
  let checked = [["hsla(210, 50%, 87%, 1)","hsla(210, 50%, 87%, 1)"]]; // color for unachieved checkpoints
  let achieved = [["hsla(355, 100%, 62.55%, 1)","hsla(192, 97%, 74%, 1)"],["hsl(353, 100%, 1)","hsl(233, 100%, 1)"]]; // checkpoints' color after the checkpoint has finished
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
  if (!game.custom.checkpoints){
    game.custom.checkpoints = true;
    for (let j=0; j<2; j++){
      for (let i=0; i<12; i++){
         upgraded[j].push({[(i+1)*10]:0});
      }
    }
  }
  let checkpoints = Array.from(Array(12).fill({1:0}).map(a => a*13)
  .keys()).map((a,b) => (b+1)*10);

  let upgraded = Array(12).fill({1:2})

}

function setup(ship){
  let t = ship.custom.team;
  let level = Math.trunc(ship.type/100); //level = (level<4)?4:level;
  let gems = ((modifier.round_ship_tier**2)*20)/1.5;
  let x = map.shipspawn[t].x,
  y = map.shipspawn[t].y,r=0;
  ship.set({x:x,y:y,stats:88888888,invulnerable:300,shield:999,crystals:gems});
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

var scoreboard = {
  id:"scoreboard",
  visible: true,
  components: []
};

function getcolor(color){
  return `hsla(${color},100%,50%,1)`;
}

function PlayerBox(posx,posy){
  return {type:"box",position:[posx,posy-1.8,50,7],fill:"hsla(210,24.3%,29%,0.5)",width:2};
}

function Tag(indtext,param,posx,posy,hex,al,size) {
  let obj= {type: indtext,position: [posx,posy-0.5,50-(size||0),5],color: hex,align:al};
  switch(indtext) {
    case "text":
      obj.value=param;
      break;
    case "player":
      obj.id=param;
    break;
  }
  return obj;
}

function sort(arr){
  let array=[...arr],i=0;
  while (i<array.length-1) {
    if (array[i].custom.frags<array[i+1].custom.frags){
      array[i+1]=[array[i],array[i]=array[i+1]][0];
      if (i>0) i-=2;
    }
    i++;
  }
  return array;
}

function updatescoreboard(game){
  if (game.step >= delay){
    let t=[[],[]];
    for (let ship of game.ships) t[ship.custom.team].push(ship);
    scoreboard.components = [
      { type:"box",position:[0,0,50,8],fill:getcolor(teams.hues[0])},
      { type: "text",position: [0,0,50,8],color:"#e5e5e5",value: teams.names[0]},
      { type:"box",position:[50,0,50,8],fill:getcolor(teams.hues[1])},
      { type: "text",position: [50,0,50,8],color:"#e5e5e5",value: teams.names[1]}
    ];
    let sc=[sort(t[0]),sort(t[1])],line=1;
    sc[0].slice(10);sc[1].slice(10);
    for (let i=0;i<10;i++){
      for (let j=0;j<2;j++){
        if (sc[j][i]) scoreboard.components.push(
          new Tag("text",sc[j][i].custom.frags,j*50,line*10,"#cde","right",2),
          new Tag("player",sc[j][i].id,j*50,line*10,"#cde","left")
        );
        else scoreboard.components.push({},{});
      }
      line++;
    }
    outputscoreboard(game,sc);
  }
}

function outputscoreboard(game,tm){
  let origin = [...scoreboard.components];
  for (let ship of game.ships){
    let j=0,team=tm[ship.custom.team];
    for (j=0;j<team.length;j++){
      if (ship.id === team[j].id){
        scoreboard.components.splice((j*2+ship.custom.team)*2+4,0,
          new PlayerBox(ship.custom.team*50,(j+1)*10)
        );
        break;
      }
    }
    if (j == team.length) scoreboard.components.splice((20+ship.custom.team)*2,2,
      new PlayerBox(ship.custom.team*50,90),
      new Tag("text",ship.custom.frags,ship.custom.team*50,90,ship.custom.team,"right",2),
      new Tag("player",ship.id,ship.custom.team*50,90,ship.custom.team,"left")
    );
    sendUI(ship, scoreboard);
    scoreboard.components = [...origin];
  }
}



this.event = function(event, game){
  let ship = event.ship;
  if (ship != null) switch (event.name){
    case "ship_destroyed":
      let killer = event.killer;
      if (killer != null) {
        ship.set({collider:true});
        teams.points[killer.custom.team]++;
        killer.custom.frags++;
      } else {
        //teams.points[Math.abs(ship.team-1)]++;
      }
      ship.custom.deaths++;
      update = 1;
      ship.custom.hasbeenkilled = true;
      //if (teams.points[ship.team] % 10 === 0 && teams.points[ship.team] > 1)
      //checkstatus(game, ship.team);
      //console.log(teams)
      break;
    case "ship_spawned":
      if (ship.custom.hasbeenkilled === true){
        ship.custom.rand = shuffle(ship_name);
        ship.custom.buttons = true;
        ship.custom.opened = false;
        modUtils.setTimeout(function(){
          ship.custom.buttons = false;
        },540);
        ship.custom.hasbeenkilled = false;
      }
      if (ship.custom.team != null) setup(ship);
      update = 1;
      break;
    case "ui_component_clicked":
      if (ship.custom.buttons) {
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
