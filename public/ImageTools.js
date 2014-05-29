function replacePicture( clickedId )
{
	document.getElementById("ImageMain").src = document.getElementById(clickedId).src; 
}
function getScrollHeight()
{
	document.getElementById('ImageBox').style.height= screen.height - 170;
	document.getElementById('ImageBoxInner').style.height= screen.height - 170;
	document.getElementById('ImageMain').style.maxHeight= screen.height - 300;
}
function getScrollHeightDesc()
{
	document.getElementById('ImageBox').style.height= screen.height - 170;
	document.getElementById('ImageBoxInner').style.height= screen.height - 170;
	document.getElementById('ImageMain').style.maxHeight= screen.height - 300;
}
function setActiveTab( clickedId )
{
	//document.getElementsByClassName( 'MenuBoxActive' ).className = "MenuBox";
	document.getElementById( clickedId ).className = "MenuBoxActive";
}
function getImageDescCharcoal( clickedId )
{
	if(  clickedId == "Image1" )
		document.getElementById('Desc').innerHTML ="Charcoal Painting <br> Size: 16.5\" x 11.7\" <br> Inspired by Opeth band cover";
	else if(  clickedId == "Image2" )
		document.getElementById('Desc').innerHTML ="Charcoal Painting <br> Size: 8.0\" x 6.0\" <br> Inspired by Digital art";
	else if(  clickedId == "Image3" )
		document.getElementById('Desc').innerHTML ="Charcoal Painting <br> Size: 13.4\" x 10.0\" <br> Original Piece";
	else if(  clickedId == "Image4" )
		document.getElementById('Desc').innerHTML ="Charcoal Painting <br> Size: 15.6\" x 11.7\" <br> Inspired by Video Game Limbo";
	else if(  clickedId == "Image5" )
		document.getElementById('Desc').innerHTML ="Charcoal Painting <br> Size: 11.7\" x 16.5\" <br> Inspired by J.D.HillBerry";
	else if(  clickedId == "Image6" )
		document.getElementById('Desc').innerHTML ="Charcoal Painting <br> Size: 11.7\" x 16.5\" <br> Inspired by Digital art";
}
function getImageDescPencil( clickedId )
{
	if(  clickedId == "Image1" )
		document.getElementById('Desc').innerHTML ="Part of Pencil Sketch <br> Size: 8.5\" x 11.0\" <br> Inspired by M.C. Escher";
	else if(  clickedId == "Image2" )
		document.getElementById('Desc').innerHTML ="Part of Pencil Sketch <br> Size: 8.5\" x 11.0\" <br> Inspired by Digital art";
	else if(  clickedId == "Image3" )
		document.getElementById('Desc').innerHTML ="Pencil Sketch <br> Size: 11.0\" x 8.5\" <br> Inspired by Digital art";
	else if(  clickedId == "Image4" )
		document.getElementById('Desc').innerHTML ="Pencil Sketch <br> Size: 11.0\" x 8.5\" <br> Inspired by M.C. Escher";
	else if(  clickedId == "Image5" )
		document.getElementById('Desc').innerHTML ="Pencil Sketch <br> Size: 11.0\" x 8.5\" <br> Original Piece";
	else if(  clickedId == "Image6" )
		document.getElementById('Desc').innerHTML ="Pencil Sketch <br> Size: 15.5\" x 15.5\" <br> Inspired by M.C. Escher";
}
function getImageDescPastels( clickedId )
{
	if(  clickedId == "Image1" )
		document.getElementById('Desc').innerHTML ="Pastels and Charcoal Painting <br> Size: 16.5\" x 11.1\" <br> Painting of Mt.Fuji";
	else if(  clickedId == "Image2" )
		document.getElementById('Desc').innerHTML ="Pastels and Charcoal Painting <br> Size: 16.5\" x 11.7\" <br>";
	else if(  clickedId == "Image3" )
		document.getElementById('Desc').innerHTML ="Pastels and Charcoal Painting <br> Size: 11.0\" x 8.5\" <br> Original Piece";
}
function getImageDescPen( clickedId )
{
	if(  clickedId == "Image1" )
		document.getElementById('Desc').innerHTML ="Pen Sketch <br> Size: 8.5\" x 11.0\" <br> Results of classroom doodles- Indian motifs";
	else if(  clickedId == "Image2" )
		document.getElementById('Desc').innerHTML ="Pen Sketch <br> Size: 22.0\" x 17.0\" <br> Drawn off of a photograph of Hampi temple, India";
	else if(  clickedId == "Image3" )
		document.getElementById('Desc').innerHTML ="Pen Sketch <br> Size: 16.5\" x 11.7\" <br> Inspired by M.C. Escher";
	else if(  clickedId == "Image4" )
		document.getElementById('Desc').innerHTML ="Pen Sketch <br> Size: 22.0\" x 17.0\" <br> Drawn off of a photograph of Angkor Vat, Cambodia";
	else if(  clickedId == "Image5" )
		document.getElementById('Desc').innerHTML ="Pen Sketch <br> Size: 11.0\" x 8.5\" <br> Tribal art";
	else if(  clickedId == "Image6" )
		document.getElementById('Desc').innerHTML ="Pen Sketch <br> Size: 17.0\" x 22.0\" <br> Original Piece";
}
function getImageDescOthers( clickedId )
{
	if(  clickedId == "Image1" )
		document.getElementById('Desc').innerHTML ="Origami <br> Size: 2.0\" x 2.0\" x 2.0\" <br> Diamond window cube origami ";
	else if(  clickedId == "Image2" )
		document.getElementById('Desc').innerHTML ="Origami <br> Size: 2.0\" diameter <br> Kusudama origami ball in progress";
	else if(  clickedId == "Image3" )
		document.getElementById('Desc').innerHTML ="Origami <br> Size: 0.8\" height pieces <br> Modular origami swans";
	else if(  clickedId == "Image4" )
		document.getElementById('Desc').innerHTML ="Stencil cutting <br> Size: 17.0\" x 22.0\" <br>";
	else if(  clickedId == "Image5" )
		document.getElementById('Desc').innerHTML ="Stencil cutting <br> Size: 12.0\" x 12.0\" <br>Chess board!";
}