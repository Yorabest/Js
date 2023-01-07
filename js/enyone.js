

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
// console.log(linkRef.h

// function Client(name, surname, data) {
//   this.name = name;
//   this.surname = surname;
//   this.data = data
// };

// Client.prototype.changeData = function (newData) {
//   this.data = newData
// };

// Client.prototype.showName = function () {
//  this.name;
// }

// const AliseBlack = new Client('Alise',' Bleck', '02.05.22')
// const RintaroBlack = new Client('Rintaro',' Bleck', '02.05.22')

// console.log(AliseBlack);
// console.log(RintaroBlack);

// class Costumer {
//   constructor(name, surname, data){
//  this._name = name;
//   this.surname = surname;
//   this._data = data
//   }

//   get name(){
//     this._name
//   }

//   set data(newData){
//      this._data = newData
//   }
// }

// const RoseHoll = new Costumer('Rose', 'Holl', '05.09.21');
// const HugoPunch = new Costumer('Hugo', 'Punch', '01.04.20');

// console.log(RoseHoll);
// console.log(HugoPunch);

