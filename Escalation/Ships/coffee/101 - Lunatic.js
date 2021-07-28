return model =
  name: 'Lunatic'
  level: 1
  model: 1
  size: 1.15
  specs:
    shield:
      capacity: [115,155]
      reload: [3,5]
    generator:
      capacity: [50,80]
      reload: [35,45]
    ship:
      mass: 120
      speed: [110,135]
      rotation: [90,95]
      acceleration: [90,110]
  bodies:
    main:
      section_segments: 8
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-90,-80,-70,-40,0,30,70,110,100]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,10,15,25,25,30,30,20,0]
      height: [0,10,15,20,20,25,25,10,0]
      texture: [4,4,63,4,3,18,4,17]
      propeller: true
    main2:
      section_segments: 8
      offset:
        x: 6
        y: 10
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-80,-70,-60,-20,0,30,70,90,90]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,10,15,25,25,30,30,20,0]
      height: [0,7,10,10,10,15,15,7,0]
      texture: [4,4,18,4,18,18,63,18]
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: -40
        z: 10
      position:
        x: [0,0,0,0,0,0,0]
        y: [-30,-10,0,30,40]
        z: [5,0,0,0,0]
      width: [0,10,12,12,0]
      height: [0,10,15,12,0]
      texture: [9.2,4,18,4]
      propeller: false
    cockpit2:
      section_segments: 8
      offset:
        x: 7
        y: -40
        z: 10.2
      position:
        x: [-6,0,0,0,0,0,0]
        y: [-30,-10,0,30,40]
        z: [3,1,5,2,2]
      width: [2,5,7,7,0]
      height: [2,7,7,7,0]
      texture: [4,63,4]
      propeller: false
    Main_ring:
      section_segments: 6
      offset:
        x: 20
        y: 62.5
        z: 6
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-7,-4,-4,4,7,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,26,26,26,26,26,26,26,26,0]
      height: [0,12,14,14,14,14,14,14,12,0]
      texture: [18,17,4,4,13,4,17,18]
      angle: 0
    ring:
      section_segments: 9
      offset:
        x: 40
        y: 80
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-2,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 4 ]
      propeller: false
    ring2:
      section_segments: 9
      offset:
        x: 20
        y: 70
        z: 5
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
        x: 20
        y: 55
        z: 5
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
        x: 40
        y: 45
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-2,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 4 ]
      propeller: false
    cannons:
      section_segments: 9
      offset:
        x: 50
        y: 50
        z: 0.5
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-80,-97,-95,-83,-80,-58,-45,-20,0,20,50,55,55]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5,6,6,5,5,8,10,10,13,10,8,0]
      height: [0,5,6,6,5,5,8,10,10,10,10,8,0]
      angle: 1
      laser:
        damage: [5,9]
        rate: 4
        type: 1
        speed: [140,170]
        number: 1
        angle: 0
        error: 0
      propeller: false
      texture: [17,4,10,13,4,3,4,3,4,63,3.9,18]
  wings:
    main:
      offset:
        x: 0
        y: 60
        z: 0
      length: [50,10,0,20]
      width: [60,50,50,70,70]
      texture: [4,63,4,4]
      angle: [0,0,0,0]
      position: [10,0,0,0,-20]
      bump:
        position: 20
        size: 15
    main2:
      offset:
        x: 0
        y: 62
        z: 0
      length: [50,10,0,20]
      width: [60,50,50,70,70]
      texture: [3,18,3,3]
      angle: [0,0,0,0]
      position: [10,0,0,0,-30]
      bump:
        position: 20
        size: 10
