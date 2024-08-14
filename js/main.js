/* Scroll Hide Bar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) { // scroll up
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}

taosanpham();
createAdmin();
function currency(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") +' VND';
}
function theloai(matl,tentl){
    this.matl = matl;
    this.tentl = tentl;
}
function theloaimenu(){
    var theloaiarr=[
        new theloai("rolex","ROLEX"),
        new theloai("versace","VERSACE"),
        new theloai("hublot","HUBLOT"),
        new theloai("tissot","TISSOT"),
    ];
        // var s="";
        // for(i=0;i<theloaiarr.length;i++){
        //     var a='<li class="sanpham-left-li"><a href="index.html?'+theloaiarr[i].matl+'&0">'+theloaiarr[i].tentl+'</a></li>';
        //     s+=a;
        // }
            // s='<ul><p>Thương hiệu</p>'+s+'</ul>';
            // document.getElementById("sanpham-leftmenu").innerHTML=s;

        if(localStorage.getItem('theloai')===null){
            localStorage.setItem('theloai',JSON.stringify(theloaiarr));
        }
}
function hienthitopmenu(){
    var theloaiarr=JSON.parse(localStorage.getItem('theloai'));
    var s='';
    for(i=0;i<theloaiarr.length;i++){
        var s =s+ '<li><a href="index.html?'+theloaiarr[i].matl+'&0">'+theloaiarr[i].tentl+'</a></li>';
    }
    s+='<li><a href="index.html">BỘ SƯU TẦM</a></li>'
    document.getElementById("topmn").innerHTML=s;  
}

function taosanpham(){
    if(localStorage.getItem('sanpham')===null){
        var sparr=[
            {spid:148, tentl:'tissot',img:'image/Tissot/t1.jpg', ten:'Everytime Small', gia:5110000},
            {spid:147, tentl:'tissot',img:'image/Tissot/t2.jpg', ten:'Everytime Medium', gia:5350000},
            {spid:146, tentl:'tissot',img:'image/Tissot/t3.jpg', ten:'Couturier Lady', gia:6240000},
            {spid:145, tentl:'tissot',img:'image/Tissot/t4.jpg', ten:'Everytime Medium Nato', gia:5350000},
            {spid:144, tentl:'tissot',img:'image/Tissot/t5.jpg', ten:'Couturier Lady', gia:7180000},
            {spid:143, tentl:'tissot',img:'image/Tissot/t6.jpg', ten:'Classic Dream Lady', gia:5660000},
            {spid:142, tentl:'tissot',img:'image/Tissot/t7.jpg', ten:'Gent XL Classic', gia:6700000},
            {spid:141, tentl:'tissot',img:'image/Tissot/t8.jpg', ten:'Classic Dream', gia:6070000},
            {spid:140, tentl:'tissot',img:'image/Tissot/t9.jpg', ten:'Carson Premium Lady Moonphase', gia:8590000},
            {spid:139, tentl:'tissot',img:'image/Tissot/t10.jpg', ten:'Lovely Square', gia:5110000},
            {spid:138, tentl:'tissot',img:'image/Tissot/t11.jpg', ten:'Gent XL', gia:7420000},
            {spid:137, tentl:'tissot',img:'image/Tissot/t12.jpg', ten:'Valentine Flamingo', gia:6500000},

            {spid:136, tentl:'versace',img:'image/Versace/v1.jpg', ten:'V-Essential Leather', gia:15720000},
            {spid:135, tentl:'versace',img:'image/Versace/v2.jpg', ten:'V-Circle Logomania Edition Watch', gia:16850000},
            {spid:134, tentl:'versace',img:'image/Versace/v3.jpg', ten:'V-Circle - The Clans Edition', gia:11020000},
            {spid:133, tentl:'versace',img:'image/Versace/v4.jpg', ten:'V-Circle - The Clans Edition', gia:15620000},
            {spid:132, tentl:'versace',img:'image/Versace/v5.jpg', ten:'V-Circle Manifesto Swiss Quartz', gia:15620000},
            {spid:131, tentl:'versace',img:'image/Versace/v6.jpg', ten:'V-Circle Logomania Edition Watch', gia:13870000},
            {spid:130, tentl:'versace',img:'image/Versace/v7.jpg', ten:'V-Essential Bracelet', gia:21000000},
            {spid:129, tentl:'versace',img:'image/Versace/v8.jpg', ten:'V-Essential Bracelet', gia:18910000},
            {spid:128, tentl:'versace',img:'image/Versace/v9.jpg', ten:'V-Circle Strap', gia:16560000},
            {spid:127, tentl:'versace',img:'image/Versace/v10.jpg', ten:'Virtus Leather', gia:16800000},
            {spid:126, tentl:'versace',img:'image/Versace/v11.jpg', ten:'Medusa Chain', gia:14710000},
            {spid:125, tentl:'versace',img:'image/Versace/v12.jpg', ten:'Hellenyium Lady', gia:16200000},
            
            {spid:124, tentl:'hublot',img:'image/Hublot/h1.jpg', ten:'Big Bang E Premier League ', gia:112320000},
            {spid:123, tentl:'hublot',img:'image/Hublot/h2.jpg', ten:'Big Bang E Titanium', gia:112320000},
            {spid:122, tentl:'hublot',img:'image/Hublot/h3.jpg', ten:'Big Bang E Black Ceramic', gia:125280000},
            {spid:121, tentl:'hublot',img:'image/Hublot/h4.jpg', ten:'Big Bang E UEFA Euro 2020', gia:125280000},
            {spid:120, tentl:'hublot',img:'image/Hublot/h5.jpg', ten:'Classic Fusion Titanium Blue', gia:131760000},
            {spid:119, tentl:'hublot',img:'image/Hublot/h6.jpg', ten:'Classic Fusion Racing Grey Titanium', gia:131760000},
            {spid:118, tentl:'hublot',img:'image/Hublot/h7.jpg', ten:'Big Bang E UEFA Champions League', gia:1512000},
            {spid:117, tentl:'hublot',img:'image/Hublot/h8.jpg', ten:'Classic Fusion Black Magic', gia:155520000},
            {spid:116, tentl:'hublot',img:'image/Hublot/h9.jpg', ten:'Classic Fusion Titanium Blue', gia:155520000},
            {spid:115, tentl:'hublot',img:'image/Hublot/h10.jpg', ten:'Classic Fusion Ceramic DarkBlue', gia:164160000},
            {spid:114, tentl:'hublot',img:'image/Hublot/h11.jpg', ten:'Classic Fusion Automatic Midsize', gia:170640000},
            {spid:113, tentl:'hublot',img:'image/Hublot/h12.jpg', ten:'Classic Fusion Ceramic Blue', gia:181440000},
            
            {spid:112, tentl:'rolex',img:'image/Rolex/r1.jpg', ten:'GMT - Master II', gia:369420000},
            {spid:111, tentl:'rolex',img:'image/Rolex/r2.jpg', ten:'Explorer II', gia:212220000},
            {spid:110, tentl:'rolex',img:'image/Rolex/r3.jpg', ten:'Datejust 41', gia:330120000},
            {spid:109, tentl:'rolex',img:'image/Rolex/r4.jpg', ten:'Sky - Dweller', gia:1034900000},
            {spid:108, tentl:'rolex',img:'image/Rolex/r5.jpg', ten:'Air - King', gia:159820000},
            {spid:107, tentl:'rolex',img:'image/Rolex/r6.jpg', ten:'Pearlmaster', gia:999999999},
            {spid:106, tentl:'rolex',img:'image/Rolex/r7.jpg', ten:'Day - Date 36', gia:36000000},
            {spid:105, tentl:'rolex',img:'image/Rolex/r8.jpg', ten:'Datejust 31', gia:199120000},
            {spid:104, tentl:'rolex',img:'image/Rolex/r9.jpg', ten:'Oyster Perpetual', gia:128380000},
            {spid:103, tentl:'rolex',img:'image/Rolex/r10.jpg', ten:'Milgauss', gia:206980000},
            {spid:102, tentl:'rolex',img:'image/Rolex/r11.jpg', ten:'Cosmograph Daytona', gia:851500000},
            {spid:101, tentl:'rolex',img:'image/Rolex/r12.jpg', ten:'Lady Datejust', gia:288200000},

        ];
        localStorage.setItem('sanpham',JSON.stringify(sparr));
    }
}
function hienthisanpham(){
    var url = window.location.href;
    var temp = url.split("?");
    // console.log(temp[1]);
    var s="";
    var sparr=JSON.parse(localStorage.getItem('sanpham'));
	if(temp[1]=='' || temp[1]==undefined || temp[1].search('all')==0 || temp[1]=='#'){
		if(temp[1]=='' || temp[1]==undefined ||temp[1]=='#'){
			temp = 'all&0';
		}
        else{
            temp=temp[1];
        }
        var temp2 = temp.split("&");
        var vitri = temp2[1];
        var sotrang=0, dem=0;
        for(var i=vitri;i<sparr.length;i++){
            s+='<div class="sanpham-right-content-item">'+
               '<img src="'+sparr[i].img+'">'+
               '<p>'+(sparr[i].tentl).toUpperCase()+'</p>'+
               '<h3>'+sparr[i].ten+'</h3>'+
               '<h1>'+currency(sparr[i].gia )+'</h1>'+
               '<button class="butct" onclick="hienthichitiet(' + sparr[i].spid+')">Chi tiết</button></div>';
             dem++;
             if(dem==8)
             break;
        }
        sotrang=Math.ceil(sparr.length/8);
        var link='';
        for(var i=1;i<=sotrang;i++){
            vitri=(i-1)*8;
            var a = '<a href="index.html?all&'+vitri+'">'+i+'</a>';
            link+='<div class="pagenumber">'+a+'</div>';
        }
        document.getElementById('page').innerHTML=link;
    }
    else{
        temp=temp[1];
        var temp2=temp.split("&");
        var tentl = temp2[0];
        var vitri = temp2[1];
        var sotrang=0,dem=0;
        var arrtempt=[]; //luu san pham cung the loai
        for(var i=0; i<sparr.length;i++){
			if(tentl==sparr[i].tentl)
				arrtempt.push(sparr[i]);
		}
		for(var i=vitri;i<arrtempt.length;i++){
			s+='<div class="sanpham-right-content-item">'+
						'<img src="'+arrtempt[i].img+'">'+
                        '<p>'+(arrtempt[i].tentl).toUpperCase()+'</p>'+
						'<h3>' + arrtempt[i].ten + '</h3>'+
						'<h1> Giá: ' + currency(arrtempt[i].gia) +'</h1>' +
						'<button class="butct" onClick="hienthichitiet('+(arrtempt[i].spid)+')">Chi tiết</button></div>';
			dem++;
			if(dem==8)
				break;
		}
		sotrang=Math.ceil(arrtempt.length/8);
		var link='';
		for(var i = 1;i<=sotrang;i++){
			vitri=(i-1)*8;
			var a ='<a href="index.html?'+tentl+'&'+vitri+'">'+i+'</a>';
			link+='<div class="pagenumber">'+a+'</div>';
		}
		document.getElementById('page').innerHTML=link;
	}
	document.getElementById('hienthisp').innerHTML=s;
}
    
function hienthichitiet(spid){
	document.getElementById('chitietsp').style.display = 'block';
	var sparr = JSON.parse(localStorage.getItem('sanpham'));
	for(var i=0;i<sparr.length;i++){
		if(sparr[i].spid==spid){
            document.getElementById('tentl').innerHTML = (sparr[i].tentl).toUpperCase();
			document.getElementById('tensp').innerHTML = sparr[i].ten;
			document.getElementById('giasp').innerHTML = 'Giá: '+ currency(sparr[i].gia);
			document.getElementById('imgbig').src=sparr[i].img;
			document.getElementById('soluong').value = 1;
			document.querySelector('#chitiet .right .themvaogio').setAttribute('onClick', 'themvaogio('+spid+')');
		}
	}
}
function closechitiet(){

	document.getElementById('chitietsp').style.display = 'none';
}
function giamsoluong(){
	if(document.getElementById('soluong').value > 1){
		document.getElementById('soluong').value--;
	}
}
function tangsoluong(){

	document.getElementById('soluong').value++;
}
// function searchdata(){
//     var valuesearch = document.getElementById('search').value.toLowerCase();
//     // console.log(valuesearch);
//     var sparr=JSON.parse(localStorage.getItem('sanpham'));
// }
/*search*/
function showSearch(){
	document.getElementById('container').style.display = 'block';
}
function closeSearch(){

	document.getElementById('container').style.display = 'none';
}
//Tim kiem theo gia
function searchPrice(event){
    event.preventDefault();
    var min = document.getElementById('min').value;
    var max = document.getElementById('max').value;
    var theloai = document.getElementById('timkiemtheloai').value;
    var s = '';
    var productArray = JSON.parse(localStorage.getItem('sanpham'));
    if(theloai=="all"){
        for(let product of productArray){
            if(product.gia >= parseInt(min) && product.gia<=parseInt(max)){
                s+='<div class="sanpham-right-content-item">'+
                '<img src="'+product.img+'">'+
                '<p>'+(product.tentl).toUpperCase()+'</p>'+
                '<h3>' + product.ten + '</h3>'+
                '<h1> Giá: ' + currency(product.gia) +'</h1>' +
                '<button class="butct" onClick="hienthichitiet('+(product.spid)+')">Chi tiết</button></div>';
            }
        }
    }
    else{
        for(let product of productArray){
            if(product.gia >= parseInt(min) && product.gia<=parseInt(max) && product.tentl==theloai){
                s+='<div class="sanpham-right-content-item">'+
                '<img src="'+product.img+'">'+
                '<p>'+(product.tentl).toUpperCase()+'</p>'+
                '<h3>' + product.ten + '</h3>'+
                '<h1> Giá: ' + currency(product.gia) +'</h1>' +
                '<button class="butct" onClick="hienthichitiet('+(product.spid)+')">Chi tiết</button></div>';
            }
        }
    } 
    document.getElementById('hienthisp').innerHTML = s;
}
function search(){
	var productsearch = document.getElementById('search').value.toLowerCase();
    var values=document.getElementById('search').value;
    console.log(values);
	var productArray = JSON.parse(localStorage.getItem('sanpham'));
	var s='';
    if(values!=''){
        for(var i = 0; i<productArray.length; i++){
			if ((productArray[i].ten.toLowerCase().search(productsearch) != -1 || productArray[i].tentl.toLowerCase().search(productsearch) != -1) && productsearch != '') {
                s+='<div class="sanpham-right-content-item">'+
                '<img src="'+productArray[i].img+'">'+
                '<p>'+(productArray[i].tentl).toUpperCase()+'</p>'+
                '<h3>' + productArray[i].ten + '</h3>'+
                '<h1> Giá: ' + currency(productArray[i].gia) +'</h1>' +
                '<button class="butct" onClick="hienthichitiet('+(productArray[i].spid)+')">Chi tiết</button></div>';
                
			}
		}
    }
		
    document.getElementById('hienthisp').innerHTML = s;
}
/*end search*/
// giohang
function themvaogio(spid){
    	var soluong = document.getElementById('soluong').value;
    	var sparr = JSON.parse(localStorage.getItem('sanpham'));
    	var temp;
    	for(var i=0; i<sparr.length;i++){
    		if(sparr[i].spid==spid){
                alert('Thêm sản phẩm thành công !!')
    			temp = sparr[i];
    		}
    	}
        var carttemp = localStorage.getItem('giohang') ? JSON.parse(localStorage.getItem('giohang')) : [];
    	
    		temp.soluong = soluong;
    		temp.totalprice = soluong*temp.gia;
    		carttemp.unshift(temp);
    		localStorage.setItem('giohang',JSON.stringify(carttemp));

    	closechitiet();
        updatecart(spid);
    }

