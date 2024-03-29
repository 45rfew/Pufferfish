//TODO: make the mod playable
//freekeys: c,h,i,j,l,m,b

var exp = {
  tick: function(ship){        
    if (!ship.custom.init){
      ship.custom.init = true;
      ship.custom.exp = 1111111110;
      ship.custom.alienkills = 0;
      ship.custom.deaths = 0;
      ship.custom.kills = 0;
      ship.custom.e = 0;
      ship.custom.secondary = 10;
      ship.custom.a = [];
      ship.custom.mexp = 1;
      ship.setUIComponent({
        id:"shop",clickable:true,visible:true,shortcut:"J",position:[5,30,10,8],
        components: [
          {type:"box",position:[0,0,100,100],fill:"#191919",stroke:"#cde",width:5},
        	{type: "text",position:[9,0,60*1.4,40*1.4],value:"Shop",color:"#cde"},
          {type: "text",position:[20,43.5,60,40],value:"[J]",color:"#cde"},
        ]
      });
      ship.custom.c1 = {
        fill: ["#2db749","#999999","#999999"],
        icon: "\u{1F9C0}",
        cost: ["OWNED","50000EXP","100000EXP"],
        clickable: [false,true,false]
      };
      ship.custom.c2 = {
        fill: ["#2db749","#999999","#999999"],
        icon: ["\u{1F56F}","\u{1F386}","\u{1F4A3}"],
        cost: ["OWNED - Equipped","50000EXP","100000EXP"],
        clickable: [true,true,false]
      };       
      ship.custom.c3 = {
        fill: ["#999999","#999999","#999999"],
        icon: ["\u{21f6}\u{21f6}","\u{21f6}\u{1F680}","\u{1F4A5}"],
        cost: ["20000EXP","50000EXP","100000EXP"],
        clickable: [true,false,false]
      };   
      ship.custom.c4 = {
        fill: ["#999999","#999999","#999999"],
        icon: ["\u{1F4B2}","\u{1F4B2}","\u{1F4B2}"],
        cost: ["20000EXP","50000EXP","100000EXP"],
        clickable: [true,false,false]
      };           
    }   
    ship.setUIComponent({
      id:"exp",position:[25,11,50,25],visible:true,
      components: [{type:"text",position:[0,0,100,20],color:"#cde",value:"EXP: "+ship.custom.exp}]
    });      
    ship.setUIComponent({
      id:"count",position:[25,5,50,25],visible:true,
      components: [{type:"text",position:[0,0,100,20],color:"#cde",value:"Aliens killed: "+ship.custom.alienkills}]
    });
    if (game.collectibles.length < 50-game.ships.length){
      if (ship.alive) 
      game.addCollectible({code:ship.custom.secondary,x:ship.x,y:ship.y});    
    }
  },   
  drawshipbutton: function(ship,x,y,w,h,u,u2,id,fill,visible,shortcut,text,ch,cl,clickable){
    var components = [];
    var tcol = "#CDE";
    if (visible)
    components = [
      {type:"box",position:[0,0,100,100],fill:"#00000000",stroke:fill,width:10},
    	{type:"box",position:[10,10-u2,80,80-u],fill:"#000000",stroke:"#000000",width:2},
    	{type:"text",position:[10,10,80,80],value:ch,color:fill},
    	{type:"box",position:[10,10-u2,80,80-u],fill:"#222222AA",stroke:"#00000000",width:2},
    	{type:"text",position:[11,20,78,30],value:text,color:tcol},
    	{type:"text",position:[20,42,60,40],value:`[${shortcut}]`,color:tcol},
    	{type:"text",position:[-7,11,78*1.5,10*1.5],value:cl,color:tcol}
    ];
    ship.setUIComponent({
      id: id,
      position: [x,y,12+w,12+h],
      clickable: clickable,
      shortcut: shortcut,
      visible: visible,
      components: components
    });
  },
  createshop: function(ship,open){
    let cat = ["Ship Upgrades","Weapons","Abilities","EXP Boost"];
    let catfill = ["#325499","#a375a3","#51e051","#d1b547"];
    let caticons = ["\u{1F53A}","\u{1F52B}","\u{1F300}","\u{1F4B1}"];
    for (let i=0; i<cat.length; i++)
    this.drawshipbutton(ship,26.5+i*12,20,-1,-5,20,-10,"cat"+i,catfill[i],open,i+1+"",cat[i],caticons[i],"",true);
  },
  category1: function(ship,open){
    let name = ["Ship I","Ship II","Ship III"];
    for (let i=0; i<3; i++)
    this.drawshipbutton(ship,31+i*13,30,0,0,0,0,"upgrade"+i,ship.custom.c1.fill[i],true,i+1+"",name[i],ship.custom.c1.icon,ship.custom.c1.cost[i],ship.custom.c1.clickable[i]);
  },
  category2: function(ship,open){
    let name = ["Rockets","Missiles","Torpedos"];
    let cost = ["","50000 EXP","100000 EXP"];
    for (let i=0; i<name.length; i++)
    this.drawshipbutton(ship,31+i*13,30,0,0,0,0,"weapon"+i,ship.custom.c2.fill[i],true,i+1+"",name[i],ship.custom.c2.icon[i],ship.custom.c2.cost[i],ship.custom.c2.clickable[i]);
  },
  category3: function(ship,open){
    let name = ["Hyperspeed","Absolute Control","POW"];
    let cost = ["20000 EXP","50000 EXP","100000 EXP"];
    for (let i=0; i<name.length; i++)
    this.drawshipbutton(ship,31+i*13,30,0,0,0,0,"ability"+i,ship.custom.c3.fill[i],true,i+1+"",name[i],ship.custom.c3.icon[i],ship.custom.c3.cost[i],ship.custom.c3.clickable[i]);
  },  
  category4: function(ship,open){
    let name = ["EXP Multiplier - 1.2x","EXP Multiplier - 1.5x","EXP Multiplier - 2x"];
    let cost = ["20000 EXP","50000 EXP","100000 EXP"];
    for (let i=0; i<name.length; i++)
    this.drawshipbutton(ship,31+i*13,30,0,0,0,0,"EXP"+i,ship.custom.c4.fill[i],true,i+1+"",name[i],ship.custom.c4.icon[i],ship.custom.c4.cost[i],ship.custom.c4.clickable[i]);
  },
  opencategory: function(ship,page){
    switch (page){
      case "0": this.category1(ship,true); break;
      case "1": this.category2(ship,true); break;
      case "2": this.category3(ship,true); break;
      case "3": this.category4(ship,true); break;
    }
  },
  closeshop: function(ship,shop){
    let names = ["upgrade0","upgrade1","upgrade2","weapon0","weapon1","weapon2","ability0","ability1","ability2","EXP0","EXP1","EXP2"];
    if (shop) names.push("cat0","cat1","cat2","cat3","cat4");
    for (let i=0; i<names.length; i++)
    ship.setUIComponent({id:names[i],visible:false});            
  }  
};    

