/**
 * Created by lookerson on 2015/4/25.
 */

var weapons_module = require("./weapons.js");
var armor_module = require("./armor.js");

var normal_people_class = {
    create_new : function(name, hp, aggressivity){
        var normal_people = {};
        normal_people.name = name;
        normal_people.hp = hp;
        normal_people.aggressivity = aggressivity;
        normal_people.role = "普通人";

        normal_people.calculate_hp = function(damage_by_attacker){
            this.hp -= (damage_by_attacker >= 0 ? damage_by_attacker : 0);
            if (this.hp < 0){
                damage_by_attacker = this.hp + damage_by_attacker;
                this.hp = 0;
            }

            return this.name + "受到" + damage_by_attacker + "点伤害，" +
                "剩余生命" + this.hp + "\n";
        };

        normal_people.defense_process = function(damage_by_attacker){
            return this.calculate_hp(damage_by_attacker);
        };

        normal_people.attack_process = function(){
            return {
                process : this.role + this.name + "攻击",
                damage : this.aggressivity
            };
        };

        normal_people.attack = function(defender){
            var info_of_attack_process = this.attack_process();
            var fight_process = info_of_attack_process.process + defender.role + defender.get_name() + "，";

            fight_process += defender.defense_process(info_of_attack_process.damage);

            return fight_process;
        };

        normal_people.is_dead = function() {
            return this.hp == 0;
        };

        normal_people.get_name = function(){
            return this.name;
        };

        return normal_people;
    }
};

var warrior_class = {
    create_new : function(name, hp, aggressivity, weapons_name, weapons_aggressivity, defense_value){
        var warrior = normal_people_class.create_new(name, hp, aggressivity);
        warrior.role = '战士';

        warrior.weapons = weapons_module.weapons_class.create_new(weapons_name, weapons_aggressivity);
        warrior.armor = armor_module.armor_class.create_new(defense_value);

        warrior.defense_process = function(damage_by_attacker){
            damage_by_attacker -= this.armor.get_defense_value();

            return this.calculate_hp(damage_by_attacker);
        };

        warrior.attack_process = function(){
            var fight_process_once = this.role + this.name + (this.weapons.get_is_use_weapons() ? "用" : "") + this.weapons.get_weapons_name();

            var damage_by_attack = this.aggressivity + this.weapons.get_aggressivity();

            return {
                'process' : fight_process_once + "攻击",
                'damage' : damage_by_attack
            };
        };

        return warrior;
    }
};

exports.normal_people_class = normal_people_class;
exports.warrior_class = warrior_class;