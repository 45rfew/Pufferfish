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
  name: 'Marauder'
  level: 6
  model: 3
  size: 1.4
  specs:
    shield:
      capacity: [210,350]
      reload: [8,11]
    generator:
      capacity: [85,160]
      reload: [25,40]
    ship:
      mass: 250
      speed: [70,110]
      rotation: [60,80]
      acceleration: [80,120]
  bodies:
    main:
      section_segments: 8
      offset:
        x: 0
        y: -20
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-65,-75,-55,-40,0,30,60,80,90,80]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,6,18,23,30,25,25,30,35,0]
      height: [0,5,10,12,12,20,15,15,15,0]
      texture: [6,4,1,10,1,1,11,12,17]
      propeller: true
      laser:
        damage: [10,16]
        rate: 10
        type: 1
        speed: [170,200]
        recoil: 0
        number: 1
        error: 0
    cockpit:
      section_segments: [40,90,180,270,320]
      offset:
        x: 0
        y: -85
        z: 22
      position:
        x: [0,0,0,0,0,0]
        y: [15,35,60,95,125]
        z: [-1,-2,-1,-1,3]
      width: [5,12,14,15,5]
      height: [0,12,15,15,0]
      texture: [8.98,8.98,4]
    outriggers:
      section_segments: 10
      offset:
        x: 25
        y: 0
        z: -10
      position:
        x: [-5,-5,8,-5,0,0,0,0,0,0]
        y: [-100,-125,-45,0,30,40,70,80,100,90]
        z: [10,10,5,5,0,0,0,0,0,0,0,0]
      width: [0,6,10,10,15,15,15,15,10,0]
      height: [0,10,20,25,25,25,25,25,20,0]
      texture: [13,4,4,63,4,18,4,13,17]
      laser:
        damage: [4,8]
        rate: 3
        type: 1
        speed: [110,140]
        recoil: 0
        number: 1
        error: 0
      propeller: true
    intake:
      section_segments: 12
      offset:
        x: 25
        y: -5
        z: 10
      position:
        x: [0,0,5,0,-3,0,0,0,0,0]
        y: [-10,-30,-5,35,60,70,85,100,85]
        z: [0,-6,0,0,0,0,0,0,0,0]
      width: [0,5,10,10,15,10,10,5,0]
      height: [0,15,15,20,20,15,15,5,0]
      texture: [6,4,63,4,63,18,4,17]
  wings:
    main:
      length: [20,70,35]
      width: [50,55,40,20]
      angle: [0,-20,0]
      position: [20,20,70,25]
      texture: [3,18,63]
      doubleside: true
      bump:
        position: 30
        size: 15
      offset:
        x: 0
        y: 0
        z: 13
    spoiler:
      length: [20,45,0,5]
      width: [40,40,20,30,0]
      angle: [0,20,90,90]
      position: [60,60,80,80,90]
      texture: [10,11,63]
      doubleside: true
      bump:
        position: 30
        size: 18
      offset:
        x: 0
        y: 0
        z: 30
    font:
      length: [37]
      width: [40,15]
      angle: [-10]
      position: [0,-45]
      texture: [63]
      doubleside: true
      bump:
        position: 30
        size: 10
      offset:
        x: 35
        y: -20
        z: 10
    shields:
      doubleside: true
      offset:
        x: 12
        y: 60
        z: -15
      length: [0,15,45,20]
      width: [30,30,65,65,30,30]
      angle: [30,30,90,150]
      position: [10,10,0,0,10]
      texture: [4]
      bump:
        position: 0
        size: 4
addFlag(0,-40,0,.8,14)
return model;
