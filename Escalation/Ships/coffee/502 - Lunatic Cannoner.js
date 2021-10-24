return model =
  name: 'Lunatic Cannoner'
  level: 5
  model: 2
  size: 2.35
  specs:
    shield:
      capacity: [365,420]
      reload: [7,9]
    generator:
      capacity: [35,36]
      reload: [85,110]
    ship:
      mass: 470
      speed: [50,65]
      rotation: [50,65]
      acceleration: [90,100]
  bodies:
    main:
      section_segments: 10
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-60,-67,-60,-50,-25,-25,-25,-10,-10,-10,-10,-5,-5,5,5,10,10,10,10,40,60,70,100,100]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,11,14,16,18,23,24,25,24,20,19,19,17,17,19,19,20,24,25,30,30,30,20,0]
      height: [0,8,10,12,13,19,20,20,19,15,14,14,12,12,14,14,15,19,20,20,20,30,20,0]
      texture: [18,3,4,63,18,17,4,17,4,17,8,18,12,18,8,17,4,17,4,10,4,3,18]
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: -45
        z: 9
      position:
        x: [0,0,0,0,0]
        y: [-18,-15,10,20,20]
        z: [0,-2,0,0,0]
      width: [0,8,12,12,5]
      height: [0,7,10,10,5]
      texture: [4,9,4,4]
      propeller: false
    decoration:
      section_segments: 12
      offset:
        x: 0
        y: -10
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,0,0,20,20]
        z: [0,0,0,0,0]
      width: [0,12,12,12,0]
      height: [0,17,17,17,0]
      texture: [4,8,18,4]
      propeller: false
    decoration2:
      section_segments: 12
      offset:
        x: 0
        y: -10
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,0,0,20,20]
        z: [0,0,0,0,0]
      width: [0,17,17,17,0]
      height: [0,12,12,12,0]
      texture: [4,8,18,4]
      propeller: false
    decoration4:
      section_segments: 6
      offset:
        x: 13
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,-10,0,10,20]
        z: [0,0,0,0,0]
      width: [0,5,5,5,0]
      height: [0,2,2,2,0]
      texture: [4,13,13,4]
      propeller: false
    decoration5:
      section_segments: 10
      offset:
        x: 0
        y: 66
        z: 12
      position:
        x: [0,0,0,0,0,0,0]
        y: [-10,-10,0,10,0]
        z: [0,-2,2,-2,-2]
      width: [0,10,13,15,0]
      height: [0,12,15,15,0]
      texture: [9,18,4,4]
      propeller: false
    decoration6:
      section_segments: 8
      offset:
        x: 7
        y: 86
        z: 12
      position:
        x: [0,0,0,0,0,0,0]
        y: [-15,-10,0,0,0]
        z: [4,4,-2,-8,-2]
      width: [10,10,10,10,8]
      height: [12,12,15,15,8]
      texture: [4,18,4,4]
      propeller: false
    Main_rings:
      section_segments: 10
      offset:
        x: 10
        y: 0
        z: 7
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-6,-6,-6,-4,-4,4,4,6,6,6]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,2,4,4,4,4,4,4,2,0]
      height: [0,2,4,4,4,4,4,4,2,0]
      texture: [17.93,4,4,4,17,17,4,18]
    Main_rings2:
      section_segments: 10
      offset:
        x: 10
        y: 20
        z: 16
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-6,-6,-6,-4,-4,4,4,6,6,6]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,2,4,4,4,4,4,4,2,0]
      height: [0,2,4,4,4,4,4,4,2,0]
      texture: [17.93,4,4,4,10,17,4,18]
      angle: 90
    Main_rings3:
      section_segments: 10
      offset:
        x: 10
        y: 30
        z: 16
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-6,-6,-6,-4,-4,4,4,6,6,6]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,2,4,4,4,4,4,4,2,0]
      height: [0,2,4,4,4,4,4,4,2,0]
      texture: [17.93,4,4,4,10,17,4,18]
      angle: 90
    Main_rings4:
      section_segments: [45,135,225,315]
      offset:
        x: 13
        y: 25
        z: 15
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-6,-6,-6,-4,-4,4,4,6,6,6]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,2,4,4,4,4,4,4,2,0]
      height: [0,2,4,4,4,4,4,4,2,0]
      texture: [17.93,4,4,4,13,17,4,18]
      angle: 0
    Main_rings5:
      section_segments: [45,135,225,315]
      offset:
        x: 2
        y: 25
        z: 16
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-6,-6,-6,-4,-4,4,4,6,6,6]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,2,4,4,4,4,4,4,2,0]
      height: [0,2,4,4,4,4,4,4,2,0]
      texture: [17.93,4,3,3,13,17,18,18]
      angle: 90
    Main_tube:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 20
        y: 36
        z: 2
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-7,-4,-4,4,7,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,26,26,26,26,26,26,26,26,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [18,17,4,4,63,4,17,18]
      angle: 90
    Main_tube2:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 45
        y: 40
        z: 2
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-7,-4,-4,4,7,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,66,66,66,66,66,66,66,66,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [18,17,4,4,3,4,17,18]
      angle: 90
    Main_tube3:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 58
        y: 65
        z: 2
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-7,-4,-4,4,7,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,26,26,26,26,26,26,26,26,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [18,17,4,4,3,4,17,18]
      angle: 90
    Main_tube4:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 60
        y: 70
        z: 13
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-7,-4,-4,4,7,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,16,16,16,16,16,16,16,16,0]
      height: [0,2,4,4,4,4,4,4,2,0]
      texture: [8,17,4,4,3,4,17,8]
      angle: 90
    Main_tube5:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 60
        y: 70
        z: 2
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-7,-4,-4,4,7,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,16,16,16,16,16,16,16,16,0]
      height: [0,2,4,4,4,4,4,4,2,0]
      texture: [8,17,4,4,3,4,17,8]
      angle: 90
    Main_tube6:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 60
        y: 70
        z: -9
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-7,-4,-4,4,7,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,16,16,16,16,16,16,16,16,0]
      height: [0,2,4,4,4,4,4,4,2,0]
      texture: [8,17,4,4,3,4,17,8]
      angle: 90
    Main_tube7:
      section_segments: 8
      offset:
        x: 20
        y: 65
        z: 1
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-7,-4,-4,4,7,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,26,26,26,26,26,26,26,26,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [18,17,4,4,63,4,17,18]
      angle: 90
    Main_tube8:
      section_segments: 8
      offset:
        x: 20
        y: 65
        z: 1
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-7,-4,-4,4,7,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,26,26,26,26,26,26,26,26,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [18,17,4,4,63,4,17,18]
      angle: 0
    Main_tube9:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 55
        y: 36
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-7,-4,-4,4,7,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,26,26,26,26,26,26,26,26,0]
      height: [0,20,22,22,22,22,22,22,20,0]
      texture: [18,17,4,4,63,4,17,4]
      angle: 90
    Main_tube10:
      section_segments: 6
      offset:
        x: 54.9
        y: 16
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-7,-4,-4,4,7,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,16,16,16,16,16,16,16,16,0]
      height: [0,12,14,14,14,14,14,14,12,0]
      texture: [18,17,3.9,3.9,63,3.9,17,18]
      angle: 90
    reactor:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 20
        z: -25
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-10,-10,0,3,3,3,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,10,10,8,7,6,0,0,0,0]
      height: [0,10,10,8,7,6,0,0,0,0]
      propeller: false
      texture: [4,4,18,4,17,17,13,18,17]
      vertical: true
      angle: 0
    reactor2:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 20
        z: -38
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-10,-10,0,3,3,3,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,10,10,8,7,6,0,0,0,0]
      height: [0,10,10,8,7,6,0,0,0,0]
      propeller: false
      texture: [4,4,18,4,17,17,13,18,17]
      vertical: true
      angle: 0
    reactor3:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 20
        z: -52
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-10,-10,0,3,3,3,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,10,10,8,7,6,0,0,0,0]
      height: [0,10,10,8,7,6,0,0,0,0]
      propeller: false
      texture: [4,4,18,4,17,17,13,18,17]
      vertical: true
      angle: 0
    reactor4:
      section_segments: [45,135,225,315]
      offset:
        x: 5
        y: 17
        z: -52
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-10,-10,0,3,3,3,3,3,3,0]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,10,10,8,7,3,0,0,0,0]
      height: [0,10,10,8,4,3,0,0,0,0]
      propeller: false
      texture: [4,4,18,4,18,4,18,18,17]
      vertical: true
      angle: 0
    reactor5:
      section_segments: 12
      offset:
        x: 40
        y: 0
        z: -30
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-15,-15,0,3,3,3,3,12,24,24,24,24]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,20,20,20,20,20,19,19,18,17,10,0]
      height: [0,30,30,30,20,20,19,19,18,17,10,0]
      propeller: false
      texture: [18,18,12,17,18,17,12,4,17,18,17]
      vertical: true
      angle: 90
    cannons:
      section_segments: 6
      offset:
        x: 45
        y: 40
        z: 25
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-110,-110,-120,-120,-100,-100,-90,-90,-70,-70,-50,-50,-20,0,20,50,55,55]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-10,-20,-20]
      width: [0,3,3,5,9,7,7,9,9,7,7,10,10,10,10,10,5,0]
      height: [0,3,3,5,9,7,7,9,9,7,7,10,10,10,10,10,5,0]
      angle: 0
      laser:
        damage: [26,35]
        rate: 1
        type: 1
        speed: [180,210]
        number: 1
        angle: 0
        error: 0
        recoil: 50
      propeller: false
      texture: [16.9,13,18,17.97,17,13,18,3.9,18,13,18,10,3.9,63,3.9,2.9,3.9]
    cannons2:
      section_segments: 6
      offset:
        x: 45
        y: 40
        z: -20
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-110,-110,-120,-120,-100,-100,-90,-90,-70,-70,-50,-50,-20,0,20,50,55,55]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,20,20]
      width: [0,3,3,5,9,7,7,9,9,7,7,10,10,10,10,10,5,0]
      height: [0,3,3,5,9,7,7,9,9,7,7,10,10,10,10,10,5,0]
      angle: 0
      laser:
        damage: [26,35]
        rate: 1
        type: 1
        speed: [180,210]
        number: 1
        angle: 0
        error: 0
        recoil: 50
      propeller: false
      texture: [16.9,13,18,17.97,17,13,18,3.9,18,13,18,10,3.9,63,3.9,2.9,17.9]
    propulsors:
      section_segments: 10
      offset:
        x: 13
        y: 73
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-30,-30,-20,0,20,30,28]
        z: [0,0,0,0,0,0,0]
      width: [0,5,5,5,5,5,0]
      height: [0,5,5,5,5,5,0]
      angle: 0
      texture: [4,4,18,63,4,17]
      propeller: true
    propulsors2:
      section_segments: 10
      offset:
        x: 9
        y: 73
        z: 8.5
      position:
        x: [0,0,0,0,0,0,0]
        y: [-30,-30,-20,0,20,30,28]
        z: [0,0,0,0,0,0,0]
      width: [0,5,5,5,5,5,0]
      height: [0,5,5,5,5,5,0]
      angle: 0
      texture: [4,4,18,63,4,17]
      propeller: true
    propulsors3:
      section_segments: 10
      offset:
        x: 0
        y: 73
        z: 13
      position:
        x: [0,0,0,0,0,0,0]
        y: [-30,-30,-20,0,20,30,28]
        z: [0,0,0,0,0,0,0]
      width: [0,5,5,5,5,5,0]
      height: [0,5,5,5,5,5,0]
      angle: 0
      texture: [4,4,18,63,4,17]
      propeller: true
    propulsors4:
      section_segments: 10
      offset:
        x: 9
        y: 73
        z: -8.5
      position:
        x: [0,0,0,0,0,0,0]
        y: [-30,-30,-20,0,20,30,28]
        z: [0,0,0,0,0,0,0]
      width: [0,5,5,5,5,5,0]
      height: [0,5,5,5,5,5,0]
      angle: 0
      texture: [4,4,18,63,4,17]
      propeller: true
    propulsors5:
      section_segments: 10
      offset:
        x: 0
        y: 73
        z: -13
      position:
        x: [0,0,0,0,0,0,0]
        y: [-30,-30,-20,0,20,30,28]
        z: [0,0,0,0,0,0,0]
      width: [0,5,5,5,5,5,0]
      height: [0,5,5,5,5,5,0]
      angle: 0
      texture: [4,4,18,63,4,17]
      propeller: true
    propulsors6:
      section_segments: 10
      offset:
        x: 20
        y: 73
        z: 13
      position:
        x: [0,0,0,0,0,0,0]
        y: [-30,-30,-20,0,20,30,28]
        z: [0,0,0,0,0,0,0]
      width: [0,3,5,5,5,3,0]
      height: [0,3,5,5,5,3,0]
      angle: 0
      texture: [18,4,18,18,4,17]
      propeller: true
    propulsors8:
      section_segments: 10
      offset:
        x: 20
        y: 73
        z: -13
      position:
        x: [0,0,0,0,0,0,0]
        y: [-30,-30,-20,0,20,30,28]
        z: [0,0,0,0,0,0,0]
      width: [0,3,5,5,5,3,0]
      height: [0,3,5,5,5,3,0]
      angle: 0
      texture: [18,4,18,18,4,17]
      propeller: true
    wings:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 20
        y: 35
        z: 2
      position:
        x: [20,20,20,20,20,-30,-30,-30,-30,-30]
        y: [-8,-8,-7,-4,-4,14,17,18,18,18]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,26,26,26,46,26,26,26,26,0]
      height: [0,10,10,10,10,10,10,10,10,0]
      texture: [18,17,13,3,4,3,17,18]
      angle: 90
