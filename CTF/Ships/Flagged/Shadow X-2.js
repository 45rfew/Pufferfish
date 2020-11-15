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
  name: 'Shadow X-2'
  level: 5
  model: 5
  size: 1.1
  specs:
    shield:
      capacity: [150,220]
      reload: [5,7]
    generator:
      capacity: [80,145]
      reload: [19,29]
    ship:
      mass: 125
      speed: [110,140]
      rotation: [35,48]
      acceleration: [140,160]
  bodies:
    main:
      section_segments: 10
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-100,-98,-95,-70,-40,0,40,70,80,90,100]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5,10,20,30,20,20,30,30,30,20,0]
      height: [0,4,4,20,20,10,10,15,15,15,10,10]
      texture: [12,5,63,4,4,3,4,4,5]
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
      width: [10,15,18,19,2]
      height: [3,5,7,8,2]
      texture: [63]
      propeller: true
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: -25
        z: 12
      position:
        x: [0,0,0,0,0,0]
        y: [-45,-40,-25,0,5]
        z: [0,0,0,0,0,0]
      width: [0,10,15,5,0]
      height: [0,10,15,5,0]
      texture: [9]
    laser:
      section_segments: 10
      offset:
        x: 50
        y: 10
        z: -13
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-30,-25,0,10,20,25,30,40,70,60]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,10,15,15,15,10,10,15,10,0]
      height: [0,10,15,15,15,10,10,15,5,0]
      texture: [6,4,10,3,4,3,2]
      propeller: true
      laser:
        damage: [5,7]
        rate: 5
        type: 1
        speed: [160,190]
        number: 1
  wings:
    top:
      doubleside: true
      offset:
        x: 10
        y: 60
        z: 5
      length: [30]
      width: [50,30]
      angle: [60]
      position: [0,50]
      texture: [3]
      bump:
        position: 10
        size: 10
    side:
      doubleside: true
      offset:
        x: 10
        y: 70
        z: 5
      length: [30]
      width: [40,20]
      angle: [-13]
      position: [0,60]
      texture: [63]
      bump:
        position: 10
        size: 10
    wings:
      offset:
        x: 0
        y: 35
        z: 0
      length: [80]
      width: [100,70]
      angle: [0]
      position: [-80,50]
      texture: [4]
      bump:
        position: 10
        size: 15
addFlag(0,-20,-10)
return model;
