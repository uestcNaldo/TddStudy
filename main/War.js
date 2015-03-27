/**
 * Created by lookerson on 2015/3/24.
 */

var Attacker = {
    create_new : function(name, hp, attack){
        var attacker = {};
        // 定义了人物的基本属性
        attacker.name = name;
        attacker.hp = hp;
        attacker.attack = attack;

        attacker.fight = function(defender){
            // 此函数模拟attacker向Defender攻击一次
            defender.hp -= attacker.attack;
            if (defender.hp < 0){
                defender.hp = 0;
            }

            // 记录攻击过程
            var fight_process_once = attacker.name + "攻击" + defender.name + "，" +
                                        defender.name + "受到" + attacker.attack + "点伤害，" +
                                            "剩余生命" + defender.hp + "\n";

            return fight_process_once;
        };

        return attacker;
    }
}

function fight(first_people, second_people){
    var first_people_win = true;   // 若1赢，则为true，若2赢，则返回false
    var fight_process = "";        // 存储战斗过程和战斗结果

    while (1){
        fight_process += first_people.fight(second_people);
        if (second_people.hp == 0){
            first_people_win = true;
            break;
        }

        fight_process += second_people.fight(first_people);
        if (first_people.hp == 0){
            first_people_win = false;
            break;
        }
    }

    // 根据输赢返回结果
    if (first_people_win){
        return fight_process + first_people.name + '胜利\n';
    }
    else{
        return fight_process + second_people.name + '胜利\n';
    }
}

exports.fight = fight;
exports.Attacker = Attacker;