this.tick = function(game){
  let xy = (Math.random()-0.5)*game.options.map_size*10;
  if (game.step % 30 === 0){
    for (let ship of game.ships) exp.tick(ship);
    for (let i=0; i<300-game.aliens.length; i++){ 
      let rand = Math.floor(Math.random()*3);
      game.addAlien({level:0+rand,code:16,x:xy,y:xy,crystal_drop:25+rand*50});
    }
  }
  if (game.step % 1600 === 0) 
    game.addAlien({level:3,code:16,x:xy,y:xy,crystal_drop:1700});
};

this.event = function (event, game){
  let ship = event.ship;
  let killer = event.killer;
  switch (event.name){
    case "ui_component_clicked":
      var component = event.id;
      function updateShipUI(componentType, index){
        let cost = ship.custom[componentType].cost[index];
        if (ship.alive && ship.custom.exp >= cost){
          ship.custom.exp -= cost;
          ship.custom[componentType].clickable[index] = false;
          if (index == 1) ship.custom[componentType].clickable[2] = true;
          ship.custom[componentType].fill[index] = "#2db749";
          ship.custom[componentType].cost[index] = index === 0 ? "OWNED - Equipped" : "OWNED";
          return true;
        } else {
          ship.setUIComponent({
            id:"exp",visible:true,position:[30,28,100,100],
            components: [{type:"text",position:[0,0,40,40],value:"You do not have enough EXP to purchase this!",color:"#f99e9e"}]
          });   
          setTimeout(function () { ship.setUIComponent({ id: "exp", visible: false }); }, 2000);
          return false;
        }
      }
      if (component.includes("cat") && ship.alive){
        exp.closeshop(ship, false);
        let a = component.replace('cat', '');
        exp.opencategory(ship, a);
      } else if (component.includes("upgrade") && ship.alive){
        let b = component.replace('upgrade', '');
        if (updateShipUI("c1", parseInt(b))){
          ship.set({ type: ship.type + 1 });
          exp.opencategory(ship, 0);
        }
      } else if (component.includes("weapon") && ship.alive){
        let b = component.replace('weapon', '');
        if (updateShipUI("c2", parseInt(b))){
          ship.custom.secondary = [10, 11, 12][parseInt(b)];
          ship.custom.e = parseInt(b);
          exp.opencategory(ship, 1);
        }
      } else if (component.includes("ability") && ship.alive){
        let b = component.replace('ability', '');
        if (updateShipUI("c3", parseInt(b))){
          ship.custom.a.push(parseInt(b));
          exp.opencategory(ship, 2);
        }
      }
      if (component.includes("EXP") && ship.alive){
        let b = component.replace('EXP', '');
        let index = parseInt(b);
        if (updateShipUI("c4", index)){
          ship.custom.mexp = [1.2, 1.5, 2][index];
          exp.opencategory(ship, 3);
        }
      }
      switch (component){
        case "shop":
          exp.createshop(ship,true);
          ship.setUIComponent({id:"shop",visible:false});            
          ship.setUIComponent({
            id:"close",clickable:true,visible:true,shortcut:"J",position:[5,30,10,8],
            components: [
              {type:"box",position:[0,0,100,100],fill:"#191919",stroke:"#cde",width:5},
            	{type: "text",position:[9,0,60*1.4,40*1.4],value:"Close Shop",color:"#cde"},
              {type: "text",position:[20,43.5,60,40],value:"[J]",color:"#cde"},
            ]
          });        
          break;
        case "close":
          exp.closeshop(ship,true);   
          ship.setUIComponent({id:"close",visible:false}); 
          ship.setUIComponent({
            id:"shop",clickable:true,visible:true,shortcut:"J",position:[5,30,10,8],
            components: [
              {type:"box",position:[0,0,100,100],fill:"#191919",stroke:"#cde",width:5},
            	{type: "text",position:[9,0,60*1.4,40*1.4],value:"Shop",color:"#cde"},
              {type: "text",position:[20,43.5,60,40],value:"[J]",color:"#cde"},
            ]
          });      
        break; 
      }
      break;
    case "ship_spawned":
      ship.set({ crystals: 980 });
      break;
    case "ship_destroyed":
      let destroyedScore = Math.round(ship.score / 2);
      ship.set({score: destroyedScore });
      killer.set({score: killer.score + destroyedScore});
      killer.custom.exp += destroyedScore * killer.custom.mexp;
      break;
    case "alien_destroyed":
      let alien = event.alien;
      killer.custom.alienkills++;
      let expGained = [40, 60, 120, 1750][alien.level] * killer.custom.mexp;
      killer.custom.exp += Math.round(expGained);
      break;
    case "collectible_picked":
      ship.emptyWeapons();
      break;
  }
};


