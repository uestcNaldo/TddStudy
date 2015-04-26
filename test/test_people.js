/**
 * Created by lookerson on 2015/4/25.
 */

var assert = require("assert");
var people = require("../main/People");


describe('normal_people_class', function(){
    it (
        "Test a function, it should return one attack process of two people. " +
        "LiSi 普通人 attack 20.." +
        "ZhangSan 战士 Hp 20, armor 6.",
        function(){
            var first_people = people.normal_people_class.create_new("LiSi", 11, 20);
            var second_people = people.warrior_class.create_new("ZhangSan", 20, 10, "优质木棒", 3, 6);
            assert.equal(
                first_people.attack(second_people),
                "普通人LiSi攻击战士ZhangSan，ZhangSan受到14点伤害，剩余生命6\n"
            );
        }
    );
    it (
        "Test a function, it should return one attack process of two people. " +
        "LiSi 战士 attack 20, arms_name 圣剑, arms_aggressivity 10." +
        "ZhangSan 战士 Hp 30, armor 0.",
        function(){
            var first_people = people.warrior_class.create_new("LiSi", 11, 20, "圣剑", 10, 0);
            var second_people = people.warrior_class.create_new("ZhangSan", 30, 10, "优质木棒", 3, 0);
            assert.equal(
                first_people.attack(second_people),
                "战士LiSi用圣剑攻击战士ZhangSan，ZhangSan受到30点伤害，剩余生命0\n"
            )
        }
    );
    it(
        "Test a function, it should return one attack process of two people. " +
        "LiSi 战士 attack 20, role 战士, no arms, no armor." +
        "ZhangSan 普通人 Hp 10.",
        function(){
            var first_people = people.warrior_class.create_new("LiSi", 11, 20);
            var second_people = people.normal_people_class.create_new("ZhangSan", 10, 10);
            assert.equal(
                first_people.attack(second_people),
                "战士LiSi攻击普通人ZhangSan，ZhangSan受到10点伤害，剩余生命0\n"
            )
        }
    );
});