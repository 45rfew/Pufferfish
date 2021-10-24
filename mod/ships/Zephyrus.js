return model =
  name: 'Zephyrus'
  level: 6
  model: 4
  size: 1
  zoom: 0.9
  specs:
    shield:
      capacity: [325,325]
      reload: [7,7]
    generator:
      capacity: [185,185]
      reload: [49,49]
    ship:
      mass: 390
      speed: [185,185]
      rotation: [70,70]
      acceleration: [90,90]
  bodies:
    Sides:
      section_segments: 6
      offset:
        x: 26
        y: 0
        z: -12
      position:
        x: [-10,-10,-10,-10,-7,-5,-4,-2,7,7,5,4,4,4]
        y: [-70,-70,-76,-75,-55,-20,-5,10,25,65,75,90,90,80]
        z: [2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,3,5,7,9,13,14,15,15,15,13,12,10,0]
      height: [0,3,5,7,9,13,13,15,15,15,13,12,10,0]
      propeller: 0
      texture: [4.8,13,4,63,10,3,4,63,18,63,4,63,18]
    main:
      section_segments: [45,85,135,225,275,315]
      offset:
        x: 0.6
        y: -20
        z: 0
      position:
        x: [-0.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-135,-130,-120,-110,-100,-45,-20,5,15,40,87,100]
        z: [-3,-3,-3,-3,-3,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,2,4.5,7,9,17,20,20,20,25,25,27]
      height: [0,2,4.5,7,10,15,17,17,17,17,17,15]
      texture: [3,4,63,4,1,2,3,4,3,4,4,12,63,17,15]
      propeller: true
    cockpit:
      section_segments: [45,85,135,225,275,315]
      offset:
        x: 0
        y: -20
        z: 9
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-99,-70,-40,-30,-15,-5,12,15,36,38,85,85]
        z: [-7,-3,1,1,-1,-1,-1,0,-2,-1,-1]
      width: [3,4,5,6,7,7,8,9,9,9,9,10,0]
      height: [3,5,5,8,15,16,17,18,16,13,13,13,0]
      propeller: false
      texture: [63,63,4,4,4,4,5,63,4,4]
    cannonCenter:
      section_segments: 12
      offset:
        x: 0
        y: -20
        z: -16
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-70,-85,-70,-68,-25,-15,0,30,40,90]
        z: [0,0,0,0,0,2,2,2,5,5,3,7]
      width: [0,4,5,4,5,9,10,10,8,8]
      height: [0,4,5,4,5,9,10,10,8,8]
      angle: 0
      texture: [17,3,63,4,13,10,4,63,13,63]
      laser:
        damage: [38,38]
        rate: 0.9
        type: 1
        speed: [180,180]
        number: 1
        error: 0
    cannon:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 25
        y: 40
        z: 4
      position:
        x: [0,0,0,0,0,0,3,3,6,6,5,5]
        y: [-50,-85,-72,-70,-36,-35,-25,0,5,30,35,35]
        z: [2,2,2,2,2,2,-2,-2,-2,-2,-2,-2,-2,-2]
      width: [0,4,5,4,5,6,10,10,10,10,8,0]
      height: [0,3,4,3,3,4,8,8,8,8,6,0]
      angle: 0
      laser:
        damage: [7.5,7.5]
        rate: 10
        type: 1
        speed: [180,180]
        number: 1
        error: 0
      propeller: false
      texture: [17,4,5,63,5,3,1,63,12,4]
    cannonback:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: 90
        z: 0
      position:
        x: [0,0]
        y: [0,5]
        z: [0,0]
      width: [0,2]
      height: [0,2]
      angle: 180
      laser:
        damage: [6,6]
        rate: 10
        type: 1
        speed: [100,100]
        number: 1
        error: 1
        recoil: 70
      propeller: false
      texture: [17,4,5,63,5,3,1,63,12,4]
    C1:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 15
        y: 12
        z: -54
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-5,4,4,7,7,5,5,3]
        z: [0,0,0,0,0,0,0,0,0]
      width: [16,16,14,14,12,11,4,0]
      height: [16,16,14,14,12,11,4,0]
      texture: [4,63,13,4,63,17,63]
      vertical: 1
      angle: 30
    C2:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 15
        y: 12
        z: -30
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-5,4,4,7,7,5,5,3]
        z: [0,0,0,0,0,0,0,0,0]
      width: [16,16,14,14,12,11,4,0]
      height: [16,16,14,14,12,11,4,0]
      texture: [4,63,13,4,63,17,63]
      vertical: 1
      angle: 30
    C3:
      section_segments: 10
      offset:
        x: 0
        y: 59
        z: 5
      position:
        x: [0,0,0,0,0,0,0]
        y: [-13,-14,-13,-11,-10,-9,-13]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [19,20,21,21,20,19,19]
      height: [24,25,26,26,25,24,24]
      angle: 0
      texture: [ 17 ]
    C4:
      section_segments: 12
      offset:
        x: 0
        y: 71
        z: 5
      position:
        x: [0,0,0,0,0,0,0]
        y: [-13,-14,-13,-11,-10,-9,-13]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [19,20,21,21,20,19,19]
      height: [24,25,26,26,25,24,24]
      angle: 0
      texture: [ 17 ]
    C5:
      section_segments: 12
      offset:
        x: 0
        y: 47
        z: 5
      position:
        x: [0,0,0,0,0,0,0]
        y: [-13,-14,-13,-11,-10,-9,-13]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [19,20,21,21,20,19,19]
      height: [24,25,26,26,25,24,24]
      angle: 0
      texture: [ 17 ]
    C6:
      section_segments: 12
      offset:
        x: 0
        y: 35
        z: 5
      position:
        x: [0,0,0,0,0,0,0]
        y: [-13,-14,-13,-11,-10,-9,-13]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [19,20,21,21,20,19,19]
      height: [24,25,26,26,25,24,24]
      angle: 0
      texture: [ 17 ]
    C7:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 24
        y: 42
        z: 5
      position:
        x: [0,0,0,0,0,0,0]
        y: [-15,-15,-14,-10,-9,-9,-14]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [8,10,11,11,10,8,8]
      height: [12,14,15,15,14,12,12]
      angle: 0
      texture: [ 63 ]
    C8:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 24
        y: 66
        z: 5
      position:
        x: [0,0,0,0,0,0,0]
        y: [-15,-15,-14,-10,-9,-9,-14]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [8,10,11,11,10,8,8]
      height: [12,14,15,15,14,12,12]
      angle: 0
      texture: [ 63 ]
    C9:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 22
        y: 12
        z: 6
      position:
        x: [0,0,0,0,0,0,0]
        y: [-15,-15,-14,-10,-9,-9,-14]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [8,10,11,11,10,8,8]
      height: [12,14,15,15,14,12,12]
      angle: 90
      texture: [ 4 ]
    Engine:
      section_segments: 16
      offset:
        x: 0
        y: 90
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-27,-25,-15,-14,-11,-10,7,7,5,2,-2,15]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,27,28,24,24,27,23,21,18,16,10,0]
      height: [0,27,28,24,24,27,23,21,18,16,10,0]
      texture: [4,8,4,17,4,13,63,17,13,17,6]
      vertical: 0
      angle: 0
    cockpitframe:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0.1
        y: -20
        z: 10.5
      position:
        x: [0,2,4,5,6,7,8,7,0,0]
        y: [-99,-70,-45,-35,-20,12,15,40,38,85,85]
        z: [-8,-3,0,1,2,2,2,2,2,2]
      width: [2,2,2,2,2,2,2,2]
      height: [2,2,2,2,2,2,2,2]
      propeller: false
      texture: [ 63 ]
    D1:
      section_segments: [45,85,135,225,275,315]
      offset:
        x: 0
        y: -95
        z: -3
      position:
        x: [0,0,0,0,0,0,0]
        y: [-15,-15,-14,-10,-9,-9,-14]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [8,10,13,13,10,8,8]
      height: [5,6,11,11,6,5,5]
      angle: 0
      texture: [ 63 ]
    D2:
      section_segments: [45,85,135,225,275,315]
      offset:
        x: 0
        y: -85
        z: -3
      position:
        x: [0,0,0,0,0,0,0]
        y: [-15,-15,-14,-10,-9,-9,-14]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [8,10,15,15,10,8,8]
      height: [5,6,12,12,6,5,5]
      angle: 0
      texture: [ 63 ]
    D3:
      section_segments: [45,85,135,225,275,315]
      offset:
        x: 0
        y: -75
        z: -3
      position:
        x: [0,0,0,0,0,0,0]
        y: [-15,-15,-14,-10,-9,-9,-14]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [8,10,17,17,10,8,8]
      height: [5,6,13,13,6,5,5]
      angle: 0
      texture: [ 63 ]
    D4:
      section_segments: [45,85,135,225,275,315]
      offset:
        x: 0
        y: -65
        z: -3
      position:
        x: [0,0,0,0,0,0,0]
        y: [-15,-15,-14,-10,-9,-9,-14]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [8,10,18,18,10,8,8]
      height: [5,6,14,14,6,5,5]
      angle: 0
      texture: [ 63 ]
    D5:
      section_segments: [45,85,135,225,275,315]
      offset:
        x: 0
        y: 0
        z: 3
      position:
        x: [0,0,0,0,0,0,0]
        y: [-15,-15,-14,-10,-9,-9,-14]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [8,10,17,17,10,8,8]
      height: [5,6,14,14,6,5,5]
      angle: 0
      texture: [ 17 ]
    D6:
      section_segments: [45,85,135,225,275,315]
      offset:
        x: 0
        y: -10
        z: 3
      position:
        x: [0,0,0,0,0,0,0]
        y: [-15,-15,-14,-10,-9,-9,-14]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [8,10,17,17,10,8,8]
      height: [5,6,14,14,6,5,5]
      angle: 0
      texture: [ 17 ]
    D7:
      section_segments: [45,85,135,225,275,315]
      offset:
        x: 0
        y: -20
        z: 3
      position:
        x: [0,0,0,0,0,0,0]
        y: [-15,-15,-14,-10,-9,-9,-14]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [8,10,17,17,10,8,8]
      height: [5,6,14,14,6,5,5]
      angle: 0
      texture: [ 17 ]
    D8:
      section_segments: [45,85,135,225,275,315]
      offset:
        x: 0
        y: -30
        z: 3
      position:
        x: [0,0,0,0,0,0,0]
        y: [-15,-15,-14,-10,-9,-9,-14]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [8,10,17,17,10,8,8]
      height: [5,6,14,14,6,5,5]
      angle: 0
      texture: [ 17 ]
  wings:
    main:
      length: [35,0,30,0]
      width: [90,40,40,30,0]
      angle: [-15,-15,35,25]
      position: [-10,30,30,50,50]
      doubleside: true
      offset:
        x: 30
        y: 40
        z: -10
      bump:
        position: 45
        size: 7
      texture: [10,63]
    mainb:
      length: [35,0,30,0]
      width: [90,40,50,30,0]
      angle: [-15,-15,35,25]
      position: [-10,30,25,46,46]
      doubleside: true
      offset:
        x: 30
        y: 44
        z: -10
      bump:
        position: 45
        size: 7
      texture: [ 63 ]
    winglet:
      length: [0,25,0,15,0,30,0]
      width: [0,46,30,30,30,30,30,0]
      angle: [10,10,10,90,90,155,155]
      position: [10,10,30,30,40,40,55,55]
      doubleside: true
      offset:
        x: 25
        y: 32
        z: 0
      bump:
        position: 45
        size: 2
      texture: [4,3,4,4,63,63]
    wingletb:
      length: [0,25,0,15,0,30,0]
      width: [0,46,30,30,30,30,30,0]
      angle: [10,10,10,90,90,155,155]
      position: [10,10,30,30,40,40,55,55]
      doubleside: true
      offset:
        x: 25
        y: 32
        z: 0
      bump:
        position: -45
        size: 2
      texture: [4,3,4,4,63,63]
    fornt:
      doubleside: true
      length: [25,0]
      width: [25,15,0]
      angle: [-15,-15]
      position: [-115,-70,-70]
      texture: [ 1 ]
      bump:
        position: 30
        size: 15
      offset:
        x: 25
        y: 70
        z: -10
    fornt2:
      doubleside: true
      length: [30,0]
      width: [25,15,0]
      angle: [-15,-15]
      position: [-115,-60,-60]
      texture: [ 63 ]
      bump:
        position: 30
        size: 15
      offset:
        x: 25
        y: 85
        z: -10
