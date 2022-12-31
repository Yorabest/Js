

// const temps = [18, 14, 12, 21, 17, 29, 24];

// // const lowest = Math.min(...temps);
// // const hight = Math.max();

// const a = [{ x: 1 },
// { y: 2 },
// { z: 3 }
// ];

// const b = [...a];

// console.log('a: ', a);
// console.log('b: ', b);

// const lastWeekTemps = [1, 2, 3];
//   const currentTemps = [4, 5, 6];
//   const nextWeekTemps = [7, 8, 9];
  
//  const allTemps = lastWeekTemps.concat( currentTemps, nextWeekTemps) ;
//   console.log(allTemps);

// const allTemps2 = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
//   console.log(allTemps2);


//   const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: false },
//     { name: 'Ajax', online: false },
//   ];

//   const getFriendsByStatus = function (allFriends) {
//     const friendByStat = {
//     onlineFriends: [],
//     offlineFriends: [],
//     }
    
//     for (const friend of allFriends) {
//       if (friend.online) {
//         friendByStat.onlineFriends.push(friend.name);
//       } else {
//         friendByStat.offlineFriends.push(friend.name)
//       }
//     }

//     return friendByStat;
//   };
  
  
  // console.log(getFriendsByStatus(friends));

//   const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];

// const upatedPlayers = players.map(function ({points}) {
//   return points * 1.1
// })

// console.log(upatedPlayers);

// const linkRef = document.querySelector('.site-nav__link[href="/portfolio"]');
// console.log(linkRef.href = '/ddd');
const form = document.querySelector('.js-register-form');

form.addEventListener('submit', (event)=>{
    event.preventDefault();

    
    console.log('Submit');
})