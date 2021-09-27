// create a scene, that will hold all our elements such as objects, cameras and lights.
    var scene = new THREE.Scene();

function cubo(x, y, z, color, material, alambrado) {
    // create a cube
    var cubeGeometry = new THREE.BoxGeometry(x, y, z);
    switch(material){
	case 'Basic': cubeMaterial = new THREE.MeshBasicMaterial({color: color, wireframe: alambrado});
 		break;
	case 'Standard': cubeMaterial = new THREE.MeshBasicMaterial({color: color, wireframe: alambrado});
 		break;
	case 'Physical': cubeMaterial = new THREE.MeshBasicMaterial({color: color, wireframe: alambrado});
 		break;
	case 'Phong': cubeMaterial = new THREE.MeshBasicMaterial({color: color, wireframe: alambrado});
 		break;
	case 'Lambert': cubeMaterial = new THREE.MeshBasicMaterial({color: color, wireframe: alambrado});
 		break;
    }
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

    // add the cube to the scene
    scene.add(cube);
    return cube;
}
function init() {
    // create a camera, which defines where we're looking at.
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    // create a render and set the size
    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0x000000));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // show axes in the screen
    var axes = new THREE.AxesHelper(20);
    scene.add(axes);

    //Definir un arreglo unidimensional
    Cubo=[];

    Cubo.push(cubo(4, 4, 4, 0xFF0000, 'Basic', false));
    Cubo.push(cubo(4, 4, 4, 0xFF0000, 'Standard', false));

    Cubo[0].position.set(-4, 9, 0);
    Cubo[1].position.set(-4, 18, 0);

    // create Luz
    light= new THREE.PointLight(0xFFFF00);

    light.position.set(-10, 5, 10);
    scene.add(light);

    // position and point the camera to the center of the scene
    camera.position.set(-30, 40, 30);
    camera.lookAt(scene.position);

    // add the output of the renderer to the html element
    document.getElementById("webgl-output").appendChild(renderer.domElement);

    // render the scene
    renderer.render(scene, camera);
}