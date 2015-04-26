/**
 * Created by lookerson on 2015/4/26.
 */

var weapons_class = {
    create_new: function(name, aggressivity){
        var weapons = {};

        weapons.name = name;
        weapons.aggressivity = aggressivity;

        return weapons;
    }
};

exports.arms_class = arms_class;