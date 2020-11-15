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
  name: 'U-Sniper'
  level: 5
  model: 1
  size: 1.8
  specs:
    shield:
      capacity: [200,300]
      reload: [4,6]
    generator:
      capacity: [80,160]
      reload: [40,60]
    ship:
      mass: 200
      speed: [70,90]
      rotation: [50,70]
      acceleration: [60,110]
  bodies:
    main:
      section_segments: 8
      offset:
        x: 0
        y: 0
        z: 10
      position:
        x: [0,0,0,0,0,0]
        y: [0,-10,40,100,90,100]
        z: [0,0,0,0,0,0]
      width: [0,10,23,10,0]
      height: [0,5,23,10,0]
      texture: [12,1,10,12]
      propeller: true
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: 0
        z: 30
      position:
        x: [0,0,0,0]
        y: [20,40,80]
        z: [-4,0,-6]
      width: [5,10,5]
      height: [0,8,0]
      texture: [9]
    uwings:
      section_segments: 8
      offset:
        x: 50
        y: -20
        z: -10
      position:
        x: [0,0,0,0,0,0]
        y: [-90,-100,40,80,90,100]
        z: [0,0,0,0,0,0]
      width: [0,10,25,20,0]
      height: [0,5,25,20,0]
      texture: [12,2,3,4]
    cannons:
      section_segments: 12
      offset:
        x: 70
        y: 20
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-60,-70,-20,0,20,50,45]
        z: [0,0,0,0,0,0,0]
      width: [0,5,6,10,15,5,0]
      height: [0,5,5,10,10,5,0]
      angle: 0
      laser:
        damage: [40,60]
        rate: 2
        type: 2
        speed: [190,240]
        recoil: 200
        number: 1
        error: 0
      propeller: false
      texture: [4,4,10,4,63,4]
    side_propulsors:
      section_segments: 10
      offset:
        x: 30
        y: 30
        z: 5
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,10,13,25,30,40,60,50]
        z: [0,0,0,0,0,0,0,0]
      width: [0,5,10,10,10,5,5,10,5,0]
      height: [0,5,10,10,10,5,5,10,5,0]
      propeller: true
      texture: [5,2,11,2,63,11,12]
addFlag(60,-45,-5,.8,14)
return model;
