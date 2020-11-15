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
  name: 'Pioneer'
  level: 4
  model: 5
  size: 1.6
  specs:
    shield:
      capacity: [175,230]
      reload: [4,7]
    generator:
      capacity: [50,100]
      reload: [25,30]
    ship:
      mass: 250
      speed: [90,120]
      rotation: [40,80]
      acceleration: [50,100]
  bodies:
    main:
      section_segments: 12
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-100,-60,-10,0,20,50,80,100,90]
        z: [-10,-5,0,0,0,0,0,0,0,0]
      width: [5,50,50,30,40,50,50,20,0]
      height: [5,20,20,20,30,30,20,10,0]
      texture: [2,10,2,4,11,11,63,12]
      propeller: true
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: -40
        z: 10
      position:
        x: [0,0,0,0,0,0,0]
        y: [-30,-20,0,30,40]
        z: [0,0,0,0,0]
      width: [0,10,15,10,0]
      height: [0,18,25,18,0]
      texture: [9]
      propeller: false
    cannons:
      section_segments: 12
      offset:
        x: 30
        y: -70
        z: 0
      position:
        x: [0,0,0,0,0]
        y: [-30,-20,0,20,30]
        z: [0,0,0,0,0]
      width: [3,5,5,5,3]
      height: [3,5,15,15,3]
      texture: [6,4,4,6]
      angle: 0
      laser:
        damage: [6,11]
        rate: 3
        type: 1
        speed: [100,140]
        number: 1
        error: 0
    shield:
      section_segments: 12
      offset:
        x: 60
        y: -40
        z: 0
      position:
        x: [0,5,3,5,0,0]
        y: [-30,-20,0,20,30,20]
        z: [0,0,0,0,0,0]
      width: [5,10,10,10,5,0]
      height: [5,25,30,25,5,0]
      propeller: true
      texture: 4
      angle: 0
    shield2:
      section_segments: 12
      offset:
        x: 60
        y: 60
        z: 0
      position:
        x: [0,5,3,5,0,0]
        y: [-30,-20,0,20,30,20]
        z: [0,0,0,0,0,0]
      width: [5,10,10,10,5,0]
      height: [5,25,30,25,5,0]
      propeller: true
      texture: 4
      angle: 0
addFlag(0,-40,0,.9,7)
return model;
