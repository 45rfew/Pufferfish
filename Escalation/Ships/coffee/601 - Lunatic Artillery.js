return model =
  name: 'Lunatic Artillery'
  level: 6
  model: 1
  size: 1.7
  specs:
    shield:
      capacity: [600,600]
      reload: [9,15]
    generator:
      capacity: [260,320]
      reload: [85,120]
    ship:
      mass: 500
      speed: [67,67]
      rotation: [20,30]
      acceleration: [90,120]
  bodies:
    main:
      section_segments: 12
      offset:
        x: 0
        y: 20
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-195,-195,-200,-180,-160,-120,-120,-100,-50,0,30,70,100,105,105,155,148]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,15,20,32,35,30,20,20,25,25,25,25,25,25,50,40,0]
      height: [0,8,13,15,18,20,13,20,24,25,25,25,25,25,25,20,0]
      texture: [18,13,3,18,4,13,4,63,4,18,12,3,4,18,4,13]
    cockpit:
      section_segments: 9
      offset:
        x: 0
        y: -130
        z: 11.9
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-47,-43,-20,-10,-10,40,80,85]
        z: [-1,-1,0,0,0,2,4,4]
      width: [0,15,22,25,26,16,15,10]
      height: [0,10,14,14,15,12,12,10]
      texture: [3,9,4,17,4,8,4]
      propeller: false
    reactor:
      section_segments: 12
      offset:
        x: 60
        y: 0
        z: -140
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-25,-25,0,3,-1,4,2]
        z: [0,0,0,0,0,0,0]
      width: [0,20,20,15,10,10,0]
      height: [0,20,20,15,10,10,0]
      propeller: false
      texture: [4,4,12,17,4,18]
      vertical: true
      angle: 90
    tubes:
      section_segments: 8
      offset:
        x: 0
        y: -113
        z: 20
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [5,0,23,27,62,62,97,102,173]
        z: [-17,-17,-8,-6,-2,-1,0,0,7,7]
      width: [0,5,5,5,5,5,5,5,5]
      height: [0,5,5,5,5,5,5,5,5]
      texture: [4,4,4,4,18,18,17,4]
      propeller: false
    tubes2:
      section_segments: 8
      offset:
        x: 10
        y: -113
        z: 20
      position:
        x: [-5,-5,0,0,0,0,0,0,0,0]
        y: [5,0,23,27,62,62,97,102,173]
        z: [-15,-15,-6,-4.8,0,0,1,1,8,8]
      width: [0,2,2,2,2,2,2,2,2]
      height: [0,2,2,2,2,2,2,2,2]
      texture: [1,1,4,3,1,1,12]
      propeller: false
    Penta_cannon_base:
      section_segments: 12
      offset:
        x: 0
        y: 35
        z: -70
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-25,-25,0,3,3,3,10,12,20,20,20,30,35,36,38]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,40,40,35,25,23,23,23,23,25,32,30,25,23,0]
      height: [0,40,40,35,25,23,23,23,23,25,32,30,25,23,0]
      propeller: false
      texture: [4,12,4,3,17,13,17,4,17,18,4,4,17,18]
      vertical: true
      angle: 0
    cannon_connector:
      section_segments: 12
      offset:
        x: 20
        y: 70
        z: 45
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-20,-20,0,3,-1,4,3,20,20,22,28,28]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,20,20,18,16,16,13,12,16,18,18,0]
      height: [0,20,20,18,16,16,13,12,16,18,18,0]
      propeller: false
      texture: [4,13,4,8,4,17,3,18,4,12,18]
      vertical: false
      angle: 90
    Base_piece:
      section_segments: 12
      offset:
        x: 0
        y: 25
        z: -70
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-21,-21,-21,-21,-21,2,2,2,2,-1]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [38,45,45,45,45,45,45,45,43,38]
      height: [38,45,45,45,45,45,45,45,43,38]
      propeller: false
      texture: [11,12,11,8,4,18,3,17,17]
      vertical: true
      angle: 0
    Penta_cannons:
      section_segments: 6
      offset:
        x: 43
        y: 45
        z: 56
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-55,-60,-50,-50,-25,-25,0,0,10,20,40,50,50]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,2,5,3,3,5,8,10,10,10,10,8,0]
      height: [0,2,5,3,3,5,8,10,10,10,10,8,0]
      angle: 0
      laser:
        damage: [40,58]
        rate: 1
        type: 1
        speed: [150,180]
        number: 1
        angle: 0
        error: 0
      propeller: false
      texture: [17,4,4,12.9,4,63,4,11.9,10,3.9,2.9,2.9]
    Penta_cannons2:
      section_segments: 6
      offset:
        x: 43
        y: 45
        z: 35
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-55,-60,-50,-50,-25,-25,0,0,10,20,40,50,50]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,2,5,3,3,5,8,10,10,10,10,8,0]
      height: [0,2,5,3,3,5,8,10,10,10,10,8,0]
      angle: 0
      laser:
        damage: [40,58]
        rate: 1
        type: 1
        speed: [150,180]
        number: 1
        angle: 0
        error: 0
      propeller: false
      texture: [17,4,4,12.9,4,63,4,11.9,10,3.9,2.9,2.9]
    side:
      section_segments: 12
      offset:
        x: 90
        y: 40
        z: 0
      position:
        x: [-10,-10,-10,-10,-10,-10,-10,-5,0,-5,-5,-10,-10,-10,-10,-10,-10]
        y: [-130,-140,-100,-100,-90,-90,-75,-50,-10,30,60,85,85,95,95,135,120]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,9,13,6,6,13,13,13,13,13,13,13,6,6,13,9,0]
      height: [0,12,20,10,10,20,20,20,20,20,20,20,10,10,20,12,0]
      angle: 5
      texture: [13,4,18,12,18,4,63,10,3,12,4,13,13,18,4,13]
    side1:
      section_segments: 6
      offset:
        x: 100
        y: 40
        z: 0
      position:
        x: [-10,-10,-10,-5,0,-5,-5,-12,-12]
        y: [-80,-80,-75,-50,-10,30,60,73,73]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,12,14,14,14,14,14,14,0]
      height: [0,17,19,19,19,19,19,19,0]
      angle: 5
      texture: [17.9,3.9,12.9,17.9,3.9,63]
    side2:
      section_segments: 8
      offset:
        x: 35
        y: 50
        z: 1
      position:
        x: [-10,-10,-5,0,-5,-7,-5]
        y: [-85,-85,-50,-10,30,75,75]
        z: [0,0,0,0,0,0,0]
      width: [0,25,25,25,25,25,0]
      height: [0,15,15,15,15,15,0]
      angle: 0
      texture: [18,3,4,63,63,18]
    side3:
      section_segments: 8
      offset:
        x: 25
        y: -20
        z: 1
      position:
        x: [-10,-10,-5,0,-5,-7,-5]
        y: [-85,-85,-50,-10,30,65,65]
        z: [0,0,0,0,0,0,0]
      width: [0,10,10,10,10,10,0]
      height: [0,5,5,5,5,5,0]
      angle: 0
      texture: [4,63,12,63,63,18]
    side4:
      section_segments: 8
      offset:
        x: 22
        y: 50
        z: 10
      position:
        x: [0,0,0,0,0,-6,-6]
        y: [-65,-65,-50,-10,30,45,45]
        z: [0,0,0,0,0,0,0]
      width: [0,25,25,25,25,25,0]
      height: [0,15,15,15,15,15,0]
      angle: 0
      texture: [18,3,4,63,63,18]
    Body_ring:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 40
        y: 72
        z: 6
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-6,-4,-4,4,6,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,26,26,26,26,26,26,26,26,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [18,17,4,4,13,4,17,18]
      angle: 90
    Body_ring2:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 20
        y: 10
        z: 12
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-6,-4,-4,4,6,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,26,26,26,26,26,26,26,26,0]
      height: [0,12,14,14,14,14,14,14,12,0]
      texture: [18,3,4,4,13,4,3,18]
      angle: 0
    Body_ring3:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 20
        y: 30
        z: 12
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-6,-4,-4,4,6,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,26,26,26,26,26,26,26,26,0]
      height: [0,12,14,14,14,14,14,14,12,0]
      texture: [18,3,4,4,13,4,3,18]
      angle: 0
    Body_ring4:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 20
        y: -40
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-6,-4,-4,4,6,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,26,26,26,26,26,26,26,26,0]
      height: [0,12,14,14,14,14,14,14,12,0]
      texture: [18,3,4,4,13,4,3,18]
      angle: 0
    Body_ring5:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 20
        y: -54
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-6,-4,-4,4,6,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,26,26,26,26,26,26,26,26,0]
      height: [0,12,14,14,14,14,14,14,12,0]
      texture: [18,3,4,4,13,4,3,18]
      angle: 0
    ring:
      section_segments: 9
      offset:
        x: 20
        y: 70
        z: 35
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-4,-4,-4,4,4,4,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 17 ]
      propeller: false
    ring2:
      section_segments: 9
      offset:
        x: 15
        y: 80
        z: 34
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-4,-4,-4,4,4,4,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 17 ]
      angle: -10
      propeller: false
    ring3:
      section_segments: 9
      offset:
        x: 7
        y: 85
        z: 34
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-4,-4,-4,4,4,4,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 17 ]
      angle: -40
      propeller: false
    ring4:
      section_segments: 9
      offset:
        x: 15
        y: -120
        z: 7
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-4,-4,-4,4,4,4,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 3 ]
      angle: 0
      propeller: false
    ring5:
      section_segments: 9
      offset:
        x: 15
        y: -135
        z: 7
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-4,-4,-4,4,4,4,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 3 ]
      angle: 0
      propeller: false
    ring6:
      section_segments: 9
      offset:
        x: 100
        y: 30
        z: 7.5
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-4,-4,-4,4,4,4,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 17 ]
      angle: 0
    ring7:
      section_segments: 9
      offset:
        x: 95
        y: 0
        z: 7.5
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-4,-4,-4,4,4,4,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 17 ]
      angle: 10
    ring8:
      section_segments: 9
      offset:
        x: 85
        y: -30
        z: 7.5
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-4,-4,-4,4,4,4,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 17 ]
      angle: 15
    cannon:
      section_segments: 8
      offset:
        x: 30
        y: -103
        z: 0
      position:
        x: [0,0,0,0,0,0,-5,-5,-5,-5,-5]
        y: [-73,-75,-70,-40,-10,-10,0,0,0,0,0]
        z: [-3,-3,-3,-3,-3,-3,0,0,0,0]
      width: [0,3,4,4,4,5,5,5,5,5,0]
      height: [0,5,6,6,6,8,8,8,8,8,0]
      texture: [13,4,63,18,18,63,11,12,63,18]
      propeller: false
      laser:
        damage: [6,8]
        rate: 6
        type: 1
        speed: [120,140]
        number: 1
        angle: 0
        error: 5
    cannon2:
      section_segments: 8
      offset:
        x: 89
        y: -30
        z: 0
      position:
        x: [-8,-8,-7,-5,-5,-5,-5,-5,-5,-5,-5]
        y: [-73,-75,-70,-40,-10,-10,0,0,0,0,0]
        z: [-3,-3,-3,-3,-3,-3,0,0,0,0]
      width: [0,3,4,4,4,5,5,5,5,5,0]
      height: [0,5,6,6,6,8,8,8,8,8,0]
      texture: [13,4,63,18,18,63,11,12,63,18]
      propeller: false
      laser:
        damage: [6,8]
        rate: 6
        type: 1
        speed: [120,140]
        number: 1
        angle: 0
        error: 5
    cannon3:
      section_segments: 8
      angle: 180
      offset:
        x: -100
        y: 110
        z: -4
      position:
        x: [0,0,0,0,0,0,-5,-5,-5,-5,-5]
        y: [-73,-75,-70,-40,-10,-10,0,0,0,0,0]
        z: [-3,-3,-3,-3,-3,-3,0,0,0,0]
      width: [0,3,4,4,4,5,5,5,5,5,0]
      height: [0,5,6,6,6,8,8,8,8,8,0]
      texture: [13,4,63,18,18,63,11,12,63,18]
      propeller: false
      laser:
        damage: [6,8]
        rate: 6
        type: 1
        speed: [120,140]
        number: 1
        angle: 0
        error: 5
    connector:
      section_segments: 12
      offset:
        x: 20
        y: 30
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-65,-65,-30,-10,20,15,15]
        z: [0,0,0,0,0,0,0]
      width: [0,10,10,10,10,10,10,0]
      height: [0,10,10,10,10,10,0]
      angle: -70
      vertical: false
      texture: [18,3,4,4,18,17]
    connector2:
      section_segments: 12
      offset:
        x: 33
        y: 90
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-65,-65,-30,-10,20,15,15]
        z: [0,0,0,0,0,0,0]
      width: [0,10,10,10,10,10,10,0]
      height: [0,10,10,10,10,10,0]
      angle: -70
      vertical: false
      texture: [18,3,4,4,18,17]
    top_propulsor:
      section_segments: 10
      offset:
        x: 26
        y: 134
        z: 18
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-10,-10,-15,-15,0,10,20,25,30,40,50,70,65]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,14,20,21,23,23,23,23,23,23,18,18,0]
      height: [0,14,20,21,23,23,23,23,23,23,18,18,0]
      texture: [18,4,17,63,4,2,1,63,4,3,4,17]
      propeller: true
    Side_propulsor:
      section_segments: 10
      offset:
        x: 48
        y: 125
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-10,-10,-15,-15,0,10,20,25,30,40,50,70,65]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,4,10,11,13,13,13,13,13,13,8,8,0]
      height: [0,4,10,11,13,13,13,13,13,13,8,8,0]
      texture: [18,4,17,3,13,13,18,63,63,3,8,17]
      propeller: true
    botton_propulsor:
      section_segments: 10
      offset:
        x: 26
        y: 134
        z: -18
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-10,-10,-15,-15,0,10,20,25,30,40,50,70,65]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,14,20,21,23,23,23,23,23,23,18,18,0]
      height: [0,14,20,21,23,23,23,23,23,23,18,18,0]
      texture: [18,4,17,63,4,2,1,63,4,3,4,17]
      propeller: true
  wings: main:
    offset:
      x: 0
      y: 60
      z: 0
    length: [80,0]
    width: [70,50,60]
    texture: [18,63]
    doubleside: true
    angle: [0,0]
    position: [10,-20,-50]
    bump:
      position: -10
      size: 15
