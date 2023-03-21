const getWinner = (dolphinsScore,koalasScore) =>{
    return dolphinsScore == koalasScore ? 'Draw' : dolphinsScore > koalasScore ? 'Dolphins' : 'Koalas';
}

const getAverage = (score1,score2,score3,numberOfScores) => {
    return (score1+score2+score3)/numberOfScores;
}

let koalasAvgTestData01 = getAverage(96,108,89,3);
let dolphinsAvgTestData01 = getAverage(88,91,110,3);

let koalasAvgBonusTestData01 = getAverage(97,112,101,3);
let dolphinsAvgBonusTestData01 = getAverage(109,95,123,3);

let koalasAvgBonusTestData02 = getAverage(97,112,101,3);
let dolphinsAvgBonusTestData02 = getAverage(109,95,106,3);

console.log(`Winner for the first competition is: ${getWinner(dolphinsAvgTestData01,koalasAvgTestData01)}`);



