;(function(){
	var Man = {
		constructor: function(name, age){
			this.name = name,
			this.age = age,
			this.live = function(){
				console.log("live...");
			}
			return this;
		}
	};

	var Student = Object.create(Man);

	Student.constructor = function(name, age){
		Man.constructor.apply(this, arguments);
		this.study = function(){
			console.log("study...");	
		};
		return this;
	};

	var duckType = (
		function(){
			function getObjectType(obj){
				if( (typeof(obj) === "object") && (obj instanceof Object)){
					if (obj.hasOwnProperty("study")){
						console.log("Function \"duckType\" says \"Input object type is Student\"");
						return;
					}	 
					console.log("Function \"duckType\" says \"Input object type is Man\"");
				} 
				else{
					console.log("Function \"duckType\" says \"Unknown input object type\"");
				}	
			}
			return{
				getType: getObjectType
			};
		})();
	
	var student = Object.create(Student).constructor("Alex", "20");
	var man = Object.create(Man).constructor("Bob", "30");
	var unknown = null;
	
	duckType.getType(man);	
})();
