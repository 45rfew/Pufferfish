return model =
  name: 'Lunar Blade'
  level: 7
  model: 2
  size: 1.2
  specs:
    shield:
      capacity: [1575,1575]
      reload: [12,12]
    generator:
      capacity: [550,550]
      reload: [680,680]
    ship:
      mass: 790
      speed: [75,75]
      rotation: [10,10]
      acceleration: [120,120]
  bodies:
    main:
      section_segments: 12
      offset:
        x: 0
        y: 30
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-160,-160,-160,-160,-160,-140,-140,-140,-120,-120,-120,-100,-100,-100,-50,0,30,70,180,160,160]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,25,35,40,40,40,49,49,49,49,40,40,49,49,55,55,60,50,40,40,0]
      height: [0,15,22,22,22,30,49,49,49,49,40,40,49,49,59,60,60,50,40,40,0]
      texture: [17,4,3,13,4,13,4,3,4,13,4,18,17,3,63,4,8,4,13,18]
      propeller: true
    cannons:
      section_segments: 6
      offset:
        x: 110
        y: -20
        z: 20
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-150,-180,-180,-170,-140,-140,-90,-90,-70,-70,-50,-50,-20,0,20,50,55,55]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5,8,8,8,8,8,10,15,15,15,15,15,15,15,15,10,0]
      height: [0,3,8,8,8,8,8,10,15,15,15,15,15,15,15,15,10,0]
      angle: 0
      laser:
        damage: [30,30]
        rate: 4
        type: 1
        speed: [190,190]
        number: 1
        angle: 0
        error: 0
        recoil: 0
      propeller: false
      texture: [17,13,4,18,18,13,18,4,18,13,18,17,4,63,4,3,4]
    cannons2:
      section_segments: 6
      offset:
        x: 153
        y: -20
        z: 25
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-150,-180,-180,-170,-140,-140,-90,-90,-70,-70,-50,-50,-20,0,20,50,55,55]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5,8,8,8,8,8,10,15,15,15,15,15,15,15,15,10,0]
      height: [0,3,8,8,8,8,8,10,15,15,15,15,15,15,15,15,10,0]
      angle: 0
      laser:
        damage: [30,30]
        rate: 4
        type: 1
        speed: [190,190]
        number: 1
        angle: 0
        error: 0
        recoil: 0
      propeller: false
      texture: [17,13,4,18,18,13,18,4,18,13,18,10,4,63,4,3,4]
    cannons3:
      section_segments: 6
      offset:
        x: 195
        y: -20
        z: 20
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-150,-180,-180,-170,-140,-140,-90,-90,-70,-70,-50,-50,-20,0,20,50,55,55]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5,8,8,8,8,8,10,15,15,15,15,15,15,15,5,5,0]
      height: [0,3,8,8,8,8,8,10,15,15,15,15,15,15,15,5,5,0]
      angle: 0
      laser:
        damage: [30,30]
        rate: 4
        type: 1
        speed: [190,190]
        number: 1
        angle: 0
        error: 0
        recoil: 0
      propeller: false
      texture: [17,13,4,18,18,13,18,4,18,13,18,17,4,63,4,3,4]
    cannons4:
      section_segments: 6
      offset:
        x: 260
        y: 10
        z: 80
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-150,-180,-180,-170,-140,-140,-90,-90,-70,-70,-50,-50,-20,0,20,50,55,55]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5,8,8,8,8,8,10,15,15,15,15,15,15,15,15,10,0]
      height: [0,3,8,8,8,8,8,10,15,15,15,15,15,15,15,15,10,0]
      angle: -30
      laser:
        damage: [30,30]
        rate: 4
        type: 1
        speed: [190,190]
        number: 1
        angle: 0
        error: 0
        recoil: 0
      propeller: false
      texture: [17,13,4,18,18,13,18,4,4,4,18,12,4,63,4,3,4]
    cannons5:
      section_segments: 6
      offset:
        x: 298
        y: 32
        z: 90
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-150,-180,-180,-170,-140,-140,-90,-90,-70,-70,-50,-50,-20,0,20,50,55,55]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5,8,8,8,8,8,10,15,15,15,15,15,15,15,15,10,0]
      height: [0,3,8,8,8,8,8,10,15,15,15,15,15,15,15,15,10,0]
      angle: -30
      laser:
        damage: [30,30]
        rate: 4
        type: 1
        speed: [190,190]
        number: 1
        angle: 0
        error: 0
        recoil: 0
      propeller: false
      texture: [17,13,4,18,18,13,18,4,4,4,18,12,4,63,4,3,4]
    cannons6:
      section_segments: 6
      offset:
        x: 335
        y: 53
        z: 80
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-150,-180,-180,-170,-140,-140,-90,-90,-70,-70,-50,-50,-20,0,20,50,55,55]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5,8,8,8,8,8,10,15,15,15,15,15,15,15,15,10,0]
      height: [0,3,8,8,8,8,8,10,15,15,15,15,15,15,15,15,10,0]
      angle: -30
      laser:
        damage: [30,30]
        rate: 4
        type: 1
        speed: [190,190]
        number: 1
        angle: 0
        error: 0
        recoil: 0
      propeller: false
      texture: [17,13,4,18,18,13,18,4,4,4,18,12,4,63,4,3,4]
    cannons7:
      section_segments: 6
      offset:
        x: 465
        y: 165
        z: 80
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-150,-180,-180,-170,-140,-140,-90,-90,-70,-70,-50,-50,-20,0,20,50,55,55]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5,8,8,8,8,8,10,15,15,15,15,15,15,15,15,10,0]
      height: [0,3,8,8,8,8,8,10,15,15,15,15,15,15,15,15,10,0]
      angle: -30
      laser:
        damage: [30,30]
        rate: 4
        type: 1
        speed: [190,190]
        number: 1
        angle: 0
        error: 0
        recoil: 0
      propeller: false
      texture: [17,13,4,18,18,13,18,4,4,4,18,12,4,63,4,3,4]
    cannons8:
      section_segments: 6
      offset:
        x: 507
        y: 188
        z: 90
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-150,-180,-180,-170,-140,-140,-90,-90,-70,-70,-50,-50,-20,0,20,50,55,55]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5,8,8,8,8,8,10,15,15,15,15,15,15,15,15,10,0]
      height: [0,3,8,8,8,8,8,10,15,15,15,15,15,15,15,15,10,0]
      angle: -30
      laser:
        damage: [30,30]
        rate: 4
        type: 1
        speed: [190,190]
        number: 1
        angle: 0
        error: 0
        recoil: 0
      propeller: false
      texture: [17,13,4,18,18,13,18,4,4,4,18,12,4,63,4,3,4]
    cannons9:
      section_segments: 6
      offset:
        x: 543
        y: 213
        z: 80
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-150,-180,-180,-170,-140,-140,-90,-90,-70,-70,-50,-50,-20,0,20,50,55,55]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5,8,8,8,8,8,10,15,15,15,15,15,15,15,15,10,0]
      height: [0,3,8,8,8,8,8,10,15,15,15,15,15,15,15,15,10,0]
      angle: -30
      laser:
        damage: [30,30]
        rate: 4
        type: 1
        speed: [190,190]
        number: 1
        angle: 0
        error: 0
        recoil: 0
      propeller: false
      texture: [17,13,4,18,18,13,18,4,4,4,18,12,4,63,4,3,4]
    cannon_part:
      section_segments: 6
      offset:
        x: 153
        y: -70
        z: 28
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-44,-44,-44,-20,0,20,50,184,234]
        z: [0,0,0,0,0,0,0,-14,-30]
      width: [5,42,42,57,57,57,57,57,40]
      height: [0,17,17,17,17,17,17,17,17]
      texture: [17.9,4,4,63,3,13,18,4]
      angle: 0
    cannon_part2:
      section_segments: 6
      offset:
        x: 153
        y: -70
        z: 40
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-20,-20,-20,-20,0,20,50,154,204]
        z: [-10,-10,-10,-10,-10,-10,-30,-14,-30]
      width: [5,32,32,47,47,47,47,47,30]
      height: [0,17,17,17,17,17,17,17,17]
      texture: [17.9,4,4,63,10,18,18,4]
      angle: 0
    reactor:
      section_segments: 6
      offset:
        x: 152
        y: 45
        z: 35
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-15,-15,0,3,3,3,3,12,14,14,14,12]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,30,30,28,27,20,19,19,18,17,10,0]
      height: [0,30,30,28,27,20,19,19,18,17,10,0]
      propeller: false
      texture: [3.9,3.9,11.9,16.9,17.9,16.9,11.9,3.9,16.9,17.9,16.9]
      vertical: true
      angle: 0
    reactor2:
      section_segments: 6
      offset:
        x: 152
        y: 43
        z: -60
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-15,-15,0,3,3,3,3,12,14,14,14,12]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,30,30,28,27,20,19,19,18,17,10,0]
      height: [0,30,30,28,27,20,19,19,18,17,10,0]
      propeller: false
      texture: [3.9,3.9,11.9,16.9,17.9,16.9,11.9,3.9,16.9,17.9,16.9]
      vertical: true
      angle: 0
    main2:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 40
        y: -95
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-14,-13,-10,0,3,4]
        z: [0,0,0,0,0,0,0,0]
      width: [0,22,27,27,23,0]
      height: [0,22,27,27,23,0]
      propeller: false
      texture: [18,4,13,4,18]
      vertical: false
      angle: 0
    main3:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 40
        y: -40
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-14,-13,-10,0,3,4]
        z: [0,0,0,0,0,0,0,0]
      width: [0,22,27,27,23,0]
      height: [0,32,37,37,32,0]
      propeller: false
      texture: [18,4,13,4,18]
      vertical: false
      angle: 0
    main4:
      section_segments: 8
      offset:
        x: 0
        y: -120
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-33,-33,-30,0,33,34]
        z: [0,0,0,0,0,0,0,0]
      width: [0,22,27,37,37,0]
      height: [0,22,22,24,24,0]
      propeller: false
      texture: [18,4,63,4,18]
      vertical: false
      angle: 0
    Main_rings:
      section_segments: 6
      offset:
        x: 30
        y: 10
        z: 20
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-71,-68,-66,-64,-64,24,24,26,26,28]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,22,24,24,24,24,24,24,22,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [17.93,4,17,17,17,17,17,18]
    Main_rings2:
      section_segments: 6
      offset:
        x: 28
        y: 30
        z: 27
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-71,-68,-66,-64,-64,4,4,6,6,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,22,24,24,24,24,24,24,22,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [17.93,4,4,4,10,17,17,18]
    Main_rings3:
      section_segments: 6
      offset:
        x: 0
        y: 95.5
        z: 43.9
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-71,-68,-66,-64,-64,4,4,6,6,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,22,24,24,24,24,24,24,22,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [17.93,4,4,4,17,17,17,18]
      angle: 0
    Main_rings4:
      section_segments: 4
      offset:
        x: 18
        y: 175.5
        z: 43.9
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-71,-68,-66,-64,-64,4,4,6,6,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,22,24,24,24,24,24,24,22,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [17.93,4,4,4,18,17,17,18]
      angle: 0
    Body_ring:
      section_segments: 6
      offset:
        x: 166
        y: 10
        z: 25
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-8,-6,-6,4,4,6,6,6]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,84,84,84,84,84,84,84,82,0]
      height: [0,24,24,24,24,24,24,24,22,0]
      texture: [17.93,4,17,17,4,17,17,18]
      angle: 90
    Body_ring2:
      section_segments: 6
      offset:
        x: 140
        y: 10
        z: 25
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-8,-6,-6,4,4,6,6,6]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,84,84,84,84,84,84,84,82,0]
      height: [0,24,24,24,24,24,24,24,22,0]
      texture: [17.93,4,17,17,4,17,17,18]
      angle: 90
    Body_ring3:
      section_segments: 10
      offset:
        x: 290
        y: 30
        z: -55
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-17,-18,-16,-4,-4,4,4,6,6,8,20,20,25,35,35,35]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [72,72,74,74,74,74,74,74,72,50,50,72,72,55,45,0]
      height: [72,72,74,74,74,74,74,74,72,50,50,72,72,55,45,0]
      texture: [17.93,4,4,4,13,17,17,17.93,17.93,17,18,4,10,17,18]
      vertical: true
    Body_ring4:
      section_segments: 6
      offset:
        x: 290
        y: 50
        z: 35
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-8,-6,-6,4,4,6,6,6]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,74,74,74,74,74,74,74,72,0]
      height: [0,24,24,24,24,24,24,24,22,0]
      texture: [17.93,4,17,17,4,17,17,18]
      angle: 90
    Body_ring5:
      section_segments: 6
      offset:
        x: 290
        y: 50
        z: 35
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-8,-6,-6,4,4,6,6,6]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,74,74,74,74,74,74,74,72,0]
      height: [0,24,24,24,24,24,24,24,22,0]
      texture: [17.93,4,17,17,4,17,17,18]
      angle: 0
    Body_rings6:
      section_segments: 6
      offset:
        x: 290
        y: 85
        z: 63.9
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-71,-68,-66,-64,-64,4,4,6,6,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,22,24,24,24,24,24,24,22,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [17.93,4,4,4,18,17,17,18]
      angle: 0
    Body_rings7:
      section_segments: 6
      offset:
        x: 275
        y: 75
        z: 83.9
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-71,-68,-66,-44,-24,4,4,6,16,38,38]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,42,44,44,44,44,44,64,62,40,0]
      height: [0,12,14,14,14,14,14,14,14,12,0]
      texture: [17.93,4,3,12,4,17,17,13,4,18]
      angle: -30
    Body_ring8:
      section_segments: 10
      offset:
        x: 490
        y: 30
        z: -205
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-17,-18,-16,-4,-4,4,4,6,6,8,20,20,25,35,35,35]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [72,72,74,74,74,74,74,74,72,50,50,72,72,55,45,0]
      height: [72,72,74,74,74,74,74,74,72,50,50,72,72,55,45,0]
      texture: [17.93,4,4,4,13,17,17,17.93,17.93,17,18,4,10,17,18]
      vertical: true
    Body_ring9:
      section_segments: 6
      offset:
        x: 490
        y: 205
        z: 35
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-8,-6,-6,4,4,6,6,6]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,74,74,74,74,74,74,74,72,0]
      height: [0,24,24,24,24,24,24,24,22,0]
      texture: [17.93,4,17,17,4,17,17,18]
      angle: 90
    Body_ring10:
      section_segments: 6
      offset:
        x: 490
        y: 205
        z: 35
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-8,-6,-6,4,4,6,6,6]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,74,74,74,74,74,74,74,72,0]
      height: [0,24,24,24,24,24,24,24,22,0]
      texture: [17.93,4,17,17,4,17,17,18]
      angle: 0
    Body_rings11:
      section_segments: 6
      offset:
        x: 490
        y: 235
        z: 63.9
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-71,-68,-66,-64,-64,4,4,6,6,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,22,24,24,24,24,24,24,22,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [17.93,4,4,4,18,17,17,18]
      angle: 0
    Body_rings12:
      section_segments: 6
      offset:
        x: 480
        y: 230
        z: 83.9
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-71,-68,-66,-44,-24,4,4,6,16,38,38]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,42,44,44,44,44,44,64,62,40,0]
      height: [0,12,14,14,14,14,14,14,14,12,0]
      texture: [17.93,4,3,12,4,17,17,13,4,18]
      angle: -30
    Body_ring13:
      section_segments: 6
      offset:
        x: 400
        y: 105
        z: 25
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-8,-6,-6,4,4,6,6,6]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,174,174,174,174,174,174,174,172,0]
      height: [0,24,24,24,24,24,24,24,22,0]
      texture: [17.93,4,17,17,4,17,17,18]
      angle: -40
    Body_ring14:
      section_segments: 6
      offset:
        x: 390
        y: 135
        z: 25
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-8,-6,-6,4,4,6,6,6]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,174,174,174,174,174,174,174,172,0]
      height: [0,24,24,24,24,24,24,24,22,0]
      texture: [17.93,4,17,17,4,17,17,18]
      angle: -40
    Body_ring15:
      section_segments: 6
      offset:
        x: 400
        y: 125
        z: 20
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-48,-48,-48,-46,-46,44,44,46,46,46]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,174,174,174,174,174,174,174,172,0]
      height: [0,24,24,24,24,24,24,24,22,0]
      texture: [17.93,4,17,17,63,17,17,18]
      angle: -40
    Body_ring16:
      section_segments: 6
      offset:
        x: 220
        y: 95
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-48,-48,-48,-46,-46,44,44,46,46,46]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,174,174,174,174,174,174,174,172,0]
      height: [0,24,24,24,24,24,24,24,22,0]
      texture: [17.93,4,17,17,13,17,17,18]
      angle: 150
    Body_ring17:
      section_segments: 6
      offset:
        x: 290
        y: 120
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-48,-48,-48,-46,-46,44,44,46,46,46]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,174,174,174,174,174,174,174,172,0]
      height: [0,24,24,24,24,24,24,24,22,0]
      texture: [17.93,4,17,17,4,17,17,18]
      angle: 90
    Body_ring18:
      section_segments: 6
      offset:
        x: 420
        y: 188
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-48,-48,-48,-46,-46,44,44,46,46,46]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,174,174,174,174,174,174,174,172,0]
      height: [0,24,24,24,24,24,24,24,22,0]
      texture: [17.93,4,17,17,13,17,17,18]
      angle: 150
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: -50
        z: 32
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-100,-100,-60,0,60,80]
        z: [-23,-23,-4,0,0,0]
      width: [0,20,30,35,35,0]
      height: [0,13,20,25,22,0]
      texture: [18,9,9,4,4]
      propeller: false
    cockpit2:
      section_segments: 6
      offset:
        x: 33
        y: -50
        z: 30
      position:
        x: [-10,-8,-8,-8,0,-6,-4,0]
        y: [-55,-50,0,60,120,200,200]
        z: [0,-8,-8,-3,-4,-9,-9]
      width: [0,20,25,25,25,25,0]
      height: [0,20,25,22,22,22,0]
      texture: [4,18,3,18,4,18]
      propeller: false
    cockpit3:
      section_segments: 8
      offset:
        x: 0
        y: -50
        z: -32
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-100,-100,-60,0,60,80]
        z: [23,23,4,0,0,0]
      width: [0,20,30,35,35,0]
      height: [0,13,20,25,22,0]
      texture: [18,9,9,4,4]
      propeller: false
    cockpit4:
      section_segments: 6
      offset:
        x: 33
        y: -50
        z: -30
      position:
        x: [-10,-8,-8,-8,0,-6,-4,0]
        y: [-55,-50,0,60,120,200,200]
        z: [0,8,8,3,4,9,9]
      width: [0,20,25,25,25,25,0]
      height: [0,20,25,22,22,22,0]
      texture: [4,18,3,18,4,18]
      propeller: false
    propulsors:
      section_segments: 10
      offset:
        x: 50
        y: 160
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-30,-30,-20,0,20,30,28]
        z: [0,0,0,0,0,0,0]
      width: [0,10,10,10,10,10,0]
      height: [0,10,10,10,10,10,0]
      angle: 0
      texture: [4,4,18,63,4,17]
      propeller: true
    propulsors2:
      section_segments: 10
      offset:
        x: 50
        y: 160
        z: 24
      position:
        x: [0,0,0,0,0,0,0]
        y: [-30,-30,-20,0,20,30,28]
        z: [0,0,0,0,0,0,0]
      width: [0,10,10,10,10,10,0]
      height: [0,10,10,10,10,10,0]
      angle: 0
      texture: [4,4,18,63,4,17]
      propeller: true
    propulsors3:
      section_segments: 10
      offset:
        x: 50
        y: 160
        z: -24
      position:
        x: [0,0,0,0,0,0,0]
        y: [-30,-30,-20,0,20,30,28]
        z: [0,0,0,0,0,0,0]
      width: [0,10,10,10,10,10,0]
      height: [0,10,10,10,10,10,0]
      angle: 0
      texture: [4,4,18,63,4,17]
      propeller: true
    propulsors4:
      section_segments: 10
      offset:
        x: 110
        y: 200
        z: 15
      position:
        x: [0,0,0,0,0,0,0]
        y: [-30,-30,-20,0,20,30,28]
        z: [0,0,0,0,0,0,0]
      width: [0,10,10,10,10,10,0]
      height: [0,10,10,10,10,10,0]
      angle: 0
      texture: [4,4,18,63,4,17]
      propeller: true
    propulsors5:
      section_segments: 10
      offset:
        x: 110
        y: 200
        z: -15
      position:
        x: [0,0,0,0,0,0,0]
        y: [-30,-30,-20,0,20,30,28]
        z: [0,0,0,0,0,0,0]
      width: [0,10,10,10,10,10,0]
      height: [0,10,10,10,10,10,0]
      angle: 0
      texture: [4,4,18,63,4,17]
      propeller: true
    propulsors6:
      section_segments: 10
      offset:
        x: 145
        y: 200
        z: -15
      position:
        x: [0,0,0,0,0,0,0]
        y: [-130,-130,-20,0,20,30,28]
        z: [0,0,0,0,0,0,0]
      width: [0,10,10,10,10,10,0]
      height: [0,10,10,10,10,10,0]
      angle: 0
      texture: [4,4,18,63,4,17]
      propeller: true
    propulsors7:
      section_segments: 10
      offset:
        x: 175
        y: 190
        z: -15
      position:
        x: [0,0,0,0,0,0,0]
        y: [-130,-130,-20,0,20,30,28]
        z: [0,0,0,0,0,0,0]
      width: [0,10,10,10,10,10,0]
      height: [0,10,10,10,10,10,0]
      angle: 0
      texture: [4,4,18,63,4,17]
      propeller: true
    propulsors8:
      section_segments: 10
      offset:
        x: 205
        y: 180
        z: -15
      position:
        x: [0,0,0,0,0,0,0]
        y: [-130,-130,-20,0,20,30,28]
        z: [0,0,0,0,0,0,0]
      width: [0,10,10,10,10,10,0]
      height: [0,10,10,10,10,10,0]
      angle: 0
      texture: [4,4,18,63,4,17]
      propeller: true
    propulsors9:
      section_segments: 7
      offset:
        x: 0
        y: 90
        z: 50
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-63,-60,-55,-63,-59,-58,-55,-54,-51,-50,-48,-5,-40,-40,-40,-40,-39,-36,-35,-19,-19,-19,-19,-18,-15,-14,-14,-12,-12,-11,-8,-7,-7,-5,-5,-4,-1,0,0,10,25,49,50,70,70,90,100,100,95,95,60,60]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,1,3.5,4,7,7.5,8,8.5,9,9.5,10,11,11,12,14,15,15,15,15,15,16,19,20,20,20,20,15,15,20,20,20,20,15,15,20,20,20,20,25,25,25,25,25,25,25,25,20,13,7,6,6,0]
      height: [0,1,3.5,4,7,7.5,8,8.5,9,9.5,10,11,11,12,14,15,15,15,15,15,16,19,20,20,20,20,15,15,20,20,20,20,15,15,20,20,20,20,25,25,25,25,25,25,25,25,20,13,7,6,6,0]
      texture: [17,4,13,3,17,1,17,4,17,1,18,13,17,4,17,17,4,17,11,17,11,17,17,11,17,11,12,11,17,11,17,11,12,11,17,11,17,11,2,4,11,17,13,4,4,3,17,8,18,16,17]
      propeller: true
  wings:
    main:
      offset:
        x: 60
        y: 0
        z: 0
      length: [50,0,0,0,80,80,80,80,80,80,80]
      width: [290,290,300,360,370,360,350,340,330,320,260,220]
      texture: [4,17,4,17,18,4,18,4,18,63,4]
      angle: [0,0,0,0,0,0,0,0,0,0,0]
      position: [10,10,10,10,10,10,50,100,160,230,340,450]
      doubleside: 1
      bump:
        position: -10
        size: 10
    main2:
      offset:
        x: 60
        y: 10
        z: 0
      length: [50,0,0,0,80,80,80,80,80,80,80]
      width: [290,290,300,360,370,360,350,340,330,320,260,220]
      texture: [17,17,17,17,17,4,4,12,4,12,18]
      angle: [0,0,0,0,0,0,0,0,0,0,0]
      position: [10,10,10,10,10,10,50,100,160,230,340,450]
      doubleside: 1
      bump:
        position: -10
        size: 5
    winglets:
      length: [0,30,20]
      width: [0,210,230,150]
      angle: [0,0,0]
      position: [-50,-50,-80,-50]
      texture: [4,63,4]
      doubleside: 1
      bump:
        position: 50
        size: 20
      offset:
        x: 30
        y: 140
        z: 0
    winglets2:
      length: [0,30,20]
      width: [0,110,130,50]
      angle: [0,0,0]
      position: [-50,-50,0,50]
      texture: [4,3,4]
      doubleside: 1
      bump:
        position: 50
        size: 20
      offset:
        x: 60
        y: 130
        z: 0
    winglets3:
      doubleside: true
      offset:
        x: 20
        y: -75
        z: 0
      length: [0,45,0,20]
      width: [0,80,190,200,130]
      angle: [0,0,0,0]
      position: [30,30,10,-45,30]
      texture: [13,63,13,4]
      bump:
        position: 35
        size: 20
    winglets4:
      doubleside: true
      offset:
        x: 106
        y: -85
        z: 0
      length: [0,45,70,40,0]
      width: [0,80,390,300,130,130]
      angle: [0,0,0,0,0]
      position: [30,30,60,35,30,30]
      texture: [13,4,18,4,18]
      bump:
        position: 35
        size: 1
    winglets5:
      length: [0,30,20]
      width: [0,210,230,150]
      angle: [0,0,0]
      position: [-50,-50,-80,-50]
      texture: [4,63,4]
      doubleside: 1
      bump:
        position: 50
        size: 15
      offset:
        x: 90
        y: 180
        z: 0
