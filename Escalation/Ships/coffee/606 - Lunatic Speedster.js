return model =
  name: 'Lunatic Speedster'
  level: 6
  model: 6
  size: 1.3
  specs:
    shield:
      capacity: [260,315]
      reload: [9,12]
    generator:
      capacity: [150,200]
      reload: [50,64]
    ship:
      mass: 300
      speed: [120,140]
      rotation: [65,80]
      acceleration: [60,100]
  bodies:
    main:
      section_segments: 8
      offset:
        x: 0
        y: 15
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-115,-115,-120,-90,-50,0,30,70,100,90]
        z: [-28,-28,-28,-18,-5,0,0,0,0,0,0]
      width: [0,10,15,20,25,25,30,20,20,0]
      height: [0,5,10,15,15,15,15,15,15,0]
      texture: [18,13,1,10,11,1,4,3,17]
      propeller: true
      laser:
        damage: [80,123]
        rate: 1
        type: 1
        speed: [180,210]
        number: 1
        angle: 0
        error: 0
        recoil: 150
    main2:
      section_segments: 6
      offset:
        x: 20
        y: 20
        z: 0
      position:
        x: [-10,-10,-10,0,0,0,0,0,-5,-5,-5]
        y: [-105,-105,-115,-90,-50,0,30,70,100,100]
        z: [-28,-28,-28,-18,-5,0,0,0,0,0,0]
      width: [0,5,5,10,15,15,10,10,10,0]
      height: [0,5,5,10,10,10,15,15,15,0]
      texture: [3.99,3.99,3.99,18,63,3.99,18,3.99,18]
      propeller: false
    cockpit:
      section_segments: [40,90,180,270,320]
      offset:
        x: 0
        y: -110
        z: 0
      position:
        x: [0,0,0,0,0,0]
        y: [15,35,60,95,95]
        z: [-13,-12,-3,2,3]
      width: [5,12,14,15,0]
      height: [0,12,15,15,0]
      texture: [4,8.98,8.98,5]
    reactor:
      section_segments: 12
      offset:
        x: 0
        y: 20
        z: -70
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-20,-20,0,3,-1,4,3,6,6,6]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,20,20,18,16,16,13,12,8,0]
      height: [0,20,20,18,16,16,13,12,8,0]
      propeller: false
      texture: [4,12,18,8,4,17,3,11,17]
      vertical: true
      angle: 0
    Reactor_piece:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 49
        z: 20
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,0,0,0,0,10,10]
        z: [0,0,0,0,0,0,0]
      width: [0,5,5,5,5,5,0]
      height: [0,15,15,15,15,15,0]
      texture: [11,6,11,10,4,11]
      propeller: false
      vertical: false
    Reactor_piece2:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 10.6
        y: 70
        z: 20
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,0,0,0,0,10,10]
        z: [0,0,0,0,0,0,0]
      width: [0,5,5,5,5,5,0]
      height: [0,15,15,15,15,15,0]
      texture: [11,6,11,10,4,11]
      propeller: false
      vertical: false
      angle: 90
    Reactor_piece3:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 80.5
        z: 20
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,0,0,0,0,10,10]
        z: [0,0,0,0,0,0,0]
      width: [0,5,5,5,5,5,0]
      height: [0,15,15,15,15,15,0]
      texture: [11,6,11,10,4,11]
      propeller: false
      vertical: false
    Reactor_piece4:
      section_segments: 12
      offset:
        x: 0
        y: 0
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
    cannons:
      section_segments: 12
      offset:
        x: 50
        y: 65
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-125,-130,-130,-120,-120,-100,-90,-75,-75,-55,-55,-45,-45,-20,0,20,50,50]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,4,5,6,4,4,8,8,10,10,8,8,10,10,10,10,10,0]
      height: [0,4,5,6,4,4,8,8,10,10,8,8,10,10,10,10,10,0]
      angle: 0
      laser:
        damage: [10,13]
        rate: 5
        type: 1
        speed: [190,200]
        number: 1
        angle: 0
        error: 5
      propeller: false
      texture: [17,18,4,4,12,2,4,17,2,17,12,17,2,3,4,10,4]
    decoration:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 15
        z: -130
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-9,-9,-9,-9,17,17,17,17]
        z: [21,21,21,21,1,1,1,1]
      width: [0,10,15,15,15,15,0]
      height: [0,3,3,3,3,3,0]
      texture: [11,18,12,4,18,11]
      angle: 0
      vertical: true
      propeller: false
    decoration2:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 20
        y: -5
        z: -130
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-9,-9,-9,-9,17,17,17,17]
        z: [21,21,21,21,1,1,1,1]
      width: [0,10,15,15,15,15,0]
      height: [0,3,3,3,3,3,0]
      texture: [11,18,12,4,18,11]
      angle: 90
      vertical: true
      propeller: false
    decoration3:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: -31
        z: -105
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-9,-9,-9,-9,17,17,17,17]
        z: [-21,-21,-21,-21,1,1,1,1]
      width: [0,10,15,15,15,15,0]
      height: [0,3,3,3,3,3,0]
      texture: [11,18,12,4,18,11]
      angle: 0
      vertical: true
      propeller: false
    decoration4:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 135
        z: 40
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-9,-9,-9,-9,17,17,17,17]
        z: [1,1,1,1,1,1,1,1]
      width: [0,10,15,15,15,15,0]
      height: [0,3,3,3,3,3,0]
      texture: [17,18,12,12,18,17]
      angle: 0
      vertical: false
      propeller: false
    decoration5:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 130
        z: -40
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-9,-9,-9,-9,17,17,17,17]
        z: [1,1,1,1,1,1,1,1]
      width: [0,10,15,15,15,15,0]
      height: [0,3,3,3,3,3,0]
      texture: [17,18,12,12,18,17]
      angle: 0
      vertical: false
      propeller: false
    decoration6:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 38
        y: 135
        z: -6
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-9,-9,-9,-9,17,17,17,17]
        z: [1,1,1,1,1,1,1,1]
      width: [0,3,3,3,3,3,0]
      height: [0,10,10,15,15,15,0]
      texture: [17,18,12,12,18,17]
      angle: 0
      vertical: false
      propeller: false
    decoration7:
      section_segments: 5
      offset:
        x: 0
        y: 15
        z: -125
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-9,-9,-9,-9,13,13,13,13]
        z: [21,21,21,21,1,1,1,1]
      width: [0,5,10,10,10,10,0]
      height: [0,10,10,10,10,5,0]
      texture: [11,18,12,18,12,17]
      angle: 0
      vertical: true
      propeller: false
    decoration8:
      section_segments: 5
      offset:
        x: 0
        y: -28
        z: -100
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-9,-9,-9,-9,13,13,13,13]
        z: [-21,-21,-21,-21,1,1,1,1]
      width: [0,5,10,10,10,10,0]
      height: [0,10,10,10,10,5,0]
      texture: [17,18,12,18,11,17]
      angle: 0
      vertical: true
      propeller: false
    decoration9:
      section_segments: 5
      offset:
        x: 20
        y: -5
        z: -125
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-9,-9,-9,-9,13,13,13,13]
        z: [21,21,21,21,1,1,1,1]
      width: [0,5,10,10,10,10,0]
      height: [0,10,10,10,10,5,0]
      texture: [17,18,12,17.8,11,17]
      angle: 90
      vertical: true
      propeller: false
    ring:
      section_segments: 9
      offset:
        x: 1
        y: 128
        z: 35
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-4,-4,-4,4,4,4,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [4,4,4,6,6,6,6,4,4,4]
      height: [4,4,4,6,6,6,6,4,4,4]
      texture: [ 12.9 ]
      angle: 90
      propeller: false
    ring2:
      section_segments: 9
      offset:
        x: 1
        y: 125
        z: -35
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-4,-4,-4,4,4,4,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [4,4,4,6,6,6,6,4,4,4]
      height: [4,4,4,6,6,6,6,4,4,4]
      texture: [ 12.9 ]
      angle: 90
      propeller: false
    ring3:
      section_segments: 9
      offset:
        x: 34
        y: -5
        z: -133
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-4,-4,-4,4,4,4,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [4,4,4,6,6,6,6,4,4,4]
      height: [4,4,4,6,6,6,6,4,4,4]
      texture: [ 12.9 ]
      angle: 0
      vertical: true
      propeller: false
    ring4:
      section_segments: 6
      offset:
        x: 0
        y: 40
        z: 5
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-7,-6,-4,-4,4,4,6,7,8,8]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,22,22,23,24,24,24,24,23,22,22,0]
      height: [0,12,12,13,14,14,14,14,13,12,12,0]
      texture: [1.9,17,18,2,2,1,4,4,18,17,1.9]
      propeller: false
    ring5:
      section_segments: 6
      offset:
        x: 0
        y: 20
        z: 5
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-7,-6,-4,-4,4,4,6,7,8,8]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,22,22,23,24,24,24,24,23,22,22,0]
      height: [0,12,12,13,14,14,14,14,13,12,12,0]
      texture: [1.9,17,18,2,2,1,4,4,18,17,1.9]
      propeller: false
  wings: main:
    offset:
      x: 20
      y: 55
      z: 0
    length: [40,0,10,10,0,10,0,10]
    width: [50,70,120,120,70,50,40,40]
    texture: [12,4,4,63,63,1,4]
    angle: [0,0,0,0,0,0,0,0]
    position: [0,20,20,0,20,20,40,40]
    bump:
      position: 0
      size: 5
