/**
 * Created by lookerson on 2015/3/24.
 */

var Attacker = {
    createNew : function(name, hp, attack){
        var attacker = {};
        // 定义了人物的基本属性
        attacker.Name = name;
        attacker.Hp = hp;
        attacker.Attack = attack;

        attacker.fight = function(Defender){
            // 此函数模拟attacker向Defender攻击一次
            Defender.Hp -= attacker.Attack;
            if (Defender.Hp < 0){
                Defender.Hp = 0;
            }

            // 记录攻击过程
            var process = attacker.Name + "攻击" + Defender.Name + "，" +
                            Defender.Name + "受到" + attacker.Attack + "点伤害，" +
                            "剩余生命" + Defender.Hp + "\n";

            return process;
        };

        return attacker;
    }
}

function fight(FirstPeople, SecondPeople){
    var bFirstPeopleWin = true;   // 若1赢，则为true，若2赢，则返回false
    var FightProcess = "";        // 存储战斗过程和战斗结果

    while (1){
        FightProcess += FirstPeople.fight(SecondPeople);
        if (SecondPeople.Hp == 0){
            bFirstPeopleWin = true;
            break;
        }

        FightProcess += SecondPeople.fight(FirstPeople);
        if (FirstPeople.Hp == 0){
            bFirstPeopleWin = false;
            break;
        }
    }

    // 根据输赢返回结果
    if (bFirstPeopleWin){
        return FightProcess + FirstPeople.Name + '胜利\n';
    }
    else{
        return FightProcess + SecondPeople.Name + '胜利\n';
    }
}

exports.fight = fight;
exports.Attacker = Attacker;