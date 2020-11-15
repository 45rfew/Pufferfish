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
  name: 'T-Warrior'
  level: 5
  model: 3
  size: 1.6
  specs:
    shield:
      capacity: [225,325]
      reload: [4,7]
    generator:
      capacity: [80,140]
      reload: [35,50]
    ship:
      mass: 250
      speed: [80,90]
      rotation: [50,80]
      acceleration: [90,120]
  bodies:
    main:
      section_segments: 8
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-95,-100,-98,-70,0,90,91]
        z: [0,0,0,0,0,0,0]
      width: [0,5,6,20,30,20,3]
      height: [0,2,4,20,30,25,3]
      texture: [12,5,63,1,10,12]
    cannon:
      section_segments: 6
      offset:
        x: 0
        y: -45
        z: -15
      position:
        x: [0,0,0,0,0,0]
        y: [-40,-50,-20,0,20,30]
        z: [0,0,0,0,0,20]
      width: [0,5,8,11,7,0]
      height: [0,5,8,11,10,0]
      angle: 0
      laser:
        damage: [4,6]
        rate: 3
        type: 1
        speed: [130,160]
        number: 5
        angle: 30
        error: 0
      propeller: false
      texture: [3,3,10,3]
    back:
      section_segments: 10
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0]
        y: [90,95,95]
        z: [0,0,0]
      width: [15,18,2]
      height: [18,23,2]
      texture: [63]
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: 0
        z: 20
      position:
        x: [0,0,0,0,0,0]
        y: [-50,-40,-25,0,5]
        z: [0,0,0,0,9,9]
      width: [0,10,15,10,0]
      height: [0,10,15,16,0]
      texture: [9]
    top_propulsor:
      section_segments: 10
      offset:
        x: 0
        y: 30
        z: 60
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-20,-15,0,10,20,25,30,40,100,90]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,15,20,20,20,15,15,20,10,0]
      height: [0,15,20,20,20,15,15,20,10,0]
      texture: [4,63,1,1,1,63,1,1,12]
      propeller: true
    side_propulsors:
      section_segments: 10
      offset:
        x: 80
        y: 30
        z: -30
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-20,-15,0,10,20,25,30,40,100,90]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,15,20,20,20,15,15,20,10,0]
      height: [0,15,20,20,20,15,15,20,10,0]
      texture: [4,63,1,1,1,63,1,1,12]
      propeller: true
  wings:
    top_join:
      offset:
        x: 0
        y: 50
        z: 0
      length: [60]
      width: [70,30]
      angle: [90]
      position: [0,0,0,50]
      texture: [11]
      bump:
        position: 10
        size: 20
    side_joins:
      offset:
        x: 0
        y: 50
        z: 0
      length: [80]
      width: [70,30]
      angle: [-20]
      position: [0,0,0,50]
      texture: [11]
      bump:
        position: 10
        size: 20
addFlag(30,-20,-15)
return model;
