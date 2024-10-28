// Your code here!
  const ryu = {
    name: "Ryu",
    health: 100,
    attackSkill: "punch",
    attackDamage: 16,
    attack: function(target) {
      target.health -= this.attackDamage;
      if (target.health <= 0) {
        target.health = 0;
        console.log(`${this.name} attacked ${target.name} with a ${this.attackSkill}, inflicting ${this.attackDamage} damage. ${target.name} has been defeated.`);
      } else {
        console.log(`${this.name} attacked ${target.name} with a ${this.attackSkill}, inflicting ${this.attackDamage} damage. ${target.name}'s health is now ${target.health}.`);
      }
    }
  };
  
  const ken = {
    name: "Ken",
    health: 100,
    attackSkill: "flying kick",
    attackDamage: 24,
    attack: function(target) {
      target.health -= this.attackDamage;
      if (target.health <= 0) {
        target.health = 0;
        console.log(`${this.name} attacked ${target.name} with a ${this.attackSkill}, inflicting ${this.attackDamage} damage. ${target.name} has been defeated.`);
      } else {
        console.log(`${this.name} attacked ${target.name} with a ${this.attackSkill}, inflicting ${this.attackDamage} damage. ${target.name}'s health is now ${target.health}.`);
      }
    }
  };
  
  ryu.attack(ken); 
  ken.attack(ryu); 
  ken.attack(ryu); 
  ken.attack(ryu); 
  ken.attack(ryu); 