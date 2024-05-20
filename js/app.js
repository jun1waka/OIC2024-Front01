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

for(let j = 0 ; j <= 3 ; j++){
	const eltr = document.createElement('tr');
	for(let i = 1 ; i <= 13; i++){
		const eltd = document.createElemnt('td');
	   console.log("i:"+i);
	   console.log("j:"+j);
	   cards[count] = new Card( card_type[j] , i );
	   if(j==1 || j==2){
	   		eltd.style.color = 'red';
	   		eltd.innerHTML = `${card_type[j]}<br>${i}`;
			HTML=HTML + `<p style="color:red"> ${card_type[j]}<br>${i}</p>`;
		}else{
	   		eltd.style.color = 'black';
	   		eltd.innerHTML = `${card_type[j]}<br>${i}`;
			HTML=HTML + `<p style="color:black"> ${card_type[j]}<br>${i}</p>`;
		}
		eltr.appendChild(eltd);
	   count++;
	}
	eltrump.appendChild(eltr);
}
//eltrump.innerHTML=HTML;
// eltrump.innerHTML=`${card_type[2]}<br>${card_num}`;

