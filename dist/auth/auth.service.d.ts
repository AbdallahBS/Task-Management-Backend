import { JwtService } from '@nestjs/jwt';
import { User } from '../user.entity';
export declare class AuthService {
    private jwtService;
    constructor(jwtService: JwtService);
    login(user: User): Promise<{
        access_token: string;
    }>;
}
