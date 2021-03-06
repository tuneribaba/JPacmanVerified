var global_canKinesAlert = true;
var endl = '\n';
var tab = new Array();
var kinesoDrama;
tab[0] = '';
tab[1] = '\t';
for (var i=2; i<20; i++)
	tab[i] = tab[1]+tab[i-1];	
	
function dgv(wut) {
	if (!dg(wut))
		return false;
	else
		return dg(wut).value;
}

function dgChecked(x) {
	return eval('document.PsycHoForm.'+x+'.checked');
}

function dgSelected(x) {
	return eval('document.PsycHoForm.'+x+'.selected');
}

function k_getDir(x) {
	return (dgChecked(x)?'ltr':'rtl');
}

function k_getAlign(x) {
	return (dgChecked(x+'AlignErLeft')?'left':(dgChecked(x+'AlignErRight')?'right':'center'))
}

function k_getAlignSide(x) {
	return k_getAlign(x);
//	return (dgSelected(x+'AlignEr[0]')?'left':(dgSelected(x+'AlignEr[2]')?'right':'center'))
}

function k_getFFamily(x) {
	return (''+dgv(x+'FontFamily')+', sans-serif');
}

function k_getFontSize(x) {
	return(dgv(x+'FontSizeEr'));
}

function k_getLineHeight(x) {
	return(dgv(x+'LineHeightEr'));
}

function k_getColor(x) {
	var ret = dgv(x);
	if (ret == '')
		ret = 'transparent';
	var tempVal = name2rgb(ret);
	if (tempVal)
		ret = tempVal;
	return ret;
}

function k_getFontEffects(x) {
	var ret = '';
	if (dgChecked(x+'FontBoldEr'))
		ret += 'font-weight: bold; ';
	if (dgChecked(x+'FontItalicEr'))
		ret += 'font-style: italic; ';
	if (dg(x+'FontUnderlineEr') && dgChecked(x+'FontUnderlineEr'))
		ret += 'text-decoration: underline; ';
	return ret;
}

function k_border(x) {
	if (k_getColor(x+'BorderColorEr') == 'transparent')
		return '0px '+dgv(x+'BorderStyleEr')+' '+k_getColor(x+'BorderColorEr');
	else
		return dgv(x+'BorderWidthEr')+' '+dgv(x+'BorderStyleEr')+' '+k_getColor(x+'BorderColorEr');
}

function k_tripleBg(x) {
	var ret = '';
	ret += k_getColor(x+'BackColorEr');
	if (dgChecked(x+'BackIsTextureEr'))
		ret += ' url("'+dgv(x+'BackTextureEr')+'") repeat top center';
	else
		if (dgChecked(x+'BackIsImageEr'))
			ret += ' url("'+dgv(x+'BackImageEr')+'") no-repeat top center';	
	return ret;
}

function k_tripleBgSide(x) {
	var ret = '';
	ret += k_getColor(x+'BackColorEr');
	if (dgSelected(x+'BackBackEr[1]'))
		ret += ' url("'+dgv(x+'BackTextureEr')+'") repeat top center';
	else
		if (dgSelected(x+'BackBackEr[2]'))
			ret += ' url("'+dgv(x+'BackImageEr')+'") no-repeatt top center';	
	return ret;
}

function k_sideFeatures(side) {
	var t = '';

	t += tab[2]+'#Side'+side+'Col .Box '+tab[2]+'{ '
		+ 'background: '+k_tripleBgSide('_'+side+'_DefaultDiv')+'; '
		+ 'border: '+k_border('_'+side+'_Default')+'; '
		+ 'font-family: '+k_getFFamily(side+'_PartDiv_0')+'; '		
		+ '}'+endl;

	if (!global_isMinimized) {	
		t += tab[2]+'#Side'+side+'Col a '+tab[2]+'{ '
			+ 'color: '+k_getColor('_'+side+'_LinkColorEr')+'; '
			+ '}'+endl;
	
		t += tab[2]+'#Side'+side+'Col a:hover '+tab[1]+'{ '
			+ 'color: '+k_getColor('_'+side+'_LinkHoverEr')+'; '
			+ '}'+endl;
	}
	
	t += tab[2]+'#Side'+side+'Col .Sep '+tab[2]+'{ '
		+ 'height: '+dgv('_'+side+'_PartSepHeight')+'px; '
		+ '}'+endl;		
		
	var mb = ((parseInt(dgv('_'+side+'_PartSepHeight'))-parseInt(dgv('_'+side+'_SepBorderWidthEr')))/2);		
	t += tab[2]+'#Side'+side+'Col .SepS'+tab[2]+'{ '
		+ 'height: '+mb+'px; '
		+ 'margin-bottom: '+mb+'px; '
		+ 'border-bottom: '+k_border('_'+side+'_Sep')+'; '
		+ 'font-size: 1px '
		+ '}'+endl;			
		
	t += tab[2]+'#Side'+side+'Col .Title'+tab[1]+'{ '
		+ 'font-size: '+k_getFontSize(side+'_Title_0')+'; '
		+ 'color: '+k_getColor('_'+side+'_TitleColorEr')+'; '		
		+ k_getFontEffects(side+'_Title_0')
		+ 'border-bottom: 1px solid '+k_getColor('_'+side+'_TitleUnderlineEr')+'; '
		+ 'margin-bottom: 3px; '
		+ '}'+endl;	

	var sidePaddingBox = parseInt(dgv('SideSpcPaddingView'))+'px';
	t += tab[2]+'#Side'+side+'Col .Inner'+tab[1]+'{ '
		+ 'text-align: '+k_getAlignSide(side+'_DefaultDiv_0')+'; '
		+ 'font-size: '+k_getFontSize(side+'_DefaultDiv_0')+'; '		
		+ 'color: '+k_getColor('_'+side+'_DefaultDivColorEr')+'; '
		+ 'padding: 5px '+sidePaddingBox+' 8px '+sidePaddingBox+'; '
		+ 'line-height: '+k_getLineHeight('_'+side+'_PartDiv')+'; '		
		+ '}'+endl;
		
	if (global_prov == 'blogger') {
		t += tab[2]+'#commentInline'+tab[2]+'{ '
			+ 'margin: 10px 20px; '
			+ 'text-align: left; '
			+ '}'+endl;
		t += tab[2]+'.commentHead'+tab[2]+'{ '
			+ 'margin: 0px 10px 20px 10px; '
			+ 'padding-top: 5px; '
			+ 'color: #333; '
			+ '}'+endl;
		t += tab[2]+'.comments-block'+tab[2]+'{ '
			+ 'line-height: 150%; '
			+ 'padding: 0px 30px; '
			+ '}'+endl;			
		t += tab[2]+'.comment-poster'+tab[2]+'{ '
			+ 'padding-bottom: 10px; '
			+ '}'+endl;
		t += tab[2]+'.comment-body'+tab[2]+'{ '
			+ 'margin: 0px; '
			+ 'padding-bottom: 10px; '
			+ 'padding-left: 20px; '
			+ '}'+endl;
		t += tab[2]+'.innerCmntBody'+tab[2]+'{ '
			+ 'margin: 5px 0px; '
			+ '}'+endl;
		t += tab[2]+'.comment-timestamp'+tab[1]+'{ '
			+ 'margin: 5px 0px; '
			+ 'padding: 0px 0px 8px 20px; '
			+ 'color: #999; '						
			+ '}'+endl;
		t += tab[2]+'.comment-timestamp a '+tab[1]+'{ '
			+ 'color: #666; '						
			+ '}'+endl;
		t += tab[2]+'.deleted-comment'+tab[1]+'{ '
			+ 'font-style: italic; '
			+ 'color: gray; '
			+ '}'+endl;
	}		
		
	return t;
}

function k__prov_blogger_date() {
	var t = '';
	if (dgChecked('DateFormatIsHijri'))	{
			t += '<BlogDateHeader><script type="text/javascript" language="javascript">document.write(ToHijri(\'<$BlogDateHeaderDate$>\'));</script></BlogDateHeader>';
		if (global_lang == 'fa')
			kines_alert(translateIt('kines date alert'));
		else
			kines_alert('Warning: The date format (in order to convert to Hijri) shall be MM/DD/YYYY like 10/25/2005.');
	}
	else
		t += '<BlogDateHeader><$BlogDateHeaderDate$></BlogDateHeader>';
	return t;
}

