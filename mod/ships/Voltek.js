return model =
  name: 'Voltek'
  level: 6
  model: 10
  size: 1.1
  zoom: 0.9
  specs:
    shield:
      capacity: [325,325]
      reload: [6,6]
    generator:
      capacity: [145,145]
      reload: [42,42]
    ship:
      mass: 320
      speed: [185,185]
      rotation: [115,115]
      acceleration: [110,110]
  bodies:
    main:
      section_segments: [40,85,140,220,280,320]
      offset:
        x: 0
        y: -50
        z: 1
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [0,-0.4,0,5,40,59,60,100,101,110,110]
        z: [6,6,5,3,0,0,0,0,0,0,0,0,0]
      width: [2,8,11,12,16,16,20,20,15,15,0]
      height: [0,3,6,10,15,15,15,15,15,15,0]
      texture: [5,63,63,1,3,4,63,4,13,1]
      propeller: 0
    cockpit:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: -15
        z: 11
      position:
        x: [0,0,0,0,0,0,0]
        y: [-10,-10,4,30,40]
        z: [0,0,0,0,0]
      width: [0,6,7,7,11]
      height: [0,7,11,12,10]
      texture: [7,8.98]
      propeller: false
    cockpitbase:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 2
        y: -15
        z: 6
      position:
        x: [1,1.5,0,0,0,0,0,0,0,0]
        y: [-30,-12,-12,5,30,40]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [2,3,5,7,7,11]
      height: [7.4,12,13,13,13,10]
      texture: [ 63 ]
      propeller: false
    cannons:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 15
        y: -35
        z: -8
      position:
        x: [-5,-5,-3,2,-3,-4,-4.5,-5,-6]
        y: [-50,-50,-25,-13,0,10,20,35,50]
        z: [-2,-2,-1,-3,0,0,-3,-3,6]
      width: [0,2,4,5,6,6,6,6,5]
      height: [0,1,5,6,7,7,7,7,3]
      angle: 2
      laser:
        damage: [6.5,6.5]
        rate: 10
        type: 1
        speed: [240,240]
        number: 1
        angle: 0
        error: 0
        recoil: 10
      texture: [6,6,63,11,4,2,12,63]
    cannons2:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 13
        y: -35
        z: -8
      position:
        x: [-5,-5,-3,2,-3,-4,-4.5,-5,-6]
        y: [-50,-50,-25,-13,0,10,20,35,50]
        z: [-2,-2,-1,-3,0,0,-3,-3,6]
      width: [0,2,4,5,6,6,6,6,5]
      height: [0,1,2,2,2,2,2,2,2]
      angle: 2
      laser:
        damage: [3,3]
        rate: 9
        type: 1
        speed: [240,240]
        number: 2
        angle: 0
        error: 0
        recoil: 5
      texture: [ 17 ]
    Tail:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 18
        y: 56
        z: 1
      position:
        x: [3,-3,-3,-3,-2,5,7,7,0,0,0,0]
        y: [-8,-8,-10,-10,5,-5,45,45]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,7,7,10,10,5,3,0,6,10]
      height: [0,14,14,20,18,14,10,0,6,10]
      angle: 0
      texture: [17,5,63,11,2,3,2]
      propeller: 0
    C1:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: 20.5
        z: -30
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-15,0,0,5,6,3,3,3]
        z: [0,0,0,0,0,0,0,0,0]
      width: [20,20,17,17,13,11,7,0]
      height: [25,25,22,22,18,16,14,0]
      texture: [63,4,17,18,17,4,5]
      vertical: 1
    C2:
      section_segments: 8
      offset:
        x: 0
        y: 20
        z: 7
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [0,0,5,5]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,15,15,0,0]
      height: [0,19,19,0,0]
      texture: [ 17 ]
    C3:
      section_segments: 8
      offset:
        x: 0
        y: 27.5
        z: 7
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [0,0,5,5]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,15,15,0,0]
      height: [0,19,19,0,0]
      texture: [ 17 ]
    C4:
      section_segments: 8
      offset:
        x: 0
        y: 35
        z: 7
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [0,0,5,5]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,15,15,0,0]
      height: [0,19,19,0,0]
      texture: [ 17 ]
    C5:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 15
        y: 35
        z: 5
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [0,0,5,5,0]
        z: [0,0,0,0,0,0,0,0,0]
      width: [30,34,34,30,30]
      height: [13,17,17,13,13]
      texture: [ 63 ]
      angle: 10
    C6:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 15
        y: 20
        z: 5
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [0,0,5,5,0]
        z: [0,0,0,0,0,0,0,0,0]
      width: [30,34,34,30,30]
      height: [13,17,17,13,13]
      texture: [ 63 ]
      angle: 10
    C7:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 9
        y: 46
        z: 7
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [0,0,5,5,0]
        z: [0,0,0,0,0,0,0,0,0]
      width: [10,14,14,10,10]
      height: [13,17,17,13,13]
      texture: [ 63 ]
      angle: 90
    C8:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 2
        y: 49
        z: 7
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [0,0,5,5,0]
        z: [0,0,0,0,0,0,0,0,0]
      width: [10,14,14,10,10]
      height: [13,17,17,13,13]
      texture: [ 63 ]
      angle: 90
    Cside:
      section_segments: 12
      offset:
        x: 39
        y: 6
        z: -26
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-9,-11,-10,5,6,3,3,3]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,11,18,19,15,11,6,0]
      height: [0,11,18,19,15,11,6,0]
      texture: [17,18,4,18,17,63,17]
      vertical: 1
    W1:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: -60
        y: 37
        z: 0
      position:
        x: [-49,-49,-43,-10,0,4,15,10]
        y: [-45,-45,-40,-10,0,0,15,50]
        z: [0,0,0,0,0,0,0,0]
      width: [0,7,9,18,20,15,15,13]
      height: [0,3,3,3,3,2,2,2]
      texture: [63,63,2,63,63,4,2]
      angle: 90
    W1l:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: -60
        y: 37
        z: 0
      position:
        x: [-56,-56,-56,-18,-15,-9,2,0]
        y: [-45,-45,-45,0,0,0,15,50]
        z: [0,0,0,0,0,0,0,0]
      width: [0,3,3,3,3,3,3,3]
      height: [0,3,3,3,3,2,2,2]
      texture: [ 17 ]
      angle: 90
    W2:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: -46
        y: 70
        z: 0
      position:
        x: [-56,-56,-51,-10,10,12,27,25]
        y: [-55,-55,-50,-10,10,10,25,25]
        z: [43,43,40,20,10,10,0,0]
      width: [0,5,7,13,15,13,13,0]
      height: [0,3,3,3,3,2,2,0]
      texture: [63,63,4,63,63,4,4]
      angle: 128
    W2l:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: -46
        y: 70
        z: 0
      position:
        x: [-62,-62,-62,-62,-2,1,17,25]
        y: [-55,-55,-55,-55,10,10,25,25]
        z: [43,43,43,43,10,10,0,0]
      width: [0,3,3,3,3,3,3,0]
      height: [0,3,3,3,3,2,2,0]
      texture: [ 17 ]
      angle: 128
    W3:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: -43
        y: -15
        z: 0
      position:
        x: [25,25,20,0,-10,-12,-27,-25]
        y: [-25,-25,-20,0,10,10,25,25]
        z: [-22,-22,-20,-10,-5,-5,0,0]
      width: [0,5,7,12,15,10,10,0]
      height: [0,3,3,3,3,2,2,0]
      texture: [63,63,3,4,4,63,2]
      angle: 50
    W3l:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: -43
        y: -15
        z: 0
      position:
        x: [30,30,30,30,0,-2,-17,-15]
        y: [-25,-25,-25,-25,10,10,25,25]
        z: [-22,-22,-22,-22,-5,-5,0,0]
      width: [0,3,3,3,3,3,3,0]
      height: [0,3,3,3,3,2,2,0]
      texture: [ 17 ]
      angle: 50
    Back_propulsor1:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 15
        y: 10
        z: 7
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [50,53,59,60,58]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [7,7,6,5,0]
      height: [7,7,6,5,0]
      propeller: true
      texture: [63,8,63,17]
    Back_propulsor2:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 5
        y: 12
        z: 5
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [45,50,61,63,58]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [7,7,6,5,0]
      height: [7,7,6,5,0]
      propeller: true
      texture: [63,13,63,17]
    Back_propulsor3:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 5
        y: 12
        z: -3
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [45,50,61,63,58]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [7,7,6,5,0]
      height: [7,7,6,5,0]
      propeller: true
      texture: [63,13,63,17]
    Back_propulsor4:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 15
        y: 10
        z: -5
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [50,53,59,60,58]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [7,7,6,5,0]
      height: [7,7,6,5,0]
      propeller: true
      texture: [63,8,63,17]
    D1:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 13
        y: -48
        z: 8
      position:
        x: [0,0,0,-0.5,0,0,-1,-1]
        y: [42,42,42,41,45,70,80,80]
        z: [0,0,0,0,0,0,0,0]
      width: [0,3,4,6,7,7,5,0]
      height: [0,4,5,7,7,7,5,0]
      angle: 0
      texture: [17,5,63,63,9.95,63,63]
    D2:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: -43
        y: -2
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [40,53,59.5,60,58]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [7,7,6,2,0]
      height: [27,27,26,20,0]
      texture: [63,3,63,17]
      vertical: 1
      angle: 90
    D3:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: -15
        z: 5
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-30,-12,-12,5,30,40]
        z: [1,0.5,0,0,0,0,0,0,0,0]
      width: [3,3,5,7,7,11]
      height: [7.4,12,13,13,13,10]
      texture: [ 17 ]
      propeller: false
    D4:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 5
        y: -25
        z: 7
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [0,0,5,5,0]
        z: [0,0,0,0,0,0,0,0,0]
      width: [12,14,14,12,12]
      height: [5,7,7,5,5]
      texture: [ 63 ]
      angle: 0
    D5:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 5
        y: -16
        z: 7.5
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [0,0,5,5,0]
        z: [0,0,0,0,0,0,0,0,0]
      width: [12,14,14,12,12]
      height: [5,7,7,5,5]
      texture: [ 63 ]
      angle: 0
    D6:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 13
        y: -9
        z: -6
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [0,0,5,5,0]
        z: [0,0,0,0,0,0,0,0,0]
      width: [11,14,14,11,11]
      height: [16,20,20,16,16]
      texture: [ 4 ]
      angle: 20
      vertical: 1
    D7:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 5.3
        y: 3.5
        z: 33
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [0,0,5,5,0]
        z: [0,0,0,0,0,0,0,0,0]
      width: [7,11,11,7,7]
      height: [16,20,18,16,16]
      texture: [ 63 ]
      angle: -34
      vertical: 1
