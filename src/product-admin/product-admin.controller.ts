import { Controller, Get, UseGuards } from '@nestjs/common';
import { ProductAdminService } from './product-admin.service';
import { AuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../roles/roles.guard';
import { Role } from '../roles/role.enum';
import { Roles } from '../roles/roles.decorator';

@Controller('admin/product-admin')
export class ProductAdminController {
  constructor(private readonly productAdminService: ProductAdminService) {}

  @Get()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  findAll() {
    return this.productAdminService.findAll();
  }
}
