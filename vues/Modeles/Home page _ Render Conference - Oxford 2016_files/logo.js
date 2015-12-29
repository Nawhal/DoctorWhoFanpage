createjs.Ticker.framerate = 60;

var outlinePrecision = 6;
var outlineWidth = 8;
var shapeWidth = 160;
var curveRadius = 90;

var hideMesh = function(child) {
  if (child instanceof THREE.Mesh) {
    child.visible = false;
  }
};

var showMesh = function(child) {
  if (child instanceof THREE.Mesh) {
    child.visible = true;
  }
};

var cylinderMesh = function(a, b, radius, material) {
  var direction = b.clone().sub(a);

  var geometry = new THREE.CylinderGeometry(radius, radius, direction.length(), outlinePrecision, 4);
  var edge = new THREE.Mesh(geometry, material);
  edge.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.clone().normalize());
  edge.position.copy(a.clone().add(direction.clone().multiplyScalar(0.5)));

  return edge;
};

var outlinedSheet = function(x, y, outlineWidth, material, outlineMaterial, uncapped) {
  var group = new THREE.Object3D();
  var geometry = new THREE.BoxGeometry(x, y, outlineWidth / 2);
  var cube = new THREE.Mesh(geometry, material);
  group.add(cube);

  var corners = [[0, 0], [1, 0], [1, 1], [0, 1]];
  var cornerVectors = corners.map(function(position) {
    var sphereGeometry = new THREE.SphereGeometry(outlineWidth / 2, outlinePrecision, outlinePrecision);
    var corner = new THREE.Mesh(sphereGeometry, outlineMaterial);
    corner.position.set(position[0] * x - x / 2, position[1] * y - y / 2, 0);
    group.add(corner);
    return corner.position;
  });

  var previous = cornerVectors[cornerVectors.length - 1];
  cornerVectors.map(function(current, i) {
    if (uncapped !== i) {
      group.add(cylinderMesh(previous, current, outlineWidth / 2, outlineMaterial));
    }
    previous = current;
  });

  return group;
};

var outlinedCurve = function(segments, angle, radius, width, outlineWidth, materials, outlineMaterial) {
  var group = new THREE.Object3D();

  var sphereGeometry = new THREE.SphereGeometry(outlineWidth / 2, outlinePrecision, outlinePrecision);
  var axis = new THREE.Vector3(0, 1, 0);
  var widthVector = new THREE.Vector3(0, width, 0);

  var innerRadius = new THREE.Vector3(radius - outlineWidth / 2, 0, 0);
  var middleRadius = new THREE.Vector3(radius - outlineWidth / 2 / 2, 0, 0);
  var outerRadius = new THREE.Vector3(radius, 0, 0);

  var section, currentAngle, lastPosition, sectionGroup;
  segmentAngle = angle / segments;
  for (var i = 0; i < segments; i++) {
    sectionGroup = new THREE.Object3D();
    currentAngle = angle * i / segments;

    if (i < segments) {
      section = new THREE.BoxGeometry(1, 1, 1);
      section.vertices[0] = outerRadius.clone().applyAxisAngle(axis, segmentAngle).add(widthVector);
      section.vertices[1] = outerRadius.clone().applyAxisAngle(axis, segmentAngle);
      section.vertices[2] = outerRadius.clone().applyAxisAngle(axis, 0).add(widthVector);
      section.vertices[3] = outerRadius.clone().applyAxisAngle(axis, 0);
      section.vertices[4] = innerRadius.clone().applyAxisAngle(axis, segmentAngle);
      section.vertices[5] = innerRadius.clone().applyAxisAngle(axis, segmentAngle).add(widthVector);
      section.vertices[6] = innerRadius.clone().applyAxisAngle(axis, 0);
      section.vertices[7] = innerRadius.clone().applyAxisAngle(axis, 0).add(widthVector);

      section.faces.map(function(face) {
        face.materialIndex = 0;
      });
      section.faces[2].materialIndex = 1;
      section.faces[3].materialIndex = 1;
      section.faces[4].materialIndex = 1;
      section.faces[5].materialIndex = 1;

      faceMaterial = new THREE.MeshFaceMaterial();
      faceMaterial.materials = materials;

      sectionGroup.add(new THREE.Mesh(section, faceMaterial));
    }

    var sphere1 = new THREE.Mesh(sphereGeometry, outlineMaterial);
    sphere1.position.copy(middleRadius.clone().applyAxisAngle(axis, segmentAngle));
    sectionGroup.add(sphere1);

    var sphere2 = new THREE.Mesh(sphereGeometry, outlineMaterial);
    sphere2.position.copy(sphere1.position).add(widthVector);
    sectionGroup.add(sphere2);

    if (i < segments) {
      sectionGroup.add(cylinderMesh(
        middleRadius,
        middleRadius.clone().applyAxisAngle(axis, segmentAngle),
        outlineWidth / 2,
        outlineMaterial
      ));
      sectionGroup.add(cylinderMesh(
        middleRadius.clone().add(widthVector),
        middleRadius.clone().applyAxisAngle(axis, segmentAngle).add(widthVector),
        outlineWidth / 2,
        outlineMaterial
      ));
    }

    sectionGroup.rotation.y = currentAngle;
    group.add(sectionGroup);
  }

  return group;
}

