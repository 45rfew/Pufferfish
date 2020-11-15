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
  name: 'Odyssey'
  level: 7
  model: 1
  size: 4
  specs:
    shield:
      capacity: [750,750]
      reload: [15,15]
    generator:
      capacity: [330,330]
      reload: [150,150]
    ship:
      mass: 700
      speed: [45,45]
      rotation: [20,20]
      acceleration: [150,150]
  tori: circle:
    segments: 20
    radius: 95
    section_segments: 12
    offset:
      x: 0
      y: 0
      z: 0
    position:
      x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      y: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    width: [20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20]
    height: [8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8]
    texture: [63,63,4,10,4,4,10,4,63,63,63,63,3,10,3,3,10,3,63]
  bodies:
    main:
      section_segments: 20
      offset:
        x: 0
        y: -10
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-130,-130,-85,-70,-60,-20,-25,40,40,100,90]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,20,40,45,10,12,30,30,40,30,0]
      height: [0,20,25,25,10,12,25,25,20,10,0]
      texture: [4,15,63,4,4,4,11,10,4,12]
    laser1:
      section_segments: 12
      offset:
        x: 110
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-25,-30,-20,0,20,30,20]
        z: [0,0,0,0,0,0,0]
      width: [0,3,5,5,5,3,0]
      height: [0,3,5,5,5,3,0]
      texture: [12,6,63,63,6,12]
      laser:
        damage: [20,20]
        rate: 3
        type: 1
        speed: [200,200]
        number: 1
        error: 0
    laser2:
      section_segments: 12
      offset:
        x: 110
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-25,-30,-20,0,20,30,20]
        z: [0,0,0,0,0,0,0]
      width: [0,3,5,5,5,3,0]
      height: [0,3,5,5,5,3,0]
      texture: [12,6,63,63,6,12]
      angle: 180
      laser:
        damage: [20,20]
        rate: 3
        type: 1
        speed: [200,200]
        number: 1
        error: 0
    cannon:
      section_segments: 6
      offset:
        x: 0
        y: -115
        z: 0
      position:
        x: [0,0,0,0]
        y: [-25,-30,-20,0]
        z: [0,0,0,0]
      width: [0,15,9,7]
      height: [0,10,9,7]
      texture: [6,6,6,10]
      laser:
        damage: [250,250]
        rate: 1
        type: 1
        speed: [100,100]
        number: 1
        error: 0
        recoil: 300
    cockpit:
      section_segments: 10
      offset:
        x: 0
        y: 0
        z: 15
      position:
        x: [0,0,0,0,0,0,0]
        y: [-30,-10,0,10,30]
        z: [0,0,0,0,0]
      width: [0,12,15,10,0]
      height: [0,20,22,18,0]
      texture: [9]
    bumpers:
      section_segments: 8
      offset:
        x: 85
        y: 20
        z: 0
      position:
        x: [-5,0,5,10,5,0,-5]
        y: [-85,-80,-40,0,20,50,55]
        z: [0,0,0,0,0,0,0]
      width: [0,10,15,15,15,5,0]
      height: [0,20,35,35,25,15,0]
      texture: [11,2,63,4,3]
      angle: 0
    toppropulsors:
      section_segments: 10
      offset:
        x: 17
        y: 50
        z: 15
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-20,-15,0,10,20,25,30,40,50,40]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,10,15,15,15,10,10,15,10,0]
      height: [0,10,15,15,15,10,10,15,10,0]
      texture: [3,4,10,3,3,63,4]
      propeller: true
    bottompropulsors:
      section_segments: 10
      offset:
        x: 17
        y: 50
        z: -15
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-20,-15,0,10,20,25,30,40,50,40]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,10,15,15,15,10,10,15,10,0]
      height: [0,10,15,15,15,10,10,15,10,0]
      texture: [3,4,10,3,3,63,4]
      propeller: true
  wings:
    topjoin:
      offset:
        x: 0
        y: -3
        z: 0
      doubleside: true
      length: [100]
      width: [20,20]
      angle: [25]
      position: [0,0,0,50]
      texture: [1]
      bump:
        position: 10
        size: 30
    bottomjoin:
      offset:
        x: 0
        y: -3
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
addFlag(0,-40,0,.8,14)
return model;
