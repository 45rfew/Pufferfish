return model =
  name: 'Lunatic Comet'
  level: 6
  model: 4
  size: 1.25
  specs:
    shield:
      capacity: [455,490]
      reload: [8,13]
    generator:
      capacity: [170,230]
      reload: [75,140]
    ship:
      mass: 400
      speed: [90,120]
      rotation: [50,65]
      acceleration: [80,100]
  bodies:
    main:
      section_segments: 12
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-110,-140,-100,-50,0,30,70,160,210,200]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,20,30,30,30,30,30,30,20,0]
      height: [0,20,30,35,35,35,32,30,20,0]
      texture: [13,2,3,4,63,8,63,4,17]
      propeller: true
      laser:
        damage: [18,34]
        rate: 2
        type: 1
        speed: [150,190]
        number: 1
        angle: 0
        error: 0
        recoil: 70
    main2:
      section_segments: 6
      offset:
        x: 10
        y: 0
        z: 11
      position:
        x: [-10,-10,20,20,20,30,30,30]
        y: [-100,-100,-50,0,30,120,160,160]
        z: [0,0,0,0,0,0,0,0]
      width: [0,30,30,30,30,30,30,0]
      height: [0,5,5,5,5,5,5,0]
      texture: [3.9,18,63,63,4,63,3.9]
      propeller: false
    main3:
      section_segments: 6
      offset:
        x: 10
        y: 0
        z: -11
      position:
        x: [-10,-10,20,20,20,30,30,30]
        y: [-100,-100,-50,0,30,120,160,160]
        z: [0,0,0,0,0,0,0,0]
      width: [0,30,30,30,30,30,30,0]
      height: [0,5,5,5,5,5,5,0]
      texture: [3.9,18,63,63,4,63,3.9]
      propeller: false
    wings:
      section_segments: 6
      offset:
        x: 10
        y: 0
        z: 0
      position:
        x: [-60,-60,20,20,20,20,50,50]
        y: [-95,-95,-50,0,30,120,160,160]
        z: [0,0,0,0,0,-20,-30,-30]
      width: [0,30,30,30,30,30,20,0]
      height: [0,5,5,5,5,5,5,0]
      texture: [3.8,18,63,63,18,63,3.9]
      propeller: false
      angle: -60
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: -48
        z: 30
      position:
        x: [0,0,0,0,0,0,0]
        y: [-50,-30,0,30,40]
        z: [-2,-2,0,0,-10]
      width: [0,10,15,15,15]
      height: [0,10,10,10,10]
      texture: [4,9,9,13]
      propeller: false
    reactor:
      section_segments: 12
      offset:
        x: 30
        y: 30
        z: -120
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-20,-20,0,3,-1,4,3]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,20,20,15,13,13,0]
      height: [0,20,20,15,13,13,0]
      propeller: false
      texture: [4,4,12,17,4,17.6]
      vertical: true
      angle: 20
    reactor2:
      section_segments: 12
      offset:
        x: 30
        y: 30
        z: -50
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-20,-20,0,3,-1,4,3]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,20,20,15,13,13,0]
      height: [0,20,20,15,13,13,0]
      propeller: false
      texture: [4,4,12,17,4,17.6]
      vertical: true
      angle: 20
    reactor3:
      section_segments: 12
      offset:
        x: 110
        y: -8
        z: -119
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-20,-20,0,3,-1,4,3]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,15,15,10,8,8,0]
      height: [0,15,15,10,8,8,0]
      propeller: false
      texture: [4,4,12,17,4,17.6]
      vertical: true
      angle: 0
    reactor4:
      section_segments: 12
      offset:
        x: 83
        y: 28
        z: -49
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-20,-20,0,3,-1,4,3]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,15,15,10,8,8,0]
      height: [0,15,15,10,8,8,0]
      propeller: false
      texture: [4,4,12,17,4,17.6]
      vertical: true
      angle: 0
    Side:
      section_segments: 12
      offset:
        x: 30
        y: 110
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,-20,-20]
        y: [-210,-210,-230,-205,-205,-45,-20,0,20,80,80]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5,10,10,15,15,15,20,20,20,0]
      height: [0,5,15,15,20,20,20,20,20,20,0]
      angle: 0
      propeller: false
      texture: [4,13,63,18,4,13,4,63,4,18]
    side2:
      section_segments: 6
      offset:
        x: 130
        y: 70
        z: -30
      position:
        x: [0,0,0,0,0,0,0,-5,-5]
        y: [-80,-80,-75,-50,-10,30,60,73,73]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,7,9,9,9,9,9,9,0]
      height: [0,17,19,19,19,19,19,10,0]
      angle: 0
      texture: [17.9,3.9,12.9,17.9,3.9,63,4,18]
    side3:
      section_segments: 6
      offset:
        x: 105
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,-5,-5]
        y: [-80,-80,-75,-50,-10,30,60,73,73]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,7,9,9,9,9,9,9,0]
      height: [0,17,19,19,19,19,19,10,0]
      angle: 0
      texture: [17.9,3.9,12.9,17.9,3.9,63,4,18]
    Gatling_cannons:
      section_segments: 12
      offset:
        x: 83
        y: -103
        z: 8
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-30,-40,13,17,62,62,77,102,163,180,185]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5,5,7,7,10,10,20,20,10,0]
      height: [0,5,5,7,7,10,10,20,20,10,0]
      texture: [12,13,63,4,17,10,3,4,63,4]
      propeller: false
      angle: 0
      laser:
        damage: [10,13]
        rate: 10
        type: 2
        speed: [170,200]
        recoil: 0
        number: 1
        angle: 0
    Gatling_cannons2:
      section_segments: 12
      offset:
        x: 110
        y: -30
        z: -30
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-10,-20,13,17,62,62,77,102,163,180,185]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5,5,7,7,10,10,20,20,10,0]
      height: [0,5,5,7,7,10,10,20,20,10,0]
      texture: [12,13,63,4,17,10,3,4,63,4]
      propeller: false
      angle: 0
      laser:
        damage: [10,13]
        rate: 10
        type: 2
        speed: [170,200]
        recoil: 0
        number: 1
        angle: 0
    tubes:
      section_segments: 8
      offset:
        x: 83
        y: -160
        z: 17
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,23,27,62,62,97,102,163]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,2,2,2,2,2,2,2,2]
      height: [0,2,2,2,2,2,2,2,2]
      texture: [13,13,4,13,4,4,13]
    tubes2:
      section_segments: 8
      offset:
        x: 83
        y: -160
        z: -4
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,23,27,62,62,97,102,163]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,2,2,2,2,2,2,2,2]
      height: [0,2,2,2,2,2,2,2,2]
      texture: [13,13,4,13,4,4,13]
    tubes3:
      section_segments: 8
      offset:
        x: 73
        y: -160
        z: 7
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,23,27,62,62,97,102,163]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,2,2,2,2,2,2,2,2]
      height: [0,2,2,2,2,2,2,2,2]
      texture: [13,13,4,13,4,4,13]
    tubes4:
      section_segments: 8
      offset:
        x: 93
        y: -160
        z: 7
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,23,27,62,62,97,102,163]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,2,2,2,2,2,2,2,2]
      height: [0,2,2,2,2,2,2,2,2]
      texture: [13,13,17,13,17,17,13]
    tubes5:
      section_segments: 8
      offset:
        x: 110
        y: -60
        z: -19
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,23,27,62,62,97,102,163]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,2,2,2,2,2,2,2,2]
      height: [0,2,2,2,2,2,2,2,2]
      texture: [13,13,4,13,4,4,13]
    tube6:
      section_segments: 8
      offset:
        x: 100
        y: -60
        z: -30
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,23,27,62,62,97,102,163]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,2,2,2,2,2,2,2,2]
      height: [0,2,2,2,2,2,2,2,2]
      texture: [13,13,4,13,4,4,13]
    tubes7:
      section_segments: 8
      offset:
        x: 110
        y: -60
        z: -40
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,23,27,62,62,97,102,163]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,2,2,2,2,2,2,2,2]
      height: [0,2,2,2,2,2,2,2,2]
      texture: [13,13,4,13,4,4,13]
    tubes8:
      section_segments: 8
      offset:
        x: 120
        y: -60
        z: -30
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,23,27,62,62,97,102,163]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,2,2,2,2,2,2,2,2]
      height: [0,2,2,2,2,2,2,2,2]
      texture: [13,13,4,13,4,4,13]
    Main_tubes:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: -35
        z: 40
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-90,-50,3,27,52,52,67,172,203]
        z: [-22,-12,-9,-5,-5,-5,-5,-5,-15,0]
      width: [5,5,5,5,5,5,5,5,5]
      height: [5,5,5,5,5,5,5,5,5]
      texture: [4,13,4,8,4,63,4,8]
    Main_tubes2:
      section_segments: [45,135,225,315]
      offset:
        x: 40
        y: 10
        z: 13
      position:
        x: [10,0,0,0,0,0,0,0,18,18]
        y: [-70,-30,3,27,52,52,67,102,143]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [5,5,5,5,5,5,5,5,5]
      height: [5,5,5,5,5,5,5,5,5]
      texture: [18,12,8,12,4,63,63,8]
    Main_tubes3:
      section_segments: [45,135,225,315]
      offset:
        x: 83
        y: -70
        z: 15
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-85,-85,-30,3,27,52,52,67,102,126]
        z: [2,2,5,5,5,5,5,10,10,10,10]
      width: [0,5,5,5,5,5,5,5,5,5]
      height: [0,5,5,5,5,5,5,5,5,5]
      texture: [4,4,12,8,12,4,63,63,8]
    Main_tubes4:
      section_segments: [45,135,225,315]
      offset:
        x: 110
        y: 5
        z: -21
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-65,-65,-30,3,27,52,52,67,102,123]
        z: [2,2,5,5,5,5,5,10,10,10,10]
      width: [0,5,5,5,5,5,5,5,5,5]
      height: [0,5,5,5,5,5,5,5,5,5]
      texture: [4,4,12,8,12,4,63,63,8]
    fakepropulsors:
      section_segments: 12
      offset:
        x: 60
        y: 130
        z: 0
      position:
        x: [-16,-16,-13,-10,0,-20,-25,-30,-30,-30,-30,-30]
        y: [-255,-250,-235,-205,-60,10,30,45,60,60,70,40]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5,8,10,10,10,10,10,10,10,10,0]
      height: [0,15,18,20,20,20,20,20,20,20,20,0]
      texture: [4,2,3,4,18,13,4,63,4,4,17]
      propeller: false
    propulsors2:
      section_segments: 10
      offset:
        x: 66
        y: 120
        z: 20
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-20,-20,-15,-15,0,10,20,25,30,40,50,70,65]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,14,20,21,23,23,23,23,23,23,18,18,0]
      height: [0,14,20,21,23,23,23,23,23,23,18,18,0]
      texture: [18,4,17,63,4,2,1,63,4,3,4,17]
      propeller: true
    propulsors3:
      section_segments: 10
      offset:
        x: 66
        y: 120
        z: -20
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-20,-20,-15,-15,0,10,20,25,30,40,50,70,65]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,14,20,21,23,23,23,23,23,23,18,18,0]
      height: [0,14,20,21,23,23,23,23,23,23,18,18,0]
      texture: [18,4,17,63,4,2,1,63,4,3,4,17]
      propeller: true
    ring:
      section_segments: 12
      offset:
        x: 0
        y: 75
        z: 5
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-6,-4,-4,4,4,6,6,6]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [32,32,32,34,34,34,34,32,32,32]
      height: [32,32,32,34,34,34,34,32,32,32]
      texture: [13,13,13,13,17,13]
      propeller: false
    ring2:
      section_segments: 12
      offset:
        x: 0
        y: 95
        z: 5
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-6,-4,-4,4,4,6,6,6]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [32,32,32,34,34,34,34,32,32,32]
      height: [32,32,32,34,34,34,34,32,32,32]
      texture: [13,13,13,13,17,13]
      propeller: false
    ring3:
      section_segments: 12
      offset:
        x: 0
        y: 145
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-6,-4,-4,4,4,6,6,6]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [22,22,22,24,24,24,24,22,22,22]
      height: [22,22,22,24,24,24,24,22,22,22]
      texture: [13,13,13,13,16,13]
      propeller: false
    ring4:
      section_segments: 12
      offset:
        x: 83
        y: -156
        z: 6
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,-8,-4,-2,-2,2,2,2,2,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [7,7,13,13,13,14,14,14,7,7]
      height: [7,7,13,13,13,14,14,14,7,7]
      texture: [17,4,17,4]
      propeller: false
    ring5:
      section_segments: 12
      offset:
        x: 110
        y: -60
        z: -30
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,-8,-4,-2,-2,2,2,2,2,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [7,7,13,13,13,14,14,14,7,7]
      height: [7,7,13,13,13,14,14,14,7,7]
      texture: [17,4,17,4]
      propeller: false
    ring6:
      section_segments: 12
      offset:
        x: 0
        y: 120
        z: 15
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-6,-4,-4,4,4,6,6,6]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [22,22,22,24,24,24,24,22,22,22]
      height: [22,22,22,24,24,24,24,22,22,22]
      texture: [13,13,13,13,17,13]
      propeller: false
    ring7:
      section_segments: 12
      offset:
        x: 0
        y: 50
        z: 15
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-6,-4,-4,4,4,6,6,6]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [22,22,22,24,24,24,24,22,22,22]
      height: [22,22,22,24,24,24,24,22,22,22]
      texture: [13,13,13,13,17,13]
      propeller: false
    ring8:
      section_segments: 6
      offset:
        x: 83
        y: -70
        z: 6
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-4,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 17 ]
      propeller: false
    ring9:
      section_segments: 12
      offset:
        x: 83
        y: -40
        z: 6
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-4,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [8,8,8,10,10,10,10,8,8,8]
      height: [8,8,8,10,10,10,10,8,8,8]
      texture: [ 17 ]
      propeller: false
    ring10:
      section_segments: 6
      offset:
        x: 83
        y: -80
        z: 6
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-4,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 17 ]
      propeller: false
    ring11:
      section_segments: 6
      offset:
        x: 83
        y: -90
        z: 6
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-4,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 17 ]
      propeller: false
    ring12:
      section_segments: 6
      offset:
        x: 83
        y: -100
        z: 6
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-4,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 17 ]
      propeller: false
    ring13:
      section_segments: 6
      offset:
        x: 83
        y: -110
        z: 6
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-4,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 17 ]
      propeller: false
    ring14:
      section_segments: 6
      offset:
        x: 83
        y: -120
        z: 6
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-4,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 17 ]
      propeller: false
    ring15:
      section_segments: 6
      offset:
        x: 83
        y: -130
        z: 6
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-4,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 17 ]
      propeller: false
    ring16:
      section_segments: 6
      offset:
        x: 83
        y: -140
        z: 6
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-4,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 17 ]
      propeller: false
    ring17:
      section_segments: 6
      offset:
        x: 110
        y: -45
        z: -30
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-4,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 17 ]
      propeller: false
    ring18:
      section_segments: 12
      offset:
        x: 110
        y: 34
        z: -32
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-4,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [8,8,8,10,10,10,10,8,8,8]
      height: [8,8,8,10,10,10,10,8,8,8]
      texture: [ 17 ]
      propeller: false
    ring19:
      section_segments: 6
      offset:
        x: 110
        y: -35
        z: -30
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-4,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 17 ]
      propeller: false
    ring20:
      section_segments: 6
      offset:
        x: 110
        y: -25
        z: -30
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-4,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 17 ]
      propeller: false
    ring21:
      section_segments: 6
      offset:
        x: 110
        y: -15
        z: -30
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-4,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 17 ]
      propeller: false
    ring22:
      section_segments: 6
      offset:
        x: 110
        y: -5
        z: -30
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-4,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 17 ]
      propeller: false
    ring23:
      section_segments: 6
      offset:
        x: 110
        y: 5
        z: -30
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-4,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 17 ]
      propeller: false
