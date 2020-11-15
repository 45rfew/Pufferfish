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
  name: 'Shadow X-3'
  level: 7
  model: 2
  size: 3
  specs:
    shield:
      capacity: [400,400]
      reload: [10,10]
    generator:
      capacity: [250,250]
      reload: [45,45]
    ship:
      mass: 350
      speed: [140,140]
      rotation: [35,35]
      acceleration: [35,35]
  bodies:
    main:
      section_segments: 20
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-130,-128,-115,-70,-40,0,40,70,80,90,100]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5,10,20,20,20,20,30,30,30,20,0]
      height: [0,5,10,30,20,10,10,15,15,15,10,10]
      texture: [12,3,15,4,63,63,4,4,5]
      laser:
        damage: [225,225]
        rate: 1
        type: 1
        speed: [200,200]
        number: 1
        error: 0
        recoil: 500
    air:
      section_segments: 10
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,-80,-30,-10,10,30,50]
        z: [0,0,0,0,0,0,0]
      width: [0,25,35,30,30,32,20]
      height: [0,15,10,10,10,10,10,15,15,15,10,10]
      texture: [4,3,2,2,2,3]
    back:
      section_segments: 10
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0]
        y: [90,95,100,105,90]
        z: [0,0,0,0,0]
      width: [10,15,18,22,2]
      height: [3,5,7,8,2]
      texture: [63]
      propeller: true
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: -30
        z: 18
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-65,-25,0,25,60,90,100]
        z: [0,0,0,0,-10,-8,-10]
      width: [0,10,15,10,20,15,10]
      height: [0,15,20,10,10,10,10]
      texture: [9,9,9,10,63,3]
    laser:
      section_segments: 10
      offset:
        x: 90
        y: 10
        z: -19
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-30,-25,0,10,20,25,30,40,70,60]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,10,15,15,15,10,10,15,10,0]
      height: [0,10,15,15,15,10,10,15,5,0]
      texture: [6,4,10,3,4,3,2]
      propeller: true
      laser:
        damage: [4,4]
        rate: 3
        type: 1
        speed: [150,150]
        number: 1
    laser2:
      section_segments: 10
      offset:
        x: 50
        y: -20
        z: -20
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-30,-25,0,10,20,25,30,40,70,60]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,10,15,15,15,10,10,15,12,0]
      height: [0,10,15,15,15,10,10,15,5,0]
      texture: [6,4,10,3,4,3,2]
      propeller: true
      laser:
        damage: [4,4]
        rate: 4
        type: 1
        speed: [150,150]
        number: 1
  wings: wings:
    offset:
      x: 10
      y: 0
      z: 0
    length: [35,15,30,25]
    width: [100,50,60,30,45]
    angle: [-10,20,0,0]
    position: [0,0,10,30,-10]
    texture: [4]
    bump:
      position: -20
      size: 15
addFlag(0,-40,-10,0.9,8)
return model;
