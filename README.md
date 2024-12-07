step1: 
	用axios初始化api.jsx，baseUrl是"http://local:8080/parking"，里面可以call三个api，分别是
	name: getAllData, Get : "/getAllData",response就是对应data的假数据
	name: park, Post : "/park" Request:{"strategy" : "" , "plateNumber" : ""}
	name: fetch, Post:"/fetch" Request:{"plateNumber" : ""}
step2: 
	ParkingLotTable是一个包含了ParkingLotOperate和ParkingLotGroup，并且它们是上下结构
step3：
	ParkingLotOperate从左到右包含了lable ：Plate Number，Input框，select框（Option:Standard,Smart,SuperSmart），Button : Park，Button : Fetch。
	你来设定一个合适的间距，Park调用api的park，Fetch调用api的fetch
step4:
	ParkingLotGroup通过getAllData得到的数据（name）来渲染对应个数的ParkingLot
step5:
	ParkingLot通过capacity生成对应的格子数，3个一行，通过tickets渲染对应的ParkingCar填入对应position的格子，从左至右，从上至下，格子对应1-capacity，
	没有ParkingCar的格子，就是空格子
step6:
	ParkingCar背景是绿色的，内容有对应的plateNumber

我需要你用useState，useContext，useReducer，useEffect管理，传递数据