function modifyShip(ship, model, sizeMultiplier, speed, acceleration, rotation, mass, shieldCapacity, shieldReload, generatorCapacity, generatorReload, damage, damageRate, recoil, laserIndex) {
    ship.model = model;
    ship.size *= sizeMultiplier;
    ship.typespec.specs.ship.speed = [speed, speed];
    ship.typespec.specs.ship.acceleration = [acceleration, acceleration];
    ship.typespec.specs.ship.rotation = [rotation, rotation];
    ship.typespec.specs.ship.mass = mass;
    ship.typespec.specs.shield.capacity = [shieldCapacity, shieldCapacity];
    ship.typespec.specs.shield.reload = [shieldReload, shieldReload];
    ship.typespec.specs.generator.capacity = [generatorCapacity, generatorCapacity];
    ship.typespec.specs.generator.reload = [generatorReload, generatorReload];
    if (laserIndex !== undefined) {
        ship.typespec.lasers[laserIndex] = {
            "x": 0, "y": -11.6, "z": 0, "angle": 0,
            "damage": [damage, damage], "rate": damageRate, "type": 1,
            "speed": [100, 100], "number": 1, "spread": 0,
            "error": 0, "recoil": recoil
        };
    }
    return JSON.stringify(ship);
}

var ships = [];