function k__prov_blogger_cmnt() {
	var t = '';
	t += 	'<BlogItemCommentsEnabled>'
		+			'<a class="PostCmnt" href="<$BlogItemCommentCreate$>"><$BlogItemCommentCount$> comments</a>'
		+	'</BlogItemCommentsEnabled>'
		+	'<BlogItemBacklinksEnabled>'
		+		'<a class="PostCmnt" href="<$BlogItemPermalinkUrl$>#links">links to this post</a>'
		+	'</BlogItemBacklinksEnabled>'+endl;	
	return t;
}

function k__prov_blogger_inlineCmnts() {
	var t = '';
	t += 			'<ItemPage>'+endl;
	
	t += tab[5]+		'<div id="commentInline">'+endl;		
	t += tab[6]+			'<BlogItemCommentsEnabled>'+endl;
	t += tab[7]+				'<div class="commentHead"><$BlogItemCommentCount$> Comments:</div>'+endl;	
	t += tab[7]+				'<div class="comments-block">'+endl;
	t += tab[8]+					'<BlogItemComments>'+endl;
	t += tab[9]+						'<div class="comment-poster" id="c<$BlogCommentNumber$>">'+endl;
	t += tab[10]+							'<a name="c<$BlogCommentNumber$>"></a>'+endl;
	t += tab[10]+							'<$BlogCommentAuthor$> said...'+endl;	
	t += tab[9]+						'</div>'+endl;	
	t += tab[9]+						'<div class="comment-body">'+endl;
	t += tab[10]+							'<div class="innerCmntBody"><$BlogCommentBody$></div>'+endl;
	t += tab[9]+						'</div>'+endl;	
	t += tab[9]+						'<div class="comment-timestamp">'+endl;
	t += tab[10]+								'<a href="#c<$BlogCommentNumber$>" title="comment permalink"><$BlogCommentDateTime$></a>'+endl;
	t += tab[10]+							'<$BlogCommentDeleteIcon$>'+endl;	
	t += tab[9]+						'</div>'+endl;	
	t += tab[9]+						'<hr width="75%" color="gray" size="1px" />'+endl;	
	t += tab[8]+					'</BlogItemComments>'+endl;			
	t += tab[7]+				'</div>'+endl;
	t += tab[7]+				'<div class="comment-timestamp"><$BlogItemCreate$></div>'+endl;		
	t += tab[6]+			'</BlogItemCommentsEnabled>'+endl;				
		
	t += tab[6]+			'<BlogItemBacklinksEnabled>'+endl;
	t += tab[7]+				'<a name="links"></a><div class="commentHead">Links to this post:</div>'+endl;			
	t += tab[7]+				'<div class="comments-block">'+endl;
	t += tab[8]+					'<BlogItemBacklinks>'+endl;
	t += tab[9]+						'<div class="comment-title">'+endl;
	t += tab[10]+							'<$BlogBacklinkControl$>'+endl;
	t += tab[10]+							'<a href="<$BlogBacklinkURL$>" rel="nofollow"><$BlogBacklinkTitle$></a> <$BlogBacklinkDeleteIcon$>'+endl;	
	t += tab[9]+						'</div>'+endl;	
	t += tab[9]+						'<div class="comment-body">'+endl;
	t += tab[10]+							'<$BlogBacklinkSnippet$>'+endl;
	t += tab[10]+							'<br />'+endl;
	t += tab[10]+							'<span class="comment-poster">'+endl;	
	t += tab[11]+								'<i>posted by <$BlogBacklinkAuthor$> @ <$BlogBacklinkDateTime$></i>'+endl;
	t += tab[10]+							'</span>'+endl;		
	t += tab[9]+						'</div>'+endl;	
	t += tab[8]+					'</BlogItemBacklinks>'+endl;			
	t += tab[7]+				'</div>'+endl;
	t += tab[7]+				'<div class="comment-timestamp"><$BlogItemBacklinkCreate$></div>'+endl;		
	t += tab[6]+			'</BlogItemBacklinksEnabled>'+endl;					
	t += tab[6]+			'<div class="comment-timestamp"><a href="<$BlogURL$>"> << Home</a></div>'+endl;
	
	t += tab[5]+		'</div>'+endl;		
	t += tab[4]+	'</ItemPage>'+endl;	
	
	return t;
}

function k__prov_blogfa_cmnt() {
	var t = '';
	t += 			'<BlogComment>'+endl;
	t += tab[8]+		'<script language="javascript" type="text/javascript">GetBC("<-PostId->");</script>'+endl;		
	t += tab[7]+	'</BlogComment>'+endl;
	return t;
}

function k__prov_persianblog_cmnt() {
	var t = '';
	t += 				'<a href="javascript:void(0)" target="_self" onclick="window.open (\'ucomments.asp?id=<#postid#>\',null,\'width=600, height=500, scrollbars=yes, resizable=yes\');">'+endl;
	t += tab[8]+		'<script type="text/javascript" language="javascript">document.write(get_cc(<#postid#>))</script>'+endl;		
	t += tab[7]+	'</a>'+endl;
	return t;
}

