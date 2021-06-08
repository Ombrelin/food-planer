import { Controller, Post } from "@nestjs/common";

@Controller("api/auth")
export class AuthController {
  @Post("login")
  login(): string {
    return "login";
  }

  @Post("register")
  register(): string {
    return "register";
  }
}
