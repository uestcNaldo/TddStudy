/**
 * Created by lookerson on 2015/3/24.
 */

function fight_people_once(attacker, defender) {
    var fight_process = attacker.attack(defender);

    var is_win = false;
    if (defender.is_dead()) {
        fight_process += ( attacker.get_name() + '胜利\n');
        is_win = true;
    }

    return {
        "process" :fight_process,
        "result" :is_win
    }
}

function fight(first_people, second_people){
    var fight_process = "";
    var one_people_win = false;

    var attacker = first_people;
    var defender = second_people;

    do{
        var process_and_result  = fight_people_once(attacker, defender);
        fight_process += process_and_result['process'];
        one_people_win = process_and_result['result'];

        var temp_people = attacker;
        attacker = defender;
        defender = temp_people;

    }while (!one_people_win);

    return fight_process;
}

exports.fight = fight;
