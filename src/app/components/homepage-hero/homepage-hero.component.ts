import { Component } from '@angular/core';
import {
  MoveDirection,
  ClickMode,
  HoverMode,
  OutMode,
  Engine,
  Container,
} from 'tsparticles-engine';
import { loadFull } from 'tsparticles';

@Component({
  selector: 'app-homepage-hero',
  templateUrl: './homepage-hero.component.html',
  styleUrls: ['./homepage-hero.component.scss'],
})
export class HomepageHeroComponent {
  id = 'tsparticles';

  particlesOptions = {
    fullScreen: {
      enable: false,
      zIndex: 0,
    },
    background: {
      image:
        // "url('https://res.cloudinary.com/primap/image/upload/v1665578848/General/background3_vuxsmv.jpg')",
        "url('https://res.cloudinary.com/primap/image/upload/v1668107960/General/Appsforce%20Assignment/albert-bleeker-slpTDuenYeM-unsplash_p4vbxp.jpg')",
        // "url('https://res.cloudinary.com/primap/image/upload/v1668108279/General/Appsforce%20Assignment/sascha-eremin-DNQ-M93tHmA-unsplash_bn9egy.jpg')",
    },
    fpsLimit: 30,
    interactivity: {
      InteractivityDetect: "parent",
      events: {
        onClick: {
          enable: true,
          mode: ClickMode.repulse,
        },
        onHover: {
          enable: true,
          mode: HoverMode.bubble,
          parallax: {
            enable: false,
            force: 60,
            smooth: 10,
          },
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          lineLinked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 80,
          duration: 2,
          opacity: 0.8,
          speed: 3,
        },
        repulse: {
          distance: 200,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    particles: {
      color: {
        value: '#F2F6F7',
      },
      links: {
        enable: true,
        distance: 250,
        color: '#1d1d1d',
        opacity: 0.7,
        width: 3,
      },
      ValueWithRandom: {
        value: 100,
        random: true,
        anim: {
          enable: true,
          speed: 30,
          size_min: 0.1,
          sync: false
        }
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        speed: 2,
        outModes: {
          default: OutMode.out,
        },
        random: false,
        straight: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.3,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 50 },
      },
    },
    BackgroundMask: {
      enable: true,
      BackgroundMaskCover: {
        color: {
          value: "#F2F6F7"
        }
      }
    },
    detectRetina: true,
  };

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  async particlesInit(engine: Engine): Promise<void> {
    console.log(engine);

    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }
}
