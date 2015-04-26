/**
 * Created by lookerson on 2015/4/26.
 */

var weapons_class = {
    create_new : function(name, aggressivity){
        var weapons = {};

        weapons.name = name;
        weapons.aggressivity = aggressivity;

        weapons.get_aggressivity = function (){
            if (this.aggressivity){
                return this.aggressivity;
            }

            return 0;
        };

        weapons.get_is_use_weapons = function(){
            if (this.name){
                return '用';
            }
            return '';
        };

        weapons.get_weapons_name = function (){
            if (this.name){
                return this.name;
            }

            return "";
        };

        return weapons;
    }
};

exports.weapons_class = weapons_class;