function showgiohang(){
    var totalall=0;
    var tongsp=0;
    if(localStorage.getItem('giohang')===null || localStorage.getItem('giohang')=='[]'){
        var s='<p class="giohangtrong">Bạn không có sản phẩm nào trong giỏ hàng</p>';
        document.getElementById('showgiohang').innerHTML=s;
        document.getElementById('totalall').innerHTML=0;
        document.getElementById('tongsp').innerHTML=0;
    }
    else{
        var getgiohang = JSON.parse(localStorage.getItem('giohang'));
        var s = '<tr><th>Mã sản phẩm</th><th>Sản phẩm</th><th>Thương hiệu</th><th>Tên sản phẩm</th><th>Giá</th><th>Số lượng</th><th>Tổng tiền</th><th>Xóa</th>';
        for(var i=0;i<getgiohang.length;i++){
            s+='<tr>'+
                    '<td>'+getgiohang[i].spid+'</td>'+
                    '<td><img src="'+getgiohang[i].img+'"></td>'+
                    '<td>'+(getgiohang[i].tentl).toUpperCase()+'</td>'+
                    '<td>'+getgiohang[i].ten+'</td>'+
                    '<td>'+currency(getgiohang[i].gia)+'</td>'+
                    '<td><p style="font-size: 19px" id="slgio">'+getgiohang[i].soluong+'<p></td>'+
                    '<td id="totalprivate">'+currency(getgiohang[i].totalprice)+'</td>'+
                    '<td><button onclick="xoagiohang('+getgiohang[i].spid+')"><i class="fas fa-trash-alt"></i></button></td>'+
                '</tr>';
                
                totalall+=(getgiohang[i].totalprice);
                tongsp+=parseInt(getgiohang[i].soluong);
                // alert(totalall)
        }
        document.getElementById('showgiohang').innerHTML=s;
        document.getElementById('totalall').innerHTML=currency(totalall);
        document.getElementById('tongsp').innerHTML=tongsp;
    }
}
function updatecart(spid){
    var s=0;
    var carttemp = JSON.parse(localStorage.getItem('giohang'));
    for(var i=0;i<carttemp.length-1;i++){
        for(var j=i+1;i<carttemp.length;j++)
            if(carttemp[i].spid==carttemp[j].spid){
                    
                    carttemp[i].soluong=parseInt(carttemp[i].soluong)+parseInt(carttemp[j].soluong);
                    carttemp[i].totalprice=carttemp[i].soluong*carttemp[i].gia;
                    carttemp.splice(j,1); 
                    localStorage.setItem('giohang',JSON.stringify(carttemp));
                    break;           
            } 
    }
  
}

