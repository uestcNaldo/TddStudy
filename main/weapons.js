/**
 * Created by lookerson on 2015/4/26.
 */

var weapons_class = {
    create_new : function(name, aggressivity){
        var weapons = {};

        weapons.name = (name == undefined ? "" : name);
        weapons.aggressivity = (aggressivity == undefined ? 0 : aggressivity);

        weapons.get_aggressivity = function (){
            return this.aggressivity;
        };

        weapons.get_weapons_name = function () {
            return this.name;
        };

        weapons.get_is_use_weapons = function(){
            return (this.name != "");
        };

        return weapons;
    }
};

exports.weapons_class = weapons_class;