var renderLogo = function(curveCenter) {
  var lightBlue = new THREE.MeshBasicMaterial({ color: 0x7be0fb });
  var yellow = new THREE.MeshBasicMaterial({ color: 0xfce057 });
  var darkBlue = new THREE.MeshBasicMaterial({ color: 0x3665c7 });

  var outlineMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });

  var shape = new THREE.Object3D();

  var head = outlinedSheet(shapeWidth, 118, outlineWidth, yellow, outlineMaterial);
  head.position.set(0, 148, -59);
  head.rotation.x = Math.PI / 2;
  shape.add(head);

  var middle = outlinedSheet(shapeWidth, 118, outlineWidth, yellow, outlineMaterial, 1);
  middle.position.set(0, -28, -63);
  middle.rotation.x = Math.PI / 2;
  shape.add(middle);

  var leg = outlinedSheet(shapeWidth, 150, outlineWidth, lightBlue, outlineMaterial);
  leg.position.set(0, -92, -168);
  leg.rotation.x = Math.PI * 1 / 5;
  shape.add(leg);

  var back = outlinedSheet(shapeWidth, 298, outlineWidth, darkBlue, outlineMaterial);
  back.position.set(0, -1, 0);
  shape.add(back);

  var curve = outlinedCurve(16, Math.PI, curveRadius, shapeWidth, outlineWidth, [lightBlue, yellow], outlineMaterial);
  curve.rotation.z = Math.PI / 2;
  curve.position.x = shapeWidth / 2;
  curve.position.y = 60;
  curve.position.z = -120;
  shape.add(curve);

  shape.curveCenter = new THREE.Vector3(0, 60, -120);

  var start = new THREE.Vector3(-shapeWidth / 2, 0, 0);
  var end = new THREE.Vector3(shapeWidth / 2, 0, 0);
  var curveOutline = cylinderMesh(start, end, outlineWidth / 4, outlineMaterial);
  curveOutline.position.copy(shape.curveCenter);
  shape.add(curveOutline);

  shape.position.z = 100;
  shape.parts = {
    head: head,
    middle: middle,
    leg: leg,
    back: back,
    curve: curve,
    curveOutline: curveOutline
  };

  return shape;
};

var scene = new THREE.Scene();

var width = 600;
var height = 600;
var camera = new THREE.OrthographicCamera(width / - 2, width / 2, height / 2, height / - 2, 0, 10000);
camera.position.set(1320, 350, -800);
camera.lookAt(scene.position);

var rendererParams = { alpha: true };

// Chrome 42 on Linux doesn't support antialiasing and alpha together
// So only enable antialiasing if the user is not using Chrome 42 for Linux
if (!(navigator.userAgent.indexOf('Linux') !== -1 && navigator.userAgent.indexOf('Chrome/42') !== -1)) {
  rendererParams.antialias = true;
}

var renderer = new THREE.WebGLRenderer(rendererParams);
renderer.setSize(300, 300);

// Detect WebGL support
try {
  canvas = document.createElement('canvas');
  ctx = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
}
catch (e) {
  ctx = false;
}