var Odyssey = '{"name":"Odyssey","level":7,"model":1,"size":4,"specs":{"shield":{"capacity":[750,750],"reload":[15,15]},"generator":{"capacity":[330,330],"reload":[150,150]},"ship":{"mass":700,"speed":[45,45],"rotation":[20,20],"acceleration":[150,150]}},"tori":{"circle":{"segments":20,"radius":95,"section_segments":12,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20],"height":[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],"texture":[63,63,4,10,4,4,10,4,63,63,63,63,3,10,3,3,10,3,63]}},"bodies":{"main":{"section_segments":20,"offset":{"x":0,"y":-10,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-130,-130,-85,-70,-60,-20,-25,40,40,100,90],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,20,40,45,10,12,30,30,40,30,0],"height":[0,20,25,25,10,12,25,25,20,10,0],"texture":[4,15,63,4,4,4,11,10,4,12]},"laser1":{"section_segments":12,"offset":{"x":110,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-25,-30,-20,0,20,30,20],"z":[0,0,0,0,0,0,0]},"width":[0,3,5,5,5,3,0],"height":[0,3,5,5,5,3,0],"texture":[12,6,63,63,6,12],"laser":{"damage":[20,20],"rate":3,"type":1,"speed":[200,200],"number":1,"error":0}},"laser2":{"section_segments":12,"offset":{"x":110,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-25,-30,-20,0,20,30,20],"z":[0,0,0,0,0,0,0]},"width":[0,3,5,5,5,3,0],"height":[0,3,5,5,5,3,0],"texture":[12,6,63,63,6,12],"angle":180,"laser":{"damage":[20,20],"rate":3,"type":1,"speed":[200,200],"number":1,"error":0}},"cannon":{"section_segments":6,"offset":{"x":0,"y":-115,"z":0},"position":{"x":[0,0,0,0],"y":[-25,-30,-20,0],"z":[0,0,0,0]},"width":[0,15,9,7],"height":[0,10,9,7],"texture":[6,6,6,10],"laser":{"damage":[250,250],"rate":1,"type":1,"speed":[100,100],"number":1,"error":0,"recoil":300}},"cockpit":{"section_segments":10,"offset":{"x":0,"y":0,"z":15},"position":{"x":[0,0,0,0,0,0,0],"y":[-30,-10,0,10,30],"z":[0,0,0,0,0]},"width":[0,12,15,10,0],"height":[0,20,22,18,0],"texture":[9]},"bumpers":{"section_segments":8,"offset":{"x":85,"y":20,"z":0},"position":{"x":[-5,0,5,10,5,0,-5],"y":[-85,-80,-40,0,20,50,55],"z":[0,0,0,0,0,0,0]},"width":[0,10,15,15,15,5,0],"height":[0,20,35,35,25,15,0],"texture":[11,2,63,4,3],"angle":0},"toppropulsors":{"section_segments":10,"offset":{"x":17,"y":50,"z":15},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,50,40],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,10,0],"height":[0,10,15,15,15,10,10,15,10,0],"texture":[3,4,10,3,3,63,4],"propeller":true},"bottompropulsors":{"section_segments":10,"offset":{"x":17,"y":50,"z":-15},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,50,40],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,10,0],"height":[0,10,15,15,15,10,10,15,10,0],"texture":[3,4,10,3,3,63,4],"propeller":true}},"wings":{"topjoin":{"offset":{"x":0,"y":-3,"z":0},"doubleside":true,"length":[100],"width":[20,20],"angle":[25],"position":[0,0,0,50],"texture":[1],"bump":{"position":10,"size":30}},"bottomjoin":{"offset":{"x":0,"y":-3,"z":0},"doubleside":true,"length":[100],"width":[20,20],"angle":[-25],"position":[0,0,0,50],"texture":[1],"bump":{"position":-10,"size":30}}},"typespec":{"name":"Odyssey","level":7,"model":1,"code":701,"specs":{"shield":{"capacity":[750,750],"reload":[15,15]},"generator":{"capacity":[330,330],"reload":[150,150]},"ship":{"mass":700,"speed":[45,45],"rotation":[20,20],"acceleration":[150,150]}},"shape":[11.623,11.646,10.525,8.979,7.873,3.633,3.688,8.551,8.989,8.821,9.353,9.348,9.272,9.272,9.348,9.353,8.977,9.064,9.121,4.686,5.299,6.216,7.781,8.276,8.144,7.775,8.144,8.276,7.781,6.216,5.299,4.686,9.121,9.064,8.977,9.353,9.348,9.272,9.272,9.348,9.353,8.821,8.989,8.551,3.688,3.633,7.873,8.979,10.525,11.646],"lasers":[{"x":8.8,"y":-2.4,"z":0,"angle":0,"damage":[20,20],"rate":3,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-8.8,"y":-2.4,"z":0,"angle":0,"damage":[20,20],"rate":3,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":8.8,"y":2.4,"z":0,"angle":180,"damage":[20,20],"rate":3,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-8.8,"y":2.4,"z":0,"angle":-180,"damage":[20,20],"rate":3,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":0,"y":-11.6,"z":0,"angle":0,"damage":[250,250],"rate":1,"type":1,"speed":[100,100],"number":1,"spread":0,"error":0,"recoil":300}],"radius":11.646}}';
var Odyssey2 = JSON.parse(Odyssey);
var Odyssey3 = JSON.parse(Odyssey);

