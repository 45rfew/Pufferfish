return model =
  name: 'Solarium Zenion'
  level: 2
  model: 3
  size: 1.05
  specs:
    shield:
      capacity: [150,195]
      reload: [4,6]
    generator:
      capacity: [80,115]
      reload: [14,24]
    ship:
      mass: 145
      speed: [115,128]
      rotation: [70,80]
      acceleration: [80,110]
  bodies:
    main:
      section_segments: 12
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-60,-70,-50,-20,30,70,120,100]
        z: [0,0,0,0,0,0,0,0]
      width: [0,18,22,25,30,30,25,0]
      height: [0,8,22,25,30,30,25,0]
      texture: [11,2,3,63,11,3,12]
      propeller: true
    main_sides:
      section_segments: 6
      offset:
        x: 20
        y: 0
        z: 0
      position:
        x: [-1,-1,0,0,0,0,0,0,0,0]
        y: [-35,-35,-15,10,10,40,70,72,80,82]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [4,8,14,17,18,20,20,20,20,20]
      height: [14,14,18,18,20,20,20,20,20,20]
      texture: [11,2,9.96,17,2,11,17,4,17]
      propeller: false
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: 0
        z: 18
      position:
        x: [0,0,0,0,0,0,0]
        y: [-50,-40,0,30,40]
        z: [0,0,0,0,0]
      width: [0,10,15,15,0]
      height: [0,10,15,13,0]
      texture: [11,9,4]
      propeller: false
    cannons:
      section_segments: 12
      offset:
        x: 0
        y: 0
        z: -17
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-80,-85,-50,-45,-20,0,20,50,55]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,8,8,15,15,15,15,10,0]
      height: [0,8,8,10,10,10,10,10,0]
      angle: 0
      laser:
        damage: [10,12]
        rate: 3
        type: 1
        speed: [150,190]
        number: 1
        angle: 0
        error: 0
      propeller: true
      texture: [17,12,4,3,10,4,63,18]
    propulsor:
      section_segments: 12
      offset:
        x: 40
        y: 25
        z: 1
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-40,-35,-20,0,70,80,90,70,70,70]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,10,15,15,15,10,10,10,0,0]
      height: [0,10,15,15,15,10,10,10,0,0]
      texture: [18,4,3,63,8,13,18,17,17]
      propeller: true
    bodie_ring:
      section_segments: 6
      offset:
        x: 40
        y: 50
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-28,-28,-28,-24,-14,-5,4,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,0,18,20,20,20,20,18,0,0]
      height: [0,0,18,20,20,20,20,18,0,0]
      texture: [11,11,4,13,17,12,4,11]
      angle: 0
      propeller: false
    bodie_ring2:
      section_segments: 12
      offset:
        x: 10
        y: 40
        z: 7
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
      length: [40,30,20,0]
      width: [70,100,160,160]
      texture: [10,63,2]
      angle: [0,0,0]
      position: [10,-20,-50,-20]
      doubleside: 1
      bump:
        position: 30
        size: 15
    main2:
      offset:
        x: 21
        y: 60
        z: 0
      length: [40,30,20,0]
      width: [70,100,160,160]
      texture: [4,4,17]
      angle: [0,0,0]
      position: [10,-20,-50,-20]
      doubleside: 1
      bump:
        position: 30
        size: 10
    winglets:
      length: [0,30,20]
      width: [0,50,130,0]
      angle: [0,0,0]
      position: [-20,-20,80,80]
      texture: [1,2,4]
      doubleside: 1
      bump:
        position: 30
        size: 15
      offset:
        x: 81
        y: -80
        z: -3
    winglets2:
      length: [0,30,20]
      width: [0,10,130,0]
      angle: [0,0,0]
      position: [-20,-20,80,80]
      texture: [4,63,11]
      doubleside: 1
      bump:
        position: 30
        size: 10
      offset:
        x: 6
        y: -100
        z: -3
