import { AuthService } from './auth.service';
import { User } from '../user.entity';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(user: User): Promise<{
        access_token: string;
    }>;
}