Odyssey2 = modifyShip(Odyssey2, 2, 1.2, 55, 170, 30, 850, 800, 17, 330, 150, 250, 2, 300);
Odyssey3 = modifyShip(Odyssey3, 3, 1.2, 60, 180, 36, 1000, 900, 25, 360, 200, 250, 2, 300);

ships.push(Odyssey, Odyssey2, Odyssey3);

var Shadow_X_3 = '{"name":"Shadow X-3","level":7,"model":4,"size":2.5,"specs":{"shield":{"capacity":[400,400],"reload":[12,12]},"generator":{"capacity":[225,225],"reload":[50,50]},"ship":{"mass":300,"speed":[130,130],"rotation":[35,35],"acceleration":[90,90]}},"bodies":{"main":{"section_segments":20,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-130,-128,-115,-70,-40,0,40,70,80,90,100],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,5,10,20,20,20,20,30,30,30,20,0],"height":[0,5,10,30,20,10,10,15,15,15,10,10],"texture":[12,3,15,4,63,63,4,4,5],"laser":{"damage":[200,200],"rate":1,"type":1,"speed":[200,200],"number":1,"error":0,"recoil":500}},"air":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[0,-80,-30,-10,10,30,50],"z":[0,0,0,0,0,0,0]},"width":[0,25,35,30,30,32,20],"height":[0,15,10,10,10,10,10,15,15,15,10,10],"texture":[4,3,2,2,2,3]},"back":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[90,95,100,105,90],"z":[0,0,0,0,0]},"width":[10,15,18,22,2],"height":[3,5,7,8,2],"texture":[63],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-30,"z":18},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-65,-25,0,25,60,90,100],"z":[0,0,0,0,-10,-8,-10]},"width":[0,10,15,10,20,15,10],"height":[0,15,20,10,10,10,10],"texture":[9,9,9,10,63,3]},"laser":{"section_segments":10,"offset":{"x":90,"y":10,"z":-19},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-30,-25,0,10,20,25,30,40,70,60],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,10,0],"height":[0,10,15,15,15,10,10,15,5,0],"texture":[6,4,10,3,4,3,2],"propeller":true,"laser":{"damage":[7,7],"rate":3,"type":1,"speed":[150,150],"number":1}},"laser2":{"section_segments":10,"offset":{"x":50,"y":-20,"z":-20},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-30,-25,0,10,20,25,30,40,70,60],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,12,0],"height":[0,10,15,15,15,10,10,15,5,0],"texture":[6,4,10,3,4,3,2],"propeller":true,"laser":{"damage":[7,7],"rate":4,"type":1,"speed":[150,150],"number":1}}},"wings":{"wings":{"offset":{"x":10,"y":0,"z":0},"length":[35,15,30,25],"width":[100,50,60,30,45],"angle":[-10,20,0,0],"position":[0,0,10,30,-10],"texture":[4],"bump":{"position":-20,"size":15}}},"typespec":{"name":"Shadow X-3","level":7,"model":2,"code":702,"specs":{"shield":{"capacity":[400,400],"reload":[12,12]},"generator":{"capacity":[225,225],"reload":[50,50]},"ship":{"mass":300,"speed":[130,130],"rotation":[35,35],"acceleration":[90,90]}},"shape":[6.5,6.068,4.366,3.971,3.26,2.789,3.571,3.73,3.692,3.514,5.906,5.859,5.721,5.71,5.65,5.425,5.886,6.211,6.384,5.843,3.244,2.675,4.759,5.353,5.344,5.26,5.344,5.353,4.759,2.675,3.244,5.843,6.384,6.211,5.886,5.425,5.65,5.71,5.721,5.859,5.906,3.514,3.692,3.73,3.571,2.789,3.26,3.971,4.366,6.068],"lasers":[{"x":0,"y":-6.5,"z":0,"angle":0,"damage":[200,200],"rate":1,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":500},{"x":4.5,"y":-1,"z":-0.95,"angle":0,"damage":[7,7],"rate":3,"type":1,"speed":[150,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":-4.5,"y":-1,"z":-0.95,"angle":0,"damage":[7,7],"rate":3,"type":1,"speed":[150,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":2.5,"y":-2.5,"z":-1,"angle":0,"damage":[7,7],"rate":4,"type":1,"speed":[150,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":-2.5,"y":-2.5,"z":-1,"angle":0,"damage":[7,7],"rate":4,"type":1,"speed":[150,150],"number":1,"spread":0,"error":0,"recoil":0}],"radius":6.5}}';
var Shadow_X_32 = JSON.parse(Shadow_X_3);
var Shadow_X_33 = JSON.parse(Shadow_X_3);