function k__commentingHeaderScript() {
	var t = '';
	switch (global_prov) {
		case 'blogfa' :
			t += endl;
			t += tab[1]+'<script type="text/javascript" language="javascript">'+endl;
			t += tab[1]+'<!--'+endl;
			t += tab[2]+	'function GetBC(lngPostid) {'+endl;
			t += tab[3]+		'var intTimeZone="<-BlogTimeZone->", strBlogId="<-BlogId->", intCount=-1, strResult="";'+endl;
			t += tab[3]+		'try {'+endl;	
			t += tab[4]+			'for (i=0;i<BlogComments.length;i+=2) {'+endl;
			t += tab[5]+				'if (BlogComments[i]==lngPostid)'+endl;
			t += tab[6]+					'intCount=BlogComments[i+1] ;'+endl;
			t += tab[4]+			'}'+endl;
			t += tab[3]+		'} catch(e) {}'+endl;
			t += tab[3]+		'if (intCount == -1) strResult="'+translateIt('archive e nazaraat')+'";'+endl;
			t += tab[3]+		'if (intCount == 0)	strResult="'+translateIt('nazar bedahid')+'";'+endl;
			t += tab[3]+		'if (intCount == 1)	strResult="'+translateIt('1 nazar')+'";'+endl;
			t += tab[3]+		'if (intCount > 1)	strResult=intCount + " '+translateIt('nazar')+'";'+endl;
			t += tab[3]+			'var strUrl = "http://www.blogfa.com/Comments.aspx?blogid=" + strBlogId + "&postid=" + lngPostid + "&timezone=" + intTimeZone;'+endl;
			t += tab[3]+			'var strResult = "<a href=\\\"javascript:void(0)\\\" target=\\\"_self\\\" onclick=\\\"javascript:window.open(\'"+strUrl+"\',\'blogfa_comments\',\'status=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,width=500px,height=500px\')\\\" >"+strResult+"</a>" ;'+endl;
			t += tab[3]+		'document.write(strResult);'+endl;
			t += tab[2]+	'}'+endl;		
			t += tab[2]+	'function OpenLD() {'+endl;			
			t += tab[3]+		'window.open(\'LinkDump.aspx\',\'blogfa_ld\',\'status=yes,scrollbars=yes,toolbar=no,menubar=no,location=no ,width=500px,height=500px\');'+endl;	
			t += tab[3]+		'return true;';
			t += tab[2]+	'}'+endl;	
			t += tab[1]+'// -->'+endl;
			t += tab[1]+'</script>'+endl;
			break;
		
		case 'persianblog' :	
			t += endl;
				t += tab[1]+'<script type="text/javascript" language="javascript" src="http://commenting.persianblog.com/cc.asp?username=<#user#>"></script>'+endl;
			t += tab[1]+'<script type="text/javascript" language="javascript">'+endl;
			t += tab[1]+'<!--'+endl;							
			t += tab[2]+	'function get_cc(postid) {'+endl;
			t += tab[3]+		'for (var i=0; i<PB_PIPP; i++)'+endl;
			t += tab[4]+			'if (PB_CCA[i*2] == postid)'+endl;
			t += tab[5]+				'if (PB_CCA[i*2+1] > 0)'+endl;
			t += tab[6]+					'return "( "+PB_CCA[i*2+1]+" '+translateIt('nazar')+' )";'+endl;
			t += tab[5]+				'else'+endl;
			t += tab[6]+					'if (PB_CCA[i*2+1] == 0)'+endl;
			t += tab[7]+						'return "( '+translateIt('nazar bedin')+' )";'+endl;
			t += tab[6]+					'else'+endl;
			t += tab[7]+						'if (PB_CCA[i*2+1] == -1)'+endl;
			t += tab[8]+							'return "( '+translateIt('gheyre faaal')+' )";'+endl;			
			t += tab[3]+		'return "( '+translateIt('baygaani shode')+' )";'+endl;
			t += tab[2]+	'}'+endl;	
			t += tab[1]+'// -->'+endl;				
			t += tab[1]+'</script>'+endl;			
			break;
			
		case 'blogger' :
			t += endl;
			t += tab[1]+'<!-- Insert your commenting javascript code here -->'+endl;
			if (dgChecked('DateFormatIsHijri'))	{
				t += tab[1]+'<script type="text/javascript" language="javascript">'+endl;
				t += tab[1]+'<!--'+endl;							
				t += tab[2]+		'/* This Solar Date Utility Function is Copyrighted(C) to Mahmood Shafiee Zaragar [http://sobh.netfirms.com] and Aideen NasiriShargh [http://aideen.org] and has been prepard only for PsycHo [http://psyc.horm.org] use. */'+endl;
				t += tab[2]+		'var DaysToMonth = [[0, 31, 62, 93, 124, 155, 186, 216, 246, 276, 306, 336, 365], [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365]];'+endl;
				t += tab[2]+		'var MonthNames = new Array("&#1601;&#1585;&#1608;&#1585;&#1583;&#1740;&#1606;", "&#1575;&#1585;&#1583;&#1740;&#1576;&#1607;&#1588;&#1578;", "&#1582;&#1585;&#1583;&#1575;&#1583;", "&#1578;&#1740;&#1585;", "&#1605;&#1585;&#1583;&#1575;&#1583;", "&#1588;&#1607;&#1585;&#1740;&#1608;&#1585;", "&#1605;&#1607;&#1585;", "&#1570;&#1576;&#1575;&#1606;", "&#1570;&#1584;&#1585;", "&#1583;&#1740;", "&#1576;&#1607;&#1605;&#1606;", "&#1575;&#1587;&#1601;&#1606;&#1583;");'+endl;
				t += tab[2]+		'var WeekDayNames = new Array("&#1740;&#1705;&#1588;&#1606;&#1576;&#1607;", "&#1583;&#1608;&#1588;&#1606;&#1576;&#1607;", "&#1587;&#1607; &#1588;&#1606;&#1576;&#1607;", "&#1670;&#1607;&#1575;&#1585; &#1588;&#1606;&#1576;&#1607;", "&#1662;&#1606;&#1580; &#1588;&#1606;&#1576;&#1607;", "&#1580;&#1605;&#1593;&#1607;", "&#1588;&#1606;&#1576;&#1607;");'+endl;
				t += tab[2]+		'var MonthDayNames = new Array("&#1575;&#1608;&#1604;", "&#1583;&#1608;&#1605;", "&#1587;&#1608;&#1605;", "&#1670;&#1607;&#1575;&#1585;&#1605;", "&#1662;&#1606;&#1580;&#1605;", "&#1588;&#1588;&#1605;", "&#1607;&#1601;&#1578;&#1605;", "&#1607;&#1588;&#1578;&#1605;", "&#1606;&#1607;&#1605;", "&#1583;&#1607;&#1605;", "&#1740;&#1575;&#1586;&#1583;&#1607;&#1605;", "&#1583;&#1608;&#1575;&#1586;&#1583;&#1607;&#1605;", "&#1587;&#1740;&#1586;&#1583;&#1607;&#1605;", "&#1670;&#1607;&#1575;&#1585;&#1583;&#1607;&#1605;", "&#1662;&#1575;&#1606;&#1586;&#1583;&#1607;&#1605;", "&#1588;&#1575;&#1606;&#1586;&#1583;&#1607;&#1605;", "&#1607;&#1601;&#1583;&#1607;&#1605;", "&#1607;&#1580;&#1583;&#1607;&#1605;", "&#1606;&#1608;&#1586;&#1583;&#1607;&#1605;", "&#1576;&#1740;&#1587;&#1578;&#1605;", "&#1576;&#1740;&#1587;&#1578; &#1608; &#1740;&#1705;&#1605;", "&#1576;&#1740;&#1587;&#1578; &#1608; &#1583;&#1608;&#1605;", "&#1576;&#1740;&#1587;&#1578; &#1608; &#1587;&#1608;&#1605;", "&#1576;&#1740;&#1587;&#1578; &#1608; &#1670;&#1607;&#1575;&#1585;&#1605;", "&#1576;&#1740;&#1587;&#1578; &#1608; &#1662;&#1606;&#1580;&#1605;", "&#1576;&#1740;&#1587;&#1578; &#1608; &#1588;&#1588;&#1605;", "&#1576;&#1740;&#1587;&#1578; &#1608; &#1607;&#1601;&#1578;&#1605;", "&#1576;&#1740;&#1587;&#1578; &#1608; &#1607;&#1588;&#1578;&#1605;", "&#1576;&#1740;&#1587;&#1578; &#1608; &#1606;&#1607;&#1605;", "&#1587;&#1740; &#1575;&#1605;", "&#1587;&#1740; &#1608; &#1740;&#1705;&#1605;");'+endl;
				t += tab[2]+		'var PersianDigits = new Array("&#1776;", "&#1777;", "&#1778;", "&#1779;", "&#1780;", "&#1781;", "&#1782;", "&#1783;", "&#1784;", "&#1785;");'+endl;
				t += tab[2]+	'function PersianNumberString(num) {	var ret = ""; do { ret = PersianDigits[(num%10)] + ret; num = Math.floor(num/10);	} while (num > 0);	return ret; }'+endl;
				t += tab[2]+	'function IsLeapYear(DateKind, Year) { 	return (DateKind)?((Year % 4 == 0) && ((Year % 100 != 0) || (Year % 400 == 0))):(((Year + 38) * 31 % 128) <= 30); }'+endl;
				t += tab[2]+	'function ToHijri(DateStr) {'+endl;
				t += tab[3]+		'	var SplDate = DateStr.split("/"); if(SplDate.length<3) return("Date ["+DateStr+"] is not in MM/DD/YYYY format."); var M = new Object, D = new Object, Y = new Object, Days, LeapDay; '+endl;
				t += tab[3]+		'M.value = parseInt(SplDate[0]);	D.value = parseInt(SplDate[1]);	Y.value = parseInt(SplDate[2]);	LeapDay = IsLeapYear(0, Y.value-622);'+endl;
				t += tab[3]+		'	Days = DaysToMonth[1][M.value - 1] + D.value + ((M.value > 2) && IsLeapYear(1, Y.value)) + 286 + (IsLeapYear(1, Y.value - 1) && LeapDay);'+endl;
				t += tab[3]+		'Y.value -= 622; M.value = 0; D.value = 0;'+endl;
				t += tab[3]+		'if (Days > (365 + LeapDay))	{ Y.value ++; Days -= (365 + LeapDay); }'+endl;
				t += tab[3]+		'LeapDay = 0;'+endl;
				t += tab[3]+		'for (var m = 1; m <= 12; m++) {	LeapDay |= ((m == 13) && (IsLeapYear(0, Y.value)));	if (Days <= (DaysToMonth[0][m] + LeapDay)) { M.value = m; D.value = Days - (DaysToMonth[0][M.value - 1] + LeapDay); break; }	 }'+endl;
				t += tab[3]+			'return (MonthDayNames[D.value - 1] + " " + MonthNames[M.value - 1] + " &#1605;&#1575;&#1607; " + PersianNumberString(Y.value)); '+endl;
				t += tab[2]+	'}'+endl;
				t += tab[1]+'// -->'+endl;				
				t += tab[1]+'</script>'+endl;
			}
			break;
	}	
	return t;
}

