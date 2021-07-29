return model =
  name: 'Lunatic Quadra'
  level: 4
  model: 2
  size: 1.45
  specs:
    shield:
      capacity: [215,260]
      reload: [7,9]
    generator:
      capacity: [150,210]
      reload: [45,60]
    ship:
      mass: 240
      speed: [90,115]
      rotation: [50,65]
      acceleration: [90,110]
  bodies:
    main:
      section_segments: 12
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-91,-99,-105,-98,-85,-67,-50,0,30,100,110,120,109]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,8,11,15,19,21,22,25,30,30,29,18,0]
      height: [0,7,11,14,17,19,20,20,30,30,29,18,0]
      texture: [4,3,18,4,3,4,63,4,11,4,3,17]
      propeller: true
    main2:
      section_segments: 8
      offset:
        x: 13
        y: 0
        z: 0
      position:
        x: [2,2,0,0,0,0,0]
        y: [-69,-69,-78,-50,30,100,80]
        z: [0,0,0,0,0,0,0]
      width: [0,8,14,18,26,18,0]
      height: [0,5,7,11,16,12,0]
      texture: [17,18,4,18,8,17]
      propeller: false
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: -89
        z: 12
      position:
        x: [0,0,0,0,0,0,0]
        y: [-7,0,15,40,75]
        z: [-12,2,-1,0,-3]
      width: [0,8,12,14,12]
      height: [0,4,12,14,12]
      texture: [4,9,9,4]
      propeller: false
    cannon_barrel:
      section_segments: [0,40,120,-120,-40,0]
      offset:
        x: 0
        y: 40
        z: 20
      position:
        x: [40,40,40,40,40,40,40]
        y: [-45,-45,-20,0,20,50,55]
        z: [0,0,0,0,0,0,0]
      width: [0,15,15,15,15,15,0]
      height: [0,15,15,15,15,15,0]
      angle: 0
      texture: [3.9,3.9,12.9,11,63,3.9]
    cannon_barrel2:
      section_segments: [0,40,120,-120,-40,0]
      offset:
        x: 0
        y: 40
        z: 20
      position:
        x: [-40,-40,-40,-40,-40,-40,-40]
        y: [-45,-45,-20,0,20,50,55]
        z: [0,0,0,0,0,0,0]
      width: [0,15,15,15,15,15,0]
      height: [0,15,15,15,15,15,0]
      angle: 0
      texture: [3.9,3.9,12.9,11,63,3.9]
    cannon_barrel3:
      section_segments: [0,40,120,-120,-40,0]
      offset:
        x: 0
        y: 36
        z: 20
      position:
        x: [40,40,40,40,40,40,40]
        y: [-45,-45,-20,0,20,50,55]
        z: [0,0,0,0,0,0,0]
      width: [0,13,13,13,13,13,0]
      height: [0,13,13,13,13,13,0]
      angle: 0
      texture: [18,18,12.9,11,63,3.9]
    cannon_barrel4:
      section_segments: [0,40,120,-120,-40,0]
      offset:
        x: 0
        y: 36
        z: 20
      position:
        x: [-40,-40,-40,-40,-40,-40,-40]
        y: [-45,-45,-20,0,20,50,55]
        z: [0,0,0,0,0,0,0]
      width: [0,13,13,13,13,13,0]
      height: [0,13,13,13,13,13,0]
      angle: 0
      texture: [18,18,12.9,11,63,3.9]
    cannon_barrel5:
      section_segments: [0,40,120,240,300,-300,-240,-120,-40,0]
      offset:
        x: 0
        y: 40
        z: 20
      position:
        x: [40,40,40,40,40,40,40]
        y: [-25,-25,-20,-10,4,10,10]
        z: [0,0,0,0,0,0,0]
      width: [0,16,16,16,16,16,0]
      height: [0,16,16,16,16,16,0]
      angle: 0
      texture: [3.9,3.9,8,3,3.9,3.9]
    cannon_barrel6:
      section_segments: [0,40,120,240,300,-300,-240,-120,-40,0]
      offset:
        x: 0
        y: 40
        z: 20
      position:
        x: [-40,-40,-40,-40,-40,-40,-40]
        y: [-25,-25,-20,-10,4,10,10]
        z: [0,0,0,0,0,0,0]
      width: [0,16,16,16,16,16,0]
      height: [0,16,16,16,16,16,0]
      angle: 0
      texture: [3.9,3.9,8,3,3.9,3.9]
    cannons:
      section_segments: 6
      offset:
        x: 40
        y: -34
        z: 21
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-40,-55,-45,-20,0,20,50,55]
        z: [0,0,0,0,0,0,0,0]
      width: [0,4,8,8,8,8,8,0]
      height: [0,4,8,8,8,8,8,0]
      angle: 0
      laser:
        damage: [15,25]
        rate: 2
        type: 1
        speed: [150,180]
        number: 1
        angle: 0
        error: 0
        recoil: 50
      texture: [16.9,11,3.9,12.9,11,17,3.9]
    cannon_barrel7:
      section_segments: [0,40,120,-120,-40,0]
      offset:
        x: 0
        y: 30
        z: -10
      position:
        x: [70,70,70,70,70,70,70]
        y: [-45,-45,-20,0,20,50,55]
        z: [0,0,0,0,0,0,0]
      width: [0,15,15,15,15,15,0]
      height: [0,15,15,15,15,15,0]
      angle: 0
      texture: [3.9,3.9,12.9,11,63,3.9]
    cannon_barrel8:
      section_segments: [0,40,120,-120,-40,0]
      offset:
        x: 0
        y: 30
        z: -10
      position:
        x: [-70,-70,-70,-70,-70,-70,-70]
        y: [-45,-45,-20,0,20,50,55]
        z: [0,0,0,0,0,0,0]
      width: [0,15,15,15,15,15,0]
      height: [0,15,15,15,15,15,0]
      angle: 0
      texture: [3.9,3.9,12.9,11,63,3.9]
    cannon_barrel9:
      section_segments: [0,40,120,-120,-40,0]
      offset:
        x: 0
        y: 26
        z: -10
      position:
        x: [70,70,70,70,70,70,70]
        y: [-45,-45,-20,0,20,50,55]
        z: [0,0,0,0,0,0,0]
      width: [0,13,13,13,13,13,0]
      height: [0,13,13,13,13,13,0]
      angle: 0
      texture: [18,18,12.9,11,63,3.9]
    cannon_barrel10:
      section_segments: [0,40,120,-120,-40,0]
      offset:
        x: 0
        y: 26
        z: -10
      position:
        x: [-70,-70,-70,-70,-70,-70,-70]
        y: [-45,-45,-20,0,20,50,55]
        z: [0,0,0,0,0,0,0]
      width: [0,13,13,13,13,13,0]
      height: [0,13,13,13,13,13,0]
      angle: 0
      texture: [18,18,12.9,11,63,3.9]
    cannon_barrel11:
      section_segments: [0,40,120,240,300,-300,-240,-120,-40,0]
      offset:
        x: 0
        y: 35
        z: -10
      position:
        x: [70,70,70,70,70,70,70]
        y: [-25,-25,-20,-10,4,10,10]
        z: [0,0,0,0,0,0,0]
      width: [0,16,16,16,16,16,0]
      height: [0,16,16,16,16,16,0]
      angle: 0
      texture: [3.9,3.9,8,3,3.9,3.9]
    cannon_barrel12:
      section_segments: [0,40,120,240,300,-300,-240,-120,-40,0]
      offset:
        x: 0
        y: 35
        z: -10
      position:
        x: [-70,-70,-70,-70,-70,-70,-70]
        y: [-25,-25,-20,-10,4,10,10]
        z: [0,0,0,0,0,0,0]
      width: [0,16,16,16,16,16,0]
      height: [0,16,16,16,16,16,0]
      angle: 0
      texture: [3.9,3.9,8,3,3.9,3.9]
    cannons2:
      section_segments: 6
      offset:
        x: 70
        y: -44
        z: -9
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-40,-55,-45,-20,0,20,50,55]
        z: [0,0,0,0,0,0,0,0]
      width: [0,4,8,8,8,8,8,0]
      height: [0,4,8,8,8,8,8,0]
      angle: 0
      laser:
        damage: [15,25]
        rate: 2
        type: 1
        speed: [150,180]
        number: 1
        angle: 0
        error: 0
        recoil: 50
      texture: [16.9,11,3.9,12.9,11,17,3.9]
    Body_ring:
      section_segments: 6
      offset:
        x: 29
        y: 30
        z: 15
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-11,-8,-6,-4,-4,4,4,6,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,12,14,14,14,14,14,14,12,0]
      height: [0,12,14,14,14,14,14,14,12,0]
      texture: [18,4,4,4,12,18,4,4,18]
    Body_ring2:
      section_segments: 6
      offset:
        x: 29
        y: 70
        z: 15
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-11,-8,-6,-4,-4,4,4,6,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,12,14,14,14,14,14,14,12,0]
      height: [0,12,14,14,14,14,14,14,12,0]
      texture: [18,4,4,4,12,18,4,4,18]
    Body_ring3:
      section_segments: 12
      offset:
        x: 40
        y: 75
        z: 20
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-11,-8,-6,-4,-4,4,4,6,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,12,14,14,14,14,14,14,12,0]
      height: [0,12,14,14,14,14,14,14,12,0]
      texture: [18,4,4,4,17,18,4,4,18]
    Body_ring4:
      section_segments: 12
      offset:
        x: 70
        y: 65
        z: -10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-11,-8,-6,-4,-4,4,4,6,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,12,14,14,14,14,14,14,12,0]
      height: [0,12,14,14,14,14,14,14,12,0]
      texture: [18,4,4,4,17,18,4,4,18]
    decoration:
      section_segments: 8
      offset:
        x: 10
        y: 50
        z: 23
      position:
        x: [0,0,0,0,0,0,0]
        y: [-25,-25,-20,0,10,15,15]
        z: [0,0,0,0,0,0,0]
      width: [0,10,15,15,15,10,0]
      height: [0,10,15,15,15,10,0]
      angle: 90
      texture: [18,4,63,12,4,18]
    decoration2:
      section_segments: 8
      offset:
        x: 10
        y: 80
        z: 23
      position:
        x: [0,0,0,0,0,0,0]
        y: [-25,-25,-20,0,10,15,15]
        z: [0,0,0,0,0,0,0]
      width: [0,10,15,15,15,10,0]
      height: [0,10,15,15,15,10,0]
      angle: 90
      texture: [18,4,63,12,4,18]
    propulsor:
      section_segments: 10
      offset:
        x: 40
        y: 25
        z: 5
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-10,-10,-15,-15,0,10,20,25,30,35,50,60,55]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,4,10,11,13,13,13,13,13,13,12,8,0]
      height: [0,4,10,11,13,13,13,13,13,13,12,8,0]
      texture: [18,4,17,3,13,13,18,4,4,3,8,16.9]
      propeller: true
    propulsor2:
      section_segments: 10
      offset:
        x: 70
        y: 25
        z: -20
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-10,-10,-15,-15,0,10,20,25,30,35,40,50,45]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,4,10,11,13,13,13,13,13,13,12,8,0]
      height: [0,4,10,11,13,13,13,13,13,13,12,8,0]
      texture: [18,4,17,3,13,13,18,63,63,3,8,17]
      propeller: true
  wings:
    main:
      offset:
        x: 0
        y: 60
        z: 0
      length: [80,20]
      width: [70,50,30]
      texture: [4,63]
      angle: [-10,0]
      doubleside: 1
      position: [10,-20,10]
      bump:
        position: -10
        size: 15
    main2:
      offset:
        x: 0
        y: 63
        z: 0
      length: [80,20,0,5,5]
      width: [70,50,80,80,75,40]
      texture: [4,4,18,63,4]
      angle: [-10,0,0,0,0]
      doubleside: 1
      position: [10,0,-20,-30,-30,-30]
      bump:
        position: -70
        size: 11
    main3:
      offset:
        x: 40
        y: 60
        z: -5
      length: [50,20]
      width: [70,50,30]
      texture: [4,18]
      angle: [-10,0]
      doubleside: 1
      position: [-30,10,0]
      bump:
        position: -10
        size: 9
    main4:
      offset:
        x: 0
        y: 60
        z: 0
      length: [50,45]
      width: [70,50,60]
      texture: [4,18]
      angle: [-10,-5]
      doubleside: 1
      position: [-30,10,-10]
      bump:
        position: -10
        size: 11
    main5:
      offset:
        x: 0
        y: 60
        z: 0
      length: [60,20]
      width: [70,50,30]
      texture: [4,63]
      angle: [20,-20]
      doubleside: 1
      position: [10,-20,-20]
      bump:
        position: -10
        size: 10
