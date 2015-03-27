/**
 * Created by lookerson on 2015/3/24.
 */

function fight(FirstPeopleName, FirstPeopleHp, FirstPeopleAttack, SecondPeopleName, SecondPeopleHp, SecondPeopleAttack){
    var bFirstPeopleWin = true;   // 若1赢，则为true，若2赢，则返回false
    var FightProcess = "";        // 存储战斗过程和战斗结果

    while (1){
        var tempHpAndProcess;

        tempHpAndProcess = AttackerFightDefenderOnce(FirstPeopleName, FirstPeopleAttack, SecondPeopleName, SecondPeopleHp);
        SecondPeopleHp = tempHpAndProcess["DefenderHp"];
        FightProcess += tempHpAndProcess["FightProcess"];
        if (SecondPeopleHp == 0){
            bFirstPeopleWin = true;
            break;
        }

        tempHpAndProcess = AttackerFightDefenderOnce(SecondPeopleName, SecondPeopleAttack, FirstPeopleName, FirstPeopleHp);
        FirstPeopleHp = tempHpAndProcess["DefenderHp"];
        FightProcess += tempHpAndProcess["FightProcess"];
        if (FirstPeopleHp == 0){
            bFirstPeopleWin = false;
            break;
        }
    }

    // 根据输赢返回结果
    if (bFirstPeopleWin){
        return FightProcess + FirstPeopleName + '胜利\n';
    }
    else{
        return FightProcess + SecondPeopleName + '胜利\n';
    }
}

function AttackerFightDefenderOnce(AttackerName, AttackerAttack, DefenderName, DefenderHp){
    // Denferder受到攻击，HP减少
    DefenderHp -= AttackerAttack;
    if (DefenderHp < 0){
        DefenderHp = 0;
    }

    var process = AttackerName + "攻击" + DefenderName + "，" +
                    DefenderName + "受到" + AttackerAttack + "点伤害，" +
                    "剩余生命" + DefenderHp + "\n";

    // 返回攻击后，Defender的HP和攻击过程
    return {"DefenderHp" : DefenderHp, "FightProcess": process};
}

exports.fight = fight;