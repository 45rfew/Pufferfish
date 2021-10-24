return model =
  name: 'Lunatic Atom'
  level: 2
  model: 2
  size: 1.45
  specs:
    shield:
      capacity: [115,145]
      reload: [4,6]
    generator:
      capacity: [80,130]
      reload: [25,40]
    ship:
      mass: 120
      speed: [120,130]
      rotation: [100,125]
      acceleration: [90,120]
  bodies:
    main:
      section_segments: 12
      offset:
        x: 0
        y: -30
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [10,10,10,20,30,70,100,100]
        z: [0,0,0,0,0,0,0,0]
      width: [0,16,17,20,20,20,17,0]
      height: [0,16,17,20,20,20,18,0]
      texture: [4,17,4,13,18,4,18]
    main2:
      section_segments: 6
      offset:
        x: 18
        y: -35
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [10,10,10,20,50,80,100,100,100]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,9,10,10,10,10,10,9,0]
      height: [0,4,5,5,5,5,5,4,0]
      texture: [3.9,16.9,3.9,8,3.9,12.9,16.9,3.9]
      propeller: false
    main3:
      section_segments: 8
      offset:
        x: 0
        y: -65
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [5,8,10,20,50,80,100,100,100]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,9,10,13,15,10,10,9,0]
      height: [0,4,5,7,12,15,15,14,0]
      texture: [4,63,4,8,3.9,12.9,16.9,3.9]
      propeller: false
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: -30
        z: 3
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-20,-20,-20,0,10,10]
        z: [1,1,1,0,0,0]
      width: [0,7,7,11,13,0]
      height: [0,2,2,13,13,0]
      texture: [4,17,9,4]
      propeller: false
    cannons:
      section_segments: 6
      offset:
        x: 18
        y: 13
        z: 5
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-50,-60,-60,-40,-45,-20,0,20,50,55,55,55]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,2,3,3,4,5,5,5,5,4,3,0]
      height: [0,2,3,3,3,5,5,5,5,4,3,0]
      angle: 0
      laser:
        damage: [7,9]
        rate: 2.5
        type: 1
        speed: [140,160]
        number: 1
        angle: 0
        error: 0
      propeller: false
      texture: [13,17,13,4,4,63,63,4,63,16.9,15.1]
    cannons2:
      section_segments: 6
      offset:
        x: 45
        y: 10
        z: -10
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-50,-60,-60,-45,-45,-20,0,20,50,55,55,55]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,2,3,3,4,5,8,8,8,7,5,0]
      height: [0,2,3,3,3,5,8,8,8,7,5,0]
      angle: 0
      laser:
        damage: [2,3]
        rate: 6
        type: 1
        speed: [100,120]
        number: 1
        angle: 0
        error: 0
      propeller: false
      texture: [12.9,16.9,12.9,17,4,18,63,3.9,18,16.9,17.9]
    ring:
      section_segments: 12
      offset:
        x: 0
        y: 55
        z: 8.5
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
        x: 0
        y: 35
        z: 8.5
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
        x: 17
        y: 55
        z: 4
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-7,-7,-7,-6,-4,-4,4,4,6,7,7,7]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,6,7,8,9,9,9,9,8,7,6,0]
      height: [0,6,7,8,9,9,9,9,8,7,6,0]
      texture: [18,17,15.1,4,4,10,4,4,15.1,17,18]
      propeller: false
    ring4:
      section_segments: 6
      offset:
        x: 17
        y: -10
        z: 4
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-7,-7,-7,-6,-4,-4,4,4,6,7,7,7]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,6,7,8,9,9,9,9,8,7,6,0]
      height: [0,6,7,8,9,9,9,9,8,7,6,0]
      texture: [18,17,15.1,4,4,10,4,4,15.1,17,18]
      propeller: false
    propeller:
      section_segments: 6
      offset:
        x: 8
        y: 65
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-7,-7,-7,-6,-4,-4,4,4,6,7,7,5]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,6,7,8,9,9,9,9,8,7,6,0]
      height: [0,6,7,8,9,9,9,9,8,7,6,0]
      texture: [18,17,15.1,4,4,10,4,4,1,13,16.9]
      propeller: true
    propeller2:
      section_segments: 6
      offset:
        x: 0
        y: 65
        z: 9
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-7,-7,-7,-6,-4,-4,4,4,6,7,7,5]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,6,7,8,9,9,9,9,8,7,6,0]
      height: [0,6,7,8,9,9,9,9,8,7,6,0]
      texture: [18,17,15.1,4,4,10,4,4,1,13,16.9]
      propeller: true
    propeller3:
      section_segments: 6
      offset:
        x: 0
        y: 65
        z: -9
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-7,-7,-7,-6,-4,-4,4,4,6,7,7,5]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,6,7,8,9,9,9,9,8,7,6,0]
      height: [0,6,7,8,9,9,9,9,8,7,6,0]
      texture: [18,17,15.1,4,4,10,4,4,1,13,16.9]
      propeller: true
  wings:
    main:
      offset:
        x: 0
        y: 40
        z: 5
      length: [40,20,20]
      width: [30,30,45,30]
      texture: [4,63,18]
      angle: [-20,-23,-33]
      doubleside: true
      position: [10,-20,-4,-34]
      bump:
        position: -10
        size: 8
    main2:
      offset:
        x: 0
        y: 46
        z: 5
      length: [40,20,20]
      width: [30,30,45,30]
      texture: [18,4,13]
      angle: [-20,-23,-33]
      doubleside: true
      position: [10,-20,-4,-34]
      bump:
        position: -10
        size: 3
    main3:
      offset:
        x: 0
        y: 40
        z: 5
      length: [20,20,10]
      width: [30,30,45,30]
      texture: [4,13,4]
      angle: [-20,-23,-33]
      doubleside: true
      position: [10,0,-4,-34]
      bump:
        position: -10
        size: 3
