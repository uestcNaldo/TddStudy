/**
 * Created by lookerson on 2015/3/24.
 */

function fight(FirstPeopleName, FirstPeopleHp, FirstPeopleAttack, SecondPeopleName, SecondPeopleHp, SecondPeopleAttack){
    var bFirstPeopleWin = true;   // 若1赢，则为true，若2赢，则返回false

    while (1){
        SecondPeopleHp -= FirstPeopleAttack;
        if (SecondPeopleHp == 0){
            bFirstPeopleWin = true;
            break;
        }

        FirstPeopleHp -= SecondPeopleAttack;
        if (FirstPeopleHp == 0){
            bFirstPeopleWin = false;
            break;
        }
    }

    // 根据输赢返回结果
    if (bFirstPeopleWin){
        return  FirstPeopleName + '胜利\n';
    }
    else{
        return SecondPeopleName + '胜利\n';
    }
}

exports.fight = fight;