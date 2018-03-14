// DO WHATEVER YOU WANT HERE
/////////////////////////////////////////////////

const createEnumerableProperty = (propertyName) => {
    Object.defineProperty(Object.prototype, propertyName, { 
        __proto__: null,      
        enumerable: true,
        writable: true,   
        configurable: true           
    });
    return propertyName;
};

/////////////////////////////////////////////////

const createNotEnumerableProperty = function(propertyName){  
    var propValue;  
    Object.defineProperty(Object.prototype, propertyName, {         
        configurable: true,     
        get: () => {return propValue;},
        set: (newValue) => {propValue = newValue;}                
    });   
    return propertyName;
};

/////////////////////////////////////////////////

const createProtoMagicObject = () => { 
    var myFunc = new Function;
    myFunc.prototype = Function.prototype;
    return myFunc;
};

///////////////////////////////////////////

var count1 = 0;
const incrementor = () => {
    count1++;
    return incrementor;       
};
incrementor.valueOf = () => count1;

//////////////////////////////////////////

var count2 = 0;
const asyncIncrementor = async() => {
    count2++;
    return asyncIncrementor;
};
asyncIncrementor.valueOf = () => count2;

//////////////////////////////////////////

function* createIncrementer() {
    var count = 1;
    while(count < 20)
      yield count++;
}

///////////////////////////////////////////

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = () => {};


exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
