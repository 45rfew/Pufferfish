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
  name: 'Rock-Tower'
  level: 6
  model: 6
  size: 2.1
  specs:
    shield:
      capacity: [300,500]
      reload: [8,11]
    generator:
      capacity: [75,115]
      reload: [35,45]
    ship:
      mass: 450
      speed: [75,90]
      rotation: [50,70]
      acceleration: [80,90]
  bodies:
    main:
      section_segments: 8
      offset:
        x: 0
        y: 0
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-90,-85,-70,-60,-20,-25,40,85,70]
        z: [-10,-8,-5,0,0,0,0,0,0]
      width: [0,40,45,10,12,30,30,20,0]
      height: [0,10,12,8,12,10,25,20,0]
      texture: [4,63,4,4,4,11,10,12]
      propeller: true
    cockpit:
      section_segments: 12
      offset:
        x: 0
        y: 30
        z: 20
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-30,-20,0,10,20,30]
        z: [0,0,0,0,0,0]
      width: [0,10,15,15,10,5]
      height: [0,10,15,15,10,5]
      texture: 9
      propeller: false
    dimeds_banhammer:
      section_segments: 6
      offset:
        x: 25
        y: -70
        z: -10
      position:
        x: [0,0,0,0,0,0]
        y: [-20,-10,-20,0,10,12]
        z: [0,0,0,0,0,0]
      width: [0,0,5,7,6,0]
      height: [0,0,5,7,6,0]
      texture: [6,6,6,10,12]
      angle: 0
      laser:
        damage: [4,6]
        rate: 8
        type: 1
        speed: [150,230]
        number: 1
        error: 5
    propulsors:
      section_segments: 8
      offset:
        x: 30
        y: 50
        z: 0
      position:
        x: [0,0,5,5,0,0,0]
        y: [-45,-50,-20,0,20,50,40]
        z: [0,0,0,0,0,0,0]
      width: [0,10,15,15,15,10,0]
      height: [0,15,20,25,20,10,0]
      texture: [11,2,3,4,5,12]
      angle: 0
      propeller: true
  wings:
    main:
      length: [55,15]
      width: [60,40,30]
      angle: [-10,20]
      position: [30,40,30]
      texture: 63
      doubleside: true
      offset:
        x: 0
        y: 20
        z: -5
      bump:
        position: 30
        size: 20
    finalizer_fins:
      length: [20]
      width: [20,10]
      angle: [-70]
      position: [-42,-30]
      texture: 63
      doubleside: true
      offset:
        x: 35
        y: -35
        z: 0
      bump:
        position: 0
        size: 30
addFlag(20,-30,0,.8,14)
return model;
