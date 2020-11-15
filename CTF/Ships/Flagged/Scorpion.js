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
  name: 'Scorpion'
  level: 6
  model: 2
  size: 2
  specs:
    shield:
      capacity: [225,400]
      reload: [5,7]
    generator:
      capacity: [80,175]
      reload: [38,50]
    ship:
      mass: 450
      speed: [75,90]
      rotation: [50,70]
      acceleration: [80,100]
  bodies:
    main:
      section_segments: 8
      offset:
        x: 0
        y: 0
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-90,-40,-30,0,50,100,120,110]
        z: [-10,-5,0,0,0,0,20,20]
      width: [0,12,20,15,25,10,5]
      height: [0,10,15,25,15,10,5]
      texture: [1,4,63,11,11,4]
      propeller: false
    tail:
      section_segments: 14
      offset:
        x: 0
        y: 70
        z: 50
      position:
        x: [0,0,0,0,0,0]
        y: [-70,-25,-10,20,40,50]
        z: [0,0,0,0,-10,-20]
      width: [0,5,35,25,5,5]
      height: [0,5,25,20,5,5]
      texture: [6,4,63,10,4]
      laser:
        damage: [50,100]
        rate: 0.9
        type: 2
        speed: [170,230]
        number: 1
        angle: 0
        error: 0
        recoil: 100
    cockpit:
      section_segments: 8
      offset:
        x: 13
        y: -44
        z: 12
      position:
        x: [-5,0,0,0,0]
        y: [-15,-5,0,5,15]
        z: [0,0,0,1,0]
      width: [0,8,10,8,0]
      height: [0,5,5,5,0]
      texture: [6,5]
      propeller: false
    deco:
      section_segments: 8
      offset:
        x: 70
        y: 0
        z: -10
      position:
        x: [0,0,0,10,-5,0,0,0]
        y: [-115,-80,-100,-60,-30,-10,20,0]
        z: [0,0,0,0,0,0,0,0]
      width: [1,5,10,15,15,20,10,0]
      height: [1,5,15,20,35,30,10,0]
      texture: [6,6,1,1,11,2,12]
      laser:
        damage: [2,3]
        rate: 1.8
        type: 1
        speed: [130,170]
        number: 2
        angle: 5
        error: 0
      propeller: true
    wingends:
      section_segments: 8
      offset:
        x: 105
        y: -80
        z: -10
      position:
        x: [0,2,4,2,0]
        y: [-20,-10,0,10,20]
        z: [0,0,0,0,0]
      width: [2,3,6,3,2]
      height: [5,15,22,17,5]
      texture: 4
      angle: 0
      propeller: false
  wings:
    main:
      length: [80,30]
      width: [40,30,20]
      angle: [-10,20]
      position: [30,-50,-80]
      texture: 63
      bump:
        position: 30
        size: 10
      offset:
        x: 0
        y: 0
        z: 0
    font:
      length: [80,30]
      width: [20,15]
      angle: [-10,20]
      position: [-20,-40]
      texture: 4
      bump:
        position: 30
        size: 10
      offset:
        x: 0
        y: 0
        z: 0
addFlag(35,-65,-20)
return model;
