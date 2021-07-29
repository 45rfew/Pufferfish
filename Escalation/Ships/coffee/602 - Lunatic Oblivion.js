return model =
  name: 'Lunatic Oblivion'
  level: 6
  model: 2
  size: 2.2
  specs:
    shield:
      capacity: [400,435]
      reload: [7,12]
    generator:
      capacity: [10,20]
      reload: [105,120]
    ship:
      mass: 380
      speed: [70,90]
      rotation: [45,60]
      acceleration: [70,90]
  bodies:
    main:
      section_segments: 12
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-61,-61,-59,-48,-45,-20,-20,0,30,60,90,80]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,10,20,20,10,10,15,20,20,20,15,0]
      height: [0,10,20,20,10,10,15,20,20,20,15,0]
      texture: [18,4,63,4,13,18,4,3,63,4,17]
      propeller: true
    main2:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 43
        y: 50
        z: -10
      position:
        x: [0,0,0,23,0,0,0,0]
        y: [10,10,10,-10,10,10,10,10]
        z: [-3,-3,-3,7,-3,-3,-3,-3]
      width: [0,25,25,45,25,15,0]
      height: [3,3,3,3,3,3,0]
      texture: [4,4,4,2,18]
      angle: 90
      propeller: false
    main3:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 50
        y: 40
        z: -15
      position:
        x: [0,0,0,23,0,0,0,0]
        y: [10,10,10,-10,10,10,10,10]
        z: [-3,-3,-3,7,-3,-3,-3,-3]
      width: [0,25,25,45,25,15,0]
      height: [3,3,3,3,3,3,0]
      texture: [4,4,4,4,18]
      angle: 90
      propeller: false
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: 5
        z: 15
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-25,-5,20,10,15,15,15]
        z: [-7,0,0,0,0,0,0,0]
      width: [7,10,10,6,4,4,0]
      height: [10,10,10,6,4,4,0]
      texture: [9,9,3.9,16.9,13,16.9]
      propeller: false
    Body:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 70
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-9,-13,-10,0,3,-4]
        z: [0,0,0,0,0,0,0,0]
      width: [0,22,27,27,23,0]
      height: [0,22,27,27,23,0]
      propeller: false
      texture: [17,4,63,4,17]
      vertical: false
      angle: 0
    Body2:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 55
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-9,-13,-10,0,3,-4]
        z: [0,0,0,0,0,0,0,0]
      width: [0,22,27,27,23,0]
      height: [0,22,27,27,23,0]
      propeller: false
      texture: [17,4,63,4,17]
      vertical: false
    Body3:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 40
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-9,-13,-10,0,3,-4]
        z: [0,0,0,0,0,0,0,0]
      width: [0,22,27,27,23,0]
      height: [0,22,27,27,23,0]
      propeller: false
      texture: [17,4,63,4,17]
      vertical: false
    Body4:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 11
        y: 0
        z: 5
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-13,-13,-10,0,3,3]
        z: [0,0,0,0,0,0,0,0]
      width: [0,12,17,17,13,0]
      height: [0,12,17,17,13,0]
      propeller: false
      texture: [17,4,13,4,18]
      vertical: false
      angle: 90
    Body5:
      section_segments: 8
      offset:
        x: 10
        y: 35
        z: -5
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-23,-23,-10,0,23,23,23]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,17,17,17,13,10,0]
      height: [0,17,17,17,13,10,0]
      propeller: false
      texture: [17,18,13,4,18,17]
      vertical: false
      angle: 30
    Body6:
      section_segments: 8
      offset:
        x: 10
        y: 15
        z: -5
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-23,-23,-10,0,23,23,23]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,17,17,17,13,10,0]
      height: [0,17,17,17,13,10,0]
      propeller: false
      texture: [17,18,13,4,18,17]
      vertical: false
      angle: 30
    Body7:
      section_segments: 8
      offset:
        x: 10
        y: 55
        z: -5
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-23,-23,-10,0,23,23,23]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,17,17,17,13,10,0]
      height: [0,17,17,17,13,10,0]
      propeller: false
      texture: [17,18,13,4,18,17]
      vertical: false
      angle: 30
    tubes:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 10
        y: 50
        z: 11
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-2,-2,-2,0,0,0,0,0]
        z: [0,0,0,0,0,0,0,0]
      width: [0,20,20,20,20,20,0]
      height: [0,12,12,12,12,12,0]
      texture: [4,3,17,3,4]
      angle: 90
      propeller: false
    tubes2:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 5
        y: 15
        z: 13
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-2,-2,-2,0,0,0,0,0]
        z: [0,0,0,0,0,0,0,0]
      width: [0,20,20,20,20,20,0]
      height: [0,12,12,12,12,12,0]
      texture: [4,3,17,3,13]
      angle: 90
      propeller: false
    tubes3:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 1
        y: 15
        z: 13
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-2,-2,-2,0,0,0,0,0]
        z: [0,0,0,0,0,0,0,0]
      width: [0,20,20,20,20,20,0]
      height: [0,12,12,12,12,12,0]
      texture: [17,3,4,3,17]
      angle: 90
      propeller: false
    Main_rings:
      section_segments: 10
      offset:
        x: 0
        y: -11
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-21,-18,-16,-14,-14,4,4,6,6,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,12,14,14,14,14,14,12,12,0]
      height: [0,12,14,14,14,14,14,12,12,0]
      texture: [17.93,4,4,4,13,17,4,18]
    Main_rings2:
      section_segments: 10
      offset:
        x: 0
        y: -47.8
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-21,-18,-16,-14,-14,4,4,6,6,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,12,14,14,14,14,14,12,12,0]
      height: [0,12,14,14,14,14,14,12,12,0]
      texture: [17.93,4,4,4,18,17,4,18]
    Main_rings3:
      section_segments: 10
      offset:
        x: 0
        y: -85
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-21,-18,-16,-14,-14,4,4,6,6,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,10,12,12,12,12,12,10,10,0]
      height: [0,10,12,12,12,12,12,10,10,0]
      texture: [17.93,4,4,4,10,17,4,18]
    ring:
      section_segments: 10
      offset:
        x: 0
        y: -20
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-3,-3,0,0,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,11,11,11,11,10,10,10]
      height: [10,10,10,11,11,11,11,10,10,10]
      texture: 17
      angle: 0
    ring2:
      section_segments: 10
      offset:
        x: 0
        y: -25
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-3,-3,0,0,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,11,11,11,11,10,10,10]
      height: [10,10,10,11,11,11,11,10,10,10]
      texture: 17
      angle: 0
    ring3:
      section_segments: 10
      offset:
        x: 0
        y: -30
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-3,-3,0,0,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,11,11,11,11,10,10,10]
      height: [10,10,10,11,11,11,11,10,10,10]
      texture: 17
      angle: 0
    ring4:
      section_segments: 10
      offset:
        x: 0
        y: -35
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-3,-3,0,0,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,11,11,11,11,10,10,10]
      height: [10,10,10,11,11,11,11,10,10,10]
      texture: 17
      angle: 0
    ring5:
      section_segments: 10
      offset:
        x: 0
        y: -40
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-3,-3,0,0,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,11,11,11,11,10,10,10]
      height: [10,10,10,11,11,11,11,10,10,10]
      texture: 17
      angle: 0
    ring6:
      section_segments: 10
      offset:
        x: 0
        y: -45
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-3,-3,0,0,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,11,11,11,11,10,10,10]
      height: [10,10,10,11,11,11,11,10,10,10]
      texture: 17
      angle: 0
    ring7:
      section_segments: 10
      offset:
        x: 10
        y: 27
        z: 7
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-3,-3,0,0,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,11,11,11,11,10,10,10]
      height: [10,10,10,11,11,11,11,10,10,10]
      texture: 17
      angle: 0
    ring8:
      section_segments: 10
      offset:
        x: 10
        y: 24
        z: 7
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-3,-3,0,0,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,11,11,11,11,10,10,10]
      height: [10,10,10,11,11,11,11,10,10,10]
      texture: 17
      angle: 0
    ring9:
      section_segments: 10
      offset:
        x: 10
        y: 21
        z: 7
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-3,-3,0,0,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,11,11,11,11,10,10,10]
      height: [10,10,10,11,11,11,11,10,10,10]
      texture: 17
      angle: 0
    ring10:
      section_segments: 10
      offset:
        x: 0
        y: -60
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-3,-3,0,0,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,13,13,13,13,12,12,12]
      height: [12,12,12,13,13,13,13,12,12,12]
      texture: 17
      angle: 0
    ring11:
      section_segments: 10
      offset:
        x: 0
        y: -70
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-3,-3,0,0,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,13,13,13,13,12,12,12]
      height: [12,12,12,13,13,13,13,12,12,12]
      texture: 17
      angle: 0
    ring12:
      section_segments: 10
      offset:
        x: 0
        y: -80
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-3,-3,0,0,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,13,13,13,13,12,12,12]
      height: [12,12,12,13,13,13,13,12,12,12]
      texture: 17
      angle: 0
    ring13:
      section_segments: 10
      offset:
        x: 0
        y: -90
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-3,-3,0,0,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,13,13,13,13,12,12,12]
      height: [12,12,12,13,13,13,13,12,12,12]
      texture: 17
      angle: 0
    ring14:
      section_segments: 10
      offset:
        x: 0
        y: -100
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-3,-3,0,0,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,13,13,13,13,12,12,12]
      height: [12,12,12,13,13,13,13,12,12,12]
      texture: 17
      angle: 0
    ring15:
      section_segments: 10
      offset:
        x: 50
        y: 30
        z: -2
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-7,-7,0,0,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,13,13,13,13,12,12,12]
      height: [12,12,12,13,13,13,13,12,12,12]
      texture: 18
      angle: 0
    ring16:
      section_segments: 10
      offset:
        x: 50
        y: 40
        z: -2
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-7,-7,0,0,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,13,13,13,13,12,12,12]
      height: [12,12,12,13,13,13,13,12,12,12]
      texture: 17
      angle: 0
    ring17:
      section_segments: 10
      offset:
        x: 50
        y: 50
        z: -2
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-7,-7,0,0,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,13,13,13,13,12,12,12]
      height: [12,12,12,13,13,13,13,12,12,12]
      texture: 18
      angle: 0
    ring18:
      section_segments: 10
      offset:
        x: 50
        y: 60
        z: -2
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-7,-7,0,0,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,13,13,13,13,12,12,12]
      height: [12,12,12,13,13,13,13,12,12,12]
      texture: 17
      angle: 0
    ring19:
      section_segments: 10
      offset:
        x: 50
        y: 70
        z: -2
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-7,-7,0,0,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,13,13,13,13,12,12,12]
      height: [12,12,12,13,13,13,13,12,12,12]
      texture: 18
      angle: 0
    cannons:
      section_segments: 6
      offset:
        x: 10
        y: -90
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-25,-35,-30,-20,-20,0,20,30,30]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,5,6,6,5,5,5,5,0]
      height: [0,5,6,6,5,5,5,5,0]
      angle: 0
      laser:
        damage: [6,9]
        rate: 10
        type: 1
        speed: [200,220]
        number: 1
        angle: 0
        error: 0
        recoil: 10
      propeller: false
      texture: [17,3,4,17,13,4,4]
    cannons2:
      section_segments: 6
      offset:
        x: 0
        y: -90
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-25,-35,-30,-20,-20,0,20,30,30]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,5,6,6,5,5,5,5,0]
      height: [0,5,6,6,5,5,5,5,0]
      angle: 0
      laser:
        damage: [6,9]
        rate: 10
        type: 1
        speed: [200,220]
        number: 1
        angle: 0
        error: 0
        recoil: 10
      propeller: false
      texture: [17,3,4,17,13,4,4]
    cannons3:
      section_segments: 6
      offset:
        x: 0
        y: -90
        z: -10
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-25,-35,-30,-20,-20,0,20,30,30]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,5,6,6,5,5,5,5,0]
      height: [0,5,6,6,5,5,5,5,0]
      angle: 0
      laser:
        damage: [6,9]
        rate: 10
        type: 1
        speed: [200,220]
        number: 1
        angle: 0
        error: 0
        recoil: 10
      propeller: false
      texture: [17,3,4,17,13,4,4]
    propeller_fuel:
      section_segments: 12
      offset:
        x: 50
        y: 45
        z: -6
      position:
        x: [0,0,0,0,0,0,0]
        y: [-30,-30,-20,40,40,50,40]
        z: [0,0,0,0,0,0,0]
      width: [0,10,15,15,15,10,0]
      height: [0,10,15,15,15,10,0]
      angle: 0
      texture: [18,4,11,3,4,17]
      propeller: true
    propeller_fuel2:
      section_segments: 12
      offset:
        x: 45
        y: 45
        z: -8
      position:
        x: [0,0,0,0,0,0,0]
        y: [-25,-25,-20,0,40,45,45]
        z: [0,0,0,0,0,0,0]
      width: [0,10,15,15,15,10,0]
      height: [0,10,15,15,15,10,0]
      angle: 0
      texture: [18,4,13,12,4,18]
    propeller_fuel3:
      section_segments: 12
      offset:
        x: 55
        y: 45
        z: -8
      position:
        x: [0,0,0,0,0,0,0]
        y: [-25,-25,-20,0,40,45,45]
        z: [0,0,0,0,0,0,0]
      width: [0,10,15,15,15,10,0]
      height: [0,10,15,15,15,10,0]
      angle: 0
      texture: [18,4,13,12,4,18]
    propulsors:
      section_segments: 10
      offset:
        x: 24
        y: 10
        z: -8
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-30,-35,-20,0,60,75,70,70,70,70]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,7,13,13,13,7,7,7,0,0]
      height: [0,7,13,13,13,7,7,7,0,0]
      texture: [18,3,4,63,4,13,17]
      propeller: true
    propeller_dec:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 30
        y: 50
        z: 0
      position:
        x: [120,120,120,80,80,50,50,50,50,50]
        y: [-8,-8,-7,-4,-4,12,12,12,12,12]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,45,45,45,45,25,25,25,25,0]
      height: [0,10,10,10,10,10,10,10,10,0]
      texture: [18,17,3,3,18,3,17,18]
      angle: 90
    propeller_dec2:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 25
        y: 40
        z: 0
      position:
        x: [120,120,120,80,80,80,80,80,80,80]
        y: [-8,-8,-7,-4,-4,12,12,12,12,12]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,45,45,45,45,25,25,25,25,0]
      height: [0,8,8,8,8,8,8,8,8,0]
      texture: [18,17,4,3,4,3,17,18]
      angle: 90
    propeller_dec3:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 79.5
        y: 140
        z: -15
      position:
        x: [120,120,120,80,80,80,80,80,80,80]
        y: [-18,-18,-17,-4,-4,7,9,10,12,12]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,45,45,45,45,25,25,25,25,0]
      height: [0,8,8,8,8,8,8,8,8,0]
      texture: [18,17,63,3,4,3,17,18]
      angle: 90
    wing:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 28
        y: 68
        z: -5.5
      position:
        x: [90,90,90,80,80,0,0,0,0,0,0,0,30,0,0]
        y: [-8,-8,-7,-4,-4,14,17,18,18,18,30,30,30,50,50]
        z: [0,0,0,0,0,0,0,0,0,0,-10,-10,-10,-10,-10]
      width: [0,46,46,46,46,26,26,26,26,20,20,10,50,30,0]
      height: [0,12,14,14,14,14,14,14,12,7,7,7,7,7,0]
      texture: [18,17,13,3,4,3,17,18,3,18,4,13,3,18]
      angle: 90
