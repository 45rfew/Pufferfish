return model =
  name: 'Lit-E'
  level: 6
  model: 11
  size: 1.3
  zoom: 0.9
  specs:
    shield:
      capacity: [425,425]
      reload: [7.5,7.5]
    generator:
      capacity: [155,155]
      reload: [41,41]
    ship:
      mass: 380
      speed: [195,195]
      rotation: [105,105]
      acceleration: [90,90]
  bodies:
    main:
      section_segments: [45,90,135,225,270,315]
      offset:
        x: 0
        y: -10
        z: 2
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-50,-57,-57,-52,-35,-11,-10,0,30,50,55,75,77,72,72]
        z: [-2,-2,-2,-1,0,0,0,0,0,0,0,0,0,0,0]
      width: [8,8,11,13,16,16,18,19,19,19,19,15,12,10,0]
      height: [0,5,7,10,12,14,18,19,19,19,19,15,12,10,0]
      propeller: true
      texture: [17,63,4,63,4,63,63,3,4,63,63,4,63,17]
      laser:
        damage: [20,20]
        rate: 3
        type: 1
        speed: [180,180]
        number: 2
        error: 0
        angle: 2
    Side:
      section_segments: [45,90,135,225,270,315]
      offset:
        x: 14
        y: -5
        z: -4
      position:
        x: [-8,-8,-8,-6,-5,-4,-3,-3,0,0,0,0,0,0]
        y: [-55,-55,-38,-40,-37,-25,-15,20,30,45,65,67,60]
        z: [2,2,2,2,2,1,0,0,0,0,0,0,0,0,0,0]
      width: [0,5,9,11,12,14,14,14,16,16,10,8,0]
      height: [0,5,9,11,12,14,15,15,15,15,10,8,0]
      propeller: true
      texture: [2,2,17,4,63,3,2,11,18,63,4,17]
    cockpit:
      section_segments: [45,80,135,225,270,315]
      offset:
        x: 0
        y: -10
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [0,10,20,30,36,48]
        z: [0,0,0,0,0,0,0]
      width: [4,7,7,8,9,9]
      height: [8,13,15,15,17,17]
      propeller: false
      texture: [9,9,9,4,63]
    cannon:
      section_segments: 12
      offset:
        x: 20
        y: 32
        z: 20
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-20,-30,-29,-20,-15,-10,-5,0,5,10,20,23,22]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,2,3,4,4,4,4,4,4,7,6,4,0]
      height: [0,2,3,4,4,4,4,4,4,7,6,4,0]
      angle: -2
      laser:
        damage: [3,3]
        rate: 5
        type: 1
        speed: [160,180]
        number: 2
        angle: 5
        error: 0
      propeller: false
      texture: [17,4,63,4,17,4,17,4,63,10,4]
    Sidedeco:
      section_segments: 24
      offset:
        x: 76
        y: 27
        z: -8
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [26,25,25,27,27,22,25,33,42,45,42]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,3,9,10,23,28,30,35,36,33,0]
      height: [0,3,9,10,13,17,17,22,23,21,0]
      angle: -90
      texture: [17,18,63,17,12,4,63,2,4]
    Sidedeco2:
      section_segments: [45,135,225,315]
      offset:
        x: 76
        y: 30
        z: 10
      position:
        x: [1,-1,-4,-5,-5,-5]
        y: [21,25,33,40,45,45]
        z: [-2,-2,2,3,2,2]
      width: [5,5,5,5,5,5,5,5,0]
      height: [0,5,5,5,5,5,5,5,0]
      angle: -90
      texture: [ 4 ]
    Sidedeco3:
      section_segments: [45,135,225,315]
      offset:
        x: 76
        y: 40
        z: 10
      position:
        x: [1,-1,-4,-5,-5,-5]
        y: [21,25,33,40,45,45]
        z: [-2,-2,2,3,2,2]
      width: [5,5,5,5,5,5,5,5,0]
      height: [0,5,5,5,5,5,5,5,0]
      angle: -90
      texture: [ 4 ]
    Sidedeco4:
      section_segments: [45,135,225,315]
      offset:
        x: 76
        y: 20
        z: 10
      position:
        x: [1,-1,-4,-5,-5,-5]
        y: [21,25,33,40,45,45]
        z: [-2,-2,2,3,2,2]
      width: [5,5,5,5,5,5,5,5,0]
      height: [0,5,5,5,5,5,5,5,0]
      angle: -90
      texture: [4,4,4,4]
    stripe0:
      section_segments: [45,135,225,315]
      offset:
        x: 2
        y: -16
        z: -4
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [0,0,5,5]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,25,25,0,0]
      height: [0,19,19,0,0]
      texture: [ 4 ]
    stripe:
      section_segments: [45,135,225,315]
      offset:
        x: 2
        y: -8
        z: -4
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [0,0,5,5]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,25,25,0,0]
      height: [0,19,19,0,0]
      texture: [ 4 ]
    stripe2:
      section_segments: [45,135,225,315]
      offset:
        x: 2
        y: 0
        z: -4
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [0,0,5,5]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,25,25,0,0]
      height: [0,19,19,0,0]
      texture: [ 4 ]
    stripe3:
      section_segments: [45,135,225,315]
      offset:
        x: 2
        y: 8
        z: -4
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [0,0,5,5]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,25,25,0,0]
      height: [0,19,19,0,0]
      texture: [ 4 ]
    Deco0:
      section_segments: 5
      offset:
        x: 0
        y: 33
        z: -42
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-25,-15,-15,-9,-9,-10,-10]
        z: [0,0,0,0,0,0,0,0,0]
      width: [14,13,11,11,9,8,0]
      height: [14,13,11,11,9,8,0]
      angle: 0
      texture: [63,4,63,63,3.8,16.85]
      vertical: 1
    Wingcon:
      section_segments: [45,135,225,315]
      offset:
        x: 38.5
        y: 50
        z: -55
      position:
        x: [2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [15,15,35,35,50]
        z: [-30,-30,-10,-10,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,2,5,6,7,5,5,5,5]
      height: [0,5,5,7,7,5,5,5,0]
      angle: 180
      vertical: 1
      texture: [4,63,4,1]
    c1:
      section_segments: 6
      offset:
        x: 9
        y: 40
        z: 14.5
      position:
        x: [-5,-3,-3,-4,-4,-1,-1,-1,-1,-1,0,0,0,0,0,0]
        y: [-75,-70,-62,-60,-50,-40,-32,-30,-40,-8,-7,0]
        z: [-3,-2,-2,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [2,2,2,2,2,3,3,2,2,2,3,3]
      height: [2,2,2,2,2,3,3,2,2,2,3,3]
      angle: 0
      texture: [63,63,63,4,15.1,4,63,63,17,4,63]
    C2:
      section_segments: [20,45,135,225,315,340]
      offset:
        x: 0
        y: 23
        z: 29
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-15,-9,-9,-10,-10]
        z: [0,0,0,3,3,0,0,0,0]
      width: [7,7,6,4,0]
      height: [17,17,13,6,0]
      angle: 0
      texture: [63,63,3.85,16.85]
      vertical: 1
    C3:
      section_segments: 8
      offset:
        x: 3
        y: 51
        z: 11
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-1,0,2,3,-1]
        z: [0,0,0,0,0,0,0,0,0]
      width: [10,12,12,10,10]
      height: [10,12,12,10,10]
      texture: [ 63 ]
      angle: 100
    C4:
      section_segments: 8
      offset:
        x: 7
        y: -27
        z: 3
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-1,0,2,3,-1]
        z: [0,0,0,0,0,0,0,0,0]
      width: [12,14,14,12,12]
      height: [10,11,11,10,10]
      texture: [ 63 ]
      angle: -10
    C5:
      section_segments: 8
      offset:
        x: 6
        y: -33
        z: 3
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-1,0,2,3,-1]
        z: [0,0,0,0,0,0,0,0,0]
      width: [12,14,14,12,12]
      height: [10,11,11,10,10]
      texture: [ 63 ]
      angle: -10
  wings:
    main:
      length: [14,0]
      width: [50,40,0]
      angle: [0,0,0,0,0,0]
      position: [30,25,20]
      doubleside: true
      offset:
        x: 25
        y: 0
        z: -5
      bump:
        position: 16
        size: 15
      texture: [ 2 ]
    con:
      length: [14,0]
      width: [10,10,0]
      angle: [0,0,0,0,0,0]
      position: [19,25,25]
      doubleside: true
      offset:
        x: 5
        y: 24
        z: 20
      bump:
        position: 16
        size: 20
      texture: [ 63 ]
    Winglet:
      length: [0,10,5,10,15.5,0]
      width: [10,15,15,14,14,14,14,14,14,14]
      angle: [180,170,130,160,180,180]
      position: [25,25,33,37,38,39,39]
      doubleside: true
      offset:
        x: 38
        y: 60
        z: 36
      bump:
        position: -30
        size: 15
      texture: [1,1,4,63,18]
