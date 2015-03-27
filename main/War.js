/**
 * Created by lookerson on 2015/3/24.
 */

var normal_people_class = {
    create_new : function(name, hp, attack){
        var normal_people = {};
        // 定义了人物的基本属性
        normal_people.name = name;
        normal_people.hp = hp;
        normal_people.attack = attack;

        normal_people.fight = function(defender){
            // 此函数模拟attacker向Defender攻击一次
            defender.hp -= normal_people.attack;
            if (defender.hp < 0){
                defender.hp = 0;
            }

            // 返回攻击过程
            return fight_process_once = normal_people.name + "攻击" + defender.name + "，" +
                                          defender.name + "受到" + normal_people.attack + "点伤害，" +
                                            "剩余生命" + defender.hp + "\n";

        };

        return normal_people;
    }
};

function fight(first_people, second_people){
    var fight_process = "";        // 存储战斗过程和战斗结果

    while (1){
        fight_process += first_people.fight(second_people);
        if (second_people.hp == 0){
            fight_process += (first_people.name + '胜利\n');
            break;
        }

        fight_process += second_people.fight(first_people);
        if (first_people.hp == 0){
            fight_process += (second_people.name + '胜利\n');
            break;
        }
    }

    return fight_process;
}

exports.fight = fight;
exports.normal_people_class = normal_people_class;