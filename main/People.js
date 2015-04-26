/**
 * Created by lookerson on 2015/4/25.
 */

var weapons_module = require("./weapons.js");

var normal_people_class = {
    create_new : function(name, hp, aggressivity, role, weapons_name, weapons_aggressivity, armor){
        var normal_people = {};
        // 定义了人物的基本属性
        normal_people.name = name;
        normal_people.hp = hp;
        normal_people.aggressivity = aggressivity;

        normal_people.role = role;
        // 根据职业分类
        if (normal_people.role == "战士"){
            normal_people.weapons = weapons_module.weapons_class.create_new(weapons_name, weapons_aggressivity);
            normal_people.armor = armor;
        }
        if (normal_people.role == "普通人"){
            normal_people.weapons = weapons_module.weapons_class.create_new();
            normal_people.armor = 0;
        }

        normal_people.defense_against = function(damage_by_attacker){
            if (this.armor){
                damage_by_attacker -= this.armor;
            }

            this.hp -= damage_by_attacker;
            if (this.hp < 0){
                damage_by_attacker = this.hp + damage_by_attacker;
                this.hp = 0;
            }

            return this.name + "受到" + damage_by_attacker + "点伤害，" +
                    "剩余生命" + this.hp + "\n";
        };

        normal_people.attacker_info = function(){
            // 此函数模拟attacker向Defender攻击一次
            var fight_process_once = this.role + this.name + this.weapons.get_weapons_name();

            var damage_by_attack = this.aggressivity + this.weapons.get_aggressivity();

            return {
                'process' : fight_process_once + "攻击",
                'damage' : damage_by_attack
            };
        };

        normal_people.attack = function(defender){
            // 攻击
            var attacker_info_of_this_process = this.attacker_info();
            var fight_process_once = attacker_info_of_this_process['process'] +  defender.role + defender.get_name() + "，";

            // 防御
            fight_process_once += defender.defense_against(attacker_info_of_this_process['damage']);

            // 返回攻击过程
            return fight_process_once;
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

exports.normal_people_class = normal_people_class;