Shadow_X_32 = modifyShip(Shadow_X_32, 5, 1.2, 150, 90, 50, 450, 450, 15, 225, 60, 800, 1, 700);
Shadow_X_33 = modifyShip(Shadow_X_33, 6, 1.2, 156, 75, 50, 600, 550, 17, 900, 20, 800, 1, 700);

ships.push(Shadow_X_3, Shadow_X_32, Shadow_X_33);

var Bastion = '{"name":"Bastion","level":7,"model":7,"size":4,"specs":{"shield":{"capacity":[400,400],"reload":[20,20]},"generator":{"capacity":[500,500],"reload":[100,100]},"ship":{"mass":350,"speed":[80,80],"rotation":[15,15],"acceleration":[125,125]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":50,"z":10},"position":{"x":[0,0,0,0,0,0,0],"y":[-40,-50,-20,0,20,40,25],"z":[0,0,0,0,0,0,0]},"width":[0,5,22,18,16,15,0],"height":[0,2,12,16,16,15,0],"texture":[10,1,1,10,8,17],"propeller":true},"thrusters":{"section_segments":8,"offset":{"x":40,"y":43,"z":-24},"position":{"x":[0,0,0,0,0,0],"y":[-25,-20,0,20,40,30],"z":[0,0,0,0,0,0]},"width":[0,8,12,8,8,0],"height":[0,12,12,8,8,0],"texture":[63,2,2,2,17],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":30,"z":20},"position":{"x":[0,0,0,0,0,0,0],"y":[-15,-10,0,11,35],"z":[-5,-3,-1,0,0]},"width":[0,5,10,10,0],"height":[0,3,5,7,0],"texture":[9]},"cannon1":{"section_segments":4,"offset":{"x":10,"y":-80,"z":1},"position":{"x":[0,0,0,0,0,0,0],"y":[-10,0,20,30,40],"z":[0,0,0,0,0]},"width":[0,2,4,7,3],"height":[0,1,3,6,0],"texture":[17,4],"laser":{"damage":[6,6],"rate":5,"type":1,"speed":[200,200],"number":1}},"cannon2":{"section_segments":4,"offset":{"x":42,"y":-129,"z":8},"position":{"x":[0,0,0,0,0,0,0],"y":[-10,0,20,30,40],"z":[0,0,0,0,0]},"width":[0,2,4,7,3],"height":[0,1,3,6,0],"texture":[17,4],"angle":3,"laser":{"damage":[8,8],"rate":4,"type":1,"speed":[180,180],"number":1}},"cannon3":{"section_segments":4,"offset":{"x":75,"y":-105,"z":-8},"position":{"x":[0,0,0,0,0,0,0],"y":[-10,0,20,30,40],"z":[0,0,0,0,0]},"width":[0,2,4,7,3],"height":[0,1,3,6,0],"texture":[17,4],"angle":5,"laser":{"damage":[20,20],"rate":1.5,"type":1,"speed":[160,160],"number":1}}},"wings":{"main1":{"doubleside":true,"offset":{"x":9,"y":15,"z":0},"length":[0,15,0,7],"width":[0,160,70,30,30],"angle":[0,20,0,-10],"position":[30,-20,30,30,30],"texture":[13,63,13,8],"bump":{"position":35,"size":5}},"main2":{"doubleside":true,"offset":{"x":30,"y":15,"z":0},"length":[0,15,0,20],"width":[0,80,90,200,30],"angle":[30,30,30,30],"position":[30,30,10,-45,30],"texture":[13,3,13,4],"bump":{"position":35,"size":7}},"main3":{"doubleside":true,"offset":{"x":0,"y":25,"z":-7},"length":[45,35,0,20],"width":[40,40,40,200,40],"angle":[-20,20,-20,-5],"position":[20,30,0,-30,10],"texture":[0,8,13,63],"bump":{"position":35,"size":20}}},"typespec":{"name":"Bastion","level":7,"model":3,"code":703,"specs":{"shield":{"capacity":[400,400],"reload":[20,20]},"generator":{"capacity":[500,500],"reload":[100,100]},"ship":{"mass":350,"speed":[80,80],"rotation":[15,15],"acceleration":[125,125]}},"shape":[4.056,7.244,11.603,11.152,9.19,10.943,9.896,9.163,8.149,7.735,7.473,7.332,7.401,7.615,7.85,8.175,8.679,8.889,9.155,9.588,9.692,7.67,7.338,6.661,7.299,7.214,7.299,6.661,7.338,7.67,9.692,9.588,9.155,8.889,8.679,8.175,7.85,7.615,7.401,7.332,7.473,7.735,8.149,9.163,9.896,10.943,9.19,11.152,11.603,7.244],"lasers":[{"x":0.8,"y":-7.2,"z":0.08,"angle":0,"damage":[6,6],"rate":5,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.8,"y":-7.2,"z":0.08,"angle":0,"damage":[6,6],"rate":5,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":3.318,"y":-11.119,"z":0.64,"angle":3,"damage":[8,8],"rate":4,"type":1,"speed":[180,180],"number":1,"spread":0,"error":0,"recoil":0},{"x":-3.318,"y":-11.119,"z":0.64,"angle":-3,"damage":[8,8],"rate":4,"type":1,"speed":[180,180],"number":1,"spread":0,"error":0,"recoil":0},{"x":5.93,"y":-9.197,"z":-0.64,"angle":5,"damage":[20,20],"rate":1.5,"type":1,"speed":[160,160],"number":1,"spread":0,"error":0,"recoil":0},{"x":-5.93,"y":-9.197,"z":-0.64,"angle":-5,"damage":[20,20],"rate":1.5,"type":1,"speed":[160,160],"number":1,"spread":0,"error":0,"recoil":0}],"radius":11.603}}';
var Bastion2 = JSON.parse(Bastion);
var Bastion3 = JSON.parse(Bastion);

