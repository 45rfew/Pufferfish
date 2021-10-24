return model =
  name: 'Lunatic Barricade'
  level: 4
  model: 1
  size: 1.6
  specs:
    shield:
      capacity: [340,410]
      reload: [7,11]
    generator:
      capacity: [190,250]
      reload: [25,45]
    ship:
      mass: 405
      speed: [55,75]
      rotation: [20,50]
      acceleration: [70,100]
  bodies:
    main:
      section_segments: 9
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-130,-140,-105,-105,-105,-95,-95,-95,0,20,70,88,100,100,90]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,13,18,18,10,10,18,20,40,30,30,25,20,10,0]
      height: [0,10,14,13,10,10,14,15,30,30,35,30,20,10,0]
      texture: [16.9,4,17,5,12,4.9,17,11,4,63,4,3,17.9,16.9]
      propeller: true
      laser:
        damage: [35,55]
        rate: 1.5
        type: 2
        speed: [125,155]
        recoil: 50
        number: 1
        error: 0
    cockpit:
      section_segments: 9
      offset:
        x: 0
        y: -60
        z: 15
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-13,-4,20,40,70,80]
        z: [-2,-2,0,5,5,6]
      width: [4,15,15,15,15,8]
      height: [4,10,15,12,12,8]
      texture: [4,9,1,12,4]
    reactor:
      section_segments: 12
      offset:
        x: 0
        y: 34
        z: -45
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-20,-20,0,3,-1,4,3,6,6,6]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,20,20,18,16,16,13,12,8,0]
      height: [0,20,20,18,16,16,13,12,8,0]
      propeller: false
      texture: [4,12,11,8,4,17,3,13,17]
      vertical: true
      angle: 0
    Reactor_piece:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 25
        z: 30
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,0,0,0,0,10,10]
        z: [0,0,0,0,0,0,0]
      width: [0,5,5,5,5,5,0]
      height: [0,15,15,15,15,15,0]
      texture: [18,6,11,10,4,18]
      propeller: false
      vertical: false
    Reactor_piece2:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 10.6
        y: 45
        z: 30
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,0,0,0,0,10,10]
        z: [0,0,0,0,0,0,0]
      width: [0,5,5,5,5,5,0]
      height: [0,15,15,15,15,15,0]
      texture: [18,6,11,10,4,18]
      propeller: false
      vertical: false
      angle: 90
    Reactor_piece3:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 55.5
        z: 30
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,0,0,0,0,10,10]
        z: [0,0,0,0,0,0,0]
      width: [0,5,5,5,5,5,0]
      height: [0,15,15,15,15,15,0]
      texture: [18,6,11,10,4,18]
      propeller: false
      vertical: false
    Reactor_piece4:
      section_segments: 12
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
    decoration:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 21
        y: -115
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-9,-9,-9,-9,87,57,57,57]
        z: [1,1,1,1,1,1,1,1]
      width: [0,3,3,3,10,5,0]
      height: [0,3,3,3,3,3,0]
      texture: [17,18,12,63,12,17]
      angle: 10
      propeller: false
    decoration2:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 24.6
        y: -95
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-9,-9,-9,-9,57,57,57,57]
        z: [1,1,1,1,1,1,1,1]
      width: [0,6,8,9,11,6,0]
      height: [0,5,5,5,5,5,0]
      texture: [17,18,12,13,12,17]
      angle: 10
      propeller: false
    decoration3:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 8
        y: -115
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-9,-9,-9,-9,87,87,87,87]
        z: [1,1,1,1,1,1,1,1]
      width: [0,3,3,3,7,7,0]
      height: [0,3,3,3,10,5,0]
      texture: [17,18,12,1,12,17]
      angle: 5
      propeller: false
    decoration4:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 10
        y: -95
        z: 11
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-9,-9,-9,-9,57,57,57,57]
        z: [1,1,1,1,1,1,1,1]
      width: [0,5,5,5,5,5,0]
      height: [0,5,8,9,11,6,0]
      texture: [17,18,12,4,12,17]
      angle: 5
      propeller: false
    Decoration5:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 14
        y: 45
        z: 45
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,0,0,0,0,1,1]
        z: [0,0,0,0,0,0,0]
      width: [0,1,1,1,1,1,0]
      height: [8,10,10,10,10,10,8]
      texture: 17
      propeller: false
      vertical: false
    Decoration6:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 30
        z: 45
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,0,0,0,0,1,1]
        z: [0,0,0,0,0,0,0]
      width: [0,1,1,1,1,1,0]
      height: [8,10,10,10,10,10,8]
      texture: 17
      propeller: false
      vertical: false
    Decoration7:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 60
        z: 45
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,0,0,0,0,1,1]
        z: [0,0,0,0,0,0,0]
      width: [0,1,1,1,1,1,0]
      height: [8,10,10,10,10,10,8]
      texture: 17
      propeller: false
      vertical: false
    Decoration8:
      section_segments: 12
      offset:
        x: 25
        y: 60
        z: 10
      position:
        x: [0,0,0,0,0,0,0]
        y: [-20,-20,-10,20,30,40,45]
        z: [0,0,0,0,0,0]
      width: [0,10,15,18,18,18,0]
      height: [0,10,15,18,18,18,0]
      texture: [18,63,12]
      propeller: false
      angle: -90
    Decoration9:
      section_segments: 12
      offset:
        x: 25
        y: 20
        z: 6
      position:
        x: [0,0,0,0,0,0,0]
        y: [-20,-20,-10,20,30,40,45]
        z: [0,0,0,0,0,0]
      width: [0,10,15,18,18,18,0]
      height: [0,10,15,18,18,18,0]
      texture: [18,63,12]
      propeller: false
      angle: -90
    ring:
      section_segments: 12
      offset:
        x: 10
        y: 55
        z: 18
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-7,-6,-4,-4,4,4,6,7,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,13,14,14,14,14,13,12,12]
      height: [12,12,13,14,14,14,14,13,12,12]
      texture: [17,15.1,4,4,13,4,4,15.1,17]
      propeller: false
    ring2:
      section_segments: 12
      offset:
        x: 9
        y: 35
        z: 17
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-7,-6,-4,-4,4,4,6,7,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,13,14,14,14,14,13,12,12]
      height: [12,12,13,14,14,14,14,13,12,12]
      texture: [17,15.1,4,4,13,4,4,15.1,17]
      propeller: false
    ring3:
      section_segments: 6
      offset:
        x: 10
        y: -35
        z: 11
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-7,-6,-4,-4,4,4,6,7,8,8]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,32,32,33,34,34,34,34,33,32,32,0]
      height: [0,12,12,13,14,14,14,14,13,12,12,0]
      texture: [3.9,17,15.1,4,4,13,4,4,15.1,17,16.9]
      propeller: false
    ring4:
      section_segments: 6
      offset:
        x: 0
        y: -70
        z: 9.5
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-7,-6,-4,-4,4,4,6,7,8,8]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,32,32,33,34,34,34,34,33,32,32,0]
      height: [0,12,12,13,14,14,14,14,13,12,12,0]
      texture: [3.9,17,15.1,4,4,13,4,4,15.1,17,16.9]
      propeller: false
    ring5:
      section_segments: 6
      offset:
        x: 12
        y: -15
        z: 14
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-7,-6,-4,-4,4,4,6,7,8,8]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,32,32,33,34,34,34,34,33,32,32,0]
      height: [0,12,12,13,14,14,14,14,13,12,12,0]
      texture: [3.9,17,15.1,4,4,13,4,4,15.1,17,16.9]
      propeller: false
    ring6:
      section_segments: 6
      offset:
        x: 18
        y: -120
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-7,-6,-4,-4,4,4,6,7,8,8]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,12,12,13,14,14,14,14,13,12,12,0]
      height: [0,12,12,13,14,14,14,14,13,12,12,0]
      texture: [17.9,17,15.1,4,4,16.9,4,4,15.1,17,17.9]
      propeller: false
    ring7:
      section_segments: 6
      offset:
        x: 0
        y: -120
        z: 13
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-7,-6,-4,-4,4,4,6,7,8,8]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,12,12,13,14,14,14,14,13,12,12,0]
      height: [0,12,12,13,14,14,14,14,13,12,12,0]
      texture: [17.9,17,15.1,4,4,16.9,4,4,15.1,17,17.9]
      propeller: false
    ring8:
      section_segments: 6
      offset:
        x: 0
        y: -120
        z: -13
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-7,-6,-4,-4,4,4,6,7,8,8]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,12,12,13,14,14,14,14,13,12,12,0]
      height: [0,12,12,13,14,14,14,14,13,12,12,0]
      texture: [17.9,17,15.1,4,4,16.9,4,4,15.1,17,17.9]
      propeller: false
    side_propulsors:
      section_segments: 10
      offset:
        x: 34
        y: 45
        z: 0
      position:
        x: [-3,-3,-3,-3,0,0,0,0,0,0,0,0,0,0]
        y: [-85,-85,-95,-95,0,10,20,25,30,40,50,50,80,90]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,10,14,15,20,20,20,15,15,20,20,17,13,9]
      height: [0,5,9,10,15,15,15,15,15,20,20,17,13,9]
      propeller: true
      texture: [11,12,17,4,3,2,11,63,3,4,17,12,4]
    Wing_connection:
      section_segments: 6
      offset:
        x: 1
        y: 5
        z: -5
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-9,-9,-9,-9,57,80,80,87]
        z: [1,1,1,1,7,-2,1,1]
      width: [0,6,8,8,10,10,0]
      height: [0,3,3,3,3,3,0]
      texture: [17,18,12,63,4,17.9]
      angle: 120
      propeller: false
    Wing_connection2:
      section_segments: 6
      offset:
        x: 7
        y: 35
        z: -5
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-9,-9,-9,-9,57,80,80,87]
        z: [1,1,1,1,7,-2,1,1]
      width: [0,6,8,8,10,10,0]
      height: [0,3,3,3,3,3,0]
      texture: [17,18,12,63,4,17.9]
      angle: 120
      propeller: false
    Wing_connection3:
      section_segments: 6
      offset:
        x: 14
        y: 65
        z: -5
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-9,-9,-9,-9,57,80,80,87]
        z: [1,1,1,1,7,-2,1,1]
      width: [0,6,8,8,10,10,0]
      height: [0,3,3,3,3,3,0]
      texture: [17,13,12,63,4,17.9]
      angle: 120
      propeller: false
    Wing_connection4:
      section_segments: 6
      offset:
        x: 26
        y: 90
        z: -5
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,0,0,0,47,70,70,70]
        z: [1,1,1,1,7,-2,1,1]
      width: [0,6,8,8,10,10,0]
      height: [0,3,3,3,3,3,0]
      texture: [17,18,12,63,4,17.9]
      angle: 120
      propeller: false
    wing:
      section_segments: 6
      offset:
        x: 50
        y: 30
        z: -9
      position:
        x: [-30,-20,-30,0,0,8,8,8,8,14,0,0,20,20,30,20]
        y: [-40,-40,-22,-22,-7,-7,-7,-7,11,11,11,20,20,40]
        z: [0,0,0,0,1,1,1,1,1,1,1,1,1,1,1]
      width: [0,75,75,25,25,35,43,80,85,25,20,20,45,45]
      height: [0,3,3,3,3,5,5,5,5,5,4,4,5,5]
      texture: [18,3,11,12,17.9,17.9,11.9,3.9,11.9,16.9,13,3,3.9]
      angle: -80
      propeller: false
    wing2:
      section_segments: 6
      offset:
        x: 45
        y: 20
        z: -5
      position:
        x: [0,0,0,0,0,8,8,8,8,14,0,0,0,0,0,0]
        y: [-40,-40,-22,-22,-7,-7,-7,-7,11,11,11,20,20,40]
        z: [0,0,0,0,1,1,1,1,1,1,1,1,1,1,1]
      width: [0,75,75,25,25,35,43,80,85,25,20,20,45,45]
      height: [0,3,3,3,3,5,5,5,5,5,4,4,5,5]
      texture: [16,4,11,12,17.9,17.9,11.9,10,11.9,16.9,13,3,3.9]
      angle: -80
      propeller: false
  wings: side:
    doubleside: true
    offset:
      x: 100
      y: 60
      z: -10
    length: [0,10,10,10]
    width: [60,60,60,60,80]
    angle: [110,110,190,190,190]
    position: [0,0,-30,-30,-70]
    texture: [4,63,4,63,4,63]
    bump:
      position: 0
      size: 10
