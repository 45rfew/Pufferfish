return model =
  name: 'Lunatic Infernal'
  level: 5
  model: 6
  size: 1.2
  next: [605,606]
  specs:
    shield:
      capacity: [305,345]
      reload: [8,13]
    generator:
      capacity: [150,250]
      reload: [65,100]
    ship:
      mass: 290
      speed: [110,130]
      rotation: [50,85]
      acceleration: [90,130]
  bodies:
    main:
      section_segments: 9
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-185,-175,-165,-150,-150,-130,-130,-100,-50,0,30,90,130,110]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,10,14,19,19,19,20,21,25,25,30,30,20,0]
      height: [0,10,14,16,16,15,18,20,25,25,30,30,20,0]
      texture: [4,63,4,18,3,17,4,63,18,10,8,4,17]
      propeller: true
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: -158
        z: 13
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-15,-10,-10,5,30,40]
        z: [-10,-5,-5,-3,0,0]
      width: [0,7,7,10,10,0]
      height: [0,8,8,10,8,0]
      texture: [4,9,9,9,4]
      propeller: false
    tubes:
      section_segments: 8
      offset:
        x: 50
        y: -150
        z: 11
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,23,27,62,62,97,102,163]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,2,2,2,2,2,2,2,2]
      height: [0,2,2,2,2,2,2,2,2]
      texture: [13,13,17,13,17,4,13]
    tubes2:
      section_segments: 8
      offset:
        x: 50
        y: -150
        z: -11
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,23,27,62,62,97,102,163]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,2,2,2,2,2,2,2,2]
      height: [0,2,2,2,2,2,2,2,2]
      texture: [13,13,17,13,17,4,13]
    tubes3:
      section_segments: 8
      offset:
        x: 60
        y: -150
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,23,27,62,62,97,102,163]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,2,2,2,2,2,2,2,2]
      height: [0,2,2,2,2,2,2,2,2]
      texture: [13,13,17,13,17,4,13]
    tubes4:
      section_segments: 8
      offset:
        x: 40
        y: -150
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,23,27,62,62,97,102,163]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,2,2,2,2,2,2,2,2]
      height: [0,2,2,2,2,2,2,2,2]
      texture: [13,13,17,13,17,4,13]
    tubes5:
      section_segments: 8
      offset:
        x: 20
        y: -120
        z: 0
      position:
        x: [-5,-5,0,0,4,4,4,5,6,0]
        y: [0,0,23,27,62,62,97,102,163]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,2,2,2,2,2,2,2,2]
      height: [0,2,2,2,2,2,2,2,2]
      texture: [13,13,17,13,17,17,13]
    tubes6:
      section_segments: 8
      offset:
        x: 10
        y: -120
        z: 20
      position:
        x: [-2,-2,0,0,0,0,0,0,0,0]
        y: [9,9,23,27,62,62,97,102,173]
        z: [-5,-5,-4,-4,0,0,0,0,5,5]
      width: [0,6,6,6,6,6,6,6,6]
      height: [0,6,6,6,6,6,6,6,6]
      texture: [13,13,17,18,18,13,4]
    tubes7:
      section_segments: 8
      offset:
        x: 50
        y: -90
        z: 15
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [25,25,33,37,62,62,97,102,123]
        z: [-9.5,-9.5,-4,-4,0,0,0,2,4,5]
      width: [0,6,6,6,6,6,6,6,6]
      height: [0,6,6,6,6,6,6,6,6]
      texture: [4,3,4,11,11,11,4]
    bodie_ring:
      section_segments: 12
      offset:
        x: 0
        y: -115
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-6,-6,-6,-4,-4,4,4,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,0,20,24,24,24,24,20,0,0]
      height: [0,0,20,24,24,24,24,20,0,0]
      texture: [17,18,12,17,4,12,12,17]
      propeller: false
    bodie_ring2:
      section_segments: 12
      offset:
        x: 0
        y: -75
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-6,-6,-6,-4,-4,4,4,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,0,28,30,30,30,30,26,0,0]
      height: [0,0,28,30,30,30,30,26,0,0]
      texture: [17,4,12,17,4,12,12,17]
      propeller: false
    bodie_ring3:
      section_segments: 12
      offset:
        x: 0
        y: 110
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-6,-6,-6,-4,-4,4,4,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,0,28,30,30,30,30,26,0,0]
      height: [0,0,28,30,30,30,30,26,0,0]
      texture: [17,4,12,17,4,12,12,17]
      propeller: false
    bodie_ring4:
      section_segments: 12
      offset:
        x: 50
        y: 40
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-45,-45,-40,-29,-27,-25,-25,-8,-8,-6,-4,4,4,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,16,20,20,20,18,16,16,18,20,20,20,20,16,0,0]
      height: [0,16,20,20,20,18,16,16,18,20,20,20,20,16,0,0]
      texture: [18,12,4,17,12,18,63,18,12,17,4,12,12,18]
      angle: 180
      propeller: false
    ring:
      section_segments: 9
      offset:
        x: 0
        y: -130
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-6,-4,-4,4,4,4,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 18 ]
      propeller: false
    ring2:
      section_segments: 9
      offset:
        x: 0
        y: -140
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-4,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 18 ]
      propeller: false
    ring3:
      section_segments: 9
      offset:
        x: 0
        y: -148
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-4,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 18 ]
      propeller: false
    ring4:
      section_segments: 12
      offset:
        x: 50
        y: -50
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-4,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 17 ]
      propeller: false
    ring5:
      section_segments: 12
      offset:
        x: 50
        y: -70
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-4,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [8,8,8,10,10,10,10,8,8,8]
      height: [8,8,8,10,10,10,10,8,8,8]
      texture: [ 17 ]
      propeller: false
    ring6:
      section_segments: 12
      offset:
        x: 50
        y: -150
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,-8,-4,-2,-2,2,2,2,2,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [7,7,13,13,13,14,14,14,7,7]
      height: [7,7,13,13,13,14,14,14,7,7]
      texture: [17,4,17,4]
      propeller: false
    ring7:
      section_segments: 6
      offset:
        x: 50
        y: -80
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
      section_segments: 6
      offset:
        x: 50
        y: -90
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
      section_segments: 6
      offset:
        x: 50
        y: -100
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
      section_segments: 6
      offset:
        x: 50
        y: -110
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
      section_segments: 6
      offset:
        x: 50
        y: -120
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-4,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 17 ]
      propeller: false
    ring12:
      section_segments: 6
      offset:
        x: 50
        y: -130
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-4,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 17 ]
      propeller: false
    ring13:
      section_segments: 6
      offset:
        x: 50
        y: -140
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-4,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 17 ]
      propeller: false
    reactor:
      section_segments: 12
      offset:
        x: 0
        y: 35
        z: -60
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-12,-12,0,3,3,1,1,1]
        z: [0,0,0,0,0,0,0,0]
      width: [0,20,20,18,16,14,8,0]
      height: [0,20,20,18,16,14,8,0]
      propeller: false
      texture: [4,4,12,17,4,8,17]
      vertical: true
      angle: 0
    connector:
      section_segments: 8
      offset:
        x: 20
        y: 0
        z: -10
      position:
        x: [0,0,0,0,0,0,0]
        y: [-17,-17,0,3,-4]
        z: [0,0,0,0,0]
      width: [0,10,10,5,0]
      height: [0,10,10,5,0]
      propeller: false
      texture: [4,4,12,17]
      vertical: true
      angle: -90
    cannons:
      section_segments: 12
      offset:
        x: 50
        y: 20
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-100,-110,-90,-90,-70,-70,-20,0,20,50,75,60]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,6,6,11,11,16,16,21,21,21,11,1]
      height: [0,6,6,11,11,16,16,21,21,21,11,1]
      angle: 0
      laser:
        damage: [2,4]
        rate: 10
        type: 2
        speed: [200,220]
        recoil: 2
        number: 1
        error: 0
      propeller: true
      texture: [17,13,18,13,18,10,8,4,63,4,17]
    cannons2:
      section_segments: 12
      offset:
        x: 50
        y: 20
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-100,-110,-90,-90,-70,-70,-20,0,20,50,85,30]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5,5,10,10,15,15,20,20,20,18,0]
      height: [0,5,5,10,10,15,15,20,20,20,18,0]
      angle: 0
      laser:
        damage: [2,4]
        rate: 10
        type: 2
        speed: [190,210]
        recoil: 6
        number: 1
        error: 0
      propeller: false
      texture: [17,4,4,4,4,4,10,4,63,4,18]
    cannons3:
      section_segments: 12
      offset:
        x: 50
        y: 20
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-100,-110,-90,-90,-70,-70,-20,0,20,50,65,50]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5,5,10,10,15,15,20,20,20,10,0]
      height: [0,5,5,10,10,15,15,20,20,20,10,0]
      angle: 0
      laser:
        damage: [2,4]
        rate: 10
        type: 2
        speed: [180,200]
        recoil: 6
        number: 1
        error: 0
      propeller: false
      texture: [17,4,4,4,4,4,10,4,63,4,17]
    cannons4:
      section_segments: 12
      offset:
        x: 50
        y: 20
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-100,-110,-90,-90,-70,-70,-20,0,20,50,65,50]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5,5,10,10,15,15,20,20,20,10,0]
      height: [0,5,5,10,10,15,15,20,20,20,10,0]
      angle: 0
      laser:
        damage: [2,4]
        rate: 10
        type: 2
        speed: [170,190]
        recoil: 6
        number: 1
        error: 0
      propeller: false
      texture: [17,4,4,4,4,4,10,4,63,4,17]
    cannons5:
      section_segments: 12
      offset:
        x: 50
        y: 20
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-100,-110,-90,-90,-70,-70,-20,0,20,50,65,50]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5,5,10,10,15,15,20,20,20,10,0]
      height: [0,5,5,10,10,15,15,20,20,20,10,0]
      angle: 0
      laser:
        damage: [2,4]
        rate: 10
        type: 2
        speed: [160,180]
        recoil: 6
        number: 1
        error: 0
      propeller: false
      texture: [17,4,4,4,4,4,10,4,63,4,17]
    cannons6:
      section_segments: 12
      offset:
        x: 50
        y: 20
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-100,-110,-90,-90,-70,-70,-20,0,20,50,65,50]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5,5,10,10,15,15,20,20,20,10,0]
      height: [0,5,5,10,10,15,15,20,20,20,10,0]
      angle: 0
      laser:
        damage: [2,4]
        rate: 10
        type: 2
        speed: [150,170]
        recoil: 6
        number: 1
        error: 0
      propeller: false
      texture: [17,4,4,4,4,4,10,4,63,4,17]
  wings:
    main:
      doubleside: true
      offset:
        x: 0
        y: 25
        z: 0
      length: [40,35,0,20,20,0,0,20,0]
      width: [40,40,60,150,150,120,70,50,30,30]
      angle: [-20,20,-20,-5,-5,-5,-5,-5,-5]
      position: [20,30,0,-30,10,20,20,20,40,40]
      texture: [4,18,4,63,4,18,17,4,4]
      bump:
        position: 60
        size: 20
    winglets:
      length: [20,5,0,5]
      width: [30,50,50,70,30]
      angle: [0,0,0,0]
      position: [20,20,30,30,40]
      texture: [18,63,13,4]
      bump:
        position: 10
        size: 6
      offset:
        x: 5
        y: -150
        z: 0
