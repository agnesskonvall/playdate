function calculateMood() {
  if (statistics.frustation > 5) {
    mood = 'idleFrustrated';
  } else if (statistics.tiredness > 7) {
    mood = 'idleSleepy';
  } else if (statistics.happiness > 6) {
    mood = 'idleHappy';
  } else {
    mood = 'idleNeutral';
  }
  return mood;
}
