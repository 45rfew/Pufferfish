multiplyArray = (arr, m) ->
  k = [];
  for i in [0..arr.length]
    k.push(arr[i]*m)
  return k;
a = 1.1
Array::add = (mod) -> @map (val) -> val + mod
Array::mult = (mod) -> @map (val) -> val * mod
Array::div = (mod) -> @map (val) -> val / mod
Array::step = (step) -> i for i in @ by step
Array::fill = (val, len) -> val for i in (
  if len
  then [0...len]
  else if @length == 1
  then [0...@[0]]
  else @
)
for key, value of []
  delete Array::[key]
  Object.defineProperty Array::, key,
    value: value
    configurable: true
    enumerable: false
addFlag = (x=0,y=0,z=0,size=1,fz=0) ->
  model.bodies["flag"] =  
    section_segments: [44,45,46,135,225,310,315,320]
    offset:
      x: 0
      y: 65+y
      z: 79+z-fz
    position:
      x: [0,0,2,2,2,-2,-2,-2,2,2,2,-2,-2,-2,0].add(x).mult(size)
      y: [0,0,18,20,22,38,40,42,58,60,62,78,80,82,82].mult(size)
      z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    width: [0,3,3,3,3,3,3,3,3,3,3,3,3,3,0].mult(size)
    height: [0,40,40,40,40,40,40,40,40,40,40,40,40,40,0].mult(size)
    texture: [63]   
  model.bodies["flagpole"] = 
    section_segments: 10
    offset:
      x: 0
      y: 10+z
      z: -65-y
    position:
      x: [0,0,0,0].add(x).mult(size)
      y: [0,0,100,100].mult(size)
      z: [0,0,0,0]
    width: [0,4,4,0].mult(size)
    height: [0,4,4,0].mult(size)
    texture: [2,2,2]   
    vertical: true 
