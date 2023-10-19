return model =
  name: 'Solarium Artillery'
  level: 7
  model: 13
  size: 2.2
  specs:
    shield:
      capacity: [725,725]
      reload: [18,18]
    generator:
      capacity: [465,465]
      reload: [195,195]
    ship:
      mass: 670
      speed: [110,110]
      rotation: [20,20]
      acceleration: [90,90]
  bodies:
    main:
      section_segments: 8
      offset:
        x: 0
        y: 0
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-49,-45,-25,-10,5,40,100,90,100]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,8,14,18,18,20,18,0]
      height: [0,4,10,15,15,20,10,0]
      texture: [4,63,4,63,18,4,17]
      propeller: true
    main_sides:
      section_segments: 8
      offset:
        x: 8
        y: 0
        z: 10
      position:
        x: [-4,-4,0,0,0,0,3,3,3,2,2,2]
        y: [-38,-35,-15,10,10,40,70,65,75,80,90,85]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [4,8,14,17,18,20,13,10,10,10,8,0]
      height: [4,4,8,8,10,10,10,10,10,10,8,0]
      texture: [13,4,18,17,4,63,17,10,4,63,17]
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: -20
        z: 10
      position:
        x: [0,0,0,0,0,0,0]
        y: [-25,-16,-5,20,50]
        z: [0,2,3,6,8]
      width: [0,5,10,10,10]
      height: [0,5,10,12,12]
      texture: [4,4,9]
      propeller: false
    Connectors:
      section_segments: 8
      offset:
        x: 20
        y: 70
        z: 8
      position:
        x: [0,0,0,0,0,0,0]
        y: [-15,-15,-5,3,3]
        z: [0,0,0,0,0]
      width: [0,40,40,40,0]
      height: [0,5,10,5,0]
      propeller: false
      texture: [18,4,63,18]
      vertical: false
      angle: 40
    Connectors2:
      section_segments: 6
      offset:
        x: 17
        y: 40
        z: 15
      position:
        x: [0,0,0,0,0,0,0]
        y: [-15,-15,-5,3,3]
        z: [0,0,0,0,0]
      width: [0,30,30,30,0]
      height: [0,5,10,5,0]
      propeller: false
      texture: [18,4,63,18]
      vertical: false
      angle: 90
    cannons:
      section_segments: 6
      offset:
        x: 40
        y: 70
        z: -10
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-205,-215,-215,-200,-180,-180,-90,-90,-70,-70,-50,-50,-20,0,10,20,25,25]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5,8,8,8,8,8,10,15,15,15,15,15,15,15,15,10,0]
      height: [0,3,8,8,8,8,8,10,15,15,15,15,15,15,15,15,10,0]
      angle: 0
      laser:
        damage: [35,35]
        rate: 2.5
        type: 1
        speed: [190,190]
        number: 2
        angle: 3
        error: 0
        recoil: 50
      propeller: false
      texture: [17,13,4,18,18,16.9,18,4,18,13,18,10,4,63,4,3,4]
    cannons2:
      section_segments: 6
      offset:
        x: 90
        y: 120
        z: -6
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-210,-220,-220,-200,-180,-180,-90,-90,-70,-70,-50,-50,-20,0,20,30,35,35]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5,8,8,8,8,8,10,15,15,15,15,15,15,15,15,10,0]
      height: [0,3,8,8,8,8,8,10,15,15,15,15,15,15,15,15,10,0]
      angle: 0
      laser:
        damage: [30,30]
        rate: 3
        type: 1
        speed: [190,190]
        number: 2
        angle: 3
        error: 0
        recoil: 50
      propeller: false
      texture: [17,13,4,18,18,16.9,18,4,18,13,18,10,4,63,4,3,4]
    cannons3:
      section_segments: 12
      offset:
        x: 30
        y: 50
        z: 12
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-65,-68,-55,-55,-45,-45,-20,0,20,30,30,50,60,60]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,-1,-1]
      width: [0,4,5,4,4,5,6,6,6,6,7,7,6,0]
      height: [0,4,5,4,4,5,6,6,6,6,7,7,4,0]
      angle: 0
      laser:
        damage: [22,22]
        rate: 4.5
        type: 1
        speed: [180,200]
        number: 1
        angle: 0
        error: 5
        recoil: 0
      propeller: false
      texture: [17,4,4,13,17,10.24,13,1,3,17,4,11]
    little_engines:
      section_segments: 12
      offset:
        x: 0
        y: 50
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-30,-30,-15,-18,-10,30,50,45]
        z: [0,0,0,2.5,0,0,0,0]
      width: [0,5,14,18,21,19,15,0]
      height: [0,5,14,18,21,19,15,0]
      texture: [16.9,16.9,16,4,10,4,17]
      propeller: true
    little_engines2:
      section_segments: 12
      offset:
        x: 90
        y: 120
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-10,-10,-15,-18,-10,30,50,45]
        z: [0,0,0,2.5,0,0,0,0]
      width: [0,5,14,18,21,19,15,0]
      height: [0,5,14,18,21,19,15,0]
      texture: [16.9,16.9,16,4,10,4,17]
      propeller: true
    Main_rings:
      section_segments: 6
      offset:
        x: 40
        y: 45.5
        z: -5
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-71,-68,-66,-64,-64,-24,24,26,56,58]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,12,14,14,14,24,24,24,22,0]
      height: [0,10,10,10,10,10,10,10,10,0]
      texture: [17.93,4,17,11,11,4,17,18]
      angle: 0
    Main_rings2:
      section_segments: 6
      offset:
        x: 90
        y: 75.5
        z: -5
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-71,-68,-66,-64,-64,-24,24,26,56,58]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,12,14,14,14,14,14,14,12,0]
      height: [0,10,10,10,10,10,10,10,10,0]
      texture: [17.93,4,17,18,18,4,17,18]
      angle: 0
    Main_rings3:
      section_segments: 8
      offset:
        x: 90
        y: 105.5
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-71,-68,-66,-64,-64,-24,24,26,36,38]
        z: [-13,-13,-13,-10,-10,-3,0,0,0,0]
      width: [0,5,5,5,5,5,5,5,5,0]
      height: [0,10,10,10,10,10,10,10,10,0]
      texture: [17.93,4,17,18,18,4,17,18]
      angle: 0
    main_rings4:
      section_segments: 6
      offset:
        x: 90
        y: -80
        z: -6
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-15,-15,-15,-15,0,20,20,20]
        z: [0,0,0,0,0,0,0,0]
      width: [0,5,10,10,10,10,10,0]
      height: [0,5,10,10,10,10,10,0]
      texture: [16.9,16.9,18,4,12,4,17]
    main_rings5:
      section_segments: 6
      offset:
        x: 90
        y: -43
        z: -6
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-15,-15,-15,-15,0,20,20,20]
        z: [0,0,0,0,0,0,0,0]
      width: [0,5,10,14,14,14,14,0]
      height: [0,5,14,14,14,14,14,0]
      texture: [16.9,16.9,18,4,12,4,17]
    main_rings6:
      section_segments: 6
      offset:
        x: 90
        y: -7
        z: -6
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-15,-15,-15,-15,0,20,80,80]
        z: [0,0,0,0,0,0,0,0]
      width: [0,5,10,18,18,18,18,0]
      height: [0,5,14,18,18,18,18,0]
      texture: [16.9,16.9,18,4,10,4,17]
    main_rings7:
      section_segments: 6
      offset:
        x: 40
        y: -51
        z: -10
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-15,-15,-15,-15,0,20,20,20]
        z: [0,0,0,0,0,0,0,0]
      width: [0,5,10,18,18,18,18,0]
      height: [0,5,10,18,18,18,18,0]
      texture: [16.9,16.9,18,4,10,4,17]
    main_rings8:
      section_segments: 6
      offset:
        x: 40
        y: -87
        z: -10
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-15,-15,-15,-15,0,20,20,20]
        z: [0,0,0,0,0,0,0,0]
      width: [0,5,10,14,14,14,14,0]
      height: [0,5,14,14,14,14,14,0]
      texture: [16.9,16.9,18,4,12,4,17]
    main_rings9:
      section_segments: 6
      offset:
        x: 40
        y: -124
        z: -10
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-15,-15,-15,-15,0,20,20,20]
        z: [0,0,0,0,0,0,0,0]
      width: [0,5,10,10,10,10,10,0]
      height: [0,5,10,10,10,10,10,0]
      texture: [16.9,16.9,18,4,12,4,17]
    reactor:
      section_segments: 6
      offset:
        x: 90
        y: 19
        z: -95
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-10,-10,0,3,-1,-1,-1]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,5,5,3,2,2,0]
      height: [0,5,5,3,2,2,0]
      propeller: false
      texture: [4,3.9,12,16.9,3.9,16.9]
      vertical: true
      angle: 0
    reactor2:
      section_segments: 6
      offset:
        x: 90
        y: 16.5
        z: -70
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-10,-10,0,3,-1,-1,-1]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,5,5,3,2,2,0]
      height: [0,5,5,3,2,2,0]
      propeller: false
      texture: [4,3.9,12,16.9,3.9,16.9]
      vertical: true
      angle: 0
    reactor3:
      section_segments: 6
      offset:
        x: 90
        y: 13
        z: -50
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-10,-10,0,3,-1,-1,-1]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,5,5,3,2,2,0]
      height: [0,5,5,3,2,2,0]
      propeller: false
      texture: [4,3.9,12,16.9,3.9,16.9]
      vertical: true
      angle: 0
    reactor4:
      section_segments: 6
      offset:
        x: 90
        y: 25
        z: -130
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-10,-10,0,3,-1,-1,-1]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,15,15,13,12,12,0]
      height: [0,15,15,13,12,12,0]
      propeller: false
      texture: [4,3.9,12,16.9,3.9,16.9]
      vertical: true
      angle: 0
    reactor5:
      section_segments: 6
      offset:
        x: 90
        y: 5
        z: -30
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-10,-10,0,3,3,3,3]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,15,15,13,12,12,0]
      height: [0,15,15,13,12,12,0]
      propeller: false
      texture: [4,3.9,12,16.9,3.9,17.9]
      vertical: true
      angle: 0
    reactor6:
      section_segments: 6
      offset:
        x: 90
        y: -15
        z: -30
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-10,-10,0,3,3,3,3]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,15,15,13,12,12,0]
      height: [0,15,15,13,12,12,0]
      propeller: false
      texture: [4,3.9,12,16.9,3.9,17.9]
      vertical: true
      angle: 180
    propulsors:
      section_segments: 6
      offset:
        x: 40
        y: 20
        z: -10
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-13,-10,-15,-13,-9,-8,-5,-4,-1,0,-8,-45,-50,-50,-50,-50,-49,-46,-45,-29,-29,-29,-29,-28,-25,-24,-24,-22,-22,-21,-18,-7,-7,-5,-5,-4,-1,0,0,10,25,49,50,70,70,90,100,100,95,95,60,60]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,1,3.5,4,7,7.5,8,8.5,9,9.5,10,11,11,12,14,15,15,15,15,15,16,19,20,20,20,20,15,15,20,20,20,20,15,15,20,20,20,20,20,25,25,25,25,25,25,25,20,13,7,6,6,0]
      height: [0,1,3.5,4,7,7.5,8,8.5,9,9.5,10,11,11,12,14,15,15,15,15,15,16,19,20,20,20,20,15,15,20,20,20,20,15,15,20,20,20,20,20,25,25,25,25,25,25,25,20,13,7,6,6,0]
      texture: [17,4,13,3,17,1,17,4,17,1,18,13,17,4,17,17,4,17,12,17,4,17,4,4,17,4,12,4,17,4,13,11,12,11,17,11,17,11,18,4,13,17,3,4,4,1,17,8,18,16,17]
      propeller: true
  wings:
    main1:
      offset:
        x: 10
        y: -40
        z: 10
      length: [0,0,0,20,0,20,0,5,15,10,0,20,0,5,15,5]
      width: [60,60,40,50,30,55,40,200,200,200,100,50,40,170,170,140,50]
      texture: [4,4,63,63,4,4,13,17,4,63,4,18,13,4,63,4]
      angle: [0,0,0,0,0,0,0,0,0,0,0,-30,-30,-30,-30,-30]
      position: [60,60,60,60,50,50,80,70,70,90,120,120,140,140,140,140,160]
      doubleside: 1
      bump:
        position: 40
        size: 15
    winglets:
      length: [30,10,0,10,3]
      width: [10,30,30,70,50,30]
      angle: [50,20,20,20,20]
      position: [40,40,50,50,50,50]
      texture: [4,17,13,4,17]
      bump:
        position: 30
        size: 30
      offset:
        x: -10
        y: 30
        z: -8
    winglets2:
      length: [0,10,0,10,3]
      width: [10,30,30,70,50,30]
      angle: [0,0,0,0,0]
      position: [40,40,50,50,50,50]
      texture: [4,17,13,4,63]
      bump:
        position: 10
        size: 20
      offset:
        x: 20
        y: 30
        z: 20
