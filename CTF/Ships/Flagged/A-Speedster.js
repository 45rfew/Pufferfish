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
  name: 'A-Speedster'
  level: 6
  model: 5
  size: 1.5
  specs:
    shield:
      capacity: [200,300]
      reload: [6,8]
    generator:
      capacity: [80,140]
      reload: [30,45]
    ship:
      mass: 175
      speed: [90,115]
      rotation: [60,80]
      acceleration: [90,140]
  bodies:
    main:
      section_segments: 8
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0]
        y: [-100,-95,0,0,70,65]
        z: [0,0,0,0,0,0]
      width: [0,10,40,20,20,0]
      height: [0,5,30,30,15,0]
      texture: [6,11,5,63,12]
      propeller: true
      laser:
        damage: [38,84]
        rate: 1
        type: 2
        speed: [175,230]
        recoil: 50
        number: 1
        error: 0
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: -60
        z: 15
      position:
        x: [0,0,0,0,0,0,0]
        y: [-20,0,20,40,50]
        z: [-7,-5,0,0,0]
      width: [0,10,10,10,0]
      height: [0,10,15,12,0]
      texture: [9]
    side_propulsors:
      section_segments: 10
      offset:
        x: 50
        y: 25
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-20,-15,0,10,20,25,30,40,80,70]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,15,20,20,20,15,15,20,10,0]
      height: [0,15,20,20,20,15,15,20,10,0]
      propeller: true
      texture: [4,4,2,2,5,63,5,4,12]
    cannons:
      section_segments: 12
      offset:
        x: 30
        y: 40
        z: 45
      position:
        x: [0,0,0,0,0,0,0]
        y: [-50,-45,-20,0,20,30,40]
        z: [0,0,0,0,0,0,0]
      width: [0,5,7,10,3,5,0]
      height: [0,5,7,8,3,5,0]
      angle: -10
      laser:
        damage: [8,12]
        rate: 2
        type: 1
        speed: [100,130]
        number: 1
        angle: -10
        error: 0
      propeller: false
      texture: [6,4,10,4,63,4]
  wings:
    join:
      offset:
        x: 0
        y: 0
        z: 10
      length: [40,0]
      width: [10,20]
      angle: [-1]
      position: [0,30]
      texture: [63]
      bump:
        position: 0
        size: 25
    winglets:
      offset:
        x: 0
        y: -40
        z: 10
      doubleside: true
      length: [45,10]
      width: [5,20,30]
      angle: [50,-10]
      position: [90,80,50]
      texture: [4]
      bump:
        position: 10
        size: 30
addFlag(0,-50,-10,0.9,8)
return model;
