/**
 * Created by lookerson on 2015/4/26.
 */

var weapons_class = {
    create_new : function(name, aggressivity){
        var weapons = {};

        weapons.name = name;
        weapons.aggressivity = aggressivity;

        // 得到武器的攻击力
        weapons.get_aggressivity = function (){
            if (this.aggressivity){
                return this.aggressivity;
            }

            return 0;
        };

        // 得到使用什么武器
        weapons.get_weapons_name = function (){
            if (this.name){
                return '用' + this.name;
            }

            return "";
        };

        return weapons;
    }
};

exports.weapons_class = weapons_class;