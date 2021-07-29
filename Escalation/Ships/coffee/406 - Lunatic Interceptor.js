return model =
  name: 'Lunatic Interceptor'
  level: 4
  model: 6
  size: 1
  specs:
    shield:
      capacity: [185,210]
      reload: [8,13]
    generator:
      capacity: [100,140]
      reload: [35,65]
    ship:
      mass: 200
      speed: [110,160]
      rotation: [30,40]
      acceleration: [140,160]
  bodies:
    main:
      section_segments: 12
      offset:
        x: 0
        y: -20
        z: 3
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-86,-86,-90,-80,-50,0,30,70,90,90,100,100,110,110,120,135,120,120]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,10,14,18,22,25,30,30,30,35,35,30,30,35,35,20,20,0]
      height: [0,5,6,12,20,20,30,30,30,35,35,30,30,35,35,20,20,0]
      texture: [18,13,4,2,11,2,4,3,18,63,18,12,18,3,4,13,17]
      propeller: true
    main2:
      section_segments: 8
      offset:
        x: 20
        y: 25
        z: -2
      position:
        x: [0,0,0,0,0,0,10,5,5,10,10]
        y: [-105,-105,-115,-90,-50,0,30,70,92,89]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5,5,10,15,15,10,10,10,0]
      height: [0,5,5,10,10,10,15,15,15,0]
      texture: [4,4,4,18,63,4,18,4,17]
      propeller: true
    cockpit:
      section_segments: 12
      offset:
        x: 0
        y: 24
        z: 22
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-120,-105,-60,-10,-10,0,0,10,10,20,20]
        z: [-8,-7,-4,0,0,0,0,0,0,0,0]
      width: [0,10,14,18,20,20,18,18,20,20,0]
      height: [0,10,13,15,18,18,15,15,18,18,0]
      texture: [4,9,4,18,4,18,12,18,4,18]
      vertical: false
      angle: 0
    reactor:
      section_segments: 12
      offset:
        x: 0
        y: 40
        z: -85
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-20,-20,0,3,-1,4,3,6,6,6]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,20,20,18,16,16,13,12,8,0]
      height: [0,20,20,18,16,16,13,12,8,0]
      propeller: false
      texture: [4,12,4,5,4,17,3,4,17]
      vertical: true
      angle: 0
    Reactor_piece:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 64
        z: 40
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,0,0,0,0,10,10]
        z: [0,0,0,0,0,0,0]
      width: [0,5,5,5,5,5,0]
      height: [0,15,15,15,15,15,0]
      texture: [11,6,11,10,4,11]
      propeller: false
      vertical: false
    Reactor_piece2:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 10.6
        y: 85
        z: 35
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,0,0,0,0,10,10]
        z: [0,0,0,0,0,0,0]
      width: [0,5,5,5,5,5,0]
      height: [0,20,20,20,20,20,0]
      texture: [11,6,11,10,4,11]
      propeller: false
      vertical: false
      angle: 90
    Reactor_piece3:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 95.5
        z: 40
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,0,0,0,0,10,10]
        z: [0,0,0,0,0,0,0]
      width: [0,5,5,5,5,5,0]
      height: [0,15,15,15,15,15,0]
      texture: [11,6,11,10,4,11]
      propeller: false
      vertical: false
    decoration:
      section_segments: 12
      offset:
        x: 0
        y: 25
        z: -55
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-1,-1,-1,-1,-1,2,2,2,2,-1]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [23,5,25,25,25,25,25,25,23,23]
      height: [23,25,25,25,25,25,25,25,23,23]
      propeller: false
      texture: [11,12,11,8,18,18,3,17,18]
      vertical: true
      angle: 0
    decoration2:
      section_segments: 12
      offset:
        x: 0
        y: 25
        z: -20
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-1,-1,-1,-1,-1,2,2,2,2,-1]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [23,5,25,25,25,25,25,25,23,23]
      height: [23,25,25,25,25,25,25,25,23,23]
      propeller: false
      texture: [11,12,11,8,18,18,3,17,18]
      vertical: true
      angle: 0
    cannons:
      section_segments: 12
      offset:
        x: 75
        y: 50
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-80,-85,-80,-65,-65,-60,-60,-50,-45,-20,0,20,30,54,54]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,2,2.5,3,4,4,3,3,4,4,4,4,9,10,0]
      height: [0,2,2.5,3,4,4,3,3,4,9,9,9,9,12,0]
      angle: 0
      laser:
        damage: [2,5]
        rate: 10
        type: 1
        speed: [150,190]
        number: 1
        angle: 0
        error: 0
      propeller: false
      texture: [17,3,12,17,3,17,12,4,11,2,3,4,18,4]
    cannons2:
      section_segments: 12
      offset:
        x: 30
        y: 30
        z: 13
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,-10,-10]
        y: [-80,-85,-80,-65,-65,-60,-60,-50,-45,-20,0,20,30,50,50]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,2,2.5,3,4,4,3,3,4,4,4,4,7,5,0]
      height: [0,2,2.5,3,4,4,3,3,4,7,7,7,7,7,0]
      angle: 0
      laser:
        damage: [5,9]
        rate: 2
        type: 1
        speed: [150,190]
        number: 1
        angle: 0
        error: 0
        recoil: 30
      propeller: false
      texture: [17,3,12,17,3,17,12,4,10,2,3,4,63,4]
  wings:
    Pointer_wings:
      doubleside: true
      offset:
        x: 15
        y: -40
        z: 10
      length: [34,0,10,12,0,0,0,0.3,0]
      width: [45,45,120,170,120,50,30,20,10,10]
      angle: [0,0,0,0,0,0,0,0,0]
      position: [70,55,15,55,90,70,80,84,70,70]
      texture: [18,4,63,4,16,15.9,17,5,17]
      bump:
        position: 60
        size: 15
    Pointer_wings2:
      doubleside: true
      offset:
        x: 20
        y: -40
        z: 10
      length: [60,0,10,12,0,0,0,0.1]
      width: [45,45,100,90,70,70,60,40,14]
      angle: [0,0,0,0,0,0,0,0]
      position: [120,105,95,100,120,120,120,120,120]
      texture: [4,4,63,4,5,17,5,18]
      bump:
        position: 50
        size: 10
    font:
      length: [60,30]
      width: [20,15]
      angle: [0,0]
      position: [-20,-40]
      texture: [ 13 ]
      bump:
        position: 30
        size: 10
      offset:
        x: 0
        y: 110
        z: 13
