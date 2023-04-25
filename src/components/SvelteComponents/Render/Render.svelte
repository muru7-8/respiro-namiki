<script>
  import P5 from 'p5-svelte';
  import { isLoading, count, dataInfo } from '../../../context/store.js';
  import { COLORS } from '../../../constants/constants.js'
  export let colorValue;

  const ambientColor = 50;
  const specularColor = 70;
  let MODELS_IMG;
  let sizeModel = 26;
  let modelBrus;
  let modelAchira;
  let modelSemillas;
  let imgColor = 'green'
  let isMobile
  let imgMovement = {
    x: 0,
    y: 0,
    noise:{
      x: 0,
      y: 0
    },
    steps: {
      x: 0,
      y: 0,
      amount: {
        x: 0.001,
        y: 0.002,
      }
    }
  }

	const sketch = (p5) => {
		p5.setup = () => {
			p5.createCanvas(window.innerWidth, window.innerHeight, p5.WEBGL);
      isLoading.update(() => false);
      p5.imageMode(p5.CENTER);
		};

		p5.draw = () => {
      let finalColor;
      const lightColor = {
      red: p5.color(255, 0, 0),
      orange: p5.color(255, 102, 0),
      yellow: p5.color(255, 204, 0),
      limeGreen: p5.color(153, 204, 0),
      green: p5.color(0, 128, 0),
      }

      window.innerWidth > 768 ? sizeModel = 35 : sizeModel = 18;

      p5.background(40, 0);
      p5.noStroke();

      if (colorValue === COLORS.green.name) {
        finalColor = lightColor.green;
        imgColor = COLORS.green.name
      }
      if (colorValue === COLORS.limeGreen.name) {
        finalColor = lightColor.limeGreen;
        imgColor = COLORS.limeGreen.name
      }
      if (colorValue === COLORS.yellow.name) {
        finalColor = lightColor.yellow;
        imgColor = COLORS.yellow.name
      }
      if (colorValue === COLORS.orange.name) {
        finalColor = lightColor.orange;
        imgColor = COLORS.orange.name
      }
      if (colorValue === COLORS.red.name) {
        finalColor = lightColor.red;
        imgColor = COLORS.red.name
      }

      if (!isMobile) {
        p5.pointLight(finalColor, 0, 0, 0);
        p5.ambientLight(ambientColor);
        p5.specularMaterial(specularColor);

        p5.push();
        p5.translate(0, 0, 0)
        p5.scale(sizeModel)
        p5.rotateY(p5.frameCount * 0.001);
        p5.rotateX(p5.frameCount * 0.001);

        dataInfo[$count].name === 'BRUS' && p5.model(modelBrus)
        dataInfo[$count].name === 'SEMILLAS' && p5.model(modelSemillas)
        dataInfo[$count].name === 'ACHIRA' && p5.model(modelAchira)
        p5.pop();
      }

      imgMovement.noise.x = p5.noise(imgMovement.steps.x)
      imgMovement.noise.y = p5.noise(imgMovement.steps.y)
      imgMovement.x = p5.map(imgMovement.noise.x, 0, 1, -window.innerWidth / 4, window.innerWidth / 4)
      imgMovement.y = p5.map(imgMovement.noise.y, 0, 1, -window.innerHeight / 4, window.innerHeight / 4)
      imgMovement.steps.x += imgMovement.steps.amount.x
      imgMovement.steps.y += imgMovement.steps.amount.y

      if (isMobile) {
        p5.push()
        p5.scale(window.innerWidth / 2000)
        p5.image(MODELS_IMG[dataInfo[$count].name][imgColor], imgMovement.x, imgMovement.y)
        p5.pop()
      }
		};

    p5.preload = () => {
      window.innerWidth < 900 ? isMobile = true : isMobile = false;
      isLoading.update(() => true);

      if (!isMobile) {
        modelBrus = p5.loadModel('../assets/models/brus.obj');
        modelAchira = p5.loadModel('../assets/models/achira.obj')
        modelSemillas = p5.loadModel('../assets/models/semillas.obj')
      }

      MODELS_IMG = {
        BRUS: {
          green: p5.loadImage('../assets/images/brus-front-green.png'),
          limeGreen: p5.loadImage('../assets/images/brus-front-limeGreen.png'),
          yellow: p5.loadImage('../assets/images/brus-front-yellow.png'),
          orange: p5.loadImage('../assets/images/brus-front-orange.png'),
          red: p5.loadImage('../assets/images/brus-front-red.png'),
        },
        ACHIRA: {
          green: p5.loadImage('../assets/images/achira-front-green.png'),
          limeGreen: p5.loadImage('../assets/images/achira-front-limeGreen.png'),
          yellow: p5.loadImage('../assets/images/achira-front-yellow.png'),
          orange: p5.loadImage('../assets/images/achira-front-orange.png'),
          red: p5.loadImage('../assets/images/achira-front-red.png'),
        },
        SEMILLAS: {
          green: p5.loadImage('../assets/images/semillas-front-green.png'),
          limeGreen: p5.loadImage('../assets/images/semillas-front-limeGreen.png'),
          yellow: p5.loadImage('../assets/images/semillas-front-yellow.png'),
          orange: p5.loadImage('../assets/images/semillas-front-orange.png'),
          red: p5.loadImage('../assets/images/semillas-front-red.png'),
        }
      }


    }

    p5.windowResized = () => {
      p5.resizeCanvas(window.innerWidth, window.innerHeight)
    }
	};
</script>

<P5 {sketch} />