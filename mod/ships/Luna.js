return model =
  name: 'Luna'
  level: 6
  model: 13
  size: 1.45
  zoom: 0.9
  specs:
    shield:
      capacity: [310,310]
      reload: [5,5]
    generator:
      capacity: [165,165]
      reload: [52,52]
    ship:
      mass: 325
      speed: [195,195]
      rotation: [65,65]
      acceleration: [110,110]
  bodies:
    main:
      section_segments: [45,90,135,225,270,315]
      offset:
        x: 0
        y: 80
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-151,-149,-146,-140,-125,-85,-80,-65,-65,-70,-70]
        z: [-12,-11,-10,-9,-7,0,1,10,10,10,10,0,0,0,0,0]
      width: [3,5,7,9,11,12,14,10,9,9,0]
      height: [0,3,6,8,12,14,14,6,3,3,0]
      texture: [63,63,4,11,1,63,11,4,2,17]
      propeller: 0
    Side:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 12
        y: -23
        z: 5
      position:
        x: [-2,-1.5,-1,0,0,0,-3,-7,-7,0]
        y: [-3,-7,-5,3,20,30,40,75,75]
        z: [-2,-2,-2,-1,2,5,10,25,25,0]
      width: [0,5,6,7,7,7,5,3,0]
      height: [0,4,5,7,8,8,5,2,0]
      texture: [17,63,18,9.95,11,2,63]
      angle: 2
    cockpit:
      section_segments: [45,90,135,225,270,315]
      offset:
        x: 0
        y: -65
        z: -2
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-1,7,20,30,35,50,70]
        z: [-4,-4,0,1,3,5,10,0]
      width: [3,5,7,5,4,3,3]
      height: [1,10,10,10,8,8,9]
      texture: [9,9,9,63,3]
    engine:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 16
        y: 15
        z: 2
      position:
        x: [-1,-1,-1,0,0,-1,-1,0,0,-2,-2,-2,-2]
        y: [-25,-30,-30,-20,-5,5,15,16,21,30,31,25,25]
        z: [-6,-6,-6,-5,0,0,0,0,0,0,0,0,0,0]
      width: [0,6,7,10,10,10,10,11,11,9,7,7,0]
      height: [0,4,7,10,10,10,10,11,11,9,7,7,0]
      propeller: 1
      texture: [17,63,63,4,18,13,4,63,4,63,12,17]
    engine2:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: 29
        z: -4
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-35,-40,-40,-37,-30,-19,-7,0,3,10,11,5,5]
        z: [-7,-7,-7,-6,-2,0,0,0,0,0,0,0,0]
      width: [0,7,9,10,11,13,13,13,12,11,9,9,0]
      height: [0,4,5,7,11,11,15,15,12,11,8,8,0]
      propeller: 1
      texture: [17,63,63,4,4,63,18,63,63,63,12,17]
    EarUwU:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 32
        y: 35
        z: 8
      position:
        x: [-7,-7,-7,-7,-2,1,3,3,3,-3,-7,-7,-7,-7]
        y: [-60,-60,-65,-65,-47,-37,-31,-10,17,27,50,50,45,45]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,2,2,3,8,9,11,11,11,10,5,4,4,0]
      height: [9,9,9,10,10,10,13,13,13,10,10,7,7,0]
      propeller: 0
      texture: [17,63,63,4,63,3,4,4,63,4,63,17,17]
      laser:
        damage: [48,48]
        rate: 3
        type: 2
        speed: [230,230]
        number: 1
        angle: 0
        error: 0
        recoil: 280
    Earlight:
      section_segments: 12
      offset:
        x: 35
        y: 8
        z: -13
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,0,15,15,14,14]
        z: [0,0,0,0,0,0,0,0]
      width: [0,7,7,5,5,0,7,0]
      height: [0,7,7,5,5,0,7,0]
      vertical: 1
      angle: 0
      texture: [11,11,63,4,17]
    Earlight2:
      section_segments: 12
      offset:
        x: 35
        y: 8
        z: -28
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,0,15,15,14,14]
        z: [0,0,0,0,0,0,0,0]
      width: [0,7,7,5,5,0,7,0]
      height: [0,7,7,5,5,0,7,0]
      angle: 0
      vertical: 1
      texture: [11,11,63,4,17]
    Earlight3:
      section_segments: 12
      offset:
        x: 35
        y: 8
        z: -43
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,0,15,15,14,14]
        z: [0,0,0,0,0,0,0,0]
      width: [0,7,7,5,5,0,7,0]
      height: [0,7,7,5,5,0,7,0]
      vertical: 1
      angle: 0
      texture: [11,11,63,4,17]
    Hoppie:
      section_segments: 12
      offset:
        x: 24
        y: 25
        z: 8
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-50,-45]
        z: [0,0,0,0,0,0,0,0]
      width: [1,1]
      height: [1,1]
      angle: 180
      laser:
        damage: [14,14]
        rate: 5
        type: 2
        speed: [190,190]
        number: 1
        angle: 0
        error: 0
        recoil: 150
      propeller: false
      texture: [ 17 ]
    HeartUwU:
      section_segments: 8
      offset:
        x: 0
        y: 4
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [5,10,11,16,17,15,15]
        z: [0,0,0,0,0,0,0,0]
      width: [9,9,8,8,6,5,0]
      height: [9,9,8,8,6,5,0]
      vertical: 1
      angle: 0
      texture: [4,1,4,63,5,17]
    C1:
      section_segments: [45,90,135,225,270,315]
      offset:
        x: 1
        y: -44
        z: -10
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-5,10,10,12,12,10,10]
        z: [0,0,0,0,0,0,0,0]
      width: [11,11,10,10,8,7,0]
      height: [9,9,8,8,6,5,0]
      vertical: 0
      angle: 90
      texture: [4,1,3,63,5,17]
    C2:
      section_segments: 8
      offset:
        x: 0.1
        y: -4
        z: 7
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-1,0,2,3,-1]
        z: [0,0,0,0,0,0,0,0,0]
      width: [16,18,18,16,16]
      height: [10,11,11,10,10]
      texture: [ 63 ]
      angle: 0
    C3:
      section_segments: 8
      offset:
        x: 0.1
        y: 2
        z: 8
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-1,0,2,3,-1]
        z: [0,0,0,0,0,0,0,0,0]
      width: [16,18,18,16,16]
      height: [10,11,11,10,10]
      texture: [ 63 ]
      angle: 0
    C4:
      section_segments: 8
      offset:
        x: 0
        y: -27
        z: -2
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-1,0,2,3,-1]
        z: [0,0,0,0,0,0,0,0,0]
      width: [10,11,11,10,10]
      height: [10,11,11,10,10]
      texture: [ 63 ]
      angle: 0
    C5:
      section_segments: 8
      offset:
        x: 0
        y: -22
        z: -1
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-1,0,2,3,-1]
        z: [0,0,0,0,0,0,0,0,0]
      width: [10,11,11,10,10]
      height: [10,11,11,10,10]
      texture: [ 63 ]
      angle: 0
    C6:
      section_segments: 8
      offset:
        x: 0
        y: -17
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-1,0,2,3,-1]
        z: [0,0,0,0,0,0,0,0,0]
      width: [10,11,11,10,10]
      height: [10,11,11,10,10]
      texture: [ 63 ]
      angle: 0
    c7:
      section_segments: 8
      offset:
        x: 0
        y: -12
        z: 1
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-1,0,2,3,-1]
        z: [0,0,0,0,0,0,0,0,0]
      width: [10,11,11,10,10]
      height: [10,11,11,10,10]
      texture: [ 63 ]
      angle: 0
    c8:
      section_segments: [45,90,135,225,270,315]
      offset:
        x: 0
        y: -44
        z: -4
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-6,-6,5,5,-1]
        z: [-3,-3,0,0,0,0,0,0,0]
      width: [8,11,11,8,8]
      height: [6,11,11,8,6]
      texture: [ 63 ]
      angle: 0
    c9:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 14
        y: -2
        z: 2
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-2,-2,1,1,-1]
        z: [0,0,0,0,0,0,0,0,0]
      width: [6,9,9,6,6]
      height: [6,11,11,8,6]
      texture: [ 63 ]
      angle: 0
    c10:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 14
        y: 3
        z: 3
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-2,-2,1,1,-2]
        z: [0,0,0,0,0,0,0,0,0]
      width: [6,9,9,6,6]
      height: [6,11,11,8,6]
      texture: [ 63 ]
      angle: 0
    c11:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 14
        y: 8
        z: 4
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-2,-2,1,1,-2]
        z: [0,0,0,0,0,0,0,0,0]
      width: [6,9,9,6,6]
      height: [6,11,11,8,6]
      texture: [ 63 ]
      angle: 0
    c12:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 9
        y: 20
        z: 4
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-2,-2,1,1,-2]
        z: [0,0,0,0,0,0,0,0,0]
      width: [6,9,9,6,6]
      height: [6,11,11,8,6]
      texture: [ 2 ]
      angle: 0
    c13:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 9
        y: 26
        z: 4
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-2,-2,1,1,-2]
        z: [0,0,0,0,0,0,0,0,0]
      width: [6,9,9,6,6]
      height: [6,11,11,8,6]
      texture: [ 2 ]
      angle: 0
    c14:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 40
        y: 14
        z: 15
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-2,-2,1,1,-2]
        z: [0,0,0,0,0,0,0,0,0]
      width: [6,8,8,8,6]
      height: [6,8,8,8,6]
      texture: [ 63 ]
      angle: 0
    c15:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 40
        y: 29
        z: 15
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-2,-2,1,1,-2]
        z: [0,0,0,0,0,0,0,0,0]
      width: [6,8,8,8,6]
      height: [6,8,8,8,6]
      texture: [ 63 ]
      angle: 0
    c16:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 40
        y: 44
        z: 15
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-2,-2,1,1,-2]
        z: [0,0,0,0,0,0,0,0,0]
      width: [6,8,8,8,6]
      height: [6,8,8,8,6]
      texture: [ 63 ]
      angle: 0
    c17:
      section_segments: 15
      offset:
        x: 27
        y: 28
        z: 4
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-3,-3,2,2,-3]
        z: [0,0,0,0,0,0,0,0,0]
      width: [9,11,11,9,9]
      height: [9,11,11,9,9]
      texture: [ 63 ]
      angle: -20
    C18:
      section_segments: [45,90,135,225,270,315]
      offset:
        x: 37
        y: 30
        z: 7
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-5,10,10,12,12,10,10]
        z: [0,0,0,0,0,0,0,0]
      width: [23,23,19,19,16,14,0]
      height: [9,9,8,8,6,4,0]
      vertical: 0
      angle: 90
      texture: [4,1,3,63,5,17]
    C19:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 25
        y: -23
        z: 15
      position:
        x: [0,0,0,2,2,2,-2,-2,-2,0,0,0,0,0,0,0]
        y: [-7,-7,11,21,27,75,85,108,108]
        z: [0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0]
      width: [0,2,2,2,2,2,2,2,0]
      height: [0,2,2,2,2,2,2,2,0]
      texture: [ 2 ]
      angle: 0
  wings:
    Connector:
      offset:
        x: 13
        y: 19
        z: 0
      doubleside: true
      length: [30,0]
      width: [20,15,15]
      angle: [20,20]
      position: [0,10,10]
      texture: [ 3 ]
      bump:
        position: 30
        size: 10
    W1:
      offset:
        x: 8
        y: -45
        z: -15
      doubleside: true
      length: [0,15,0]
      width: [0,15,5,5]
      angle: [-70,-70,-70]
      position: [0,0,20,20]
      texture: [ 63 ]
      bump:
        position: 30
        size: 15
    W2:
      offset:
        x: 40
        y: 30
        z: -2
      doubleside: true
      length: [0,7,10,0]
      width: [0,45,35,25,0]
      angle: [-90,-90,-160,-160]
      position: [0,0,5,10,10]
      texture: [ 63 ]
      bump:
        position: 50
        size: 3
    W3:
      offset:
        x: 23
        y: 70
        z: 13
      doubleside: true
      length: [0,25,0]
      width: [0,20,5,0]
      angle: [90,90,90]
      position: [0,0,10,10]
      texture: [ 3 ]
      bump:
        position: 50
        size: 5
