class Card {
	//コンストラクタ
	constructor( type , num ){
		this.type = type;
		this.num = num;
	}
}
const cards=[];
let count = 0;

const eltrump=document.querySelector("#trump");
const card_type=['&spades;','&diams;','&hearts;','&clubs;']; 
let HTML="";

for(let i = 1 ; i <= 13; i++){
	for(let j = 0 ; j <= 3 ; j++){
	   console.log("i:"+i);
	   console.log("j:"+j);
	   cards[count] = new Card( card_type[j] , i );
	   if(j==1 || j==2){
			HTML=HTML + `<p style="color:red"> ${card_type[j]}<br>${i}</p>`;
		}else{
			HTML=HTML + `<p style="color:black"> ${card_type[j]}<br>${i}</p>`;
		}
	   count++;
	}
}
eltrump.innerHTML=HTML;
// eltrump.innerHTML=`${card_type[2]}<br>${card_num}`;

