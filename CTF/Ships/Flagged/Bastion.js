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
  name: 'Bastion'
  level: 7
  model: 3
  size: 4
  specs:
    shield:
      capacity: [400,400]
      reload: [20,20]
    generator:
      capacity: [500,500]
      reload: [100,100]
    ship:
      mass: 350
      speed: [80,80]
      rotation: [15,15]
      acceleration: [125,125]
  bodies:
    main:
      section_segments: 8
      offset:
        x: 0
        y: 50
        z: 10
      position:
        x: [0,0,0,0,0,0,0]
        y: [-40,-50,-20,0,20,40,25]
        z: [0,0,0,0,0,0,0]
      width: [0,5,22,18,16,15,0]
      height: [0,2,12,16,16,15,0]
      texture: [10,1,1,10,8,17]
      propeller: true
    thrusters:
      section_segments: 8
      offset:
        x: 40
        y: 43
        z: -24
      position:
        x: [0,0,0,0,0,0]
        y: [-25,-20,0,20,40,30]
        z: [0,0,0,0,0,0]
      width: [0,8,12,8,8,0]
      height: [0,12,12,8,8,0]
      texture: [63,2,2,2,17]
      propeller: true
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: 30
        z: 20
      position:
        x: [0,0,0,0,0,0,0]
        y: [-15,-10,0,11,35]
        z: [-5,-3,-1,0,0]
      width: [0,5,10,10,0]
      height: [0,3,5,7,0]
      texture: [9]
    cannon1:
      section_segments: 4
      offset:
        x: 10
        y: -80
        z: 1
      position:
        x: [0,0,0,0,0,0,0]
        y: [-10,0,20,30,40]
        z: [0,0,0,0,0]
      width: [0,2,4,7,3]
      height: [0,1,3,6,0]
      texture: [17,4]
      laser:
        damage: [6,6]
        rate: 5
        type: 1
        speed: [200,200]
        number: 1
    cannon2:
      section_segments: 4
      offset:
        x: 42
        y: -129
        z: 8
      position:
        x: [0,0,0,0,0,0,0]
        y: [-10,0,20,30,40]
        z: [0,0,0,0,0]
      width: [0,2,4,7,3]
      height: [0,1,3,6,0]
      texture: [17,4]
      angle: 3
      laser:
        damage: [8,8]
        rate: 4
        type: 1
        speed: [180,180]
        number: 1
    cannon3:
      section_segments: 4
      offset:
        x: 75
        y: -105
        z: -8
      position:
        x: [0,0,0,0,0,0,0]
        y: [-10,0,20,30,40]
        z: [0,0,0,0,0]
      width: [0,2,4,7,3]
      height: [0,1,3,6,0]
      texture: [17,4]
      angle: 5
      laser:
        damage: [20,20]
        rate: 1.5
        type: 1
        speed: [160,160]
        number: 1
  wings:
    main1:
      doubleside: true
      offset:
        x: 9
        y: 15
        z: 0
      length: [0,15,0,7]
      width: [0,160,70,30,30]
      angle: [0,20,0,-10]
      position: [30,-20,30,30,30]
      texture: [13,63,13,8]
      bump:
        position: 35
        size: 5
    main2:
      doubleside: true
      offset:
        x: 30
        y: 15
        z: 0
      length: [0,15,0,20]
      width: [0,80,90,200,30]
      angle: [30,30,30,30]
      position: [30,30,10,-45,30]
      texture: [13,3,13,4]
      bump:
        position: 35
        size: 7
    main3:
      doubleside: true
      offset:
        x: 0
        y: 25
        z: -7
      length: [45,35,0,20]
      width: [40,40,40,200,40]
      angle: [-20,20,-20,-5]
      position: [20,30,0,-30,10]
      texture: [0,8,13,63]
      bump:
        position: 35
        size: 20
addFlag(28,-35,-25,0.7,21)
return model;
