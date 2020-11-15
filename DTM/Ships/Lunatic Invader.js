return model =
  name: 'Lunatic Invader'
  level: 7
  model: 6
  size: 1.55
  specs:
    shield:
      capacity: [525,525]
      reload: [16,16]
    generator:
      capacity: [350,350]
      reload: [140,140]
    ship:
      mass: 400
      speed: [145,145]
      rotation: [90,90]
      acceleration: [100,100]
  bodies:
    main:
      section_segments: 12
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-110,-100,-50,0,30,70,100,90]
        z: [0,0,0,0,0,0,0,0]
      width: [0,15,25,25,30,30,25,0]
      height: [0,10,20,20,20,20,20,0]
      texture: [4,3,63,4,8,4,17]
      propeller: true
    main_sides:
      section_segments: 8
      offset:
        x: 10
        y: -60
        z: 0
      position:
        x: [-4,-4,0,0,0,0,17,17,17]
        y: [-35,-35,-15,10,10,40,80,80]
        z: [0,0,0,0,0,0,0,0,0]
      width: [4,8,14,17,18,20,1,1]
      height: [4,4,8,8,10,10,10,1]
      texture: [4,4,9.95,17,4,1,17]
      propeller: false
    main_sides2:
      section_segments: 8
      offset:
        x: 20
        y: 0
        z: 0
      position:
        x: [-4,-4,0,0,0,0,15,0,15]
        y: [-35,-35,-15,10,10,40,70,60]
        z: [0,0,0,0,0,0,0,0,0]
      width: [4,8,14,17,18,20,13,0]
      height: [4,4,8,8,10,10,10,0]
      texture: [63,4,4,17,63,4,17]
      propeller: false
    Turret_Base:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 30
        y: 45
        z: -10
      position:
        x: [0,0,0,0,0,0,0]
        y: [-30,-30,-15,10,10]
        z: [0,0,0,0,0]
      width: [0,25,25,25,0]
      height: [0,5,9,5,0]
      propeller: false
      texture: [18,3,4,18]
      vertical: false
      angle: 0
    Main_tubes:
      section_segments: 6
      offset:
        x: 15
        y: 5
        z: 10
      position:
        x: [-3,-3,0,0,0,0,0,0,0,0,0,0]
        y: [-48,-48,-6,0,10,17,22,22,37,62,79]
        z: [3,3,2,3,4,4,4,4,4,3,2,0]
      width: [0,5,5,5,5,5,5,5,5,5,5]
      height: [0,5,5,5,5,5,5,5,5,5,5]
      texture: [4,8,4,3,4,4,0,63,13,4]
    Main_tubes2:
      section_segments: 8
      offset:
        x: 60
        y: -90
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [26,26,33,37,62,62,97,102,123]
        z: [-9.5,-9.5,-4,-2,0,0,0,2,4,5]
      width: [0,4,4,4,4,4,4,4,4]
      height: [0,6,6,6,6,6,6,6,6]
      texture: [4,3,4,13,17,17,4]
    decoration:
      section_segments: [-140,-140,-90,-40,-40,40,40,40,90,140]
      offset:
        x: 15
        y: 75
        z: 7
      position:
        x: [0,0,0,0,0,0,0]
        y: [-25,-25,-20,-10,4,10,10]
        z: [0,0,0,0,0,0,0]
      width: [0,16,16,16,16,16,0]
      height: [0,16,16,16,16,16,0]
      angle: 0
      texture: [17.9,3.9,12.9,63,3.9,3.9]
    decoration2:
      section_segments: [-140,-140,-90,-40,-40,40,40,40,90,140]
      offset:
        x: 15
        y: 34
        z: 7
      position:
        x: [0,0,0,0,0,0,0]
        y: [-25,-25,-20,-10,4,10,10]
        z: [0,0,0,0,0,0,0]
      width: [0,16,16,16,16,16,0]
      height: [0,16,16,16,16,16,0]
      angle: 0
      texture: [17.9,3.9,12.9,63,3.9,3.9]
    decoration3:
      section_segments: [-140,-140,-90,-40,-40,40,40,40,90,140]
      offset:
        x: 65
        y: 38
        z: -2
      position:
        x: [0,0,0,0,0,0,0]
        y: [-45,-45,-15,-15,15,45,45]
        z: [0,0,0,0,0,0,0]
      width: [0,9,9,9,9,9,0]
      height: [0,9,9,9,9,9,0]
      angle: 0
      texture: [18,4,18,18,4,18]
    decoration4:
      section_segments: [-140,-140,-90,-40,-40,40,40,40,90,140]
      offset:
        x: 55
        y: 38
        z: -2
      position:
        x: [0,0,0,0,0,0,0]
        y: [-45,-45,-15,-15,15,45,45]
        z: [0,0,0,0,0,0,0]
      width: [0,9,9,9,9,9,0]
      height: [0,9,9,9,9,9,0]
      angle: 0
      texture: [18,4,18,10.42,4,18]
    decoration5:
      section_segments: 6
      offset:
        x: 0
        y: 10
        z: 9
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-10,-10,0,3,3,4,3]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,30,30,28,26,23,0]
      height: [0,10,10,8,6,3,0]
      propeller: false
      texture: [17.9,3.9,11.9,16.9,3.9,16.9]
      vertical: true
      angle: 0
    decoration6:
      section_segments: 6
      offset:
        x: 0
        y: 10
        z: 19
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-10,-10,0,3,3,4,3]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,30,30,28,26,23,0]
      height: [0,10,10,8,6,3,0]
      propeller: false
      texture: [17.9,3.9,11.9,16.9,3.9,16.9]
      vertical: true
      angle: 0
    decoration7:
      section_segments: 6
      offset:
        x: 0
        y: 10
        z: 29
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-10,-10,0,3,3,4,3]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,30,30,28,26,23,0]
      height: [0,10,10,8,6,3,0]
      propeller: false
      texture: [17.9,3.9,11.9,16.9,3.9,16.9]
      vertical: true
      angle: 0
    Body_ring:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 40
        y: 56
        z: -5
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-6,-4,-4,4,6,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,26,26,26,26,26,26,26,26,0]
      height: [0,12,14,14,14,14,14,14,12,0]
      texture: [18,17,4,4,3,4,17,18]
      angle: 0
    Body_ring2:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 10
        y: -40
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-6,-4,-4,4,6,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,26,26,26,26,26,26,26,26,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [18,17,4,4,3,4,17,18]
      angle: 90
    bodie_ring3:
      section_segments: 8
      offset:
        x: 60
        y: 55
        z: -10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-4,-4,-4,-4,-4,4,4,4,4,4]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,20,30,34,34,34,34,30,20,0]
      height: [0,20,30,34,34,34,34,30,20,0]
      texture: [12.9,17.9,12,17,4,12,12,17.9]
      propeller: false
      angle: 90
    bodie_ring4:
      section_segments: 6
      offset:
        x: 55
        y: 55
        z: -10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-2,-2,-2,-2,-2,2,2,2,2,2]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,10,20,24,24,24,24,20,10,0]
      height: [0,10,20,24,24,24,24,20,10,0]
      texture: [12.9,17.9,12,17,17,12,12,17.9]
      propeller: false
      angle: 90
    bodie_ring5:
      section_segments: 6
      offset:
        x: 65
        y: 55
        z: -10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-2,-2,-2,-2,-2,2,2,2,2,2]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,10,20,24,24,24,24,20,10,0]
      height: [0,10,20,24,24,24,24,20,10,0]
      texture: [12.9,17.9,12,17,17,12,12,17.9]
      propeller: false
      angle: 90
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: -70
        z: 14
      position:
        x: [0,0,0,0,0,0,0]
        y: [-20,-10,10,30,106]
        z: [-3,-3,0,0,-5]
      width: [0,8,10,10,10]
      height: [0,8,8,10,10]
      texture: [4,9,9,4]
      propeller: false
    cannons:
      section_segments: 6
      offset:
        x: 60
        y: 40
        z: -10
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-130,-150,-130,-130,-105,-105,-60,0,20,50,55]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5,8,5,5,10,15,15,15,15,0]
      height: [0,5,8,5,5,10,15,15,15,15,0]
      angle: 0
      laser:
        damage: [60,60]
        rate: 1
        type: 1
        speed: [190,190]
        number: 1
        angle: 0
        error: 0
        recoil: 50
      propeller: false
      texture: [17,4,18,13,18,4,11,4,63,4]
    cannons2:
      section_segments: 6
      offset:
        x: 30
        y: 20
        z: -8
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-90,-100,-90,-90,-85,-85,-30,0,20,50,55]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5,6,5,5,5,6,8,8,8,0]
      height: [0,5,6,5,5,5,6,8,8,8,0]
      angle: 0
      laser:
        damage: [20,20]
        rate: 5
        type: 1
        speed: [200,200]
        number: 1
        angle: 0
        error: 4
        recoil: 0
      propeller: false
      texture: [17,4,18,13,18,4,10,4,63,4]
    propulsors:
      section_segments: 6
      offset:
        x: 30
        y: 50
        z: 5
      position:
        x: [-5,-5,-3,0,0,0,0,0,0,0]
        y: [-35,-35,-20,0,20,45,20,20,40,40]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,9,9,9,10,8,8,6,6,0]
      height: [0,9,9,9,10,8,8,6,6,0]
      texture: [18,4,4,63,8,13,17]
      propeller: true
  wings:
    side:
      doubleside: true
      offset:
        x: 15
        y: 40
        z: 5
      length: [50,20,0,20,10]
      width: [50,50,150,140,100,40]
      angle: [-20,-20,-20,-20,-20,-20]
      position: [-10,0,-10,-10,-20,0]
      texture: [4,63,4,4,3]
      bump:
        position: 0
        size: 5
    side2:
      doubleside: true
      offset:
        x: 15
        y: 42
        z: 5
      length: [50,20,0,20,10]
      width: [50,50,150,140,100,40]
      angle: [-20,-20,-20,-20,-20,-20]
      position: [-10,0,-20,-10,-20,0]
      texture: [4,17,4,13,18]
      bump:
        position: 0
        size: 4
