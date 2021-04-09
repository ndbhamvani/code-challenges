/* Create a function that returns the name of the winner in a fight between two fighters.
Each fighter takes turns attacking the other and whoever kills the other first is victorious.
Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.
Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0.
You can mutate the Fighter objects.

Example:
function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}
*/

function declareWinner(f1, f2, attacker) {

  while (f1.health > 0 && f2.health > 0) {
    attacker === f1.name ? (f2.health -= f1.damagePerAttack, attacker = f2.name)
    : (f1.health -= f2.damagePerAttack, attacker = f1.name)
  }

  return f1.health > 0 ? f1.name : f2.name
}