Bastion2 = modifyShip(Bastion2, 8, 1.2, 85, 150, 22, 500, 450, 27, 500, 130, 8, 7);
Bastion3 = modifyShip(Bastion3, 9, 1.2, 90, 175, 26, 650, 500, 35, 500, 200, 25, 2.2);

ships.push(Bastion, Bastion2, Bastion3);

var Aries = '{"name":"Aries","level":7,"model":4,"size":4.5,"specs":{"shield":{"capacity":[800,800],"reload":[17,17]},"generator":{"capacity":[350,350],"reload":[175,175]},"ship":{"mass":800,"speed":[40,40],"rotation":[20,20],"acceleration":[150,150]}},"bodies":{"arm":{"section_segments":6,"angle":0,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-90,-85,-70,-60,-10,10,60,70,85,90,85],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,20,25,10,12,12,15,20,20,15,0],"height":[0,10,12,8,12,12,8,12,10,5,0],"texture":[4,63,4,4,4,4,4,63,3],"propeller":true},"arm45":{"section_segments":6,"angle":45,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-90,-85,-70,-60,-10,10,60,70,85,90],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,20,25,10,12,12,10,25,20,0],"height":[0,10,12,8,12,12,8,12,10,0],"texture":[4,63,4,4,4,4,4,63,4]},"arm90":{"section_segments":6,"angle":90,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-90,-85,-70,-60,-10,10,60,70,85,90],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,20,25,10,12,12,10,25,20,0],"height":[0,10,12,8,12,12,8,12,10,0],"texture":[4,63,4,4,4,4,4,63,4]},"arm135":{"section_segments":6,"angle":-45,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-90,-85,-70,-60,-10,10,60,70,85,90],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,20,25,10,12,12,10,25,20,0],"height":[0,10,12,8,12,12,8,12,10,0],"texture":[4,63,4,4,4,4,4,63,4]},"cockpit":{"section_segments":20,"offset":{"x":0,"y":-10,"z":8},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-50,-35,-25,-15,0,15,25,35,70],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,15,20,25,20,10,15,15,0],"height":[0,10,13,15,15,15,12,10,0],"texture":[6,15,15,1,4,3,3,15]},"topcockpit":{"section_segments":16,"offset":{"x":0,"y":-23,"z":7},"position":{"x":[0,0,0,0,0,0,0],"y":[-30,-10,0,10,30],"z":[0,0,0,0,0]},"width":[0,12,15,10,0],"height":[0,20,22,18,0],"texture":[9]},"cannon":{"section_segments":6,"offset":{"x":0,"y":-63,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-25,-30,-20,0,10,12],"z":[0,0,0,0,0,0]},"width":[0,10,8,7,6,0],"height":[0,5,5,7,6,0],"texture":[6,6,6,10,12],"laser":{"damage":[150,150],"rate":0.7,"type":1,"speed":[110,110],"number":1,"error":0}},"sidecannons":{"section_segments":6,"offset":{"x":45,"y":-45,"z":7},"position":{"x":[0,0,0,0,0,0],"y":[0,-30,-20,0,10,12],"z":[0,0,0,0,-5,-10]},"width":[0,3,5,7,6,0],"height":[0,3,5,7,6,0],"texture":[6,6,15,4,4],"angle":-45,"laser":{"damage":[15,15],"rate":4,"type":1,"speed":[200,200],"number":1,"error":0}},"backsidecannons":{"section_segments":6,"offset":{"x":45,"y":45,"z":7},"position":{"x":[0,0,0,0,0,0],"y":[0,-30,-20,0,10,12],"z":[0,0,0,0,-5,-10]},"width":[0,3,5,7,6,0],"height":[0,3,5,7,6,0],"texture":[6,6,15,4,4],"angle":225,"laser":{"damage":[15,15],"rate":4,"type":1,"speed":[200,200],"number":1,"error":0}}},"wings":{"side_joins":{"offset":{"x":0,"y":0,"z":5},"length":[40,30],"width":[50,30,0],"angle":[30,-10],"position":[0,0,50],"texture":[1,11],"bump":{"position":10,"size":20}}},"typespec":{"name":"Aries","level":7,"model":4,"code":704,"specs":{"shield":{"capacity":[800,800],"reload":[17,17]},"generator":{"capacity":[350,350],"reload":[175,175]},"ship":{"mass":800,"speed":[40,40],"rotation":[20,20],"acceleration":[150,150]}},"shape":[8.386,8.406,7.816,4.278,7.535,7.919,8.431,8.279,7.842,6.772,7.119,7.875,8.096,8.1,7.875,7.119,6.772,7.842,8.279,8.431,7.919,7.535,3.408,7.88,8.184,8.116,8.184,7.88,3.408,7.535,7.919,8.431,8.279,7.842,6.772,7.119,7.875,8.096,8.1,7.875,7.119,6.772,7.842,8.279,8.431,7.919,7.535,4.278,7.816,8.406],"lasers":[{"x":0,"y":-8.37,"z":0,"angle":0,"damage":[150,150],"rate":0.7,"type":1,"speed":[110,110],"number":1,"spread":0,"error":0,"recoil":0},{"x":5.959,"y":-5.959,"z":0.63,"angle":-45,"damage":[15,15],"rate":4,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-5.959,"y":-5.959,"z":0.63,"angle":45,"damage":[15,15],"rate":4,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":5.959,"y":5.959,"z":0.63,"angle":225,"damage":[15,15],"rate":4,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-5.959,"y":5.959,"z":0.63,"angle":-225,"damage":[15,15],"rate":4,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0}],"radius":8.431}}';
var Aries2 = JSON.parse(Aries);
var Aries3 = JSON.parse(Aries);

