class Card {
	//コンストラクタ
	constructor( type , num ){
		this.type = type;
		this.num = num;
		this.isopen = true;
		this.ispair = false;
	}
	color(){
		switch(this.type){
			case '&diams;':
			case '&hearts;':
				return 'red';
			default:
				return 'black';
		}
	}
}
const cards=[];
let isfirst;
let issecond;
let count = 0;

const eltrump=document.querySelector("#trump");
const elhelp=document.getElementById('help');
const card_type=['&spades;','&diams;','&hearts;','&clubs;']; 

for(let j = 0 ; j <= 3 ; j++){
	for(let i = 1 ; i <= 13; i++){
	   console.log("i:"+i);
	   console.log("j:"+j);
	   cards[count] = new Card( card_type[j] , i );
	   count++;
	}
}

//shuffle
for(let i = 0;i < 52 ; i++){
	//入替処理
	let swp_idx=Math.trunc(Math.random()*52);
	let x = cards[i];
	cards[i] = cards[swp_idx];
	cards[swp_idx] = x;
}
for(let i = 0;i < 52 ; i++){
	//表示
	console.log(`i = ${i},type= ${cards[i].type},num= ${cards[i].num}`);
}
//テーブル表示
count = 0;
for(let j = 0 ; j <= 3 ; j++){
	const eltr = document.createElement('tr');
	for(let i = 1 ; i <= 13; i++){
		const eltd = document.createElement('td');
	   console.log("i:"+i);
	   console.log("j:"+j);
   		eltd.setAttribute('id',count);
   		eltd.style.color = cards[count].color();
   		eltd.style.width = '1.5em';
   		eltd.style.textAlign = 'center';
   		eltd.innerHTML = `${ cards[count].type}<br>${ cards[count].num}`;
   		eltd.addEventListener('click',function(){
   			let count = this.id;
   			console.log('click: id=' + count);
   			if(isfirst){
   				if(issecond){
   					return;
   				}else{
   					issecond =  { 'id' : count , 'card' :cards[count]};
   					flip(count);
   					//check
   					checkpair();
   					return;
   				}
   			}else{
   				isfirst = { 'id' : count , 'card' :cards[count]};
   				flip(count);
   			}
   			console.log('isfirst :'+ isfirst.id + 'card.num = ' + isfirst.card.num);
   			console.log('issecond :'+ issecond.id + 'card.num = ' + issecond.card.num);
   		});
		eltr.appendChild(eltd);
	   count++;
	}
	eltrump.appendChild(eltr);
}

//helpボタン
help.addEventListener('click',function(){
	let count=0;
	for(let j = 0 ; j <= 3 ; j++){
		for(let i = 1 ; i <= 13; i++){
			flip(count);
			count++;
		}
	}
	//ちょっと待ってから消す
	count = 0;
	setTimeout(function(){
		for(let j = 0 ; j <= 3 ; j++){
			for(let i = 1 ; i <= 13; i++){
				flip(count);
				count++;
			}
		}
	},3000);
	
});



//check
function checkpair(){
	if(isfirst.card.num == issecond.card.num){
		console.log('そろった！');
		isfirst.card.ispair = true;
		issecond.card.ispair = true;
		isfirst = false;
		issecond = false;
	}else{
		console.log('そろってない！');
		//ちょっと待ってから消す
		setTimeout(function(){
			flip(isfirst.id);
			flip(issecond.id);
			isfirst = false;
			issecond = false;
		},3000);
	}
}

//裏返し
function flip(count){
	console.log("flip: count=" + count);
	const eltd = document.getElementById(count);
	const card = cards[count];
	//ペアがそろったものは除外
	if(card.ispair){
		return;
	}
	
	if(card.isopen){
		eltd.style.color = 'green';
		eltd.innerHTML = '**<br>**';
		card.isopen = false;
	}else{
   		eltd.style.color = card.color();
   		eltd.innerHTML = `${ card.type}<br>${ card.num}`;
   		card.isopen = true;
   	}
}

count = 0;
for(let j = 0 ; j <= 3 ; j++){
	for(let i = 1 ; i <= 13; i++){
		flip(count);
		count++;
	}
}


//eltrump.innerHTML=HTML;
// eltrump.innerHTML=`${card_type[2]}<br>${card_num}`;
