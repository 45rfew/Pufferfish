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
  name: 'Side-Fighter'
  level: 3
  model: 2
  size: 1.5
  next: [403,404]
  specs:
    shield:
      capacity: [125,175]
      reload: [2,4]
    generator:
      capacity: [75,125]
      reload: [20,35]
    ship:
      mass: 90
      speed: [100,120]
      rotation: [50,70]
      acceleration: [100,130]
  bodies:
    main:
      section_segments: 12
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-30,-22,-15,0,15,22,40,30]
        z: [0,0,0,0,0,0,0,0,0]
      width: [5,10,25,30,25,17,15,0]
      height: [5,10,25,30,25,17,15,0]
      texture: [5,63,63,63,63,12,12]
      propeller: true
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: -20
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-10,-8,0]
        z: [0,0,0]
      width: [0,10,10]
      height: [0,10,10]
      texture: [9]
      propeller: false
      laser:
        damage: [4,6]
        rate: 10
        type: 1
        speed: [150,240]
        number: 1
        error: 20
  wings:
    wings1:
      doubleside: true
      offset:
        x: 60
        y: 0
        z: -80
      length: [0,50,50,50]
      width: [0,0,100,100,0]
      angle: [95,90,90,95]
      position: [0,0,0,0,0]
      texture: [7]
      bump:
        position: 0
        size: 8
    join:
      offset:
        x: 0
        y: 0
        z: 0
      length: [61]
      width: [10,6]
      angle: [0]
      position: [0,0,0,50]
      texture: [8]
      bump:
        position: 10
        size: 20
addFlag(0,-60,0,.6,28)
return model;