model =
  name: "Cairngorgon"
  level: 7
  model: 8
  size: 2
  specs:
    shield:
      capacity: [980,980]
      reload: [25,25]
    generator:
      capacity: [300,300]
      reload: [100,100]
    ship:
      mass: 900
      speed: [50,50]
      rotation: [50,50]
      acceleration: [170,170]
  bodies:
    sideEngineBody:
      section_segments: 10
      offset:
        x: 100
        y: -135
        z: -10
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [30,0,20,30,100,130,190,220,290,300,320,320,290]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,30,40,40,40,0,0,40,40,40,30,28,0]
      height: [0,30,40,40,40,0,0,40,40,40,30,28,0]
      texture: [17,3.9,2,10,3.9,3.9,3.9,10,2,4,17]
      propeller: true
      laser:
        damage: [100,100]
        rate: 1
        type: 1
        recoil: 180
        speed: [100,100]
        number: 1
        error: 0
    sideEngineBody1:
      section_segments: 10
      offset:
        x: 0
        y: -215
        z: -10
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [30,0,20,30,100,130,190,220,290,340,360,360,348]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,45,55,55,55,55,55,55,55,55,45,43,0]
      height: [0,30,40,40,40,40,40,40,40,40,32,30,0]
      texture: [17,3.9,2,10,3.9,3.9,3.9,10,2,4,17]
      propeller: true
    sideEngineTop:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 100
        y: -135
        z: 24
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [20,25,100,120,200,220,295,300]
        z: [0,0,0,20,20,0,0,0,0,0,0,0,0,0]
      width: [0,20,20,20,20,20,20,0]
      height: [0,15,15,15,15,15,15,0]
      texture: [3,3,4,16,4,3]
    sideEngineBottom:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 100
        y: -135
        z: -44
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [20,25,100,120,200,220,295,300]
        z: [0,0,0,-20,-20,0,0,0,0,0,0,0,0,0]
      width: [0,20,20,20,20,20,20,0]
      height: [0,15,15,15,15,15,15,0]
      texture: [4,4,4,16,4]
    reactor_cubes:
      section_segments: 4
      offset:
        x: 100
        y: -10
        z: -25
      position:
        x: [0,0,0,0,0,20,20,-20,-20]
        y: [-20,20,20,-20,-20,-19.9,20,-19.9,20]
        z: [-20,-20,20,20,-20,0,0,0,0]
      width: [20,20,20,20,20,0,0,0,0]
      height: [0,0,0,0,0,20,20,20,20]
      texture: [177]
      vertical: true
      angle: 45
      propeller: false
    cockpit:
      section_segments: [40,90,180,270,320]
      offset:
        x: 0
        y: -135
        z: 29
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-50,-25,0,25,60,190,230]
        z: [0,0,0,0,-10,-10,0]
      width: [0,20,20,20,40,40,0]
      height: [0,10,12,12,20,20,0]
      texture: [9,8.98,8.98,3,8.18,8.18]
    backsupport:
      section_segments: 10
      offset:
        x: 0
        y: -285
        z: 6
      position:
        x: [0,0,0,0]
        y: [360,340,410,420]
        z: [0,0,-1,-10]
      width: [40,50,40,50]
      height: [0,30,30,0]
      texture: [3,4]
    cannons:
      section_segments: 12
      offset:
        x: 40
        y: 35
        z: 25
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-130,-140,-140,-70,-10,0,10,70,80,85]
        z: [-4,-4,-3,-2,0,0,0,0,0,0]
      width: [0,11,12,13,14,18,20,20,18,0]
      height: [0,11,12,13,14,18,20,20,18,0]
      laser:
        damage: [15,15]
        rate: 2
        recoil: 30
        type: 2
        speed: [130,130]
        number: 1
        error: 2
      texture: [17,4,4,4,2,4,17,4]
    cannons1:
      section_segments: 12
      offset:
        x: 30
        y: 45
        z: 40
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-80,-140,-140,-70,-10,0,10,50,60,65]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,5,6,7,8,12,14,14,14,0]
      height: [0,5,6,7,8,12,14,14,14,0]
      laser:
        damage: [10,10]
        rate: 3
        recoil: 20
        type: 2
        speed: [140,140]
        number: 1
        error: 0
      texture: [17,4,4,4,2,4,17,4]
    cannon_deco:
      section_segments: 10
      offset:
        x: 26.5
        y: -25
        z: 45
      position:
        x: [0,0,-2.2,-2.2]
        y: [-70,-70,80,80]
        z: [0,0,0,0]
      width: [0,1,1,0]
      height: [0,1,1,0]
      texture: [63]
    cannon_deco2:
      section_segments: 10
      offset:
        x: 25
        y: -25
        z: 45.5
      position:
        x: [0,0.2,-2.2,-2.2]
        y: [-80,-80,70,70]
        z: [0,0.6,0.1,0.1]
      width: [0,0.5,0.5,0]
      height: [0,0.5,0.5,0]
      texture: [17]
      angle: 180
    cannon_deco3:
      section_segments: 10
      offset:
        x: 27+6.5
        y: -25
        z: 44.8
      position:
        x: [0,0,2.2,2.2]
        y: [-70,-70,80,80]
        z: [0,0,0,0]
      width: [0,1,1,0]
      height: [0,1,1,0]
      texture: [63]
    cannon_deco4:
      section_segments: 10
      offset:
        x: 35
        y: -25
        z: 45.5
      position:
        x: [0,-0.4,2.2,2.2]
        y: [-80,-80,70,70]
        z: [0,0.4,0.2,0]
      width: [0,0.5,0.5,0]
      height: [0,0.5,0.5,0]
      texture: [17]
      angle: 180      
    cannon_deco5:
      section_segments: 10
      offset:
        x: 47
        y: -25
        z: 33
      position:
        x: [0,0,0,0]
        y: [-80,-80,70,70]
        z: [0,0,4,0]
      width: [0,1.5,1.5,0]
      height: [0,1.5,1.5,0]
      texture: [63]
    cannon_deco6:
      section_segments: 10
      offset:
        x: 45.5
        y: -35
        z: 33
      position:
        x: [0,0,0,0]
        y: [-80,-80,70,70]
        z: [4.5,4.5,0,0]
      width: [0,1,1,0]
      height: [0,1,1,0]
      texture: [17]
      angle: 180          
    cannon_deco7:
      section_segments: 10
      offset:
        x: 33
        y: -25
        z: 33
      position:
        x: [0,0,0,0]
        y: [-80,-80,70,70]
        z: [0,0,4,0]
      width: [0,1.5,1.5,0]
      height: [0,1.5,1.5,0]
      texture: [63]   
    cannon_deco8:
      section_segments: 10
      offset:
        x: 45.5-11
        y: -35
        z: 33
      position:
        x: [0,0,0,0]
        y: [-80,-80,70,70]
        z: [4.5,4.5,0,0]
      width: [0,1,1,0]
      height: [0,1,1,0]
      texture: [17]
      angle: 180        
    hub:
      section_segments: 20
      offset:
        x: 100
        y: 32
        z: 90
      position:
        x: [0,0,0,0,0,0]
        y: [-0.5*5,30/4,30/4,5.5*5/4,3.5*5/4,5.5*5/4]
        z: [0,0,0,0,0,0]
      width: [10,10,8,8,3,0]
      height: [10,10,8,8,3,0]
      texture: [3,17,3,18,17]
      vertical: true
    hub2:
      section_segments: 20
      offset:
        x: 100
        y: 32
        z: 55
      position:
        x: [0,0,0,0,0,0]
        y: [-0.5*5,30/4,30/4,5.5*5/4,3.5*5/4,5.5*5/4]
        z: [0,0,0,0,0,0]
      width: [10,10,8,8,3,0]
      height: [10,10,8,8,3,0]
      texture: [3,17,3,18,17]
      vertical: true           
    hub3:
      section_segments: 20
      offset:
        x: 100
        y: 32
        z: -140*a+(a*10)
      position:
        x: [0,0,0,0,0,0]
        y: multiplyArray([-0.5*5,30/4,30/4,5.5*5/4,3.5*5/4,5.5*5/4],a)
        z: [0,0,0,0,0,0]
      width: multiplyArray([10,10,8,8,3,0],a)
      height: multiplyArray([10,10,8,8,3,0],a)
      texture: [3,17,3,18,17]
      vertical: true
    hub4:
      section_segments: 20
      offset:
        x: 100
        y: 32
        z: -105*a+(a*10)
      position:
        x: [0,0,0,0,0,0]
        y: multiplyArray([-0.5*5,30/4,30/4,5.5*5/4,3.5*5/4,5.5*5/4],a)
        z: [0,0,0,0,0,0]
      width: multiplyArray([10,10,8,8,3,0],a)
      height: multiplyArray([10,10,8,8,3,0],a)
      texture: [3,17,3,18,17]
      vertical: true                 
    hub_joints:
      section_segments: [45,135,225,315]
      offset:
        x: 100
        y: -73
        z: 31.4
      position:
        x: [0,0,0,0]
        y: [-10,-10,11,11]
        z: [0,0,0,0]
      width: [0,10,10,0]
      height: [0,10,10,0]
      texture: [8]
    hub_joints2:
      section_segments: [45,135,225,315]
      offset:
        x: 100
        y: 123*a-(a*10)
        z: 31.4
      position:
        x: [0,0,0,0]
        y: multiplyArray([-10,-10,11,11],a)
        z: [0,0,0,0]
      width: multiplyArray([0,10,10,0],a)
      height: multiplyArray([0,10,10,0],a)
      texture: [8]      
    hub_joints_deco:
      section_segments: [45,135,225,315]
      offset:
        x: 100
        y: -77
        z: 38
      position:
        x: [0,0,0,0,0,0]
        y: [-10,-10,-8,8,10,10]
        z: [-5,-5,0,0,-5,-5]
      width: [0,2,2,2,2,0]
      height: [0,3,3,3,3,0]
      texture: [1,1,10,1,1]      
      angle: 90      
    hub_joints_deco2:
      section_segments: [45,135,225,315]
      offset:
        x: 100
        y: -68
        z: 38
      position:
        x: [0,0,0,0,0,0]
        y: [-10,-10,-8,8,10,10]
        z: [-5,-5,0,0,-5,-5]
      width: [0,2,2,2,2,0]
      height: [0,3,3,3,3,0]
      texture: [1,1,10,1,1]      
      angle: 90
    hub_joints_deco3:
      section_segments: [45,135,225,315]
      offset:
        x: 100
        y: 117*a-(a*10)
        z: 38
      position:
        x: [0,0,0,0,0,0]
        y: multiplyArray([-10,-10,-8,8,10,10],a)
        z: multiplyArray([-5,-5,0,0,-5,-5],a)
      width: multiplyArray([0,2,2,2,2,0],a)
      height: multiplyArray([0,3,3,3,3,0],a)
      texture: [1,1,10,1,1]      
      angle: 90      
    hub_joints_deco4:
      section_segments: [45,135,225,315]
      offset:
        x: 100
        y: 127*a-(a*10)
        z: 38
      position:
        x: [0,0,0,0,0,0]
        y: multiplyArray([-10,-10,-8,8,10,10],a)
        z: multiplyArray([-5,-5,0,0,-5,-5],a)
      width: multiplyArray([0,2,2,2,2,0],a)
      height: multiplyArray([0,3,3,3,3,0],a)
      texture: [1,1,10,1,1]      
      angle: 90
    front_deco:
      section_segments: [45,135,225,315]
      offset:
        x: 42
        y: -129.5
        z: 16
      position:
        x: [0,0,0,0,0,0,-5.5,-5.5,-5.5,-5.5,0,0,-11,-11,-11,-11,0,0,-16.5,-16.5,-16.5,-16.5,0,0,-22,-22,-22,-22,0,0,-27.5,-27.5,-27.5,-27.5,0,0,-34,-33,-33,-33,0,0,-38.5,-38.5,-38.5,-38.5,0,0,-44,-44,-44,-44]
        y: [-10,-10,10,10,0,0,-10,-10,10,10,0,0,-10,-10,10,10,0,0,-10,-10,10,10,0,0,-10,-10,10,10,0,0,-10,-10,10,10,0,0,-10,-10,10,10,0,0,-10,-10,10,10,0,0,-10,-10,10,10]
        z: [-15,-15,0,0,0,0,-15,-15,0,0,0,0,-15,-15,0,0,0,0,-15,-15,0,0,0,0,-15,-15,0,0,0,0,-15,-15,0,0,0,0,-15,-15,0,0,0,0,-15,-15,0,0,0,0,-15,-15,0,0,0,0,]
      width: [0,2.5,2.5,0,0,0,0,2.5,2.5,0,0,0,0,2.5,2.5,0,0,0,0,2.5,2.5,0,0,0,0,2.5,2.5,0,0,0,0,2.5,2.5,0,0,0,0,2.5,2.5,0,0,0,0,2.5,2.5,0,0,0,0,2.5,2.5,0]
      height: [0,5,10,0,0,0,0,5,10,0,0,0,0,5,10,0,0,0,0,5,10,0,0,0,0,5,10,0,0,0,0,5,10,0,0,0,0,5,10,0,0,0,0,5,10,0,0,0,0,5,10,0]
      texture: [4,17,4,16,4,17,4,16,4,17,4,16,4,17,4,16,4,17,4,16,4,17,4,16,4,17,4,16,4,17,4,16,4,17,4,16,4,17,4,16,4,17,4,16,4,17,4,16,4,17,4,16,4,17,4,16,4,17,4,16,4,17,4,16,]      
      angle: 270            
    front_deco_joints:
      section_segments: [45,135,225,315]
      offset:
        x: 32
        y: -151
        z: 22
      position:
        x: [0,0,0,0]
        y: [-27,-27,27,27]
        z: [0,0,0,0]
      width: [0,2,2,0]
      height: [0,2,2,0]
      texture: [1,7,1]            
    front_deco_joints2:
      section_segments: [45,135,225,315]
      offset:
        x: 51
        y: -151
        z: 3
      position:
        x: [0,0,0,0]
        y: [-27,-27,27,27]
        z: [0,0,0,0]
      width: [0,2,2,0]
      height: [0,2,2,0]
      texture: [1,7,1]               
    back:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 10
        z: 37
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-62,-62,-42,-32,12,22,45,45]
        z: [-1,-1,0,0,0,0,-3,-3]
      width: [0,21,20,20,20,20,12,0]
      height: [0,4,5,5,5,5,2,0]
      texture: [7,7,8,5,8,7]               
    back2:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 15
        z: 37.1
      position:
        x: [0,0,0,0]
        y: [-12,-12,12,12]
        z: [0,0,0,0]
      width: [0,19.9,19.9,0]
      height: [0,5,5,0]
      texture: [5,17,5]                 
    back3:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: -15
        z: 37.1
      position:
        x: [0,0,0,0]
        y: [-12,-12,12,12]
        z: [0,0,0,0]
      width: [0,19.9,19.9,0]
      height: [0,5,5,0]
      texture: [5,17,5]  
      angle: 180
    back4:
      section_segments: [45,50,55,60,65,70,105,255,290,295,300,305,310,315]
      offset:
        x: 0
        y: -27
        z: 37
      position:
        x: [0,0,0,0]
        y: [-1.5,-1.5,1,1]
        z: [0,0,0,0]
      width: [0,17,17,0]
      height: [0,10,10,0]
      texture: [63]  
      angle: 180      
    back5:
      section_segments: [45,50,55,60,65,70,105,255,290,295,300,305,310,315]
      offset:
        x: 0
        y: -5.5
        z: 36
      position:
        x: [0,0,0,0]
        y: [-1.5,-1.5,1,1]
        z: [0,0,0,0]
      width: [0,16,16,0]
      height: [0,10,10,0]
      texture: [63]  
      angle: 180    
    back6:
      section_segments: [45,50,55,60,65,70,105,255,290,295,300,305,310,315]
      offset:
        x: 0
        y: 5.5
        z: 36
      position:
        x: [0,0,0,0]
        y: [-1.5,-1.5,1,1]
        z: [0,0,0,0]
      width: [0,16,16,0]
      height: [0,10,10,0]
      texture: [63]  
      angle: 180          
    back7:
      section_segments: [45,50,55,60,65,70,105,255,290,295,300,305,310,315]
      offset:
        x: 0
        y: 27
        z: 37
      position:
        x: [0,0,0,0]
        y: [-1.5,-1.5,1,1]
        z: [0,0,0,0]
      width: [0,17,17,0]
      height: [0,10,10,0]
      texture: [63]  
      angle: 180          
    front:
      section_segments: [45,135,225,315]
      offset:
        x: 12.6
        y: -72
        z: 36.7
      position:
        x: [1,1,1,6,1,1,6,1,0.2,0.2]
        y: [-38,-38,-25,-20,-15,5,10,15,40,40]
        z: [0,0,0,0,0,0,0,0,2,2]
      width: [0,2,2,2,2,2,2,2,2,0]
      height: [0,3,3,3,3,3,3,3,3,0]
      texture: [63]  
    front2:
      section_segments: [45,135,225,315]
      offset:
        x: 12.7
        y: 42
        z: 39
      position:
        x: [0,0,-5.6,-5.6]
        y: [-10,-10,13,13]
        z: [0,0,-5.6,-5.6]
      width: [0,2,2,0]
      height: [0,3,3,0]
      texture: [63]        
    front3:
      section_segments: [45,135,225,315]
      offset:
        x: 5
        y: -72
        z: 36
      position:
        x: [1,1,1,6,1,1,6,1,1,1]
        y: [-38,-38,-25,-20,-15,5,10,15,20,20]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,10,10,10,10,10,10,10,10,0]
      height: [0,3,3,2,3,3,2,3,4,0]
      texture: [7,7,13,13,7,13,13,7,7]  
    front4:
      section_segments: 4
      offset:
        x: 6
        y: -110
        z: 36
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [0,0,13,13,23,23,23,43,43,53,53,78,78]
        z: [0,0,0,0,0,0,0,0,0,0,0,2,2]
      width: [0,7,7,0,0,0,7,7,0,0,7,7,0]
      height: [0,3,4,0,0,0,4,4,0,0,4,4,0]
      texture: [7]   
    front5:
      section_segments: 4
      offset:
        x: 6
        y: 42
        z: 36
      position:
        x: [0,0,0,-6,-6]
        y: [-10,-10,-9,13,13]
        z: [1.7,1.7,2.5,-2.5,-2.5]
      width: [0,8,7,7,0]
      height: [0,4,4,4,0]
      texture: [7]  
    diamond:
      section_segments: 4
      offset:
        x: 0
        y: 38.7
        z: 92
      position:
        x: [0,0,0]
        y: [-1,-1,0]
        z: [0,0,0]
      width: [0,4,0]
      height: [0,4,0]
      texture: [17]
      vertical: true
    diamond2:
      section_segments: 4
      offset:
        x: 0
        y: 38.7
        z: 62
      position:
        x: [0,0,0]
        y: [-1,-1,0]
        z: [0,0,0]
      width: [0,4,0]
      height: [0,4,0]
      texture: 17
      vertical: true      
  wings:
    topjoin:
      offset:
        x: 0
        y: -95
        z: 0
      doubleside: true
      length: [100]
      width: [20,20]
      angle: [0]
      position: [0,0,0,50]
      texture: [1]
      bump:
        position: 10
        size: 30
    topjoin_lights:
      offset:
        x: 0
        y: -98
        z: 0
      doubleside: true
      length: [100]
      width: [20,20]
      angle: [0]
      position: [0,0,0,50]
      texture: [17]
      bump:
        position: 10
        size: 0        
    bottomjoin:
      offset:
        x: 0
        y: -95
        z: 0
      doubleside: true
      length: [100]
      width: [20,20]
      angle: [-25]
      position: [0,0,0,50]
      texture: [1]
      bump:
        position: -10
        size: 30
    bottomjoin_lights:
      offset:
        x: 0
        y: -98
        z: 0
      doubleside: true
      length: [100]
      width: [20,20]
      angle: [-25]
      position: [0,0,0,50]
      texture: [17]
      bump:
        position: -10
        size: 0        
    topjoin1:
      offset:
        x: 0
        y: 135
        z: 0
      doubleside: true
      length: [100]
      width: [40,40]
      angle: [0]
      position: [-210,0,0,50]
      texture: [11]
      bump:
        position: 10
        size: 30
    topjoin1_lights:
      offset:
        x: 0
        y: 131
        z: 0
      doubleside: true
      length: [100]
      width: [40,40]
      angle: [0]
      position: [-210,0,0,50]
      texture: [17]
      bump:
        position: 10
        size: 0        
    bottomjoin1:
      offset:
        x: 0
        y: 98
        z: 0
      doubleside: true
      length: [100]
      width: [60,60]
      angle: [-25]
      position: [-210,0,0,50]
      texture: [11]
      bump:
        position: -10
        size: 30
    bottomjoin1_lights:
      offset:
        x: 0
        y: 94
        z: 0
      doubleside: true
      length: [100]
      width: [60,60]
      angle: [-25]
      position: [-210,0,0,50]
      texture: [17]
      bump:
        position: -10
        size: 0    
addFlag(0,-25) 
return model;
