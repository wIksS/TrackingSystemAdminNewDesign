/**
 * Created by Виктор on 28.9.2014 г..
 */

publicApp.factory('notifier', ['toastr', function (toastr) {
    return{
        success:function(msg){
            toastr.success(msg);
        },
        error:function(msg){
            toastr.error(msg);
        }
    }
}]);