// Run if WebGL is supported
if (ctx) {
  var container = document.getElementById('logo');
  var canvas = renderer.domElement;
  container.removeChild(document.getElementById('fallback'));
  container.appendChild(canvas);

  var shape = renderLogo();
  scene.add(shape);

  var start = camera.position.clone();

  var height = 298;
  var phasing = { phase: height };

  var phaseSheet = function(sheet, phase, height, actualHeight, min) {
    if (phase > min) {
      sheet.traverse(showMesh);

      if (phase > height) phase = height;
      if (phase < 0) phase = 0;

      phase = phase * actualHeight / height;

      // Sides of back
      sheet.children[0].scale.y = phase / actualHeight;
      sheet.children[0].position.y = (phase - actualHeight) / 2;
      sheet.children[5].scale.y = phase / actualHeight;
      sheet.children[5].position.y = (phase - actualHeight) / 2;
      sheet.children[7].scale.y = phase / actualHeight;
      sheet.children[7].position.y = (phase - actualHeight) / 2;

      // Top of back
      sheet.children[3].position.y = phase - actualHeight / 2;
      sheet.children[4].position.y = phase - actualHeight / 2;
      sheet.children[8].position.y = phase - actualHeight / 2;
    }

    else {
      sheet.traverse(hideMesh);
    }
  };


  var phaseSection = function(section, phase, height, actualHeight, min) {
    if (phase > min) {
      section.traverse(showMesh);

      if (phase > height) phase = height;
      if (phase < 0) phase = 0;

      phase = phase * actualHeight / height;

      // Sides of back
      section.children[0].scale.z = phase / actualHeight;
      section.children[0].position.z = (phase - actualHeight);
      section.children[3].scale.y = phase / actualHeight;
      section.children[3].position.z = -8.59 + (phase - actualHeight) / 2;
      section.children[4].scale.y = phase / actualHeight;
      section.children[4].position.z = -8.59 + (phase - actualHeight) / 2;
    }

    else {
      section.traverse(hideMesh);
    }
  };

  var interval = setInterval(function() {
    shape.parts.head.traverse(phasing.phase > (height - 3) ? showMesh : hideMesh);
    shape.parts.middle.traverse(phasing.phase > 112 ? showMesh : hideMesh);

    phaseSheet(shape.parts.back, phasing.phase + 10, height, height, 1);
    phaseSheet(shape.parts.leg, phasing.phase, 115, 150, 1);

    shape.parts.curve.children.map(function(child) {
      var curvePhase = phasing.phase - 202 - (curveRadius) * Math.cos(child.rotation.y + 0.2);
      phaseSection(child, curvePhase, 18 * Math.sin(child.rotation.y + 0.1), 18, 0.1);
    });
  }, 10);

  var a = 0;
  var v = 0.02;
  var angle = 0;

  var dragStart = false;
  var mouseStart = [];
  var mousePosition = [];

  canvas.addEventListener('mousedown', function(mouse) {
    dragStart = Date.now();
    mouseStart = [mouse.clientX, mouse.clientY];
    mousePosition = [mouse.clientX, mouse.clientY];
  }, false);

  window.addEventListener('mouseup', function(mouse) {
    dragStart = false;
  }, false);

  canvas.addEventListener('blur', function(mouse) {
    dragStart = false;
  }, false);

  canvas.addEventListener('mousemove', function(mouse) {
    if (dragStart) {
      mousePosition = [mouse.clientX, mouse.clientY];
    }
  }, false);

  var hiding;
  canvas.addEventListener('click', function(mouse) {
    if (
      Math.abs(mouseStart[0] - mousePosition[0]) < 10 &&
        Math.abs(mouseStart[0] - mousePosition[0]) < 10
      ) {
      if (!hiding) {
        hiding = true;

        return createjs.Tween
          .get(shape.scale)
          .to({ x: 0.65 }, 400, createjs.Ease.quadIn)
          .to({ x: 1 }, 900, createjs.Ease.elasticOut)
          .call(function() {
            hiding = false;
          })
      }
    }
  });

  var sign = function(value) {
    return value > 0 ? 1 : -1;
  };

  var animate = function() {
    phasing.phase = (phasing.phase * 7 + height) / 8;

    if (dragStart) {
      var divisor = Math.max(50, Date.now() - dragStart);

      if (mousePosition[1] > mouseStart[1] + 20) {
        phasing.phase -= (mousePosition[1] - mouseStart[1] + 20) * 0.21;
        if (phasing.phase < 0) phasing.phase = 0;
      }

      a = Math.pow(mouseStart[0] - mousePosition[0], 2) * 0.0001 / divisor;
      if (mousePosition[0] > mouseStart[0]) a = -a;
    }
    else {
      a = -angle * 0.001;
    }

    v += a;
    if (Math.abs(v) > 0.01) v = v * 0.96;
    angle += v;

    camera.position.copy(start).applyAxisAngle(new THREE.Vector3(0, 1, 0), angle);
    camera.lookAt(scene.position);

    var cameraVector = (camera.type === 'PerspectiveCamera' ?
      camera.position.clone().sub(shape.curveCenter) :
      new THREE.Vector3(0, 0, 1).applyQuaternion(camera.quaternion)
      );

    var radiusVector = (cameraVector
      .cross(new THREE.Vector3(1, 0, 0))
      .normalize()
      .multiplyScalar(camera.position.y > shape.curveCenter.y ? 1 : -1)
      .multiplyScalar(curveRadius)
      );

    shape.parts.curveOutline.position.copy(shape.curveCenter).add(radiusVector);
    shape.parts.curveOutline.visible = shape.parts.curveOutline.position.z < shape.curveCenter.z;
    if (phasing.phase < shape.parts.curveOutline.position.y + 145) shape.parts.curveOutline.visible = false;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };

  animate();
}
