return model =
  name: 'Lunatic Tarantula'
  level: 7
  model: 7
  size: 1.75
  specs:
    shield:
      capacity: [945,945]
      reload: [10,10]
    generator:
      capacity: [660,660]
      reload: [105,105]
    ship:
      mass: 850
      speed: [110,110]
      rotation: [40,40]
      acceleration: [40,40]
  bodies:
    main:
      section_segments: 9
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-96,-96,-100,-50,0,30,70,70,100,100,150,190,230,200]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,20,30,45,45,30,30,20,20,30,40,45,40,0]
      height: [0,20,20,30,30,30,30,20,20,30,40,45,40,0]
      texture: [4.9,17.9,3,4,63,4,4,13,4,4,63,4,17]
      propeller: true
    main2:
      section_segments: 8
      offset:
        x: 30
        y: 160
        z: -2
      position:
        x: [-3,-3.5,0,0,-10,-10,-10]
        y: [-100,-99,-68,-50,0,20,20]
        z: [0,0,0,0,0,0,0]
      width: [0,4,14,18,26,18,0]
      height: [0,2,12,12,12,12,0]
      texture: [4,4,3,11,4,18]
      propeller: false
    main_sides:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 35
        y: -60
        z: 0
      position:
        x: [-12,-12,0,0,0,0,-4,-4,-14,-14]
        y: [-75,-75,-15,10,10,90,130,131,170,220]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,1,14,17,28,20,20,20,20,21]
      height: [0,4,8,8,20,20,20,20,20,20]
      texture: [4,4,3,18,9.94,4,17,4,3]
      propeller: false
    Cannon_connector:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 70
        y: 35
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-30,-30,-15,10,10]
        z: [0,0,0,0,0]
      width: [0,35,35,35,0]
      height: [0,5,9,5,0]
      propeller: false
      texture: [18,13,4,18]
      vertical: false
      angle: 20
    Cannon_connector2:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 60
        y: 85
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-30,-30,-15,10,10]
        z: [0,0,0,0,0]
      width: [0,55,55,55,0]
      height: [0,5,9,5,0]
      propeller: false
      texture: [18,13,4,18]
      vertical: false
      angle: -20
    Cannon_connector3:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 70
        y: 15
        z: 3
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,0,5,20,20]
        z: [0,0,0,0,0]
      width: [0,35,35,35,0]
      height: [0,5,9,5,0]
      propeller: false
      texture: [18,17,63,18]
      vertical: false
      angle: 20
    Cannon_conenctor4:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 60
        y: 85
        z: 5
      position:
        x: [0,0,0,0,0,0,0]
        y: [-20,-20,-5,0,0]
        z: [0,0,0,0,0]
      width: [0,55,55,55,0]
      height: [0,5,9,5,0]
      propeller: false
      texture: [18,63,17,18]
      vertical: false
      angle: -20
    Cannon_connector5:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 70
        y: -55
        z: -5
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,0,5,20,20]
        z: [0,0,0,0,0]
      width: [0,35,35,35,0]
      height: [0,5,9,5,0]
      propeller: false
      texture: [18,17,63,18]
      vertical: false
      angle: 20
    Cannon_connector6:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 60
        y: -35
        z: -10
      position:
        x: [0,0,0,0,0,0,0]
        y: [-30,-30,-15,10,10]
        z: [0,0,0,0,0]
      width: [0,55,55,55,0]
      height: [0,5,9,5,0]
      propeller: false
      texture: [18,13,4,18]
      vertical: false
      angle: 20
    Cannon_connector7:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 40
        y: 117
        z: -5
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,0,5,20,20]
        z: [0,0,0,0,0]
      width: [0,35,35,35,0]
      height: [0,5,9,5,0]
      propeller: false
      texture: [18,17,63,18]
      vertical: false
      angle: -30
    Cannon_connector8:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 30
        y: 135
        z: -10
      position:
        x: [0,0,0,0,0,0,0]
        y: [-30,-30,-15,10,10]
        z: [0,0,0,0,0]
      width: [0,35,35,35,0]
      height: [0,5,9,5,0]
      propeller: false
      texture: [18,13,4,18]
      vertical: false
      angle: -30
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: -40
        z: 27
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-57,-56,-25,10,30,90,100]
        z: [-16,-16,-14,-10,-10,-1,2]
      width: [0,10,17,20,20,15,0]
      height: [0,13,22,25,22,5,0]
      texture: [5,9,9,4,3,4]
      propeller: false
    Main_tubes:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: -15
        z: 39
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-20,-20,3,27,52,52,67,67,67]
        z: [-18,-12,-3,-6,-9,-9,-12,-12,-12,-12]
      width: [0,5,5,5,5,5,5,5,0]
      height: [0,5,5,5,5,5,5,5,0]
      texture: [8,13,4,8,4,4,3,8]
    Main_tubes2:
      section_segments: [45,135,225,315]
      offset:
        x: 1
        y: -15
        z: 38
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-20,-20,3,27,52,52,67,67,67]
        z: [-18,-12,-4,-6,-9,-9,-12,-12,-12,-12]
      width: [5,5,5,5,5,5,5,5,0]
      height: [5,5,5,5,5,5,5,5,0]
      texture: [17]
    Main_tubes3:
      section_segments: [45,135,225,315]
      offset:
        x: 40
        y: -15
        z: 23
      position:
        x: [0,0,0,0,0,0,-10,-10,-10,-10]
        y: [-30,-30,3,27,52,52,67,67,67]
        z: [-13,-12,-9,-9,-9,-9,-9,-9,-9,0]
      width: [5,5,5,5,5,5,5,5,0]
      height: [5,5,5,5,5,5,5,5,0]
      texture: [4,9.96,4]
    Main_tubes5:
      section_segments: [45,135,225,315]
      offset:
        x: 55
        y: 0
        z: 0
      position:
        x: [-25,-3,-12,-12,-12,-12,-12,-12,-22,-22]
        y: [-110,-50,3,27,52,52,67,72,113,113]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [5,5,5,5,5,5,5,5,5,0]
      height: [5,5,5,5,5,5,5,5,5,0]
      texture: [17,4,18,8,4,4,3,4]
    Main_tubes6:
      section_segments: 8
      offset:
        x: 28
        y: 58
        z: 14
      position:
        x: [0,0,0,0,0,0,-5,-5,-5,-5]
        y: [-90,-50,3,27,52,52,66,67,67]
        z: [-10,0,0,0,0,0,0,0,0,0]
      width: [5,5,5,5,5,5,5,5,5]
      height: [5,5,5,5,5,5,5,5,5]
      texture: [4,63,4,3,4]
    Main_tubes7:
      section_segments: [45,135,225,315]
      offset:
        x: 42
        y: -16.2
        z: 21
      position:
        x: [0,0,0,0,0,0,-2,-2,-2,-2]
        y: [-20,-20,3,27,52,52,67,67,67]
        z: [-9.2,-9.2,-9,-9,-9,-9,-9,-9,-9,-9]
      width: [5,5,5,5,5,5,5,5,0]
      height: [5,5,5,5,5,5,5,5,0]
      texture: [17]
    tubes:
      section_segments: 12
      offset:
        x: 15
        y: 95
        z: 15
      position:
        x: [0,0,0,0,0,0,0]
        y: [-40,-40,-20,-10,0,30,30]
        z: [0,0,0,0,0,0,0]
      width: [0,4,4,4,4,4,0]
      height: [0,4,4,4,4,4,4]
      angle: 0
      texture: [18,8,12,8,12,18]
    tubes2:
      section_segments: 12
      offset:
        x: 15
        y: 95
        z: -15
      position:
        x: [0,0,0,0,0,0,0]
        y: [-40,-40,-20,-10,0,30,30]
        z: [0,0,0,0,0,0,0]
      width: [0,4,4,4,4,4,0]
      height: [0,4,4,4,4,4,4]
      angle: 0
      texture: [18,8,12,8,12,18]
    tubes3:
      section_segments: 12
      offset:
        x: 0
        y: 95
        z: 20
      position:
        x: [0,0,0,0,0,0,0]
        y: [-40,-40,-20,-10,0,30,30]
        z: [0,0,0,0,0,0,0]
      width: [0,4,4,4,4,4,0]
      height: [0,4,4,4,4,4,4]
      angle: 0
      texture: [18,8,12,8,12,18]
    Body_ring:
      section_segments: 6
      offset:
        x: 15
        y: 60
        z: 3
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-6,-4,-4,4,6,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,26,26,26,26,26,26,26,26,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [18,17,4,4,3,4,17,18]
      angle: 0
    Body_ring2:
      section_segments: 6
      offset:
        x: 20
        y: 160
        z: 15
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-6,-4,-4,4,6,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,26,26,26,26,26,26,26,26,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [18,17,4,4,63,4,17,18]
      angle: 0
    Body_ring3:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 102
        y: 69
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-6,-4,-4,4,6,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,26,26,26,26,26,26,26,26,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [18,17,4,4,13,4,17,18]
      angle: 3
    Body_ring4:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 60
        y: 140
        z: -6
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-6,-4,-4,4,6,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,26,26,26,26,26,26,26,26,0]
      height: [0,12,14,14,14,14,14,14,12,0]
      texture: [18,17,4,4,13,4,17,18]
      angle: 60
    Body_ring5:
      section_segments: 10
      offset:
        x: 39
        y: -30
        z: 11
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-11,-8,-6,-4,-4,4,4,6,6,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,32,34,34,34,34,34,34,32,0]
      height: [0,12,14,14,14,14,14,14,12,0]
      texture: [4,17,15.1,4,4,15.1,17,18]
      angle: 90
      propeller: false
    Body_ring6:
      section_segments: 10
      offset:
        x: 0
        y: 50
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-11,-8,-6,-4,-4,4,4,6,6,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,32,34,34,34,34,34,34,32,0]
      height: [0,32,34,34,34,34,34,34,32,0]
      texture: [4,17,15.1,4,4,15.1,17,18]
      propeller: false
    Body_ring7:
      section_segments: 10
      offset:
        x: 3
        y: -5
        z: 14
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-21,-18,-16,-14,-14,4,4,6,6,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,22,24,24,24,24,24,24,22,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [17.93,4,4,4,10,17,17,18]
    Body_ring8:
      section_segments: 6
      offset:
        x: 20
        y: 175
        z: 15
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-6,-4,-4,4,6,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,26,26,26,26,26,26,26,26,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [18,17,4,4,4,4,17,18]
      angle: 0
    Body_ring9:
      section_segments: 6
      offset:
        x: 20
        y: 190
        z: 15.3
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-6,-4,-4,4,6,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,26,26,26,26,26,26,26,26,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [18,17,4,4,4,4,17,18]
      angle: 0
    Body_ring10:
      section_segments: 6
      offset:
        x: 20
        y: 205
        z: 15
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-6,-4,-4,4,6,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,26,26,26,26,26,26,26,26,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [18,17,4,4,63,4,17,18]
      angle: 0
    Body_ring11:
      section_segments: 6
      offset:
        x: 0
        y: 240
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-6,-4,-4,4,6,8,8,8,-8]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [40,42,42,42,42,42,42,42,42,40,40]
      height: [40,42,42,42,42,42,42,42,42,40,40]
      texture: [18,17,4,4,63,4,17,18,18]
      angle: 0
    Body_ring12:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 101
        y: 51
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-6,-4,-4,4,6,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,26,26,26,26,26,26,26,26,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [18,17,4,4,13,4,17,18]
      angle: 3
    Body_ring13:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 100
        y: 31
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-6,-4,-4,4,6,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,26,26,26,26,26,26,26,26,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [18,17,4,4,13,4,17,18]
      angle: 3
    Body_ring14:
      section_segments: 6
      offset:
        x: 10
        y: 80
        z: 5
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-6,-4,-4,4,6,8,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,42,42,42,42,42,42,42,42,40,0]
      height: [0,22,22,22,22,22,22,22,22,20,0]
      texture: [18,17,4,4,4,4,17,18,18]
      angle: 0
    Body_ring15:
      section_segments: 6
      offset:
        x: 10
        y: 100
        z: 5
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-6,-4,-4,4,6,8,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,42,42,42,42,42,42,42,42,40,0]
      height: [0,22,22,22,22,22,22,22,22,20,0]
      texture: [18,17,4,4,63,4,17,18,18]
      angle: 0
    ring:
      section_segments: 6
      offset:
        x: 25
        y: -57
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-4,-4,-4,-2,-2,2,2,4,4,4]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,9,12,14,14,14,14,12,9,0]
      height: [0,9,12,14,14,14,14,12,9,0]
      texture: [4,13,4,16.9,16.9,17,4,13,4]
      propeller: false
    ring2:
      section_segments: 6
      offset:
        x: 22
        y: -65
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-4,-4,-4,-2,-2,2,2,4,4,4]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,9,12,14,14,14,14,12,9,0]
      height: [0,9,12,14,14,14,14,12,9,0]
      texture: [4,13,4,16.9,16.9,17,4,13,4]
      propeller: false
    ring3:
      section_segments: 6
      offset:
        x: 18
        y: -72
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-4,-4,-4,-2,-2,2,2,4,4,4]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,9,12,14,14,14,14,12,9,0]
      height: [0,9,12,14,14,14,14,12,9,0]
      texture: [4,13,4,16.9,16.9,17,4,13,4]
      propeller: false
    ring4:
      section_segments: 9
      offset:
        x: 0
        y: 75
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-4,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [22,22,22,22,22,22,22,22,22,22]
      height: [22,22,22,22,22,22,22,22,22,22]
      texture: [17]
      propeller: false
    ring5:
      section_segments: 9
      offset:
        x: 0
        y: 85
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-4,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [22,22,22,22,22,22,22,22,22,22]
      height: [22,22,22,22,22,22,22,22,22,22]
      texture: [17]
      propeller: false
    ring6:
      section_segments: 9
      offset:
        x: 0
        y: 95
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-4,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [22,22,22,22,22,22,22,22,22,22]
      height: [22,22,22,22,22,22,22,22,22,22]
      texture: [17]
      propeller: false
    reactor:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 45
        y: 0
        z: -180
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-40,-40,0,3,-1,4,3,3,3,3]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,40,40,38,36,36,33,40,36,0]
      height: [0,40,40,38,36,36,33,40,36,0]
      propeller: false
      texture: [4,4,12,17,4,17,18,13,18]
      vertical: true
      angle: 90
    reactor2:
      section_segments: 12
      offset:
        x: 0
        y: 45
        z: -182
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
    decoration:
      section_segments: [-140,-140,-90,-40,-40,40,40,40,90,140]
      offset:
        x: 0
        y: 94
        z: 30
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-105,-115,-52,-50,-30,-20,4,60,60]
        z: [0,0,-2,-5,-10,-10,-10,-2,-2]
      width: [0,14,14,16,16,16,16,16,0]
      height: [0,14,14,16,16,16,16,16,0]
      angle: 0
      texture: [18,18,17,3.9,12.9,63,4,17.9]
    decoration2:
      section_segments: 9
      offset:
        x: 0
        y: 195
        z: 35
      position:
        x: [0,0,0,0,0,0,0]
        y: [-55,-45,-30,-20,14,20,20]
        z: [0,0,0,0,0,0,0]
      width: [0,22,22,22,22,22,0]
      height: [0,10,10,10,10,10,0]
      angle: 0
      texture: [17.9,3.9,2.9,63,3.9,3.9]
    Back_cannons:
      section_segments: 6
      offset:
        x: 20
        y: 200
        z: 32
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-65,-68,-55,-55,-45,-45,-20,0,20,30,30,50,50,50]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,-1,-1]
      width: [0,6,9,8,8,9,10,10,10,10,11,11,10,0]
      height: [0,6,9,8,8,9,10,10,10,10,11,11,10,0]
      angle: 180
      laser:
        damage: [30,30]
        rate: 5
        type: 1
        speed: [200,200]
        number: 10
        angle: 0
        error: 30
        recoil: 55
      texture: [12,4,4,13,17,10.24,13,1,3,17,4,11]
    cannons:
      section_segments: 6
      offset:
        x: 100
        y: 20
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-140,-150,-130,-130,-86,-85,-81,-80,-76,-75,-71,-70,-48,-48,-20,0,20,70,125,125]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,15,0]
      height: [0,10,10,10,10,10,10,10,10,10,10,10,10,20,23,25,25,25,20,0]
      angle: 3
      laser:
        damage: [30,30]
        rate: 2.5
        type: 1
        speed: [200,200]
        number: 1
        angle: 0
        error: 0
        recoil: 0
      propeller: false
      texture: [17,4,4,13,17,13,17,4,17,13,17,4,18,4,3,63,10.235,4,17.9]
    FakeCannons:
      section_segments: 4
      offset:
        x: 100
        y: 20
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-140,-150,-129,-129,-85,-84,-80,-78,-74,-74,-70,-69,-47,-48,-20,0,20,70,125,124]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,10,10,10,10,10,10,10,10,10,10,10,10,20,23,25,25,25,15,0]
      height: [0,10,10,10,10,10,10,10,10,10,10,10,10,20,23,25,25,25,20,0]
      angle: 3
      propeller: false
      texture: [17,17,17,17,17,17,17,17,17,17,4,4,4,4,13,12,18,3,18]
    FakeCannons2:
      section_segments: 8
      offset:
        x: 15
        y: -60
        z: 21
      position:
        x: [-4,-4,-3,-5,0,3,0,-2,-4,-4,-4]
        y: [-30,-35,-35,-35,-15,10,10,60,80,80]
        z: [-4,-12,-15,-5,-2,0,0,0,0,0,0]
      width: [0,1,4,8,10,10,18,20,10,1]
      height: [0,4,4,4,8,8,10,10,10,1]
      texture: [17,13,4,4,13,18,4,3,18]
      propeller: false
    FakeCannons3:
      section_segments: 8
      offset:
        x: 20
        y: -70
        z: 0
      position:
        x: [-9,-9,-3,-2,0,3,0,-2,-4,-4,-4]
        y: [-50,-55,-35,-35,-15,0,0,20,30,30]
        z: [-2,-2,-2,-2,0,0,0,0,0,0,0]
      width: [0,1,4,8,10,10,18,20,10,5]
      height: [0,4,4,5,8,8,10,10,10,5]
      texture: [17,4,4,4,13,18,4,3,18]
      angle: 0
    Back_FakeCannons:
      section_segments: 8
      offset:
        x: -30
        y: 220
        z: 0
      position:
        x: [-4,-4,-3,-2,0,3,0,-2,-4,-4,-4]
        y: [-50,-55,-35,-35,-15,0,0,20,30,30]
        z: [-2,-2,-2,-2,0,0,0,0,0,0,0]
      width: [0,1,4,8,10,10,18,20,10,5]
      height: [0,4,4,5,8,8,10,10,10,5]
      texture: [17,4,4,4,13,18,4,3,18]
      angle: 180
      propeller: false
  wings:
    main:
      offset:
        x: 90
        y: 30
        z: 0
      length: [30,20,0,10]
      width: [70,50,40,70,30]
      texture: [4,4,4,63]
      angle: [0,0,0,0]
      position: [10,-20,-50,-50,-90]
      doubleside: 1
      bump:
        position: -10
        size: 10
    main2:
      offset:
        x: 100
        y: 80
        z: 0
      length: [30,20,0,10]
      width: [30,50,40,70,30]
      texture: [4,4,4,63]
      angle: [0,0,0,0]
      position: [-10,20,50,50,90]
      doubleside: 1
      bump:
        position: -10
        size: 10
    main3:
      offset:
        x: 90
        y: -55
        z: -10
      length: [20,10,0,10]
      width: [30,40,30,50,20]
      texture: [4,4,4,63]
      angle: [0,0,0,0]
      position: [10,-20,-50,-50,-90]
      doubleside: 1
      bump:
        position: -10
        size: 10
    main4:
      offset:
        x: 50
        y: 145
        z: -10
      length: [20,10,0,10]
      width: [30,40,30,50,20]
      texture: [4,4,4,63]
      angle: [0,0,0,0]
      position: [-10,20,50,50,90]
      doubleside: 1
      bump:
        position: -10
        size: 10
    main5:
      offset:
        x: 90
        y: 35
        z: 0
      length: [30,20,0,10]
      width: [70,50,40,70,30]
      texture: [4,18,18,4]
      angle: [0,0,0,0]
      position: [10,-20,-50,-50,-90]
      doubleside: 1
      bump:
        position: -10
        size: 8
    main6:
      offset:
        x: 90
        y: 25
        z: 0
      length: [30,20,0,10]
      width: [70,50,40,70,30]
      texture: [4,8,8,63]
      angle: [0,0,0,0]
      position: [10,-20,-50,-50,-90]
      doubleside: 1
      bump:
        position: -10
        size: 8
    main7:
      offset:
        x: 100
        y: 85
        z: 0
      length: [30,20,0,10]
      width: [30,50,40,70,30]
      texture: [4,18,18,4]
      angle: [0,0,0,0]
      position: [-10,20,50,50,90]
      doubleside: 1
      bump:
        position: -10
        size: 8
    main8:
      offset:
        x: 100
        y: 77
        z: 0
      length: [30,20,0,10]
      width: [30,50,40,70,30]
      texture: [4,8,8,63]
      angle: [0,0,0,0]
      position: [-10,20,50,50,90]
      doubleside: 1
      bump:
        position: -10
        size: 8
    main9:
      offset:
        x: 90
        y: -60
        z: -10
      length: [20,10,0,10]
      width: [30,40,30,50,20]
      texture: [8,3,8,63]
      angle: [0,0,0,0]
      position: [10,-20,-50,-50,-90]
      doubleside: 1
      bump:
        position: -10
        size: 5
    main10:
      offset:
        x: 90
        y: -50
        z: -10
      length: [20,10,0,10]
      width: [30,40,30,50,20]
      texture: [18,18,18,4]
      angle: [0,0,0,0]
      position: [10,-20,-50,-50,-90]
      doubleside: 1
      bump:
        position: -10
        size: 5
    main11:
      offset:
        x: 50
        y: 142
        z: -10
      length: [20,10,0,10]
      width: [30,40,30,50,20]
      texture: [3,8,8,63]
      angle: [0,0,0,0]
      position: [-10,20,50,50,90]
      doubleside: 1
      bump:
        position: -10
        size: 8
    main12:
      offset:
        x: 50
        y: 150
        z: -10
      length: [20,10,0,10]
      width: [30,40,30,50,20]
      texture: [18,18,18,4]
      angle: [0,0,0,0]
      position: [-10,20,50,50,90]
      doubleside: 1
      bump:
        position: -10
        size: 8
