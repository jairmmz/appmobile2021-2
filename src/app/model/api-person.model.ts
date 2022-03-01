import { ModelGeneric } from "../generic/model.generic";

export class ApiPersonModel extends ModelGeneric
{
	idPerson: string;
	firstName: string;
	surName: string;
	birthDate: string;
	gender: string;
	height: string;
	// arrayIdLanguage: Array<string>;
}
