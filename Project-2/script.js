const medalRankings = [
    { country: 'Japan', gold: 6, silver: 2, bronze: 4 },
    { country: 'France', gold: 5, silver: 8, bronze: 3 },
    { country: 'China', gold: 5, silver: 5, bronze: 2 },
    { country: 'Australia', gold: 5, silver: 4, bronze: 0 },
    { country: 'South Korea', gold: 5, silver: 3, bronze: 1 },
    { country: 'United States', gold: 3, silver: 3, bronze: 3 },
    { country: 'Great Birtain', gold: 2, silver: 5, bronze: 3 },
    { country: 'Italy', gold: 2, silver: 3, bronze: 3 },
    { country: 'Canada', gold: 5, silver: 5, bronze: 2 },
    { country: 'Hong Kong', gold: 2, silver: 0, bronze: 1 }
];

function displayMedalRankings() {
    const tableBody = document.querySelector('#medal-table tbody');
    medalRankings.forEach(ranking => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${ranking.country}</td>
            <td>${ranking.gold}</td>
            <td>${ranking.silver}</td>
            <td>${ranking.bronze}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Ensure the function runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', displayMedalRankings);



document.addEventListener('DOMContentLoaded', () => {
    const sportsSection = document.getElementById('sports');
    
    const sportsList = [
        { name: 'Basketball', id: 'sport1-schedule' },
        { name: 'Boxing', id: 'sport2-schedule' },
        { name: 'VolleyBall', id: 'sport3-schedule' },
        { name: 'Football', id: 'sport4-schedule' },
        { name: 'Golf', id: 'sport5-schedule ' }
    ];

    const newsUpdates = [
        'News 1: Artisic gymnastic: USA Basketball in house to watch as bile leads with big vault.',
        'News 2: Surfing: Competition called ON in Tahiti.',
        'News 3: Artisic gymnastics: Huge screams during introductions.'
    ];

    const newsList = document.getElementById('news-list');
    newsUpdates.forEach(news => {
        const listItem = document.createElement('li');
        listItem.textContent = news;
        newsList.appendChild(listItem);
    });

    
    const ul = document.createElement('ul');
    
    sportsList.forEach(sport => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#${sport.id}`;
        a.textContent = `${sport.name}`;
        li.appendChild(a);
        ul.appendChild(li);
    });
    
    sportsSection.appendChild(ul);
});




// function printMessage(){
//     document.getElementById('medalRankings').innerHTML='h';

// }

// document.addEventListener('DOMContentLoaded', function() {
//     // Sample data for medal rankings
//     const medalRankings = [

//        console.log('Hello world')
//     ];


//     const sportList=[
//         Basketball: 'h'
//     ]
// });


// let x =document.findElementBy(){

// }






