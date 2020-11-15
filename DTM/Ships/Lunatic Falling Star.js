return model =
  name: 'Lunatic Falling Star'
  level: 7
  model: 5
  size: 1.36
  specs:
    shield:
      capacity: [770,770]
      reload: [14,14]
    generator:
      capacity: [700,700]
      reload: [400,400]
    ship:
      mass: 580
      speed: [155,155]
      rotation: [40,40]
      acceleration: [100,100]
      dash:
        rate: 0.5
        burst_speed: [120,140]
        speed: [1,1]
        acceleration: [9999,9999]
        initial_energy: [1,1]
        energy: [1,1]
  bodies:
    Main_body:
      section_segments: 6
      offset:
        x: 0
        y: 20
        z: -20
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-45,-35,10,20,18,-10,-15,-44,-45]
        z: [0,0,0,0,0,0,0,0,0]
      width: [50,80,80,50,50,50,50,50,50]
      height: [50,80,80,50,50,50,50,50,50]
      propeller: false
      texture: [3.9,3.9,3.9,17,15.9,17,15.9,17]
      vertical: true
      angle: 0
    Main_body_connection:
      section_segments: 8
      offset:
        x: 0
        y: 23
        z: -20
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-30,-29,0,0,0,0,0,-29,-30]
        z: [0,0,0,0,0,0,0,0,0]
      width: [80,85,85,80,80,80,80,80,80]
      height: [80,85,85,80,80,80,80,80,80]
      propeller: false
      texture: [17,13,17,17,15.9,17,15.9,17]
      vertical: true
      angle: 0
    body:
      section_segments: 12
      offset:
        x: 0
        y: -130
        z: 5
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-115,-110,-105,-95,-80,-80,-60,-60,-20,0,30,70,100,90]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,8,10,13,15,10,10,15,25,25,30,30,30,0]
      height: [0,5,7,9,12,10,10,15,20,20,30,30,30,0]
      texture: [4,4,4,3,18,4,18,4,13,18,4,63]
      propeller: false
    main_sides:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 20
        y: -160
        z: 4
      position:
        x: [-4,-4,0,0,0,0,15,15,15]
        y: [-35,-35,-15,10,10,70,110,110]
        z: [0,0,0,0,0,0,0,0,0]
      width: [4,8,14,17,18,20,1,0]
      height: [4,4,8,8,10,10,10,0]
      texture: [63,4,63,17,8.18,13,17]
      propeller: false
    main_sides2:
      section_segments: 6
      offset:
        x: 22
        y: -120
        z: 10
      position:
        x: [-22,-17,-10,-10,-10,0,0,4,5,5,5,10,10]
        y: [-125,-120,-60,-60,-25,-25,-15,10,10,70,100,100]
        z: [-5,-5,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,8,13,15,15,18,18,18,18,20,1,0]
      height: [0,5,8,10,10,8,8,8,10,10,10,0]
      texture: [4,4,17,18,63,4,63,17,18,4,17]
      propeller: false
    main_sides3:
      section_segments: 6
      offset:
        x: 22
        y: -120
        z: 0
      position:
        x: [-22,-17,-10,-10,-10,0,0,4,5,5,5,10,10]
        y: [-125,-120,-60,-60,-25,-25,-15,10,10,70,100,100]
        z: [-5,-5,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,8,13,15,15,18,18,18,18,20,1,0]
      height: [0,5,8,10,10,8,8,8,10,10,10,0]
      texture: [4,4,17,18,63,4,63,17,18,4,17]
      propeller: false
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: -165
        z: 15
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-55,-45,-25,0,25,30,60]
        z: [-2,0,0,0,8,5,12,12]
      width: [0,7,12,12,11,11,5]
      height: [0,7,12,12,7,11,5]
      texture: [9,9,9,18,63,4]
    reactor:
      section_segments: 6
      offset:
        x: 20
        y: 35
        z: 80
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-10,-10,0,3,-1,4,3]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,15,15,13,11,11,0]
      height: [0,15,15,13,11,11,0]
      propeller: false
      texture: [4,4,12,4.9,3.9,16.9]
      vertical: true
      angle: 20
    reactor2:
      section_segments: 6
      offset:
        x: 20
        y: 25
        z: 120
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-10,-10,0,3,-1,4,3]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,15,15,13,11,11,0]
      height: [0,15,15,13,11,11,0]
      propeller: false
      texture: [4,4,12,4.9,3.9,16.9]
      vertical: true
      angle: 20
    reactor3:
      section_segments: 6
      offset:
        x: 70
        y: 30
        z: -120
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-10,-10,0,3,-1,4,3]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,15,15,13,11,11,0]
      height: [0,15,15,13,11,11,0]
      propeller: false
      texture: [4,4,12,4.9,3.9,16.9]
      vertical: true
      angle: 0
    reactor4:
      section_segments: 6
      offset:
        x: 20
        y: 25
        z: -150
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-10,-10,0,3,-1,4,3]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,10,10,8,6,6,0]
      height: [0,10,10,8,6,6,0]
      propeller: false
      texture: [4,4,12,4.9,3.9,16.9]
      vertical: true
      angle: 0
    decoration:
      section_segments: [-140,-140,-90,-40,-40,40,40,40,90,140]
      offset:
        x: 35
        y: -60
        z: 5
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
        x: 30
        y: -120.1
        z: 5
      position:
        x: [0,0,0,0,0,0,0]
        y: [-25,-25,-20,-10,4,10,10]
        z: [0,0,0,0,0,0,0]
      width: [0,16,16,16,16,16,0]
      height: [0,16,16,16,16,16,0]
      angle: 0
      texture: [17.9,3.9,12.9,63,3.9,3.9]
    Main_tubes:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: -135
        z: 40
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-55,-30,3,27,52,52,67,72,103]
        z: [-23,-18,-14,-10,-5,-5,-5,-5,-15,0]
      width: [5,5,5,5,5,5,5,5,5]
      height: [5,5,5,5,5,5,5,5,5]
      texture: [8,13,4,8,4,63,4,8]
    Tube_Base:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 66
        y: 20
        z: 30
      position:
        x: [0,0,0,0,0,0,0]
        y: [-5,-5,-2,0,0]
        z: [0,0,0,0,0]
      width: [0,45,45,45,0]
      height: [0,10,10,10,0]
      propeller: false
      texture: [18,13,4,15.9]
      vertical: false
      angle: 90
    Tube_Base2:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 30
        y: -40
        z: 30
      position:
        x: [0,0,0,0,0,0,0]
        y: [-5,-5,-2,0,0]
        z: [0,0,0,0,0]
      width: [0,45,45,45,0]
      height: [0,10,10,10,0]
      propeller: false
      texture: [4,13,4,15.9]
      vertical: false
      angle: 150
    Tube_Base3:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 30
        y: 73
        z: 30
      position:
        x: [0,0,0,0,0,0,0]
        y: [-5,-5,-2,0,0]
        z: [0,0,0,0,0]
      width: [0,45,45,45,0]
      height: [0,10,10,10,0]
      propeller: false
      texture: [4,13,4,15.9]
      vertical: false
      angle: -150
    bomb_Tube:
      section_segments: 8
      offset:
        x: 0
        y: 0
        z: 10
      position:
        x: [0,0,0,0,0,0,0]
        y: [-25,-25,0,10,15]
        z: [0,0,0,0,0]
      width: [0,3,2,1,0]
      height: [0,3,2,1,0]
      propeller: false
      texture: [17]
      vertical: false
      angle: 0
      laser:
        damage: [20,20]
        rate: 0.5
        type: 1
        speed: [0.1,0.1]
        number: 5
        angle: 0
        error: 0
    bomb_Tube2:
      section_segments: 8
      offset:
        x: 0
        y: 40
        z: 10
      position:
        x: [0,0,0,0,0,0,0]
        y: [-25,-25,0,10,15]
        z: [0,0,0,0,0]
      width: [0,3,2,1,0]
      height: [0,3,2,1,0]
      propeller: false
      texture: [17]
      vertical: false
      angle: 180
      laser:
        damage: [20,20]
        rate: 0.5
        type: 1
        speed: [0.1,0.1]
        number: 5
        angle: 0
        error: 0
    bomb_Tube3:
      section_segments: 8
      offset:
        x: 20
        y: 20
        z: 10
      position:
        x: [0,0,0,0,0,0,0]
        y: [-25,-25,0,10,15]
        z: [0,0,0,0,0]
      width: [0,3,2,1,0]
      height: [0,3,2,1,0]
      propeller: false
      texture: [17]
      vertical: false
      angle: -90
      laser:
        damage: [20,20]
        rate: 0.5
        type: 1
        speed: [0.1,0.1]
        number: 5
        angle: 0
        error: 0
    bomb_Tube4:
      section_segments: 8
      offset:
        x: 0
        y: 0
        z: 10
      position:
        x: [0,0,0,0,0,0,0]
        y: [-25,-25,0,10,15]
        z: [0,0,0,0,0]
      width: [0,3,2,1,0]
      height: [0,3,2,1,0]
      propeller: false
      texture: [17]
      vertical: false
      angle: 0
      laser:
        damage: [10,10]
        rate: 0.5
        type: 1
        speed: [50,50]
        number: 5
        angle: 0
        error: 0
    bomb_Tube5:
      section_segments: 8
      offset:
        x: 0
        y: 40
        z: 10
      position:
        x: [0,0,0,0,0,0,0]
        y: [-25,-25,0,10,15]
        z: [0,0,0,0,0]
      width: [0,3,2,1,0]
      height: [0,3,2,1,0]
      propeller: false
      texture: [17]
      vertical: false
      angle: 180
      laser:
        damage: [10,10]
        rate: 0.5
        type: 1
        speed: [50,50]
        number: 5
        angle: 0
        error: 0
    bomb_Tube6:
      section_segments: 8
      offset:
        x: 20
        y: 20
        z: 10
      position:
        x: [0,0,0,0,0,0,0]
        y: [-25,-25,0,10,15]
        z: [0,0,0,0,0]
      width: [0,3,2,1,0]
      height: [0,3,2,1,0]
      propeller: false
      texture: [17]
      vertical: false
      angle: -90
      laser:
        damage: [10,10]
        rate: 0.5
        type: 1
        speed: [50,50]
        number: 5
        angle: 0
        error: 0
    Body_ring:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 84
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-6,-4,-4,4,6,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,26,26,26,26,26,26,26,26,0]
      height: [0,42,44,44,44,44,44,44,42,0]
      texture: [18,17,4,4,15.9,4,17,18]
      angle: 90
    Body_ring2:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 52
        y: 55
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-6,-4,-4,4,4,6,6,6]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,26,26,26,26,26,26,26,26,0]
      height: [0,42,44,44,44,44,44,44,42,0]
      texture: [18,17,15.9,4,4,15.1,17,18]
      angle: -30
    Body_ring3:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 52
        y: -12
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-6,-4,-4,4,4,6,6,6]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,26,26,26,26,26,26,26,26,0]
      height: [0,42,44,44,44,44,44,44,42,0]
      texture: [18,17,15.9,4,4,15.1,17,18]
      angle: 30
    Body_ring4:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: -41
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-6,-4,-4,4,6,8,8,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,26,26,26,26,26,26,26,26,0]
      height: [0,42,44,44,44,44,44,44,42,0]
      texture: [18,17,4,4,15.9,4,17,18]
      angle: 90
    Body_ring5:
      section_segments: 8
      offset:
        x: 70
        y: 140
        z: 18
      position:
        x: [-10,0,0,0,0,0,0]
        y: [-110,-48,0,4,4]
        z: [4,0,0,0,-5]
      width: [10,10,10,10,10]
      height: [5,10,10,10,10]
      propeller: false
      texture: [13,63,4]
      vertical: false
      angle: 0
    Body_ring6:
      section_segments: 8
      offset:
        x: 20
        y: 160
        z: 14
      position:
        x: [0,0,0,0,0,0,0]
        y: [-76,-48,0,4,4]
        z: [3,0,0,0,-5]
      width: [10,10,10,10,10]
      height: [5,10,10,10,10]
      propeller: false
      texture: [13,63,4]
      vertical: false
      angle: 0
    ring:
      section_segments: 17
      offset:
        x: 58
        y: 1.5
        z: 40
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-1,-1,0,0,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [7,7,7,8,8,8,8,7,7,7]
      height: [7,7,5,8,8,8,8,7,7,7]
      texture: 17
      propeller: false
    ring2:
      section_segments: 17
      offset:
        x: 58
        y: 11.3
        z: 40
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
        x: 58
        y: 21.3
        z: 40
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
        x: 58
        y: 31.3
        z: 40
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-1,-1,0,0,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [7,7,7,8,8,8,8,7,7,7]
      height: [7,7,7,8,8,8,8,7,7,7]
      texture: 17
      propeller: false
    ring5:
      section_segments: 17
      offset:
        x: 58
        y: 41.3
        z: 40
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-1,-1,0,0,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [7,7,7,8,8,8,8,7,7,7]
      height: [7,7,7,8,8,8,8,7,7,7]
      texture: 17
      propeller: false
    ring6:
      section_segments: 17
      offset:
        x: 0
        y: -10
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-1,-1,0,0,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [7,7,7,8,8,8,8,7,7,7]
      height: [7,7,7,8,8,8,8,7,7,7]
      texture: 17
      propeller: false
    ring7:
      section_segments: 17
      offset:
        x: 0
        y: 0
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-1,-1,0,0,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [7,7,7,8,8,8,8,7,7,7]
      height: [7,7,7,8,8,8,8,7,7,7]
      texture: 17
      propeller: false
    ring8:
      section_segments: 17
      offset:
        x: 0
        y: 10
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-1,-1,0,0,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [5,5,5,6,6,6,6,5,5,5]
      height: [5,5,5,6,6,6,6,5,5,5]
      texture: 17
      propeller: false
    ring9:
      section_segments: 17
      offset:
        x: 0
        y: 50
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-1,-1,0,0,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [7,7,7,8,8,8,8,7,7,7]
      height: [7,7,7,8,8,8,8,7,7,7]
      texture: 17
      propeller: false
    ring10:
      section_segments: 17
      offset:
        x: 0
        y: 40
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-1,-1,0,0,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [7,7,7,8,8,8,8,7,7,7]
      height: [7,7,7,8,8,8,8,7,7,7]
      texture: 17
      propeller: false
    ring11:
      section_segments: 17
      offset:
        x: 0
        y: 30
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-1,-1,0,0,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [5,5,5,6,6,6,6,5,5,5]
      height: [5,5,5,6,6,6,6,5,5,5]
      texture: 17
      propeller: false
    ring12:
      section_segments: 17
      offset:
        x: 30
        y: 20
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-1,-1,0,0,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [7,7,7,8,8,8,8,7,7,7]
      height: [7,7,7,8,8,8,8,7,7,7]
      texture: 17
      propeller: false
      angle: 90
    ring13:
      section_segments: 17
      offset:
        x: 20
        y: 20
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-1,-1,0,0,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [7,7,7,8,8,8,8,7,7,7]
      height: [7,7,7,8,8,8,8,7,7,7]
      texture: 17
      propeller: false
      angle: 90
    ring14:
      section_segments: 17
      offset:
        x: 10
        y: 20
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-1,-1,0,0,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [5,5,5,6,6,6,6,5,5,5]
      height: [5,5,5,6,6,6,6,5,5,5]
      angle: 90
      texture: 17
      propeller: false
    ring15:
      section_segments: 12
      offset:
        x: 0
        y: -75
        z: 15
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-6,-4,-4,4,4,6,6,6]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [32,32,32,34,34,34,34,32,32,32]
      height: [22,22,22,24,24,24,24,22,22,22]
      texture: [13,13,13,13,17,13]
      propeller: false
    ring16:
      section_segments: 12
      offset:
        x: 8
        y: -190
        z: 5
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-4,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [17]
      propeller: false
    ring17:
      section_segments: 12
      offset:
        x: 5
        y: -200
        z: 5
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-4,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [17]
      propeller: false
    ring18:
      section_segments: 12
      offset:
        x: 3
        y: -210
        z: 3
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-4,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [17]
      propeller: false
    Chargers:
      section_segments: 12
      offset:
        x: 50
        y: 37
        z: -1
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
        x: 50
        y: 37
        z: -11
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
        x: 50
        y: 37
        z: -21
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
        x: 50
        y: 37
        z: -31
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-9,-9,-6,-8,-6,-4,2,2]
        z: [0,0,0,0,0,0,0,0]
      width: [0,3,3,5,6,4,4,0]
      height: [0,3,3,5,6,4,4,0]
      texture: [18,4,17,4,4,13,15.9]
      angle: -160
      vertical: true
    Chargers5:
      section_segments: 12
      offset:
        x: 50
        y: 37
        z: -41
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-9,-9,-6,-8,-6,-4,2,2]
        z: [0,0,0,0,0,0,0,0]
      width: [0,3,3,5,6,4,4,0]
      height: [0,3,3,5,6,4,4,0]
      texture: [18,4,17,4,4,13,15.9]
      angle: -160
      vertical: true
    propulsors:
      section_segments: 12
      offset:
        x: 70
        y: 100
        z: 5
      position:
        x: [-12,-12,-12,-10,-10,-10,-8,0,0,0,0,0,0,0,0]
        y: [-120,-115,-105,-95,-95,-85,-85,-30,0,40,55,30,30,50,50]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,10,15,15,10,10,18,20,20,20,18,17,17,17,0]
      height: [0,10,15,15,10,10,18,20,20,20,18,17,17,17,0]
      texture: [4,63,4,18,13,18,4,18,63,8,13,17]
      propeller: true
    propulsors2:
      section_segments: 12
      offset:
        x: 20
        y: 140
        z: 7
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-50,-55,-55,-55,-55,-65,-65,-30,0,20,35,10,10,10,10]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,10,15,15,10,10,15,15,15,15,11,10,10,10,0]
      height: [0,10,15,15,10,10,15,15,15,15,11,10,10,10,0]
      texture: [4,63,4,18,13,18,4,18,63,8,13,17]
      propeller: true
  wings:
    wings:
      doubleside: true
      offset:
        x: -45
        y: 50
        z: -3
      length: [-10,-10,-40,0,-20]
      width: [50,50,130,80,100,90]
      angle: [-35,0,0,0,0]
      position: [0,0,0,50,50,80]
      texture: [4,4,18,17,4]
      bump:
        position: 40
        size: -7
    winglets:
      length: [20,15,5,15]
      width: [30,150,150,170,30]
      angle: [0,0,0,0]
      position: [20,-20,-30,40,40]
      texture: [18,63,17,4]
      bump:
        position: 10
        size: 6
      offset:
        x: 5
        y: -120
        z: 0
    winglets2:
      length: [20,15,15,15]
      width: [30,150,150,170,30]
      angle: [0,0,0,0]
      position: [20,-20,-30,40,40]
      texture: [18,4,4,18]
      bump:
        position: 10
        size: 6
      offset:
        x: 8
        y: -80
        z: 0
    winglets3:
      length: [20,15,5,15]
      width: [30,100,100,110,30]
      angle: [0,0,0,0]
      position: [20,20,20,40,40]
      texture: [18,63,17,4]
      bump:
        position: 10
        size: 6
      offset:
        x: 5
        y: 90
        z: 0
    winglets4:
      length: [10,5,5,5]
      width: [70,100,100,110,30]
      angle: [0,0,0,0]
      position: [20,20,20,20,20]
      texture: [18,63,17,4]
      bump:
        position: 10
        size: 7
      offset:
        x: 0
        y: 100
        z: 0
    shields:
      doubleside: true
      offset:
        x: 60
        y: 20
        z: 10
      length: [-20,-10,-20,-20]
      width: [50,50,60,60,50]
      angle: [295,315,315,315]
      position: [0,0,0,0,0]
      texture: [4,18,4,63]
      bump:
        position: -40
        size: -7
    shields2:
      doubleside: true
      offset:
        x: 60
        y: 21
        z: 10
      length: [-20,-10,-20,-20]
      width: [50,50,60,60,50]
      angle: [-295,-315,-315,-315]
      position: [0,0,0,0,0]
      texture: [4,18,4,63]
      bump:
        position: -40
        size: -7
    shields3:
      doubleside: true
      offset:
        x: 110
        y: 120
        z: 0
      length: [-20,-10,-20,-20]
      width: [50,50,130,120,100]
      angle: [295,315,315,315]
      position: [0,0,0,0,0]
      texture: [18,4,4,63]
      bump:
        position: -40
        size: -7
    shields4:
      doubleside: true
      offset:
        x: 110
        y: 120
        z: 6
      length: [-20,-10,-20,-20]
      width: [50,50,130,120,100]
      angle: [-295,-315,-315,-315]
      position: [0,0,0,0,0]
      texture: [18,4,4,63]
      bump:
        position: -40
        size: -7
