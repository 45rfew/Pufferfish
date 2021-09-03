return model =
  name: 'Yeon'
  level: 6
  model: 17
  size: 1.4
  zoom: 0.9
  specs:
    shield:
      capacity: [280,360]
      reload: [9,9]
    generator:
      capacity: [90,155]
      reload: [46,48]
    ship:
      mass: 385
      speed: [110,175]
      rotation: [50,80]
      acceleration: [90,120]
  bodies:
    main:
      section_segments: [45,110,125,235,250,315]
      offset:
        x: 0
        y: 0
        z: 3
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-110,-95,-75,-50,-20,40,60,61,58,58]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,3,6,9,11,12,11,9,9,0]
      height: [0,3,6,9,11,15,13,10,10,0]
      texture: [4,4,3,3,3.9,3.9,3.9,4.6,63]
      propeller: 1
    Side:
      section_segments: [15,25,145,155,235,325]
      offset:
        x: 0
        y: 57
        z: 0
      position:
        x: [-18,-18,-18,-18,-18,-18,-18]
        y: [-69,-70,-70,-40,-30,-10,-10]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,8,10,11,11,11,0]
      height: [0,8,10,10,10,10,0]
      texture: [63,4,4,4,4,63]
      propeller: 0
      angle: 0
      vertical: 0
    Side2:
      section_segments: [345,35,125,205,215,335]
      offset:
        x: 0
        y: 57
        z: 0
      position:
        x: [18,18,18,18,18,18,18]
        y: [-69,-70,-70,-40,-30,-10,-10]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,8,10,11,11,11,0]
      height: [0,8,10,10,10,10,0]
      texture: [63,4,4,4,4,63]
      propeller: 0
      angle: 0
      vertical: 0
    Sidelaser:
      section_segments: 8
      offset:
        x: 17
        y: -34
        z: 1
      position:
        x: [0,0,0,0,0,0,0]
        y: [21,20,20,30,40]
        z: [0,0,0,0,0]
      width: [0,4,5,6,0]
      height: [0,4,5,6,0]
      texture: [17,63]
      laser:
        damage: [42,42]
        rate: 1
        type: 1
        speed: [140,190]
        number: 1
        angle: 0
        error: 1
        recoil: 50
    Sidelaser2:
      section_segments: 8
      offset:
        x: 17
        y: -34
        z: 1
      position:
        x: [0,0,0,0,0,0,0]
        y: [21,20,20,30,40]
        z: [0,0,0,0,0]
      width: [0,4,5,6,0]
      height: [0,4,5,6,0]
      texture: [17,63]
      laser:
        damage: [16,16]
        rate: 3
        type: 1
        speed: [120,170]
        number: 1
        angle: 0
        error: 1
        recoil: 80
    cockpit:
      section_segments: [45,110,125,235,250,315]
      offset:
        x: 0
        y: -20
        z: 10
      position:
        x: [0,0,0,0,0,0,0]
        y: [-10,0,18,50,50]
        z: [0,0,0,0,0]
      width: [2,5,6,6,0]
      height: [0,5,10,10,0]
      texture: [2,2,2,4]
    cF1:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 2.5
        y: -19
        z: 10
      position:
        x: [-0.5,1.5,2.5,2,0,0,0]
        y: [-10,-1,17,50,50]
        z: [-0.1,1,2,2,0]
      width: [0.7,0.7,0.7,0.7,0.7]
      height: [1,1,1,1,1]
      texture: [ 4 ]
    cF2:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 1
        y: -19
        z: 10
      position:
        x: [0,0,0,0,0,0,0]
        y: [-1,-1,17,50,50]
        z: [-0.1,3,7,6,0]
      width: [0.7,0.7,0.7,0.7,0.7]
      height: [1,1,1,1,1]
      texture: [ 4 ]
    cF3:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 3.2
        y: -20
        z: 10.2
      position:
        x: [0,0,0,0,0,0,0]
        y: [-1.2,-0.5,3.8,4]
        z: [-0.5,3,3,-0.5,-0.5]
      width: [0.7,0.7,0.7,0.7,0.7]
      height: [1,1,1,1,1]
      texture: [ 4 ]
      angle: -80
    cF4:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 3.2
        y: -2
        z: 14
      position:
        x: [0,0,0,0,0,0,0]
        y: [-2,-1.2,3.8,4]
        z: [-2,3,3,-0.5,-0.5]
      width: [0.7,0.7,0.7,0.7,0.7]
      height: [1,1,1,1,1]
      texture: [ 4 ]
      angle: -80
    cF5:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 2
        y: -28.4
        z: 7.1
      position:
        x: [0,0,0,0,0,0,0]
        y: [-0.2,-0.3,3,3]
        z: [-0.5,3,3,-0.5,-0.5]
      width: [0.9,0.9,0.9,0.9,0.9]
      height: [1,1,1,1,1]
      texture: [ 4 ]
      angle: -90
    cF7:
      section_segments: 6
      offset:
        x: 0
        y: 0
        z: 14.5
      position:
        x: [0,0,0,0,0,0,0]
        y: [10,10,45,45,43,43]
        z: [0,0,0,0,0,0,0]
      width: [0,9,9,7,7,0]
      height: [0,3,3,2,2,0]
      texture: [63,2.8,2.8,4.8,16.8]
    flame1:
      section_segments: 1
      offset:
        x: 17
        y: 30
        z: 5
      position:
        x: [0,0,0,0,0,0,0]
        y: [20,30]
        z: [0,0,0,0,0]
      width: [6,7]
      height: [4,5]
      texture: [63,63,63,16.8]
      propeller: 1
    flame2:
      section_segments: 1
      offset:
        x: 17
        y: 30
        z: -4
      position:
        x: [0,0,0,0,0,0,0]
        y: [20,30]
        z: [0,0,0,0,0]
      width: [6,7]
      height: [4,5]
      texture: [63,63,63,16.8]
      propeller: 1
    W1:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: -25
        y: 22
        z: 7
      position:
        x: [27,24,16,8,0,0,0,0]
        y: [-64,-60,-40,-20,0,0,10,10]
        z: [5,15,10,5,0,0,0,0]
      width: [8,10,15,20,25,15,15,0]
      height: [0,1,2,3,4,2,2,0]
      texture: [2,2,3,2,3,4]
      angle: 90
    W1a:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: -25
        y: 20
        z: 7
      position:
        x: [27,24,16,8,0,0,0,0]
        y: [-64,-60,-40,-20,0,0,10,10]
        z: [5,15,10,5,0,0,0,0]
      width: [8,10,15,20,25,15,15,0]
      height: [0,0.5,1,2,3,1,1,0]
      texture: [ 4 ]
      angle: 90
    W1b:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: -25
        y: 16
        z: 7.1
      position:
        x: [22,22,18.5,14,11,0,0,0]
        y: [-55,-55,-40,-20,-5,-5,10,10]
        z: [13.9,13.9,10,5,1,1,0,0]
      width: [0,5,5,5,5,5,15,0]
      height: [0,1,2,3,4,2,2,0]
      texture: [ 4 ]
      angle: 90
    W2:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: -25
        y: 22
        z: -7
      position:
        x: [27,24,16,8,0,0,0,0]
        y: [-64,-60,-40,-20,0,0,5,5]
        z: [-5,-15,-10,-5,0,0,0,0]
      width: [8,10,15,20,25,15,15,0]
      height: [0,1,2,3,4,2,2,0]
      texture: [2,3,4,3,3,4]
      angle: 90
    W2a:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: -25
        y: 20
        z: -7
      position:
        x: [27,24,16,8,0,0,0,0]
        y: [-64,-60,-40,-20,0,0,5,5]
        z: [-5,-15,-10,-5,0,0,0,0]
      width: [8,10,15,20,25,15,15,0]
      height: [0,0.5,1,2,3,1,1,0]
      texture: [ 4 ]
      angle: 90
    W2b:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: -25
        y: 16
        z: -6.6
      position:
        x: [22,22,18.5,14,11,11,11,11]
        y: [-55,-55,-40,-20,-5,-5,10,10]
        z: [-13.9,-13.9,-10,-5,-1,-1,0,0]
      width: [0,5,5,5,5,0,0,0]
      height: [0,1,2,3,4,0,0,0]
      texture: [ 4 ]
      angle: 90
    W3:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: -9
        y: 60
        z: -7
      position:
        x: [0,-2,6,6,0,0,0]
        y: [-40,-40,-18,-15,0,10,10]
        z: [-12,-12,0,-4,1,1,0]
      width: [0,10,15,15,15,15,0]
      height: [0,2,2,2,2,2,0]
      texture: [3,3,4,4,3,4]
      angle: 90
    W3b:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: -9
        y: 65
        z: -6.9
      position:
        x: [0,-2,3,3,0,0,0]
        y: [-37,-37,-18,-15,0,10,10]
        z: [-10,-10,0,-4,1,1,0]
      width: [0,3,5,5,5,5,0]
      height: [0,2,2,2,2,2,0]
      texture: [ 4 ]
      angle: 90
    W4:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: -10
        y: 37
        z: 2
      position:
        x: [-10,-10,-5,0,0,0,0]
        y: [-20,-20,-10,0,0,10,10]
        z: [30,30,20,10,10,0,0]
      width: [0,5,10,15,10,10,0]
      height: [0,2,2,2,2,2,0]
      texture: [1,1,1,4,3,4]
      angle: 90
    W4b:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: -10
        y: 37
        z: 2
      position:
        x: [-12.5,-12.5,-10.5,-8,0,0,0]
        y: [-17,-17,-10,0,0,10,10]
        z: [27,27,20,10,10,0,0]
      width: [0,2,3.5,5,5,5,0]
      height: [0,3,3,3,3,3,0]
      texture: [4,4,4,2,2]
      angle: 90
    D1:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 2
        y: -74
        z: 4
      position:
        x: [0,0,0,0,0,0,0]
        y: [-2,-1,23,50,50]
        z: [2,2.55,5,6.1,0]
      width: [1.5,1.5,1.5,1.5,1.5]
      height: [1,1,1,1,1]
      texture: [ 4 ]
    D2:
      section_segments: [45,110,125,235,250,315]
      offset:
        x: 0
        y: -25
        z: 4
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-2,-2,1,1,-2]
        z: [0,0,0,0,0,0,0,0,0]
      width: [6,11,11,11,6]
      height: [6,8,8,8,6]
      texture: [ 2 ]
      angle: 0
    D3:
      section_segments: [45,110,125,235,250,315]
      offset:
        x: 0
        y: -30
        z: 4
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-2,-2,1,1,-2]
        z: [0,0,0,0,0,0,0,0,0]
      width: [6,11,11,11,6]
      height: [6,7,7,7,6]
      texture: [ 2 ]
      angle: 0
    D4:
      section_segments: [45,110,125,235,250,315]
      offset:
        x: 0
        y: -35
        z: 4
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-2,-2,1,1,-2]
        z: [0,0,0,0,0,0,0,0,0]
      width: [6,11,11,10,6]
      height: [3,6,6,6,3]
      texture: [ 2 ]
      angle: 0
    D5:
      section_segments: [45,110,125,235,250,315]
      offset:
        x: 0
        y: -40
        z: 4
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-2,-2,1,1,-2]
        z: [0,0,0,0,0,0,0,0,0]
      width: [6,11,11,10,6]
      height: [3,5,5,5,3]
      texture: [ 2 ]
      angle: 0
    D6:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: -0.1
        y: 56
        z: -1
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,0,9,8]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,5,5,0]
      height: [0,1,1,0]
      texture: [ 4 ]
      angle: 90
    D7:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: -0.1
        y: 56
        z: 2
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,0,9,9]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,5,5,0]
      height: [0,1,1,0]
      texture: [ 4 ]
      angle: 90
    D8:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: -0.1
        y: 56
        z: 5
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,0,8,8]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,5,5,0]
      height: [0,1,1,0]
      texture: [ 4 ]
      angle: 90
    D9:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: -0.1
        y: 56
        z: 8
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,0,8,8]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,5,5,0]
      height: [0,1,1,0]
      texture: [ 4 ]
      angle: 90
    D10:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 13
        y: 30
        z: 7.2
      position:
        x: [3.5,3.5,0,0,0,0,0]
        y: [0,0,8,8]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,14,14,0]
      height: [0,5,5,0]
      texture: [ 4 ]
      angle: 90
    D11:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 13
        y: 20
        z: 7.5
      position:
        x: [3.5,3.5,0,0,0,0,0]
        y: [0,0,8,8]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,1,1,0]
      height: [0,5,5,0]
      texture: [ 3 ]
      angle: 90
    D12:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 13
        y: 25
        z: 7.5
      position:
        x: [3.5,3.5,0,0,0,0,0]
        y: [0,0,8,8]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,1,1,0]
      height: [0,5,5,0]
      texture: [ 3 ]
      angle: 90
    D13:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 13
        y: 30
        z: 7.3
      position:
        x: [3.5,3.5,0,0,0,0,0]
        y: [0,0,8,8]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,1,1,0]
      height: [0,5,5,0]
      texture: [ 3 ]
      angle: 90
    D14:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 13
        y: 35
        z: 7.3
      position:
        x: [3.5,3.5,0,0,0,0,0]
        y: [0,0,8,8]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,1,1,0]
      height: [0,5,5,0]
      texture: [ 3 ]
      angle: 90
    D15:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 13
        y: 40
        z: 7.3
      position:
        x: [3.5,3.5,0,0,0,0,0]
        y: [0,0,8,8]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,1.5,1.5,0]
      height: [0,5,5,0]
      texture: [ 3 ]
      angle: 90
    D16:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 13
        y: 27
        z: 7.8
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,0,1,1]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,14,14,0]
      height: [0,5,5,0]
      texture: [ 3 ]
      angle: 90
    D17:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 20
        y: 30
        z: 7.8
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,0,1,1]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,14,14,0]
      height: [0,5,5,0]
      texture: [ 3 ]
      angle: 90
    core:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: 32.9
        z: -50
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [19.5,19.5,19,19,19.5,19.5,22]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,3,4,5,5,6,6]
      height: [0,10,11,12,12,13,13]
      texture: [17,5,4,4,3]
      vertical: 1
      angle: 180
    C1:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 1
        y: 56
        z: 7
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-2,-2,1,1,-2]
        z: [0,0,0,0,0,0,0,0,0]
      width: [6,8,8,6,6]
      height: [6,8,8,6,6]
      texture: [3,17,3]
      angle: 0
    C2:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 1.3
        y: 52
        z: 7.1
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-2,-2,1,1,-2]
        z: [0,0,0,0,0,0,0,0,0]
      width: [6,8,8,6,6]
      height: [6,8,8,6,6]
      texture: [3,17,3]
      angle: 0
    C3:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 1.4
        y: 48
        z: 7.2
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-2,-2,1,1,-2]
        z: [0,0,0,0,0,0,0,0,0]
      width: [6,8,8,6,6]
      height: [6,8,8,6,6]
      texture: [3,17,3]
      angle: 0
  wings:
    E1:
      doubleside: true
      offset:
        x: 12
        y: 3
        z: 9
      length: [11,0,20,0,16,0,15,0]
      width: [30,30,30,30,30,30,30,30,30,30]
      angle: [6,6,-85,-85,-195,-195,80,80]
      position: [-5,0,0,-10,-10,-15,-15,-5,-5,-5]
      texture: [ 4 ]
      bump:
        position: -50
        size: 3
    E1i:
      doubleside: true
      offset:
        x: 12
        y: 4
        z: 9
      length: [10,0,19,0,15,0,14,0]
      width: [30,30,30,30,30,30,30,30,30,30]
      angle: [6,6,-85,-85,-195,-195,80,80]
      position: [-5,0,0,-10,-10,-15,-15,-5,-5,-5]
      texture: [ 5 ]
      bump:
        position: -50
        size: 2
    E2:
      doubleside: true
      offset:
        x: 12
        y: 15
        z: 9
      length: [11,0,20,0,16,0,15,0]
      width: [10,10,10,10,10,10,10,10,10,10]
      angle: [6,6,-85,-85,-195,-195,80,80]
      position: [-5,0,0,-10,-10,-15,-15,-5,-5,-5]
      texture: [ 3 ]
      bump:
        position: -50
        size: 7
    E3:
      doubleside: true
      offset:
        x: 12
        y: 29
        z: 9
      length: [11,0,20,0,16,0,15,0]
      width: [30,30,30,30,30,30,30,30,30,30]
      angle: [6,6,-85,-85,-195,-195,80,80]
      position: [-5,0,0,-10,-10,-15,-15,-5,-5,-5]
      texture: [ 2 ]
      bump:
        position: 50
        size: 2
    E4t:
      doubleside: true
      offset:
        x: 12
        y: 35
        z: 8.4
      length: [11,0,10,0,13.5,0,6,0]
      width: [30,30,30,30,30,30,30,30,30,30]
      angle: [6,6,-85,-85,-195,-195,80,80]
      position: [5,0,0,10,10,15,15,5,5,0]
      texture: [ 3 ]
      bump:
        position: 50
        size: 2
    E4i:
      doubleside: true
      offset:
        x: 12.5
        y: 34
        z: 8.4
      length: [10,0,9,0,12,0,5,0]
      width: [30,30,30,30,30,30,30,30,30,30]
      angle: [6,6,-85,-85,-195,-195,80,80]
      position: [5,0,0,10,10,15,15,5,5,0]
      texture: [ 17 ]
      bump:
        position: 50
        size: 1
    E4b:
      doubleside: true
      offset:
        x: 11.5
        y: 40
        z: 2.5
      length: [13,0,9,0,16,0,9,0]
      width: [40,40,40,40,40,40,40,40,40,40]
      angle: [-15,-10,-85,-85,-195,-195,80,80]
      position: [5,0,0,10,10,15,15,5,5,0]
      texture: [ 3 ]
      bump:
        position: 50
        size: 2
    E4bi:
      doubleside: true
      offset:
        x: 12
        y: 39
        z: 2.5
      length: [12,0,8,0,15,0,8,0]
      width: [40,40,40,40,40,40,40,40,40,40]
      angle: [-15,-10,-85,-85,-195,-195,80,80]
      position: [5,0,0,10,10,15,15,5,5,0]
      texture: [ 17 ]
      bump:
        position: 50
        size: 0
    Top:
      doubleside: true
      offset:
        x: 0
        y: 25
        z: 18
      length: [8,0,15,0]
      width: [30,30,30,30,0]
      angle: [-10,-10,-80,-80]
      position: [0,0,0,0,0]
      texture: [8.14,3]
      bump:
        position: -50
        size: 3
    Top2:
      doubleside: true
      offset:
        x: 0
        y: 30
        z: 18
      length: [8,0,15,0]
      width: [30,30,30,30,0]
      angle: [-10,-10,-80,-80]
      position: [0,0,0,0,0]
      texture: [8.14,3]
      bump:
        position: 50
        size: 1