function xoagiohang(spid){
    // document.querySelector('.gio-hang-modal').style.display = 'flex';
    var itemArray = JSON.parse(localStorage.getItem('giohang'));
    for(i=0;i<itemArray.length;i++){
        if(itemArray[i].spid==spid){
            if(confirm('Bạn có muốn xóa sản phẩm này?')){
                alert('Xóa sản phẩm thành công !')
				itemArray.splice(i, 1);
                
            }
        }
    }  
    localStorage.setItem('giohang',JSON.stringify(itemArray));
    showgiohang();
}
function xoatatca(){
    localStorage.removeItem('giohang');
    showgiohang();
}

function thanhtoan(){
	if(localStorage.getItem('userlogin')===null){
		alert("Bạn phải đăng nhập để mua sản phẩm !");
		return false;
	}
	if(localStorage.getItem('giohang')===null || localStorage.getItem('giohang')=='[]'){
		return false;
	}
    var info = '';
	var totalprice = 0;
	var cartarr = JSON.parse(localStorage.getItem('giohang'));
	for (var i = 0; i < cartarr.length; i++) {
			info+=cartarr[i].soluong+' x '+cartarr[i].ten+" ;";
			totalprice+=cartarr[i].totalprice;
	}
	var customer = JSON.parse(localStorage.getItem('userlogin'));
	var date = new Date();
	var d = date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear();
	var billArray = localStorage.getItem('bill') ? JSON.parse(localStorage.getItem('bill')) : [];

		var bill = {id: billArray.length, info: info, totalprice: totalprice, customer: customer, date: d, status: 'Chưa xử lý'};
		billArray.unshift(bill);
		localStorage.setItem('bill', JSON.stringify(billArray));

	localStorage.removeItem('giohang');
	showgiohang();
	showbill();
}
function showbill(){
	if (localStorage.getItem('bill')===null){
		document.getElementById('bill').style.display = 'none';
	}
	else{
		var user = JSON.parse(localStorage.getItem('userlogin'))
		var billArray = JSON.parse(localStorage.getItem('bill'));
		var s='<p>ĐƠN HÀNG ĐÃ ĐẶT</p>';
		for (var i = 0; i < billArray.length; i++) {
			if(user.username==billArray[i].customer.username){
				document.getElementById('bill').style.display = 'block';
				s+='<div class="billcontent">'+
					'<div>'+billArray[i].info+'</div>'+
					'<div>'+currency(billArray[i].totalprice)+'</div>'+
					'<div>'+billArray[i].date+'</div>'+
					'<div id="status">'+billArray[i].status+'</div>'+
				'</div>';
			}
		}
		document.getElementById('bill').innerHTML = s;
	}
}

