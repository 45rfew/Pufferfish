return model =
  name: 'Station cupola module'
  level: 6
  model: 3
  size: 2.6
  specs:
    shield:
      capacity: [875,875]
      reload: [12,12]
    generator:
      capacity: [200,200]
      reload: [145,145]
    ship:
      mass: 570
      speed: [50,50]
      rotation: [40,40]
      acceleration: [130,130]
  bodies:
    main:
      section_segments: 8
      offset:
        x: 0
        y: -30
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-28,-25,-10,-9,3,5,20,39]
        z: [0,0,0,0,0,0,0,0,0]
      width: [25,26.7,28.7,31,31,38,38,38]
      height: [25,26.7,28.7,31,31,38,38,38]
      texture: [1,1,17,11,63,63,17]
    main2:
      section_segments: 16
      offset:
        x: 0
        y: 5
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-25,-25,-10,-10,-5,-5,6,12,15,35,38,48,50,55,60,65,90,80]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,40,40,30,30,40,40,40,38,38,40,40,30,30,20,20,20,0]
      height: [0,40,40,30,30,40,40,40,38,38,40,40,30,30,20,20,20,0]
      texture: [17,18,63,1,63,2,13,17,63,17,18,13,63,10,17,1,17]
    cockpit:
      section_segments: 16
      offset:
        x: 0
        y: -50
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-9,-8,-10,-10,-7,-5,10]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,20,22,25,26,26,28]
      height: [0,20,22,25,26,26,28]
      texture: [7,17,1,1,63,9]
      laser:
        damage: [4,6]
        rate: 10
        type: 1
        speed: [150,240]
        number: 1
        error: 20
    circel:
      section_segments: 24
      offset:
        x: 0
        y: -13
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-6,-6,-4,6,8,8,4,-2,-6]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [70,80,83,83,80,70,70,70,70]
      height: [70,80,83,83,80,70,70,70,70]
      texture: [ 2,63,2,63,2,18,17,18 ]
      angle: 0
      vertical:0
    circel2:
      section_segments: 16
      offset:
        x: 0
        y: 8
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-6,-6,-4,6,8,8,4,-2,-6]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [80,90,93,93,90,80,80,80,80]
      height: [80,90,93,93,90,80,80,80,80]
      texture: [ 3,63,3,63,3,18,17,18 ]
      angle: 0
      vertical:0
    circelspike:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 76
        y: -5
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-90,-55,-20,-15,1,2]
        z: [0,0,0,0,0,0,0,0]
      width: [0,7,1,12,12,0]
      height: [0,7,1,12,12,0]
      angle: 0
      laser:
        damage: [16,16]
        rate: 1.25
        type: 1
        speed: [210,210]
        number: 1
        error: 3
      texture: [1,1,3,11,3]
    circelspike2:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: -5
        z: 76
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-80,-50,-20,-15,1,2]
        z: [0,0,0,0,0,0,0,0]
      width: [0,7,1,12,12,0]
      height: [0,7,1,12,12,0]
      angle: 0
      laser:
        damage: [9,9]
        rate: 2.67
        type: 1
        speed: [210,210]
        number: 1
        error: 3
      texture: [1,1,3,10.43,3]
    circelspike3:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: -5
        z: -76
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-80,-50,-20,-15,1,2]
        z: [0,0,0,0,0,0,0,0]
      width: [0,7,1,12,12,0]
      height: [0,7,1,12,12,0]
      angle: 0
      texture: [3,3,3,10.43,3]
    circelspike4:
      section_segments: 8
      offset:
        x: 30
        y: 0
        z: 79
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-60,-55,-20,-15,0,2]
        z: [0,0,0,0,0,0,0,0]
      width: [0,3,3,10,10,0]
      height: [0,3,3,10,10,0]
      angle: 180
      texture: [2,2,3,10,3]
    circelspike5:
      section_segments: 8
      offset:
        x: 85
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-70,-65,-20,-15,0,2]
        z: [0,0,0,0,0,0,0,0]
      width: [0,3,3,10,10,0]
      height: [0,3,3,10,10,0]
      angle: 180
      texture: [3,3,3,8,3]
    circelspike6:
      section_segments: 8
      offset:
        x: 30
        y: 0
        z: -79
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-60,-55,-20,-15,0,2]
        z: [0,0,0,0,0,0,0,0]
      width: [0,3,3,10,10,0]
      height: [0,3,3,10,10,0]
      angle: 180
      texture: [4,4,3]
    Glasses1:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: 28
        z: -30
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,0,15,15,14,14]
        z: [0,0,0,0,0,0,0,0]
      width: [0,13,13,11,10,0,]
      height: [0,13,13,11,10,0]
      vertical: 1
      angle: 0
      texture: [11,11,1,17,7]
    Glasses2:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 27
        y: 0
        z: -30
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,0,15,15,14,14]
        z: [0,0,0,0,0,0,0,0]
      width: [0,13,13,11,10,0,]
      height: [0,13,13,11,10,0]
      vertical: 1
      angle: 90
      texture: [11,11,1,17,7]
    Glasses3:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 18
        y: 19
        z: -30
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,0,15,15,14,14]
        z: [0,0,0,0,0,0,0,0]
      width: [0,13,13,11,10,0,]
      height: [0,13,13,11,10,0]
      vertical: 1
      angle: 45
      texture: [11,11,1,17,7]
    Glasses4:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 18
        y: -19
        z: -30
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,0,15,15,14,14]
        z: [0,0,0,0,0,0,0,0]
      width: [0,13,13,11,10,0,]
      height: [0,13,13,11,10,0]
      vertical: 1
      angle: 135
      texture: [11,11,1,17,7]
    Glasses5:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: -28
        z: -30
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,0,15,15,14,14]
        z: [0,0,0,0,0,0,0,0]
      width: [0,13,13,11,10,0,]
      height: [0,13,13,11,10,0]
      vertical: 1
      angle: 180
      texture: [11,11,1,17,7]
    Iron1:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: 0
        z: 13
      position:
        x: [0,0,0,0,0,0,0]
        y: [-70,0]
        z: [0,0,0,0,0]
      width: [8,13]
      height: [4,14]
      texture: [63]
      vertical:1
      angle:0
    Iron2:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0.1
        y: 0
        z: 13
      position:
        x: [0,0,0,0,0,0,0]
        y: [-70,0]
        z: [0,0,0,0,0]
      width: [8,13]
      height: [4,14]
      texture: [63]
      vertical:1
      angle:90
    Iron3:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: 0
        z: 13
      position:
        x: [0,0,0,0,0,0,0]
        y: [-70,0]
        z: [0,0,0,0,0]
      width: [8,13]
      height: [4,14]
      texture: [63]
      vertical:1
      angle:180
    Iron4:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0.1
        y: 0
        z: -9
      position:
        x: [0,0,0,0,0,0,0]
        y: [-80,0]
        z: [0,0,0,0,0]
      width: [8,13]
      height: [4,14]
      texture: [63]
      vertical:1
      angle:45
    Iron5:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0.1
        y: 0
        z: -9
      position:
        x: [0,0,0,0,0,0,0]
        y: [-80,0]
        z: [0,0,0,0,0]
      width: [8,13]
      height: [4,14]
      texture: [63]
      vertical:1
      angle:135
    D1:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: 28
        z: 32
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-4,-4,4,4,-4]
        z: [0,0,0,0,0,0,0,0,0]
      width: [6,10,10,6,6]
      height: [6,10,10,6,6]
      texture: [ 63 ]
      angle: 90
      vertical:1
    D2:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 20
        y: 20
        z: 32
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-4,-4,4,4,-4]
        z: [0,0,0,0,0,0,0,0,0]
      width: [6,10,10,6,6]
      height: [6,10,10,6,6]
      texture: [ 63 ]
      angle: 140
      vertical:1
    D3:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 28
        y: 0
        z: 32
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-4,-4,4,4,-4]
        z: [0,0,0,0,0,0,0,0,0]
      width: [6,10,10,6,6]
      height: [6,10,10,6,6]
      texture: [ 63 ]
      angle: 180
      vertical:1
    D4:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 20
        y: -20
        z: 32
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-4,-4,4,4,-4]
        z: [0,0,0,0,0,0,0,0,0]
      width: [6,10,10,6,6]
      height: [6,10,10,6,6]
      texture: [ 63 ]
      angle: 220
      vertical:1
    D5:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: -29
        z: 32
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-4,-4,4,4,-4]
        z: [0,0,0,0,0,0,0,0,0]
      width: [6,10,10,6,6]
      height: [6,10,10,6,6]
      texture: [ 63 ]
      angle: 270
      vertical:1
    bD1:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: 23
        z: -66
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-4,-4,4,4,-4]
        z: [0,0,0,0,0,0,0,0,0]
      width: [6,10,10,6,6]
      height: [6,10,10,6,6]
      texture: [ 63 ]
      angle: 90
      vertical:1
    bD2:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 18
        y: 15
        z: -66
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-4,-4,4,4,-4]
        z: [0,0,0,0,0,0,0,0,0]
      width: [6,10,10,6,6]
      height: [6,10,10,6,6]
      texture: [ 63 ]
      angle: 140
      vertical:1
    bD3:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 23
        y: 0
        z: -66
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-4,-4,4,4,-4]
        z: [0,0,0,0,0,0,0,0,0]
      width: [6,10,10,6,6]
      height: [6,10,10,6,6]
      texture: [ 63 ]
      angle: 180
      vertical:1
    bD4:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 18
        y: -15
        z: -66
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-4,-4,4,4,-4]
        z: [0,0,0,0,0,0,0,0,0]
      width: [6,10,10,6,6]
      height: [6,10,10,6,6]
      texture: [ 63 ]
      angle: 220
      vertical:1
    bD5:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: -23
        z: -66
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-4,-4,4,4,-4]
        z: [0,0,0,0,0,0,0,0,0]
      width: [6,10,10,6,6]
      height: [6,10,10,6,6]
      texture: [ 63 ]
      angle: 270
      vertical:1
