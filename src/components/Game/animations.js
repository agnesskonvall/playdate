import Yrgonaut from './yrgonaut';
import './game.js';

// export default function Idle(statistics, app, yrgonaut) {
//   let mood;
//   if (statistics.frustation > 5) {
//     mood = 'idleFrustrated';
//   } else if (statistics.tiredness > 7) {
//     mood = 'idleSleepy';
//   } else if (statistics.happiness > 6) {
//     mood = 'idleHappy';
//   } else {
//     mood = 'idleNeutral';
//   }
//   console.log(mood);
//   yrgonaut = new Yrgonaut(app, 'idle', 235, 390, 0.009, 0.5, true);
//   app.stage.addChild(yrgonaut);
// }

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
      this.mood = 'idleFrustrated';
    } else if (this.statistics.tiredness > 7) {
      this.mood = 'idleSleepy';
    } else if (this.statistics.happiness > 6) {
      this.mood = 'idleHappy';
    } else {
      this.mood = 'idleNeutral';
    }
    console.log(this.mood);
    this.yrgonaut = new Yrgonaut(this.app, 'idle', 235, 390, 0.009, 0.5, true);
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
}
