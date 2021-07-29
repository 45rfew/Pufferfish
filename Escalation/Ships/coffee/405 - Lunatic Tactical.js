return model =
  name: 'Lunatic Tactical'
  level: 4
  model: 5
  size: 1.46
  specs:
    shield:
      capacity: [205,265]
      reload: [6,9]
    generator:
      capacity: [130,170]
      reload: [55,70]
    ship:
      mass: 250
      speed: [100,125]
      rotation: [60,75]
      acceleration: [90,100]
  bodies:
    main:
      section_segments: 8
      offset:
        x: 0
        y: 10
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-140,-120,-100,-50,0,30,70,100,90]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,15,20,25,25,30,30,20,0]
      height: [0,15,20,25,25,30,30,20,0]
      texture: [4,63,4,18,63,4,3,17]
      propeller: true
    main2:
      section_segments: 9
      offset:
        x: 8
        y: 10
        z: 0
      position:
        x: [-2,-4,-3,0,0,0,0,0,0]
        y: [-120,-110,-100,-50,0,30,70,80,80]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,12,18,23,23,28,28,18,0]
      height: [0,12,12,12,12,12,12,12,0]
      texture: [3.9,2.9,3.9,18,63,3.9,2.9,17.9]
      propeller: true
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: -70
        z: 15
      position:
        x: [0,0,0,0,0,0,0]
        y: [-40,-20,0,30,40]
        z: [-5,-2,-3,-2,-5]
      width: [5,10,10,10,0]
      height: [5,10,14,10,0]
      texture: [9,9,4]
      propeller: false
    Body_ring:
      section_segments: 10
      offset:
        x: 0
        y: 20
        z: 5
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-11,-8,-6,-4,-4,4,4,6,6,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,22,24,24,24,24,24,24,22,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [17.93,4,4,4,13,17,17,18]
    Body_ring2:
      section_segments: 12
      offset:
        x: 0
        y: -15
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-11,-8,-6,-4,-4,4,4,6,6,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,22,24,24,24,24,24,24,22,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [17.93,4,4,4,4,17,17,18]
    Body_ring3:
      section_segments: 12
      offset:
        x: 0
        y: -35
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-11,-8,-6,-4,-4,4,4,6,6,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,22,24,24,24,24,24,24,22,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [17.93,4,4,4,4,17,17,18]
    Body_ring4:
      section_segments: 8
      offset:
        x: 0
        y: -55
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-11,-8,-6,-4,-4,4,4,6,6,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,22,24,24,24,24,24,24,22,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [17.93,4,4,4,4,17,17,18]
    ring:
      section_segments: 9
      offset:
        x: 22
        y: 5
        z: 5
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-6,-4,-4,4,4,6,6,6]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [4,4,4,17,3,4,4,4]
      propeller: false
    ring2:
      section_segments: 9
      offset:
        x: 22
        y: 15
        z: 8
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-6,-4,-4,4,4,6,6,6]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [4,4,4,17,17,4,4,4]
      propeller: false
    ring3:
      section_segments: 9
      offset:
        x: 22
        y: 25
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-6,-4,-4,4,4,6,6,6]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [4,4,4,17,3,4,4,4]
      propeller: false
    Main_tubes:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: -15
        z: 30
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-55,-40,3,27,52,52,67,62,63]
        z: [-8,-6,-6,-5,-1,-1,-1,-2,-7,0]
      width: [5,5,5,5,5,5,5,5,5]
      height: [5,5,5,5,5,5,5,5,5]
      texture: [4,13,4,8,4,4,3,8]
    Main_tubes2:
      section_segments: [45,135,225,315]
      offset:
        x: 1
        y: -15
        z: 29
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-55,-40,3,27,52,52,67,62,63]
        z: [-8,-6,-6,-5,-1,-1,-1,-2,-7,0]
      width: [5,5,5,5,5,5,5,5,5]
      height: [5,5,5,5,5,5,5,5,5]
      texture: [ 17 ]
    Main_tubes3:
      section_segments: 8
      offset:
        x: 28
        y: 38
        z: 13
      position:
        x: [-9,-7,0,0,-10,-10,-15,-15,-15,-15]
        y: [-90,-50,3,27,52,52,66,67,67]
        z: [-10,-5,0,0,-10,-10,-10,-10,-10,-10]
      width: [5,5,5,5,5,5,5,5,5]
      height: [5,5,5,5,5,5,5,5,5]
      texture: [4,63,4,3,4]
    propullsor:
      section_segments: 9
      offset:
        x: 20
        y: -20
        z: 32
      position:
        x: [0,0,0,0,0,0]
        y: [40,50,45,70,105,90]
        z: [0,0,0,0,0,0]
      width: [0,5,15,18,15,0]
      height: [0,5,10,14,10,0]
      texture: [12.9,17.9,4,3,17]
      propeller: true
    reactor:
      section_segments: 9
      offset:
        x: 20
        y: 45
        z: -55
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-10,-10,0,3,1,4,4,4,4]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,15,15,14,13,13,10,9,0]
      height: [0,15,15,14,13,13,10,9,0]
      propeller: false
      texture: [4,4,12,17,4,12.9,17,17]
      vertical: true
      angle: 0
    turbine:
      section_segments: 8
      offset:
        x: 50
        y: 75
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-75,-65,-70,-65,-50,-30,-10,10,15,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,6,10,15,15,15,15,15,10,0]
      height: [0,6,10,15,15,15,15,15,10,0]
      propeller: true
      texture: [13,17,3,4,3,3,4,12,17]
      vertical: false
      angle: 0
    cannons:
      section_segments: 12
      offset:
        x: 75
        y: 10
        z: -12
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-60,-75,-60,-60,-60,-45,-45,-45,-20,0,20,50,85,85]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5,8,7,6,6,7,8,10,10,15,15,10,0]
      height: [0,5,8,7,6,6,7,8,10,10,15,15,10,0]
      angle: 0
      laser:
        damage: [6,9]
        rate: 4
        type: 1
        speed: [160,170]
        number: 1
        angle: 0
        error: 6
      propeller: false
      texture: [13,4,18.9,17,13,17,15.9,3,63,18,10,4,18]
    cannons2:
      section_segments: 12
      offset:
        x: 0
        y: -60
        z: -25
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-60,-75,-60,-60,-60,-45,-45,-45,-20,0,20,50,85,85]
        z: [0,0,0,0,0,0,0,0,0,0,5,10,10,10]
      width: [0,5,8,6,5,5,6,8,10,10,15,15,10,0]
      height: [0,5,8,6,5,5,6,8,10,10,15,15,10,0]
      angle: 0
      laser:
        damage: [34,55]
        rate: 1
        type: 2
        speed: [170,200]
        number: 1
        angle: 0
        error: 0
        recoil: 70
      propeller: false
      texture: [13,4,18.9,17,3,17,15.9,3,63,4,10,4,18]
  wings:
    main:
      offset:
        x: 20
        y: 45
        z: 0
      length: [30,20,20,0,20]
      width: [70,70,70,50,80,70]
      texture: [4,10,18,13,63]
      angle: [0,0,0,0,0]
      position: [10,0,10,0,-10,-30]
      doubleside: 1
      bump:
        position: -10
        size: 15
    main2:
      offset:
        x: 20
        y: 44
        z: 0
      length: [30,20,20,0,20]
      width: [70,70,70,50,80,70]
      texture: [13,11,18,13,4]
      angle: [0,0,0,0,0]
      position: [10,0,8,0,-10,-30]
      doubleside: 1
      bump:
        position: -10
        size: 14
    winglets:
      length: [10,10]
      width: [30,30,20]
      angle: [0,30]
      position: [0,0,20]
      texture: [4,63]
      bump:
        position: 10
        size: 30
      offset:
        x: 30
        y: 60
        z: 30
