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
  name: 'FuryStar'
  level: 5
  model: 2
  size: 1.5
  specs:
    shield:
      capacity: [200,275]
      reload: [6,7]
    generator:
      capacity: [100,150]
      reload: [30,40]
    ship:
      mass: 200
      speed: [70,100]
      rotation: [120,180]
      acceleration: [150,180]
  bodies:
    main:
      section_segments: 8
      offset:
        x: 0
        y: 0
        z: 5
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-50,-45,0,10,15,35,55,40]
        z: [0,0,0,0,0,0,0,0]
      width: [0,20,25,17,25,20,15,0]
      height: [0,15,15,15,20,20,15,0]
      texture: [1,4,63,4,2,12,17]
      propeller: true
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: -43
        z: 5
      position:
        x: [0,0,0,0,0,0,0]
        y: [-10,-4,10]
        z: [-5,0,0]
      width: [1,18,20]
      height: [1,15,10]
      texture: [9]
    missiles:
      section_segments: 12
      offset:
        x: 35
        y: -5
        z: 10
      position:
        x: [0,0,0,0,0]
        y: [-30,-23,0,23,30]
        z: [0,0,0,0,0]
      width: [0,5,5,5,0]
      height: [0,5,5,5,0]
      texture: [6,4,4,10]
      angle: 0
      laser:
        damage: [1,2]
        rate: 4
        type: 1
        speed: [100,125]
        number: 1
        error: 0
    cannon:
      section_segments: 6
      offset:
        x: 15
        y: -10
        z: -15
      position:
        x: [0,0,0,0,0,0]
        y: [-40,-50,-20,0,20,30]
        z: [0,0,0,0,0,20]
      width: [0,5,8,11,7,0]
      height: [0,5,8,11,10,0]
      angle: 0
      laser:
        damage: [12,18]
        rate: 2
        type: 1
        speed: [200,250]
        number: 1
        error: 0
      propeller: false
      texture: [3,3,10,3]
    top_propulsors:
      section_segments: 10
      offset:
        x: 75
        y: 45
        z: 40
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-20,-15,0,10,20,25,30,40,80,70]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,10,15,15,15,10,10,15,10,0]
      height: [0,10,15,15,15,10,10,15,5,0]
      propeller: true
      texture: [4,4,2,2,5,63,5,63,17]
    bottom_propulsors:
      section_segments: 10
      offset:
        x: 100
        y: 0
        z: -40
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-20,-15,0,10,20,25,30,40,80,70]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,10,15,15,15,10,10,15,10,0]
      height: [0,10,15,15,15,10,10,15,5,0]
      propeller: true
      texture: [4,4,2,2,5,63,5,4,17]
  wings:
    rooftop:
      doubleside: true
      offset:
        x: 0
        y: -20
        z: 20
      length: [20,15,25,25,5]
      width: [50,40,35,35,35,30]
      angle: [0,-20,30,30,30]
      position: [0,10,20,50,80,100]
      texture: [8,63,3,3]
      bump:
        position: -40
        size: 5
    bottom:
      doubleside: true
      offset:
        x: 10
        y: -20
        z: 0
      length: [30,30,30]
      width: [60,50,50,50]
      angle: [-27,-27,-27]
      position: [0,10,30,40]
      texture: [1]
      bump:
        position: -40
        size: 5
    topwinglets:
      doubleside: true
      offset:
        x: 80
        y: 87
        z: 45
      length: [20]
      width: [40,30]
      angle: [60]
      position: [0,50]
      texture: [63]
      bump:
        position: 10
        size: 10
    bottomwinglets:
      doubleside: true
      offset:
        x: 100
        y: 50
        z: -45
      length: [20]
      width: [40,30]
      angle: [-60]
      position: [0,50]
      texture: [4]
      bump:
        position: 10
        size: 10
addFlag(0,-60,-10,0.9,8)
return model;
