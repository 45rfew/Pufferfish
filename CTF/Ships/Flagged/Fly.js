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
    section_segments: [45,135,225,315]
    offset:
      x: 0
      y: 65+y
      z: 81+z-fz
    position:
      x: [0,0,2,2,2,-2,-2,-2,2,2,2,-2,-2,-2,0].add(x).mult(size)
      y: [0,0,18,20,22,38,40,42,58,60,62,78,80,82,82].mult(size)
      z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    width: [0,2,2,2,2,2,2,2,2,2,2,2,2,2,0].mult(size)
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
  name: 'Fly'
  level: 1
  model: 1
  size: 1.05
  specs:
    shield:
      capacity: [75,100]
      reload: [2,3]
    generator:
      capacity: [40,60]
      reload: [10,15]
    ship:
      mass: 60
      speed: [125,145]
      rotation: [110,130]
      acceleration: [100,120]
  bodies:
    main:
      section_segments: 12
      offset:
        x: 0
        y: 0
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-65,-60,-50,-20,10,30,55,75,60]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,8,10,30,25,30,18,15,0]
      height: [0,6,8,12,20,20,18,15,0]
      propeller: true
      texture: [4,63,10,1,1,1,12,17]
    cockpit:
      section_segments: 12
      offset:
        x: 0
        y: 0
        z: 20
      position:
        x: [0,0,0,0,0,0,0]
        y: [-15,0,20,30,60]
        z: [0,0,0,0,0]
      width: [0,13,17,10,5]
      height: [0,18,25,18,5]
      propeller: false
      texture: [7,9,9,4,4]
    cannon:
      section_segments: 6
      offset:
        x: 0
        y: -15
        z: -10
      position:
        x: [0,0,0,0,0,0]
        y: [-40,-50,-20,0,20,30]
        z: [0,0,0,0,0,20]
      width: [0,5,8,11,7,0]
      height: [0,5,8,11,10,0]
      angle: 0
      laser:
        damage: [5,6]
        rate: 4
        type: 1
        speed: [160,180]
        number: 1
        error: 2.5
      propeller: false
      texture: [3,3,10,3]
  wings: main:
    length: [60,20]
    width: [100,50,40]
    angle: [-10,10]
    position: [0,20,10]
    doubleside: true
    offset:
      x: 0
      y: 10
      z: 5
    bump:
      position: 30
      size: 20
    texture: [11,63]
addFlag(0,-13,5,.7,21)
return model;
