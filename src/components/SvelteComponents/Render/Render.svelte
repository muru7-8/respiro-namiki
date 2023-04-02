<script>
  import P5 from 'p5-svelte';
  import { isLoading } from '../../../context/store.js';
  import { COLORS } from '../../../constants/constants.js'
  export let colorValue;

  const ambientColor = 50;
  const specularColor = 70;
  let sizeModel = 35;
  let modelFile;

	const sketch = (p5) => {
		p5.setup = () => {
			p5.createCanvas(window.innerWidth, window.innerHeight, p5.WEBGL);
      isLoading.update(n => n = false);
		};

		p5.draw = () => {
      let finalColor;
      const lightColor = {
      red: p5.color(255, 0, 0),
      orange: p5.color(255, 165, 0),
      yellow: p5.color(255, 255, 0),
      limeGreen: p5.color(154, 205, 50),
      green: p5.color(0, 128, 0),
      }

      window.innerWidth > 768 ? sizeModel = 35 : sizeModel = 25;

      p5.background(40, 0);
      p5.noStroke();

      if (colorValue === COLORS.green.name) {
        finalColor = lightColor.green;
      }
      if (colorValue === COLORS.limeGreen.name) {
        finalColor = lightColor.limeGreen;
      }
      if (colorValue === COLORS.yellow.name) {
        finalColor = lightColor.yellow;
      }
      if (colorValue === COLORS.orange.name) {
        finalColor = lightColor.orange;
      }
      if (colorValue === COLORS.red.name) {
        finalColor = lightColor.red;
      }

      p5.pointLight(finalColor, 0, 0, 0);
      p5.ambientLight(ambientColor);
      p5.specularMaterial(specularColor);

      p5.push();
      p5.translate(0, 0, 0)
      p5.scale(sizeModel)
      p5.rotateY(p5.frameCount * 0.001);
      p5.rotateX(p5.frameCount * 0.001);
      p5.model(modelFile);
      p5.pop();

		};

    p5.preload = () => {
      isLoading.update(n => n = true);
      modelFile = p5.loadModel('../../../public/assets/models/brus.obj');
    }

    p5.windowResized = () => {
      p5.resizeCanvas(window.innerWidth, window.innerHeight)
    }
	};
</script>

<P5 {sketch} />