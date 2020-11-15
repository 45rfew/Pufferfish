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
  name: 'Aries'
  level: 7
  model: 4
  size: 4.5
  specs:
    shield:
      capacity: [800,800]
      reload: [17,17]
    generator:
      capacity: [350,350]
      reload: [175,175]
    ship:
      mass: 800
      speed: [40,40]
      rotation: [20,20]
      acceleration: [150,150]
  bodies:
    arm:
      section_segments: 6
      angle: 0
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-90,-85,-70,-60,-10,10,60,70,85,90,85]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,20,25,10,12,12,15,20,20,15,0]
      height: [0,10,12,8,12,12,8,12,10,5,0]
      texture: [4,63,4,4,4,4,4,63,3]
      propeller: true
    arm45:
      section_segments: 6
      angle: 45
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-90,-85,-70,-60,-10,10,60,70,85,90]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,20,25,10,12,12,10,25,20,0]
      height: [0,10,12,8,12,12,8,12,10,0]
      texture: [4,63,4,4,4,4,4,63,4]
    arm90:
      section_segments: 6
      angle: 90
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-90,-85,-70,-60,-10,10,60,70,85,90]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,20,25,10,12,12,10,25,20,0]
      height: [0,10,12,8,12,12,8,12,10,0]
      texture: [4,63,4,4,4,4,4,63,4]
    arm135:
      section_segments: 6
      angle: -45
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-90,-85,-70,-60,-10,10,60,70,85,90]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,20,25,10,12,12,10,25,20,0]
      height: [0,10,12,8,12,12,8,12,10,0]
      texture: [4,63,4,4,4,4,4,63,4]
    cockpit:
      section_segments: 20
      offset:
        x: 0
        y: -10
        z: 8
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-50,-35,-25,-15,0,15,25,35,70]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,15,20,25,20,10,15,15,0]
      height: [0,10,13,15,15,15,12,10,0]
      texture: [6,15,15,1,4,3,3,15]
    topcockpit:
      section_segments: 16
      offset:
        x: 0
        y: -23
        z: 7
      position:
        x: [0,0,0,0,0,0,0]
        y: [-30,-10,0,10,30]
        z: [0,0,0,0,0]
      width: [0,12,15,10,0]
      height: [0,20,22,18,0]
      texture: [9]
    cannon:
      section_segments: 6
      offset:
        x: 0
        y: -63
        z: 0
      position:
        x: [0,0,0,0,0,0]
        y: [-25,-30,-20,0,10,12]
        z: [0,0,0,0,0,0]
      width: [0,10,8,7,6,0]
      height: [0,5,5,7,6,0]
      texture: [6,6,6,10,12]
      laser:
        damage: [150,150]
        rate: 0.7
        type: 1
        speed: [110,110]
        number: 1
        error: 0
    sidecannons:
      section_segments: 6
      offset:
        x: 45
        y: -45
        z: 7
      position:
        x: [0,0,0,0,0,0]
        y: [0,-30,-20,0,10,12]
        z: [0,0,0,0,-5,-10]
      width: [0,3,5,7,6,0]
      height: [0,3,5,7,6,0]
      texture: [6,6,15,4,4]
      angle: -45
      laser:
        damage: [15,15]
        rate: 4
        type: 1
        speed: [200,200]
        number: 1
        error: 0
    backsidecannons:
      section_segments: 6
      offset:
        x: 45
        y: 45
        z: 7
      position:
        x: [0,0,0,0,0,0]
        y: [0,-30,-20,0,10,12]
        z: [0,0,0,0,-5,-10]
      width: [0,3,5,7,6,0]
      height: [0,3,5,7,6,0]
      texture: [6,6,15,4,4]
      angle: 225
      laser:
        damage: [15,15]
        rate: 4
        type: 1
        speed: [200,200]
        number: 1
        error: 0
  wings: side_joins:
    offset:
      x: 0
      y: 0
      z: 5
    length: [40,30]
    width: [50,30,0]
    angle: [30,-10]
    position: [0,0,50]
    texture: [1,11]
    bump:
      position: 10
      size: 20
addFlag(0,-60,-10,0.8,14)
return model;