function kines_alert(s) {
	if (global_canKinesAlert) {
		SwitchDisplay('PsycHokinesisAlertDiv', 1);
			dg('PsycHokinesisAlertInner').innerHTML = dg('PsycHokinesisAlertInner').innerHTML+' <span class="dot">&#8226;</span> '+zwnjify(s)+'<br />';
	}
}

function k_prov_blogtitle() {
	var t = '';
	switch (global_prov) {
		case 'blogger' :	
			t = 		'<ItemPage><a href="<$BlogURL$>" class="TitleItemLink"></ItemPage>';	
			t += tab[5]+	'<$BlogTitle$>';
			t += tab[4]+'<ItemPage></a></ItemPage>';
			break;
		case 'blogfa' :			t = '<-BlogTitle->';			break;
		case 'persianblog' :	t = '<#blogtitle#>';			break;			
	}
	return t;
}

function k_prov_blogdescription() {
	var t = '';
	switch (global_prov) {
		case 'blogger' :		t = '<$BlogDescription$>';		break;
		case 'blogfa' :			t = '<-BlogDescription->';		break;
		default :
			if (global_lang == 'fa')
				kines_alert(translateIt('poshtibani blogdesc'));
			else
				kines_alert('Your provider doesn\'t have default value of "BlogDescription".');
	}
	return t;
}

function k_prov_pagetitle() {
	var t = '';
	switch (global_prov) {
		case 'blogger' :		t = '<$BlogPageTitle$>';		break;
		case 'blogfa' :			t = '<-BlogTitle->';			break;
		case 'persianblog' :	t = '<#blogtitle#>';			break;					
	}
	return t;
}

function k_prov_startertag() {
	var t = '';
	switch (global_prov) {
		case 'blogger' :		t = '<Blogger>';			break;
		case 'blogfa' :			t = '<BLOGFA>';				break;
		case 'persianblog' :	t = '<persianblog>';		break;		
	}
	return t;
}

function k_prov_finishertag() {
	var t = '';
	switch (global_prov) {
		case 'blogger' :		t = '</Blogger>';			break;
		case 'blogfa' :			t = '</BLOGFA>';			break;
		case 'persianblog' :	t = '</persianblog>';		break;				
	}
	return t;
}

function k_prov_postidname() {
	var t = '';
	switch (global_prov) {
		case 'blogger' :		t = '<$BlogItemNumber$>';	break;
		case 'blogfa' :			t = '<-PostId->';			break;
		case 'persianblog' :	t = '<#postid#>';			break;		
		
	}
	return t;
}

function k_prov_posttitle() {
	var t = '';
	switch (global_prov) {
		case 'blogger' :		
			t = 	'<BlogItemUrl><a href="<$BlogItemUrl$>" title="external link"></BlogItemUrl>'
				+		'<BlogItemTitle><$BlogItemTitle$></BlogItemTitle>'
				+	'<BlogItemUrl></a></BlogItemUrl>';
			break;
		case 'blogfa' :			t = '<-PostTitle->';		break;
		case 'persianblog' :	t = '<#title#>';			break;					
	}
	return t;
}

function k_prov_postdate() {
	var t = '';
	switch (global_prov) {
		case 'blogger' :		t = k__prov_blogger_date();	break;
		case 'blogfa' :			t = '<-PostDate->';			break;
		case 'persianblog' :	t = '<#date#>';				break;
	}
	return t;
}

function k_prov_postbody() {
	var t = '';
	switch (global_prov) {
		case 'blogger' :		t = '<$BlogItemBody$>';		break;
		case 'blogfa' :			t = '<-PostContent-><BlogExtendedPost><br /><a href="<-PostLink->">'+translateIt('edaameye matlab')+'</a></BlogExtendedPost>';		break;
		case 'persianblog' :	t = '<#body#>';				break;
	}
	return t;
}

function k_prov_postdatetime() {
	var t = '';
	switch (global_prov) {
		case 'blogger' :		t = '<$BlogItemDateTime$>';	break; 
		case 'blogfa' :			t = '<-PostTime->';			break;
		case 'persianblog' :	t = '<#time#>';				break;		
	}
	return t;
}

function k_prov_authorname() {
	var t = '';
	switch (global_prov) {
		case 'blogger' :		t = '<$BlogItemAuthorNickname$>';						break;
		case 'blogfa' :			t = '<a href="<-PostAuthorLink->"><-BlogAuthor-></a>';	break;
		case 'persianblog' :	t = '<#author#>';										break;
	}
	return t;
}

function k_prov_categoryId() {
	var t = '';
	switch (global_prov) {
		case 'blogfa' :			t = '<a href="<-PostCategoryId->"><-PostCategory-></a>';				break;
		default :
			if (global_lang == 'fa')
				kines_alert(translateIt('poshtibani categ id'));
			else
				kines_alert('Your provider doesn\'t have default value of "CategoryIdInFootnote".');
	}
	return t;
}

function k_prov_permlinkurl() {
	var t = '';
	switch (global_prov) {
		case 'blogger' :		t = '<$BlogItemPermalinkUrl$>';			break; 
		case 'blogfa' :			t = '<-PostLink->';						break; 
		case 'persianblog' :	t = '<#PostArchiveFile#>#<#postid#>';	break; 
	}
	return t;
}

function k_prov_commenting() {
	var t = '';
	switch (global_prov) {
		case 'blogger' :		t = k__prov_blogger_cmnt();		break;
		case 'blogfa' :			t = k__prov_blogfa_cmnt();		break;
		case 'persianblog' :	t = k__prov_persianblog_cmnt();	break;		
	}
	return t;
}

function k_prov_inlineComments() {
	var t = '';
	switch (global_prov) {
		case 'blogger' :		t = k__prov_blogger_inlineCmnts();		break;
	}
	return t;
}

function k__MainRepeating() {
	var t = '';
	t += tab[4]+k_prov_startertag()+endl;
	t += tab[4]+'<div class="OnePost">'+endl;
	t += tab[5]+	'<a name="'+k_prov_postidname()+'"></a>'+endl;			
	t += tab[5]+	'<div class="TopPost"><div class="FullWidth">'+endl;
	t += tab[6]+		'<div class="DateHeaderPost">'+endl;
	t += tab[7]+			k_prov_postdate()+endl;		
	t += tab[6]+		'</div>'+endl;
	t += tab[6]+		'<div class="TitleHeaderPost">'+endl;
	t += tab[7]+			k_prov_posttitle()+endl;
	t += tab[6]+		'</div>'+endl;		
	t += tab[6]+		'<div class="Clearer"></div>'+endl;		
	t += tab[5]+	'</div></div>'+endl;
	t += tab[5]+	'<div class="MidPost"><div class="FullWidth">'+endl;
	t += tab[6]+		'<div class="PostTextBody">'+endl;
	t += tab[7]+			k_prov_postbody()+endl;
	t += tab[6]+		'</div>'+endl;		
	t += tab[5]+	'</div></div>'+endl;

	var tempStr = dgv('PermLinkExp'), cur;

	cur = tempStr.indexOf(translateIt('!Zamaan'));			
	if (cur == -1)
		cur = tempStr.indexOf('$TIME');
	if (cur != -1)
		tempStr = tempStr.substring(0, cur)+k_prov_postdatetime()+tempStr.substring(cur+5, tempStr.length);

	cur = tempStr.indexOf(translateIt('!Nevis'));			
	if (cur == -1)
		cur = tempStr.indexOf(translateIt('!Neviis'));
	if (cur == -1)
		cur = tempStr.indexOf('$AUTH');	
	if (cur != -1)
		tempStr = tempStr.substring(0, cur)+k_prov_authorname()+tempStr.substring(cur+5, tempStr.length);
		
	var theDate = dg('OnePostDateTop').innerHTML;
	var extspc = 0;
	cur = tempStr.indexOf(translateIt('!Tarikh'));			
	if (cur == -1)
		cur = tempStr.indexOf(translateIt('!Tariikh'));
	if (cur == -1) {
		cur = tempStr.indexOf('$DATE');
		extspc = -1
	}
	global_canKinesAlert = false;
	if (cur != -1)
		tempStr = tempStr.substring(0, cur)+k_prov_postdate()+tempStr.substring(cur+6+extspc, tempStr.length);					
	global_canKinesAlert = true;
						
	cur = tempStr.indexOf(translateIt('!Mabhas'));			
	if (cur == -1)
		cur = tempStr.indexOf('$CATG');			
	if (cur != -1)
		tempStr = tempStr.substring(0, cur)+k_prov_categoryId()+tempStr.substring(cur+5, tempStr.length);
	var tempStrOutSide = '';
	if (global_prov == 'blogfa') {
		tempStrOutSide = tempStr;
		tempStr = '<span style="font-style: normal;"> + </span>';
	}
	t += tab[5]+	'<div class="BotPost"><div class="FullWidth">'+endl;
	t += tab[6]+		'<div class="PermFooterPost">'+endl;
	t += tab[7]+			'<a href="'+k_prov_permlinkurl()+'" title="permanent link">'+tempStr+'</a>'+tempStrOutSide+endl;
	t += tab[6]+		'</div>'+endl;	
	t += tab[6]+		'<div class="CmntFooterPost">'+endl;
	if (global_prov == 'blogger')
		t += tab[6]+		'<!-- Insert your external commenting service scripts here and remove the line below -->'+endl;
	t += tab[7]+			k_prov_commenting();
	t += tab[6]+		'</div>'+endl;	
	t += tab[6]+		'<div class="Clearer"></div>'+endl;
	t += tab[5]+	'</div></div>'+endl;		
	t += tab[4]+'</div>'+endl;

	t += tab[4]+k_prov_inlineComments()+endl;

	t += tab[4]+'<div class="PostSep"><div class="PostSepS"></div></div>'+endl;
	t += tab[4]+k_prov_finishertag()+endl;	
	return t;
}