Aries2 = modifyShip(Aries2, 11, 1.2, 48, 230, 24, 950, 900, 22, 400, 200, 200);
Aries3 = modifyShip(Aries3, 12, 1.2, 52, 270, 28, 1100, 980, 26, 400, 200, 200);

ships.push(Aries, Aries2, Aries3);


var vocabulary = [
  {icon: "I", text: "Attack",key:"A"},
  //{icon: "4", text: "Base",key:"B"},
  {icon: "%", text: "Defend",key:"D"},
  {icon: "O", text: "Me",key:"E"},
  {icon: "P", text: "Follow",key:"F"},
  {icon: "GG", text: "Good Game",key:"G"},
  {icon: "[", text: "Kill",key:"K"},
  //{icon: "D", text: "Mine",key:"M"},
  {icon: "M", text: "No",key:"N"},
  {icon: "N", text: "You",key:"O"},
  {icon: "G", text: "No Prob",key:"P"},
  {icon: "K", text: "Hmm",key:"Q"},
  {icon: "¡", text: "Sorry",key:"S"},
  {icon: "H", text: "Wait",key:"T"},
  {icon: "A", text: "Thanks",key:"X"},
  {icon: "L", text: "Yes",key:"Y"},
  //{icon: "0", text: "Piranha",key:"H"},
  //{icon: "$", text: "Love", key:"L"},
  {icon:"˙ ͜ʟ˙",text: "Bruh",  key:"M"},
  {icon:"ಠ_ಠ", text: "WTF", key:"W"} 
];

this.options = {
  vocabulary: vocabulary,
 // ships: ships,
  soundtrack: "crystals.mp3",
  root_mode: "",
  asteroids_strength: 0.1,
  radar_zoom: 1,
  starting_ship: 801,
  choose_ship: [701,704,707,710],
  map_size: 30,
  survival_level: 8,
  crystal_value: 10,
  mines_self_destroy: false,
  weapons_store: false,
  max_level: 8,
  crystal_drop: 0
};
