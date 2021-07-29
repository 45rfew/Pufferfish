return model =
  name: 'Solarium ZenionIII'
  level: 4
  model: 7
  size: 1.5
  specs:
    shield:
      capacity: [228,255]
      reload: [8,10]
    generator:
      capacity: [120,150]
      reload: [40,50]
    ship:
      mass: 265
      speed: [70,105]
      rotation: [60,90]
      acceleration: [95,105]
  bodies:
    main:
      section_segments: 12
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-78,-75,-70,-50,-20,30,70,120,130]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,10,18,22,25,30,30,25,20]
      height: [0,5,8,17,25,30,30,30,20]
      texture: [3,4,2,3,11,63,10,4]
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
      texture: [11,2,11,17,2,11,17,4,17]
      propeller: false
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: 0
        z: 18
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-49,-45,-25,0,30,40]
        z: [-5,-5,0,0,0,0]
      width: [0,10,13,15,15,0]
      height: [0,10,13,15,13,0]
      texture: [4,9,9,4]
      propeller: false
    cannons:
      section_segments: 6
      offset:
        x: 70
        y: -10
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-100,-105,-90,-85,-50,-45,-20,0,20,50,55]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,8,10,8,8,15,15,15,15,10,0]
      height: [0,8,10,8,8,10,10,10,10,10,0]
      angle: 0
      laser:
        damage: [10,12]
        rate: 3.5
        type: 1
        speed: [170,200]
        number: 1
        angle: 0.1
        error: 0
      propeller: false
      texture: [16.9,10,3.9,12,3.9,2.9,10,3.9,63,18]
    cannons2:
      section_segments: 6
      offset:
        x: 50
        y: 70
        z: 50
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-100,-105,-90,-85,-50,-45,-20,0,20,50,50]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,8,8,8,8,10,10,10,15,10,0]
      height: [0,8,8,8,8,10,10,10,10,10,0]
      angle: 0
      laser:
        damage: [24,26]
        rate: 1
        type: 1
        speed: [260,290]
        number: 1
        angle: 0
        error: 0
        recoil: 60
      propeller: false
      texture: [16.9,10,3.9,12,3.9,2.9,10,3.9,63,18]
    propulsor:
      section_segments: 12
      offset:
        x: 50
        y: 45
        z: 22
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-25,-35,-20,0,70,80,90,70,70,70]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,20,25,25,25,20,18,18,15,0]
      height: [0,20,25,25,25,20,18,18,15,0]
      texture: [11,4,63,4,8,13,18,12,17]
      propeller: true
    bodie_ring:
      section_segments: 6
      offset:
        x: 30
        y: 50
        z: 15
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
      section_segments: 6
      offset:
        x: 30
        y: 110
        z: 15
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-28,-28,-28,-24,-14,-5,4,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,0,18,20,20,20,20,18,0,0]
      height: [0,0,18,20,20,20,20,18,0,0]
      texture: [11,11,4,13,17,12,4,11]
      angle: 0
      propeller: false
    bodie_ring3:
      section_segments: 12
      offset:
        x: 50
        y: 40
        z: 28
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-28,-28,-28,-24,-24,4,4,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,0,18,20,20,20,20,16,0,0]
      height: [0,0,18,20,20,20,20,16,0,0]
      texture: [18,1,12,17,11,12,12,18]
      angle: 180
      propeller: false
    bodie_ring4:
      section_segments: 12
      offset:
        x: 50
        y: 80
        z: 28
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-28,-28,-28,-24,-24,4,4,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,0,18,20,20,20,20,16,0,0]
      height: [0,0,18,20,20,20,20,16,0,0]
      texture: [18,1,12,17,11,12,12,18]
      angle: 180
      propeller: false
    cannon_connector:
      section_segments: [0,40,120,240,300,-300,-240,-120,-40,0]
      offset:
        x: 0
        y: 75
        z: 50
      position:
        x: [-50,-50,-50,-50,-50,-50,-50]
        y: [-25,-25,-20,-10,4,10,10]
        z: [0,0,0,0,0,0,0]
      width: [0,16,16,16,16,16,0]
      height: [0,16,16,16,16,16,0]
      angle: 0
      texture: [3.9,3.9,12.9,3,3.9,3.9]
    cannon_connector2:
      section_segments: [0,40,120,240,300,-300,-240,-120,-40,0]
      offset:
        x: 0
        y: 75
        z: 50
      position:
        x: [50,50,50,50,50,50,50]
        y: [-25,-25,-20,-10,4,10,10]
        z: [0,0,0,0,0,0,0]
      width: [0,16,16,16,16,16,0]
      height: [0,16,16,16,16,16,0]
      angle: 0
      texture: [3.9,3.9,12.9,3,3.9,3.9]
  wings:
    main:
      offset:
        x: 20
        y: 60
        z: 0
      length: [40,20,20,0]
      width: [70,100,140,110]
      texture: [10,18,2]
      angle: [0,0,0]
      position: [10,-10,-10,-36]
      doubleside: 1
      bump:
        position: 30
        size: 10
    main2:
      offset:
        x: 41
        y: 60
        z: 0
      length: [0,30,20,0]
      width: [70,100,140,130]
      texture: [4,63,4]
      angle: [0,0,0]
      position: [10,-10,-10,-36]
      doubleside: 1
      bump:
        position: 30
        size: 10
    main3:
      offset:
        x: 40
        y: 80
        z: 30
      length: [30,20,20,0]
      width: [80,80,80,70]
      texture: [10,18,63]
      angle: [0,0,0]
      position: [10,-10,-3,26]
      doubleside: 1
      bump:
        position: 40
        size: 10
    winglets:
      length: [0,14,18,18,0,0,0.1,0.1]
      width: [0,80,130,130,80,60,10,20,20,20]
      angle: [0,0,0,0,0,0,0,0]
      position: [-25,-25,30,80,80,80,45,80,80]
      texture: [11,2,4,63,4,11,17,4]
      doubleside: 1
      bump:
        position: 40
        size: 10
      offset:
        x: 80
        y: -60
        z: 3
    winglets2:
      length: [0,9,9,18,0,0,0.1,0.1]
      width: [0,80,130,130,80,60,10,20,20,20]
      angle: [0,0,0,0,0,0,0,0]
      position: [5,25,60,50,80,80,45,80,80]
      texture: [17,3,4,63,4,11,17,4]
      doubleside: 1
      bump:
        position: 40
        size: 3
      offset:
        x: 80.1
        y: -128
        z: 2.5
