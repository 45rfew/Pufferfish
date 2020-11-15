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
  name: 'Side-Interceptor'
  level: 4
  model: 4
  size: 1.6
  specs:
    shield:
      capacity: [175,225]
      reload: [3,6]
    generator:
      capacity: [100,150]
      reload: [30,40]
    ship:
      mass: 120
      speed: [80,110]
      rotation: [50,100]
      acceleration: [110,140]
  bodies:
    main:
      section_segments: 12
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-30,-22,-15,0,15,22,30,20]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [5,10,25,30,25,10,15,0]
      height: [5,10,25,30,25,10,15,0]
      texture: [1,3,63,63,3,4,12]
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
      texture: [5,9,5]
      propeller: false
    cannons:
      section_segments: 12
      offset:
        x: 60
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-25,-30,-20,0,20,30,20]
        z: [0,0,0,0,0,0,0]
      width: [0,3,5,5,5,3,0]
      height: [0,3,5,5,5,3,0]
      texture: [12,6,63,63,6,12]
      angle: 0
      laser:
        damage: [5,7]
        rate: 5
        type: 1
        speed: [100,200]
        number: 1
        error: 5
  wings:
    wings1:
      doubleside: true
      offset:
        x: 60
        y: 20
        z: 0
      length: [-20,-10,-40]
      width: [50,50,130,30]
      angle: [280,315,315]
      position: [0,0,-50,0]
      texture: 4
      bump:
        position: 10
        size: -10
    wings2:
      doubleside: true
      offset:
        x: 60
        y: 20
        z: 0
      length: [20,10,40]
      width: [50,50,130,30]
      angle: [-100,-135,-135]
      position: [0,0,-50,0]
      texture: 4
      bump:
        position: 10
        size: 10
    join:
      doubleside: true
      offset:
        x: 0
        y: 0
        z: 0
      length: [61]
      width: [10,6]
      angle: [0]
      position: [0,0,0,50]
      texture: 63
      bump:
        position: 10
        size: 20
addFlag(0,-65,15,.5,35)
return model;
