
// colours
const dark_navy = '#131e38';
const orange = '#fe9642';
const cream = '#FFF8E7';
const light_purple = '#7f3f98';
const dark_purple = '#563795';
const cheese = '#fbc715';


// create illo
let illo = new Zdog.Illustration({
    // set canvas with selector
    element: '.zdog-astronaut',
    dragRotate: true,
    zoom: 0.3,
});

/** Body **/
// Body
let body = new Zdog.RoundedRect({
    addTo: illo,
    width: 200,
    height: 220,
    color: 'white',
    fill: true,
    cornerRadius: 16,
    stroke: 60,
});

// Backpack
let backpack = new Zdog.RoundedRect({
    addTo: body,
    width: 180,
    height: 310,
    color: orange,
    fill: true,
    cornerRadius: 24,
    stroke: 120,
    translate: { z: -85, y: -60 },
});

/** arm **/
let arm = new Zdog.RoundedRect({
    addTo: body,
    height: 30,
    width: 28,
    stroke: 60,
    fill: true,
    color: dark_purple,
    translate: { x: -140, y: -64 },
    cornerRadius: 0.05,
});

let forearm = new Zdog.RoundedRect({
    addTo: arm,
    height: 120,
    width: 12,
    stroke: 60,
    fill: true,
    color: cream,
    translate: { y: 120 },
    cornerRadius: 0.05,
});

// bubble_arm
let bubble_arm = new Zdog.Shape({
    addTo: arm,
    path: [{ x: -20 }, { x: 20 }],
    stroke: 32,
    color: light_purple,
    translate: { y: 210 },
});

bubble_arm.copy({
    color: dark_purple,
    translate: { y: 230 },
});

// hand
let hand = new Zdog.RoundedRect({
    addTo: bubble_arm,
    height: 32,
    width: 22,
    translate: { x: -8, y: 60 },
    fill: true,
    color: cheese,
    stroke: 30,
});

let finger = new Zdog.RoundedRect({
    addTo: bubble_arm,
    height: 24,
    width: 0,
    translate: { x: 24, y: 50 },
    fill: true,
    color: orange,
    stroke: 20,
});


arm.copyGraph({
    translate: { x: 140, y: -64 },
    rotate: { y: Zdog.TAU / 2 },
});


/** Leg **/
let leg = new Zdog.RoundedRect({
    addTo: body,
    height: 160,
    width: 28,
    stroke: 60,
    fill: true,
    color: cream,
    translate: { x: -56, y: 230 },
    cornerRadius: 0.05,
});

// bubble_leg
let bubble_leg = new Zdog.Shape({
    addTo: leg,
    path: [{ x: -28 }, { x: 28 }],
    stroke: 32,
    color: light_purple,
    translate: { y: 100 },
});

bubble_leg.copy({
    color: dark_purple,
    translate: { y: 124 },
});

// foot
let foot = new Zdog.RoundedRect({
    addTo: leg,
    width: 96,
    height: 24,
    stroke: 40,
    fill: true,
    color: cheese,
    translate: { x: -24, y: 170 },
    cornerRadius: 24,
});

leg.copyGraph({
    translate: { x: 56, y: 230 },
    rotate: { y: Zdog.TAU / 2 },
})


/** Head **/
// Head
let head = new Zdog.RoundedRect({
    addTo: body,
    width: 216,
    height: 180,
    depth: 40,
    cornerRadius: 80,
    stroke: 60,
    color: cream,
    fill: true,
    translate: { y: -300 },
});

//add helmet
let helmet = new Zdog.RoundedRect({
    addTo: head,
    width: 210,
    height: 165,
    cornerRadius: 64,
    color: dark_navy,
    fill: true,
    backface: false,
    translate: { z: 20 },
});

//add refletion
let reflection = new Zdog.Rect({
    addTo: helmet,
    width: 48,
    height: 2,
    stroke: 10,
    translate: { x: 24, y: -24, z: 10 },
    color: 'white',
    backface: false,
});

// add ear
let ear = new Zdog.RoundedRect({
    addTo: head,
    width: 36,
    height: 72,
    cornerRadius: 80,
    stroke: 20,
    color: orange,
    fill: true,
    translate: { x: -140 },
});

ear.copy({
    translate: { x: 140 },
})

// neck
let neck = new Zdog.Shape({
    addTo: head,
    path: [{ x: -110 }, { x: 110 }],
    translate: { y: 120 },
    stroke: 40,
    color: light_purple,
});

neck.copy({
    translate: { y: 160 },
    color: dark_purple,
});


/** extra **/
let stripe_1 = new Zdog.Shape({
    addTo: body,
    path: [{ x: -20 }, { x: 20 }],
    stroke: 10,
    translate: { x: 200, z: 200 },
    color: cheese,
});

stripe_1.copy({
    translate: { x: 320, y: 200, z: -400 },
    color: cheese,
});

stripe_1.copy({
    translate: { x: -220, y: 300, z: -400 },
    color: 'white',
});

stripe_1.copy({
    translate: { x: -100, y: 400, z: -280 },
    color: light_purple,
});

stripe_1.copy({
    translate: { x: 50, y: -60, z: 150 },
    color: orange,
});

stripe_1.copy({
    translate: { x: -250, y: 80, z: 300 },
    color: light_purple,
});

stripe_1.copy({
    translate: { x: -350, y: -280, z: 175 },
    color: dark_purple,
});

stripe_1.copy({
    translate: { x: 250, y: -380, z: -175 },
    color: 'white',
});




// update & render
illo.updateRenderGraph();

function animate() {
    // rotate illo each frame
    illo.rotate.y += 0.005;
    illo.rotate.x += 0.005;
    illo.rotate.z += 0.005;
    illo.updateRenderGraph();
    // animate next frame
    requestAnimationFrame(animate);
}

// start animation
animate();