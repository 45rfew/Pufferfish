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
ring = (x,y,z,s,l,w,h,a,v,t,j=0) ->
  return k =
    section_segments: s or 12
    offset:
      x: x
      y: y
      z: z
    position:
      x: [0,0,0,0,0,0,0,0,0,0]
      y: [3,3,0,0,0,0,0,3,3,3].mult(l or 1)
      z: [0,0,0,0,0,0,0,0,0,0]
    width: [10-j,10-j,10-j,12,12,12,12,12,10-j,10-j].mult(w or 1)
    height: [10-j,10-j,10-j,12,12,12,12,12,10-j,10-j].mult(h or 1)
    texture: t or 17
    angle: a or 0
    vertical: v or false
jab = (x,y,z,s,w,l,h,a,v) ->
  return k =
    section_segments: 6
    offset:
      x: 0
      y: 0
      z: z
    position:
      x: Array(10).fill(y)
      y: [0,0,2,3,7,8,10,10].div(2).add(x).mult(l or 1)
      z: s or [0,0,0,0,0,0,0]
    width: [0,2,2,1,1,2,2,0].mult(w or 1)
    height: [0,2,2,1,1,2,2,0].div(2).mult(h or 1)
    texture: t or [3.9,3.9,112.9,16.9,112.9,3.9,3.9]      
    angle: a or 90
    vertical: v or false
