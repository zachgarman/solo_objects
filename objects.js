var nd = {
  schoolName: 'Notre Dame',
  mascot: 'Fighting Irish',
  nickName: 'Irish',
  sport: 'football',
  location: {city: 'South Bend', state: 'Indiana'},
  league: 'NCAA',
  nationalChampionships: 11,
  allAmericans: 83,
  conference: 'Independent',
  greatestCoach: 'Frank Leahy',
  popularCoach: 'Knute Rockne',
  colors: ['blue', 'gold'],
  record: '816-300-33',
  firstYear: '1899'
};

function aboutND (obj) {
  console.log('The ' + obj.schoolName + ' ' + obj.mascot + ', located in '
              + obj.location.city + ', ' + obj.location.state
              + ', have been a staple of the ' + obj.league + ' since '
              + obj.firstYear + '. The ' + obj.nickName + ' have '
              + 'won ' + obj.nationalChampionships + ' consensus '
              + 'National Championships and have produced '
              + obj.allAmericans + ' consensus All Americans. '
              + 'The ' + obj.nickName + ' have compiled a record of '
              + obj.record + ' as an ' + obj.conference + ' member '
              + 'of the ' + obj.league + '. The school colors are '
              + obj.colors[0] + ' and ' + obj.colors[1] + '. The '
              + 'school\'s most famous coach is ' + obj.popularCoach
              + ', while many regard ' + obj.greatestCoach + ' to '
              + 'be the greatest coach. There is no doubt that '
              + 'the ' + obj.mascot + ' are the most historic '
              + obj.sport + ' team in the nation.');

}

aboutND(nd);
