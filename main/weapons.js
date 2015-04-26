/**
 * Created by lookerson on 2015/4/26.
 */

var arms_class = {
    create_new: function(name, aggressivity){
        var arms = {};

        arms.name = name;
        arms.aggressivity = aggressivity;

        return arms;
    }
};

exports.arms_class = arms_class;