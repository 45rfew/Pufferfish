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
  name: 'Howler'
  level: 5
  model: 6
  size: 1.2
  zoom: 1
  specs:
    shield:
      capacity: [275,340]
      reload: [5,7]
    generator:
      capacity: [80,110]
      reload: [35,50]
    ship:
      mass: 225
      speed: [85,98]
      rotation: [70,95]
      acceleration: [90,120]
  bodies:
    main:
      section_segments: 8
      offset:
        x: 0
        y: -20
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-145,-135,-125,-130,-100,-55,5,60,85,120,118]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5,5,8,20,30,35,35,30,22,0]
      height: [0,5,5,8,15,20,33,30,30,22,0]
      texture: [17,4,13,3,2,1,10,31,12,17]
      propeller: true
      laser:
        damage: [2.5,4]
        rate: 6
        speed: [160,210]
        number: 2
        recoil: 0
        type: 1
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: -80
        z: 20
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-20,-16,30,60]
        z: [-4,-4,1,0,0,0,0,0,0,0,0,0]
      width: [0,6,16,12]
      height: [0,4,16,12]
      texture: [2,9,31]
    front1:
      section_segments: 8
      offset:
        x: 22
        y: -125
        z: 0
      position:
        x: [0,0,0,0,0,0,-5]
        y: [-22.5,-12,-4.5,-7.5,22.5,60]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,4.5,4.5,6,12,9]
      height: [0,4.5,4.5,6,12,9]
      texture: [17,4,3]
      laser:
        damage: [9,15]
        rate: 1
        speed: [150,200]
        number: 1
        recoil: 25
        type: 2
    front2:
      section_segments: 10
      offset:
        x: 32
        y: -95
        z: 0
      position:
        x: [-4,-4,0,-1]
        y: [0,-12,22.5,60]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,7.5,12,9]
      height: [0,12,18,15]
      texture: [13,2,63]
      angle: 0
    propulsors:
      section_segments: 8
      offset:
        x: 40
        y: 30
        z: -5
      position:
        x: [-12,-12,-2,0,0,0,0,0,0,0,0,0,0]
        y: [-90,-100,-60,20,50,48]
        z: [5,5,5,0,0,0,0,0,0,0,0,0,0]
      width: [0,3.5999999999999996,12,24,14.399999999999999,0]
      height: [0,3.5999999999999996,15.6,24,14.399999999999999,0]
      texture: [4,31,10,13,17]
      propeller: true
    uwing:
      section_segments: [0,60,120,180]
      offset:
        x: -20
        y: -30
        z: 10
      position:
        x: [0,0,0,0,0,0]
        y: [-65,-70,40,80,110]
        z: [0,0,0,0,0,0]
      width: [0,5,25,25,0]
      height: [0,10,25,25,20]
      texture: [4]
  wings:
    main:
      doubleside: true
      offset:
        x: 20
        y: -20
        z: 5
      length: [89,0]
      width: [130,60]
      angle: [-12,-12]
      position: [0,80,80]
      texture: 18
      bump:
        position: 20
        size: 5
    sides:
      doubleside: true
      offset:
        x: 20
        y: -20
        z: 10
      length: [84,-3,5,12,-5]
      width: [25,25,140,140,50,50]
      angle: [-12,5,5,5,5]
      position: [40,85,55,55,70,70]
      texture: [63,4,63,4,17]
      bump:
        position: 35
        size: 15
addFlag(0,-60,5,1.1,-7)
return model;
