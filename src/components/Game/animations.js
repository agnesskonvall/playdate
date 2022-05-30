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
    if (this.statistics.frustation > 5) {
      this.mood = 'angry_idle';
    } else if (this.statistics.tiredness > 7) {
      this.mood = 'tired_idle';
    } else if (this.statistics.happiness > 6) {
      this.mood = 'happy_idle';
    } else {
      this.mood = 'neutral_idle';
    }
    console.log(this.mood);
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
    this.statistics.happiness += 2;
    this.enableButtonsAndIdle();
  }

  Sleep() {
    this.disableButtonsAndIdle();
    this.yrgonaut = new Yrgonaut(this.app, 'sleep', 271, 390, 0.02, 0.5, false);
    this.statistics.tiredness -= 2;
    this.statistics.tiredness = Math.max(this.statistics.tiredness, 0);
    this.enableButtonsAndIdle();
  }

  Code() {
    this.disableButtonsAndIdle();
    this.yrgonaut = new Yrgonaut(this.app, 'code', 261, 390, 0.02, 0.5, false);
    this.enableButtonsAndIdle();
  }

  Beer() {
    this.disableButtonsAndIdle();
    this.yrgonaut = new Yrgonaut(this.app, 'beer', 253, 390, 0.02, 0.5, false);
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
    this.enableButtonsAndIdle();
  }

  Stack() {
    this.disableButtonsAndIdle();
    this.yrgonaut = new Yrgonaut(this.app, 'stack', 277, 390, 0.02, 0.5, false);
    this.enableButtonsAndIdle();
  }

  ShowStats() {
    this.showingStats = true;
    this.disableButtonsAndIdle();
    console.log('coding skills = ' + this.statistics.codingSkills);
    console.log('happiness = ' + this.statistics.happiness);
    console.log('tiredness = ' + this.statistics.tiredness);
    console.log('anger = ' + this.statistics.frustration);
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
