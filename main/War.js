/**
 * Created by lookerson on 2015/3/24.
 */

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
