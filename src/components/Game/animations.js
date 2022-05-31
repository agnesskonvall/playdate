import Yrgonaut from './yrgonaut';
import './game.js';
import * as PIXI from 'pixi.js';

export default class Animations {
  statistics;
  app;
  yrgonaut;
  mood;
  buttons;
  showingStats;
  stats;

  constructor(Statistics, App, Yrgonaut, Buttons, ShowingStats, Stats) {
    this.statistics = Statistics;
    this.app = App;
    this.yrgonaut = Yrgonaut;
    this.buttons = Buttons;
    this.showingStats = ShowingStats;
    this.stats = Stats;
  }

  Idle() {
    //prevent stats from being less than 0:
    this.statistics.tiredness = Math.max(this.statistics.tiredness, 0);
    this.statistics.happiness = Math.max(this.statistics.happiness, 0);
    this.statistics.frustration = Math.max(this.statistics.frustration, 0);

    if (this.statistics.frustation > 5) {
      this.mood = 'angry_idle';
      sound.play('frustrated');
    } else if (this.statistics.tiredness > 7) {
      this.mood = 'tired_idle';
      sound.play('tired');
    } else if (this.statistics.happiness > 6) {
      this.mood = 'happy_idle';
      sound.play('happy');
    } else {
      this.mood = 'neutral_idle';
    }

    this.yrgonaut = new Yrgonaut(
      this.app,
      this.mood,
      235,
      390,
      0.009,
      0.5,
      true
    );
    this.app.stage.addChild(this.yrgonaut);
  }

  disableButtonsAndIdle() {
    this.app.stage.removeChild(this.yrgonaut);
    for (let i = 0; i < this.buttons.length; i++) {
      this.buttons[i].interactive = false;
    }
  }

  enableButtonsAndIdle() {
    if (this.showingStats === false) {
      this.app.stage.addChild(this.yrgonaut);
      this.yrgonaut.onComplete = () => {
        this.app.stage.removeChild(this.yrgonaut);
        for (let i = 0; i < this.buttons.length; i++) {
          this.buttons[i].interactive = true;
        }
        this.Idle();
      };
    } else {
      this.app.stage.removeChild(this.stats);
      for (let i = 0; i < this.buttons.length; i++) {
        this.buttons[i].interactive = true;
      }
      this.showingStats = false;
      this.Idle();
    }
  }

  Eat() {
    this.disableButtonsAndIdle();
    this.yrgonaut = new Yrgonaut(this.app, 'eat', 253, 390, 0.02, 0.5, false);
    this.statistics.happiness += 1;
    this.statistics.tiredness += 1;
    this.enableButtonsAndIdle();
  }

  Sleep() {
    this.disableButtonsAndIdle();
    this.yrgonaut = new Yrgonaut(this.app, 'sleep', 271, 390, 0.02, 0.5, false);
    this.statistics.tiredness -= 2;
    this.statistics.frustration -= 3;
    this.statistics.happiness -= 1;
    this.enableButtonsAndIdle();
  }

  Code() {
    this.disableButtonsAndIdle();
    this.yrgonaut = new Yrgonaut(this.app, 'code', 261, 390, 0.02, 0.5, false);
    this.statistics.codingSkills += 2;
    this.statistics.tiredness += 2;
    this.enableButtonsAndIdle();
  }

  Beer() {
    this.disableButtonsAndIdle();
    this.yrgonaut = new Yrgonaut(this.app, 'beer', 253, 390, 0.02, 0.5, false);
    this.statistics.happiness += 2;
    this.enableButtonsAndIdle();
  }

  Stretch() {
    this.disableButtonsAndIdle();
    this.yrgonaut = new Yrgonaut(
      this.app,
      'stretch',
      262,
      390,
      0.02,
      0.5,
      false
    );
    this.statistics.tiredness -= 1;
    this.statistics.frustration -= 1;
    this.enableButtonsAndIdle();
  }

  Stack() {
    this.disableButtonsAndIdle();
    this.yrgonaut = new Yrgonaut(this.app, 'stack', 277, 390, 0.02, 0.5, false);
    this.statistics.frustration += 2;
    this.statistics.codingSkills += 2;
    this.statistics.happiness -= 2;
    this.enableButtonsAndIdle();
  }

  Github() {
    this.disableButtonsAndIdle();
    this.yrgonaut = new Yrgonaut(
      this.app,
      'github',
      255,
      390,
      0.02,
      0.5,
      false
    );
    this.statistics.codingSkills += 2;
    this.statistics.frustration += 1;
    this.enableButtonsAndIdle();
  }

  ShowStats() {
    this.showingStats = true;
    this.disableButtonsAndIdle();
    this.stats = new PIXI.Text(
      'Tiredness = ' +
        this.statistics.tiredness +
        '\nHappiness = ' +
        this.statistics.happiness +
        '\nFrustration = ' +
        this.statistics.frustration +
        '\nCoding Skills = ' +
        this.statistics.codingSkills,
      {
        fontFamily: 'VT323',
        fontSize: 24,
        fill: 0x000000,
      }
    );
    this.stats.anchor.set(0.5);
    this.stats.x = this.app.view.width / 2;
    this.stats.y = this.app.view.height / 2 + 35;
    this.app.stage.addChild(this.stats);
    setTimeout(() => {
      this.enableButtonsAndIdle();
    }, 3000);
  }
}
