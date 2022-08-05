// ctx.linewidth = 2;
//   let x_coord = 0;
//   let y_coord = 0;
//   function onclick(event){
//   ctx.beginPath();
//   ctx.moveTo(x_coord,y_coord);
//   ctx.strokeStyle = colors[Math.floor(Math.random()*colors.length)];
//   ctx.lineTo(event.offsetX, event.offsetY);
//   ctx.stroke();
//   }
//   // If user lick the mouse, save the mouse point and make a circle.
//   function cursor_move(event){
//   x_coord = event.offsetX;
//   y_coord = event.offsetY;
//   ctx.beginPath();
//   // ctx.arc(x_coord, y_coord, 5, 0, 2*Math.PI);
//   ctx.fillStyle = colors[Math.floor(Math.random()*colors.length)];
//   ctx.fill();
//   console.log("point");
//   }
//   canvas.addEventListener("mousemove", onclick);
//   canvas.addEventListener("click", cursor_move);