return model =
  name: 'Lunatic Warrior'
  level: 4
  model: 3
  size: 1.4
  specs:
    shield:
      capacity: [205,245]
      reload: [9,13]
    generator:
      capacity: [170,230]
      reload: [45,70]
    ship:
      mass: 220
      speed: [110,135]
      rotation: [70,85]
      acceleration: [90,110]
  bodies:
    main:
      section_segments: 12
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-120,-130,-120,-80,-80,-50,-50,0,30,70,100,90]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,10,15,20,15,15,20,25,30,30,20,0]
      height: [0,10,15,20,15,15,20,20,30,30,20,0]
      texture: [13,63,4,18,13,18,63,3,18,8,17]
      propeller: true
    side:
      section_segments: 8
      offset:
        x: 35
        y: 40
        z: 1
      position:
        x: [-10,-10,-5,-5,-5,-12,-12]
        y: [-85,-85,-50,-10,30,45,45]
        z: [0,0,0,0,0,0,0]
      width: [0,10,10,15,10,5,0]
      height: [0,7,10,15,10,10,0]
      angle: 0
      texture: [18,3,4,63,63,18]
    tubulation8:
      section_segments: 8
      offset:
        x: 50
        y: -63
        z: -5
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [0,0,23,27,62,69,97,102,133,133]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,1,1,1,1,1,1,1,1,0]
      height: [0,1,1,1,1,1,1,1,1,0]
      texture: [ 17 ]
    tubulation7:
      section_segments: 8
      offset:
        x: 55
        y: -63
        z: -5
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [0,0,23,27,62,69,97,102,133,133]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,1,1,1,1,1,1,1,1,0]
      height: [0,1,1,1,1,1,1,1,1,0]
      texture: [ 17 ]
    tubulation6:
      section_segments: 8
      offset:
        x: 45
        y: -63
        z: -5
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [0,0,23,27,62,69,97,102,133,133]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,1,1,1,1,1,1,1,1,0]
      height: [0,1,1,1,1,1,1,1,1,0]
      texture: [ 17 ]
    tubulation5:
      section_segments: 8
      offset:
        x: 45
        y: -63
        z: 5
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [0,0,23,27,62,69,97,102,133,133]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,1,1,1,1,1,1,1,1,0]
      height: [0,1,1,1,1,1,1,1,1,0]
      texture: [ 17 ]
    tubulation4:
      section_segments: 8
      offset:
        x: 55
        y: -63
        z: 5
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [0,0,23,27,62,69,97,102,133,133]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,1,1,1,1,1,1,1,1,0]
      height: [0,1,1,1,1,1,1,1,1,0]
      texture: [ 17 ]
    tubulation3:
      section_segments: 8
      offset:
        x: 50
        y: -63
        z: 5
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [0,0,23,27,62,69,97,102,133,133]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,1,1,1,1,1,1,1,1,0]
      height: [0,1,1,1,1,1,1,1,1,0]
      texture: [ 17 ]
    tubulation2:
      section_segments: 8
      offset:
        x: 0
        y: -93
        z: 20
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [0,0,23,27,62,69,97,102,133,133]
        z: [-10,-10,-2,-2,0,0,3,5,10,0,0]
      width: [0,5,5,5,5,5,5,5,5,0]
      height: [0,5,5,5,5,5,5,5,5,0]
      texture: [18,18,17,4,17,18,3,4,8]
    tubulation:
      section_segments: 8
      offset:
        x: 25
        y: -93
        z: 8
      position:
        x: [-21,-21,-10,-10,-8,-8,-5,-5,0,0,0]
        y: [0,0,23,27,62,69,97,102,143,143]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5,5,5,5,5,5,5,5,0]
      height: [0,5,5,5,5,5,5,5,5,0]
      texture: [18,18,17,4,17,18,3,4,8]
    Body_ring:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 15
        y: 50
        z: -2
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-6,-4,-4,4,6,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,26,26,26,26,26,26,26,26,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [18,17,4,4,13,4,17,18]
      angle: 0
    Body_ring2:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 15
        y: 30
        z: -2
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-6,-4,-4,4,6,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,26,26,26,26,26,26,26,26,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [18,17,4,4,13,4,17,18]
      angle: 0
    Body_ring3:
      section_segments: 12
      offset:
        x: 50
        y: -20
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-6,-4,-4,4,6,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,7,7,7,7,7,7,7,7,0]
      height: [0,7,7,7,7,7,7,7,7,0]
      texture: [18,17,4,4,10,4,17,18]
      angle: 0
    Body_ring4:
      section_segments: 12
      offset:
        x: 50
        y: -40
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-6,-4,-4,4,6,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,7,7,7,7,7,7,7,7,0]
      height: [0,7,7,7,7,7,7,7,7,0]
      texture: [18,17,4,4,10,4,17,18]
      angle: 0
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: -106
        z: 10
      position:
        x: [0,0,0,0,0,0,0]
        y: [-20,-17,0,20,30]
        z: [-2,-2,-4,0,0]
      width: [0,8,10,10,0]
      height: [0,10,15,12,0]
      texture: [4,9,9,4]
      propeller: false
    side_Tubulation:
      section_segments: 10
      offset:
        x: 41
        y: 15
        z: -50
      position:
        x: [15,15,15,-10,-20,-30,-30]
        y: [-20,-20,-10,-10,10,20,20]
        z: [0,0,0,0,0,0,0]
      width: [0,5,5,5,5,5,0]
      height: [0,5,5,5,5,5,0]
      texture: [0,1,2,12,8,17]
      vertical: true
    container:
      section_segments: 8
      offset:
        x: 0
        y: 10
        z: -50
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,20,20,30,28,28,28,28]
        z: [0,0,0,0,0,0,0,0]
      width: [20,20,15,15,14,10,5,0]
      height: [20,20,15,15,14,10,5,0]
      texture: [4,18,18,17,18,4,17]
      vertical: true
      propeller: false
    charger:
      section_segments: 12
      offset:
        x: 58
        y: 15
        z: -40
      position:
        x: [0,0,0,0,0]
        y: [-7,0,5,10,10]
        z: [0,0,0,0,0]
      width: [5,5,5,4,0]
      height: [5,5,5,4,0]
      texture: [4,17,13,18]
      angle: 30
      vertical: true
    charger2:
      section_segments: 12
      offset:
        x: 58
        y: 15
        z: -30
      position:
        x: [0,0,0,0,0]
        y: [-7,0,5,10,10]
        z: [0,0,0,0,0]
      width: [5,5,5,4,0]
      height: [5,5,5,4,0]
      texture: [4,17,13,18]
      angle: 30
      vertical: true
    charge3:
      section_segments: 12
      offset:
        x: 58
        y: 15
        z: -20
      position:
        x: [0,0,0,0,0]
        y: [-7,0,5,10,10]
        z: [0,0,0,0,0]
      width: [5,5,5,4,0]
      height: [5,5,5,4,0]
      texture: [4,17,13,18]
      angle: 30
      vertical: true
    cannons:
      section_segments: 12
      offset:
        x: 50
        y: 30
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-90,-100,-80,-80,-45,-45,-20,0,20,50,45]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,7.5,10,5,5,10,15,15,15,10,0]
      height: [0,7.5,10,5,5,10,15,15,15,10,0]
      angle: 0
      laser:
        damage: [4,8]
        rate: 2
        type: 1
        speed: [150,180]
        number: 10
        angle: 0
        error: 10
        recoil: 5
      propeller: true
      texture: [17,18,18,13,18,3,4,18,63,17]
  wings: main:
    offset:
      x: 0
      y: 30
      z: 0
    length: [60,10,0,20]
    width: [70,50,50,60,50]
    texture: [18,4,4,63]
    angle: [0,0,0,0]
    position: [0,10,0,0,30]
    doubleside: 1
    bump:
      position: -10
      size: 15
      y: -160
      z: 0
