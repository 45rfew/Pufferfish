return model =
  name: 'Lunatic Dragoon'
  level: 3
  model: 2
  size: 1.55
  specs:
    shield:
      capacity: [195,215]
      reload: [5,9]
    generator:
      capacity: [170,215]
      reload: [35,50]
    ship:
      mass: 240
      speed: [90,110]
      rotation: [55,70]
      acceleration: [70,100]
  bodies:
    main:
      section_segments: 12
      offset:
        x: 0
        y: 20
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-180,-185,-170,-150,-130,-130,-100,-100,-50,0,30,70,100,100]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,7,14,17,17,10,10,20,25,25,30,30,20,0]
      height: [0,4,14,17,17,10,10,20,20,25,30,30,20,0]
      texture: [13,4,63,4,18,13,18,10,18,4,63,4,18]
      propeller: false
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: -150
        z: 7
      position:
        x: [0,0,0,0,0,0,0]
        y: [-10,-5,13,32,40]
        z: [-1,-2,-1,0,0]
      width: [0,8,10,10,0]
      height: [0,10,13,13,0]
      texture: [4,9,9,4]
      propeller: false
    cannon_barrel:
      section_segments: 12
      offset:
        x: 40
        y: 50
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-30,-30,-20,0,20,50,55]
        z: [0,0,0,0,0,0,0]
      width: [0,15,18,18,18,18,0]
      height: [0,15,18,18,18,18,0]
      angle: 0
      texture: [4,4,18,63,10,18]
    cannons:
      section_segments: 12
      offset:
        x: 45
        y: -30
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-20,-30,-20,0,20,50,50]
        z: [0,0,0,0,0,0,0]
      width: [0,5,5,5,5,6,0]
      height: [0,5,5,5,5,6,0]
      angle: 0
      texture: [17,8,4,13,10,18]
      laser:
        damage: [2,4]
        rate: 6
        type: 2
        speed: [60,100]
        recoil: 6
        number: 10
        error: 15
      propeller: false
    cannons2:
      section_segments: 12
      offset:
        x: 35
        y: -30
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-20,-30,-20,0,20,50,50]
        z: [0,0,0,0,0,0,0]
      width: [0,5,5,5,5,6,0]
      height: [0,5,5,5,5,6,0]
      angle: 0
      texture: [17,8,4,13,10,18]
      laser:
        damage: [1,3]
        rate: 6
        type: 2
        speed: [45,85]
        recoil: 6
        number: 10
        error: 10
      propeller: false
    propeller:
      section_segments: 12
      offset:
        x: 13
        y: 73
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-30,-30,-20,0,20,50,48]
        z: [0,0,0,0,0,0,0]
      width: [0,5,5,5,5,5,0]
      height: [0,5,5,5,5,5,0]
      angle: 0
      texture: [4,4,18,63,13,17]
      propeller: true
    propeller2:
      section_segments: 12
      offset:
        x: 10
        y: 73
        z: 9.5
      position:
        x: [0,0,0,0,0,0,0]
        y: [-30,-30,-20,0,20,50,48]
        z: [0,0,0,0,0,0,0]
      width: [0,5,5,5,5,5,0]
      height: [0,5,5,5,5,5,0]
      angle: 0
      texture: [4,4,18,63,13,17]
      propeller: true
    propeller3:
      section_segments: 12
      offset:
        x: 0
        y: 73
        z: 13
      position:
        x: [0,0,0,0,0,0,0]
        y: [-30,-30,-20,0,20,50,48]
        z: [0,0,0,0,0,0,0]
      width: [0,5,5,5,5,5,0]
      height: [0,5,5,5,5,5,0]
      angle: 0
      texture: [4,4,18,63,13,17]
      propeller: true
    propeller4:
      section_segments: 12
      offset:
        x: 10
        y: 73
        z: -9.5
      position:
        x: [0,0,0,0,0,0,0]
        y: [-30,-30,-20,0,20,50,48]
        z: [0,0,0,0,0,0,0]
      width: [0,5,5,5,5,5,0]
      height: [0,5,5,5,5,5,0]
      angle: 0
      texture: [4,4,18,63,13,17]
      propeller: true
    propeller5:
      section_segments: 12
      offset:
        x: 0
        y: 73
        z: -13
      position:
        x: [0,0,0,0,0,0,0]
        y: [-30,-30,-20,0,20,50,48]
        z: [0,0,0,0,0,0,0]
      width: [0,5,5,5,5,5,0]
      height: [0,5,5,5,5,5,0]
      angle: 0
      texture: [4,4,18,63,13,17]
      propeller: true
    propeller6:
      section_segments: 12
      offset:
        x: 40
        y: 73
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-30,-30,-20,0,40,50,48]
        z: [0,0,0,0,0,0,0]
      width: [0,10,15,15,15,10,0]
      height: [0,10,15,15,15,10,0]
      angle: 0
      texture: [4,4,18,13,18,17]
      propeller: true
    propeller_fuel:
      section_segments: 12
      offset:
        x: 20
        y: 53
        z: 10
      position:
        x: [0,0,0,0,0,0,0]
        y: [-30,-30,-20,0,40,50,50]
        z: [0,0,0,0,0,0,0]
      width: [0,10,15,15,15,10,0]
      height: [0,10,15,15,15,10,0]
      angle: 0
      texture: [18,4,10,3,4,18]
    tubes:
      section_segments: 12
      offset:
        x: 20
        y: -15
        z: 10
      position:
        x: [-7,-7,-2,0,0,0,0]
        y: [-60,-60,-50,-20,-10,70,70]
        z: [0,0,0,0,0,0,0]
      width: [0,4,4,4,4,4,0]
      height: [0,4,4,4,4,4,4]
      angle: 0
      texture: [18,8,4,8,13,18]
    tubes2:
      section_segments: 12
      offset:
        x: 20
        y: -15
        z: -10
      position:
        x: [-7,-7,-2,0,0,0,0]
        y: [-60,-60,-50,-20,-10,70,70]
        z: [0,0,0,0,0,0,0]
      width: [0,4,4,4,4,4,0]
      height: [0,4,4,4,4,4,4]
      angle: 0
      texture: [18,8,4,8,13,18]
    tubes3:
      section_segments: 12
      offset:
        x: 10
        y: -5
        z: 19
      position:
        x: [-2,-2,0,0,0,0,0]
        y: [-60,-60,-50,-20,20,70,70]
        z: [-5,-5,-3,-2,0,3,2]
      width: [0,4,4,4,4,4,0]
      height: [0,4,4,4,4,4,4]
      angle: 0
      texture: [18,18,3,3,18,18]
    ring:
      section_segments: 9
      offset:
        x: 20
        y: 87
        z: 15
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-4,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 17 ]
      propeller: false
    ring2:
      section_segments: 9
      offset:
        x: 20
        y: 77
        z: 15
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-4,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 17 ]
      propeller: false
    ring3:
      section_segments: 9
      offset:
        x: 20
        y: 67
        z: 15
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-4,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 17 ]
      propeller: false
    ring4:
      section_segments: 9
      offset:
        x: 20
        y: 57
        z: 15
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-4,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 17 ]
      propeller: false
    ring5:
      section_segments: 9
      offset:
        x: 0
        y: -85
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-4,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 17 ]
      propeller: false
    ring6:
      section_segments: 9
      offset:
        x: 0
        y: -95
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-4,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 17 ]
      propeller: false
    ring7:
      section_segments: 9
      offset:
        x: 0
        y: -105
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-4,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 17 ]
      propeller: false
    ring8:
      section_segments: 9
      offset:
        x: 40
        y: 15
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-4,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 17 ]
      propeller: false
    ring9:
      section_segments: 9
      offset:
        x: 40
        y: 5
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-4,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 17 ]
      propeller: false
    ring10:
      section_segments: 9
      offset:
        x: 40
        y: -5
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-4,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 17 ]
      propeller: false
    ring11:
      section_segments: 9
      offset:
        x: 40
        y: -15
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-4,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 17 ]
      propeller: false
    Body_ring2:
      section_segments: 12
      offset:
        x: 0
        y: -68
        z: 1
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-11,-8,-6,-4,-4,4,4,6,6,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,22,24,24,24,24,24,24,22,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [17.93,17,4,4,4,17,17,18]
    reactor:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 30
        z: -70
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-10,-10,0,3,3,3,3,3,3,0]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,20,20,18,17,13,10,9,8,0]
      height: [0,20,20,18,14,13,10,9,5,0]
      propeller: false
      texture: [4,4,18,17,18,4,17,18,17]
      vertical: true
      angle: 0
    reactor2:
      section_segments: [45,135,225,315]
      offset:
        x: 5
        y: 25
        z: -70
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-10,-10,0,3,3,3,3,3,3,0]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,20,20,18,17,13,10,9,8,0]
      height: [0,20,20,18,14,13,10,9,5,0]
      propeller: false
      texture: [4,4,18,17,18,4,17,18,17]
      vertical: true
      angle: 0
    reactor3:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 26
        z: -65
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-10,-10,0,3,3,3,3,3,3,0]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,20,20,18,17,13,10,9,8,0]
      height: [0,20,20,18,14,13,10,9,5,0]
      propeller: false
      texture: [4,4,18,18,18,4,17,18,17]
      vertical: true
      angle: 0
    reactor4:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 26
        z: -74
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-10,-10,0,3,3,3,3,3,3,0]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,20,20,18,17,13,10,9,8,0]
      height: [0,20,20,18,14,13,10,9,5,0]
      propeller: false
      texture: [4,4,18,18,18,4,17,18,17]
      vertical: true
      angle: 0
    recharger:
      section_segments: 9
      offset:
        x: 40
        y: -25
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-4,-4,-4,2,2,2,2,2]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,13,13,15,15,15,15,13,13,0]
      height: [0,13,13,15,15,15,15,13,13,0]
      texture: [17.9,4,17,13,3,18]
      propeller: false
  wings:
    main:
      offset:
        x: -10
        y: 60
        z: 0
      length: [85,20]
      width: [70,50,40]
      texture: [4,4]
      angle: [0,0]
      doubleside: 1
      position: [0,0,10]
      bump:
        position: -10
        size: 15
    main2:
      offset:
        x: -10
        y: 65
        z: 0
      length: [85,20]
      width: [70,50,40]
      texture: [18,13]
      angle: [0,0]
      doubleside: 1
      position: [0,0,10]
      bump:
        position: -10
        size: 13
    main3:
      offset:
        x: -10
        y: 55
        z: 0
      length: [75,20,0,5,10,0,10]
      width: [70,50,40,100,100,80,60,50]
      texture: [63,63,13,63,4,18,3]
      angle: [0,0,0,0,0,0,0]
      doubleside: 1
      position: [0,0,10,-10,0,0,0,0]
      bump:
        position: -10
        size: 13
    main4:
      offset:
        x: -10
        y: 60
        z: 0
      length: [85,21]
      width: [70,50,40]
      texture: [18,63]
      angle: [0,-10]
      doubleside: 1
      position: [0,0,-20]
      bump:
        position: -10
        size: 11
    main5:
      offset:
        x: -10
        y: 70
        z: 0
      length: [85,20]
      width: [70,50,40]
      texture: [18,18]
      angle: [0,0]
      doubleside: 1
      position: [0,0,10]
      bump:
        position: -10
        size: 5
    winglets:
      length: [30,20]
      width: [10,30,0]
      angle: [90,90]
      position: [30,60,90]
      doubleside: 1
      texture: [ 63 ]
      bump:
        position: 10
        size: 30
      offset:
        x: 0
        y: 30
        z: -8
    wingletsX1:
      length: [30,10]
      width: [20,40,0]
      angle: [90,90]
      position: [30,60,90]
      doubleside: 1
      texture: [ 18 ]
      bump:
        position: 10
        size: 29
      offset:
        x: 0
        y: 35
        z: -6
    winglets2:
      length: [30,20]
      width: [10,30,0]
      angle: [90,90]
      position: [60,70,90]
      texture: [ 63 ]
      bump:
        position: 10
        size: 30
      offset:
        x: 0
        y: -40
        z: -3
    wingletsX2:
      length: [30,10]
      width: [20,40,0]
      angle: [90,90]
      position: [30,60,90]
      doubleside: 1
      texture: [ 18 ]
      bump:
        position: 10
        size: 29
      offset:
        x: 0
        y: -35
        z: -6
    winglets3:
      length: [30,20]
      width: [10,30,0]
      angle: [90,90]
      position: [60,70,90]
      texture: [ 63 ]
      bump:
        position: 10
        size: 30
      offset:
        x: 0
        y: -80
        z: -7
    wingletsX3:
      length: [30,10]
      width: [20,40,0]
      angle: [90,90]
      position: [30,60,90]
      doubleside: 1
      texture: [ 18 ]
      bump:
        position: 10
        size: 29
      offset:
        x: 0
        y: -75
        z: -10
    winglets4:
      length: [30,20]
      width: [10,30,0]
      angle: [90,90]
      position: [60,70,90]
      texture: [ 63 ]
      bump:
        position: 10
        size: 30
      offset:
        x: 0
        y: -120
        z: -10
    wingletsX4:
      length: [30,10]
      width: [20,40,0]
      angle: [90,90]
      position: [30,60,90]
      doubleside: 1
      texture: [ 18 ]
      bump:
        position: 10
        size: 29
      offset:
        x: 0
        y: -115
        z: -11
