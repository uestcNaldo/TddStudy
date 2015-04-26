/**
 * Created by lookerson on 2015/4/25.
 */

var assert = require("assert");
var people = require("../main/People");


describe('normal_people_class', function(){
    it (
        "Test a function, it should return one attack process of two people. " +
        "LiSi attack 20, role 普通人." +
        "ZhangSan Hp 20, role 战士, armor 6.",
        function(){
            var first_people = people.normal_people_class.create_new("LiSi", 11, 20, "普通人");
            var second_people = people.normal_people_class.create_new("ZhangSan", 20, 10, "战士", "优质木棒", 3, 6);
            assert.equal(
                first_people.attack(second_people),
                "普通人LiSi攻击战士ZhangSan，ZhangSan受到14点伤害，剩余生命6\n"
            );
        }
    );
    it (
        "Test a function, it should return one attack process of two people. " +
        "LiSi attack 20, role 战士, arms_name 圣剑, arms_aggressivity 10." +
        "ZhangSan Hp 30, role 战士, armor 0.",
        function(){
            var first_people = people.normal_people_class.create_new("LiSi", 11, 20, "战士", "圣剑", 10, 0);
            var second_people = people.normal_people_class.create_new("ZhangSan", 30, 10, "战士", "优质木棒", 3, 0);
            assert.equal(
                first_people.attack(second_people),
                "战士LiSi用圣剑攻击战士ZhangSan，ZhangSan受到30点伤害，剩余生命0\n"
            )
        }
    );
    it(
        "Test a function, it should return one attack process of two people. " +
        "LiSi attack 20, role 战士, no arms, no armor." +
        "ZhangSan Hp 10, role 普通人.",
        function(){
            var first_people = people.normal_people_class.create_new("LiSi", 11, 20, "战士");
            var second_people = people.normal_people_class.create_new("ZhangSan", 10, 10, "普通人");
            assert.equal(
                first_people.attack(second_people),
                "战士LiSi攻击普通人ZhangSan，ZhangSan受到10点伤害，剩余生命0\n"
            )
        }
    );
});