/**
 * Created by lookerson on 2015/3/24.
 */

var assert = require("assert");
var War = require("../main/War");

describe('War', function(){
    it ("Test a function.This function is simulation of the two attackers fight process.",
        function(){
        assert.equal(
            "张三攻击李四，李四受到10点伤害，剩余生命10\n" +
            "李四攻击张三，张三受到9点伤害，剩余生命11\n" +
            "张三攻击李四，李四受到10点伤害，剩余生命0\n" +
            "张三胜利\n",
            War.fight('张三', 20, 10, '李四', 20, 9)
        );
    });
    it ("Test a function.This function is simulation of the two attackers fight process.",
        function(){
        assert.equal(
            "李s攻击张san，张san受到9点伤害，剩余生命11\n" +
            "张san攻击李s，李s受到10点伤害，剩余生命10\n" +
            "李s攻击张san，张san受到9点伤害，剩余生命2\n" +
            "张san攻击李s，李s受到10点伤害，剩余生命0\n" +
            "张san胜利\n",
            War.fight('李s', 20, 9, '张san', 20, 10)
        );
    });
})