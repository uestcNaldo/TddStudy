/**
 * Created by lookerson on 2015/3/24.
 */

var assert = require("assert");
var War = require("../main/War");

describe('War', function(){
    it ("War.fight('张三', 20, 10, '李四', 20, 9)",function(){
        assert.equal(
            "张三胜利\n",
            War.fight('张三', 20, 10, '李四', 20, 9)
        );
    });
    it ("War.fight('李s', 20, 9, '张san', 20, 10)",function(){
        assert.equal(
            "张san胜利\n",
            War.fight('李s', 20, 9, '张san', 20, 10)
        );
    });
})