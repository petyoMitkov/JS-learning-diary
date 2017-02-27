let appOrderRectangles = function(inputArr) {
    function createRect(width, height) {
        let rect = {
            width: width,
            height: height,
            area: () => rect.width * rect.height,
            compareTo: function(other) {
                let result = other.area() - rect.area();
                //rect.area() - other.area();
                return result || (other.width - rect.width);
            }
        };
        return rect;
    }

    function orderRect(rectData) {
        let rects = [];
        for (let [width, height] of rectData) {
            let rect = createRect(width, height);
            rects.push(rect); 
        }
        rects.sort((a, b) => a.compareTo(b));
        return rects;
    }

    function printResult(arr) {
        let result = "["; 
        for (let index in arr) {
            result += "[" + arr[index].width + ", " + arr[index].height + "]";
            if (index < arr.length - 1) {
                result += ", ";
            }
        }
        result += "]";
        return result;
    }

    let sortedArrOfObj = orderRect(inputArr);
    console.log("Sorted Arr = " + printResult(sortedArrOfObj)); 
    return sortedArrOfObj;
};

appOrderRectangles([[5,5],[50, 7], [1, 3], [10, 5], [5, 10]]);
