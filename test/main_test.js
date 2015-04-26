/**
 * Created by lookerson on 2015/3/24.
 */

var assert = require("assert");
var War = require("../main/War");


describe('War', function(){
    it (
        "Test a function: " +
        "There is two people." +
        "张三 HP 20, aggressivity 10, role 战士, arms_name 优质木棒, arms_aggressivity 3, armor null." +
        "李四 HP 20, attack 9, role 普通人" +
        "They took turns to attack." +
        "This function output the process and result of fight.",
        function(){
            var first_people = {};
            first_people.count = 0;
            first_people.fight_process = ["战士张三用优质木棒攻击普通人李四，李四受到13点伤害，剩余生命7\n",
                "战士张三用优质木棒攻击普通人李四，李四受到7点伤害，剩余生命0\n"];
            first_people.attack = function () {
                return this.fight_process[this.count++];
            };
            first_people.is_dead = function () {
                return false;
            };
            first_people.get_name = function () {
                return "张三";
            };


            var second_people = {};
            second_people.count = 0;
            second_people.fight_process = ["普通人李四攻击张三，张三受到9点伤害，剩余生命11\n"];
            second_people.attack = function(){
                return this.fight_process[this.count++];
            };
            second_people.is_dead = function () {
                return (this.count == 1);
            };

           assert.equal(
                War.fight(first_people, second_people),
               "战士张三用优质木棒攻击普通人李四，李四受到13点伤害，剩余生命7\n" +
               "普通人李四攻击张三，张三受到9点伤害，剩余生命11\n" +
               "战士张三用优质木棒攻击普通人李四，李四受到7点伤害，剩余生命0\n" +
               "张三胜利\n"
            );
        }
    );

    it (
        "Test a function: " +
        "There is two people." +
        "李s HP 20, attack 9, role 普通人." +
        "张san HP 20, attack 10, role 战士, arms_name XX剑, arms_aggressivity 6, armor 6." +
        "They took turns to attack." +
        "This function output the process and result of fight.",
        function(){
            var first_people = {};
            first_people.count = 0;
            first_people.fight_process = ["普通人李s攻击战士张san，张san受到3点伤害，剩余生命17\n",
                "普通人李s攻击战士张san，张san受到3点伤害，剩余生命14\n"];
            first_people.attack = function () {
                return this.fight_process[this.count++];
            };
            first_people.is_dead = function () {
                return (this.count == 2);
            };

            var second_people = {};
            second_people.count  = 0;
            second_people.fight_process = ["战士张san用XX剑攻击普通人李s，李s受到16点伤害，剩余生命4\n",
                "战士张san用XX剑攻击普通人李s，李s受到4点伤害，剩余生命0\n"];
            second_people.attack = function () {
                return this.fight_process[this.count++];
            };
            second_people.is_dead = function () {
                return false;
            };
            second_people.get_name = function () {
                return "张san";
            };
            
            assert.equal(
                War.fight(first_people, second_people),
                "普通人李s攻击战士张san，张san受到3点伤害，剩余生命17\n" +
                "战士张san用XX剑攻击普通人李s，李s受到16点伤害，剩余生命4\n" +
                "普通人李s攻击战士张san，张san受到3点伤害，剩余生命14\n" +
                "战士张san用XX剑攻击普通人李s，李s受到4点伤害，剩余生命0\n" +
                "张san胜利\n"
            );
        }
    );
});