a = [45,135,225,315]
model =
  name: 'Agartha'
  level: 6
  model: 19
  size: 1.6
  specs:
    shield:
      capacity: [300,385]
      reload: [7,9]
    generator:
      capacity: [120,120]
      reload: [50,70]
    ship:
      mass: 280
      speed: [85,105]
      rotation: [90,110]
      acceleration: [160,190]
      dash:
        rate: 10
        burst_speed: [10,10]
        speed: [10,10]
        acceleration: [0,0]
        initial_energy: [0,0]
        energy: [0,0]
  bodies:
    ring: ring(16,0,5,12,1,.8,1.2)
    ring2: ring(16,-6,5,12,.9,.7,1.1)
    main:
      section_segments: 6
      offset:
        x: 0
        y: -50
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-24,-19,-5,0,20,35,80,140,145,145,145,133,142].mult(-1).reverse()
        z: [2.5,1,0,0,0,0,0,0,0,0,0,0,0].reverse()
      width: [1,9,16,18,20,22,22,22,19,19,18,5,0].reverse()
      height: [0,3,10,10,10,12,15,15,12,12,10,5,0].reverse()
      texture: [16.9,17.9,16.9,16.9,63,4,3,3,10,63,9.99,1,16.9]
      angle: 180
    mainback:
      section_segments: 6
      offset:
        x: 0
        y: -50
        z: 10
      position:
        x: Array(7).fill(-0.1)
        y: [85,85,140,132,132,142]
        z: [0,0,0,0,0,0]
      width: [0,22,22,5,5,10]
      height: [0,15,15,5,5,10]
      texture: [17,63,18]
      propeller: true
    main2:
      section_segments: 6
      offset:
        x: 10
        y: 10
        z: 3
      position:
        x: [0,0,2,3,2,0,0,9,9,9,9,9,0]
        y: [-60,-68,-59,-20,-10,-5,40,60,70,95,100,90]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,8,10,12,5,15,15,12,12,12,10,0]
      height: [0,8,10,12,5,15,15,15,15,15,12,0]
      texture: [18,4,2,3,4,10,8,3.9,12.9,63,17]
      propeller: true
    main2stripe:
      section_segments: 6
      offset:
        x: 10.1
        y: 10
        z: 3
      position:
        x: [0,0,2,3,2,0,0,9,9,9,9,9,0]
        y: [-59,-59,-59,-20,-10,-5,40,60,70,70,70,70]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,8,10,12,5,15,15,12,12,12,10,0]
      height: [0,8,10,12,5,15,15,15,15,15,12,0].div(3)
      texture: [18,4,17,16,16,18,13,13,13,3,17].add(-0.1)
    cockpitTop:
      section_segments: a
      offset:
        x: 0
        y: -18-30
        z: 29
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-18.5,-13,10,40]
        z: [-0.5,-0.5,0,-1.5,0,0,0,0,0]
      width: [0,9.5,16.5,17]
      height: [2,2,2,4]
      texture: [3]
    windshield:
      section_segments: 3
      offset:
        x: 0
        y: -20-30
        z: 24
      position:
        x: [-40,-11,10,15,10,-11,-40]
        y: [-14,-12,-7,0,7,12,14]
        z: [1,0,0,0,0,0,1]
      width: [0,20,10,10,10,20,0]
      height: [0,5,5,5,5,5,0]
      texture: [7,8.7,8.3,8.3,8.7,7]
      angle: 90
    cockpitMiddle:
      section_segments: [45,132,228,315]
      offset:
        x: 0
        y: -20.5-30
        z: 17
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-24,-18.5,-5,40]
        z: [0,0,0,1.5,0,0,0,0,0]
      width: [0,10.5,18,20]
      height: [2,2,2,4].add(5)
      texture: [ 2,2,8,3,4,5 ]
    cockpitback:
      section_segments: [40,90,180,270,320]
      offset:
        x: 1101
        y: -70
        z: 22
      position:
        x: [0,0,0,0]
        y: [15,35,50,95]
        z: [-10,3,6,6]
      width: [5,5,5,5]
      height: [0,14,12,12]
      texture: [9.93,1,4]            
    top_box:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: -20
        z: 9
      position:
        x: [0,0,0,0,0,0,0]
        y: [-40,-20,0,45,70,85]
        z: [0,0,0,0,0,-5]
      width: [15,20,20,20,20,20]
      height: [0.1,14,18,20,20,0]
      texture: [1,1,9.95,11,12]
    reactor:
      section_segments: 20
      offset:
        x: 0
        y: 35
        z: -40
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-30,-22,-17,-16,6,5,5,5,-7,-7]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [21,21,21,20,19,17,16,12,11,0]
      height: [21,21,21,20,19,17,16,12,11,0]
      texture: [2,2,4,18,18,17,18,113,17]      
      vertical: true 
    wire:
      section_segments: 8
      angle: 0
      offset:
        x: -26
        y: 20
        z: 40
      position:
        x: [11,12,10,10,10,9.5,9.5,10,9,9,10]
        y: [-78,-68,-58,-48,-38,-28,-18,-8,2,12,22]
        z: [-40,-33,-26,-23,-22,-17,-16,-14,-11,-5,-5,-5]
      width: [0,2,2,2,2,2,2,2,2,2,2]
      height: [0,2,2,2,2,2,2,2,2,2,2]
      propeller: false
      texture: [17,18,17,18,17,18,17,18,17,18]  
    toploader:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 19.3
        z: -11
      position:
        x: [0,0,0,0,0,0,0]
        y: [-10,-10,-0,11,11,10,10]
        z: [0,0,0,0,0,0,0]
      width: [0,25,25,18,15,15,0]
      height: [0,28,28,28,25,25,0]
      texture: [4,4,8,3.5,17,17]
      vertical: true          
    Right_sides:
      section_segments: [310,360,180,230]
      offset:
        x: 0
        y: -190
        z: 0
      position:
        x: Array(10).fill(28).add(2)
        y: [1.95,1.95,55,170,200,200]
        z: [0,0,0,0,0,0,0,0]
      width: [0,10,45,45,20,0].add(-1)
      height: [3,3,3,3,3,3]
      texture: [ 2 ]
    Right_sides_outer:
      section_segments: [310-30,360,180,230+30]
      offset:
        x: 0
        y: -190
        z: -2
      position:
        x: [40.5,40.5,69,69,49,49,49]
        y: [-1,-1,55,170,202.5,202.5,202.5]
        z: [0,0,0,0,0,0,0,0]
      width: [0,4,4,4,4,4,0]#[0,10,45,45,17,0,0].add(5-1)
      height: [2,2,2,2,2,2,0]
      texture: [4]
    Right_sides_outer2:
      section_segments: [310-30,360,180,230+30]
      offset:
        x: 0
        y: -190
        z: -2
      position:
        x: [40.5,40.5,69,69,49,49,49].add(-0.1)
        y: [-1,-1,55,170,202.5,202.5,202.5]
        z: [0,0,0,0,0,0,0,0]
      width: [0,4,4,4,4,4,0]
      height: [2,2,2,2,2,2,0]
      texture: [4,17,17,17,17,4]      
    Right_sides_inner:
      section_segments: [310,360,180,230]
      offset:
        x: 0
        y: -190
        z: 0
      position:
        x: Array(10).fill(25)
        y: [7,7,55,170,190,190]
        z: [0,0,0,0,0,0,0,0]
      width: [0,10,45,45,20,0]
      height: [1,1,1,1,1,1]
      texture: [ 63 ]
    Right_sides_inner2:
      section_segments: 6
      offset:
        x: 0
        y: 12
        z: 0
      position:
        x: [-29,-29,-33,-33]
        y: [7,7,200,200]
        z: [0,0,0,0]
      width: [0,2,5,0]
      height: [0,2,2,0]
      texture: [5,17,5]
      angle: 180
    righttrianglesfront:
      section_segments: [135,225,315]
      offset:
        x: 0
        y: -112
        z: 5
      position:
        x: [-11,-25,-25,-11].add(-19.5)
        y: [-32,-30,17,70]
        z: [0,0,0,-2]
      width: [0,20,20,0]
      height: [0,4,4,0]
      texture: [3.3]
      angle: 180
    righttrianglesback:
      section_segments: [135,225,315]
      offset:
        x: 0
        y: -12
        z: 5
      position:
        x: [-11,-11,-25,-25,-25].add(-19.5)
        y: [-17,-17,24,43,43]
        z: [-2,-2,0,0,0]
      width: [0,0.1,20,20,0]
      height: [0,0.1,4,4,0]
      texture: [3.3]
      angle: 180
    rightsidesten:
      section_segments: a
      offset:
        x: 0
        y: -27
        z: 2
      position:
        x: [0,0,0,0].add(41)
        y: [-20,-20,10,10].add(50.5)
        z: [0,2,-1.6,0]
      width: [0,35,35,0]
      height: [0,2,2,0]
      texture: [18]
      angle: 90

    left_sides:
      section_segments: [310,360,180,230]
      offset:
        x: 0
        y: -190
        z: 0
      position:
        x: Array(10).fill(28).add(2)
        y: [1.95+50,1.95+50,55+50,170,200,200].mult(-1).reverse()
        z: [0,0,0,0,0,0,0,0]
      width: [0,10,45,45,20,0].add(-1).reverse()
      height: [3,3,3,3,3,3]
      texture: [4]
      angle: 180
    left_sides_outer:
      section_segments: [310-30,360,180,230+30]
      offset:
        x: 0
        y: -190
        z: -2
      position:
        x: [40.5,40.5,69,69,49,49,49].reverse()
        y: [-1+50,-1+50,55+50,170,202.5,202.5,202.5].mult(-1).reverse()
        z: [0,0,0,0,0,0,0,0]
      width: [0,4,4,4,4,4,0].reverse()
      height: [2,2,2,2,2,2,0]
      texture: [2]
      angle: 180
    left_sides_outer2:
      section_segments: [310-30,360,180,230+30]
      offset:
        x: 0
        y: -190
        z: -2
      position:
        x: [40.5,40.5,69,69,49,49,49].add(-0.1).reverse()
        y: [-1+50,-1+50,55+50,170,202.5,202.5,202.5].mult(-1).reverse()
        z: [0,0,0,0,0,0,0,0]
      width: [0,4,4,4,4,4,0]
      height: [2,2,2,2,2,2,0]
      texture: [4,17,17,17,17,4]    
      angle: 180
    left_sides_inner:
      section_segments: [310,360,180,230]
      offset:
        x: 0
        y: -190
        z: 0
      position:
        x: Array(10).fill(25)
        y: [7+50,7+50,55+50,170,190,190].mult(-1).reverse()
        z: [0,0,0,0,0,0,0,0]
      width: [0,10,45,45,20,0].reverse()
      height: [1,1,1,1,1,1]
      texture: [ 63 ]
      angle: 180
    left_sides_inner2:
      section_segments: 6
      offset:
        x: 0
        y: 12-207
        z: 0
      position:
        x: [-29,-29,-33,-33].mult(-1)
        y: [7+50,7+50,200,200].mult(-1).reverse()
        z: [0,0,0,0]
      width: [0,2,5,0]
      height: [0,2,2,0]
      texture: [5,17,5]
      angle: 180
    lefttrianglesfront:
      section_segments: [135,225,315]
      offset:
        x: 0
        y: -112
        z: 5
      position:
        x: [-11,-25,-25,-11].add(-19.5)
        y: [-32-10,-30-10,17-50,70-50].mult(-1).reverse()
        z: [0,0,0,-2]
      width: [0,20,20,0].reverse()
      height: [0,4,4,0]
      texture: [2.3]
      angle: 180+180
    lefttrianglesback:
      section_segments: [135,225,315]
      offset:
        x: 0
        y: -12
        z: 5
      position:
        x: [-11,-11,-25,-25,-25].add(-19.5).reverse()
        y: [-17,-17,24,33,33].mult(-1).reverse()
        z: [-2,-2,0,0,0].reverse()
      width: [0,0.1,20,20,0].reverse()
      height: [0,0.1,4,4,0].reverse()
      texture: [2.3]
      angle: 180+180
    leftsidesten:
      section_segments: a
      offset:
        x: 0
        y: -17.3
        z: 2
      position:
        x: [0,0,0,0].add(-41)
        y: [-20,-20,10,10].add(50.5)
        z: [0,2,-1.6,0]
      width: [0,25,25,0]
      height: [0,2,2,0]
      texture: [11]
      angle: 90+180
    
    Right_sides_back:
      section_segments: [310,360,180,230]
      offset:
        x: 0
        y: 0
        z: 20
      position:
        x: [40,40,40,40,40,40,40]
        y: [25,25,45,80,110,110]
        z: [0,0,0,0,0,0,0,0]
      width: [0,10,30,30,10,0]
      height: [3,3,3,3,3,3]
      texture: [ 4 ]
    Right_sides_back_outer:
      section_segments: [310,360,180,230]
      offset:
        x: 0
        y: 0
        z: 20
      position:
        x: [43,43,42,42,40,40,41]
        y: [26,26,45,80,113,113]
        z: [0,0,0,0,0,0,0,0]
      width: [0,10,30,30,10,0]
      height: [2,2,2,2,2,2]
      texture: [ 2 ]
    Right_sides_back_Inner:
      section_segments: [50,120,240,310]
      offset:
        x: 0
        y: 41
        z: 20
      position:
        x: [40,40,40,40,40,40,40]
        y: [-15,-15,72,72]
        z: [0,0,0,0,0]
      width: [4,4,4,4,4,4]
      height: [0,2,2,0,0,0]
      texture: [ 63 ]
    Left_sides_back:
      section_segments: [0,50,130,180]
      offset:
        x: 0
        y: 10
        z: 20
      position:
        x: [-40,-40,-40,-40,-40,-40,-40]
        y: [25,25,45,105,145,145]
        z: [0,0,0,0,0,0,0,0]
      width: [0,10,30,30,10,0]
      height: [3,3,3,3,3,3]
      texture: [ 63 ]
    Left_sides_back_outer:
      section_segments: [0,50,130,180]
      offset:
        x: 0
        y: 10
        z: 20
      position:
        x: [-43,-43,-43,-43,-41,-41,-41]
        y: [26,26,45,105,148,148]
        z: [0,0,0,0,0,0,0,0]
      width: [0,10,30,30,10,0]
      height: [2,2,2,2,2,2]
      texture: [ 4 ]
    Left_sides_back_Inner:
      section_segments: [50,120,240,310]
      offset:
        x: 0
        y: 50
        z: 20
      position:
        x: [-40,-40,-40,-40,-40,-40,-40]
        y: [-15,-15,108,108]
        z: [0,0,0,0,0]
      width: [4,4,4,4,4,4]
      height: [0,2,2,0,0,0]
      texture: [ 1 ]
    Left_sides_stripe1:
      section_segments: [50,120,240,310]
      offset:
        x: 0
        y: 20
        z: 20
      position:
        x: [-112,-112,-112,-112,-75,0]
        y: [10,10,35,35]
        z: [0,0,0,0,0]
      width: [3,3,3,3,3,7]
      height: [0,5,5,0,0,0]
      texture: [ 3.2 ]
      angle: 50
    Left_sides_stripe2:
      section_segments: [50,120,240,310]
      offset:
        x: 0
        y: 0
        z: 20
      position:
        x: [-112,-112,-112,-112,-75,0]
        y: [10,10,35,35]
        z: [0,0,0,0,0]
      width: [3,3,3,3,3,7]
      height: [0,5,5,0,0,0]
      texture: [ 3.2 ]
      angle: 50
    cannon:
      section_segments: 6
      offset:
        x: 0
        y: -183
        z: 2
      position:
        x: Array(12).fill(12)
        y: [3,-2,-2,3,5,53,57,72,75,97,102,163]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,2.3,3,3,2,2,3,3,2,2,3,3]
      height: [0,2.3,3,3,2,2,3,3,2,2,3,3]
      texture: [16.9,112.9,8,16.9,4,17.9,8,17.9,4,16.9,8]
      laser:
        damage: [80,80]
        rate: 0.4
        type: 2
        speed: [350,350]
        recoil: 110
        number: 1
        error: 0
    cannon2:
      section_segments: 6
      offset:
        x: 0
        y: -183
        z: 2
      position:
        x: Array(12).fill(-12)
        y: [58,53,53,58,60,83,87,100,104,110,115,163]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,2.3,3,3,2,2,3,3,2,2,3,3]
      height: [0,2.3,3,3,2,2,3,3,2,2,3,3]
      texture: [16.9,112.9,8,16.9,4,18,8,18,4,16.9,8]
      laser:
        damage: [1,2]
        rate: 10
        type: 1
        speed: [450,450]
        recoil: 0
        number: 1
        error: 0.1
    cannonlaser:
      section_segments: 8
      offset:
        x: 0
        y: -183
        z: 2
      position:
        x: [-12]
        y: [0]
        z: [0]
      width: [0]
      height: [0]
      laser:
        damage: [1,2]
        rate: 10
        type: 1
        speed: [430,430]
        recoil: 0
        number: 1
        error: 0.1
  wings:
    Back_connector:
      length: [13,0,12,0,0]
      width: [70,55,30,25,15]
      angle: [5,50,50,0,0,0]
      position: [-20,-5,-13,-13,3]
      texture: [63,63,4,4]
      doubleside: true
      bump:
        position: 40
        size: 10
      offset:
        x: 20
        y: 85
        z: 6
    Front_connector:
      length: [28,0]
      width: [50,65,65]
      angle: [0,0]
      position: [10,-20,-30]
      texture: [ 63 ]
      doubleside: true
      bump:
        position: 40
        size: 5
      offset:
        x: 0
        y: 0
        z: 0
    ###top:
      doubleside: true
      offset:
        x: 0
        y: 20
        z: 7.6
      length: [0,20,0,5,-2,0]
      width: [30,30,30,60,40,25,0]
      angle: [90,90,90,90,90,90]
      position: [-30,-30,-5,-5,0,-8,-14]
      texture: [4,4,4,3,18,16.7]
      bump:
        position: 35
        size: 20    
    ###
    cover:
      doubleside: true
      offset:
        x: 15
        y: 0
        z: 20
      length: [-12-4,-7+5,-20,-27,0].div(2)
      width: [40,40,100,40,0,0].div(2)
      angle: [270,315,325,350,350]
      position: [40,35,7,37,50-4,50].div(2)
      texture: [4,17,4,4]
      bump:
        position: 20
        size: -5
    cover2:
      doubleside: true
      offset:
        x: 15
        y: 2
        z: 20
      length: [-12-4,-7+5,-20,-27,0].div(2)
      width: [40,40,100,40,11,0].div(2)
      angle: [270,315,325,370,370]
      position: [30,35,7,37,50-3,50].div(2)
      texture: [4,17,18,18]
      bump:
        position: 20
        size: -5        
