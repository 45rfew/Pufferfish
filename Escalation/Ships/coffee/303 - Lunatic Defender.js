return model =
  name: 'Lunatic Defender'
  level: 3
  model: 3
  size: 1.4
  specs:
    shield:
      capacity: [155,215]
      reload: [5,9]
    generator:
      capacity: [140,190]
      reload: [25,43]
    ship:
      mass: 180
      speed: [120,145]
      rotation: [56,75]
      acceleration: [90,100]
  bodies:
    main:
      section_segments: 12
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-140,-150,-130,-80,0,60,90,120,80]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,10,15,20,25,25,30,20,5]
      height: [0,5,15,20,25,25,30,20,0]
      texture: [13,4,18,63,12,8,13,17]
      propeller: true
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: -50
        z: 20
      position:
        x: [0,0,0,0,0,0,0]
        y: [-40,-30,0,30,40]
        z: [-5,-5,-5,-5,-5]
      width: [0,10,14,14,0]
      height: [0,10,15,12,0]
      texture: [4,9,9,4]
      propeller: false
    reactor:
      section_segments: 12
      offset:
        x: 0
        y: 28
        z: -60
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-20,-20,0,3,-1,4,3,6,6,6]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,20,20,18,16,16,13,12,8,0]
      height: [0,20,20,18,16,16,13,12,8,0]
      propeller: false
      texture: [4,13,4,8,4,17,3,3.5,17]
      vertical: true
      angle: 0
    cannons:
      section_segments: 12
      offset:
        x: 50
        y: 40
        z: -20
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-120,-140,-110,-110,-65,-65,-50,0,20,70,40]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,8,10,10,10,10,15,20,20,15,0]
      height: [0,8,10,10,10,10,15,20,20,15,0]
      angle: 0
      laser:
        damage: [5,9]
        rate: 5
        type: 1
        speed: [180,200]
        number: 1
        angle: -10
        error: 0
        recoil: 3
      propeller: true
      texture: [17,4,18,12,18,18,10,4,63,17]
    Effects1:
      section_segments: 8
      offset:
        x: 0
        y: -45
        z: 20
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-65,0,23,27,42,42,47,132,143]
        z: [-4,-4,0,2,5,5,5,-1,-1,-3]
      width: [5,5,5,5,5,5,5,5,5]
      height: [5,5,5,5,5,5,5,5,5]
      texture: [ 63 ]
    Effects2:
      section_segments: 8
      offset:
        x: 1
        y: -45
        z: 20
      position:
        x: [-2,0,0,0,0,0,0,0,0,0]
        y: [-90,-70,23,27,42,42,47,72,93]
        z: [-15,-5,0,2,5,5,4,4,0,4]
      width: [3,5,5,5,5,5,5,5,5]
      height: [3,5,5,5,5,5,5,5,5]
      texture: [ 4 ]
    Effects3:
      section_segments: 8
      offset:
        x: 18
        y: -103
        z: -2
      position:
        x: [-5,-5,0,0,0,0,0,0,-10,-10]
        y: [0,-10,23,27,62,62,97,102,163]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,5,5,5,15,15,15,15,15]
      height: [0,5,5,5,8,10,15,15,15]
      texture: [4,4,63,4,17,11,12,11]
  wings:
    main:
      offset:
        x: 0
        y: 50
        z: -20
      length: [80,0,40]
      width: [70,70,100,50]
      texture: [18,4,63]
      angle: [0,0,0]
      position: [30,-20,-20,-60]
      doubleside: 1
      bump:
        position: -10
        size: 15
    top1:
      offset:
        x: 8
        y: 45
        z: 10
      length: [ 30 ]
      width: [50,50]
      angle: [ 30 ]
      position: [0,20]
      texture: [ 63 ]
      doubleside: 1
      bump:
        position: 10
        size: 15
    top2:
      offset:
        x: 5
        y: -120
        z: 0
      length: [ 20 ]
      width: [40,30]
      angle: [ -10 ]
      position: [0,20]
      texture: [ 63 ]
      doubleside: 1
      bump:
        position: 10
        size: 20
    top3:
      offset:
        x: 0
        y: 10
        z: -4
      length: [ 50 ]
      width: [90,70]
      angle: [ -10 ]
      position: [0,50]
      texture: [ 4 ]
      bump:
        position: 10
        size: 15
