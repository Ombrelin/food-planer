import { Controller,Request, Post,Response, UseGuards, Body, Get } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { User } from "../../model/user.model";
import { AuthService } from "../../services/auth/auth.service";
import { JwtAuthGuard } from "../../services/auth/jwt-auth.guard";

@Controller('api/auth')
export class AuthController {

  constructor(
    private authService: AuthService
  ) {
  }

  @Post("login")
  login(@Body() user: User): Promise<{ token: string }> {
    return this.authService.login(user);
  }

  @Post("register")
  register(): string {
    return "register";
  }

  @Get("profile")
  @UseGuards(JwtAuthGuard)
  getProfile(@Request() req): Promise<User> {
    return req.user;
  }
}
