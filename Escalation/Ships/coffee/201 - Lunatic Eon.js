return model =
  name: 'Lunatic Eon'
  level: 2
  model: 1
  size: 1.5
  specs:
    shield:
      capacity: [165,205]
      reload: [4,6]
    generator:
      capacity: [80,120]
      reload: [25,30]
    ship:
      mass: 200
      speed: [50,75]
      rotation: [70,85]
      acceleration: [120,130]
  bodies:
    main:
      section_segments: 12
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-100,-100,-80,-50,0,30,70,100,100]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,30,35,35,45,45,45,40,0]
      height: [0,15,15,20,20,25,30,30,0]
      texture: [18,63,4,18,8,63,4,18]
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: -60
        z: 14
      position:
        x: [0,0,0,0,0,0,0]
        y: [-20,-10,0,30,100]
        z: [-2,-2,-2,0,0]
      width: [2,12,13,14,14]
      height: [2,10,15,15,15]
      texture: [4,13,9,4]
      propeller: false
    Main_tubes:
      section_segments: 8
      offset:
        x: 13
        y: -15
        z: 12
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-64,-50,-20,3,27,52,52,67,72,113]
        z: [-3,2,5,5,5,10,10,10,0,0,0]
      width: [5,5,5,5,5,5,5,5,5,5]
      height: [5,5,5,5,5,5,5,5,5,5]
      texture: [4,8,13,4,8,18,4,4,13]
    cannons:
      section_segments: 11
      offset:
        x: 33
        y: 20
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-125,-130,-115,-103,-103,-80,-65,-65,-60,-60,-40,-40,-35,-35,-20,0,20,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,10,10,13,15,15,15,10,10,15,15,10,10,15,15,15,15,15,10,10]
      height: [0,10,10,13,15,15,15,10,10,15,15,10,10,15,15,15,15,15,10,10]
      angle: 0
      laser:
        damage: [10,15]
        rate: 2.5
        type: 1
        speed: [130,170]
        number: 1
        angle: 0
        error: 0
      propeller: false
      texture: [16.9,3,4,16.9,10.235,2.9,17.9,12.9,17.9,63,17.9,12.9,17.9,3.9,63,12.9,63,4,18]
    Main_ring:
      section_segments: 6
      offset:
        x: 24
        y: 35
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-7,-4,-4,4,7,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,26,26,26,26,26,26,26,26,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [18,17,4,4,13,4,17,18]
      angle: 0
    Main_ring2:
      section_segments: 6
      offset:
        x: 25
        y: 55
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-7,-4,-4,4,7,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,26,26,26,26,26,26,26,26,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [18,17,4,4,13,4,17,18]
      angle: 0
    Main_ring3:
      section_segments: 6
      offset:
        x: 26
        y: 75
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-7,-4,-4,4,7,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,26,26,26,26,26,26,26,26,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [18,17,4,4,13,4,17,18]
      angle: 0
    Main_ring4:
      section_segments: 6
      offset:
        x: 24
        y: 35
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-7,-4,-4,4,7,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,26,26,26,26,26,26,26,26,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [18,17,4,4,13,4,17,18]
      angle: 90
    Main_ring5:
      section_segments: 6
      offset:
        x: 25
        y: 55
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-7,-4,-4,4,7,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,26,26,26,26,26,26,26,26,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [18,17,4,4,13,4,17,18]
      angle: 90
    Main_ring6:
      section_segments: 6
      offset:
        x: 26
        y: 75
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-7,-4,-4,4,7,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,26,26,26,26,26,26,26,26,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [18,17,4,4,13,4,17,18]
      angle: 90
    Main_ring7:
      section_segments: 8
      offset:
        x: 0
        y: 57
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-7,-4,-4,4,7,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,26,26,26,26,26,26,26,26,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [18,17,4,4,3,4,17,18]
      angle: 0
    ring:
      section_segments: 9
      offset:
        x: 0
        y: 20
        z: 20
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
        x: 0
        y: 30
        z: 20
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-4,-4,-4,4,4,4,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 17 ]
      propeller: false
    propulsors:
      section_segments: 10
      offset:
        x: 25
        y: 73
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-30,-30,-20,0,20,30,28]
        z: [0,0,0,0,0,0,0]
      width: [0,8,8,8,8,8,0]
      height: [0,8,8,8,8,8,0]
      angle: 0
      texture: [4,4,18,63,4,17]
      propeller: true
    propulsors2:
      section_segments: 10
      offset:
        x: 14.3
        y: 73
        z: 8.5
      position:
        x: [0,0,0,0,0,0,0]
        y: [-30,-30,-20,0,20,30,28]
        z: [0,0,0,0,0,0,0]
      width: [0,8,8,8,8,8,0]
      height: [0,8,8,8,8,8,0]
      angle: 0
      texture: [4,4,18,63,4,17]
      propeller: true
    propulsors3:
      section_segments: 10
      offset:
        x: 0
        y: 73
        z: 13.5
      position:
        x: [0,0,0,0,0,0,0]
        y: [-30,-30,-20,0,20,30,28]
        z: [0,0,0,0,0,0,0]
      width: [0,8,8,8,8,8,0]
      height: [0,8,8,8,8,8,0]
      angle: 0
      texture: [4,4,18,63,4,17]
      propeller: true
    propulsors4:
      section_segments: 10
      offset:
        x: 14.3
        y: 73
        z: -8.5
      position:
        x: [0,0,0,0,0,0,0]
        y: [-30,-30,-20,0,20,30,28]
        z: [0,0,0,0,0,0,0]
      width: [0,8,8,8,8,8,0]
      height: [0,8,8,8,8,8,0]
      angle: 0
      texture: [4,4,18,63,4,17]
      propeller: true
    propulsors5:
      section_segments: 10
      offset:
        x: 0
        y: 73
        z: -13.5
      position:
        x: [0,0,0,0,0,0,0]
        y: [-30,-30,-20,0,20,30,28]
        z: [0,0,0,0,0,0,0]
      width: [0,8,8,8,8,8,0]
      height: [0,8,8,8,8,8,0]
      angle: 0
      texture: [4,4,18,63,4,17]
      propeller: true
