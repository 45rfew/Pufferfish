return model =
  name: 'Lunatic Proto'
  level: 5
  model: 7
  size: 1.2
  specs:
    shield:
      capacity: [345,395]
      reload: [8,11]
    generator:
      capacity: [200,255]
      reload: [45,70]
    ship:
      mass: 350
      speed: [70,105]
      rotation: [70,85]
      acceleration: [85,115]
  bodies:
    main:
      section_segments: 12
      offset:
        x: 0
        y: 30
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-170,-160,-150,-135,-125,-110,-100,-50,0,30,120,140,120]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,10,15,18,20,23,23,25,25,30,30,20,0]
      height: [0,10,15,18,20,23,23,25,25,30,30,20,0]
      texture: [2,63,4,63,10,3,4,3,18,10,4,17]
      propeller: true
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: -90
        z: 13
      position:
        x: [0,0,0,0,0,0,0]
        y: [-30,-20,0,30,40]
        z: [0,0,0,0,0]
      width: [0,8,10,10,0]
      height: [0,10,15,12,0]
      texture: [4,9]
      propeller: false
    Main_tubes:
      section_segments: 6
      offset:
        x: 15
        y: 5
        z: 18
      position:
        x: [-3,-5,-2,-2,0,0,0,0,0,0,0,0]
        y: [-48,-48,-6,0,10,17,22,22,37,62,79]
        z: [-2,-1,0,0,2,2,2,2,4,3,2,0]
      width: [0,5,5,5,5,5,5,5,5,5,5]
      height: [0,5,5,5,5,5,5,5,5,5,5]
      texture: [4,8,4,3,4,4,0,63,13,4]
    Main_tubes2:
      section_segments: 6
      offset:
        x: 25
        y: 5
        z: 8
      position:
        x: [-4,-6,-2,-2,0,0,0,0,0,0,0,0]
        y: [-48,-48,-6,0,10,17,22,22,37,62,79]
        z: [0,-1,0,0,2,2,2,2,4,3,2,0]
      width: [0,5,5,5,5,5,5,5,5,5,5]
      height: [0,5,5,5,5,5,5,5,5,5,5]
      texture: [4,8,4,3,4,4,0,63,13,4]
    Main_tubes3:
      section_segments: 8
      offset:
        x: 85
        y: 56
        z: 23
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,23,27,42,42,67,82,103]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,2,2,2,2,2,2,2,2]
      height: [0,2,2,2,2,2,2,2,2]
      texture: [13,13,4,3,17,4,13]
    Main_tubes4:
      section_segments: 8
      offset:
        x: 35
        y: 56
        z: 23
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,23,27,42,42,67,82,103]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,2,2,2,2,2,2,2,2]
      height: [0,2,2,2,2,2,2,2,2]
      texture: [13,13,4,3,17,4,13]
    cannons:
      section_segments: 12
      offset:
        x: 26
        y: -10
        z: -5
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-95,-95,-105,-80,-80,-80,-60,-60,-50,-50,-30,-30,-30,-25,0,20,50,60]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,8,10,13,12,10,10,8,8,10,10,14,15,15,15,15,15,0]
      height: [0,8,10,13,12,10,10,8,8,10,10,14,15,15,15,15,15,0]
      angle: 0
      laser:
        damage: [34,58]
        rate: 1.5
        type: 1
        speed: [150,190]
        number: 1
        angle: 0
        error: 0
      propeller: false
      texture: [17,12,18,17,18,13,17,4,17,13,18,17,2,3,4,63,18]
    Cannon_connector:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 40
        y: 115
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-30,-30,-15,10,10]
        z: [0,0,0,0,0]
      width: [0,25,25,25,0]
      height: [0,5,9,5,0]
      propeller: false
      texture: [18,63,13,18]
      vertical: false
      angle: 60
    Body_ring:
      section_segments: 12
      offset:
        x: 30
        y: 150
        z: 8
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-6,-4,-4,4,6,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,26,26,26,26,26,26,26,26,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [18,17,4,4,3,4,17,18]
      angle: 0
    Body_ring2:
      section_segments: 16
      offset:
        x: 0
        y: -37
        z: 2
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-6,-4,-4,4,6,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,26,26,26,26,26,26,26,26,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [18,17,4,4,18,4,17,18]
      angle: 0
    Body_ring3:
      section_segments: 12
      offset:
        x: 30
        y: 80
        z: 8
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-6,-4,-4,4,6,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,26,26,26,26,26,26,26,26,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [18,17,4,4,3,4,17,18]
      angle: 0
    ring:
      section_segments: 8
      offset:
        x: 60
        y: 100
        z: 16
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-4,-4,-4,-2,-2,2,2,4,4,4]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,9,12,14,14,14,14,12,9,0]
      height: [0,9,12,14,14,14,14,12,9,0]
      texture: [4,13,4,17,17,17,4,13,4]
      propeller: false
    ring2:
      section_segments: 8
      offset:
        x: 60
        y: 110
        z: 16
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-4,-4,-4,-2,-2,2,2,4,4,4]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,9,12,14,14,14,14,12,9,0]
      height: [0,9,12,14,14,14,14,12,9,0]
      texture: [4,13,4,17,17,17,4,13,4]
      propeller: false
    ring3:
      section_segments: 8
      offset:
        x: 60
        y: 120
        z: 16
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-4,-4,-4,-2,-2,2,2,4,4,4]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,9,12,14,14,14,14,12,9,0]
      height: [0,9,12,14,14,14,14,12,9,0]
      texture: [4,13,4,17,17,17,4,13,4]
      propeller: false
    ring4:
      section_segments: 8
      offset:
        x: 60
        y: 130
        z: 16
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-4,-4,-4,-2,-2,2,2,4,4,4]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,9,12,14,14,14,14,12,9,0]
      height: [0,9,12,14,14,14,14,12,9,0]
      texture: [4,13,4,17,17,17,4,13,4]
      propeller: false
    Turret_Base:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 60
        y: 85
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-30,-30,-30,-10,10,10,10,30,50,50,70,90,90,90]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,30,43,45,45,30,30,30,30,45,45,43,30,0]
      height: [0,20,33,35,35,20,20,20,20,35,35,33,20,0]
      propeller: false
      texture: [13,18,3,4,18,13,18,63,18,4,3,18,13]
      vertical: false
      angle: 0
    propulsors:
      section_segments: 12
      offset:
        x: 23
        y: 135
        z: 5
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-40,-35,-20,0,20,45,20,20,40,40]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,5,8,9,10,8,8,6,6,0]
      height: [0,5,8,9,10,8,8,6,6,0]
      texture: [18,4,4,63,8,13,17]
      propeller: true
    propulsors2:
      section_segments: 12
      offset:
        x: 100
        y: 140
        z: -28
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-60,-45,-20,0,20,45,20,20,40,40]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,15,18,19,20,18,18,16,16,0]
      height: [0,15,18,19,20,18,18,16,16,0]
      texture: [18,4,4,63,8,13,17]
      propeller: true
  wings:
    main:
      doubleside: true
      offset:
        x: 55
        y: 120
        z: 18
      length: [40,30,30,20]
      width: [50,90,120,100,40]
      angle: [-30,-20,-20,-20,-20]
      position: [-10,0,20,20,60]
      texture: [18,3,4,63]
      bump:
        position: 0
        size: 13
    main2:
      doubleside: true
      offset:
        x: 55
        y: 104
        z: 18
      length: [40,30,30,20]
      width: [50,90,120,100,20]
      angle: [-30,-20,-20,-20,-20]
      position: [-10,0,20,30,60]
      texture: [4,8,8,63]
      bump:
        position: 0
        size: 8
    main3:
      doubleside: true
      offset:
        x: 20
        y: 30
        z: 0
      length: [0,15,0,46]
      width: [0,80,140,200,30]
      angle: [0,0,0,0]
      position: [30,30,10,-45,30]
      texture: [13,4,13,63]
      bump:
        position: 35
        size: 7
    main4:
      doubleside: true
      offset:
        x: 30
        y: 30
        z: 0
      length: [0,15,0,40]
      width: [0,80,90,200,30]
      angle: [-10,-10,-10,0]
      position: [30,30,10,-45,30]
      texture: [13,3,13,4]
      bump:
        position: 35
        size: 7
    main5:
      doubleside: true
      offset:
        x: 20.7
        y: -5
        z: 0
      length: [0,15,0,40]
      width: [0,80,90,200,30]
      angle: [-10,-10,-10,0]
      position: [30,30,10,-45,30]
      texture: [13,3,13,3]
      bump:
        position: 35
        size: 7
