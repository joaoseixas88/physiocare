export interface createUserDto{
	email: string
	password: string
	name: string
}

export interface updateUserDto{	
	id: string
	password?: string
	name?: string
}