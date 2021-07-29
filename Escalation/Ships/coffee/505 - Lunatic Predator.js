return model =
  name: 'Lunatic Predator'
  level: 5
  model: 5
  size: 2
  next: [604,605]
  specs:
    shield:
      capacity: [325,475]
      reload: [8,12]
    generator:
      capacity: [120,190]
      reload: [50,70]
    ship:
      mass: 400
      speed: [50,75]
      rotation: [35,50]
      acceleration: [60,90]
  bodies:
    main:
      section_segments: 11
      offset:
        x: 0
        y: 10
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-180,-170,-150,-130,-100,-100,-110,-110,-70,-80,-70,-50,0,30,70,120,100]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,10,20,25,30,25,25,20,20,25,30,35,45,40,40,30,0]
      height: [0,10,20,25,30,25,25,20,20,25,30,30,30,40,40,30,0]
      texture: [4,63,18,4,3,17,17,13,17,4,18,10,18,4,63,17]
      propeller: true
    Effect_thing:
      section_segments: 8
      offset:
        x: 18
        y: -60
        z: 25
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [45,45,45,45,62,67,97,163,163]
        z: [-5,-5,0,0,0,0,8,8,8,8]
      width: [0,7,7,7,7,7,7,7,0]
      height: [0,7,7,7,7,7,7,7,0]
      texture: [4,8,18,3,17,18,63,1]
      propeller: false
    Effect_thing2:
      section_segments: 8
      offset:
        x: 6
        y: -60
        z: 30
      position:
        x: [0,0,0,0,0,0,0,0,10,10]
        y: [-60,-20,23,27,62,62,97,143,163]
        z: [-14,-7,-4,-4,0,-2,9,5,-5,0]
      width: [7,7,7,7,7,7,7,7,7]
      height: [7,7,7,7,7,7,7,7,7]
      texture: [63,4,18,4,17,4,8,4]
      propeller: false
    Effect_thing3:
      section_segments: 8
      offset:
        x: 40
        y: -60
        z: 0
      position:
        x: [-20,-10,-10,-5,0,0,0,-5,-10,-10]
        y: [-60,-20,23,27,62,62,97,143,163]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [7,7,7,7,7,7,7,7,7]
      height: [7,7,7,7,7,7,7,7,7]
      texture: [63,4,17,12,17,63,63,4]
      propeller: false
    Effect_thing4:
      section_segments: 8
      offset:
        x: 70
        y: -80
        z: 25.1
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,23,27,62,67,97,163,163]
        z: [-8,-8,-8,-8,-8,-8,0,0,0,0]
      width: [0,7,7,7,7,7,7,7,0]
      height: [0,7,7,7,7,7,7,7,0]
      texture: [4,12,17,12,17,12,8,3]
      propeller: false
    Effect_thing5:
      section_segments: 6
      offset:
        x: 100
        y: -60
        z: 0
      position:
        x: [-15,-15,-10,-10,-10,-10,-10,0,-5,0,0,0]
        y: [-60,-60,-20,23,27,62,62,97,143,163,163]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,2,7,7,7,7,7,7,7,7,0]
      height: [0,7,7,7,7,7,7,7,7,7,0]
      texture: [13,63,4,17,10,17,63,63,4,17]
      propeller: false
    reactor:
      section_segments: 12
      offset:
        x: 0
        y: 33
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-20,-20,0,3,3,3,0,0]
        z: [0,0,0,0,0,0,0,0]
      width: [0,30,30,28,27,23,12,0]
      height: [0,30,30,28,27,23,12,0]
      propeller: false
      texture: [4,4,12,17,4,3,17]
      vertical: true
      angle: 0
    reactor2:
      section_segments: 12
      offset:
        x: 70
        y: 32
        z: -40
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-20,-20,0,3,3,3,0,0]
        z: [0,0,0,0,0,0,0,0]
      width: [0,25,25,23,22,18,8,0]
      height: [0,25,25,23,22,18,8,0]
      propeller: false
      texture: [4,4,12,17,4,18,17]
      vertical: true
      angle: 0
    reactor3:
      section_segments: 6
      offset:
        x: 70
        y: 36
        z: -40
      position:
        x: [0,0,0,0,0,0,0]
        y: [-10,-10,0,3,-4]
        z: [0,0,0,0,0]
      width: [0,20,20,15,0]
      height: [0,20,20,15,0]
      propeller: false
      texture: [4,4,3.9,16.9]
      vertical: true
      angle: 0
    reactor4:
      section_segments: 6
      offset:
        x: 0
        y: 39
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-10,-10,0,3,-4]
        z: [0,0,0,0,0]
      width: [0,20,20,15,0]
      height: [0,20,20,15,0]
      propeller: false
      texture: [4,4,3.9,16.9]
      vertical: true
      angle: 0
    Proppeler_ring:
      section_segments: 8
      offset:
        x: 0
        y: 100
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-18,-18,0,4,4]
        z: [0,0,0,0,0]
      width: [30,50,50,50,30]
      height: [30,50,50,50,30]
      propeller: false
      texture: [4,4,12,1]
      vertical: false
      angle: 0
    Proppeler_ring2:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 120
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-18,-18,0,4,4]
        z: [0,0,0,0,0]
      width: [30,45,45,45,30]
      height: [30,45,45,45,30]
      propeller: false
      texture: [4,4,12,1]
      vertical: false
      angle: 0
    Proppeler_ring3:
      section_segments: 8
      offset:
        x: 70
        y: 80
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-18,-18,0,4,4]
        z: [0,0,0,0,0]
      width: [20,40,40,40,20]
      height: [20,40,40,40,20]
      propeller: false
      texture: [4,4,12,1]
      vertical: false
      angle: 0
    Proppeler_ring4:
      section_segments: [45,135,225,315]
      offset:
        x: 70
        y: 90
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-18,-18,0,4,4]
        z: [0,0,0,0,0]
      width: [20,35,35,35,20]
      height: [20,35,35,35,20]
      propeller: false
      texture: [4,4,12,1]
      vertical: false
      angle: 0
    Proppeler_ring5:
      section_segments: 8
      offset:
        x: 70
        y: -50
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-18,-18,0,4,4]
        z: [0,0,0,0,0]
      width: [10,20,20,20,10]
      height: [10,20,20,20,10]
      propeller: false
      texture: [4,4,12,1]
      vertical: false
      angle: 0
    Proppeler_ring6:
      section_segments: 8
      offset:
        x: 70
        y: -20
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-18,-18,0,4,4]
        z: [0,0,0,0,0]
      width: [10,20,20,20,10]
      height: [10,20,20,20,10]
      propeller: false
      texture: [4,4,12,1]
      vertical: false
      angle: 0
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: -120
        z: 19
      position:
        x: [0,0,0,0,0,0,0]
        y: [-30,-20,0,30,40]
        z: [-5,-5,-2,0,0]
      width: [0,10,14,14,0]
      height: [0,10,15,12,0]
      texture: [9,9,9]
      propeller: false
    cannons:
      section_segments: 12
      offset:
        x: 70
        y: 40
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-120,-120,-140,-140,-120,-120,-50,-45,-20,0,20,50,55,40]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,10,10,15,15,15,15,15,30,30,30,30,20,0]
      height: [0,20,20,25,25,15,15,15,30,30,30,30,20,0]
      angle: 0
      laser:
        damage: [60,88]
        rate: 1
        type: 1
        speed: [200,220]
        number: 1
        angle: 0
        error: 10
        recoil: 90
      propeller: true
      texture: [17,13,4,4,18,4,17,18,2,4,63,17,17]
  wings:
    main:
      doubleside: true
      offset:
        x: 30
        y: 25
        z: -7
      length: [40,35,0,20,0,0,0]
      width: [80,80,80,200,120,60,40,20]
      angle: [-20,20,-20,0,-5,0,10]
      position: [20,10,0,-30,0,10,10,10]
      texture: [4,18,13,63,18,4,4]
      bump:
        position: 55
        size: 20
    main2:
      doubleside: true
      offset:
        x: 90
        y: 25
        z: -7
      length: [20,20,0,20,0,0,0]
      width: [80,80,80,160,120,60,40,20]
      angle: [-20,20,-20,0,-5,0,10]
      position: [20,30,0,0,0,10,10,10]
      texture: [4,18,13,4,18,17,4]
      bump:
        position: 35
        size: 10