function k__MainColVal() {
	var t = '';		
	t += tab[2]+'<!-- ==================== Main Column ==================== -->'+endl;	
	t += tab[2]+'<div id="MainCol">'+endl;
	t += tab[3]+	'<div id="MainColInner">'+endl;
	t += k__MainRepeating();
	t += tab[3]+	'</div>'+endl;
	t += tab[2]+'</div>'+endl;		
	t += endl;
	return t;
}

function k__specialdest_home() {
	var t ='';
	switch (global_prov) {
		case 'blogger' :		t += '<$BlogURL$>';					break;
		case 'blogfa' :			t += '<-BlogUrl->';					break;
		case 'persianblog' :	t += '<#user#>.persianblog.com';	break;		
	}
	return t;
}

function k__specialdest_email() {
	var t ='';
	switch (global_prov) {
		case 'blogger' :		t += '<$BlogOwnerEmail$>';			break;
		case 'blogfa' :			t += '<-BlogEmail->';				break;
		case 'persianblog' :	t += '<#email#>';					break;		
	}
	return t;
}

function k__specialdest_archive() {
	var t ='';
	switch (global_prov) {
		case 'blogfa' :			t += '<-BlogArchiveLink->';			break;
		case 'persianblog' :	t += '<#ArchiveIndex#>';			break;		
		default :
			if (global_lang == 'fa')
				kines_alert(translateIt('poshtibani archive index link'));
			else
				kines_alert('Your provider doesn\'t support the feature "BlogArchiveIndexLink".');			
	}
	return t;
}

function k__specialdest_rss() {
	var t ='';
	switch (global_prov) {
		case 'blogger' :		t += 'atom.xml';					break;  
		case 'blogfa' :			t += '<-BlogXmlLink->';				break;
		default :
			if (global_lang == 'fa')
				kines_alert(translateIt('poshtibani rss'));
			else
				kines_alert('Your provider doesn\'t support the feature "RSSFeeding".');			
	}
	return t;
}

function k__specialdest_custom() {
	var t ='';
	switch (global_prov) {
		case 'blogfa' :			t += '<-BlogCustomHtml->';			break;
		default :
			if (global_lang == 'fa')
				kines_alert(translateIt('poshtibani custom html'));
			else
				kines_alert('Your provider doesn\'t support the feature "CustomHTML".');			
	}
	return t;
}

function k__special_archive(pre, pst) {
	var t ='';
	switch (global_prov) {
		case 'blogger' :
			t += tab[6]+'<BloggerArchives>'+endl;
			t += tab[7]+	pre+'<a href="<$BlogArchiveURL$>"><$BlogArchiveName$></a>'+pst+'<br />'+endl;
			t += tab[6]+'</BloggerArchives>'+endl;	
			break;
		case 'blogfa' :
			t += tab[6]+'<BlogArchive>'+endl;
			t += tab[7]+	pre+'<a href="<-ArchiveLink->"><-ArchiveTitle-></a>'+pst+'<br />'+endl;
			t += tab[6]+'</BlogArchive>'+endl;	
			break;			
		default :
			if (global_lang == 'fa')
				kines_alert(translateIt('poshtibani archive index list'));
			else
				kines_alert('Your provider doesn\'t support the feature "BlogArchiveIndexListing".');	
	}
	return t;
}

function k__special_recent(pre, pst) {
	var t ='';
	switch (global_prov) {
		case 'blogger' :
			t += tab[6]+'<BloggerPreviousItems>'+endl;
			t += tab[7]+	pre+'<a href="<$BlogItemPermalinkURL$>"><$BlogPreviousItemTitle$></a>'+pst+'<br />'+endl;
			t += tab[6]+'</BloggerPreviousItems>'+endl;	
			break;
		default :
			if (global_lang == 'fa')
				kines_alert(translateIt('poshtibani recent entries'));
			else
				kines_alert('Your provider doesn\'t support the feature "BlogRecentEntries".');						
	}
	return t;
}

function k__special_profile(pre, pst) {
	var t ='';
	switch (global_prov) {
		case 'blogger' :
			t += tab[6]+pre+'<$BlogMemberProfile$>'+pst+endl;
			break;
		case 'blogfa' :
			t += tab[6]+'<BlogProfile>'+endl;
			t += tab[7]+	'<BlogPhoto>'+endl;
			t += tab[8]+		'<div style="clear:both"><img src="<-BlogPhotoLink->" /></div>'+endl;
			t += tab[7]+	'</BlogPhoto>'+endl;	
			t += tab[7]+	pre+'<-BlogAbout->'+pst+endl;	
			t += tab[6]+'</BlogProfile>'+endl;
			break;
		default :
			if (global_lang == 'fa')
				kines_alert(translateIt('poshtibani profile'));
			else
				kines_alert('Your provider doesn\'t support the feature "BlogProfile".');			
	}
	return t;
}

function k__special_links(pre, pst) {
	var t ='';
	switch (global_prov) {
		case 'blogfa' :
			t += tab[6]+'<BlogLinksBlock>'+endl;
			t += tab[7]+	'<BlogLinks>'+endl;					
			t += tab[8]+		pre+'<a href="<-LinkUrl->"><-LinkTitle-></a>'+pst+'<br />'+endl;	
			t += tab[7]+	'</BlogLinks>'+endl;		
			t += tab[6]+'</BlogLinksBlock>'+endl;
			break;
		case 'persianblog' :
			t += tab[6]+'<#links#>'+endl;
			break;
		default :
			if (global_lang == 'fa')
				kines_alert(translateIt('poshtibani blog links'));
			else
				kines_alert('Your provider doesn\'t support the feature "BlogLinks".');			
	}	
	return t;
}

function k__special_categlist(pre, pst) {
	var t ='';
	switch (global_prov) {
		case 'blogfa' :
			t += tab[6]+'<BlogCategoriesBlock>'+endl;
			t += tab[7]+	'<BlogCategories>'+endl;					
			t += tab[8]+		pre+'<a href="<-CategoryLink->"><-CategoryName-></a>'+pst+'<br />'+endl;	
			t += tab[7]+	'</BlogCategories>'+endl;		
			t += tab[6]+'</BlogCategoriesBlock>'+endl;
			break;
		default :
			if (global_lang == 'fa')
				kines_alert(translateIt('poshtibani categ list'));
			else
				kines_alert('Your provider doesn\'t support the feature "BlogCategoryList".');			
	}		
	return t;
}

