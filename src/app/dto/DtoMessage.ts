export class DtoMessage
{
	type: string;
	listMessage: Array<string>;

	existsError(){
		return this.type=='error'; 
	}

}
