var express= require("express");
app= express(),
servidor=require("http").createServer(app);
io=require("socket.io").listen(servidor);

servidor.listen(4000);
app.use(express.static(__dirname+"/"));

app.get("/",function(req,res){
	res.sendfile(__dirname+"/index.html");
});
//Eventos de escucha
io.sockets.on("connection",function(socket){

	socket.on("crear",function(data){
		io.sockets.emit("creado",data);
	});
	socket.on("mover",function(data){
		io.sockets.emit("moviendo",data);
	});
	socket.on("eliminar",function(data){
		io.sockets.emit("eliminado",data);
	});
	socket.on("posicionar",function(data){
		io.sockets.emit("posicionado",data);
	});

});