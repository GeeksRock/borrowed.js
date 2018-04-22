	var borrowed = {
  	php: {
    	ucwords: function (str) {
        var strArray = str.split(" "),
        		returnString = "";

        for (var s in strArray) {
           var stringToManipulate = strArray[s],
           		 letters = stringToManipulate.split('');       
           letters[0] = letters[0].toUpperCase();       
           
           returnString += letters.join("") + " ";
        }    
        return returnString.trim();
      },
      ucfirst: function (str) {
        var strArray = str.split(""),
        		returnString = "";

        strArray[0] = strArray[0].toUpperCase();   
        returnString = strArray.join("");

        return returnString;
      }
    },
    mySql: {
    	concat: function () {
        var args = arguments, 
            concatenation = "";
            
          for (var a = 0, arg; arg = args[a]; a++) {
            concatenation += arg.toString();
          }
          return concatenation;
      },
      updateWhere: function (objArr, prop, oldValue, newValue) {
      	//todo
      },
      selectFromWhere: function (objArr, prop, value) {
      	//todo
      }
    }
  };
