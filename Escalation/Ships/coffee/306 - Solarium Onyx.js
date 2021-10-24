return model =
  name: 'Solarium Onyx'
  level: 3
  model: 6
  size: 1.7
  specs:
    shield:
      capacity: [205,255]
      reload: [6,8]
    generator:
      capacity: [140,160]
      reload: [45,60]
    ship:
      mass: 240
      speed: [60,75]
      rotation: [50,75]
      acceleration: [70,90]
  bodies:
    main:
      section_segments: 12
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-70,-70,-80,-70,-60,-50,-50,-50,-45,-45,-45,-40,-40,-40,-20,0,30,70,120,120]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,4,10,15,19,20,22,23,23,22,20,20,22,23,25,25,30,30,20,0]
      height: [0,4,9,15,18,20,22,23,23,22,20,20,22,23,25,25,25,25,20,0]
      texture: [17,18,4,63,4,18,17,4,17,18,13,18,17,4,10,3,4,11,18]
      laser:
        damage: [19,21]
        rate: 2.5
        type: 1
        speed: [150,170]
        number: 1
        angle: 0
        error: 0
    main2:
      section_segments: 10
      offset:
        x: 13
        y: 1
        z: 0
      position:
        x: [-3,-3.5,0,0,0,0,-2.5]
        y: [-60,-49,-28,-20,30,100,115]
        z: [0,0,0,0,0,0,0]
      width: [0,4,14,18,26,18,10]
      height: [0,2,8,15,17,12,10]
      texture: [4,4,4,4,11,4]
      propeller: false
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: -34
        z: 11
      position:
        x: [0,0,0,0,0]
        y: [-35,-20,0,20,29]
        z: [0,4,3,4,2]
      width: [5,10,12,10,5]
      height: [5,8,14,12,5]
      texture: [9,9,4,3]
      propeller: false
    propeller_dec:
      section_segments: 6
      offset:
        x: 12
        y: 66
        z: 9.6
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-7,-4,-4,4,7,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,26,26,26,26,26,26,26,26,0]
      height: [0,12,14,14,14,14,14,14,12,0]
      texture: [18,17,1,4,4,1,17,18]
      angle: 0
    propeller_dec2:
      section_segments: 6
      offset:
        x: 12
        y: 46
        z: 9.6
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-7,-4,-4,4,7,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,26,26,26,26,26,26,26,26,0]
      height: [0,12,14,14,14,14,14,14,12,0]
      texture: [18,17,1,4,4,1,17,18]
      angle: 0
    propeller_dec3:
      section_segments: 6
      offset:
        x: 12
        y: 26
        z: 9.6
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-7,-4,-4,4,7,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,26,26,26,26,26,26,26,26,0]
      height: [0,12,14,14,14,14,14,14,12,0]
      texture: [18,17,1,4,4,1,17,18]
      angle: 0
    propeller_dec4:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 35
        y: 68
        z: 0
      position:
        x: [40,40,40,40,40,0,0,0,0,0]
        y: [-8,-8,-7,-4,-4,14,17,18,18,18]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,26,26,26,26,26,26,26,26,0]
      height: [0,10,10,10,10,10,10,10,10,0]
      texture: [18,17,13,3,4,3,17,18]
      angle: 90
    propeller_dec5:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: -35
        y: -18
        z: 0
      position:
        x: [-40,-40,-40,-20,-20,0,0,0,0,0]
        y: [-8,-8,-7,-4,-4,14,17,18,18,18]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,26,26,26,26,26,26,26,26,0]
      height: [0,7,7,7,7,7,7,7,7,0]
      texture: [18,17,3,4,18,4,17,18]
      vertical: false
      angle: 90
    propeller_dec6:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 76
        z: 17
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-7,-4,-4,4,7,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,26,26,26,26,26,26,26,26,0]
      height: [0,12,14,14,14,14,14,14,12,0]
      texture: [18,17,1,4,4,1,17,18]
      angle: 90
    propeller_dec7:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 20
        z: 17
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-7,-4,-4,4,7,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,26,26,26,26,26,26,26,26,0]
      height: [0,12,14,14,14,14,14,14,12,0]
      texture: [18,17,1,4,4,1,17,18]
      angle: 90
    propeller_dec8:
      section_segments: 6
      offset:
        x: 12
        y: 86
        z: 9.6
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-7,-4,-4,4,7,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,26,26,26,26,26,26,26,26,0]
      height: [0,12,14,14,14,14,14,14,12,0]
      texture: [18,17,1,4,4,1,17,18]
      angle: 0
    reactor:
      section_segments: [45,135,225,315]
      offset:
        x: 5
        y: 20
        z: -50
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-10,-10,0,3,3,3,3,3,3,0]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,20,20,18,17,13,10,9,8,0]
      height: [0,20,20,18,14,13,10,9,5,0]
      propeller: false
      texture: [4,4,11,17,4,4,17,11,17]
      vertical: true
      angle: 0
    reactor2:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 25
        z: -50
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-10,-10,0,3,3,3,3,3,3,0]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,20,20,18,17,13,10,9,8,0]
      height: [0,20,20,18,14,13,10,9,5,0]
      propeller: false
      texture: [4,4,11,17,11,4,17,11,17]
      vertical: true
      angle: 0
    cannons:
      section_segments: 8
      offset:
        x: 80
        y: 40
        z: -13
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-90,-100,-95,-85,-80,-50,-45,-20,0,20,50,55,55]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,4,6,6,5,5,8,10,10,10,10,8,0]
      height: [0,4,6,6,5,5,8,13,13,13,13,8,0]
      angle: 1
      laser:
        damage: [5,8]
        rate: 2.5
        type: 1
        speed: [150,170]
        number: 1
        angle: 0
        error: 0
      propeller: false
      texture: [17,3,4,3,12,3,4,11,4,63,4,18]
    cannons2:
      section_segments: 8
      offset:
        x: 40
        y: 50
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-80,-90,-85,-65,-60,-50,-45,-20,0,20,50,55,55]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,4,6,6,5,5,8,10,10,10,10,8,0]
      height: [0,4,6,6,5,5,8,10,13,13,10,8,0]
      angle: 0
      laser:
        damage: [8,11]
        rate: 2.5
        type: 1
        speed: [150,170]
        number: 1
        angle: 0
        error: 0
      propeller: false
      texture: [17,3,10,3,12,3,4,11,4,63,4,18]
    propulsors:
      section_segments: 10
      offset:
        x: 15
        y: 95
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-30,-30,-20,0,20,30,28]
        z: [0,0,0,0,0,0,0]
      width: [0,10,10,10,10,10,0]
      height: [0,10,10,10,10,10,0]
      angle: 0
      texture: [4,4,18,4,4,17]
      propeller: true
    propulsors2:
      section_segments: 8
      offset:
        x: 60
        y: 25
        z: -2.4
      position:
        x: [0,0,0,0,0,0,0]
        y: [-20,-30,-20,0,50,70,28]
        z: [0,0,0,0,0,0,0]
      width: [0,9,13,15,15,10,0]
      height: [0,9,13,15,15,10,0]
      angle: 0
      texture: [18,4,63,8,4,17]
      propeller: true
  wings:
    main:
      offset:
        x: 0
        y: 60
        z: 0
      length: [60,10]
      width: [70,50,60]
      texture: [11,63]
      angle: [0,0]
      position: [10,-20,-26]
      doubleside: 1
      bump:
        position: -10
        size: 10
    main2:
      offset:
        x: 0
        y: 65
        z: 0
      length: [60,25,0,0,2,10,10]
      width: [70,50,60,100,140,140,120,100]
      texture: [18,11,13,18,63,4,63]
      angle: [0,0,0,0,0,0,0]
      doubleside: 1
      position: [10,-20,-50,-50,-50,-50,-30,-30]
      bump:
        position: -10
        size: 10
    main3:
      offset:
        x: 0
        y: 60
        z: 0
      length: [60,25]
      width: [70,50,60]
      texture: [4,12]
      angle: [0,0]
      position: [10,-20,-20]
      doubleside: 1
      bump:
        position: -10
        size: 1
    main4:
      offset:
        x: 0
        y: 10
        z: 0
      length: [40,20]
      width: [70,50,60]
      texture: [18,63]
      angle: [0,0]
      position: [-20,20,40]
      doubleside: 1
      bump:
        position: -10
        size: 5
