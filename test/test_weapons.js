/**
 * Created by lookerson on 2015/4/26.
 */

var assert = require("assert");
var weapons = require("../main/weapons.js");

describe("weapons", function(){
    // 测试weapons_class

    // 测试weapons.get_aggressivity()
    it(
        "Test a function: " +
        "There is a weapons named 圣剑. It's aggressivity is 10" +
        "This function return it's aggressivity 10",
        function(){
            var mock_weapons = weapons.weapons_class.create_new('圣剑', 10);
            assert.equal(mock_weapons.get_aggressivity(), 10);
        }
    );
    it(
        "Test a function: " +
        "There is not weapons." +
        "If we get weapons aggressivity. it should return 0",
        function(){
            var mock_weapons = weapons.weapons_class.create_new();
            assert.equal(mock_weapons.get_aggressivity(), 0);
        }
    );

    // 测试weapons.get_weapons_name()
    it(
        "Test a function: " +
        "There is a weapons named 木棒." +
        "This function return it's name 用木棒.",
        function(){
            var mock_weapons = weapons.weapons_class.create_new('木棒');
            assert.equal(mock_weapons.get_weapons_name(), '用木棒');
        }
    );
    it(
        "Test a function: " +
        "There is not weapons." +
        "If we get weapons name, it should return ''",
        function(){
            var mock_weapons = weapons.weapons_class.create_new();
            assert.equal(mock_weapons.get_weapons_name(), '');
        }
    )
});