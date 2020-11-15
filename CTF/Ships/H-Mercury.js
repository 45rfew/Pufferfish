return model =
  name: 'H-Mercury'
  level: 6
  model: 9
  size: 2
  specs:
    shield:
      capacity: [250,400]
      reload: [6,9]
    generator:
      capacity: [100,175]
      reload: [45,60]
    ship:
      mass: 430
      speed: [75,90]
      rotation: [50,65]
      acceleration: [60,100]
  bodies:
    main:
      section_segments: 8
      offset:
        x: 0
        y: 0
        z: 20
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-65,-70,-60,-40,0,50,110,100]
        z: [0,0,0,0,0,0,0,0]
      width: [1,5,10,20,30,25,10,0]
      height: [1,5,10,15,25,20,10,0]
      texture: [6,4,4,63,11,63,12]
      propeller: true
      laser:
        damage: [7,12]
        rate: 8
        type: 1
        speed: [100,190]
        number: 1
        error: 0
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: -20
        z: 35
      position:
        x: [0,0,0,0,0,0,0]
        y: [-20,-10,0,15,25]
        z: [0,0,0,0,0]
      width: [0,10,12,10,5]
      height: [0,10,13,12,5]
      texture: [9,9,4,4]
      propeller: false
    arms:
      section_segments: 8
      offset:
        x: 60
        y: 0
        z: -10
      position:
        x: [0,0,0,5,10,0,0,-10]
        y: [-85,-70,-80,-30,0,30,100,90]
        z: [0,0,0,0,0,0,0,0]
      width: [1,5,6,15,15,15,10,0]
      height: [1,5,6,20,30,25,10,0]
      texture: [6,4,4,4,4,4,12]
      angle: 1
      propeller: true
      laser:
        damage: [2,4]
        rate: 4
        type: 1
        speed: [150,200]
        number: 1
        error: 0
    canon:
      section_segments: 12
      offset:
        x: 100
        y: 27
        z: 5
      position:
        x: [0,0,0,0,0,0,0]
        y: [-50,-45,-20,0,20,30,40]
        z: [0,0,0,0,0,0,0]
      width: [0,5,7,7,3,5,0]
      height: [0,5,15,15,3,5,0]
      angle: 3
      laser:
        damage: [4,9]
        rate: 1.5
        type: 1
        speed: [150,220]
        number: 1
        error: 0
      propeller: false
      texture: [6,4,10,4,4,4]
  wings:
    main:
      offset:
        x: 0
        y: -15
        z: 20
      length: [60,40]
      width: [60,30,20]
      angle: [-20,10]
      position: [30,50,30]
      texture: [11,11]
      bump:
        position: 30
        size: 10
    font:
      length: [60]
      width: [20,15]
      angle: [-10,20]
      position: [-20,-40]
      texture: [63]
      bump:
        position: 30
        size: 10
      offset:
        x: 0
        y: 0
        z: 0
    font2:
      offset:
        x: 0
        y: 40
        z: 8
      length: [60]
      width: [20,15]
      angle: [-10,20]
      position: [20,40]
      texture: [63]
      bump:
        position: 30
        size: 10
