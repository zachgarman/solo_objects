var nd = {
  schoolName: 'Notre Dame',
  mascot: 'Fighting Irish',
  sport: 'football',
  location: {city: 'South Bend', state: 'Indiana'},
  league: 'NCAA',
  nationalChampionships: 11,
  allAmericans: 83,
  conference: 'Independent',
  coach: 'Knute Rockne',
  colors: ['blue', 'gold'],
  record: '816-300-33',
  firstYear: '1899',
  get nickname() {
    return this.mascot.substring(9,14);
  },
  set popCoach(newCoach) {
    this.coach = newCoach;
  }
};

function aboutND (obj) {
  console.log('The ' + obj.schoolName + ' ' + obj.mascot + ', located in '
              + obj.location.city + ', ' + obj.location.state
              + ', have been a staple of the ' + obj.league + ' since '
              + obj.firstYear + '. The ' + obj.nickname + ' have '
              + 'won ' + obj.nationalChampionships + ' consensus '
              + 'National Championships and have produced '
              + obj.allAmericans + ' consensus All Americans.\n\n'
              + 'The ' + obj.nickname + ' have compiled a record of '
              + obj.record + ' as an ' + obj.conference + ' member '
              + 'of the ' + obj.league + '. The school colors are '
              + obj.colors[0] + ' and ' + obj.colors[1] + '. The '
              + 'school\'s most famous coach is ' + obj.coach + '.\n');
  nd.popCoach = 'Frank Leahy';
  console.log('Many people regard ' + obj.coach + ' to '
              + 'be the greatest coach. Either way, there is no doubt '
              + 'that the ' + obj.mascot + ' are the most historic '
              + obj.sport + ' team in the nation.');

}

aboutND(nd);
