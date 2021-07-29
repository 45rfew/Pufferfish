return model =
  name: 'Lunatic Phantom'
  level: 5
  model: 3
  size: 1.2
  specs:
    shield:
      capacity: [275,325]
      reload: [7,11]
    generator:
      capacity: [160,250]
      reload: [45,75]
    ship:
      mass: 300
      speed: [100,120]
      rotation: [40,50]
      acceleration: [80,110]
  bodies:
    main:
      section_segments: [0,40,120,240,300,-300,-240,-120,-40,0]
      offset:
        x: 0
        y: 15
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-90,-90,-100,-100,-50,0,30,70,100,100]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,23,23,25,26,27,28,29,30,0]
      height: [0,25,25,27,28,29,30,30,30,0]
      texture: [4,4,17,4,63,18,4,3,3]
    main2:
      section_segments: 6
      offset:
        x: 13
        y: 15
        z: -5
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-80,-80,-80,-80,-50,0,30,70,100,99]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,13,13,15,16,17,18,19,20,0]
      height: [0,15,15,17,18,19,20,20,20,0]
      texture: [18,4,17,63,4,18,4,3,3.9]
    main3:
      section_segments: 6
      offset:
        x: 0
        y: 15.1
        z: -10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-90,-90,-100,-100,-50,0,30,70,100,100]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,23,23,25,26,27,28,29,30,0]
      height: [0,15,15,17,18,19,20,20,20,0]
      texture: [18,4,17,3,4,18,4,3,3.9]
    main4:
      section_segments: [-140,-140,-90,-40,-40,40,40,40,90,140]
      offset:
        x: 0
        y: -103
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-40,-40,-45,-35,-20,4,10,10]
        z: [0,0,0,0,0,0,0,0]
      width: [0,13,13,18,22,25,25,0]
      height: [0,13,13,18,22,25,25,0]
      angle: 0
      texture: [17,17.9,3.9,3,63,3.9,3.9]
    reactor:
      section_segments: 12
      offset:
        x: 0
        y: 30
        z: -35
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-20,-20,0,3,-1,4,3,6,6,6]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,20,20,18,16,16,13,12,8,0]
      height: [0,20,20,18,16,16,13,12,8,0]
      propeller: false
      texture: [4,12,18,8,4,17,3,13,17]
      vertical: true
      angle: 0
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: -130
        z: 14
      position:
        x: [0,0,0,0,0,0,0]
        y: [-15,-10,10,30,61,61]
        z: [-6,-5,0,1,1,0]
      width: [0,7,10,10,10,0]
      height: [0,8,10,10,10,0]
      texture: [4,8.98,8.98,4,18]
      propeller: false
    decoration:
      section_segments: 6
      offset:
        x: 30
        y: -35
        z: -5
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-10,-10,0,3,3,4,3]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,30,30,28,26,23,0]
      height: [0,10,10,8,6,3,0]
      propeller: false
      texture: [17.9,3.9,11.9,16.9,3.9,16.9]
      vertical: false
      angle: 90
    decoration2:
      section_segments: 6
      offset:
        x: 30
        y: 20
        z: -5
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-10,-10,0,3,3,4,3]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,30,30,28,26,23,0]
      height: [0,10,10,8,6,3,0]
      propeller: false
      texture: [17.9,3.9,11.9,16.9,3.9,16.9]
      vertical: false
      angle: 90
    decoration3:
      section_segments: [-140,-140,-90,-40,-40,40,40,40,90,140]
      offset:
        x: 15
        y: 90
        z: 10
      position:
        x: [0,0,0,0,0,0,0]
        y: [-25,-25,-20,-10,4,10,10]
        z: [0,0,0,0,0,0,0]
      width: [0,16,16,16,16,16,0]
      height: [0,16,16,16,16,16,0]
      angle: 0
      texture: [17.9,3.9,12.9,63,3.9,3.9]
    decoration4:
      section_segments: [-140,-140,-90,-40,-40,40,40,40,90,140]
      offset:
        x: 15
        y: 50
        z: 10
      position:
        x: [0,0,0,0,0,0,0]
        y: [-25,-25,-20,-10,4,10,10]
        z: [0,0,0,0,0,0,0]
      width: [0,16,16,16,16,16,0]
      height: [0,16,16,16,16,16,0]
      angle: 0
      texture: [17.9,3.9,12.9,63,3.9,3.9]
    decoration5:
      section_segments: [-140,-140,-90,-40,-40,40,40,40,90,140]
      offset:
        x: 15
        y: 10
        z: 10
      position:
        x: [0,0,0,0,0,0,0]
        y: [-25,-25,-20,-10,4,10,10]
        z: [0,0,0,0,0,0,0]
      width: [0,16,16,16,16,16,0]
      height: [0,16,16,16,16,16,0]
      angle: 0
      texture: [17.9,3.9,12.9,63,3.9,3.9]
    decoration6:
      section_segments: [-140,-140,-90,-40,-40,40,40,40,90,140]
      offset:
        x: 10
        y: -70.1
        z: 10
      position:
        x: [0,0,0,0,0,0,0]
        y: [-25,-25,-20,-10,4,10,10]
        z: [0,0,0,0,0,0,0]
      width: [0,9,9,9,9,9,0]
      height: [0,9,9,9,9,9,0]
      angle: 0
      texture: [17.9,3.9,12.9,63,3.9,3.9]
    decoration7:
      section_segments: [-140,-140,-90,-40,-40,40,40,40,90,140]
      offset:
        x: 10
        y: -70.1
        z: -10
      position:
        x: [0,0,0,0,0,0,0]
        y: [-25,-25,-20,-10,4,10,10]
        z: [0,0,0,0,0,0,0]
      width: [0,9,9,9,9,9,0]
      height: [0,9,9,9,9,9,0]
      angle: 0
      texture: [17.9,3.9,12.9,63,3.9,3.9]
    decoration12:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: -8
        z: 19
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-28,-28,-27,-24,-14,12,12,12,12,12]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,15,15,15,15,15,15,15,15,0]
      height: [0,10,10,10,10,10,10,10,10,0]
      texture: [18,17,4,3,13,3,17,18]
      vertical: false
      angle: 0
    decoration13:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 75
        z: 19
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-28,-28,-27,-24,-14,12,12,12,12,12]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,15,15,15,15,15,15,15,15,0]
      height: [0,10,10,10,10,10,10,10,10,0]
      texture: [18,17,4,18,17,3,17,18]
      vertical: false
      angle: 0
    decoration14:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: -20
        y: 81
        z: 19
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-28,-28,-27,-24,-14,12,12,12,12,12]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,15,15,15,15,15,15,15,15,0]
      height: [0,5,5,5,5,5,5,5,5,0]
      texture: [18,17,4,3,13,3,17,18]
      vertical: false
      angle: 90
    decoration15:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: -20
        y: 41
        z: 19
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-28,-28,-27,-24,-14,12,12,12,12,12]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,15,15,15,15,15,15,15,15,0]
      height: [0,5,5,5,5,5,5,5,5,0]
      texture: [18,17,4,3,13,3,17,18]
      vertical: false
      angle: 90
    decoration16:
      section_segments: [-140,-140,-90,-40,-40,40,40,40,90,140]
      offset:
        x: 14
        y: -55.1
        z: 15
      position:
        x: [0,0,0,0,0,0,0]
        y: [-25,-25,-20,-10,4,10,10]
        z: [0,0,0,0,0,0,0]
      width: [0,9,9,9,9,9,0]
      height: [0,9,9,9,9,9,0]
      angle: 0
      texture: [17.9,3.9,12.9,17,3.9,3.9]
    decoration17:
      section_segments: [-140,-140,-90,-40,-40,40,40,40,90,140]
      offset:
        x: 10
        y: -55.1
        z: 20
      position:
        x: [0,0,0,0,0,0,0]
        y: [-15,-15,-10,-5,4,10,10]
        z: [0,0,0,0,0,0,0]
      width: [0,4,4,4,4,4,0]
      height: [0,4,4,4,4,4,0]
      angle: 0
      texture: 17
    decoration18:
      section_segments: [-140,-140,-90,-40,-40,40,40,40,90,140]
      offset:
        x: 3
        y: -55.1
        z: 23
      position:
        x: [0,0,0,0,0,0,0]
        y: [-15,-15,-10,-5,4,10,10]
        z: [0,0,0,0,0,0,0]
      width: [0,4,4,4,4,4,0]
      height: [0,4,4,4,4,4,0]
      angle: 0
      texture: 17
    cannons:
      section_segments: 6
      offset:
        x: 60
        y: 55
        z: -8
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-90,-100,-90,-90,-85,-85,-30,0,20,50,55]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5,6,5,5,5,6,8,8,8,0]
      height: [0,5,6,5,5,5,6,8,8,8,0]
      angle: 0
      laser:
        damage: [10,16]
        rate: 4
        type: 1
        speed: [160,180]
        number: 1
        angle: 0
        error: 0
        recoil: 0
      propeller: false
      texture: [17,4,18,13,18,4,10,4,63,4]
    cannons2:
      section_segments: 6
      offset:
        x: 50
        y: 55
        z: 19
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-90,-100,-90,-90,-85,-85,-30,0,20,50,55]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5,6,5,5,5,6,8,8,8,0]
      height: [0,5,6,5,5,5,6,8,8,8,0]
      angle: 0
      laser:
        damage: [10,16]
        rate: 4
        type: 1
        speed: [160,180]
        number: 1
        angle: 0
        error: 0
        recoil: 0
      propeller: false
      texture: [17,4,18,13,18,4,10,4,63,4]
    propeller_connector:
      section_segments: [-140,-140,-90,-40,-40,40,40,40,90,140]
      offset:
        x: 0
        y: 110.1
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-25,-25,-20,-10,4,10,6]
        z: [0,0,0,0,0,0,0]
      width: [0,25,25,25,25,25,0]
      height: [0,25,25,25,25,25,0]
      angle: 0
      propeller: true
      texture: [17.9,3.9,12.9,63,12.9,17]
  wings:
    main:
      offset:
        x: 10
        y: 55
        z: 0
      length: [30,0,10,15,20,20]
      width: [30,30,90,90,70,50,60]
      texture: [4,63,63,4,18,63]
      angle: [0,0,0,0,0,0]
      position: [10,0,0,0,10,30,60]
      doubleside: 1
      bump:
        position: 40
        size: 15
    main2:
      offset:
        x: 10
        y: 57
        z: 0
      length: [30,0,10,15,20,20]
      width: [30,30,90,90,70,50,60]
      texture: [13,13,4,18,13,4]
      angle: [0,0,0,0,0,0]
      position: [10,0,0,0,10,30,60]
      doubleside: 1
      bump:
        position: 40
        size: 14
