// Iterative Binary Search
function iBinarySearch(arr,val){
    var min = 0
    var max = arr.length - 1
    while(min <= max){
        mid = Math.floor((min + max) / 2)
        if(arr[mid] < val){
            min = mid + 1
        }
        else if(arr[mid] > val){
            max = mid - 1
        } else {
            return mid
        }
    }
    return false
};

// Recursive Binary Search
function rBinarySearch(arr,val,min = 0,max = arr.length - 1){
    if(max < min){
        return false
    } else {
        mid = findMidPoint(min,max)
        if(arr[mid] < val){
            return rBinarySearch(arr,val,mid + 1,max)
        } else if(arr[mid] > val){
            return rBinarySearch(arr,val,min,mid - 1)
        } else {
            return "Value Found at Index: " + mid
        }
    }
};

function findMidPoint(min,max){
    return Math.floor((min + max) / 2)
};