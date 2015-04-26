/**
 * Created by lookerson on 2015/4/26.
 */

var armor_class = {
    create_new : function(defense_value){
        var armor = {};

        armor.defense_value = (defense_value ? defense_value : 0);

        armor.get_defense_value = function(){
            return this.defense_value;
        }

        return armor;
    }
};

exports.armor_class = armor_class;