$(document).ready(function(){
	initialize();
	_dropdown(0);
    orderManage();
});
/* 國家array */
var countryArr = new Array("Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas, The","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei ","Bulgaria","Burkina Faso","Burma","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo, Democratic Republic of the","Congo, Republic of the","Costa Rica","Cote d'Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Fiji","Finland","France","Gabon","Gambia, The","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Holy See","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Korea, North","Korea, South","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Namibia","Nauru","Nepal","Netherlands","Netherlands Antilles","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestinian Territories","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa ","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain ","Sri Lanka","Sudan","Suriname","Swaziland ","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand ","Timor-Leste","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Vanuatu","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe");
/* 歐洲array */
var europeArr = new Array("Austria","Belgium","Bulgaria","Croatia","Cyprus","CzechRepublic","Denmark","Estonia","Finland", "France","Germany","Greece","Hungary","Ireland","Italy","Latvia","Lithuania","Luxembourg","Malta","Netherlands","Poland","Portugal","Romania","Slovakia","Slovenia","Spain","Sweden","UnitedKingdom");
/* 幣別array */
var currencyArr = new Array("USD","NTD","CNY","EUR","CAD","HUF","AUD","JPY","CHF","GBP","NZD");


/* provide a resizeend event */
var timer = window.setTimeout(function() {}, 0);
$(window).on('resize', function() {
    window.clearTimeout(timer);
    timer = window.setTimeout(function() {
        //圖表重繪請寫這
    }, 1000);
});
/* 初始值 */
function initialize(){
/* 刊頭選單 */
	/* 展開語言選單 */
	var _lang = $('.nav_lang'), 
		_mainLang = _lang.find('.main_lang'), 
		_subLang = _lang.find('.sub_lang');
	_lang.bind('mouseover', function(event) {
		var _this = $(this);
		_subLang.show();
	});
	_lang.bind('mouseleave', function(event) {
		var _this = $(this);
		_subLang.hide();
	});/* 展開語言選單 End */
	/* acct 選單 */
	var _acct = $('.nav_acct'), 
		_mainAcct = _acct.find('.main_acct'), 
		_subAcct = _acct.find('.sub_acct');
	_acct.bind('mouseover', function(event) {
		var _this = $(this);
		_subAcct.show();
	});
	_acct.bind('mouseleave', function(event) {
		var _this = $(this);
		_subAcct.hide();
	});
	_subAcct.find('li').click(function(){
		var _this = $(this), 
			_index = _this.index(), 
			_subAcctVal = _this.find('a').html();
		 _mainAcct.html(_subAcctVal);
		 _subAcct.attr('title', _subAcctVal).hide();
	});/* acct 選單 End */
	/* 手機版選單 */
	var _mMenu = $('.m_nav_menu'), //icon
		_subNav = $('.nav_bottom'); //menu
	_mMenu.click(function(){
		_subNav.slideToggle();
	});/* 手機版選單 End */
	/* 刊頭選單 End */
    /* 國家選單 */
    for(var key in countryArr){ 
       $('<li>'+countryArr[key]+'</li>').appendTo('.dropMenu.country.international');
    }
    /* 歐洲選單 */
    for(var key1 in europeArr){ 
       $('<li>'+europeArr[key1]+'</li>').appendTo('.dropMenu.country.europe');
    }
    /* 幣別選單 */
    for(var key2 in currencyArr){ 
       $('<li>'+currencyArr[key2]+'</li>').appendTo('.dropMenu.currency');
    }
}/* 初始值 End */
/* 登入表單 */
$('#submit').click(function(event) {
	$('#login').submit();
});
$('#login').validate({
	onkeyup: false,
	submitHandler: function(form) {
		if($("#terms").length){
			if(!$("#terms").prop("checked")){
				//未點選checkbox
				return false;
			}	
		}
		form.submit();
	}
});
/* 登入表單 End */