for i in [0...12]
  xpos = [42,41,63.9,63.9,63.9,63.9,63.9,63.9,123,124,125]
  ypos = [24,44,30,50,70,90,110,130,96,116,136]
  xpos2 = [98,99,100,63.9,63.9,63.9,45,44]
  ypos2 = [50-2,50-22,50-42,25,45,65,60,80].add(-100)
  rsize = 8
  if i<8 then 
  model.bodies['jab2'+i] = jab xpos2[i], ypos2[i],0,[0,0,-0.7,-1,-2,-2.3,-2.5,-2.5],2,1,1,if i<3 then 240 else if i>5 then 300 else 270
  model.bodies['jab'+i] = jab xpos[i], ypos[i],0,[0,0,-0.7,-1,-2,-2.3,-2.5,-2.5],2,1,1,if i<2 then 55 else if i>7 then 120 else 90
  model.bodies['reactorcore'+i] =
    section_segments: 6
    angle: i*30
    offset:
      x: 0
      y: 40
      z: 35
    position:
      x: [0,0,0,0,0,0,0,0,0,0]
      y: [-80,-75,-60,-50,-30,0].div(rsize)
      z: [0,0,0,0,0,0,0,0,0,0]
    width: [0,20,30,10,25,25].div(rsize)
    height: [0,10,12,8,22,22].div(rsize)
    texture: [16.83,17,0.9,17,18]
  if i<6 then  model.bodies['reactorcoresides'+i] =
    section_segments: 12
    angle: i*30
    offset:
      x: 0
      y: 40
      z: 35
    position:
      x: [0,0,0,0,0,0,0,0,0,0]
      y: [-10,-10,0,10,10,0,-10].div(2.5).div(rsize)
      z: [0,0,0,0,0,0,0,0,0,0]
    width: [60,75,77,75,60,50,60].div(rsize)
    height: [60,75,77,75,60,50,60].div(rsize)
    texture: [4,17,17,4]        
t = 10        
if (1)
  for y,v of model.bodies
    if(v.vertical)
      v.offset.z =  v.offset.z - t
    else
      v.offset.y = v.offset.y + t
  for y,v of model.wings
    v.offset.y = v.offset.y + t     
  for y,v of model.tori
    v.offset.y = v.offset.y + t
return model; 
