return model =
  name: 'Lunatic Hunter'
  level: 3
  model: 4
  size: 1.4
  specs:
    shield:
      capacity: [145,215]
      reload: [5,9]
    generator:
      capacity: [130,210]
      reload: [30,45]
    ship:
      mass: 190
      speed: [120,145]
      rotation: [70,95]
      acceleration: [90,130]
  bodies:
    main:
      section_segments: 12
      offset:
        x: 0
        y: 20
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-140,-150,-140,-120,-90,-70,0,70,120,90,70]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,15,20,25,23,30,30,20,0]
      height: [0,6,13,20,25,25,25,25,20,0]
      texture: [13,3,4,63,4,18,10,4,17]
      propeller: true
    side2:
      section_segments: 8
      offset:
        x: 25
        y: 40
        z: 1
      position:
        x: [-10,-10,-5,-5,-5,-7,-5]
        y: [-85,-85,-50,-10,30,75,75]
        z: [0,0,0,0,0,0,0]
      width: [0,15,20,25,20,15,0]
      height: [0,10,10,15,10,10,0]
      angle: 0
      texture: [18,3,4,63,63,18]
    Body_ring:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 20
        y: 72
        z: -2
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-6,-4,-4,4,6,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,26,26,26,26,26,26,26,26,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [18,17,4,4,13,4,17,18]
      angle: 0
    Body_ring2:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 20
        y: 52
        z: -2
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-6,-4,-4,4,6,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,26,26,26,26,26,26,26,26,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [18,17,4,4,13,4,17,18]
      angle: 0
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: -90
        z: 16
      position:
        x: [0,0,0,0,0,0,0]
        y: [-30,-20,20,35,40]
        z: [-3,-6,0,0,0]
      width: [0,10,14,10,0]
      height: [0,10,13,10,0]
      texture: [4,9,4]
      propeller: false
    cannons:
      section_segments: 12
      offset:
        x: 50
        y: 70
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-120,-140,-120,-120,-85,-85,-85,-40,0,20,40,45]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,8,12,9,9,13,15,18,18,18,18,0]
      height: [0,5,7,5,5,5,8,10,10,10,8,0]
      angle: 0
      laser:
        damage: [5,9]
        rate: 2.1
        type: 1
        speed: [130,180]
        number: 1
        angle: 0
        error: 0
        recoil: 5
      propeller: false
      texture: [17,10,18,13,18,18,4,18,63,3,4]
    cannons2:
      section_segments: 12
      offset:
        x: 50
        y: 70
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-120,-140,-120,-120,-80,-80,-80,-40,0,20,50,45]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,0,5,5,5,5,8,10,10,10,8,0]
      height: [0,0,5,5,5,5,8,10,10,10,8,0]
      angle: 0
      laser:
        damage: [5,9]
        rate: 2.3
        type: 1
        speed: [130,180]
        number: 1
        angle: 0
        error: 0
        recoil: 5
      propeller: true
      texture: [17,17,4,16,10,4,13,18,63,12,3]
    cannons3:
      section_segments: 12
      offset:
        x: 50
        y: 70
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-120,-140,-120,-120,-80,-80,-80,-40,0,20,50,55,45]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,0,5,5,5,5,8,10,10,10,10,8,0]
      height: [0,0,5,5,5,5,8,10,10,10,10,8,0]
      angle: 0
      laser:
        damage: [5,9]
        rate: 2.5
        type: 1
        speed: [130,180]
        number: 1
        angle: 0
        error: 0
        recoil: 5
      propeller: false
      texture: [17,17,4,13,18,18,4,18,63,8,4,18]
    effects:
      section_segments: 12
      offset:
        x: 50
        y: 80
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-120,-120,-80,-80,-60,-60,-60,-20,0,10,30,40]
        z: [-8,-9,1,1,3,3,3,3,3,3,-2,-2]
      width: [0,3,3,3,3,3,3,3,3,3,3,0]
      height: [0,3,3,3,3,3,3,3,3,3,3,0]
      texture: [4,4,13,63,8,8,13,63,3,4]
  wings:
    main:
      offset:
        x: 0
        y: 60
        z: 0
      length: [80,20,30]
      width: [70,50,40,30]
      texture: [18,4,63]
      angle: [-10,-10,-10]
      position: [10,-20,-30,-70]
      doubleside: 1
      bump:
        position: -10
        size: 15
    winglets:
      length: [20,20]
      width: [30,30,10]
      angle: [10,20]
      position: [40,50,80]
      texture: [4,63]
      bump:
        position: 20
        size: 25
      offset:
        x: 60
        y: 40
        z: -5
