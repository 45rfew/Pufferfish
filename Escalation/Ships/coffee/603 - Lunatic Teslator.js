return model =
  name: 'Lunatic Teslator'
  level: 6
  model: 3
  size: 1.7
  zoom: 1
  specs:
    shield:
      capacity: [325,385]
      reload: [8,12]
    generator:
      capacity: [280,360]
      reload: [70,90]
    ship:
      mass: 370
      speed: [90,105]
      rotation: [60,75]
      acceleration: [90,110]
  bodies:
    main:
      section_segments: 8
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-150,-140,-130,-110,-100,-100,-80,-80,0,30,70,130,110]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,10,15,18,18,13,13,20,25,30,30,20,0]
      height: [0,10,15,18,18,13,13,20,25,30,30,20,0]
      texture: [4,63,63,8,18,13,18,63,10,18,12,17]
      propeller: true
    cannon:
      section_segments: 12
      offset:
        x: 0
        y: 60
        z: 46
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-170,-160,-140,-120,-120,-90,-90,-70,-25,-20,0,20,50,65,55]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [1,2,3,4,4,8,20,25,25,25,30,30,30,20,0]
      height: [1,2,3,4,4,8,20,25,25,25,30,30,30,20,0]
      angle: 0
      laser:
        damage: [2,3]
        rate: 1
        type: 2
        speed: [220,300]
        recoil: 10
        number: 50
        error: 0
        angle: 0.1
      propeller: true
      texture: [17,17,18,17,16,18,4,12,17,18,16,63,4,17]
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: -120
        z: 10
      position:
        x: [0,0,0,0,0,0,0]
        y: [-20,-15,0,10,20]
        z: [-5,-2,0,0,0]
      width: [5,8,10,10,0]
      height: [5,8,10,10,0]
      texture: [4,9]
      propeller: false
    side:
      section_segments: 12
      offset:
        x: 60
        y: 20
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-120,-100,-90,-90,-80,-80,-55,-25,20,50,70,100,80]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,8,10,5,5,10,15,15,15,15,15,13,0]
      height: [0,8,10,5,5,10,15,15,15,15,15,13,0]
      angle: 0
      propeller: true
      texture: [63,4,18,13,18,4,13,10,13,18,63,17]
    Tubes:
      section_segments: 8
      offset:
        x: 18
        y: -100
        z: 8
      position:
        x: [-8,-8,-1,0,0,0,4,6,8,3]
        y: [0,0,23,47,62,62,97,102,160,170]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,4,4,4,4,4,4,4,4,3]
      height: [0,4,4,4,4,4,4,4,4,3]
      texture: [18,48,18,16,16,4,18,13,18]
    Tubes2:
      section_segments: 8
      offset:
        x: 18
        y: -100
        z: -8
      position:
        x: [-8,-8,-1,0,0,0,4,6,8,3]
        y: [0,0,23,47,62,62,97,102,160,170]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,4,4,4,4,4,4,4,4,3]
      height: [0,4,4,4,4,4,4,4,4,3]
      texture: [18,48,18,16,16,4,18,13,18]
    Tubes3:
      section_segments: 8
      offset:
        x: 70
        y: -70
        z: 0
      position:
        x: [-5,-5,4,4,4,4,4,6,5,1]
        y: [0,0,23,47,62,62,97,102,160,170]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,4,4,4,4,4,4,4,4,3]
      height: [0,4,4,4,4,4,4,4,4,3]
      texture: [18,48,18,16,16,4,18,13,18]
    Tubes4:
      section_segments: 8
      offset:
        x: 50
        y: -70
        z: 0
      position:
        x: [5,5,-4,-4,-4,-4,-4,-6,-5,-1]
        y: [0,0,23,47,62,62,97,102,160,170]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,4,4,4,4,4,4,4,4,3]
      height: [0,4,4,4,4,4,4,4,4,3]
      texture: [18,48,18,16,16,4,18,13,18]
    Tubes5:
      section_segments: 8
      offset:
        x: 1
        y: 50
        z: 7
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,23,47,62,0,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,4,4,4,4,4,4,4,4,3]
      height: [0,4,4,4,4,4,4,4,4,3]
      texture: [ 4 ]
      angle: 70
    Tubes6:
      section_segments: 8
      offset:
        x: 5
        y: 50
        z: 7
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,23,47,62,0,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,4,4,4,4,4,4,4,4,3]
      height: [0,4,4,4,4,4,4,4,4,3]
      texture: [ 4 ]
      angle: 130
    Tubes7:
      section_segments: 8
      offset:
        x: 0
        y: 48
        z: 74
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-58,-58,-33,-10,2,30,40,50,62,62]
        z: [-7,-7,-3,-3,0,0,0,0,0,0,0]
      width: [0,4,4,4,4,4,4,4,4,0]
      height: [0,4,4,4,4,4,4,4,4,0]
      texture: [18,16,18,12,17,18,13,13,18]
      angle: 0
    Tubes9:
      section_segments: 8
      offset:
        x: 30
        y: 48
        z: 50
      position:
        x: [-7,-7,-3,-3,0,0,0,0,0,0]
        y: [-58,-58,-33,-10,2,30,40,50,62,62]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,4,4,4,4,4,4,4,4,0]
      height: [0,4,4,4,4,4,4,4,4,0]
      texture: [18,16,18,12,17,18,13,13,18]
      angle: 0
    ring:
      section_segments: 9
      offset:
        x: 0
        y: -85
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-2,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 17 ]
      propeller: false
    ring2:
      section_segments: 9
      offset:
        x: 0
        y: -91
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-2,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 17 ]
      propeller: false
    ring3:
      section_segments: 9
      offset:
        x: 0
        y: -97
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-2,-2,-2,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [ 17 ]
      propeller: false
    ring4:
      section_segments: 15
      offset:
        x: 0
        y: -45
        z: 45
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-2,-2,-2,-2,-2,2,2,2,2,2]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,16,16,18,18,18,18,16,16,10]
      height: [10,16,16,18,18,18,18,16,16,10]
      texture: [ 16.9 ]
      propeller: false
    ring5:
      section_segments: 15
      offset:
        x: 0
        y: -55
        z: 45
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-2,-2,-2,-2,-2,2,2,2,2,2]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [8,14,14,16,16,16,16,14,14,8]
      height: [8,14,14,16,16,16,16,14,14,8]
      texture: [ 16.9 ]
      propeller: false
    ring6:
      section_segments: 15
      offset:
        x: 0
        y: -65
        z: 45
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-2,-2,-2,-2,-2,2,2,2,2,2]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [6,12,12,14,14,14,14,12,12,6]
      height: [6,12,12,14,14,14,14,12,12,6]
      texture: [ 16.9 ]
      propeller: false
    ring7:
      section_segments: 15
      offset:
        x: 0
        y: -75
        z: 45
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-2,-2,-2,-2,-2,2,2,2,2,2]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [4,10,10,12,12,12,12,10,10,4]
      height: [4,10,10,12,12,12,12,10,10,4]
      texture: [ 16.9 ]
      propeller: false
    ring8:
      section_segments: 9
      offset:
        x: 0
        y: -9
        z: 46
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-2,-2,-2,-2,-2,2,2,2,2,2]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [14,27,27,29,29,29,29,27,27,14]
      height: [14,27,27,29,29,29,29,27,27,14]
      texture: [ 4 ]
      propeller: false
    ring9:
      section_segments: 9
      offset:
        x: 0
        y: 50
        z: 46
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-2,-2,-2,-2,-2,2,2,2,2,2]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [14,28,28,33,33,33,33,28,28,14]
      height: [14,28,28,33,33,33,33,28,28,14]
      texture: [ 4 ]
      propeller: false
    ring10:
      section_segments: 9
      offset:
        x: 0
        y: 108.5
        z: 46
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-2,-2,-2,-2,-2,2,2,2,2,2]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [14,30,30,35,35,35,35,30,30,14]
      height: [14,30,30,35,35,35,35,30,30,14]
      texture: [ 4 ]
      propeller: false
    Side_rings:
      section_segments: 9
      offset:
        x: 60
        y: -63
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,0,0,0,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [7,7,7,8,8,8,8,7,7,7]
      height: [7,7,7,8,8,8,8,7,7,7]
      texture: [ 17 ]
      propeller: false
    Side_rings2:
      section_segments: 9
      offset:
        x: 60
        y: -66
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,0,0,0,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [7,7,7,8,8,8,8,7,7,7]
      height: [7,7,7,8,8,8,8,7,7,7]
      texture: [ 17 ]
      propeller: false
    Side_rings3:
      section_segments: 9
      offset:
        x: 60
        y: -69
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,0,0,0,2,2,2,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [7,7,7,8,8,8,8,7,7,7]
      height: [7,7,7,8,8,8,8,7,7,7]
      texture: [ 17 ]
      propeller: false
  wings: main:
    offset:
      x: 0
      y: 40
      z: 0
    length: [55,10]
    width: [70,70,60]
    texture: [18,0]
    angle: [0,0]
    position: [20,-10,0]
    bump:
      position: -10
      size: 15