/* 下拉選項文字 */
$(document).on('click','li.option_val',function(){
	var _this = $(this);
	var _val = _this.find('a').attr('title');
    var _dropParent = _this.parent('ul');
	var _btnVal = _dropParent.siblings('a').html(_val);
    var _inputVal = _dropParent.parent('.drop_acct').siblings('input.hidden').val(_val);
	//_dropParent.hide();
	//_dropParent.siblings('a').show();
    _dropParent.parent('.drop_acct').siblings('label.error').remove();
    _dropParent.parent('.drop_acct').siblings('input.error').removeClass('error');
});/* 下拉選項文字 End */
/* 下拉選單-初始值 */
function _dropdown(_index){
	nextPage(0);
	var _tradeDropdown = $('.drop_acct').eq(_index), //下拉選單
		_tradeBtn = _tradeDropdown.find('.dropdownTog'), //下拉按鈕
		_tradeOption = _tradeDropdown.find('.dropdownSel'); //下拉選項
	/* 下拉按鈕動作 */
	_tradeBtn.bind('click', function(){
		var _this = $(this);
		_this.hide();
		_tradeOption.show();
        //$('.btn.error').removeClass('error');
        _this.parent().siblings('label.error').remove();

	});/* 下拉按鈕動作 End */
	/* 下拉選項為可見時 */
	if(_tradeOption.is(':visible')){
		_tradeBtn.show();
		_tradeOption.hide();
	}/* 下拉選項為可見時 End */
}/* 下拉選單-初始值 End */
/* 頁籤 */
var _mainTrade = $('.wrapper'), //trade內容
	_tradeTab = _mainTrade.find('.tabsMenu').not('.assetsWith .tabsMenu, .accountSetting .tabsMenu').children('li'), //頁籤按鈕
	_tradeWrap = _mainTrade.find('.tabsWrap').children('li'); //頁籤內容
/* 頁籤動作 */
_tradeTab.click(function(){
    //把所有error的label,class清除
    $('label.error').remove();
    $('input.error').removeClass('error');
	var _this = $(this),
		_index = _this.index();
	_this.addClass('current').siblings().removeClass('current'); //當前頁籤加上.current
	_tradeWrap.eq(_index).show().siblings().hide(); //當前頁籤內容顯示
	/* assets withdraw, account setting 頁籤動作 */
	if(_this.hasClass('assetsWith') || _this.hasClass('accountSetting')){
		var _subAssetsTab = $('.assetsWith, .accountSetting').find('.content'), 
			_subTab = _subAssetsTab.find('.tabsMenu').children('li');
		_subTab.click(function(){ //次頁籤動作
			var _this = $(this), 
				_index = _this.index(), 
				_subWrap = _subAssetsTab.find('.tabsWrap').children('li');
			_this.addClass('current').siblings().removeClass('current');
			_subWrap.eq(_index).show().siblings().hide();
            $('label.error').remove();
            $('input.error').removeClass('error');
		}); //次頁籤動作 End
	} else if($('.assetsWith, .accountSetting').is(':hidden')){ //次頁籤回到預設值
		var _subAssetsTab = $('.assetsWith, .accountSetting').find('.content'), 
			_subTab = _subAssetsTab.find('.tabsMenu').children('li'), 
			_subWrap = _subAssetsTab.find('.tabsWrap').children('li');
		_subTab.eq(0).addClass('current').siblings().removeClass('current');
		_subWrap.eq(0).show().siblings().hide();
        $('label.error').remove();
        $('input.error').removeClass('error');
	}/* assets withdraw, account setting 頁籤動作 End */
});
if(_tradeTab.parents().hasClass('trade')){
	_tradeTab.click(function(){
		var _this = $(this),
			_index = _this.index();
		_dropdown(_index); //下拉選單初始值
		/* 表格交換 */
		var _tableBuy = _mainTrade.find('.trade_table.buy'); //表格buyers
		if(_this.hasClass('sell')){ //按sell & sell to market
			_tableBuy.insertBefore(_tableBuy.siblings('.sell')); //把buy放到sell前面
		}else{ //按bid & buy from market
			_tableBuy.insertAfter(_tableBuy.siblings('.sell')); //把buy放到sell後面
		}; /* 表格交換 End */
	}); /* 頁籤動作 End */
}/* 頁籤 End */

