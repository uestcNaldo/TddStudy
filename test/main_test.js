/**
 * Created by lookerson on 2015/3/24.
 */

var assert = require("assert");
var War = require("../main/War");

describe('War', function(){
    it ("Test a function: " +
        "There is two people." +
        "张三 HP 20, attack 10." +
        "李四 HP 20, attack 9." +
        "They took turns to attack." +
        "This function output the process and result of fight.",
        function(){
        first_people = War.normal_people_class.create_new('张三', 20, 10);
        second_people = War.normal_people_class.create_new('李四', 20, 9);
        assert.equal(
            "张三攻击李四，李四受到10点伤害，剩余生命10\n" +
            "李四攻击张三，张三受到9点伤害，剩余生命11\n" +
            "张三攻击李四，李四受到10点伤害，剩余生命0\n" +
            "张三胜利\n",
            War.fight(first_people, second_people)
        );
    });
    it (
        "Test a function: " +
        "There is two people." +
        "李s HP 20, attack 9." +
        "张san HP 20, attack 10." +
        "They took turns to attack." +
        "This function output the process and result of fight.",
        function(){
            first_people = War.normal_people_class.create_new('李s', 20, 9);
            second_people = War.normal_people_class.create_new('张san', 20, 10);
        assert.equal(
            "李s攻击张san，张san受到9点伤害，剩余生命11\n" +
            "张san攻击李s，李s受到10点伤害，剩余生命10\n" +
            "李s攻击张san，张san受到9点伤害，剩余生命2\n" +
            "张san攻击李s，李s受到10点伤害，剩余生命0\n" +
            "张san胜利\n",
            War.fight(first_people, second_people)
        );
        }
    );

    it (
        "Test a function: " +
        "There is two people." +
        "ZhangSan Hp 20, attack 10." +
        "LiSi Hp 11, attack 20." +
        "ZhangSan attack LiSi once." +
        "This function output this process",
        function(){
            first_people = War.normal_people_class.create_new('ZhangSan', 20, 10);
            second_people = War.normal_people_class.create_new('LiSi', 11, 20);
            assert.equal(
                "ZhangSan攻击LiSi，LiSi受到10点伤害，剩余生命1\n",
                first_people.fight_once(second_people)
            );
        }
    )
})