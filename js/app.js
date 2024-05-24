class Card {
	//コンストラクタ
	constructor( type , num ){
		this.type = type;
		this.num = num;
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
let count = 0;

const eltrump=document.querySelector("#trump");
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
   		eltd.innerHTML = `${ cards[count].type}<br>${ cards[count].num}`;
		eltr.appendChild(eltd);
	   count++;
	}
	eltrump.appendChild(eltr);
}

//裏返し
function flip(count){
	const eltd = document.getElementById(count);
	eltd.style.color = 'green';
	eltd.innerHTML = '**<br>**';
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
