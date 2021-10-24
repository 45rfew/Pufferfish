return model =
  name: 'Solarium Tank'
  level: 2
  model: 4
  size: 1.1
  specs:
    shield:
      capacity: [170,225]
      reload: [3.5,6]
    generator:
      capacity: [90,125]
      reload: [12,20]
    ship:
      mass: 185
      speed: [70,100]
      rotation: [30,50]
      acceleration: [60,80]
  bodies:
    main:
      section_segments: 8
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-80,-70,-50,-20,30,70,120,100]
        z: [0,0,0,0,0,0,0,0]
      width: [0,25,30,35,40,40,30,0]
      height: [0,15,25,35,40,40,30,0]
      texture: [4,2,3,10,11,3,12]
      propeller: false
    main_sides:
      section_segments: 6
      offset:
        x: 30
        y: 0
        z: 0
      position:
        x: [-1,-1,0,0,0,0,0,0,0]
        y: [-35,-35,-15,10,10,40,70,60]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,8,14,17,18,20,20,0]
      height: [0,14,18,18,20,20,20,0]
      texture: [18,2,16.9,16.9,12,4,17]
      propeller: false
    main_sides2:
      section_segments: 8
      offset:
        x: 80
        y: 0
        z: 0
      position:
        x: [-1,-1,0,0,0,0,0,0,0]
        y: [-35,-35,-15,10,10,40,70,80]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,8,14,17,18,20,18,0]
      height: [0,10,10,10,10,10,10,0]
      texture: [18,2,4,16.9,3,4,3]
      propeller: false
    cockpit:
      section_segments: 12
      offset:
        x: 0
        y: 0
        z: 28
      position:
        x: [0,0,0,0,0,0,0]
        y: [-50,-40,0,30,40]
        z: [-10,-5,0,0,0]
      width: [0,10,15,15,0]
      height: [0,10,15,13,0]
      texture: [11,9,4,4]
      propeller: false
    cannons:
      section_segments: 12
      offset:
        x: 70
        y: 13
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-73,-79,-65,-65,-50,-45,-20,0,20,50,85,90]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,8,10,8,8,10,10,10,10,10,10,0]
      height: [0,8,10,8,8,15,15,15,15,15,10,0]
      angle: 0
      laser:
        damage: [12,15]
        rate: 1
        type: 1
        speed: [120,160]
        number: 1
        angle: 0
        error: 0
        recoil: 20
      propeller: false
      texture: [17,3,17,4,4,3,4,10,4,3,18]
    propulsor:
      section_segments: 12
      offset:
        x: 10
        y: 45
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-40,-35,-20,0,70,80,90,70,70,70]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,10,15,15,15,10,10,10,0,0]
      height: [0,10,15,15,15,10,10,10,0,0]
      texture: [18,4,13,63,8,13,18,17,17]
      propeller: true
    propulsor2:
      section_segments: 12
      offset:
        x: 30
        y: 30
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-40,-35,-20,0,70,80,90,70,70,70]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,10,15,15,15,10,10,10,0,0]
      height: [0,10,15,15,15,10,10,10,0,0]
      texture: [18,4,13,11,3,2,18,17,17]
      propeller: true
    bodie_ring:
      section_segments: 12
      offset:
        x: 35
        y: 30
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-28,-28,-28,-24,-24,4,4,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,0,18,20,20,20,20,16,0,0]
      height: [0,0,18,20,20,20,20,16,0,0]
      texture: [18,1,12,17,10,12,12,18]
      angle: 180
      propeller: false
  wings:
    main:
      offset:
        x: 20
        y: 60
        z: 0
      length: [0,30,20,0]
      width: [70,100,160,160]
      texture: [10,63,2]
      angle: [0,0,0]
      position: [10,-20,-40,-40]
      doubleside: 1
      bump:
        position: 30
        size: 15
    main2:
      offset:
        x: 21
        y: 60
        z: 0
      length: [0,30,20,0]
      width: [70,100,160,160]
      texture: [4,4,4]
      angle: [0,0,0]
      position: [10,-20,-40,-40]
      doubleside: 1
      bump:
        position: 30
        size: 10
    winglet:
      offset:
        x: 54
        y: 25
        z: 28
      length: [25,15,15,25]
      width: [25,70,35,70,25]
      angle: [-30,-70,-110,-150]
      position: [0,0,0,0,0]
      texture: [63,3,3,63]
      doubleside: true
      bump:
        position: 0
        size: 5
    winglet2:
      offset:
        x: 54
        y: 25
        z: 28
      length: [25,15,15,25]
      width: [27,72,37,72,27]
      angle: [-30,-70,-110,-150]
      position: [0,0,0,0,0]
      texture: [18,4,4,18]
      doubleside: true
      bump:
        position: 0
        size: 4
