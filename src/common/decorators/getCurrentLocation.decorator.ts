import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const getCurrentLocation = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    // Assuming that the location information is available in the request object
    // Modify this according to how you are storing the location information in your application
    return request.location;
  },
);