// form
function showform(){
	var userform = document.getElementById('loginwrap');
	userform.style.display = 'block';
}
function closeform(){
	var userform = document.getElementById('loginwrap');
	userform.style.display = 'none';
}
function showsignup(){
	document.getElementById('loginwrap').style.display = 'none';
	document.getElementById('signupwrap').style.display = 'block';
}
function closeformsignup(){
	var userform = document.getElementById('signupwrap');
	userform.style.display = 'none';
}
function showlogin(){
	document.getElementById('signupwrap').style.display = 'none';
	document.getElementById('loginwrap').style.display = 'block';
}

function createAdmin(){
	if(localStorage.getItem('user')===null){
		var userArray = [];
		var user = {username: 'admin', password: 'admin', email: 'admin@gmail.com', phone: '99999' , datesignup: '02/10/2002'};
		userArray.push(user);
		localStorage.setItem('user',JSON.stringify(userArray));
	}
}
// document.getElementById('signupform').addEventListener('submit', createUser);
// document.getElementById('loginform').addEventListener('submit', login);
function ktdangnhap(){

    var username = document.getElementById('usernamelogin');
	var pass = document.getElementById('passlogin');
    if(username.value=="")
    {
        alert("Vui lòng nhập tên đăng nhập !");
        document.getElementById('usernamelogin').focus();
        return false;
    }
    if(pass.value=="")
    {
        alert("Vui lòng nhập mật khẩu");
        document.getElementById('passlogin').focus();
        return false;
    }
    var userArray = JSON.parse(localStorage.getItem('user'));
	for(var i=0;i<userArray.length;i++){
        if(username.value==userArray[i].username && pass.value==userArray[i].password){
            closeform();
            alert("Đăng nhập thành công !")
            localStorage.setItem('userlogin',JSON.stringify(userArray[i]));
            window.location="index.html";
            return true;

        }
      
    }
        alert("Sai thông tin đăng nhập !")
        return false;
}

