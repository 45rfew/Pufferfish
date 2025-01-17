return model =
  name: 'Lunatic Phaser'
  level: 7
  model: 4
  size: 2.3
  specs:
    shield:
      capacity: [725,725]
      reload: [13,13]
    generator:
      capacity: [550,550]
      reload: [80,80]
    ship:
      mass: 620
      speed: [110,110]
      rotation: [35,35]
      acceleration: [70,70]
  bodies:
    main:
      section_segments: 12
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-175,-165,-155,-140,-80,-20,30,70,100,100,100,120,120,120,130,145,130]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,10,15,18,25,25,30,30,30,34,35,35,34,30,30,25,0]
      height: [0,10,15,18,25,28,32,30,30,34,35,35,34,30,30,25,0]
      texture: [3,4,63,4,2,4,63,3,18,17,4,17,18,4,3,17]
      propeller: true
    main2:
      section_segments: 8
      offset:
        x: 23
        y: 0
        z: 0
      position:
        x: [-3,-3.5,0,0,0,-6,-6]
        y: [-100,-99,-78,-50,30,100,100]
        z: [0,0,0,0,0,0,0]
      width: [0,5,14,18,26,18,0]
      height: [0,7,12,18,23,13,0]
      texture: [4,4,3,11,8,17]
      propeller: false
    main3:
      section_segments: 8
      offset:
        x: 24
        y: 0
        z: 0
      position:
        x: [-3,-3.5,0,0,0,-6,-6]
        y: [-100,-99,-78,-50,30,100,100]
        z: [0,0,0,0,0,0,0]
      width: [0,4,14,18,26,18,0]
      height: [0,5,5,5,5,5,0]
      texture: [17,17,17,17,17,17]
      propeller: false
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: -155
        z: 15
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-7,0,15,40,75,105]
        z: [-15,-4,-2,0,-1,0]
      width: [0,8,12,14,18,10]
      height: [0,4,12,14,12,10]
      texture: [4,9,9,4,3]
      propeller: false
    reactor:
      section_segments: 6
      offset:
        x: 0
        y: 80
        z: -50
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-15,-15,0,3,3,3,3,12,14,14,14,12]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,30,30,28,27,20,19,19,18,17,10,0]
      height: [0,30,30,28,27,20,19,19,18,17,10,0]
      propeller: false
      texture: [3.9,3.9,11.9,16.9,17.9,16.9,11.9,3.9,16.9,17.9,16.9]
      vertical: true
      angle: 0
    reactor2:
      section_segments: [45,135,225,315]
      offset:
        x: 80
        y: 35
        z: -60
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-15,-15,0,3,3,3,3,12,14,14,14,12]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,30,30,28,24,20,19,19,18,17,10,0]
      height: [0,60,60,60,55,20,19,19,18,17,10,0]
      propeller: false
      texture: [4,4,12,17,18,17,12,4,17,4,13]
      vertical: true
      angle: 20
    Main_tubes:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 35
        z: 27
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-120,-80,3,27,52,52,67,62,63]
        z: [-4.3,0,2,0,0,0,0,0,-2,0]
      width: [5,5,5,5,5,5,5,5,5]
      height: [5,5,5,5,5,5,5,5,5]
      texture: [8,13,4,8,4,4,3,8]
    Main_tubes2:
      section_segments: [45,135,225,315]
      offset:
        x: 1
        y: 35
        z: 26
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-120,-80,3,27,52,52,67,62,63]
        z: [-4,0,0,0,0,0,0,0,0,0]
      width: [5,5,5,5,5,5,5,5,5]
      height: [5,5,5,5,5,5,5,5,5]
      texture: [17]
    Main_tubes3:
      section_segments: [45,135,225,315]
      offset:
        x: 4
        y: 35
        z: 25.7
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-90,-50,3,27,52,52,67,62,63]
        z: [-12,0,2,0,0,-1,-1,0,0,0]
      width: [5,5,5,5,5,5,5,5,5]
      height: [5,5,5,5,5,5,5,5,5]
      texture: [4,9.96,4]
    Main_tubes4:
      section_segments: [45,135,225,315]
      offset:
        x: 1
        y: -10
        z: 28.2
      position:
        x: [0,12,12,12,5,5,0,0,0,0]
        y: [-90,-50,3,27,52,52,67,62,63]
        z: [-13,-12,-9,-5,-1,-1,-1,-2,-7,0]
      width: [5,5,5,5,5,5,5,5,5]
      height: [5,5,5,5,5,5,5,5,5]
      texture: [3,4,18.2,4]
    Main_tubes5:
      section_segments: 6
      offset:
        x: 29
        y: -40
        z: 0
      position:
        x: [-15,-15,-3,-7,-7,-6,-4,-4,-5,-12,0]
        y: [-110,-110,-50,3,27,52,52,67,72,113]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5,5,5,5,5,5,5,5,5]
      height: [0,5,5,5,5,5,5,5,5,5]
      texture: [18,4,4,4,8,4,4,3,8]
    Main_tubes6:
      section_segments: 8
      offset:
        x: 28
        y: 18
        z: 23
      position:
        x: [-15,-12,-12,-12,-12,-12,-15,-15,-15,-15]
        y: [-90,-50,3,27,52,52,66,67,87]
        z: [-8,0,0,0,0,0,0,0,0,0]
      width: [5,5,5,5,5,5,5,5,5]
      height: [5,5,5,5,5,5,5,5,5]
      texture: [4,63,4,3,4]
    Body_ring:
      section_segments: 10
      offset:
        x: 10
        y: 90
        z: 5
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
        x: 7
        y: 30
        z: 7.5
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-11,-8,-6,-4,-4,4,4,6,6,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,22,24,24,24,24,24,24,22,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [17.93,4,4,4,13,17,17,18]
    Body_ring3:
      section_segments: 10
      offset:
        x: 0
        y: -30
        z: -5
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-11,-8,-6,-4,-4,4,4,6,6,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,32,34,34,34,34,34,34,32,0]
      height: [0,32,34,34,34,34,34,34,32,0]
      texture: [4,17,15.1,4,4,15.1,17,18]
      propeller: false
    Body_ring4:
      section_segments: 10
      offset:
        x: 0
        y: 30
        z: 40
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-11,-8,-6,-4,-4,4,4,6,6,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,32,34,34,34,34,34,34,32,0]
      height: [0,32,34,34,34,34,34,34,32,0]
      texture: [4,17,15.1,4,4,15.1,17,18]
      propeller: false
    Body_ring5:
      section_segments: 10
      offset:
        x: 5
        y: 50
        z: 40
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-11,-8,-6,-4,-4,4,4,6,6,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,32,34,34,34,34,34,34,32,0]
      height: [0,32,34,34,34,34,34,34,32,0]
      texture: [4,17,15.1,4,4,15.1,17,18]
      propeller: false
    Body_ring6:
      section_segments: 10
      offset:
        x: 5
        y: 70
        z: 45
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-11,-8,-6,-4,-4,4,4,6,6,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,32,34,34,34,34,34,34,32,0]
      height: [0,32,34,34,34,34,34,34,32,0]
      texture: [4,17,15.1,4,4,15.1,17,18]
      propeller: false
    ring:
      section_segments: 15
      offset:
        x: 5
        y: 50
        z: 20
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-4,-4,-2,-2,-2,2,2,2,4,4]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,16,16,18,18,18,18,16,16,0]
      height: [0,16,16,18,18,18,18,16,16,0]
      texture: [4,16.9,4,16.9,4,16.9,16.9,16.9,4]
      propeller: false
      angle: 0
      vertical: true
    ring2:
      section_segments: 15
      offset:
        x: 0
        y: -25
        z: 40
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-4,-4,-2,-2,-2,2,2,2,4,4]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,16,16,18,18,18,18,16,16,0]
      height: [0,16,16,18,18,18,18,16,16,0]
      texture: [4,16.9,4,16.9,4,16.9,16.9,16.9,4]
      propeller: false
      angle: 90
    ring3:
      section_segments: 15
      offset:
        x: 0
        y: -25
        z: 60
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-4,-4,-2,-2,-2,2,2,2,4,4]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,16,16,18,18,18,18,16,16,0]
      height: [0,16,16,18,18,18,18,16,16,0]
      texture: [4,16.9,4,16.9,4,16.9,16.9,16.9,4]
      propeller: false
      angle: 90
    ring4:
      section_segments: 15
      offset:
        x: 0
        y: -45
        z: 50
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-2,-2,-2,-2,-2,2,2,2,2,2]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,16,16,18,18,18,18,16,16,10]
      height: [10,16,16,18,18,18,18,16,16,10]
      texture: [16.9]
      propeller: false
    ring5:
      section_segments: 15
      offset:
        x: 0
        y: -55
        z: 50
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-2,-2,-2,-2,-2,2,2,2,2,2]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [8,14,14,16,16,16,16,14,14,8]
      height: [8,14,14,16,16,16,16,14,14,8]
      texture: [16.9]
      propeller: false
    ring6:
      section_segments: 15
      offset:
        x: 0
        y: -65
        z: 50
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-2,-2,-2,-2,-2,2,2,2,2,2]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [6,12,12,14,14,14,14,12,12,6]
      height: [6,12,12,14,14,14,14,12,12,6]
      texture: [16.9]
      propeller: false
    ring7:
      section_segments: 15
      offset:
        x: 0
        y: -75
        z: 50
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-2,-2,-2,-2,-2,2,2,2,2,2]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [4,10,10,12,12,12,12,10,10,4]
      height: [4,10,10,12,12,12,12,10,10,4]
      texture: [16.9]
      propeller: false
    tesla_cannon:
      section_segments: 12
      offset:
        x: 0
        y: 60
        z: 51
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-170,-160,-140,-120,-120,-90,-90,-70,-25,-20,0,20,50,65,65]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [1,3,3,4,4,8,20,25,25,25,30,30,30,20,0]
      height: [1,3,3,4,4,8,20,25,25,25,30,30,30,20,0]
      angle: 0
      laser:
        damage: [5,5]
        rate: 1
        type: 2
        speed: [220,300]
        recoil: 8
        number: 50
        error: 0
        angle: 0.1
      texture: [3,17,13,17,4,18,4,12,4,18,3,63,4,18]
    tesla_cannon_part:
      section_segments: 8
      offset:
        x: 0
        y: 60
        z: 51
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-170,-160,-140,-120,-120,-89,-89,-70,-25,-20,0,20,50,65,64]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [1,3,3,4,4,8,20,25,25,25,30,30,30,20,0]
      height: [1,3,3,4,4,8,20,25,25,25,30,30,30,20,0]
      angle: 0
      texture: 17
    tesla_cannon_part2:
      section_segments: 8
      offset:
        x: 5
        y: 60
        z: 51
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-89,-89,-89,-89,-89,-89,-89,-70,-25,-20,0,20,50,65,64]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [1,3,3,4,4,8,20,25,25,25,30,30,30,20,0]
      height: [1,3,3,4,4,4,14,14,14,14,14,14,14,14,0]
      angle: 0
      texture: [4,4,4,4,4,3,3,4,18,13,4,3,4]
    cannons:
      section_segments: 6
      offset:
        x: 123
        y: 90
        z: -10
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-130,-135,-110,-110,-90,-80,-70,-70,-65,-60,-55,-45,-45,-45,-20,0,20,30,45,45]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,6,7,5,5,7,7,7,7,7,7,7,7,8,10,10,10,10,8,0]
      height: [0,6,7,5,5,7,7,7,7,7,7,7,7,8,15,15,15,15,8,0]
      angle: 0
      laser:
        damage: [20,20]
        rate: 2.5
        type: 1
        speed: [170,170]
        number: 1
        angle: 0
        error: 0
      propeller: false
      texture: [16.9,4,18,13,4,4,17,63,4,13,4,18,17,4,13,4,63,4,18]
    cannons2:
      section_segments: 6
      offset:
        x: 123
        y: 90
        z: 15
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-130,-135,-110,-110,-90,-80,-70,-70,-65,-60,-55,-45,-45,-45,-20,0,20,30,45,45]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,6,7,5,5,7,7,7,7,7,7,7,7,8,10,10,10,10,8,0]
      height: [0,6,7,5,5,7,7,7,7,7,7,7,7,8,15,15,15,15,8,0]
      angle: 0
      laser:
        damage: [20,20]
        rate: 2.5
        type: 1
        speed: [170,170]
        number: 1
        angle: 0
        error: 0
      propeller: false
      texture: [16.9,4,18,13,4,4,17,63,4,13,4,18,17,4,13,4,63,4,18]
    cannon_part:
      section_segments: 8
      offset:
        x: 123
        y: 70
        z: 5
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-44,-44,-44,-20,0,20,50,64,64]
        z: [0,0,0,0,0,0,0,0,0]
      width: [5,7,8,10,10,10,10,8,0]
      height: [0,17,17,17,17,17,17,17,0]
      texture: [4,4,4,18,3,18,4,18]
      angle: 0
    cannons3:
      section_segments: 6
      offset:
        x: 53
        y: 70
        z: -10
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-130,-135,-110,-110,-90,-80,-70,-70,-65,-60,-55,-45,-45,-45,-20,0,20,30,45,45]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,6,7,5,5,7,7,7,7,7,7,7,7,8,10,10,10,10,8,0]
      height: [0,6,7,5,5,7,7,7,7,7,7,7,7,8,15,15,15,15,8,0]
      angle: 0
      laser:
        damage: [20,20]
        rate: 2.5
        type: 1
        speed: [170,170]
        number: 1
        angle: 0
        error: 0
      propeller: false
      texture: [16.9,4,18,13,4,4,17,63,4,13,4,18,17,4,13,4,63,4,18]
    cannons4:
      section_segments: 6
      offset:
        x: 53
        y: 70
        z: 15
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-130,-135,-110,-110,-90,-80,-70,-70,-65,-60,-55,-45,-45,-45,-20,0,20,30,45,45]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,6,7,5,5,7,7,7,7,7,7,7,7,8,10,10,10,10,8,0]
      height: [0,6,7,5,5,7,7,7,7,7,7,7,7,8,15,15,15,15,8,0]
      angle: 0
      laser:
        damage: [20,20]
        rate: 2.5
        type: 1
        speed: [170,170]
        number: 1
        angle: 0
        error: 0
      propeller: false
      texture: [16.9,4,18,13,4,4,17,63,4,13,4,18,17,4,13,4,63,4,18]
    cannon_part2:
      section_segments: 8
      offset:
        x: 53
        y: 50
        z: 5
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-44,-44,-44,-20,0,20,50,64,64]
        z: [0,0,0,0,0,0,0,0,0]
      width: [5,7,8,10,10,10,10,8,0]
      height: [0,17,17,17,17,17,17,17,0]
      texture: [4,4,4,18,3,18,4,18]
      angle: 0
    propulsor:
      section_segments: 10
      offset:
        x: 36
        y: 15
        z: 29
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-10,-10,-15,-15,0,10,20,45,50,65,70,80,75]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,4,10,11,13,13,13,13,13,13,12,8,0]
      height: [0,4,10,11,13,13,13,13,13,13,12,8,0]
      texture: [18,4,17,3,4,13,18,63,4,3,8,17]
      propeller: true
    propulsor2:
      section_segments: 10
      offset:
        x: 70
        y: 45
        z: 14
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-10,-10,-15,-15,0,10,20,45,50,65,70,80,75]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,4,10,11,13,13,13,13,13,13,12,8,0]
      height: [0,4,10,11,13,13,13,13,13,13,12,8,0]
      texture: [18,4,17,3,4,13,18,63,4,3,8,17]
      propeller: true
    propulsor3:
      section_segments: 10
      offset:
        x: 110
        y: 55
        z: 1
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-10,-10,-15,-15,0,10,20,45,50,65,70,80,75]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,4,10,11,13,13,13,13,13,13,12,8,0]
      height: [0,4,10,11,13,13,13,13,13,13,12,8,0]
      texture: [18,4,17,3,4,13,18,63,4,3,8,17]
      propeller: true
  wings:
    main:
      offset:
        x: 10
        y: 40
        z: 20
      length: [40,0,80,0,20]
      width: [80,80,130,130,90,90]
      texture: [18,3,18,17,63]
      angle: [20,-20,-20,-20,-20]
      position: [0,10,10,40,40,60]
      doubleside: 1
      bump:
        position: -10
        size: 10
    main2:
      offset:
        x: 10
        y: 41
        z: 20
      length: [40,0,80,0,20]
      width: [80,80,130,130,90,90]
      texture: [18,3,17.4,17,4]
      angle: [20,-20,-20,-20,-20]
      position: [0,10,10,40,40,60]
      doubleside: 1
      bump:
        position: -10
        size: 9