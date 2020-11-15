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
  name: 'Bat-Defender'
  level: 5
  model: 7
  size: 1.8
  specs:
    shield:
      capacity: [300,400]
      reload: [7,10]
    generator:
      capacity: [70,100]
      reload: [25,35]
    ship:
      mass: 350
      speed: [70,90]
      rotation: [40,70]
      acceleration: [90,100]
  bodies:
    main:
      section_segments: 12
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-99,-100,-97,-45,-40,-25,-23,15,20,55,50]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5,5,30,17,27,25,25,27,15,5]
      height: [0,2,2,25,27,27,25,25,27,20,0]
      texture: [6,5,1,4,6,4,63,6,2,12]
    propulsors:
      section_segments: 8
      offset:
        x: 30
        y: -20
        z: 0
      position:
        x: [-5,-2,0,0,0,0,0,0,0,0,0]
        y: [30,55,60,80,95,100,90,95]
        z: [0,0,0,0,0,0,0,0]
      width: [12,14,14,10,12,10,0]
      height: [5,14,14,10,12,10,0]
      texture: [2,6,4,11,6,12]
      propeller: true
    lasers:
      section_segments: 8
      offset:
        x: 70
        y: -40
        z: 10
      position:
        x: [0,0,0,0,0]
        y: [25,90,10,50,60]
        z: [0,0,0,0,0]
      width: [5,5,0,10,5]
      height: [5,1,0,0,5]
      texture: [63,6]
      angle: 3
      laser:
        damage: [10,15]
        rate: 2.5
        type: 1
        speed: [150,200]
        number: 1
        error: 0
      propeller: true
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: -45
        z: 8
      position:
        x: [0,0,0,0,0,0]
        y: [-50,-40,-25,0,5]
        z: [-10,-5,0,0,0]
      width: [0,5,10,10,0]
      height: [0,10,15,16,0]
      texture: [9]
  wings:
    wings:
      offset:
        x: 20
        y: 0
        z: 0
      length: [35,15,20,15]
      width: [100,50,50,40,45]
      angle: [-10,20,0,0]
      position: [0,0,10,30,0]
      texture: [11,4]
      bump:
        position: -20
        size: 15
    side:
      doubleside: true
      offset:
        x: 105
        y: 30
        z: -30
      length: [30,10,30]
      width: [40,60,60,40]
      angle: [90,110,110,90]
      position: [0,-30,-30,0]
      texture: [63]
      bump:
        position: 0
        size: 15
addFlag(0,-60,0,.8,14)
return model;
