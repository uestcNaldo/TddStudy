/**
 * Created by lookerson on 2015/4/25.
 */

var assert = require("assert");
var people = require("../main/People");


describe('normal_people_class', function(){
    // 测试normal_people_class

    // 测试normal_people_class.attack()
    it (
        "Test a function: " +
        "There is two people." +
        "LiSi Hp 11, attack 20, role 普通人." +
        "ZhangSan Hp 20, attack 10, role 战士, arms_name 优质木棒, arms_aggressivity 3, armor 6." +
        "LiSi attack ZhangSan once." +
        "This function output this process",
        function(){
            var first_people = people.normal_people_class.create_new("LiSi", 11, 20, "普通人");
            var second_people = people.normal_people_class.create_new("ZhangSan", 20, 10, "战士", "优质木棒", 3, 6);
            assert.equal(
                "普通人LiSi攻击战士ZhangSan，ZhangSan受到14点伤害，剩余生命6\n",
                first_people.attack(second_people)
            );
        }
    );
    it (
        "Test a function: " +
        "There is two people." +
        "LiSi Hp 11, attack 20, role 战士, arms_name 圣剑, arms_aggressivity 10, armor 0." +
        "ZhangSan Hp 30, attack 10, role 战士, arms_name 优质木棒, arms_aggressivity 3, armor 0." +
        "LiSi attack ZhangSan once." +
        "This function ouput this process",
        function(){
            var first_people = people.normal_people_class.create_new("LiSi", 11, 20, "战士", "圣剑", 10, 0);
            var second_people = people.normal_people_class.create_new("ZhangSan", 30, 10, "战士", "优质木棒", 3, 0);
            assert.equal(
                "战士LiSi用圣剑攻击战士ZhangSan，ZhangSan受到30点伤害，剩余生命0\n",
                first_people.attack(second_people)
            )
        }
    );
    it(
        "Test a function: " +
        "There is two people." +
        "LiSi Hp 11, attack 20, role 战士, no arms, no armor." +
        "ZhangSan Hp 10, attack 10, role 普通人." +
        "LiSi attack ZhangSan once." +
        "This function output this process",
        function(){
            var first_people = people.normal_people_class.create_new("LiSi", 11, 20, "战士");
            var second_people = people.normal_people_class.create_new("ZhangSan", 10, 10, "普通人");
            assert.equal(
                "战士LiSi攻击普通人ZhangSan，ZhangSan受到10点伤害，剩余生命0\n",
                first_people.attack(second_people)
            )
        }
    );

    // 测试normal_people_class.is_dead()
    it(
        "Test a function: " +
        "This function to determine whether a person died." +
        "In this test, the people named 张三 and his hp is 0." +
        "The function should return true",
        function(){
            var mock_people = people.normal_people_class.create_new('张三', 0);
            assert.equal(true, mock_people.is_dead());
        }
    );

    it(
        "Test a function: " +
        "This function to determine whether a person died." +
        "In this test, the people named 张三 and his hp is 1." +
        "The function should return false",
        function(){
            var mock_people = people.normal_people_class.create_new('张三', 1);
            assert.equal(false, mock_people.is_dead());
        }
    );

    // 测试normal_people_class.get_name()
    it (
        "Test a function: " +
        "This function return the people name." +
        "Such as the people named 张三 and the get_name() return 张三",
        function(){
            var mock_people = people.normal_people_class.create_new('张三');
            assert.equal('张三', mock_people.get_name());
        }
    )
});