function k__special_linkdump(pre, pst) {
	var t ='';
	switch (global_prov) {
		case 'blogfa' :
			t += tab[6]+'<BlogLinkDumpBlock>'+endl;
			t += tab[7]+	'<BlogLinkDump>'+endl;					
			t += tab[8]+		pre+'<a href="<-LinkUrl->" title="<-LinkDescription->"><-LinkTitle-></a>'+pst+'<br />'+endl;	
			t += tab[7]+	'</BlogLinkDump>'+endl;	
			t += tab[7]+	'<br />'+endl;					
			t += tab[7]+	'<a href="javascript:void(0)" onclick ="OpenLD();">'+translateIt('archive e peyvandhaaye roozane')+'</a>'+endl;
			t += tab[6]+'</BlogLinkDumpBlock>'+endl;
			break;
		default :
			if (global_lang == 'fa')
				kines_alert(translateIt('poshtibani link dump'));
			else
				kines_alert('Your provider doesn\'t support the feature "BlogLinkDump".');			
	}		
	return t;
}

function k__special_authors() {
	var t ='';
	switch (global_prov) {
		case 'blogfa' :
			t += tab[6]+'<BlogAuthorsBlock>'+endl;
			t += tab[7]+	'<BlogAuthors>'+endl;					
			t += tab[8]+		'<a href="<-AuthorLink->"><-AuthorName-></a><br />'+endl;	
			t += tab[7]+	'</BlogAuthors>'+endl;		
			t += tab[6]+'</BlogAuthorsBlock>'+endl;
			break;
		default :
			if (global_lang == 'fa')
				kines_alert(translateIt('poshtibani authors list'));
			else
				kines_alert('Your provider doesn\'t support the feature "BlogAuthorsList".');			
	}		
	return t;
}

function k__SideBox(side, part) {
	var t = '';
	var ln = dgv('_'+side+'_linkNumForce_'+part);
	if (part > 0)
		t += tab[4]+'<div class="Sep"><div class="SepS"></div></div>'+endl;
	t += tab[4]+'<div class="Box">'+endl;
	t += tab[5]+	'<div class="Inner">'+endl;
	if (dgv('_'+side+'_TitleTxt_'+part) != '')
		t += tab[5]+	'<div class="Title">'+dgv('_'+side+'_TitleTxt_'+part)+'</div>'+endl;	
	for (var num=0; num<ln; num++) {
		var txt = dgv('_'+side+'_LinkTxt_'+part+'_'+num);
		var url = dgv('_'+side+'_LinkUrl_'+part+'_'+num);
		var ttl = dgv('_'+side+'_LinkTtl_'+part+'_'+num);
		var pre = dgv('_'+side+'_PreSurr_'+part);
		var pst = dgv('_'+side+'_PstSurr_'+part);
		if (pre.length && global_lang=='fa') pre = pre+'&#8206;';
		if (pst.length && global_lang=='fa') pst = '&#8206;'+pst;
		if (url == '$HOME')
			url = k__specialdest_home();
		else if (url == '$EMAIL')
			url = 'mailto:'+k__specialdest_email();
		else if (url == '$ARCHIVE')
			url = k__specialdest_archive();			
		else if (url == '$RSS')
			url = k__specialdest_rss();		
		else if (url == '$PSYCHO')
			url = 'http://psyc.horm.org/'+(global_lang=='fa'?'fa/':'')+'?PsycHodrama='+kinesoDrama;	
		else if (url == '$CUSTOM')
			url = k__specialdest_custom();
		if (txt == '$ARCHIVE')				t += k__special_archive(pre, pst);
		else 	if (txt == '$RECENT')		t += k__special_recent(pre, pst);
		else	if (txt == '$PROFILE')		t += k__special_profile(pre, pst);
		else	if (txt == '$LINKS')		t += k__special_links(pre, pst);
		else	if (txt == '$CATEGLIST')	t += k__special_categlist(pre, pst);
		else	if (txt == '$LINKDUMP')		t += k__special_linkdump(pre, pst);
		else	if (txt == '$AUTHORS')		t += k__special_authors(pre, pst);		
		else {
			if (url != '')
				t += tab[6]+pre+'<a href="'+url+'" title="'+ttl+'">'+txt+'</a>'+pst;
			else
				t += tab[6]+'<span>'+pre+txt+pst+'</span>';
			t += '<br />'+endl;	
		}
	}
	t += tab[5]+	'</div>'+endl;	
	t += tab[4]+'</div>'+endl;		
	return t;
}

function k__ColVal(side) {
	var t = '';		
	t += tab[2]+'<!-- =================== Side '+side+' Column =================== -->'+endl;
	t += tab[2]+'<div id="Side'+side+'Col" class="SideBar">'+endl;
	t += tab[3]+	'<div class="SideBarInner">'+endl;
	for (var i=0; i<dgv('_'+side+'_boxNumForce'); i++)
		t += k__SideBox(side, i);	
	t += tab[4]+		'<div class="Clearer"></div>'+endl;		
	t += tab[3]+	'</div>'+endl;
	t += tab[2]+'</div>'+endl;		
	t += endl;
	return t;
}

