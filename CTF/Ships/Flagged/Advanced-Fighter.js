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
  name: 'Advanced-Fighter'
  level: 6
  model: 1
  size: 2
  specs:
    shield:
      capacity: [200,350]
      reload: [4,6]
    generator:
      capacity: [120,200]
      reload: [50,60]
    ship:
      mass: 400
      speed: [70,80]
      rotation: [30,50]
      acceleration: [70,100]
  bodies:
    main:
      section_segments: 12
      offset:
        x: 0
        y: 0
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-100,-80,-90,-50,0,50,100,90]
        z: [0,0,0,0,0,0,0,0]
      width: [0,5,15,25,40,25,20,0]
      height: [0,5,10,30,25,20,10,0]
      propeller: true
      texture: [4,4,1,1,10,1,1]
      laser:
        damage: [90,150]
        rate: 1
        type: 2
        speed: [180,240]
        number: 1
        recoil: 150
        error: 0
    cockpit:
      section_segments: 12
      offset:
        x: 0
        y: -35
        z: 33
      position:
        x: [0,0,0,0,0,0,0]
        y: [-30,-20,10,30,40]
        z: [0,0,0,0,0,0,0]
      width: [0,12,15,10,0]
      height: [0,12,18,12,0]
      propeller: false
      texture: [7,9,9,7]
    side_propellers:
      section_segments: 10
      offset:
        x: 30
        y: 30
        z: 0
      position:
        x: [0,0,0,0,0,0]
        y: [-50,-20,0,20,80,70]
        z: [0,0,0,0,0,0]
      width: [15,20,10,25,10,0]
      height: [10,15,15,10,5,0]
      angle: 0
      propeller: true
      texture: [3,63,4,10,3]
    cannons:
      section_segments: 12
      offset:
        x: 70
        y: 50
        z: -30
      position:
        x: [0,0,0,0,0,0,0]
        y: [-50,-45,-20,0,20,50,55]
        z: [0,0,0,0,0,0,0]
      width: [0,5,10,10,15,10,0]
      height: [0,5,15,15,10,5,0]
      angle: 0
      propeller: false
      texture: [4,4,10,4,63,4]
      laser:
        damage: [6,12]
        rate: 3
        type: 1
        speed: [100,150]
        number: 1
        error: 0
    cannons2:
      section_segments: 12
      offset:
        x: 95
        y: 50
        z: -40
      position:
        x: [0,0,0,0]
        y: [-50,-20,40,50]
        z: [0,0,0,0]
      width: [2,5,5,2]
      height: [2,15,15,2]
      angle: 0
      propeller: false
      texture: 6
      laser:
        damage: [4,10]
        rate: 3
        type: 1
        speed: [100,150]
        number: 1
        error: 0
  wings:
    main:
      length: [100,30,20]
      width: [100,50,40,30]
      angle: [-25,20,25]
      position: [30,70,50,50]
      bump:
        position: -20
        size: 20
      offset:
        x: 0
        y: 0
        z: 0
      texture: [11,11,63]
      doubleside: true
    winglets:
      length: [40]
      width: [40,20,30]
      angle: [10,-10]
      position: [-50,-70,-65]
      bump:
        position: 0
        size: 30
      texture: 63
      offset:
        x: 0
        y: 0
        z: 0
addFlag(0,-30)
return model;
