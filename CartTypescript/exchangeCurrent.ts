/*Class đổi thay đổi tiền tệ, vị trí đơn vị tiền*/


export class exchangeCurrent {
	public static toCurrent (money : number , unit : string, position : string ='left') : string
	{
		if(position == 'left') return money +' '+unit;
		else return unit+' '+money;
	}
}