return model =
  name: 'Solarium Barricade'
  level: 7
  model: 10
  size: 2.95
  specs:
    shield:
      capacity: [900,900]
      reload: [11,11]
    generator:
      capacity: [325,325]
      reload: [125,125]
    ship:
      mass: 850
      speed: [95,95]
      rotation: [40,40]
      acceleration: [120,120]
  bodies:
    main:
      section_segments: 8
      offset:
        x: 0
        y: 0
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-80,-85,-30,-90,-20,-25,40,85,85,100,100]
        z: [-10,-8,-5,-2,0,0,0,0,0,0,0]
      width: [0,40,40,20,22,30,40,30,35,35,0]
      height: [0,10,14,4,12,12,15,20,25,22,0]
      texture: [4,63,4,18,17,18,18,18,4,17]
      propeller: false
    main2:
      section_segments: 6
      offset:
        x: 15
        y: -3
        z: 13
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-14,-13,-10,0,3,4]
        z: [0,0,0,0,0,0,0,0]
      width: [0,22,27,27,23,0]
      height: [0,12,17,17,13,0]
      propeller: false
      texture: [18,4,3,4,18]
      vertical: false
      angle: 90
    main3:
      section_segments: 6
      offset:
        x: 10
        y: 35
        z: 5
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-33,-33,-30,0,33,64,64]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,22,27,37,37,37,0]
      height: [0,22,22,24,24,24,0]
      propeller: false
      texture: [18,4,63,4,18]
      vertical: false
      angle: 0
    main4:
      section_segments: 8
      offset:
        x: 0
        y: 30
        z: 20
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-33,-33,-30,0,55,55]
        z: [0,0,0,0,0,-2,-2,-2]
      width: [0,27,27,27,27,0]
      height: [0,14,14,14,14,0]
      propeller: false
      texture: [18,4,63,18,18]
      vertical: false
      angle: 0
    main5:
      section_segments: 6
      offset:
        x: 20
        y: 35
        z: 4
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-14,-13,-10,0,3,4]
        z: [0,0,0,0,0,0,0,0]
      width: [0,22,27,27,23,0]
      height: [0,22,27,27,23,0]
      propeller: false
      texture: [18,4,3,4,18]
      vertical: false
      angle: 0
    main6:
      section_segments: 6
      offset:
        x: 20
        y: 55
        z: 4
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-14,-13,-10,0,3,4]
        z: [0,0,0,0,0,0,0,0]
      width: [0,22,27,27,23,0]
      height: [0,22,27,27,23,0]
      propeller: false
      texture: [18,4,63,4,18]
      vertical: false
      angle: 0
    main7:
      section_segments: 6
      offset:
        x: 20
        y: 75
        z: 4
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-14,-13,-10,0,3,4]
        z: [0,0,0,0,0,0,0,0]
      width: [0,22,27,27,23,0]
      height: [0,22,27,27,23,0]
      propeller: false
      texture: [18,4,18,4,18]
      vertical: false
      angle: 0
    main8:
      section_segments: 8
      offset:
        x: 0
        y: 110
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-14,-13,-10,0,3,4]
        z: [0,0,0,0,0,0,0,0]
      width: [0,42,47,47,43,0]
      height: [0,22,27,27,23,0]
      propeller: false
      texture: [18,4,63,4,18]
      vertical: false
      angle: 0
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: 40
        z: 26
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-30,-35,-15,10,30,70,70]
        z: [0,3,2,-2,0,-7.1,-7]
      width: [0,8,13,15,15,15,0]
      height: [0,6,10,15,12,12,0]
      texture: [18,9,9,4,18]
      propeller: false
    reactor:
      section_segments: 6
      offset:
        x: 30
        y: 28
        z: -40
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-10,-10,0,3,-1,4,3]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,15,15,13,11,11,0]
      height: [0,15,15,13,11,11,0]
      propeller: false
      texture: [4,4,12,16.9,3.9,16.9]
      vertical: true
      angle: 20
    reactor2:
      section_segments: 6
      offset:
        x: 30
        y: 28
        z: -80
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-10,-10,0,3,-1,4,3]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,15,15,13,11,11,0]
      height: [0,15,15,13,11,11,0]
      propeller: false
      texture: [4,4,12,16.9,3.9,16.9]
      vertical: true
      angle: 20
    decoration:
      section_segments: [-140,-140,-90,-40,-40,40,40,40,90,140]
      offset:
        x: 0
        y: -10
        z: 18
      position:
        x: [0,0,0,0,0,0,0]
        y: [-25,-25,-20,-10,4,10,10]
        z: [0,0,0,0,0,0,0]
      width: [0,16,16,16,16,16,0]
      height: [0,16,16,16,16,16,0]
      angle: 0
      texture: [17.9,3.9,12.9,11,3.9,3.9]
    decoration2:
      section_segments: [-140,-140,-90,-40,-40,40,40,40,90,140]
      offset:
        x: 0
        y: -60
        z: 10
      position:
        x: [0,0,0,0,0,0,0]
        y: [-25,-25,-20,-10,4,10,10]
        z: [0,0,0,0,0,0,0]
      width: [0,16,16,16,16,16,0]
      height: [0,16,16,16,16,16,0]
      angle: 0
      texture: [17.9,1.9,16.9,11,3.9,3.9]
    Tube_Base:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 12
        y: -50
        z: 15
      position:
        x: [0,0,0,0,0,0,0]
        y: [-5,-5,-2,0,0]
        z: [0,0,0,0,0]
      width: [0,45,45,45,0]
      height: [0,10,10,10,0]
      propeller: false
      texture: [18,17,4,15.9]
      vertical: false
      angle: 90
    Tube_Base2:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 12
        y: -2
        z: 25
      position:
        x: [0,0,0,0,0,0,0]
        y: [-5,-5,-2,0,0]
        z: [0,0,0,0,0]
      width: [0,45,45,45,0]
      height: [0,10,10,10,0]
      propeller: false
      texture: [18,17,4,15.9]
      vertical: false
      angle: 90
    ring1:
      section_segments: 17
      offset:
        x: 18
        y: -31.3
        z: 14
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-1,-1,0,0,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [7,7,7,8,8,8,8,7,7,7]
      height: [7,7,7,8,8,8,8,7,7,7]
      texture: 17
      propeller: false
    ring2:
      section_segments: 17
      offset:
        x: 18
        y: -41.3
        z: 14
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-1,-1,0,0,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [7,7,7,8,8,8,8,7,7,7]
      height: [7,7,7,8,8,8,8,7,7,7]
      texture: 17
      propeller: false
    ring3:
      section_segments: 17
      offset:
        x: 18
        y: -51.3
        z: 14
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-1,-1,0,0,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [7,7,7,8,8,8,8,7,7,7]
      height: [7,7,7,8,8,8,8,7,7,7]
      texture: 17
      propeller: false
    ring4:
      section_segments: 17
      offset:
        x: 18
        y: -61.3
        z: 14
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-1,-1,0,0,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [7,7,7,8,8,8,8,7,7,7]
      height: [7,7,7,8,8,8,8,7,7,7]
      texture: 17
      propeller: false
    Chargers:
      section_segments: 12
      offset:
        x: 12
        y: 13
        z: 31.5
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-9,-9,-6,-8,-6,-4,2,2]
        z: [0,0,0,0,0,0,0,0]
      width: [0,3,3,5,6,4,4,0]
      height: [0,3,3,5,6,4,4,0]
      texture: [18,4,17,4,4,13,15.9]
      angle: -160
      vertical: true
    Chargers2:
      section_segments: 12
      offset:
        x: 12
        y: 13
        z: 41.5
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-9,-9,-6,-8,-6,-4,2,2]
        z: [0,0,0,0,0,0,0,0]
      width: [0,3,3,5,6,4,4,0]
      height: [0,3,3,5,6,4,4,0]
      texture: [18,4,17,4,4,13,15.9]
      angle: -160
      vertical: true
    Chargers3:
      section_segments: 12
      offset:
        x: 12
        y: 13
        z: 51.5
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-9,-9,-6,-8,-6,-4,2,2]
        z: [0,0,0,0,0,0,0,0]
      width: [0,3,3,5,6,4,4,0]
      height: [0,3,3,5,6,4,4,0]
      texture: [18,4,17,4,4,13,15.9]
      angle: -160
      vertical: true
    Chargers4:
      section_segments: 12
      offset:
        x: 12
        y: 13
        z: 61.5
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-9,-9,-6,-8,-6,-4,2,2]
        z: [0,0,0,0,0,0,0,0]
      width: [0,3,3,5,6,4,4,0]
      height: [0,3,3,5,6,4,4,0]
      texture: [18,4,17,4,4,13,15.9]
      angle: -160
      vertical: true
    Shield_Part:
      section_segments: 8
      offset:
        x: 0
        y: -61
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-71,-68,-66,-44,-24,0,0,0,16,38,40]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,42,44,44,44,44,44,46,46,36,0]
      height: [0,12,14,14,14,14,14,14,12,12,0]
      texture: [17.93,4,3,13,4,17,18,2,4,18]
      angle: 180
    Shield_Part2:
      section_segments: 12
      offset:
        x: 20
        y: 0
        z: 3
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-21,-28,-36,-24,-24,4,4,6,16,38,38]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,22,24,24,24,24,24,24,22,20,0]
      height: [0,12,14,14,14,14,14,14,14,12,0]
      texture: [17.93,4,3,12,4,17,17,13,4,18]
      angle: 180
    Shield_Part3:
      section_segments: 8
      offset:
        x: 35
        y: 20
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-48,-58,-36,-24,-24,4,4,6,16,38,38]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,14,14,14,14,14,14,14,14,14,0]
      height: [0,14,14,14,14,14,14,14,14,14,0]
      texture: [17,4,4,3,3,4,17,4,8,18]
      angle: 0
    cannons:
      section_segments: 8
      offset:
        x: 35
        y: 45
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-144,-150,-150,-130,-100,-100,-90,-90,-70,-70,-50,-50,-20,0,20,50,55,55]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5,6,8,8,8,8,10,15,15,15,15,15,15,15,15,10,0]
      height: [0,3,6,8,8,8,8,10,15,15,15,15,15,15,15,15,10,0]
      angle: 0
      laser:
        damage: [35,35]
        rate: 3
        type: 1
        speed: [190,190]
        number: 1
        angle: 0
        error: 0
        recoil: 0
      propeller: false
      texture: [17,13,4,18,18,13,18,3,4,4,18,12,4,63,4,3,4]
    cannons2:
      section_segments: 8
      offset:
        x: 0
        y: 45
        z: 20
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-140,-150,-150,-130,-100,-100,-90,-90,-70,-70,-50,-50,-20,0,20,50,55,55]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5,6,8,8,8,8,10,15,15,15,15,15,15,15,15,10,0]
      height: [0,3,6,8,8,8,8,10,10,10,10,10,10,10,10,10,10,0]
      angle: 0
      laser:
        damage: [35,35]
        rate: 3
        type: 1
        speed: [190,190]
        number: 1
        angle: 0
        error: 0
        recoil: 0
      propeller: false
      texture: [17,13,4,18,18,13,18,18,4,4,18,12,4,63,4,3,4]
    propulsors:
      section_segments: 8
      offset:
        x: 30
        y: 50
        z: 0
      position:
        x: [0,0,5,10,15,15,15]
        y: [-45,-50,-20,0,20,70,60]
        z: [0,0,0,0,0,0,0]
      width: [0,10,15,15,15,10,0]
      height: [0,15,15,15,20,10,0]
      texture: [11,2,3,4,18,12]
      angle: 0
      propeller: true
    propulsors2:
      section_segments: 8
      offset:
        x: 10
        y: 60
        z: 0
      position:
        x: [0,0,5,10,15,15,15]
        y: [-45,-50,-20,0,20,70,60]
        z: [0,0,0,0,0,0,0]
      width: [0,10,15,15,15,10,0]
      height: [0,15,15,15,20,10,0]
      texture: [11,2,3,4,18,12]
      angle: 0
      propeller: true
    propulsors3:
      section_segments: 7
      offset:
        x: 0
        y: 30
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-63,-60,-55,-63,-59,-58,-55,-54,-51,-50,-48,-5,-40,-40,-40,-40,-39,-36,-35,-19,-19,-19,-19,-18,-15,-14,-14,-12,-12,-11,-8,-7,-7,-5,-5,-4,-1,0,0,10,25,49,50,70,70,90,100,100,95,95,60,60]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,1,3.5,4,7,7.5,8,8.5,9,9.5,10,11,11,12,14,15,15,15,15,15,16,19,20,20,20,20,15,15,20,20,20,20,15,15,20,20,20,20,25,25,25,25,25,25,25,25,20,13,7,6,6,0]
      height: [0,1,3.5,4,7,7.5,8,8.5,9,9.5,10,11,11,12,14,15,15,15,15,15,16,19,20,20,20,20,15,15,20,20,20,20,15,15,20,20,20,20,25,25,25,25,25,25,25,25,20,13,7,6,6,0]
      texture: [17,4,13,3,17,1,17,4,17,1,18,13,17,4,17,17,4,17,11,17,11,17,17,11,17,11,12,11,17,11,17,11,12,11,17,11,17,11,2,4,11,17,13,4,4,3,16.9,8,18,16,17]
      propeller: true
  wings:
    main:
      offset:
        x: 25
        y: 0
        z: -10
      length: [0,0,0,25,0,20,0,5,5,10]
      width: [70,70,50,60,40,60,40,100,100,100,60]
      texture: [4,4,63,63,4,4,13,17,4,63]
      angle: [30,30,30,30,30,30,30,30,30,30]
      position: [60,60,60,60,50,50,80,80,80,100,120]
      doubleside: 1
      bump:
        position: -10
        size: 15
    main2:
      offset:
        x: 2
        y: -50
        z: 0
      length: [0,0,0,20,0,20,0,5,5,10]
      width: [70,70,50,60,40,60,40,140,140,140,60]
      texture: [4,4,63,63,4,4,13,4,4,1]
      angle: [0,0,0,0,0,0,0,0,0,0]
      position: [60,60,60,60,50,50,80,80,80,100,120]
      doubleside: 1
      bump:
        position: 40
        size: 10
    main3:
      offset:
        x: 15
        y: -110
        z: 0
      length: [0,0,0,10,0,20,0,5,5,10]
      width: [70,70,50,60,40,60,40,100,100,100,60]
      texture: [4,4,63,63,4,4,13,17,4,63]
      angle: [-50,-50,-50,-50,-50,-50,-50,-50,-50,-50]
      position: [60,60,60,60,50,50,80,80,80,100,120]
      doubleside: 1
      bump:
        position: -10
        size: 15
