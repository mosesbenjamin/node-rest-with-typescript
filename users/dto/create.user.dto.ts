export interface CreateUserDto {
    id: string;
    email: string;
    password: string;
    firstname?: string;
    lastname?: string;
    permissionlevel?: number
}