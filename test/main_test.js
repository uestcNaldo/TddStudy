/**
 * Created by lookerson on 2015/3/24.
 */

var assert = require("assert");
var War = require("../main/War");

function make_mock_person (name, hp, aggerssivity) {
    var mock_person = new Object();
    mock_person.name = name;
    mock_person.hp = hp;
    mock_person.aggerssivity = aggerssivity;
    mock_person.count = 0;      // 记录第几次调用attack函数

    return mock_person;
}

describe('War', function(){
    // 测试War.fight()函数
    it (
        "Test a function: " +
        "There is two people." +
        "张三 HP 20, attack 10." +
        "李四 HP 20, attack 9." +
        "They took turns to attack." +
        "This function output the process and result of fight.",
        function(){
            // 模拟first_people
            var first_people = make_mock_person("张三", 20, 10);
            first_people.attack = function () {
                first_people.count ++;
                switch (first_people.count){
                    case 1:{
                        return "张三攻击李四，李四受到10点伤害，剩余生命10\n";
                    }
                    case 2:{
                        return "张三攻击李四，李四受到10点伤害，剩余生命0\n";
                    }
                    default :{
                        return;
                    }
                }
            }
            first_people.is_dead = function () {
                return false;
            }


            // 模拟second_people
            var second_people = make_mock_person("李四", 20, 9);
            second_people.attack = function(){
                second_people.count ++;
                switch (second_people.count){
                    case 1:{
                        return "李四攻击张三，张三受到9点伤害，剩余生命11\n"
                    }
                    default:{
                        return;
                    }
                }
            }
            second_people.is_dead = function () {
                if (second_people.count == 1){
                    return true;
                }
                else{
                    return false;
                }
            }

            // 测试
           assert.equal(
                "张三攻击李四，李四受到10点伤害，剩余生命10\n" +
                "李四攻击张三，张三受到9点伤害，剩余生命11\n" +
                "张三攻击李四，李四受到10点伤害，剩余生命0\n" +
                "张三胜利\n",
                War.fight(first_people, second_people)
            );
        }
    );

    it (
        "Test a function: " +
        "There is two people." +
        "李s HP 20, attack 9." +
        "张san HP 20, attack 10." +
        "They took turns to attack." +
        "This function output the process and result of fight.",
        function(){
            // 模拟first_people
            var first_people = make_mock_person("李s", 20, 9);
            first_people.attack = function () {
                first_people.count ++;
                switch (first_people.count){
                    case 1:{
                        return "李s攻击张san，张san受到9点伤害，剩余生命11\n";
                    }
                    case 2:{
                        return "李s攻击张san，张san受到9点伤害，剩余生命2\n";
                    }
                    default:{
                        return;
                    }
                }
            }
            first_people.is_dead = function () {
                if (first_people.count == 2){
                    return true;
                }
                else {
                    return false;
                }
            }

            // 模拟second_people
            var second_people = make_mock_person("张san", 20, 10);
            second_people.attack = function () {
                second_people.count ++;
                switch (second_people.count) {
                    case 1:{
                        return "张san攻击李s，李s受到10点伤害，剩余生命10\n";
                    }
                    case 2:{
                        return "张san攻击李s，李s受到10点伤害，剩余生命0\n";
                    }
                    default :{
                        return;
                    }
                }
            }
            second_people.is_dead = function () {
                return false;
            }

            // 测试
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

    // 测试War.normal_people_class.attack()函数
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
                first_people.attack(second_people)
            );
        }
    );
})