//二格input計算機(buy from market & sell to market)
$('.calc_two').on('keyup', '.borderInput', function(event) {
    //輸入非數字則清空
    if(event.keyCode > 64 && event.keyCode < 90){
		alert("請輸入數字");
	  	$(this).val('');
	  	return false;
	};

	var parents = $(this).parents('form');
    //取各格子的值
	var BTC_val = (parents.find('.BTC_col').val() != '') ? parents.find('.BTC_col').val() : '' ;
	var USD_val = (parents.find('.USD_col').val() != '') ? parents.find('.USD_col').val() : '' ;
	var sum = 0,new_sum = 0,tr_num = 0,new_sum_val　= 0,tr_num_val = 0,sum_val = 0,test = 0, result;
	//判斷抓取table的class，buyFromMarket就抓sell裡的值
    if($(this).hasClass('buyFromMarket')){
	  var ele = $('.sell tr');
	}else{
	  var ele = $('.buy tr');
	}
    //判斷使用者按哪個格子
	if($(this).hasClass('BTC_col')){
        result = chkFormat($(this).val(), true)
		if( result == 'OK'){
			result = $(this).val();
		}else if(result == ''){
            parents.find('.USD_col').val('');
            return false;
        }else{
            $(this).val(result);
            return false;
        }
		ele.each(function(index, el) {
            tr_num = parseFloat($(this).find('td').eq(1).html());//取Qty
            tr_num_val = $(this).find('td').eq(2).find('span').eq(1).html();//取val	  
            if(typeof tr_num_val !== 'undefined'){
                tr_num_val = parseFloat(tr_num_val.replace(',',''));//清除格式[,] 
                //放入暫存變數,NaN就不放
                if(tr_num != 'NaN'){
                    new_sum = sum+tr_num;
                    new_sum_val = sum_val+tr_num_val;
                };
                //判斷總數是否符合使用者輸入的值
                if(result > new_sum){
                    sum = new_sum;
                    sum_val = new_sum_val;
                }else{
                    //當數值小於第一格的Qty時，算比例((user/Qty)*value)
                    sum_val = Multiplication(new_sum_val,Division(result,new_sum));
                    return false; 
                }
            }
        });
        
        //小數取二位後改變USD_col的value
		parents.find('.USD_col').val(formatFloat(sum_val,2));
	}else{
        result = chkFormat($(this).val(), false);
		if(result == 'OK'){
			result = $(this).val();
        }else if(result == ''){
            parents.find('.BTC_col').val('');
            return false;
        }else{
            $(this).val(result);
            return false;
        }
        ele.each(function(index, el) {
            tr_num = parseFloat($(this).find('td').eq(1).html());//取Qty
            tr_num_val = $(this).find('td').eq(2).find('span').eq(1).html();//取val
            if(typeof tr_num_val !== 'undefined') {
                tr_num_val = parseFloat(tr_num_val.replace(',',''));//清除格式[,] 
                //放入暫存變數,NaN就不放
                if(tr_num_val != 'NaN'){
                    new_sum = sum+tr_num;
                    new_sum_val = sum_val+tr_num_val;
                }
                //判斷總數是否符合使用者輸入的值
                if(result > new_sum_val){
                    sum = new_sum;
                    sum_val = new_sum_val;
                }
            }
        });
        //小數取八位後改變BTC_col的value
        parents.find('.BTC_col').val(formatFloat(sum,8));
	}
});
//檢查輸入資料是否符合格式
function chkFormat(x,type) {
	var patten;
	if(type){
		patten = "^[0-9]+([.]{1}[0-9]{0,8}){0,1}$";//小數8位
	}else{
		patten = "^[0-9]+([.]{1}[0-9]{0,2}){0,1}$"//小數2位
	}
	var patt = new RegExp(patten);
	var res = patt.test(x)//正則判斷
	if(!res){
        //不符合正則就減一位數
		return x.substr(0, x.length-1);
	}else{
		return 'OK';
	}
}
//三格input計算機(buy & sell)
$('.calc_three').on('keyup', '.borderInput', function(event) {
	if(event.keyCode > 64 && event.keyCode < 90){
		alert("請輸入數字");
        $(this).val('');
        return false;
	}
    var parents = $(this).parents('form');
	if($(this).val() == ''){
        parents.find('.EQ_col').val('');
        return false;   
    }
    //取各格子的值
	var BTC_val = (parents.find('.BTC_col').val() != '') ? parents.find('.BTC_col').val() : '' ;
	var USD_val = (parents.find('.USD_col').val() != '') ? parents.find('.USD_col').val() : '' ;
	var EQ_col  = (parents.find('.EQ_col').val()!='') ? parents.find('.EQ_col').val() : '' ;
    //判斷位數
	if($(this).hasClass('BTC_col')){
		var result = chkFormat($(this).val(), true);
	}else{
		var result = chkFormat($(this).val(), false);
	};
	if(result != 'OK'){
        //不符合位數就退位數
		$(this).val(result);
		return false;
	}
    

    //判斷使用者是點選哪個格子
	if($(this).hasClass('BTC_col')){
		if(USD_val == '' && EQ_col == '')return false;
		//BTC_col被點, 做除法並取二位數存USD_col
		if(USD_val == '' || USD_val == '0'){
			parents.find('.USD_col').val(formatFloat(Division(EQ_col, BTC_val),2));
		}else{
			//EQ有值, 做乘法並取二位數存EQ_col
			parents.find('.EQ_col').val(formatFloat(Multiplication(BTC_val, USD_val),2));
		};
	}else if($(this).hasClass('USD_col')){
        console.log('test');
		if(BTC_val == '' && EQ_col == '')return false;
		//USD_col被點
		if(USD_val == '' || USD_val == '0'){
			//EQ是空, 做除法並取八位數存BTC_col	
			parents.find('.BTC_col').val(formatFloat(Division(EQ_col, USD_val),8));
		}else{
			//EQ有值, 做乘法並取二位數存EQ_col
			parents.find('.EQ_col').val(formatFloat(Multiplication(BTC_val, USD_val),2));
		}
	}else{
        console.log('test2');
		if(USD_val == '' && BTC_val == '')return false;
		//EQ_col被點
        if(BTC_val == ''){
            //BTC是空, 做除法並取八位數存BTC_col
            parents.find('.BTC_col').val(formatFloat(Division(EQ_col, USD_val),8));
        }else{
            //USD是空, 做除法並取二位數存USD_col
            parents.find('.USD_col').val(formatFloat(Division(EQ_col, BTC_val),2));
        }
	}
});
//取固定小數位數
function formatFloat(num, pos){
    //進行先乘後除
	var size = Math.pow(10, pos);
	return Math.round(num * size) / size;
}
//取小數固定位數
function fixed(num){
	if(num  < 1){
		return num.toFixed(8);	
	}else{
		return num;	
	}
}
//除法
function Division(arg1,arg2){
	var t1=0,t2=0,r1,r2; 
	try{t1=arg1.toString().split(".")[1].length}catch(e){} 
	try{t2=arg2.toString().split(".")[1].length}catch(e){} 
	with(Math){ 
		r1=Number(arg1.toString().replace(".",""));
		r2=Number(arg2.toString().replace(".",""));
		return fixed((r1/r2)*pow(10,t2-t1));
	}
} 
//乘法
function Multiplication(arg1,arg2){
	var m=0,s1=arg1.toString(),s2=arg2.toString();
	try{m+=s1.split(".")[1].length}catch(e){} 
	try{m+=s2.split(".")[1].length}catch(e){} 
	return fixed(Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m));
} 
//表單送出共用function
function submit(target){
    //空值判斷
    $('#'+target).validate({
        rules:{
            'form_setConPwd':{
                equalTo:'#setNewPwd'
            }
        },
		onkeyup: false,
		submitHandler: function(form) { 
            //hidden空值判斷
            var pass = checkHidden(target); 
            if(pass == false){
                return false;
            }else{
                if(target == 'form_bid' || target == 'form_sell'){
                    var BTC_col = parseFloat($('#'+target+' .BTC_col').val());
                    var lastprice = parseFloat($('.nav_last span').html());
                    var tw_lastprice = lastprice*0.2;
                    //var alertX = (BTC_col/lastprice)*100;
                   
                    switch(target){
                        case 'form_bid':
                             var alertX = formatFloat(Division(BTC_col, lastprice),2)
                            if(BTC_col > lastprice+tw_lastprice){

                                if(!confirm('Notice: the price you set is '+alertX+'% higher than the latest price, do you still wish to proceed?')){
                                    return false;
                                }
                            }
                        break;
                        case 'form_sell':
                            var alertX = Division(BTC_col, lastprice)
                            if(BTC_col < tw_lastprice){
                                if(!confirm('Notice: the price you set is '+alertX+'% lower than the latest price, do you still wish to proceed?')){
                                    return false;          
                                }
                            }
                        break;
                    }
                }
                if($('#'+target).find('.amount').length > 0){
                    if(isNaN($('#'+target).find('.amount').val()) || parseInt($('#'+target).find('.amount').val()) < 50){
                        alert('Amount請輸入大於50');
                        return false;
                    }
                }
            form.submit(target);
            }
        }
    });
    $('#'+target).submit();
}
//檢查表單hidden
function checkHidden(target){
    var flag = true;
    //判斷有無hidden
    if($('#'+target).find('input.hidden').length > 0){
        //逐一檢查
        $('#'+target).find('input.hidden').each(function (){
            //若為必需
            if($(this).attr('required') == 'required'){
                //空值的話就放error msg
                if($(this).val() == ''){
                    var error_title = $(this).attr('title');   
                    $( $(this) ).before( '<label id="form_bid_btc-error" class="error " for="form_bid_btc">'+error_title+'</label>' );
                    flag = false;
                }
            }
        });
    }
    return flag;
}
/* 下拉貨幣+國家搜尋 */
var _dropMain = $('.drop_asse'); //下拉選單
var _dropToggle = _dropMain.find('.dropWrap'); 
var _dropOption = _dropMain.find('.dropMenu');
//(歐洲)國家選單    
_dropToggle.find('input').click(function(){ 
    if($(this).hasClass('Toggle')){
        return false;
    }else{
        changeDropWrapInput($(this), 'input');    
    }
});
//貨幣選單
_dropToggle.find('.dropToggle').click(function(){ 
    changeDropWrapInput($(this), 'dropToggle');
});
function changeDropWrapInput(_this, input){
    var _dropMenu = _this.parent('div').siblings('.dropMenu');
    var _dropMain = _this.parent().parent('.drop_asse');
	_dropMain.css({
		'z-index': 1
	});
	_dropMenu.show(); //顯示下拉選項
    _dropMenu.parent('.drop_asse').css({'height':_this.outerHeight(true)+_dropMenu.outerHeight(true), 'min-height':'200px'}); //下拉選單的高
    _dropMenu.find('li').bind( "click", function() {//選項被點選後回到預設值的動作
        var parent = $(this).parent();
        parent.hide();
		parent.parent('.drop_asse').attr('style','');
        if(input == 'dropToggle'){
            parent.siblings('.dropWrap').find('.dropToggle').html($(this).html());
            parent.parent('.drop_asse').siblings('input').val($(this).html()); 
        }else{
            parent.siblings('.dropWrap').find('input').val($(this).html());
            var error_lable = parent.siblings('.dropWrap').find('input').attr('class');
            $('#'+error_lable.split(" ")[0]).val($(this).html());
            $('#'+error_lable.split(" ")[0]+'-error').remove();
        }
        _dropMenu.find('li').unbind('click');
	});
}
/* 國家關鍵字搜尋 */
$('.form_depCountry').keyup(function (){
    setTimeout( searchCountry('international', $(this)),1000 );
});
/* 歐洲關鍵字搜尋 */
$('.form_withEuCountry').keyup(function (){
    setTimeout( searchCountry('europe', $(this)),1000 );
});
/* 搜尋function */
function searchCountry(sorce, _this){
    var kw = _this.val();
    var patt1;
    var result;
    if(sorce == 'international'){
        _this.parents('.dropWrap').siblings('.dropMenu.country.international').find('li').each(function (){
            patt1 = new RegExp('^'+kw,'i');
            if(!patt1.test($(this).html())){
                $(this).hide();
            }else{
                $(this).show();
            }
        });
    }else{
       _this.parents('.dropWrap').siblings('.dropMenu.country.europe').find('li').each(function (){
            patt1 = new RegExp('^'+kw,'i');
            if(!patt1.test($(this).html())){
                $(this).hide();
            }else{
                $(this).show();
            }
        });
    }
}/* 搜尋function End */
/* 下拉貨幣+國家搜尋 End */
$('.amount').keyup(function(event) {
    var toID = $(this).attr('toID');
    var value = $(this).val();
    $('#'+toID).val(value);
    $('#'+toID+'-error').remove();
});
/* 下拉選單選項陣列 */
function nextPage(_no){
    var data_arr = listData();
    if(!data_arr)return false;
    var data_arr_left  = data_arr[0];
    var data_arr_right = data_arr[1];
    var data_left = data_arr_left[_no], // 選項左邊陣列
        data_right = data_arr_right[_no]; // 選項右邊陣列
    $('.dropdownSel').children('li').remove(); // 清除DOM
    /* 依左邊內容陣列跑迴圈 */
    for (var i = 0; i < data_left.length; i++) { // 0 < 左邊內容陣列長度
        // 依序插入選項
        $('<li class="option_val"><a href="javascript:void(0);" title="'+data_left[i]+'"><!-- 最少26個，最多36個英數 --><span>'+data_left[i]+'</span><!-- 小數前4位，小數後6位 --><span>'+data_right[i]+'btc</span></a></li>').appendTo('.dropdownSel');
    };/* 依左邊內容陣列跑迴圈 - End */
    var next_no = _no + 1; // nextPage當前陣列索引值+1
    var prev_no =_no - 1; // prevPage當前陣列索引值-1
    /* 判斷選項超過14時，加入nextPage HTML */
    if(data_arr_left.length > 1){
        if(next_no == 1){ //左邊內容陣列長度不等於當前索引值+1
            // 插入nextPage HTML
            // 第一頁
            $('<li class="pageAcct"><a href="javascript:nextPage('+next_no+')" title="next page">next page</a></li>').appendTo($('.dropdownSel'));
        }else if(_no == data_arr_left.length-1){
            //最後頁
            // 插入nextPage HTML
            $('<li class="pageAcct"><a href="javascript:nextPage('+prev_no+')" title="prev page">previous page</a></li>').appendTo($('.dropdownSel'));
        }else{
            //中間頁
            $('<li class="pageAcct"><a href="javascript:nextPage('+prev_no+')" title="prev page">previous page</a><a href="javascript:nextPage('+next_no+')" title="next page">next page</a></li>').appendTo($('.dropdownSel'));
        }
    }else{
        $('<li><p></p></li>').appendTo($('.dropdownSel'));
    };/* 判斷選項超過14時，加入nextPage HTML - End */
    $('.dropdownSel').show();
    $('.dropdownTog').hide();     
}
function listData(){
    return false;
}/* 下拉選單選項陣列 End */
/* 下拉關閉 */
$(document).bind('click', 'body', function(){
    $(".dropdownTog, .drop_asse").bind('click', function(e){
        e.stopPropagation();
    });
    $('.dropdownSel').hide();
    $('.dropdownTog').show();
    $('.dropMenu').hide();
    $('.drop_asse').removeAttr('style');        
        

});
/* 下拉關閉 End */
/* 訂單管理雙重確認 */
function orderManage() {
    var _cancel = $('.orderMag'); //cancel
    var _orderMsg = $('.orderMsg'); //include Y/N
    var _msgNo = _orderMsg.find('.orderMsgN'); //No
    _cancel.bind('click', function(){ //點了cancel出現Y/N
        var _this = $(this);
        var _dbChk = _this.siblings('.orderMsg'); //include Y/N
        _this.hide();
        _dbChk.show();
    });
    _msgNo.bind('click', function(){ //點No回到cancel
        var _this = $(this);
        var _orderMsg = _this.parent(); //include Y/N
        _orderMsg.hide();
        _orderMsg.siblings('.orderMag').show();
    });
}
/* 訂單管理雙重確認 End */