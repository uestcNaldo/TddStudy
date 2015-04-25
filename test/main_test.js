/**
 * Created by lookerson on 2015/3/24.
 */

var assert = require("assert");
var War = require("../main/War");


describe('War', function(){
    // 测试War.fight()函数
    it (
        "Test a function: " +
        "There is two people." +
        "张三 HP 20, aggressivity 10, job 战士, arms_name 优质木棒, arms_aggressivity 3, armor null." +
        "李四 HP 20, attack 9, job 普通人" +
        "They took turns to attack." +
        "This function output the process and result of fight.",
        function(){
            // 模拟first_people
            var first_people = new Object();
            first_people.count = 0;
            first_people.fight_process = [];
            first_people.fight_process[0] = "战士张三用优质木棒攻击普通人李四，李四受到13点伤害，剩余生命7\n";
            first_people.fight_process[1] = "战士张三用优质木棒攻击普通人李四，李四受到7点伤害，剩余生命0\n";
            first_people.attack = function () {
                return this.fight_process[this.count++];
            };
            first_people.is_dead = function () {
                return false;
            };
            first_people.get_name = function () {
                return "张三";
            };


            // 模拟second_people
            var second_people = new Object();
            second_people.count = 0;
            second_people.fight_process = [];
            second_people.fight_process[0] = "普通人李四攻击张三，张三受到9点伤害，剩余生命11\n";
            second_people.attack = function(){
                return this.fight_process[this.count++];
            };
            second_people.is_dead = function () {
                if (this.count == 1){
                    return true;
                }
                else{
                    return false;
                }
            };

            // 测试
           assert.equal(
                "战士张三用优质木棒攻击普通人李四，李四受到13点伤害，剩余生命7\n" +
                "普通人李四攻击张三，张三受到9点伤害，剩余生命11\n" +
                "战士张三用优质木棒攻击普通人李四，李四受到7点伤害，剩余生命0\n" +
                "张三胜利\n",
                War.fight(first_people, second_people)
            );
        }
    );

    it (
        "Test a function: " +
        "There is two people." +
        "李s HP 20, attack 9, job 普通人." +
        "张san HP 20, attack 10, job 战士, arms_name XX剑, arms_aggressivity 6, armor 6." +
        "They took turns to attack." +
        "This function output the process and result of fight.",
        function(){
            // 模拟first_people
            var first_people = new Object();
            first_people.count = 0;
            first_people.fight_process = [];
            first_people.fight_process[0] = "普通人李s攻击战士张san，张san受到3点伤害，剩余生命17\n";
            first_people.fight_process[1] = "普通人李s攻击战士张san，张san受到3点伤害，剩余生命14\n";
            first_people.attack = function () {
                return this.fight_process[this.count++];
            };
            first_people.is_dead = function () {
                if (this.count == 2){
                    return true;
                }
                else {
                    return false;
                }
            };

            // 模拟second_people
            var second_people = new Object();
            second_people.count  = 0;
            second_people.fight_process = [];
            second_people.fight_process[0] = "战士张san用XX剑攻击普通人李s，李s受到16点伤害，剩余生命4\n";
            second_people.fight_process[1] = "战士张san用XX剑攻击普通人李s，李s受到4点伤害，剩余生命0\n";
            second_people.attack = function () {
                return this.fight_process[this.count++];
            };
            second_people.is_dead = function () {
                return false;
            };
            second_people.get_name = function () {
                return "张san";
            };

            // 测试
            assert.equal(
                "普通人李s攻击战士张san，张san受到3点伤害，剩余生命17\n" +
                "战士张san用XX剑攻击普通人李s，李s受到16点伤害，剩余生命4\n" +
                "普通人李s攻击战士张san，张san受到3点伤害，剩余生命14\n" +
                "战士张san用XX剑攻击普通人李s，李s受到4点伤害，剩余生命0\n" +
                "张san胜利\n",
                War.fight(first_people, second_people)
            );
        }
    );

    // 测试War.normal_people_class.attack()函数
    it (
        "Test a function: " +
        "There is two people." +
        "ZhangSan Hp 20, attack 10, job 战士, arms_name 优质木棒, arms_aggressivity 3, armor 6." +
        "LiSi Hp 10, attack 20, job 普通人." +
        "ZhangSan attack LiSi once." +
        "This function output this process",
        function(){
            first_people = War.normal_people_class.create_new('ZhangSan', 20, 10, "战士", "优质木棒", 3, 6);
            second_people = War.normal_people_class.create_new('LiSi', 10, 20, "普通人");
            assert.equal(
                "战士ZhangSan用优质木棒攻击普通人LiSi，LiSi受到10点伤害，剩余生命0\n",
                first_people.attack(second_people)
            );
        }
    );

    it (
        "Test a function: " +
        "There is two people." +
        "LiSi Hp 11, attack 20, job 普通人." +
        "ZhangSan Hp 20, attack 10, job 战士, arms_name 优质木棒, arms_aggressivity 3, armor 6." +
        "LiSi attack ZhangSan once." +
        "This function output this process",
        function(){
            first_people = War.normal_people_class.create_new('LiSi', 15, 20, "普通人");
            second_people = War.normal_people_class.create_new('ZhangSan', 20, 10, "战士", "优质木棒", 3, 6);
            assert.equal(
                "普通人LiSi攻击战士ZhangSan，ZhangSan受到14点伤害，剩余生命6\n",
                first_people.attack(second_people)
            );
        }
    );

    it (
        "Test a function: " +
        "This fucntion return the people name." +
        "Such as 张三",
        function(){
            people = War.normal_people_class.create_new(name='张三');
            assert.equal('张三',people. get_name());
        }
    )
})