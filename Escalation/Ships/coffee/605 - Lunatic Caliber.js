return model =
  name: 'Lunatic_Caliber'
  level: 6
  model: 5
  size: 1.95
  specs:
    shield:
      capacity: [275,315]
      reload: [9,14]
    generator:
      capacity: [350,380]
      reload: [45,70]
    ship:
      mass: 270
      speed: [100,115]
      rotation: [40,55]
      acceleration: [60,70]
  bodies:
    main:
      section_segments: 12
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
      texture: [4,63,4,63,18,18,17]
      propeller: true
    main_sides:
      section_segments: 8
      offset:
        x: 10
        y: 0
        z: 10
      position:
        x: [-4,-4,0,0,0,0,3,3,3,2,2,2]
        y: [-38,-35,-15,10,10,40,70,65,75,80,90,85]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [4,8,14,17,18,20,13,10,10,10,8,0]
      height: [4,4,8,8,10,10,10,10,10,10,8,0]
      texture: [13,4,9.96,17,4,63,17,10,4,63,17]
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: -10
        z: 25
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-35,-30,-15,0,30,40]
        z: [-12,-12,-5,-2,-2,-2]
      width: [0,4,8,9,9,0]
      height: [0,4,5,5,5,0]
      texture: [4,9,9,18]
      propeller: false
    cockpit_part:
      section_segments: 6
      offset:
        x: 4
        y: -10
        z: 21
      position:
        x: [-3,-3,0,0,0,0,0,0]
        y: [-35,-30,-15,0,40,50]
        z: [-12.5,-12.5,-6,-1,0,-2]
      width: [0,4,8,9,9,0]
      height: [0,4,5,5,5,0]
      texture: [4,4,8,13]
      propeller: false
    bottom_cockpit:
      section_segments: 8
      offset:
        x: 0
        y: -10
        z: -5
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-35,-30,-15,0,30,40]
        z: [12,12,5,2,2,2]
      width: [0,4,8,9,9,0]
      height: [0,4,5,5,5,0]
      texture: [4,9,9,18]
      propeller: false
    bottom_cockpit_part:
      section_segments: 6
      offset:
        x: 4
        y: -10
        z: -1
      position:
        x: [-3,-3,0,0,0,0,0,0]
        y: [-35,-30,-15,0,40,50]
        z: [12.5,12.5,6,1,0,2]
      width: [0,4,8,9,9,0]
      height: [0,4,5,5,5,0]
      texture: [4,4,8,13]
      propeller: false
    Connectors:
      section_segments: 8
      offset:
        x: 0
        y: 60
        z: 8
      position:
        x: [40,40,40,40,40,40,40]
        y: [-15,-15,-5,3,3]
        z: [0,0,0,0,0]
      width: [0,40,40,40,0]
      height: [0,5,10,5,0]
      propeller: false
      texture: [18,4,63,18]
      vertical: false
      angle: 0
    Connectors2:
      section_segments: 8
      offset:
        x: 0
        y: 30
        z: 8
      position:
        x: [40,40,40,40,40,40,40]
        y: [-15,-15,-5,3,3]
        z: [0,0,0,0,0]
      width: [0,40,40,40,0]
      height: [0,5,10,5,0]
      propeller: false
      texture: [18,63,4,18]
      vertical: false
      angle: 0
    Connector_dec:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 30
        z: 12
      position:
        x: [40,40,40,40,40,40,40]
        y: [-14,-14,-5,2.9,3]
        z: [0,0,0,0,0]
      width: [0,10,10,10,0]
      height: [0,3,9,3,0]
      propeller: false
      texture: [17,13,13,17]
      vertical: false
      angle: 0
    Connectors_dec2:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 60
        z: 12
      position:
        x: [40,40,40,40,40,40,40]
        y: [-14,-14,-5,2.9,3]
        z: [0,0,0,0,0]
      width: [0,10,10,10,0]
      height: [0,3,9,3,0]
      propeller: false
      texture: [17,13,13,17]
      vertical: false
      angle: 0
    Connectors_dec3:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 60
        z: 11
      position:
        x: [50,50,50,50,50,50,50]
        y: [-14,-14,-5,2.9,3]
        z: [0,0,0,0,0]
      width: [0,10,10,10,0]
      height: [0,3,9,3,0]
      propeller: false
      texture: [17,18,18,17]
      vertical: false
      angle: 0
    Connectors_dec4:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 30
        z: 11
      position:
        x: [50,50,50,50,50,50,50]
        y: [-14,-14,-5,2.9,3]
        z: [0,0,0,0,0]
      width: [0,10,10,10,0]
      height: [0,3,9,3,0]
      propeller: false
      texture: [17,18,18,17]
      vertical: false
      angle: 0
    Connectors3:
      section_segments: 8
      offset:
        x: 0
        y: 60
        z: 8
      position:
        x: [-20,-20,-20,-20,-20,-20,-20]
        y: [-15,-15,-5,3,3]
        z: [0,0,0,0,0]
      width: [0,40,40,40,0]
      height: [0,5,8,5,0]
      propeller: false
      texture: [18,4,63,18]
      vertical: false
      angle: 0
    Connectors4:
      section_segments: 8
      offset:
        x: 0
        y: 30
        z: 8
      position:
        x: [-20,-20,-20,-20,-20,-20,-20]
        y: [-15,-15,-5,3,3]
        z: [0,0,0,0,0]
      width: [0,40,40,40,0]
      height: [0,5,8,5,0]
      propeller: false
      texture: [18,63,4,18]
      vertical: false
      angle: 0
    Connectors5:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 30
        z: 12
      position:
        x: [-40,-40,-40,-40,-40,-40,-40]
        y: [-14,-14,-5,10,10]
        z: [0,0,0,0,0]
      width: [0,10,10,10,0]
      height: [0,3,11,11,0]
      propeller: false
      texture: [17,13,18,17]
      vertical: false
      angle: 0
    Connectors6:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 60
        z: 12
      position:
        x: [-40,-40,-40,-40,-40,-40,-40]
        y: [-20,-20,-5,2.9,3]
        z: [0,0,0,0,0]
      width: [0,10,10,10,0]
      height: [0,11,11,3,0]
      propeller: false
      texture: [17,18,13,17]
      vertical: false
      angle: 0
    Connectors7:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 30
        z: 11
      position:
        x: [-45,-45,-45,-45,-45,-45,-45]
        y: [-14,-14,-5,10,10]
        z: [0,0,0,0,0]
      width: [0,10,10,10,0]
      height: [0,3,11,11,0]
      propeller: false
      texture: [17,10,11,17]
      vertical: false
      angle: 0
    Connectors8:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 60
        z: 11
      position:
        x: [-45,-45,-45,-45,-45,-45,-45]
        y: [-20,-20,-5,2.9,3]
        z: [0,0,0,0,0]
      width: [0,10,10,10,0]
      height: [0,11,11,3,0]
      propeller: false
      texture: [17,11,10,17]
      vertical: false
      angle: 0
    Connectors9:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 30
        z: 11
      position:
        x: [-35,-35,-35,-35,-35,-35,-35]
        y: [-14,-14,-5,10,10]
        z: [0,0,0,0,0]
      width: [0,10,10,10,0]
      height: [0,3,11,11,0]
      propeller: false
      texture: [17,10,11,17]
      vertical: false
      angle: 0
    Connectors10:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 60
        z: 11
      position:
        x: [-35,-35,-35,-35,-35,-35,-35]
        y: [-20,-20,-5,2.9,3]
        z: [0,0,0,0,0]
      width: [0,10,10,10,0]
      height: [0,11,11,3,0]
      propeller: false
      texture: [17,11,10,17]
      vertical: false
      angle: 0
    Turret_Base:
      section_segments: 8
      offset:
        x: 0
        y: 45
        z: 12
      position:
        x: [-35,-35,-40,-35,-35,-35,-35]
        y: [-20,-20,-5,10,10]
        z: [0,0,0,0,0]
      width: [0,25,25,25,0]
      height: [0,5,5,5,0]
      propeller: false
      texture: [18,3,4,18]
      vertical: false
      angle: 0
    Chargers:
      section_segments: 12
      offset:
        x: 0
        y: 78
        z: -20
      position:
        x: [-100,-100,-100,-100,-100,-100,-100,-100]
        y: [-9,-9,-6,-8,-6,-4,2,2]
        z: [0,0,0,0,0,0,0,0]
      width: [0,3,3,5,6,4,4,0]
      height: [0,3,3,5,6,4,4,0]
      texture: [18,4,17,4,4,13,15.9]
      angle: -140
      vertical: true
    Chargers2:
      section_segments: 12
      offset:
        x: 0
        y: 78
        z: -31
      position:
        x: [-100,-100,-100,-100,-100,-100,-100,-100]
        y: [-9,-9,-6,-8,-6,-4,2,2]
        z: [0,0,0,0,0,0,0,0]
      width: [0,3,3,5,6,4,4,0]
      height: [0,3,3,5,6,4,4,0]
      texture: [18,4,17,4,4,13,15.9]
      angle: -140
      vertical: true
    Chargers3:
      section_segments: 12
      offset:
        x: 0
        y: 78
        z: -42
      position:
        x: [-100,-100,-100,-100,-100,-100,-100,-100]
        y: [-9,-9,-6,-8,-6,-4,2,2]
        z: [0,0,0,0,0,0,0,0]
      width: [0,3,3,5,6,4,4,0]
      height: [0,3,3,5,6,4,4,0]
      texture: [18,4,17,4,4,13,15.9]
      angle: -140
      vertical: true
    Chargers4:
      section_segments: 12
      offset:
        x: 0
        y: 78
        z: -53
      position:
        x: [-100,-100,-100,-100,-100,-100,-100,-100]
        y: [-9,-9,-6,-8,-6,-4,2,2]
        z: [0,0,0,0,0,0,0,0]
      width: [0,3,3,5,6,4,4,0]
      height: [0,3,3,5,6,4,4,0]
      texture: [18,4,17,4,4,13,15.9]
      angle: -140
      vertical: true
    Chargers5:
      section_segments: 12
      offset:
        x: 0
        y: 78
        z: -64
      position:
        x: [-100,-100,-100,-100,-100,-100,-100,-100]
        y: [-9,-9,-6,-8,-6,-4,2,2]
        z: [0,0,0,0,0,0,0,0]
      width: [0,3,3,5,6,4,4,0]
      height: [0,3,3,5,6,4,4,0]
      texture: [18,4,17,4,4,13,15.9]
      angle: -140
      vertical: true
    bodie_ring:
      section_segments: 12
      offset:
        x: 0
        y: 50
        z: 15
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-6,-6,-6,-4,-4,4,4,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,0,14,18,18,18,18,12,0,0]
      height: [0,0,14,18,18,18,18,12,0,0]
      texture: [18,4,12,17,4,15.9,15.9,18]
      angle: 180
      propeller: false
    bodie_ring2:
      section_segments: 12
      offset:
        x: 0
        y: 70
        z: 15
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-6,-6,-6,-4,-4,4,4,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,0,14,18,18,18,18,12,0,0]
      height: [0,0,14,18,18,18,18,12,0,0]
      texture: [18,4,12,17,4,15.9,15.9,18]
      angle: 0
      propeller: false
    Bodie_ring3:
      section_segments: 10
      offset:
        x: 0
        y: 30
        z: 7.5
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-11,-8,-6,-4,-4,4,4,6,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,22,24,24,24,24,24,24,22,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [17.93,4,17,4,3,4,17,4,18]
    Bodie_ring4:
      section_segments: 10
      offset:
        x: 0
        y: 10
        z: 5
      position:
        x: [70,70,70,70,70,70,70,70,70,70]
        y: [-11,-8,-6,-4,-4,4,4,6,6,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,12,14,14,14,14,14,14,12,0]
      height: [0,12,14,14,14,14,14,14,12,0]
      texture: [4,17,15.1,4,4,15.1,17,18]
    Bodie_ring5:
      section_segments: 10
      offset:
        x: 0
        y: 30
        z: 6
      position:
        x: [70,70,70,70,70,70,70,70,70,70]
        y: [-11,-8,-6,-4,-4,4,4,6,6,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,12,14,14,14,14,14,14,12,0]
      height: [0,12,14,14,14,14,14,14,12,0]
      texture: [4,17,15.1,4,4,15.1,17,18]
    Bodie_ring6:
      section_segments: 10
      offset:
        x: 0
        y: 50
        z: 6
      position:
        x: [70,70,70,70,70,70,70,70,70,70]
        y: [-11,-8,-6,-4,-4,4,4,6,6,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,12,14,14,14,14,14,14,12,0]
      height: [0,12,14,14,14,14,14,14,12,0]
      texture: [4,17,15.1,4,4,15.1,17,18]
    Bodie_ring7:
      section_segments: 10
      offset:
        x: 0
        y: 70
        z: 6
      position:
        x: [70,70,70,70,70,70,70,70,70,70]
        y: [-11,-8,-6,-4,-4,4,4,6,6,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,12,14,14,14,14,14,14,12,0]
      height: [0,12,14,14,14,14,14,14,12,0]
      texture: [4,17,15.1,4,4,15.1,17,18]
    Bodie_ring8:
      section_segments: 12
      offset:
        x: 0
        y: 85
        z: 7
      position:
        x: [70,70,70,70,70,70,70,70,70,70]
        y: [-11,-8,-6,-4,-4,4,4,6,6,6]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,12,14,14,14,14,14,12,12,0]
      height: [0,12,14,14,14,14,14,12,12,0]
      texture: [4,4,4,18,10,4,4,18]
    ring:
      section_segments: 17
      offset:
        x: 0
        y: 20.3
        z: 14
      position:
        x: [85,85,85,85,85,85,85,85,85,85]
        y: [0,0,-1,-1,0,0,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [7,7,7,8,8,8,8,7,7,7]
      height: [7,7,7,8,8,8,8,7,7,7]
      texture: 17
      propeller: false
    ring2:
      section_segments: 17
      offset:
        x: 0
        y: 31.3
        z: 14
      position:
        x: [85,85,85,85,85,85,85,85,85,85]
        y: [0,0,-1,-1,0,0,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [7,7,7,8,8,8,8,7,7,7]
      height: [7,7,7,8,8,8,8,7,7,7]
      texture: 17
      propeller: false
    ring3:
      section_segments: 17
      offset:
        x: 0
        y: 42.3
        z: 14
      position:
        x: [85,85,85,85,85,85,85,85,85,85]
        y: [0,0,-1,-1,0,0,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [7,7,7,8,8,8,8,7,7,7]
      height: [7,7,7,8,8,8,8,7,7,7]
      texture: 17
      propeller: false
    ring4:
      section_segments: 17
      offset:
        x: 0
        y: 53.3
        z: 14
      position:
        x: [85,85,85,85,85,85,85,85,85,85]
        y: [0,0,-1,-1,0,0,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [7,7,7,8,8,8,8,7,7,7]
      height: [7,7,7,8,8,8,8,7,7,7]
      texture: 17
      propeller: false
    ring5:
      section_segments: 17
      offset:
        x: 0
        y: 64.3
        z: 14
      position:
        x: [85,85,85,85,85,85,85,85,85,85]
        y: [0,0,-1,-1,0,0,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [7,7,7,8,8,8,8,7,7,7]
      height: [7,7,7,8,8,8,8,7,7,7]
      texture: 17
      propeller: false
    ring7:
      section_segments: 12
      offset:
        x: 0
        y: -40
        z: 0
      position:
        x: [70,70,70,70,70,70,70,70,70,70]
        y: [0,0,-4,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 17 ]
      propeller: false
    ring8:
      section_segments: 12
      offset:
        x: 0
        y: -50
        z: 0
      position:
        x: [70,70,70,70,70,70,70,70,70,70]
        y: [0,0,-4,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 17 ]
      propeller: false
    ring9:
      section_segments: 12
      offset:
        x: 0
        y: -60
        z: 0
      position:
        x: [70,70,70,70,70,70,70,70,70,70]
        y: [0,0,-4,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 17 ]
      propeller: false
    ring10:
      section_segments: 12
      offset:
        x: 0
        y: -70
        z: 0
      position:
        x: [70,70,70,70,70,70,70,70,70,70]
        y: [0,0,-4,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 17 ]
      propeller: false
    ring11:
      section_segments: 12
      offset:
        x: 0
        y: -80
        z: 0
      position:
        x: [70,70,70,70,70,70,70,70,70,70]
        y: [0,0,-4,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [8,8,8,8,8,8,8,8,8,8]
      height: [8,8,8,8,8,8,8,8,8,8]
      texture: [ 17 ]
      propeller: false
    ring12:
      section_segments: 12
      offset:
        x: 0
        y: 60
        z: 20
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-4,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [13,13,13,15,15,15,15,13,13,13]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [4,4,4,17,17,4]
      propeller: false
    Main_tubes:
      section_segments: 6
      offset:
        x: 0
        y: 5
        z: 12
      position:
        x: [70,70,70,70,70,70,70,70,70,70,70,70]
        y: [-48,-48,-6,0,10,17,22,22,37,62,79]
        z: [-5,-7,2,3,4,4,4,4,4,4,4,0]
      width: [0,5,5,5,5,5,5,5,5,5,5]
      height: [0,5,5,5,5,5,5,5,5,5,5]
      texture: [4,63,13,4,4,4,0,63,10,4]
    Main_tubes2:
      section_segments: 6
      offset:
        x: 0
        y: 5
        z: -12
      position:
        x: [70,70,70,70,70,70,70,70,70,70,70,70]
        y: [-48,-48,-6,0,10,17,22,22,37,62,79]
        z: [5,7,-2,-3,-4,-4,-4,-4,-4,-4,-4,0]
      width: [0,5,5,5,5,5,5,5,5,5,5]
      height: [0,5,5,5,5,5,5,5,5,5,5]
      texture: [4,63,13,4,4,4,0,63,10,4]
    Main_tubes3:
      section_segments: 6
      offset:
        x: 0
        y: 75
        z: 10
      position:
        x: [57,57,57,57,57,57,57,57,57,57,57,57]
        y: [-48,-40,15,15,0,0,0,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [1,1,1,0,0,0,0,0,0,0,0]
      height: [1,1,1,0,0,0,0,0,0,0,0]
      texture: [17,15.9,15.9,20]
    Main_tubes4:
      section_segments: 8
      offset:
        x: 12
        y: 45
        z: 23
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [0,0,0,3,10,12,12,17,19,23]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [2,2,2,2,2,2,2,2,2,2]
      height: [2,2,2,2,2,2,2,2,2,2]
      texture: [ 17 ]
    Main_tubes5:
      section_segments: 8
      offset:
        x: 7
        y: 45
        z: 28
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [0,0,0,3,10,12,12,17,19,23]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [2,2,2,2,2,2,2,2,2,2]
      height: [2,2,2,2,2,2,2,2,2,2]
      texture: [ 17 ]
    Main_tubes6:
      section_segments: 8
      offset:
        x: 0
        y: 45
        z: 30
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [0,0,0,3,10,12,12,17,19,23]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [2,2,2,2,2,2,2,2,2,2]
      height: [2,2,2,2,2,2,2,2,2,2]
      texture: [ 17 ]
    Main_tubes7:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: -15
        z: 30
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,13,37,52,52,67,62,63]
        z: [-13,-10,-4,-2,-1,-1,-5,-7,-7,0]
      width: [5,5,5,5,5,5,5,5,5]
      height: [5,5,5,5,5,5,5,5,5]
      texture: [8,13,4,8,4,4,3,8]
    Main_tubes8:
      section_segments: [45,135,225,315]
      offset:
        x: 1
        y: -15
        z: 29
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,13,37,52,52,67,62,63]
        z: [-13,-10,-4,-5,-1,-1,-5,-7,-7,0]
      width: [5,5,5,5,5,5,5,5,5]
      height: [5,5,5,5,5,5,5,5,5]
      texture: [ 17 ]
    tubes:
      section_segments: 8
      offset:
        x: 0
        y: -82
        z: 11
      position:
        x: [70,70,70,70,70,70,70,70,70,70]
        y: [0,0,23,27,62,62,97,102,163]
        z: [-10,-5,0,0,0,0,0,0,0,0]
      width: [0,2,2,2,2,2,2,2,2]
      height: [0,2,2,2,2,2,2,2,2]
      texture: [13,13,17,13,17,17,13]
    tubes2:
      section_segments: 8
      offset:
        x: 0
        y: -82
        z: -11
      position:
        x: [70,70,70,70,70,70,70,70,70,70]
        y: [0,0,23,27,62,62,97,102,163]
        z: [10,5,0,0,0,0,0,0,0,0]
      width: [0,2,2,2,2,2,2,2,2]
      height: [0,2,2,2,2,2,2,2,2]
      texture: [13,13,17,13,17,17,13]
    tubes3:
      section_segments: 8
      offset:
        x: 0
        y: -82
        z: 0
      position:
        x: [70,65,60,60,60,60,60,60,60,60]
        y: [0,0,23,27,62,62,97,102,163]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,2,2,2,2,2,2,2,2]
      height: [0,2,2,2,2,2,2,2,2]
      texture: [13,13,17,13,18,4,13]
    tubes4:
      section_segments: 8
      offset:
        x: 0
        y: -82
        z: 0
      position:
        x: [70,75,80,80,80,80,80,80,80,80]
        y: [0,0,23,27,62,62,97,102,163]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,2,2,2,2,2,2,2,2]
      height: [0,2,2,2,2,2,2,2,2]
      texture: [13,13,17,13,18,4,13]
    cannons:
      section_segments: 12
      offset:
        x: 0
        y: 40
        z: 0
      position:
        x: [70,70,70,70,70,70,70,70,70,70,70,70,70,70]
        y: [-120,-130,-120,-70,-70,-60,-60,-45,-45,-20,0,20,50,55]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5,9,10,11,11,10,10,13,15,15,15,15,0]
      height: [0,5,9,10,11,11,10,10,13,20,20,20,20,0]
      angle: 0
      laser:
        damage: [10,18]
        rate: 5
        type: 1
        speed: [160,180]
        number: 1
        angle: 0.1
        error: 0
        recoil: 50
      propeller: false
      texture: [15.9,4,13,17,8,17,4,18,4,18,4,63,18]
    cannons2:
      section_segments: 12
      offset:
        x: 0
        y: 40
        z: 0
      position:
        x: [70,70,70,70,70,70,70,70,70,70,70,70,70,70]
        y: [-120,-130,-120,-70,-70,-60,-60,-45,-45,-20,0,20,50,54]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5,9,10,11,11,10,10,13,20,20,20,20,0]
      height: [0,5,9,10,11,11,10,10,13,15,15,15,15,0]
      angle: 0
      laser:
        damage: [21,28]
        rate: 8
        type: 1
        speed: [170,190]
        number: 1
        angle: 0
        error: 0
        recoil: 50
      propeller: false
      texture: [17,4,13,17,8,17,4,18,4,18,4,63,63]
    propulsors:
      section_segments: 12
      offset:
        x: 20
        y: 45
        z: 5
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-40,-35,-20,0,20,45,20,20,40,40]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,5,8,9,10,8,8,6,6,0]
      height: [0,5,8,9,10,8,8,6,6,0]
      texture: [18,4,4,63,8,13,17]
      propeller: true
