return model =
  name: 'Solarium Interceptor'
  level: 4
  model: 8
  size: 1.3
  specs:
    shield:
      capacity: [205,235]
      reload: [6,8]
    generator:
      capacity: [90,110]
      reload: [85,120]
    ship:
      mass: 235
      speed: [110,135]
      rotation: [30,55]
      acceleration: [90,110]
  bodies:
    side:
      section_segments: 6
      offset:
        x: 20
        y: 35
        z: 10
      position:
        x: [-13,-4,-4,0,0,0,0]
        y: [-160,-125,-90,-50,4,40,40]
        z: [2,0,0,0,0,0,0]
      width: [0,16,16,16,16,16,0]
      height: [0,10,10,10,10,10,0]
      angle: 0
      texture: [63,3.9,3,10,11,3.9]
    side2:
      section_segments: 4
      offset:
        x: 20
        y: 35
        z: 14.8
      position:
        x: [-20,-4,-4,0,0,0,0]
        y: [-164.9,-125,-90,-50,4,40,40]
        z: [0,0,0,0,0,0,0]
      width: [4,11,11,11,11,11,0]
      height: [0,10,10,10,10,10,0]
      angle: 0
      texture: [4,17.99,13,10,3.9,3.9]
    side3:
      section_segments: 6
      offset:
        x: 20
        y: 35
        z: 0
      position:
        x: [-13,-4,-4,0,0,0,0]
        y: [-160,-125,-90,-50,4,40,40]
        z: [12,0,0,0,0,0,0]
      width: [0,16,16,16,16,16,0]
      height: [0,10,10,10,10,10,0]
      angle: 0
      texture: [63,3.9,3,10,11,3.9]
    middle:
      section_segments: [-140,-140,-90,-40,-40,40,40,40,90,140]
      offset:
        x: 0
        y: 35
        z: 14.8
      position:
        x: [0,0,0,0,0,0,0]
        y: [-164.9,-125,-90,-50,4,40,40]
        z: [0,0,0,0,0,0,0]
      width: [0,27,27,31,31,31,0]
      height: [0,11,11,13,13,13,0]
      angle: 0
      texture: [18,18.325,4,9.94,3.9,3.9]
    middle2:
      section_segments: [-140,-140,-90,-40,-40,40,40,40,90,140]
      offset:
        x: 0
        y: 35
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-164.9,-125,-90,-50,4,40,40]
        z: [15,0,0,0,0,0,0]
      width: [0,27,27,31,31,31,0]
      height: [0,11,11,13,13,13,0]
      angle: 0
      texture: [17.9,18.325,4,9.94,3.9,3.9]
    cannons:
      section_segments: 6
      offset:
        x: 31
        y: -15
        z: 3
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-90,-90,-90,-80,-45,-20,0,20,50,55,55,55]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,2,3,3,4,5,5,5,5,4,3,0]
      height: [0,2,3,3,10,10,10,10,10,10,3,0]
      angle: 0
      laser:
        damage: [5,7]
        rate: 10
        type: 1
        speed: [180,200]
        number: 1
        angle: 0
        error: 5
      propeller: false
      texture: [13,17,13,4,4,63,63,4,11,16.9,15.1]
    cannons2:
      section_segments: 6
      offset:
        x: 18
        y: -25
        z: 18
      position:
        x: [0,0,0,0,0,-2,-2,0,0,0,0,0]
        y: [-90,-90,-90,-80,-45,-20,0,20,50,55,55,55]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,2,3,3,4,5,5,5,5,4,3,0]
      height: [0,2,3,3,3,5,5,5,5,4,3,0]
      angle: 0
      laser:
        damage: [7,9]
        rate: 6
        type: 1
        speed: [180,200]
        number: 1
        angle: 0
        error: 5
      propeller: false
      texture: [13,17,13,4,4,63,63,4,11,16.9,15.1]
    cannon_connector:
      section_segments: [-140,-140,-90,-40,-40,40,40,40,90,140]
      offset:
        x: 50
        y: 75
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-25,-25,-20,-10,4,10,10]
        z: [0,0,0,0,0,0,0]
      width: [0,16,16,16,16,16,0]
      height: [0,16,16,16,16,16,0]
      angle: 0
      texture: [17.9,3.9,12.9,63,3.9,3.9]
    cannon_connector2:
      section_segments: [-140,-140,-90,-40,-40,40,40,40,90,140]
      offset:
        x: 80
        y: 75
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-25,-25,-20,-10,4,10,10]
        z: [0,0,0,0,0,0,0]
      width: [0,16,16,16,16,16,0]
      height: [0,16,16,16,16,16,0]
      angle: 0
      texture: [17.9,3.9,12.9,63,3.9,3.9]
    cannon_connector3:
      section_segments: [-140,-140,-90,-40,-40,40,40,40,90,140]
      offset:
        x: 50
        y: 75
        z: 25
      position:
        x: [0,0,0,0,0,0,0]
        y: [-25,-25,-20,-10,4,10,10]
        z: [0,0,0,0,0,0,0]
      width: [0,16,16,16,16,16,0]
      height: [0,16,16,16,16,16,0]
      angle: 0
      texture: [17.9,3.9,12.9,63,3.9,3.9]
    cannon_connector4:
      section_segments: [-140,-140,-90,-40,-40,40,40,40,90,140]
      offset:
        x: 80
        y: 75
        z: 25
      position:
        x: [0,0,0,0,0,0,0]
        y: [-25,-25,-20,-10,4,10,10]
        z: [0,0,0,0,0,0,0]
      width: [0,16,16,16,16,16,0]
      height: [0,16,16,16,16,16,0]
      angle: 0
      texture: [17.9,3.9,12.9,63,3.9,3.9]
    cannon_connector5:
      section_segments: [-140,-140,-90,-40,-40,40,40,40,90,140]
      offset:
        x: 50
        y: 35
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-25,-25,-20,-10,4,10,10]
        z: [0,0,0,0,0,0,0]
      width: [0,16,16,16,16,16,0]
      height: [0,16,16,16,16,16,0]
      angle: 0
      texture: [17.9,3.9,12.9,3,3.9,3.9]
    cannon_connector6:
      section_segments: [-140,-140,-90,-40,-40,40,40,40,90,140]
      offset:
        x: 80
        y: 35
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-25,-25,-20,-10,4,10,10]
        z: [0,0,0,0,0,0,0]
      width: [0,16,16,16,16,16,0]
      height: [0,16,16,16,16,16,0]
      angle: 0
      texture: [17.9,3.9,12.9,3,3.9,3.9]
    cannon_connector7:
      section_segments: [-140,-140,-90,-40,-40,40,40,40,90,140]
      offset:
        x: 50
        y: 35
        z: 25
      position:
        x: [0,0,0,0,0,0,0]
        y: [-25,-25,-20,-10,4,10,10]
        z: [0,0,0,0,0,0,0]
      width: [0,16,16,16,16,16,0]
      height: [0,16,16,16,16,16,0]
      angle: 0
      texture: [17.9,3.9,12.9,3,3.9,3.9]
    cannon_connector8:
      section_segments: [-140,-140,-90,-40,-40,40,40,40,90,140]
      offset:
        x: 80
        y: 35
        z: 25
      position:
        x: [0,0,0,0,0,0,0]
        y: [-25,-25,-20,-10,4,10,10]
        z: [0,0,0,0,0,0,0]
      width: [0,16,16,16,16,16,0]
      height: [0,16,16,16,16,16,0]
      angle: 0
      texture: [17.9,3.9,12.9,3,3.9,3.9]
    cannon_connector9:
      section_segments: [-140,-140,-90,-40,-40,40,40,40,90,140]
      offset:
        x: 50
        y: 80
        z: 25
      position:
        x: [0,0,0,0,0,0,0]
        y: [-25,-25,-20,-10,4,10,8]
        z: [0,0,0,0,0,0,0]
      width: [0,14,14,14,14,12,0]
      height: [0,14,14,14,14,12,0]
      angle: 0
      propeller: true
      texture: [17.9,3.9,12.9,3,2,49]
    cannon_connector10:
      section_segments: [-140,-140,-90,-40,-40,40,40,40,90,140]
      offset:
        x: 50
        y: 80
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-25,-25,-20,-10,4,10,8]
        z: [0,0,0,0,0,0,0]
      width: [0,14,14,14,14,12,0]
      height: [0,14,14,14,14,12,0]
      angle: 0
      propeller: true
      texture: [17.9,3.9,12.9,3,2,49]
    cannon_connector11:
      section_segments: [-140,-140,-90,-40,-40,40,40,40,90,140]
      offset:
        x: 80
        y: 80
        z: 25
      position:
        x: [0,0,0,0,0,0,0]
        y: [-25,-25,-20,-10,4,10,8]
        z: [0,0,0,0,0,0,0]
      width: [0,14,14,14,14,12,0]
      height: [0,14,14,14,14,12,0]
      angle: 0
      propeller: true
      texture: [17.9,3.9,12.9,3,2,49]
    cannon_connector12:
      section_segments: [-140,-140,-90,-40,-40,40,40,40,90,140]
      offset:
        x: 80
        y: 80
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-25,-25,-20,-10,4,10,8]
        z: [0,0,0,0,0,0,0]
      width: [0,14,14,14,14,12,0]
      height: [0,14,14,14,14,12,0]
      angle: 0
      propeller: true
      texture: [17.9,3.9,12.9,3,2,49]
    Body_ring:
      section_segments: [-140,-140,-90,-40,-40,40,40,40,90,140]
      offset:
        x: 65
        y: 30
        z: 12
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-11,-8,-6,-4,-4,4,4,6,6,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,32,34,34,34,34,34,34,32,0]
      height: [0,32,34,34,34,34,34,34,32,0]
      texture: [4,17,15.1,3,3,15.1,17,18]
      propeller: false
    Body_ring2:
      section_segments: [-140,-140,-90,-40,-40,40,40,40,90,140]
      offset:
        x: 65
        y: 70
        z: 12
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-11,-8,-6,-4,-4,4,4,6,6,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,32,34,34,34,34,34,34,32,0]
      height: [0,32,34,34,34,34,34,34,32,0]
      texture: [4,17,15.1,3,3,15.1,17,18]
      propeller: false
    Body_ring3:
      section_segments: [-140,-140,-90,-40,-40,40,40,40,90,140]
      offset:
        x: 50
        y: 50
        z: 11.99
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-6,-6,-6,-4,-4,4,4,6,6,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,32,34,34,34,34,34,34,32,0]
      height: [0,32,34,34,34,34,34,34,32,0]
      texture: [4,18,17,4,4,15.1,17,18]
      propeller: false
      angle: 90
    Body_ring4:
      section_segments: [-140,-140,-90,-40,-40,40,40,40,90,140]
      offset:
        x: 80
        y: 50
        z: 11.99
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-6,-6,-6,-4,-4,4,4,6,6,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,32,34,34,34,34,34,34,32,0]
      height: [0,32,34,34,34,34,34,34,32,0]
      texture: [4,18,17,4,4,15.1,17,18]
      propeller: false
      angle: 90
    Body_ring5:
      section_segments: [-140,-140,-90,-40,-40,40,40,40,90,140]
      offset:
        x: 20
        y: 50
        z: 11.98
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-6,-6,-6,-4,-4,4,4,6,6,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,62,64,64,64,64,64,64,32,0]
      height: [0,32,34,34,34,34,34,34,32,0]
      texture: [4,18,17,4,4,15.1,17,18]
      propeller: false
      angle: 90
    Body_ring6:
      section_segments: [-140,-140,-70,-40,-40,40,40,40,90,140]
      offset:
        x: 0
        y: 50
        z: 11.99
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-16,-16,-16,-14,-14,14,14,16,16,18]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,32,34,44,64,64,34,34,32,0]
      height: [0,32,34,34,34,34,34,34,32,0]
      texture: [4,18,17,4,8.9,15.1,17,18]
      propeller: false
      angle: 90
    Body_ring7:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 30
        z: 21
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-16,-16,-16,-14,-14,14,14,16,16,18]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,32,34,44,64,64,34,34,32,0]
      height: [0,5,8,8,8,8,8,8,8,0]
      texture: [4,18,17,4,11.2,15.1,17,18]
      propeller: false
      angle: 90
    Body_ring8:
      section_segments: 4
      offset:
        x: 0
        y: -11
        z: 22
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-16,-16,-16,-14,-14,14,14,16,16,18]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,32,34,44,64,64,34,34,32,0]
      height: [0,5,5,5,5,5,5,5,5,0]
      texture: [4,18,17,4,11.2,15.1,17,18]
      propeller: false
      angle: 90
    Body_ring9:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 56
        z: 14
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-16,-16,-16,-14,-14,14,14,16,16,18]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,32,34,44,64,64,34,34,32,0]
      height: [0,32,34,34,34,34,34,34,32,0]
      texture: [4,18,17,4,18,15.1,17,18]
      propeller: false
      angle: 90
    Body_ring10:
      section_segments: 4
      offset:
        x: 0
        y: 90
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-16,-16,-16,-14,-14,14,14,16,16,18]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,32,34,34,34,34,34,34,32,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [4,18,17,4,13,15.1,17,18]
      propeller: false
      angle: 90
    Body_ring11:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: -40
        z: 7
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-16,-16,-16,-14,-14,14,14,16,16,18]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,32,34,44,64,64,34,34,32,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [4,18,17,4,11,15.1,17,18]
      propeller: false
      angle: 90
    Body_ring12:
      section_segments: [-140,-140,-90,-40,-40,40,40,40,90,140]
      offset:
        x: 35
        y: 30
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-8,-4,-4,4,4,6,6,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,32,34,34,34,34,34,34,32,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [13,4,4,3,8,15.1,4,18]
      propeller: false
    Body_ring13:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 55
        z: 21.9
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-8,-8,-8,-4,-4,4,4,6,6,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,32,34,34,34,34,34,34,32,0]
      height: [0,22,24,24,24,24,24,24,22,0]
      texture: [13,4,4,3,63,15.1,4,18]
      propeller: false
    decoration:
      section_segments: 8
      offset:
        x: 0
        y: 40
        z: -30
      position:
        x: [50,50,50,50,50,50,50]
        y: [-25,-25,6,10,10]
        z: [0,0,0,0,0]
      width: [0,2,2,2,0]
      height: [0,2,2,2,0]
      propeller: false
      texture: [4,4,17,13]
      vertical: true
      angle: 0
    decoration2:
      section_segments: 8
      offset:
        x: 0
        y: 46
        z: -30
      position:
        x: [80,80,80,80,80,80,80]
        y: [-25,-25,6,10,10]
        z: [0,0,0,0,0]
      width: [0,2,2,2,0]
      height: [0,2,2,2,0]
      propeller: false
      texture: [4,4,17,13]
      vertical: true
      angle: 0
