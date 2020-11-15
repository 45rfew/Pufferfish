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
addFlag = (x=0,y=0,z=0,size=1) ->
  model.bodies["flag"] =  
    section_segments: [44,45,46,135,225,310,315,320]
    offset:
      x: 0
      y: 65+y
      z: 79+z
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
  name: 'O-Defender'
  level: 6
  model: 8
  size: 2.2
  specs:
    shield:
      capacity: [400,550]
      reload: [10,13]
    generator:
      capacity: [70,100]
      reload: [25,40]
    ship:
      mass: 500
      speed: [70,80]
      rotation: [30,40]
      acceleration: [60,80]
  bodies:
    main:
      section_segments: 8
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0]
        y: [-90,-88,0,90,91]
        z: [0,0,0,0,0]
      width: [5,6,25,10,20]
      height: [2,10,40,20,20]
      texture: [63,1,10]
      propeller: true
      laser:
        damage: [35,60]
        rate: 2
        type: 2
        speed: [130,180]
        number: 1
        angle: 0
        error: 0
    side:
      section_segments: 10
      offset:
        x: 50
        y: 0
        z: 0
      position:
        x: [-40,-5,15,25,20,0,-50]
        y: [-100,-70,-40,-10,20,50,90]
        z: [0,0,0,0,0,0,0]
      width: [5,20,20,20,20,20,5]
      height: [15,25,30,30,30,25,0]
      texture: [0,1,2,3,4,63]
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: -60
        z: 18
      position:
        x: [0,0,0,0,0,0,0]
        y: [-10,0,20,30,40]
        z: [0,0,0,0,0]
      width: [0,5,10,10,0]
      height: [0,5,10,12,0]
      texture: [9]
    top_propulsor:
      section_segments: 15
      offset:
        x: 0
        y: 0
        z: 10
      position:
        x: [0,0,0,0]
        y: [80,95,100,90]
        z: [0,0,0,0]
      width: [5,20,10,0]
      height: [5,15,5,0]
      propeller: true
      texture: [1,63,12]
    bottom_propulsor:
      section_segments: 15
      offset:
        x: 0
        y: 0
        z: -10
      position:
        x: [0,0,0,0]
        y: [80,95,100,90]
        z: [0,0,0,0]
      width: [5,20,10,0]
      height: [5,15,5,0]
      propeller: true
      texture: [1,63,12]
  wings: join:
    offset:
      x: 0
      y: 20
      z: 0
    length: [80,0]
    width: [130,50]
    angle: [-1]
    position: [0,-30]
    texture: [8]
    bump:
      position: -20
      size: 15
addFlag(0,-50)
return model;
