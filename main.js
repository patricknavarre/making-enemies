// Your code here.

const makeBoss = function (obj) {
  const newPlayer = {
    name: obj.name,
    attackDamage: obj.attackDamage,
    boss: true,
    level: obj.level,
    alive: obj.alive,
    hitPoints: obj.hitPoints
  }
  return newPlayer
}

const levelUp = function (obj) {
  const goUpALevel = {
    name: obj.name,
    attackDamage: obj.attackDamage,
    boss: obj.boss,
    level: obj.level + 1,
    alive: obj.alive,
    hitPoints: obj.hitPoints
  }
return goUpALevel
}

const buff = function (obj) {
  const buffedUp = {
    name: obj.name,
    attackDamage: obj.attackDamage + 15,
    boss: obj.boss,
    level: obj.level, 
    alive: obj.alive,
    hitPoints: obj.hitPoints
  }
return buffedUp
}

const makeSuper = function (obj) {
  const addSuper = {
    name: "Super " + obj.name,
    attackDamage: obj.attackDamage,
    boss: obj.boss,
    level: obj.level,
    alive: obj.alive,
    hitPoints: obj.hitPoints
  }
return addSuper
}

const hitEnemy = function (obj) {
  const loseHearts = {
    name: obj.name,
    attackDamage: obj.attackDamage,
    boss: obj.boss,
    level: obj.level,
    alive: obj.hitPoints - 10 > 0 ? true : false,
    hitPoints: obj.hitPoints - 10,
  } 
  return loseHearts
}

const beastMode = function (obj) {
  const beastNow = {
    name: "Super " + obj.name,
    attackDamage: obj.attackDamage + 15,
    boss: true,
    level: obj.level + 1,
    alive: obj.alive,
    hitPoints: obj.hitPoints,
  }
return beastNow
}



// Our code here. Don't touch!
if (typeof makeBoss === 'undefined') {
  makeBoss = undefined
}

if (typeof levelUp === 'undefined') {
  levelUp = undefined
}

if (typeof buff === 'undefined') {
  buff = undefined
}

if (typeof makeSuper === 'undefined') {
  makeSuper = undefined
}

if (typeof hitEnemy === 'undefined') {
  hitEnemy = undefined
}

if (typeof beastMode === 'undefined') {
  beastMode = undefined
}


module.exports = {
  makeBoss,
  levelUp,
  buff,
  makeSuper,
  hitEnemy,
  beastMode,
}
