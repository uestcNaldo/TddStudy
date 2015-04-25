/**
 * Created by lookerson on 2015/3/24.
 */

var normal_people_class = {
    create_new : function(name, hp, aggressivity, job, arms_name, arms_aggressivity, armor){
        var normal_people = {};
        // 定义了人物的基本属性
        normal_people.name = name;
        normal_people.hp = hp;
        normal_people.aggressivity = aggressivity;
        normal_people.job = job;
        if (normal_people.job == "战士") {
            if (arms_name != null && arms_aggressivity != null) {
                normal_people.arms = {};
                normal_people.arms.name = arms_name;
                normal_people.arms.aggressivity = arms_aggressivity;
            }

            if (armor != null) {
                normal_people.armor = armor;
            }
        }

        normal_people.attack = function(defender){
            // 此函数模拟attacker向Defender攻击一次
            var fight_process_once = this.job + this.name;

            var damage_by_attack = this.aggressivity;

            if (this.job == "战士" && this.arms != null){
                damage_by_attack += this.arms.aggressivity;
                fight_process_once += ("用" + this.arms.name);
            }
            fight_process_once += "攻击";

            if (defender.job == "战士"  && defender.armor != null){
                damage_by_attack -= defender.armor;
            }
            fight_process_once += (defender.job + defender.name + "，");

            defender.hp -= damage_by_attack;
            if (defender.hp < 0){
                damage_by_attack = defender.hp + damage_by_attack;
                defender.hp = 0;
            }

            fight_process_once += (defender.name + "受到" + damage_by_attack + "点伤害，" +
                                        "剩余生命" + defender.hp + "\n");


            // 返回攻击过程
            return fight_process_once;
        };

        normal_people.is_dead = function(){
            var is_dead = false;

            if (this.hp == 0){
                is_dead = true;
            }

            return is_dead;
        };

        normal_people.get_name = function(){
            return this.name;
        };

        return normal_people;
    }
};

function fight(first_people, second_people){
            var fight_process = "";        // 存储战斗过程和战斗结果

            while (1){
                fight_process += first_people.attack(second_people);
                if (second_people.is_dead()){
                    fight_process += (first_people.get_name() + '胜利\n');
                    break;
                }

                fight_process += second_people.attack(first_people);
                if (first_people.is_dead()){
                    fight_process += (second_people.get_name() + '胜利\n');
                    break;
                }
    }

    return fight_process;
}

exports.fight = fight;
exports.normal_people_class = normal_people_class;