function kinesIt() {
	kinesoDrama = WritePsycHodrama();	
	SwitchDisplay('PsycHokinesisAlertDiv', 0);
	ChangeByInput('PsycHokinesisAlertInner', 'innerHTML', '');
	var t = new String();

	if (global_prov != 'blogfa')
			t += '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">'+endl;
	
	t += tab[0]+'<html>'+endl;
	t += tab[0]+'<head>'+endl;
	if (global_prov == 'blogger') {
		t += tab[1]+'<blogsitefeed>'+endl;
		t += tab[2]+'<link rel="alternate" type="application/rss+xml" title="RSS" href="<$BlogSiteFeedURL$>" />'+endl;
		t += tab[1]+'</blogsitefeed>'+endl;
		t += tab[1]+'<$BlogMetaData$>'+endl;	
	}
	t += tab[1]+'<meta http-equiv="content-type" content="text/html; charset=utf-8" />'+endl;
	t += tab[1]+'<meta http-equiv="expires" content="-1" />'+endl;
	if (dgv('WholeDescription') != '')
		t += tab[1]+'<meta name="description" content="'+dgv('WholeDescription')+'" />'+endl;
	if (dgv('WholeKeywords').substring(0, 7) != 'keyword')
	t += tab[1]+'<meta name="keywords" content="'+dgv('WholeKeywords')+'" />'+endl;
	var PageTitle = dgv('WholePageTitle');
	if (PageTitle == '$DEFAULT')
		PageTitle = k_prov_pagetitle();		
	t += tab[1]+'<title>'+fromUtf8ToEntity(PageTitle)+'</title>'+endl;
	t += tab[1]+'<base target="_blank" />'+endl;
	t += tab[1]+'<style type="text/css" media="all">'+endl;
	t += tab[2]+'body '+tab[3]+'{ '
		+ 'margin: 0px; '
		+ 'font-family: tahoma, sans-serif; '
		+ 'padding-bottom: 20px; '
		+ 'background: '+k_getColor('WholeBackColorEr')
			+ (dgChecked('WholeBackHasImage')?' url("'+dgv('WholeBackTextureEr')+'") '+dgv('WholeBackRepeat')+' '+dgv('WholeBackAttachment')+' '+dgv('WholeBackPosition'):'')+'; '
		+ 'font-size: 12px; '  
		+ 'color: '+ComplementTheColor(k_getColor('WholeBackColorEr'))+';'
		+ '}'+endl;
	t += tab[2]+'#Granny '+tab[2]+'{ width: '
		+ (dgChecked('WholeWidthUnitErPixels')?dgv('WholeWidthValueErPixels'):dgv('WholeWidthValueErPercent'))+'; '
		+ 'font-size: 0.88em; '		
		+ '}'+endl;
	t += tab[2]+'a '+tab[3]+'{ '
		+ 'text-decoration: none; '
		+ 'color: '+k_getColor('WholeLinkColorEr')+'; '
		+ '}'+endl;
	if (!global_isMinimized) {
		if (k_getColor('WholeLinkVisitEr') != 'transparent') {
			t += tab[2]+'a:visited '+tab[2]+'{ '
				+ 'color: '+k_getColor('WholeLinkVisitEr')+'; '
				+ '}'+endl;		
		}
		t += tab[2]+'a:hover '+tab[2]+'{ '
			+ 'color: '+k_getColor('WholeLinkHoverEr')+'; '
			+ '}'+endl;	
	}
	t += tab[2]+'a img '+tab[3]+'{ '
		+ 'border-width: 0px; '
		+ '}'+endl;
	t += tab[2]+'#HeaderCont '+tab[2]+'{ '
		+ 'clear: both; width: 100%; margin-top: '+dgv('HeaderTopMarginEr')+'; '
		+ 'background: '+k_getColor('HeaderBackColorEr')
		+ (dgChecked('HeaderBackIsTextureEr')?' url("'+dgv('HeaderBackTextureEr')+'") repeat':'')+'; '
		+ 'border: '+k_border('Header')+'; '
		+ '}'+endl;		
	t += tab[2]+'#HeaderInn '+tab[2]+'{ '
		+ ((dgChecked('HeaderBackIsImageEr'))?'':'margin-bottom: 4px; ')
		+ 'padding: '+dgv('HeaderVerPaddingEr')+' 0px; '	
		+ 'text-align: '+k_getAlign('HeaderPartText')+'; '
		+ (dgChecked('HeaderBackIsImageEr')?'':'font-family: '+k_getFFamily('HeaderPartText')+'; ')
		+ '}'+endl;		
	if (dgChecked('HeaderBackIsImageEr')) {
		t += tab[2]+'#HeaderImageCont'+tab[1]+'{ '
			+ 'text-align: center; '
			+ '}'+endl;
	}
	else {
		t += tab[2]+'#HeaderTitle '+tab[2]+'{ '
			+ 'font-size: '+k_getFontSize('TitleText')+'; '
			+ k_getFontEffects('TitleText')
			+ 'color: '+k_getColor('TitleColorEr')+'; '
			+ 'padding: 0px '+dgv('HeaderHorPaddingEr')+'; '
			+ (dgChecked('HeaderBackIsImageEr')?'':'direction: '+k_getDir('HeaderDirectionIsLTREr')+'; ')
			+ 'text-align: '+k_getAlign('HeaderPartText')+'; '			
			+ '}'+endl;
		t += tab[2]+'.TitleItemLink '+tab[2]+'{ '
			+ 'color: '+k_getColor('TitleColorEr')+'; '
			+ '}'+endl;
		if (dgv('SubTitleTextTextEr').length)
			t += tab[2]+'#HeaderSubTitle '+tab[1]+'{ '
				+ 'margin: 12px 0px; '
				+ 'font-size: '+k_getFontSize('SubTitleText')+'; '
				+ k_getFontEffects('SubTitleText')
				+ 'color: '+k_getColor('SubTitleColorEr')+'; '
				+ (dgChecked('HeaderBackIsImageEr')?'':'direction: '+k_getDir('HeaderDirectionIsLTREr')+'; ')
				+ 'text-align: '+k_getAlign('HeaderPartText')+'; '			
				+ 'padding: 0px '+dgv('HeaderHorPaddingEr')+'; '
				+ '}'+endl;			
	}
	
	t += tab[2]+'#MainAndSides '+tab[2]+'{ '
		+ 'clear: both; width: 100%; margin-top: '+(parseInt(dgv('HeaderTopMarginEr'))/2)+'px; '
		+ '}'+endl;		
	
	t += tab[2]+'#MainCol '+tab[2]+'{ '
		+ 'width: '+dgv('MainColWidthView')+'%; '
		+ 'background: '+k_tripleBg('MainColumns')+'; '
		+ 'float: '+(dgChecked('ColsNumberIsTwoR')?'right':'left')+'; '
		+ '}'+endl;
		
	t += tab[2]+'#MainColInner '+tab[2]+'{ '
		+ 'padding: '+(parseInt(dgv('MainSpcPaddingView'))/2)+'px '+dgv('MainSpcPaddingView')+'px; '
		+ 'border: '+k_border('MainColumns')+'; '		
		+ '}'+endl;

	var cellDir = dgChecked('CellDirDirectionIsLTREr')?'ltr':'rtl';
	var cellDirBegin = (cellDir == 'ltr')?'left':'right';
	var cellDirEnd   = (cellDir == 'ltr')?'right':'left';

	t += tab[2]+'.OnePost'+tab[2]+'{ '
		+ 'border: '+k_border('OnePost')+'; '
		+ 'font-family: '+k_getFFamily('OnePostMainDiv')+'; '
		+ 'direction: '+cellDir+'; '	
		+ 'background: '+k_tripleBg('PostBody')+'; '
		+ '}'+endl;
		
	t += tab[2]+'.OnePost .TopPost'+tab[1]+'{ '
		+ 'border-bottom: '+k_border('VerPost')+'; '		
		+ 'padding:  0px '+dgv('PostHeadFootHP')+'px '+dgv('PostHeadFootVP')+'px '+dgv('PostHeadFootHP')+'px; '
		+ 'background: '+k_tripleBg('OnePostTop')+'; '		
		+ '}'+endl;

	t += tab[2]+'.OnePost .MidPost'+tab[1]+'{ '
		+ 'padding: '+dgv('PostBodyVP')+'px '+dgv('PostBodyHP')+'px; '
		+ '}'+endl;

	t += tab[2]+'.OnePost .BotPost'+tab[1]+'{ '
		+ 'border-top: '+k_border('VerPost')+'; '		
		+ 'padding: '+dgv('PostHeadFootVP')+'px '+dgv('PostHeadFootHP')+'px; '
		+ 'background: '+k_tripleBg('OnePostBot')+'; '				
		+ '}'+endl;	

	t += tab[2]+'.OnePost .FullWidth'+tab[1]+'{ '
		+ 'width: 100%; '		
		+ '}'+endl;	

	t += tab[2]+'.DateHeaderPost'+tab[2]+'{ '
		+ 'font-size: '+k_getFontSize('OnePostDateTop')+'; '
		+ k_getFontEffects('OnePostDateTop')
		+ 'color: '+k_getColor('PostDateColorEr')+'; '
		+ 'padding-top: '+dgv('PostHeadFootVP')+'px; '
		+ 'text-align: '+k_getAlign('OnePostDateTop')+'; '
		+ (dgChecked('PostDateStandingIsAdjacent')?('width: 48%; float: '+cellDirEnd+'; '):'')
		+ '}'+endl;

	t += tab[2]+'.TitleHeaderPost'+tab[1]+'{ '
		+ 'font-size: '+k_getFontSize('OnePostTitle')+'; '
		+ k_getFontEffects('OnePostTitle')
		+ 'color: '+k_getColor('PostTitleColorEr')+'; '
		+ 'padding-top: '+dgv('PostHeadFootVP')+'px; '
		+ 'text-align: '+k_getAlign('OnePostTitle')+'; '
		+ 'direction: '+(dgChecked('OnePostTitleDirectionIsLTREr')?'ltr':'rtl')+'; '		
		+ (dgChecked('PostDateStandingIsAdjacent')?('width: 48%; float: '+cellDirBegin+'; '):'')		
		+ '}'+endl;

	t += tab[2]+'.TitleHeaderPost a'+tab[1]+'{ '
		+ 'color: '+k_getColor('PostTitleColorEr')+'; '
		+ '}'+endl;

	var ta = (dgChecked('OnePostBodyAlignIsNorm')?cellDirBegin:(dgChecked('OnePostBodyAlignIsCenter')?'center':'justify'));
	t += tab[2]+'.PostTextBody'+tab[2]+'{ '
		+ 'font-size: '+k_getFontSize('OnePostMidPart')+'; '
		+ k_getFontEffects('OnePostMidPart')
		+ 'color: '+k_getColor('PostBodyColorEr')+'; '
		+ 'text-align: '+ta+'; '
		+ 'line-height: '+k_getLineHeight('OnePostMidPart')+'; '		
		+ '}'+endl;		

	t += tab[2]+'.CmntFooterPost'+tab[2]+'{ '
		+ 'visibility: visible; '
		+ 'font-size: '+k_getFontSize('OnePostComments')+'; '
		+ k_getFontEffects('OnePostComments')
		+ 'color: '+k_getColor('PostCommentsColorEr')+'; '
		+ 'width: 48%; '
		+ 'float: '+cellDirEnd+'; '
		+ 'text-align: '+cellDirEnd+'; '
		+ '}'+endl;	

	t += tab[2]+'.CmntFooterPost a'+tab[1]+'{ '
		+ 'color: '+k_getColor('PostCommentsColorEr')+'; '
		+ '}'+endl;	

	if (!global_isMinimized) {	
		t += tab[2]+'.CmntFooterPost a:hover'+tab[1]+'{ '
			+ 'color: '+k_getColor('PostCommentsHoverColorEr')+'; '
			+ '}'+endl;	
	}
		
	t += tab[2]+'.PermFooterPost'+tab[2]+'{ '
		+ 'font-size: '+k_getFontSize('OnePostPermLink')+'; '
		+ k_getFontEffects('OnePostPermLink')
		+ 'color: '+k_getColor('PostPermLinkColorEr')+'; '
		+ 'width: 48%; '
		+ 'float: '+cellDirBegin+'; '
		+ 'text-align: '+cellDirBegin+'; '		
		+ '}'+endl;			

	t += tab[2]+'.PermFooterPost a'+tab[1]+'{ '
		+ 'color: '+k_getColor('PostPermLinkColorEr')+'; '
		+ '}'+endl;			

	t += tab[2]+'.Clearer'+tab[2]+'{ '
		+ 'clear: both; '
		+ 'width: 100%; '
		+ 'font-size: 0px; '
		+ 'height: 0px; '		
		+ '}'+endl;

	var isCol = dgChecked('PostSepDivBackIsColorEr');
	t += tab[2]+'.PostSep'+tab[2]+'{ '
		+ 'height: '+dgv('PostSepHeight')+'px; '
		+ ((isCol)?'':'background: '+k_tripleBg('PostSepDiv')+'; ')
		+ 'font-size: 1px '
		+ '}'+endl;		
		
	t += tab[2]+'.PostSepS'+tab[2]+'{ '
		+ 'height: '+parseInt(dgv('PostSepHeight'))/2+'px; '
		+ 'margin-bottom: '+parseInt(dgv('PostSepHeight'))/2+'px; '
		+ ((isCol)?'border-bottom: 1px solid '+k_getColor('PostSepDivBackColorEr')+'; ':'')
		+ 'font-size: 1px '
		+ '}'+endl;			
	
	if (! dgChecked('ColsNumberIsOne')) {
		t += tab[2]+'.SideBar'+tab[2]+'{ '
			+ 'background: '+k_tripleBg('SideColumns')+'; '
			+ '}'+endl;
	
		t += tab[2]+'.SideBarInner'+tab[2]+'{ '
			+ 'padding: '+dgv('SideSpcPaddingView')+'px '+dgv('SideSpcPaddingView')+'px; '
			+ 'border: '+k_border('SideColumns')+'; '
			+ '}'+endl;

		t += tab[2]+'.SideBarInner img'+tab[1]+'{ '
			+ 'margin-top: 2px; '
			+ '}'+endl;

		if (dgChecked('ColsNumberIsTwoR') || dgChecked('ColsNumberIsThree')) {
			t += tab[2]+'#SideLCol '+tab[2]+'{ '
				+ 'width: '+dg('SideLColumn').style.width+'; '
				+ 'float: left; '
				+ 'margin-right: '+dgv('SideSpcWidthView')+'%; '
				+ '}'+endl;
			t += k_sideFeatures('L');
		}
				
		if (dgChecked('ColsNumberIsTwoL') || dgChecked('ColsNumberIsThree')) {
			t += tab[2]+'#SideRCol '+tab[2]+'{ '
				+ 'width: '+dg('SideRColumn').style.width+'; '
				+ 'float: right; '
				+ 'margin-left: '+dgv('SideSpcWidthView')+'%; '
				+ '}'+endl;				
			t += k_sideFeatures('R');				
		}
	}
	
	t += tab[2]+'#ColClose '+tab[2]+'{ '
		+ 'clear: both; '
		+ 'width: 100%; '	
		+ 'font-size: 1px; '
		+ 'height: 1px; '
		+ 'margin-bottom: 20px; '
		+ '}'+endl;
	t += tab[2]+'#CopyRight '+tab[2]+'{ '
		+ 'width: 60%; '	
		+ 'border-top: 1px solid gray; '
		+ 'padding-top: 10px; '	
		+ 'line-height: 150%; '	
		+ (global_lang == 'fa'?'direction: rtl; ':'')
		+ '}'+endl;
		
	t += tab[2]+'/* This template generated by PsycHo [http://psyc.horm.org] on '+nowTheTime()+'. */'+endl;
						
	t += tab[1]+'</style>'+endl;
	t += k__commentingHeaderScript();
	t += tab[0]+'</head>'+endl;
	t += endl;
	t += tab[0]+'<body><center>'+endl;
	t += tab[1]+'<div id="Granny">'+endl;
	t += tab[2]+'<div id="HeaderCont"><div id="HeaderInn">'+endl;
	if (dgChecked('HeaderBackIsImageEr')) {
		t += tab[3]+'<div id="HeaderImageCont"><img src="'+dg('HeaderBackImageEr').value+'" /></div>'+endl;
	}
	else {
		var TitleTxt = dgv('TitleTextTextEr');
		var SubTitleTxt = dgv('SubTitleTextTextEr');
		if (TitleTxt == '$DEFAULT')
			TitleTxt = k_prov_blogtitle();
		if (SubTitleTxt == '$DEFAULT')
			SubTitleTxt = k_prov_blogdescription();		
		t += tab[3]+'<div class="Clearer"></div>'+endl;		
		t += tab[3]+'<div id="HeaderTitle">'+endl;
		t += tab[4]+	TitleTxt+endl;
		t += tab[3]+'</div>'+endl;
		if (SubTitleTxt.length) {
			t += tab[3]+'<div id="HeaderSubTitle">'+endl;
			t += tab[4]+	SubTitleTxt+endl;
			t += tab[3]+'</div>'+endl;
		}
		t += tab[3]+'<div class="Clearer"></div>'+endl;	
	}		
	t += tab[2]+'</div></div>'+endl;
	
	t += tab[2]+'<div id="MainAndSides">'+endl;
	if (dgChecked('ColsNumberIsThree'))
		t += k__ColVal('L');
	
	t += k__MainColVal();
	
	if (dgChecked('ColsNumberIsTwoR'))
		t += k__ColVal('L');
	if (dgChecked('ColsNumberIsTwoL') || dgChecked('ColsNumberIsThree'))		
		t += k__ColVal('R');
	t += tab[2]+'<div class="Clearer"></div>'+endl;		
	t += tab[2]+'<form name="MyPsycHicForm" method="post" action="http://psyc.horm.org'+((global_lang=='fa')?'/fa/':'/')+'">'+endl;
	t += tab[3]+	'<input name="PsycHodrama" value="'+kinesoDrama+'" type="hidden">'+endl;
	t += tab[2]+'</form>'+endl;
		var userRights = 'Some rights of this page\'s plain text stuffs are <a href="http://creativecommons.org/licenses/by/2.5/">reserved</a> for the author. <br />' ;
		var psychoRights = 'The <a target="_self" href="javascript: void(0);" onclick="javascript:MyPsycHicForm.submit();">Template</a> is generated via <a href="http://psyc.horm.org">PsycHo</a> and is <a href="http://creativecommons.org/licenses/by-nc/2.5/">Licensed</a>. <br />';
	if (global_lang == 'fa') {
		userRights = translateIt('rights for author');
		psychoRights = translateIt('rights for psycho');		
	}
	t += tab[2]+'</div>'+endl+endl;
	t += tab[2]+'<div id="ColClose"></div>'+endl;
	t += tab[2]+'<div id="CopyRight">'+endl;	
	t += tab[3]+	userRights+endl;
	t += tab[3]+	psychoRights+endl;	
	t += tab[2]+'</div>'+endl;		
	t += tab[1]+'</div>'+endl;
		t += tab[0]+'</center></body>'+endl;		
	t += tab[0]+'</html>'+endl;	
	dg('PsycHokinesisGetEr').value = t;
}