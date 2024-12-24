import { UsersService } from '../users/users.service';
import { User } from '../user.entity';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private usersService;
    constructor(usersService: UsersService);
    validate(payload: any): Promise<User>;
}
export {};
