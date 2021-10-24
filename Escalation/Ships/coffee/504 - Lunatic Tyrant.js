return model =
  name: 'Lunatic Tyrant'
  level: 5
  model: 4
  size: 1.9
  next: [603,604]
  specs:
    shield:
      capacity: [275,335]
      reload: [8,11]
    generator:
      capacity: [170,220]
      reload: [70,85]
    ship:
      mass: 320
      speed: [70,105]
      rotation: [75,95]
      acceleration: [100,115]
  bodies:
    main:
      section_segments: 12
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-87,-86,-80,-65,-35,10,20,30,70,90,100,90]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,10,15,19,22,24,24,26,30,27,18,0]
      height: [0,7,10,15,22,25,25,30,30,27,18,0]
      texture: [3,11,2,4,10,3,4,63,4,3,17]
      propeller: true
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: -43
        z: 10
      position:
        x: [0,0,0,0,0,0,0]
        y: [-35,-30,-10,10,20]
        z: [-5,-3,0,2,0]
      width: [0,8,10,10,0]
      height: [0,10,15,12,0]
      texture: [4,9]
      propeller: false
    reactor:
      section_segments: 12
      offset:
        x: 0
        y: 30
        z: -70
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-10,-10,0,3,3,3,3,3,3,0]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,20,20,18,17,13,10,9,8,0]
      height: [0,20,20,18,17,13,10,9,8,0]
      propeller: false
      texture: [4,4,18,17,4,3,17,18,17]
      vertical: true
      angle: 0
    cannons:
      section_segments: 8
      offset:
        x: 30
        y: 20
        z: 7
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-90,-100,-95,-55,-45,-35,-20,0,20,50,55]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,6,7,7,7,7,10,10,10,10,0]
      height: [0,6,7,7,7,7,10,10,10,10,0]
      angle: 0
      laser:
        damage: [9,12]
        rate: 4
        type: 1
        speed: [170,190]
        number: 2
        angle: 5
        error: 0
      propeller: false
      texture: [17,4,11,4,2,4,13,4,63,4]
    cannons2:
      section_segments: 8
      offset:
        x: 60
        y: 44
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-60,-80,-75,-55,-50,-40,-25,0,20,50,55,55]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5,6,6,6,6,10,10,10,10,6,0]
      height: [0,5,6,6,6,6,10,10,10,10,6,0]
      angle: 0
      laser:
        damage: [9,12]
        rate: 4
        type: 1
        speed: [170,190]
        number: 2
        angle: 5
        error: 0
      propeller: false
      texture: [17,3,10,4,63,4,2,4,63,4,18]
    ring:
      section_segments: 8
      offset:
        x: 20
        y: 45
        z: 12
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-2,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 17 ]
      propeller: false
    ring2:
      section_segments: 8
      offset:
        x: 20
        y: 35
        z: 12
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-2,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 17 ]
      propeller: false
    ring3:
      section_segments: 8
      offset:
        x: 20
        y: 25
        z: 12
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-2,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 17 ]
      propeller: false
    ring4:
      section_segments: 8
      offset:
        x: 20
        y: 15
        z: 12
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-2,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 17 ]
      propeller: false
    decoration:
      section_segments: 6
      offset:
        x: 10
        y: 60
        z: 6
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-7,-4,-4,4,7,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,26,26,26,26,26,26,26,26,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [18,17,4,4,3,4,17,18]
      angle: 0
    decoration2:
      section_segments: 8
      offset:
        x: 20
        y: 60
        z: -2
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-57.9,-58,-57,-54,-24,4,7,8,8,7.9]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,16,16,16,16,16,16,16,16,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [18,17,4,4,18,4,17,18]
      angle: 0
    decoration3:
      section_segments: 8
      offset:
        x: 12
        y: 5
        z: 8
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-7,-7,-6,-3,-3,3,6,7,7,7,10]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,56,56,56,56,56,56,56,56,10,10]
      height: [0,10,12,12,12,12,12,12,10,5,5]
      texture: [18,13,4,4,63,4,13,4,18,13]
      angle: 90
    decoration4:
      section_segments: 6
      offset:
        x: 20
        y: 10
        z: 5
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-7.9,-8,-7,-4,-4,4,7,8,8,7.9]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,26,26,26,26,26,26,26,26,0]
      height: [0,12,14,14,14,14,14,14,12,0]
      texture: [18,17,4,4,12,4,17,18]
      angle: 0
    decoration5:
      section_segments: 6
      offset:
        x: 15
        y: 75
        z: 5
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-7.9,-8,-7,-4,-4,4,7,8,8,7.9]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,26,26,26,26,26,26,26,26,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [18,17,3,3,4,3,17,18]
      angle: 0
    center_tube:
      section_segments: 12
      offset:
        x: 0
        y: 40
        z: 16
      position:
        x: [0,0,0,0,0,0,0]
        y: [-82,-30,-20,0,40,50,50]
        z: [5,0,0,0,-2,-4,-4]
      width: [4,10,10,10,15,10,0]
      height: [1,10,10,15,15,10,0]
      angle: 0
      texture: [18,13,18,13,4,18]
    propulsors:
      section_segments: 12
      offset:
        x: 28
        y: 55
        z: 5
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-40,-35,-20,0,20,45,20,20,40,40]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,5,8,9,10,8,8,6,6,0]
      height: [0,5,8,9,10,8,8,6,6,0]
      texture: [18,4,4,63,8,13,17]
      propeller: true
  wings:
    main:
      offset:
        x: 0
        y: 70
        z: 19
      length: [30,40,0,0,4,10]
      width: [30,30,30,50,40,40,40]
      texture: [10,4,63,63,13,4]
      angle: [-10,-20,-20,-20,-20,-20]
      doubleside: 1
      position: [0,0,0,-10,-10,-10,0]
      bump:
        position: -10
        size: 15
    anothermain:
      offset:
        x: 0
        y: 70
        z: 19
      length: [30,40,0,18,-9,10,10]
      width: [30,30,30,50,40,40,80,60]
      texture: [10,4,63,3,13,4,63]
      angle: [-10,-20,-20,-20,-20,-20,-20]
      doubleside: 1
      position: [0,0,0,-10,-10,-10,-30,-30]
      bump:
        position: -10
        size: 14
    main2:
      offset:
        x: 0
        y: 60
        z: 13
      length: [30,40,0,0]
      width: [30,30,30,0,0]
      texture: [10,4,63,63]
      angle: [-10,-20,-60,-60]
      doubleside: 1
      position: [-50,-30,0,0,-20]
      bump:
        position: -10
        size: 15
    anothermain2:
      offset:
        x: 0
        y: 62
        z: 13
      length: [30,40,0,0]
      width: [30,30,30,0,0]
      texture: [13,18,63,63]
      angle: [-10,-20,-60,-60]
      doubleside: 1
      position: [-50,-30,0,0,-20]
      bump:
        position: -10
        size: 12
    anothermain3:
      offset:
        x: 0
        y: 74
        z: 19
      length: [30,40,0,0]
      width: [30,30,30,0,0]
      texture: [13,18,63,63]
      angle: [-10,-20,-60,-60]
      doubleside: 1
      position: [0,0,0,-10,-10]
      bump:
        position: -10
        size: 12
