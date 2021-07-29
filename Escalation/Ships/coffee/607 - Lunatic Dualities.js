return model =
  name: 'Lunatic Dualities'
  level: 6
  model: 7
  size: 1.65
  specs:
    shield:
      capacity: [305,345]
      reload: [10,13]
    generator:
      capacity: [55,60]
      reload: [90,125]
    ship:
      mass: 355
      speed: [95,125]
      rotation: [60,78]
      acceleration: [90,110]
  bodies:
    main:
      section_segments: 9
      offset:
        x: 0
        y: 0
        z: -5
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-58,-58,-60,-10,0,30,70,100,90]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,8,10,16,15,15,18,10,10]
      height: [0,6,8,10,10,15,15,10,0]
      texture: [18,12.9,1,12,11,2,4,17]
      propeller: true
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: -20
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-38,-35,-23,-10,0,30,40]
        z: [0,2,3,3,3,3,3]
      width: [0,4,5,6,7,8,0]
      height: [0,2,5,5,5,7,0]
      texture: [4,9,9,3,10.24,12]
      propeller: false
    reactor:
      section_segments: 12
      offset:
        x: 0
        y: 10
        z: -62
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-20,-20,0,3,-1,4,3,6,6,6]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,20,20,18,16,16,13,12,8,0]
      height: [0,20,20,18,16,16,13,12,8,0]
      propeller: false
      texture: [4,12,11,8,4,17,3,3,17]
      vertical: true
      angle: 0
    Reactor_piece:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 40
        z: 6
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,0,0,0,0,10,10]
        z: [0,0,0,0,0,0,0]
      width: [0,5,5,5,5,5,0]
      height: [0,15,15,15,15,15,0]
      texture: [18,6,11,10,11,18]
      propeller: false
      vertical: false
    Reactor_piece2:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 12.2
        y: 62
        z: 6
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,0,0,0,0,10,10]
        z: [0,0,0,0,0,0,0]
      width: [0,5,5,5,5,5,0]
      height: [0,15,15,15,15,15,0]
      texture: [18,6,11,10,11,18]
      propeller: false
      vertical: false
      angle: 90
    Reactor_piece3:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 74.5
        z: 6
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,0,0,0,0,10,10]
        z: [0,0,0,0,0,0,0]
      width: [0,5,5,5,5,5,0]
      height: [0,15,15,15,15,15,0]
      texture: [18,6,11,10,11,18]
      propeller: false
      vertical: false
    Reactor_piece4:
      section_segments: 18
      offset:
        x: 0
        y: 5
        z: -62
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-1,-1,-1,-1,-1,2,2,2,2,-1]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [23,5,25,25,25,25,25,25,23,23]
      height: [23,25,25,25,25,25,25,25,23,23]
      propeller: false
      texture: [11,12,11,8,18,18,3,17,18]
      vertical: true
      angle: 0
    Decoration:
      section_segments: 8
      offset:
        x: 4.3
        y: 10
        z: 2
      position:
        x: [0,0,0,0,0,5,-5]
        y: [0,0,0,0,0,40,10]
        z: [-3,-3,-3,-3,-3,0]
      width: [0,5,5,5,5,5,0]
      height: [0,8,8,8,8,8,0]
      texture: [18,6,11,10,63,18]
      propeller: false
      vertical: false
    Not_a_Decoration:
      section_segments: 8
      offset:
        x: 15
        y: 30
        z: -4
      position:
        x: [-3,-3,-3,-2,-3,-3,-3,0,0,5,-5]
        y: [-73,-75,-70,-40,-10,-10,-3,4,10,40,40]
        z: [-3,-3,-3,-3,-3,-3,-3,-3,-3,0]
      width: [0,3,4,4,4,5,5,5,5,5,0]
      height: [0,5,6,6,6,8,8,8,8,8,0]
      texture: [13,4,63,18,18,63,11,12,63,18]
      propeller: false
      vertical: false
    tubes:
      section_segments: 8
      offset:
        x: 45
        y: -120
        z: -8
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
        x: 55
        y: -120
        z: -8
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
        x: 68
        y: 10
        z: 5
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,13,17,42,42,67,82,88]
        z: [-1,-4,0,0,0,0,0,-3,-6,-6]
      width: [0,2,2,2,2,2,2,2,2]
      height: [0,2,2,2,2,2,2,2,2]
      texture: [12,12,12,11,12,3,11,12]
    ring:
      section_segments: 8
      offset:
        x: 68
        y: 5
        z: -4
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-6,-4,-4,4,4,6,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [5,5,5,7,7,7,7,5,5,5]
      height: [5,5,5,7,7,7,7,5,5,5]
      texture: [ 17 ]
      propeller: false
    ring2:
      section_segments: 8
      offset:
        x: 68
        y: 15
        z: -4
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-6,-4,-4,4,4,6,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [5,5,5,7,7,7,7,5,5,5]
      height: [5,5,5,7,7,7,7,5,5,5]
      texture: [ 17 ]
      propeller: false
    ring3:
      section_segments: 8
      offset:
        x: 68
        y: 25
        z: -4
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-6,-4,-4,4,4,6,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [5,5,5,7,7,7,7,5,5,5]
      height: [5,5,5,7,7,7,7,5,5,5]
      texture: [ 17 ]
      propeller: false
    ring4:
      section_segments: 8
      offset:
        x: 68
        y: 35
        z: -4
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-6,-4,-4,4,4,6,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [5,5,5,7,7,7,7,5,5,5]
      height: [5,5,5,7,7,7,7,5,5,5]
      texture: [ 17 ]
      propeller: false
    ring5:
      section_segments: 8
      offset:
        x: 68
        y: 45
        z: -4
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-6,-4,-4,4,4,6,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [5,5,5,7,7,7,7,5,5,5]
      height: [5,5,5,7,7,7,7,5,5,5]
      texture: [ 17 ]
      propeller: false
    cannons:
      section_segments: 12
      offset:
        x: 68
        y: 40
        z: -2
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-65,-68,-55,-55,-45,-45,-20,0,20,30,30,50,60,60]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,-1,-1]
      width: [0,4,5,4,4,5,6,6,6,6,7,7,6,0]
      height: [0,4,5,4,4,5,6,6,6,6,7,7,4,0]
      angle: 0
      laser:
        damage: [32,50]
        rate: 2
        type: 1
        speed: [180,200]
        number: 1
        angle: 0
        error: 0
        recoil: 130
      propeller: false
      texture: [12,4,4,13,17,10.24,13,1,3,17,4,11]
    top_propulsor:
      section_segments: 10
      offset:
        x: 40
        y: 65
        z: 5
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-10,-10,-15,-15,0,10,20,25,30,40,50,70,65]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,4,10,11,13,13,13,13,13,13,8,8,0]
      height: [0,4,10,11,13,13,13,13,13,13,8,8,0]
      texture: [18,4,17,63,13,13,18,63,4,10,11,17]
      propeller: true
    Propulsor_piece:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 40
        y: 110
        z: 5
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,0,0,0,0,10,10]
        z: [0,0,0,0,0,0,0]
      width: [0,5,5,5,5,5,0]
      height: [0,10,10,11,15,11,0]
      texture: [18,6,11,10,18,18]
      propeller: false
      vertical: false
    Propulsor_piece2:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 40
        y: 50
        z: 5
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,0,0,0,0,10,10]
        z: [0,0,0,0,0,0,0]
      width: [0,3,3,3,3,3,0]
      height: [0,12,12,12,12,12,0]
      texture: [18,6,11,10,18,18]
      propeller: false
      vertical: false
    Propulsor_piece3:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 40
        y: 50.1
        z: 5
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,0,0,0,0,10,10]
        z: [0,0,0,0,0,0,0]
      width: [0,12,12,12,12,12,0]
      height: [0,3,3,3,3,3,0]
      texture: [18,6,11,10,18,18]
      propeller: false
      vertical: false
    wing:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 70
        y: -20
        z: -9
      position:
        x: [8,8,8,8,14,0,0,0]
        y: [-5,-5,-5,-5,10,10,10,10]
        z: [1,1,1,1,1,1,1,1]
      width: [0,35,43,120,125,25,0]
      height: [0,2,2,2,2,2,0]
      texture: [17,18,12,63,12,17]
      angle: -90
      propeller: false
    part_wing:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 72
        y: -20
        z: -9
      position:
        x: [8,8,8,8,14,0,0,0]
        y: [-4,-4,-4,-4,10,10,10,10]
        z: [1,1,1,1,1,1,1,1]
      width: [0,35,43,120,125,25,0]
      height: [0,1.5,1.5,1.5,1.5,1.5,0]
      texture: [17,18,12,4,12,17]
      angle: -90
      propeller: false
    part_wing2:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 70.5
        y: -55
        z: -8.6
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-4,-4,-4,-4,10,10,10,10]
        z: [1,1,1,1,1,1,1,1]
      width: [0,35,43,45,45,40,0]
      height: [0,1.5,1.5,1.5,1.5,1.5,0]
      texture: [17,18,12,13,12,17]
      angle: -90
      propeller: false
    wing2:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 70
        y: 30
        z: -9
      position:
        x: [8,8,8,8,14,0,0,20,30,20,20]
        y: [-7,-7,-7,-7,11,11,11,40,40,60]
        z: [1,1,1,1,1,1,1,1,1,1,1]
      width: [0,35,43,80,85,25,20,20,45,45]
      height: [0,5,5,5,5,5,4,4,5,5]
      texture: [18,18,12,4,12,17,13,18,18]
      angle: -90
      propeller: false
    wing3:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 50
        y: -105
        z: -9
      position:
        x: [20,20,20,20,-10,-10,-10,-10]
        y: [-9,-9,-9,-9,27,27,27,27]
        z: [1,1,1,1,1,1,1,1]
      width: [0,6,8,10,15,5,0]
      height: [0,3,3,3,3,3,0]
      texture: [17,18,12,4,12,17]
      angle: 90
      propeller: false
  wings: top_join:
    offset:
      x: 12
      y: 68
      z: -3
    length: [ 28 ]
    width: [40,20]
    angle: [ 10 ]
    position: [0,30,30,30]
    texture: [ 11 ]
    doubleside: 1
    bump:
      position: 10
      size: 20
