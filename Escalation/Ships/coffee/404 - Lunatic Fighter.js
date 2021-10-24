return model =
  name: 'Lunatic Fighter'
  level: 4
  model: 4
  size: 1.55
  specs:
    shield:
      capacity: [245,295]
      reload: [5,10]
    generator:
      capacity: [180,230]
      reload: [45,60]
    ship:
      mass: 290
      speed: [50,75]
      rotation: [50,65]
      acceleration: [70,90]
  bodies:
    main:
      section_segments: 12
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-165,-155,-140,-132,-130,-110,-100,-100,-100,-80,-80,-80,-50,0,30,70,115,105]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,10,17,18,19,22,22,23,23,23,25,25,25,25,30,30,25,0]
      height: [0,10,17,18,19,22,22,23,23,23,23,23,24,25,30,30,25,0]
      texture: [4,3,4,2,4,63,17,15.9,13,15.9,17,4,63,4,18,4,17]
      propeller: true
    cockpit:
      section_segments: 6
      offset:
        x: 0
        y: -125
        z: 14
      position:
        x: [0,0,0,0,0,0,0]
        y: [-20,-15,0,30,30]
        z: [0,-4,2,3,4]
      width: [5,7,10,10,0]
      height: [0,10,10,10,0]
      texture: [4,9,9]
      propeller: false
    Barrel_Cannon:
      section_segments: 8
      offset:
        x: 55
        y: 40
        z: -10
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-100,-120,-120,-120,-90,-90,-70,-58,-58,-58,-48,-48,-47,-45,-20,0,20,50,52,63,63,63]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,10,14,14,14,23,25,25,20,18,18,20,24,25,25,25,25,25,24,20,18,10]
      height: [0,10,14,14,14,23,25,25,20,18,18,20,24,25,25,25,25,25,24,20,18,10]
      angle: 0
      laser:
        damage: [30,45]
        rate: 1
        type: 1
        speed: [160,190]
        number: 1
        angle: 0
        error: 0
        recoil: 50
      propeller: true
      texture: [17,4,17,13,15.9,63,4,4,17,13,17,4,17,4,63,18,4,17,4,17,18]
    side_cannons:
      section_segments: 11
      offset:
        x: 98
        y: 60
        z: -20
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-125,-130,-115,-103,-103,-80,-65,-65,-60,-60,-40,-40,-35,-35,-20,0,20,30,30,30]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,10,10,13,15,15,15,10,10,15,15,10,10,15,15,15,15,10,10,0]
      height: [0,10,10,13,15,15,15,10,10,15,15,10,10,15,15,15,15,10,10,0]
      angle: 0
      laser:
        damage: [15,19]
        rate: 2.5
        type: 1
        speed: [130,160]
        number: 1
        angle: 0
        error: 0
      propeller: false
      texture: [16.9,3,4,16.9,10.235,2.9,17.9,12.9,17.9,63,17.9,12.9,17.9,3.9,63,12.9,4,4,18]
    reactor:
      section_segments: 8
      offset:
        x: 55
        y: 22
        z: -60
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-15,-15,0,3,2,0,2,2]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,20,20,15,13,10,10,0]
      height: [0,20,20,15,13,10,10,0]
      propeller: false
      texture: [3.9,3.9,12.9,17,11.7,3.9,17]
      vertical: true
      angle: 0
    Body_ring:
      section_segments: 10
      offset:
        x: 0
        y: 97
        z: 6
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-11,-8,-6,-4,-4,4,4,6,6,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,22,24,24,24,24,24,24,22,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [17.93,4,4,4,13,17,17,18]
    Body_ring2:
      section_segments: 10
      offset:
        x: 0
        y: 70
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-11,-8,-6,-4,-4,4,4,6,6,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,22,24,24,24,24,24,24,22,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [17.93,4,4,4,13,17,17,18]
    Body_ring3:
      section_segments: 16
      offset:
        x: 55
        y: 20
        z: -10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-21,-18,-16,-14,-14,14,14,16,18,18]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,22,24,24,24,24,24,24,22,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [17.93,4,4,4,13,17,4,3]
    Body_ring4:
      section_segments: 6
      offset:
        x: 45
        y: 20
        z: -10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-21,-18,-16,-14,-14,14,14,16,18,18]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,22,24,24,24,24,24,24,22,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [17.93,4,4,4,8,17,4,3]
    Body_ring5:
      section_segments: 6
      offset:
        x: 45
        y: 80
        z: -10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-21,-18,-16,-14,-14,14,14,16,18,18]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,22,24,24,24,24,24,24,22,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [17.93,4,4,4,8,17,4,3]
    Body_ring6:
      section_segments: 6
      offset:
        x: 65
        y: 20
        z: -10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-21,-18,-16,-14,-14,14,14,16,18,18]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,22,24,24,24,24,24,24,22,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [17.93,4,4,4,8,17,4,3]
    Body_ring7:
      section_segments: 9
      offset:
        x: 0
        y: -40
        z: 2
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-21,-18,-16,-14,-14,14,14,16,18,18]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,22,24,24,24,24,24,24,22,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [17.93,4,4,4,10,17,4,3]
    ring:
      section_segments: 9
      offset:
        x: 85
        y: 5
        z: -10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-2,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 17 ]
      propeller: false
    ring2:
      section_segments: 9
      offset:
        x: 85
        y: 15
        z: -10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-2,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 17 ]
      propeller: false
    ring3:
      section_segments: 9
      offset:
        x: 85
        y: 25
        z: -10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-2,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 17 ]
      propeller: false
    ring4:
      section_segments: 9
      offset:
        x: 85
        y: 35
        z: -10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-2,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 17 ]
      propeller: false
    ring6:
      section_segments: 9
      offset:
        x: 55
        y: -25
        z: 3
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-2,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 17 ]
      propeller: false
    ring7:
      section_segments: 6
      offset:
        x: 55
        y: 5
        z: 4
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-2,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [22,22,22,24,24,24,24,22,22,22]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 17 ]
      propeller: false
    tubes:
      section_segments: 6
      offset:
        x: 28
        y: -60
        z: 0
      position:
        x: [-13,-13,-4,-3,0,0,0,-10,-10,-10]
        y: [-15,-15,23,27,62,67,97,163,163]
        z: [0,0,0,0,0,0,6,7,8,8]
      width: [0,7,7,7,7,7,7,7,0]
      height: [0,7,7,7,7,7,7,7,0]
      texture: [4,8,17,12,17,18,12.9,17]
      propeller: false
    tubes2:
      section_segments: 6
      offset:
        x: 70
        y: -66
        z: -10
      position:
        x: [-8,-8,0,0,0,0,0,0,0,0]
        y: [-13,-13,23,27,62,67,97,143,155]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,7,7,7,7,7,7,7,7]
      height: [0,7,7,7,7,7,7,7,7]
      texture: [4,8,17,18,17,18,13,63]
      propeller: false
    tubes3:
      section_segments: 6
      offset:
        x: 40
        y: -66
        z: -10
      position:
        x: [8,8,0,0,0,0,0,0,0,0]
        y: [-13,-13,23,27,62,67,97,143,155]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,7,7,7,7,7,7,7,7]
      height: [0,7,7,7,7,7,7,7,7]
      texture: [4,8,17,18,17,18,13,63]
      propeller: false
  wings:
    main:
      offset:
        x: 0
        y: 45
        z: 0
      length: [110,20,30]
      width: [90,70,90,50]
      texture: [4,4,3]
      angle: [-20,0,0]
      position: [10,-20,-20,20]
      doubleside: 1
      bump:
        position: -10
        size: 10
    main2:
      offset:
        x: 0
        y: 45
        z: 0
      length: [80,30,31,0,20]
      width: [90,70,70,50,70,60]
      texture: [3,4,63,13,4]
      angle: [-20,-20,0,0,0]
      position: [10,-20,0,0,0,20]
      doubleside: 1
      bump:
        position: -10
        size: 10
    main3:
      offset:
        x: 0
        y: 20
        z: 0
      length: [80,30,31,0,20]
      width: [90,70,70,50,70,60]
      texture: [4,4,63,13,4]
      angle: [-20,-20,0,-20,-20]
      position: [10,-20,0,0,0,20]
      doubleside: 1
      bump:
        position: -10
        size: 10
    main4:
      offset:
        x: 0
        y: -65
        z: 0
      length: [10,10,5,0,20]
      width: [90,70,70,50,70,60]
      texture: [4,4,63,13,4]
      angle: [0,0,0,0,0]
      position: [10,-20,0,0,0,0]
      bump:
        position: -10
        size: 10
    main5:
      offset:
        x: 0
        y: -95
        z: 0
      length: [7,10,5,0,20]
      width: [90,70,70,50,70,60]
      texture: [4,4,63,13,18]
      angle: [0,0,0,0,0]
      position: [10,-20,0,0,0,20]
      bump:
        position: -10
        size: 8
