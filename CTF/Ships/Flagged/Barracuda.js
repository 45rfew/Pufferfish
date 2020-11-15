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
  name: 'Barracuda'
  level: 6
  model: 16
  size: 2.4
  specs:
    shield:
      capacity: [300,400]
      reload: [8,12]
    generator:
      capacity: [100,150]
      reload: [8,14]
    ship:
      mass: 500
      speed: [70,90]
      rotation: [30,45]
      acceleration: [130,150]
      dash:
        rate: 2
        burst_speed: [140,160]
        speed: [100,120]
        acceleration: [70,70]
        initial_energy: [50,75]
        energy: [20,30]
  bodies:
    body:
      section_segments: 12
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-90,-100,-60,-10,0,20,50,80,100,90]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5,20,25,35,40,40,35,30,0]
      height: [0,5,40,45,40,60,70,60,30,0]
      texture: [10,2,10,2,3,13,13,63,12]
      propeller: true
    front:
      section_segments: 8
      offset:
        x: 0
        y: -20
        z: 0
      position:
        x: [0,0,0,0,0]
        y: [-90,-85,-70,-60,-20]
        z: [0,0,0,0,0]
      width: [0,40,45,10,12]
      height: [0,15,18,8,12]
      texture: [8,63,4,4,4]
      propeller: true
    propeller:
      section_segments: 10
      offset:
        x: 40
        y: 40
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-20,-15,0,10,20,25,30,40,70,60]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,10,15,15,15,10,10,20,15,0]
      height: [0,10,15,15,15,10,10,18,8,0]
      texture: [4,4,10,3,3,63,4,63,12]
      propeller: true
    sides:
      section_segments: 6
      angle: 90
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-80,-75,-60,-50,-10,10,50,60,75,80]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,30,35,10,12,12,10,35,30,0]
      height: [0,10,12,8,12,12,8,12,10,0]
      texture: [4,63,4,4,4,4,4,63,4]
    cockpit:
      section_segments: 12
      offset:
        x: 0
        y: -20
        z: 30
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-50,-20,0,10,30,50]
        z: [0,0,0,0,0,0]
      width: [0,12,18,20,15,0]
      height: [0,20,22,24,20,0]
      texture: [9]
  wings:
    top:
      doubleside: true
      offset:
        x: 0
        y: 20
        z: 15
      length: [70]
      width: [70,30]
      angle: [90]
      position: [0,30]
      texture: [63]
      bump:
        position: 10
        size: 30
    top2:
      doubleside: true
      offset:
        x: 0
        y: 51
        z: 5
      length: [70]
      width: [50,20]
      angle: [90]
      position: [0,60]
      texture: [63]
      bump:
        position: 10
        size: 30
addFlag(40,-65,-15)
return model;