function ktdangky(){
    var username = document.getElementById('usernamesignup');
	var email = document.getElementById('emailsignup');
	var phone = document.getElementById('phonesignup');
	var pass = document.getElementById('passsignup');
    var repass = document.getElementById('repasssignup');
    var check=true;
    if(username.value=="")
    {
        alert("Vui lòng nhập tên đăng nhập !");
        document.getElementById('usernamesignup').focus();
        check= false;
    }
    if(email.value=="")
    {
        alert("Vui lòng nhập email !");
        document.getElementById('emailsignup').focus();
        check= false;
    }
    if(phone.value=="")
    {
        alert("Vui lòng nhập số điện thoại !");
        document.getElementById('phonesignup').focus();
        check= false;
    }
    if(isNaN(Number(phone.value)))
    {
        alert("Số điện thoại không hợp lệ !");
        document.getElementById('phonesignup').focus();
        check= false;
    }        
    if(pass.value=="")
    {
        alert("Vui lòng nhập mật khẩu");
        document.getElementById('passsignup').focus();
        check= false;
    }
    if(repass.value=="")
    {
        alert("Vui lòng nhập lại mật khẩu !");
        document.getElementById('repasssignup').focus();
        check= false;
    }
   if(pass.value!=repass.value)
   {
       alert("Mật khẩu không trùng khớp !");
       document.getElementById('repasssignup').focus();
       check= false;
   }
   if(check==false){
       return false;
   }
    var d = new Date();
	var datesignup = d.getDate()+'-'+(d.getMonth()+1)+'-'+d.getFullYear();
	var user = {username: username.value, password: pass.value, email: email.value, phone: phone.value , datesignup: datesignup};
	var userArray = JSON.parse(localStorage.getItem('user'));
	for(var i=0;i<userArray.length;i++){
		if(user.username==userArray[i].username){
			alert("Tên đăng nhập đã tồn tại !");
			username.focus();
			return false;
		}
	}
	userArray.push(user);
	localStorage.setItem('user',JSON.stringify(userArray));
	alert("Đăng ký tài khoản thành công !");
    showlogin();
    return false;
}
function checklogin(){
	if(localStorage.getItem('userlogin')){
		var user = JSON.parse(localStorage.getItem('userlogin'));
		var s='';
           s=' <li><i onclick="showSearch()" class="fas fa-search"></i></li>'+
           '<li><span>'+user.username+'</span></button></li>'+
            '<li><a href="giohang.html"><i class="fas fa-shopping-cart"></i></a><ul id="sub-giohang">'+
            '<li><a href="giohang.html">Giỏ hàng</a></li>'+
            '<li><a href="donhang.html">Đơn hàng</a></li>'+
        '</ul></li>'+
            '<li onclick="logout()"><i class="fas fa-sign-out-alt"></i></li>';
	
		document.querySelector('.others').innerHTML = s;
	}
}
function logout(){
    localStorage.removeItem('userlogin');
    localStorage.removeItem('cart');
    location.href='index.html';
}