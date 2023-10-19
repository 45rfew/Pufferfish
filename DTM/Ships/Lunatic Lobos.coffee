return model =
  name: 'Lunatic Lobos'
  level: 7
  model: 3
  size: 4
  specs:
    shield:
      capacity: [1125,1125]
      reload: [10,10]
    generator:
      capacity: [100,100]
      reload: [400,400]
    ship:
      mass: 800
      speed: [55,55]
      rotation: [10,10]
      acceleration: [90,90]
  bodies:
    main:
      section_segments: 12
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-165,-170,-160,-140,-140,-120,-120,-90,-50,0,30,70,110,100]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,10,20,25,30,30,35,30,35,35,40,40,35,0]
      height: [0,8,15,20,20,20,25,30,30,35,40,40,25,0]
      texture: [8,3,4,18,63,18,18,4,3,4,63,18,18]
      propeller: false
    main2:
      section_segments: 8
      offset:
        x: 23
        y: 0
        z: 0
      position:
        x: [-3,-3.5,0,0,0,0,0]
        y: [-100,-99,-78,-50,30,100,80]
        z: [0,0,0,0,0,0,0]
      width: [0,4,14,18,26,18,0]
      height: [0,2,12,18,23,13,0]
      texture: [4,4,3,11,8,17]
      propeller: false
    main3:
      section_segments: 8
      offset:
        x: 70
        y: 0
        z: 10
      position:
        x: [0,0,0,0,0,0,0]
        y: [-78,-78,-78,-50,30,100,80]
        z: [0,0,0,0,0,0,0]
      width: [0,8,10,16,21,18,0]
      height: [0,8,10,16,21,13,0]
      texture: [4,17,17,18,8,17]
      propeller: false
    Cabin:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 50
        z: 34
      position:
        x: [70,70,70,70,70,70,70,70,70,70,70]
        y: [-18,-18,-18,-18,-16,16,18,18,18,18,18]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,10,26,26,26,26,26,26,26,10,0]
      height: [0,10,14,14,14,14,14,14,12,10,0]
      texture: [4,18,4,4,18,4,17,4,18,4]
      angle: 0
    Cabin_part:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 50
        z: 30
      position:
        x: [64,64,64,64,64,64,64,64,64,64,64]
        y: [-14,-14,-14,-14,-12,12,14,14,14,14,14]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,10,20,20,20,20,20,20,20,10,0]
      height: [0,10,12,12,12,12,12,12,10,10,0]
      texture: [4,18,4,3,4,3,17,4,18,4]
      angle: 0
    Cabin_part2:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 57
        z: 38
      position:
        x: [68,68,68,68,68,68,68,68,68,68,68]
        y: [-10,-10,-10,-10,-6,10,10,10,10,10,10]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,10,20,20,20,20,20,20,20,10,0]
      height: [0,10,12,12,12,12,12,12,10,10,0]
      texture: [4,18,4,3,4,3,17,4,18,4]
      angle: 0
    Cabin_part3:
      section_segments: 8
      offset:
        x: 0
        y: 50
        z: -55
      position:
        x: [60,60,60,60,60,60,60]
        y: [-25,-25,6,10,10]
        z: [0,0,0,0,0]
      width: [0,2,2,2,0]
      height: [0,2,2,2,0]
      propeller: false
      texture: [4,4,17,13]
      vertical: true
      angle: 0
    Cabin_part4:
      section_segments: 8
      offset:
        x: 0
        y: 45
        z: -55
      position:
        x: [75,75,75,75,75,75,75]
        y: [-25,-25,6,10,10]
        z: [0,0,0,0,0]
      width: [0,2,2,2,0]
      height: [0,2,2,2,0]
      propeller: false
      texture: [4,4,17,13]
      vertical: true
      angle: 0
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: -159
        z: 19
      position:
        x: [0,0,0,0,0,0,0]
        y: [-7,0,15,40,75]
        z: [-15,-8,-2,0,-1]
      width: [0,8,12,14,18]
      height: [0,4,12,14,12]
      texture: [4,9,9,4]
      propeller: false
    Connectors:
      section_segments: 8
      offset:
        x: 70
        y: 0
        z: -40
      position:
        x: [0,0,0,0,0,0,0]
        y: [-45,-45,0,3,-4]
        z: [0,0,0,0,0]
      width: [0,20,20,15,0]
      height: [0,20,20,15,0]
      propeller: false
      texture: [4,13,12,17]
      vertical: true
      angle: 90
    Connectors2:
      section_segments: 12
      offset:
        x: 70
        y: -20
        z: -40
      position:
        x: [0,0,0,0,0,0,0]
        y: [-25,-25,0,3,3]
        z: [0,0,0,0,0]
      width: [0,20,20,15,0]
      height: [0,20,20,15,0]
      propeller: false
      texture: [4,4,11,17.99]
      vertical: true
      angle: 180
    reactor:
      section_segments: 12
      offset:
        x: 0
        y: 40
        z: -50
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-15,-15,0,3,3,3,3,12,14,14,14,12]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,30,30,28,27,20,19,19,18,17,10,0]
      height: [0,30,30,28,27,20,19,19,18,17,10,0]
      propeller: false
      texture: [4,4,12,17,18,17,12,4,17,18,17]
      vertical: true
      angle: 0
    Main_tubes:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: -15
        z: 40
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-90,-50,3,27,52,52,67,62,63]
        z: [-13,-12,-9,-5,-1,-1,-1,-2,-7,0]
      width: [5,5,5,5,5,5,5,5,5]
      height: [5,5,5,5,5,5,5,5,5]
      texture: [8,13,4,8,4,4,3,8]
    Main_tubes2:
      section_segments: [45,135,225,315]
      offset:
        x: 1
        y: -15
        z: 39
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-90,-50,3,27,52,52,67,62,63]
        z: [-13,-12,-9,-5,-1,-1,-1,-2,-7,0]
      width: [5,5,5,5,5,5,5,5,5]
      height: [5,5,5,5,5,5,5,5,5]
      texture: [17]
    Main_tubes3:
      section_segments: [45,135,225,315]
      offset:
        x: 4
        y: -15
        z: 38.9
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-90,-50,3,27,52,52,67,62,63]
        z: [-13,-12,-9,-5,-1,-1,-1,-2,-7,0]
      width: [5,5,5,5,5,5,5,5,5]
      height: [5,5,5,5,5,5,5,5,5]
      texture: [4,9.96,4]
    Main_tubes4:
      section_segments: [45,135,225,315]
      offset:
        x: 1
        y: -15
        z: 38.8
      position:
        x: [0,10,10,10,0,0,0,0,0,0]
        y: [-90,-50,3,27,52,52,67,62,63]
        z: [-13,-12,-9,-5,-1,-1,-1,-2,-7,0]
      width: [5,5,5,5,5,5,5,5,5]
      height: [5,5,5,5,5,5,5,5,5]
      texture: [3,12,18.2,3]
    Main_tubes5:
      section_segments: [45,135,225,315]
      offset:
        x: 45
        y: -1
        z: 0
      position:
        x: [-16,-3,-7,-7,-6,-4,-4,-5,-12,0]
        y: [-110,-50,3,27,52,52,67,72,113]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [5,5,5,5,5,5,5,5,5]
      height: [5,5,5,5,5,5,5,5,5]
      texture: [2,3,4,8,4,4,3,8]
    Main_tubes6:
      section_segments: 8
      offset:
        x: 28
        y: 38
        z: 23
      position:
        x: [-9,-7,0,0,0,0,-5,-5,-5,-5]
        y: [-90,-50,3,27,52,52,66,67,67]
        z: [-10,0,0,0,0,0,0,0,0,0]
      width: [5,5,5,5,5,5,5,5,5]
      height: [5,5,5,5,5,5,5,5,5]
      texture: [4,63,4,3,4]
    tubes:
      section_segments: [45,135,225,315]
      offset:
        x: 70
        y: 5
        z: 40
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [5,0,23,27,52,52,67,72,103]
        z: [-5,-5,-2,-2,-2,-2,-1,2,5,0]
      width: [0,5,5,5,5,5,5,5,5]
      height: [0,5,5,5,5,5,5,5,5]
      texture: [12,13,4,8,4,4,3,8]
    tubes2:
      section_segments: [45,135,225,315]
      offset:
        x: 70
        y: 5
        z: -20
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [5,0,23,27,52,52,67,72,103]
        z: [5,5,2,2,2,2,1,-2,-5,0]
      width: [0,5,5,5,5,5,5,5,5]
      height: [0,5,5,5,5,5,5,5,5]
      texture: [12,13,4,8,4,4,3,8]
    tubes3:
      section_segments: [45,135,225,315]
      offset:
        x: 98
        y: 5
        z: 10
      position:
        x: [-5,-5,-2,-2,-2,-2,-1,2,5,0]
        y: [5,0,23,27,52,52,67,72,103]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,5,5,5,5,5,5,5,5]
      height: [0,5,5,5,5,5,5,5,5]
      texture: [12,13,4,8,4,4,3,8]
    tubes4:
      section_segments: [45,135,225,315]
      offset:
        x: 42
        y: 5
        z: 10
      position:
        x: [5,5,2,2,2,2,1,-2,-5,0]
        y: [5,0,23,27,52,52,67,72,103]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,5,5,5,5,5,5,5,5]
      height: [0,5,5,5,5,5,5,5,5]
      texture: [12,13,4,8,4,4,3,8]
    cannon_Barrel:
      section_segments: 12
      offset:
        x: 70
        y: 40
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-45,-45,-20,0,20,40,50,40]
        z: [0,0,0,0,0,0,0,0]
      width: [0,20,25,25,30,30,20,0]
      height: [0,20,30,30,30,30,20,0]
      texture: [4,63,4,63,63,4,17]
      angle: 0
      propeller: true
    cannons:
      section_segments: 12
      offset:
        x: 86
        y: -50
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-70,-80,-60,-60,-45,-45,-20,0,20,50,55]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,3,3,1.5,1.5,3,3,3,3,5,0]
      height: [0,3,3,1.5,1.5,3,3,3,3,5,0]
      angle: 0
      laser:
        damage: [10,10]
        rate: 7
        type: 1
        speed: [200,200]
        number: 1
        angle: 0
        error: 0
        recoil: 0
      propeller: false
      texture: [13,4,4,13,4,4,17,4,13,4]
    cannons2:
      section_segments: 12
      offset:
        x: 82
        y: -50
        z: 18
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-70,-80,-60,-60,-45,-45,-20,0,20,50,55]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,3,3,1.5,1.5,3,3,3,3,5,0]
      height: [0,3,3,1.5,1.5,3,3,3,3,5,0]
      angle: 0
      laser:
        damage: [10,10]
        rate: 7
        type: 1
        speed: [200,200]
        number: 1
        angle: 0
        error: 0
        recoil: 0
      propeller: false
      texture: [13,4,4,13,4,4,17,4,13,4]
    cannons3:
      section_segments: 12
      offset:
        x: 74
        y: -50
        z: 23
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-70,-80,-60,-60,-45,-45,-20,0,20,50,55]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,3,3,1.5,1.5,3,3,3,3,5,0]
      height: [0,3,3,1.5,1.5,3,3,3,3,5,0]
      angle: 0
      laser:
        damage: [10,10]
        rate: 7
        type: 1
        speed: [200,200]
        number: 1
        angle: 0
        error: 0
        recoil: 4
      propeller: false
      texture: [13,4,4,13,4,4,17,4,4,4]
    cannons4:
      section_segments: 12
      offset:
        x: 64
        y: -50
        z: 23
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-70,-80,-60,-60,-45,-45,-20,0,20,50,55]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,3,3,1.5,1.5,3,3,3,3,5,0]
      height: [0,3,3,1.5,1.5,3,3,3,3,5,0]
      angle: 0
      laser:
        damage: [10,10]
        rate: 7
        type: 1
        speed: [200,200]
        number: 1
        angle: 0
        error: 0
        recoil: 4
      propeller: false
      texture: [13,4,4,13,4,4,17,4,4,4]
    cannons5:
      section_segments: 12
      offset:
        x: 57
        y: -50
        z: 18
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-70,-80,-60,-60,-45,-45,-20,0,20,50,55]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,3,3,1.5,1.5,3,3,3,3,5,0]
      height: [0,3,3,1.5,1.5,3,3,3,3,5,0]
      angle: 0
      laser:
        damage: [10,10]
        rate: 7
        type: 1
        speed: [200,200]
        number: 1
        angle: 0
        error: 0
        recoil: 4
      propeller: false
      texture: [13,4,4,13,4,4,17,4,13,4]
    cannons6:
      section_segments: 12
      offset:
        x: 54
        y: -50
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-70,-80,-60,-60,-45,-45,-20,0,20,50,55]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,3,3,1.5,1.5,3,3,3,3,5,0]
      height: [0,3,3,1.5,1.5,3,3,3,3,5,0]
      angle: 0
      laser:
        damage: [10,10]
        rate: 7
        type: 1
        speed: [200,200]
        number: 1
        angle: 0
        error: 0
        recoil: 1
      propeller: false
      texture: [13,4,4,13,4,4,17,4,13,4]
    cannons7:
      section_segments: 12
      offset:
        x: 83
        y: -50
        z: 2
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-70,-80,-60,-60,-45,-45,-20,0,20,50,55]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,3,3,1.5,1.5,3,3,3,3,5,0]
      height: [0,3,3,1.5,1.5,3,3,3,3,5,0]
      angle: 0
      laser:
        damage: [10,10]
        rate: 7
        type: 1
        speed: [200,200]
        number: 1
        angle: 0
        error: 0
        recoil: 1
      propeller: false
      texture: [13,4,4,13,4,4,17,4,13,4]
    cannons8:
      section_segments: 12
      offset:
        x: 74
        y: -50
        z: -3
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-70,-80,-60,-60,-45,-45,-20,0,20,50,55]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,3,3,1.5,1.5,3,3,3,3,5,0]
      height: [0,3,3,1.5,1.5,3,3,3,3,5,0]
      angle: 0
      laser:
        damage: [10,10]
        rate: 7
        type: 1
        speed: [200,200]
        number: 1
        angle: 0
        error: 0
        recoil: 4
      propeller: false
      texture: [13,4,4,13,4,4,17,4,4,4]
    cannons9:
      section_segments: 12
      offset:
        x: 64
        y: -50
        z: -3
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-70,-80,-60,-60,-45,-45,-20,0,20,50,55]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,3,3,1.5,1.5,3,3,3,3,5,0]
      height: [0,3,3,1.5,1.5,3,3,3,3,5,0]
      angle: 0
      laser:
        damage: [10,10]
        rate: 7
        type: 1
        speed: [200,200]
        number: 1
        angle: 0
        error: 0
        recoil: 4
      propeller: false
      texture: [13,4,4,13,4,4,17,4,4,4]
    cannons10:
      section_segments: 12
      offset:
        x: 57
        y: -50
        z: 2
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-70,-80,-60,-60,-45,-45,-20,0,20,50,55]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,3,3,1.5,1.5,3,3,3,3,5,0]
      height: [0,3,3,1.5,1.5,3,3,3,3,5,0]
      angle: 0
      laser:
        damage: [10,10]
        rate: 7
        type: 1
        speed: [200,200]
        number: 1
        angle: 0
        error: 0
        recoil: 4
      propeller: false
      texture: [13,4,4,13,4,4,17,4,4,4]
    Body_ring:
      section_segments: 10
      offset:
        x: 0
        y: 90
        z: 15
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
        y: -110
        z: 5
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
        x: 10
        y: 10
        z: 2
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
        x: 25
        y: 59
        z: 15
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-4,-2,-1,-1,-1,1,1,2,2,2]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,14,14,14,14,14,14,12,12]
      height: [12,12,14,14,14,14,14,14,12,12]
      texture: [17]
      propeller: false
    Body_ring5:
      section_segments: 10
      offset:
        x: 25
        y: 49
        z: 15
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-4,-2,-1,-1,-1,1,1,2,2,2]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,14,14,14,14,14,14,12,12]
      height: [12,12,14,14,14,14,14,14,12,12]
      texture: [17]
      propeller: false
    Body_ring6:
      section_segments: 10
      offset:
        x: 18
        y: -120
        z: 3
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-4,-2,-1,-1,-1,1,1,2,2,2]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,14,14,14,14,14,14,12,12]
      height: [12,12,14,14,14,14,14,14,12,12]
      texture: [17]
      propeller: false
    Body_ring7:
      section_segments: 10
      offset:
        x: 18
        y: -130
        z: 3
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-4,-2,-1,-1,-1,1,1,2,2,2]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,14,14,14,14,14,14,12,12]
      height: [12,12,14,14,14,14,14,14,12,12]
      texture: [17]
      propeller: false
    Body_ring8:
      section_segments: 10
      offset:
        x: 15
        y: -139
        z: 3
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-4,-2,-1,-1,-1,1,1,2,2,2]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,14,14,14,14,14,14,12,12]
      height: [12,12,14,14,14,14,14,14,12,12]
      texture: [17]
      propeller: false
    Body_ring9:
      section_segments: 10
      offset:
        x: 10
        y: -20
        z: 8
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-21,-18,-16,-14,-14,4,4,6,6,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,22,24,24,24,24,24,24,22,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [17.93,4,4,4,10,17,17,18]
    Body_ring10:
      section_segments: 10
      offset:
        x: 5
        y: 50
        z: 27
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-6,-8,-6,-4,2,3,4,6,6,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,24,24,24,24,24,24,24,22,0]
      height: [0,24,24,24,24,24,24,24,22,0]
      texture: [17.93,17,13,4,13,5,17,18]
    Body_ring11:
      section_segments: 10
      offset:
        x: 5
        y: 50
        z: 27
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-6,-8,-6,-4,2,3,4,6,6,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,24,24,24,24,24,24,24,22,0]
      height: [0,24,24,24,24,24,24,24,22,0]
      texture: [17.93,17,13,4,13,5,17,18]
      angle: 30
    Body_ring12:
      section_segments: 10
      offset:
        x: 5
        y: 49
        z: 27
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-6,-8,-6,-4,2,3,4,6,6,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,24,24,24,24,24,24,24,22,0]
      height: [0,24,24,24,24,24,24,24,22,0]
      texture: [17.93,17,13,4,13,5,17,18]
      angle: 60
    Body_ring13:
      section_segments: 10
      offset:
        x: 5
        y: 48
        z: 27
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-6,-8,-6,-4,2,3,4,6,6,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,24,24,24,24,24,24,24,22,0]
      height: [0,24,24,24,24,24,24,24,22,0]
      texture: [17.93,17,13,4,13,5,17,18]
      angle: 90
    Body_ring14:
      section_segments: 10
      offset:
        x: 5
        y: 46
        z: 27
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-6,-8,-6,-4,2,3,4,6,6,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,24,24,24,24,24,24,24,22,0]
      height: [0,24,24,24,24,24,24,24,22,0]
      texture: [17.93,17,13,4,13,5,17,18]
      angle: 120
    Body_ring15:
      section_segments: 10
      offset:
        x: 5
        y: 50
        z: 27
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-6,-8,-6,-4,2,3,4,6,6,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,24,24,24,24,24,24,24,22,0]
      height: [0,24,24,24,24,24,24,24,22,0]
      texture: [17.93,17,13,4,13,5,17,18]
      angle: -30
    Body_ring16:
      section_segments: 10
      offset:
        x: 5
        y: 51
        z: 27
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-6,-8,-6,-4,2,3,4,6,6,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,24,24,24,24,24,24,24,22,0]
      height: [0,24,24,24,24,24,24,24,22,0]
      texture: [17.93,17,13,4,13,5,17,18]
      angle: -60
    Body_ring17:
      section_segments: 10
      offset:
        x: 5
        y: 52
        z: 27
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-6,-8,-6,-4,2,3,4,6,6,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,24,24,24,24,24,24,24,22,0]
      height: [0,24,24,24,24,24,24,24,22,0]
      texture: [17.93,17,13,4,13,5,17,18]
      angle: -90
    Body_ring18:
      section_segments: 10
      offset:
        x: 5
        y: 53
        z: 27
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-6,-8,-6,-4,2,3,4,6,6,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,24,24,24,24,24,24,24,22,0]
      height: [0,24,24,24,24,24,24,24,22,0]
      texture: [17.93,17,13,4,13,5,17,18]
      angle: -120
    Propeller_ring:
      section_segments: 10
      offset:
        x: 70
        y: 105
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-11,-8,-6,-4,-4,4,4,6,8,-3]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [30,38,40,40,40,40,40,40,38,18,30]
      height: [30,38,40,40,40,40,40,40,38,18,30]
      texture: [4,2,3,4,4,1,3,4,17]
      propeller: false
    ring:
      section_segments: 10
      offset:
        x: 70
        y: 10
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-11,-8,-6,-4,-4,4,4,6,6,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,28,28,28,28,28,28,28,28,0]
      height: [0,28,28,28,28,28,28,28,28,0]
      texture: [4,17,15.1,4,4,15.1,17,18]
      propeller: false
    ring1:
      section_segments: 10
      offset:
        x: 70
        y: 60
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-11,-8,-6,-4,-4,4,4,6,6,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,32,34,34,34,34,34,34,32,0]
      height: [0,32,34,34,34,34,34,34,32,0]
      texture: [4,17,15.1,4,4,15.1,17,18]
      propeller: false
    ring2:
      section_segments: 10
      offset:
        x: 70
        y: 3
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-11,-8,-6,-4,-4,4,4,6,6,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,22,24,24,24,24,24,24,22,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [17.93,4,13]
      propeller: false
    ring3:
      section_segments: 10
      offset:
        x: 70
        y: -34
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-2,-2,-2,-2,0,2,2,4,4,4]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [14,18,20,20,20,20,20,20,18,14]
      height: [14,18,20,20,20,20,20,20,18,14]
      texture: [12,17,15.1,15.1,17,15.1,15.1,12]
      propeller: false
    ring4:
      section_segments: 10
      offset:
        x: 70
        y: -44
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-2,-2,-2,-2,0,2,2,4,4,4]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [14,18,20,20,20,20,20,20,18,14]
      height: [14,18,20,20,20,20,20,20,18,14]
      texture: [12,17,15.1,15.1,17,15.1,15.1,12]
      propeller: false
    ring5:
      section_segments: 10
      offset:
        x: 70
        y: -54
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-2,-2,-2,-2,0,2,2,4,4,4]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [14,18,20,20,20,20,20,20,18,14]
      height: [14,18,20,20,20,20,20,20,18,14]
      texture: [12,17,15.1,15.1,17,15.1,15.1,12]
      propeller: false
    ring6:
      section_segments: 10
      offset:
        x: 70
        y: -68
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-2,-2,-2,-2,0,2,2,4,4,4]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [14,18,20,20,20,20,20,20,18,14]
      height: [14,18,20,20,20,20,20,20,18,14]
      texture: [12,17,15.1,15.1,17,15.1,15.1,12]
      propeller: false
    ring7:
      section_segments: 10
      offset:
        x: 70
        y: -78
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-2,-2,-2,-2,0,2,2,4,4,4]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [14,18,20,20,20,20,20,20,18,14]
      height: [14,18,20,20,20,20,20,20,18,14]
      texture: [12,17,15.1,15.1,17,15.1,15.1,12]
      propeller: false
    ring8:
      section_segments: 10
      offset:
        x: 70
        y: -104
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-4,-4,-4,-4,0,4,4,6,6,6,6]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [12,23,25,25,25,25,25,25,21,16,16]
      height: [12,23,25,25,25,25,25,25,21,16,16]
      texture: [15.7,17,4,13,4,13,13,17,4]
      propeller: false
    ring9:
      section_segments: 10
      offset:
        x: 70
        y: -110
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-2,-2,-2,-2,0,2,2,4,4,4]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [14,18,20,20,20,20,20,20,18,14]
      height: [14,18,20,20,20,20,20,20,18,14]
      texture: [12,17,15.1,15.1,17,15.1,15.1,12]
      propeller: false
    ring10:
      section_segments: 10
      offset:
        x: 70
        y: -123
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-2,-2,-2,-2,0,2,2,4,4,4]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [14,18,20,20,20,20,20,20,18,14]
      height: [14,18,20,20,20,20,20,20,18,14]
      texture: [12,17,15.1,15.1,17,15.1,15.1,12]
      propeller: false
    propulsor:
      section_segments: 10
      offset:
        x: 20
        y: 65
        z: 25
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-10,-10,-15,-15,0,10,20,25,30,35,40,50,45]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,4,10,11,13,13,13,13,13,13,12,8,0]
      height: [0,4,10,11,13,13,13,13,13,13,12,8,0]
      texture: [18,4,17,3,13,13,18,63,63,3,8,17]
      propeller: true
    propulsor2:
      section_segments: 10
      offset:
        x: 20
        y: 65
        z: -25
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-10,-10,-15,-15,0,10,20,25,30,35,40,50,45]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,4,10,11,13,13,13,13,13,13,12,8,0]
      height: [0,4,10,11,13,13,13,13,13,13,12,8,0]
      texture: [18,4,17,3,13,13,18,63,63,3,8,17]
      propeller: true
