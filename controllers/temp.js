$scope.getTable = function (arr) {
        var result = [];
        var groups = [2, 8, 8, 8, 8, 8, 8, 8, 8];
        var count = 0;

        for (var gi = 0; gi < groups.length; gi++) {
            var ret = [];
            var group = groups[gi];

            for (var ggi = 0; ggi < group; ggi++) {
                if (!arr[count]) {
                    result.push(ret);
                    return result;
                }
                ret.push(arr[count]);
                count++;
            }

            for (var ggj = group; ggj < 8; ggj++) {
                if (!arr[count]) {
                    result.push(ret);
                    return result;
                }
                ret.push(null);
                //count++;
            }

            if (gi == 0) { //shifts helium to the end spectrum
                ret[ret.length - 1] = arr[1];
                ret[1] = null;
            }
            result.push(ret);
        }
        return result;
}

// $scope.getTable = function (arr) {
//     var ret = [];
//     var groups = [2, 8, 8, 8, 8, 8, 8, 8, 8];
//     var count = 0;
//
//     for var(var i = 0; i < groups.length; i++){
//         var result = [];
//         var group = groups[i];
//
//         for(var j = 0; j < group; j++){
//             if (!arr[count]){
//                 ret.push(result);
//                 return ret;
//             }
//             result.push(arr[count]);
//             count++;
//         }
//
//         for (var k=0; k < 8; k++){
//             if (!arr[count]){
//                 ret.push(result);
//                 return ret;
//             }
//             result.push(null);
//         }
//     if (i == 0){
//         result[result.length - 1] = arr[1];
//         result[1] = null;
//     }
//     return ret;
// }